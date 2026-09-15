const games=[
["Grand Theft Auto VI","أكشن / عالم مفتوح","🔥"],["Red Dead Redemption 2","مغامرات / عالم مفتوح","🤠"],["The Witcher 3","RPG / مغامرات","⚔️"],["Elden Ring","RPG / أكشن","🗡️"],["Minecraft","بناء / بقاء","⛏️"],["Cyberpunk 2077","RPG / عالم مفتوح","🌃"],["God of War Ragnarök","أكشن / مغامرات","🪓"],["Resident Evil 4","رعب / أكشن","🧟"],["Forza Horizon 5","سباقات","🏎️"],["EA Sports FC 26","رياضة","⚽"],["Call of Duty","تصويب","🔫"],["Hogwarts Legacy","RPG / مغامرات","🪄"],["Marvel's Spider-Man 2","أكشن","🕷️"],["Black Myth: Wukong","RPG / أكشن","🐒"],["Baldur's Gate 3","RPG","🐉"],["The Last of Us Part II","أكشن / قصة","🍄"]
];
const news=[
["GTA VI","أخبار","كل ما نعرفه عن لعبة Rockstar المنتظرة وتفاصيل العالم المفتوح."],
["PlayStation","ألعاب","أبرز الألعاب القادمة على أجهزة PlayStation."],
["Xbox","تحديثات","أهم الإعلانات والتحديثات لعشاق Xbox."],
["Nintendo","أخبار","ألعاب Nintendo التي تستحق المتابعة."],
["PC Gaming","تقنية","أحدث أخبار الألعاب على الكمبيوتر."],
["Gaming","مجتمع","ألعاب جديدة تستحق أن تضعها في قائمة الانتظار."]
];
const companies=[["Rockstar Games","مطور وناشر","🎮"],["Sony Interactive Entertainment","PlayStation","◉"],["Microsoft Gaming","Xbox","X"],["Nintendo","ألعاب ومنصات","N"],["Electronic Arts","ألعاب رياضية وترفيه","EA"],["Ubisoft","ألعاب عالم مفتوح","U"],["CD PROJEKT RED","RPG","CD"],["Epic Games","محرك وألعاب","E"]];
const videos=[["GTA VI — Trailer","ترايلر","▶"],["The Witcher 3","Gameplay","▶"],["Elden Ring","Gameplay","▶"],["Forza Horizon 5","Trailer","▶"],["Minecraft","Gameplay","▶"],["Black Myth: Wukong","Trailer","▶"]];

function gameCard(g){return `<article class="game"><div class="cover">${g[2]}</div><div class="info"><span class="tag">${g[1]}</span><h3>${g[0]}</h3></div></article>`}
function newsCard(n){return `<article class="news"><span class="date">LEVEL AR • ${n[1]}</span><h3>${n[0]}</h3><p>${n[2]}</p></article>`}
function videoCard(v){return `<article class="video"><div class="thumb">${v[2]}</div><div><b>${v[0]}</b><div class="tag">${v[1]}</div></div></article>`}
function companyCard(c){return `<article class="company"><b>${c[2]}</b><h3>${c[0]}</h3><p>${c[1]}</p></article>`}
document.addEventListener("DOMContentLoaded",()=>{
 let el=document.getElementById("games"); if(el) el.innerHTML=games.slice(0,8).map(gameCard).join("");
 el=document.getElementById("news"); if(el) el.innerHTML=news.slice(0,3).map(newsCard).join("");
 el=document.getElementById("allgames"); if(el){const render=()=>{const q=(document.getElementById("search").value||"").toLowerCase();el.innerHTML=games.filter(g=>g[0].toLowerCase().includes(q)||g[1].toLowerCase().includes(q)).map(gameCard).join("")};render();document.getElementById("search").addEventListener("input",render)}
 el=document.getElementById("allnews"); if(el) el.innerHTML=news.map(newsCard).join("");
 el=document.getElementById("allvideos"); if(el) el.innerHTML=videos.map(videoCard).join("");
 el=document.getElementById("companies"); if(el) el.innerHTML=companies.map(companyCard).join("");
});