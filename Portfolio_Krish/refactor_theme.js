import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const target = path.join(__dirname, 'components/portfolio-page.jsx');

let code = fs.readFileSync(target, 'utf-8');

// Replace standard colors making dark variants
code = code.replace(/bg-black(\/[0-9]+)?/g, 'bg-white$1 dark:bg-black$1');
code = code.replace(/text-white/g, 'text-slate-900 dark:text-white');
code = code.replace(/text-slate-300/g, 'text-slate-600 dark:text-slate-300');
code = code.replace(/text-slate-200/g, 'text-slate-700 dark:text-slate-200');
code = code.replace(/border-white\/([0-9]+)/g, 'border-slate-200 dark:border-white/$1');
code = code.replace(/shadow-\[inset_0_1px_0_rgba\(255,255,255/g, 'shadow-[inset_0_1px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255');
code = code.replace(/shadow-\[0_30px_80px_rgba\(0,0,0,0\.3\)\]/g, 'shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.3)]');
code = code.replace(/bg-white\/5/g, 'bg-white/80 dark:bg-white/5');
code = code.replace(/bg-white\/10(?!\])/g, 'bg-white/90 dark:bg-white/10');
code = code.replace(/bg-slate-950\/60/g, 'bg-slate-100/60 dark:bg-slate-950/60');
code = code.replace(/bg-slate-950\/80/g, 'bg-slate-200/80 dark:bg-slate-950/80');
code = code.replace(/text-slate-950/g, 'text-slate-100 dark:text-slate-950');

// SVG Gradients
code = code.replace(/stopColor="rgba\(45,212,191,0\.2\)"/g, 'stopColor="var(--p-line-start)"');
code = code.replace(/stopColor="rgba\(255,255,255,0\.15\)"/g, 'stopColor="var(--p-line-mid)"');
code = code.replace(/stopColor="rgba\(244,114,182,0\.25\)"/g, 'stopColor="var(--p-line-end)"');
code = code.replace(/stopColor="rgba\(255,255,255,0\.96\)"/g, 'stopColor="var(--p-glow-center)"');
code = code.replace(/stopColor="rgba\(244,114,182,0\.68\)"/g, 'stopColor="var(--p-glow-mid)"');
code = code.replace(/stopColor="rgba\(244,114,182,0\)"/g, 'stopColor="transparent"');

fs.writeFileSync(target, code);
console.log('Refactor complete!');
