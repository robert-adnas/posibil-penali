import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, './og-image.html');
const outPath = path.resolve(__dirname, '../public/og-image.png');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 2 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

await new Promise(r => setTimeout(r, 500));

const el = await page.$('.og');
await el.screenshot({ path: outPath });

await browser.close();
console.log('✓ public/og-image.png generated');
