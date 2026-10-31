#!/usr/bin/env node
// Convert screenshots to AVIF under public/screenshots/ and record their size.
//   pnpm run screenshot -- <image.png> [more images...] [--dir enable_nuget]
// Hagilight leaves images served from public/ untouched, so the AVIF files are shipped as-is.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const dirFlag = args.indexOf('--dir');
const subdir = dirFlag === -1 ? '' : args.splice(dirFlag, 2)[1];
if (args.length === 0) {
  console.error('Usage: pnpm run screenshot -- <image> [more images...] [--dir <subfolder>]');
  process.exit(1);
}

const sizesFile = path.join(root, 'src/data/screenshot-sizes.json');
const sizes = JSON.parse(fs.readFileSync(sizesFile, 'utf8'));
const outDir = path.join(root, 'public/screenshots', subdir);
fs.mkdirSync(outDir, { recursive: true });

for (const input of args) {
  const name = `${path.parse(input).name.replace(/\.+$/, '')}.avif`;
  const info = await sharp(input).resize({ width: 1600, withoutEnlargement: true }).avif({ quality: 60, effort: 6 }).toFile(path.join(outDir, name));
  sizes[path.posix.join(subdir, name)] = [info.width, info.height];
  console.log(`public/screenshots/${path.posix.join(subdir, name)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KiB`);
}

const sorted = Object.fromEntries(Object.entries(sizes).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(sizesFile, `${JSON.stringify(sorted, null, 2)}\n`);
