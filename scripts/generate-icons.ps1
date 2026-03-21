$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

function New-Brush([string]$hex, [int]$alpha = 255) {
  $color = [System.Drawing.ColorTranslator]::FromHtml($hex)
  return [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb($alpha, $color.R, $color.G, $color.B))
}

function New-Pen([string]$hex, [float]$width = 1, [int]$alpha = 255) {
  $color = [System.Drawing.ColorTranslator]::FromHtml($hex)
  return [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb($alpha, $color.R, $color.G, $color.B), $width)
}

$parchment = '#f5f0e8'
$rule = '#d4cabb'
$accent = '#8b2500'

Remove-Item 'public\apple-touch-icon.png', 'public\icon-512.png' -Force -ErrorAction SilentlyContinue

foreach ($size in @(180, 512)) {
  $icon = [System.Drawing.Bitmap]::new($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($icon)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.Clear([System.Drawing.ColorTranslator]::FromHtml($parchment))

  $borderPen = New-Pen $rule ([Math]::Max(4, [int]($size * 0.02)))
  $accentBrush = New-Brush $accent
  $parchmentBrush = New-Brush $parchment
  $ringPen = New-Pen $parchment ([Math]::Max(3, [int]($size * 0.028))) 210

  $borderMargin = [int]($size * 0.08)
  $barX = [int]($size * 0.18)
  $barY = [int]($size * 0.22)
  $barW = [int]($size * 0.08)
  $barH = [int]($size * 0.56)
  $circleSize = [int]($size * 0.5)
  $circleX = [int]($size * 0.37)
  $circleY = [int](($size - $circleSize) / 2)
  $ringInset = [int]($size * 0.07)

  $g.DrawRectangle($borderPen, $borderMargin, $borderMargin, $size - ($borderMargin * 2), $size - ($borderMargin * 2))
  $g.FillRectangle($accentBrush, $barX, $barY, $barW, $barH)
  $g.FillEllipse($accentBrush, $circleX, $circleY, $circleSize, $circleSize)
  $g.DrawEllipse($ringPen, $circleX + $ringInset, $circleY + $ringInset, $circleSize - ($ringInset * 2), $circleSize - ($ringInset * 2))

  $fontSize = [int]($size * 0.22)
  $font = [System.Drawing.Font]::new('Georgia', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $textRect = [System.Drawing.RectangleF]::new([single]$circleX, [single]($circleY - ($size * 0.01)), [single]$circleSize, [single]$circleSize)
  $g.DrawString('P', $font, $parchmentBrush, $textRect, $format)

  $path = if ($size -eq 180) { 'public\apple-touch-icon.png' } else { 'public\icon-512.png' }
  $icon.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)

  $format.Dispose()
  $font.Dispose()
  $ringPen.Dispose()
  $borderPen.Dispose()
  $accentBrush.Dispose()
  $parchmentBrush.Dispose()
  $g.Dispose()
  $icon.Dispose()
}
