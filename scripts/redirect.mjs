import {mkdir,writeFile} from 'node:fs/promises';
const target='https://jonfolsetech-ctrl.github.io/RythnmRootsRecords_Suburban-Kid/store/';
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RhythmRoots Records Store</title><link rel="canonical" href="${target}"><script>const oldBase='/RhythmRootRecords_Store/';const suffix=location.pathname.startsWith(oldBase)?location.pathname.slice(oldBase.length):'';location.replace(${JSON.stringify(target)}+suffix+location.search+location.hash);</script></head><body style="background:#0a0908;color:#f4eddf;font:16px system-ui;padding:2rem"><p>The store has moved into our main website.</p><a style="color:#d5ad58" href="${target}">Open RhythmRoots Records Store</a></body></html>`;
await mkdir('redirect-site',{recursive:true});
await writeFile('redirect-site/index.html',html);
await writeFile('redirect-site/404.html',html);
await writeFile('redirect-site/.nojekyll','');
