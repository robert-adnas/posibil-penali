export function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[ăÄ]/g, 'a')
    .replace(/[âÂ]/g, 'a')
    .replace(/[îÎ]/g, 'i')
    .replace(/[șȘşŞ]/g, 's')
    .replace(/[țȚţŢ]/g, 't')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
