let DATA=null;
const $=s=>document.querySelector(s);
async function load(){if(DATA)return DATA;DATA=await fetch("assets/data.json").then(r=>r.json());return DATA}
function gameCard(g){return `<article class="card"><img loading="lazy" src="${g.image}" alt="${g.title}"><div class="info"><span class="tag">${g.genre}</span><h3>${g.title}</h3><span class="muted">${g.developer}</span></div></article>`}
function newsCard(n){return `<article class="news"><span class="tag">${n.cat}</span><h3>${n.title}</h3><p>${n.text}</p></article>`}
const news=[
{cat:"Rockstar",title:"GTA VI في صدارة الاهتمام",text:"كل ما يهم اللاعبين عن المشروع المنتظر وأحدث التفاصيل الرسمية."},
{cat:"PlayStation",title:"ألعاب جديدة تستحق المتابعة",text:"اختيارات LEVEL AR لأبرز التجارب القادمة والحالية."},
{cat:"Xbox",title:"أهم ألعاب Game Pass",text:"قائمة مختارة من الألعاب التي تستحق التجربة."},
{cat:"PC",title:"ألعاب الكمبيوتر",text:"أحدث الإصدارات والتجارب التي تستحق اهتمام اللاعبين."},
{cat:"Nintendo",title:"عالم Nintendo",text:"مغامرات وشخصيات وألعاب لا تتوقف."},
{cat:"Gaming",title:"دليل اللاعب العربي",text:"محتوى مختصر ومفيد بدون تعقيد."}];
document.addEventListener("DOMContentLoaded",async()=>{
 const d=await load();
 let e=$("#homeGames");if(e)e.innerHTML=d.games.slice(0,8).map(gameCard).join("");
 e=$("#gamesGrid");if(e){const render=()=>{let q=($("#gameSearch")?.value||"").toLowerCase();e.innerHTML=d.games.filter(g=>(g.title+" "+g.developer+" "+g.genre).toLowerCase().includes(q)).map(gameCard).join("")};render();$("#gameSearch").addEventListener("input",render)}
 e=$("#homeNews");if(e)e.innerHTML=news.slice(0,3).map(newsCard).join("");
 e=$("#newsGrid");if(e)e.innerHTML=news.map(newsCard).join("");
 e=$("#companyGrid");if(e)e.innerHTML=d.companies.map(c=>`<article class="company"><img loading="lazy" src="${c.image}" alt="${c.name}"><h3>${c.name}</h3><span class="muted">${c.parent}</span></article>`).join("");
 e=$("#videoGrid");if(e)e.innerHTML=d.videos.map((v,i)=>videoCard(v,i)).join("");
});
function videoCard(v,i){
 const src=v.id?`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`:`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(v.channel)}`;
 return `<article class="video"><div class="thumb"><iframe loading="lazy" src="${src}" title="${v.title}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen></iframe></div><div class="vinfo"><b>${v.title}</b><div class="tag">${v.channel}</div></div></article>`;
}