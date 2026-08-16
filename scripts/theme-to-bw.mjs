import fs from 'fs';
import path from 'path';

const files = [
  'BombaHelicoidal.tsx',
  'BombasDosadorasDiafragma.tsx',
  'BombasDosadorasPistao.tsx',
  'BombasPeristalticas.tsx',
  'Contato.tsx',
  'Produtos.tsx',
  'QuemSomos.tsx',
  'SerieVBC.tsx',
  'SerieVBF.tsx',
  'SerieVBL.tsx',
  'SerieVBP.tsx',
  'SerieVET.tsx',
  'SerieVSM.tsx',
  'Servicos.tsx',
  'SkidsDosagem.tsx',
  'TrabalheConosco.tsx',
];

const dir = path.resolve('src', 'pages');

function transformContent(str) {
  let out = str;
  out = out.replace(/bg-brand-card/g, 'bg-white');
  out = out.replace(/bg-brand-bg/g, 'bg-white');
  out = out.replace(/border-brand-border/g, 'border-gray-200');
  out = out.replace(/text-brand-muted/g, 'text-gray-600');
  out = out.replace(/text-brand-text/g, 'text-black');
  out = out.replace(/hover:bg-zinc-800/g, 'hover:bg-gray-100');
  out = out.replace(/hover:text-white/g, 'hover:text-brand-orange-hover');

  // Ensure every top-level <section ...> tag in this (non-hero) portion
  // explicitly carries bg-white + text-black, even if it had no bg- class
  // of its own (i.e. it was relying on inheriting the dark page background).
  out = out.replace(/<section([^>]*?)className="([^"]*)"/g, (match, pre, cls) => {
    let newCls = cls;
    if (!/\bbg-white\b/.test(newCls) && !/\bbg-/.test(newCls)) {
      newCls = `${newCls} bg-white`;
    }
    if (!/\btext-black\b/.test(newCls)) {
      newCls = `${newCls} text-black`;
    }
    return `<section${pre}className="${newCls}"`;
  });

  return out;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const parts = content.split(/(?=<section)/);
  if (parts.length < 3) {
    console.log(`AVISO: ${file} tem ${parts.length} partes (esperado >=3) — pulando.`);
    continue;
  }

  // parts[0] = preamble (before hero), parts[1] = hero section (unchanged)
  // parts[2..] = content sections to transform
  const preamble = parts[0];
  const hero = parts[1];
  const rest = parts.slice(2).join('');

  const transformedRest = transformContent(rest);
  const newContent = preamble + hero + transformedRest;

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`OK: ${file} (${parts.length - 1} secoes, 1 hero preservada, ${parts.length - 2} convertidas)`);
}
