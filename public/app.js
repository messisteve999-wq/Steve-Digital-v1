const WA = "237677045467";
const services = [
  {id:"affiches-publicitaires", title:"Création d'affiches publicitaires", icon:"🖼️", desc:"Affiches modernes et impactantes pour votre activité.", examples:["Affiche promotionnelle","Affiche commerciale","Affiche de produit","Affiche de marque","Affiche spéciale"]},
  {id:"affiches-evenementielles", title:"Affiches événementielles", icon:"🎟️", desc:"Visuels pour concerts, cérémonies, festivals et conférences.", examples:["Concert","Festival","Conférence","Soirée","Cérémonie"]},
  {id:"annonces-publicitaires", title:"Annonces publicitaires", icon:"📢", desc:"Annonces visuelles pour présenter vos produits et services.", examples:["Promotion","Recrutement","Vente","Offre spéciale","Annonce locale"]},
  {id:"support-graphique", title:"Support graphique", icon:"🎨", desc:"Logos, flyers, cartes de visite et autres supports visuels.", examples:["Logo","Carte de visite","Flyer","Bannière","Identité visuelle"]},
  {id:"cellules-animees", title:"Cellules animées", icon:"🎬", desc:"Créations animées pour donner vie à vos idées.", examples:["Personnage","Storytelling","Présentation","Publicité animée","Vidéo courte"]},
  {id:"sites-web", title:"Création de sites web", icon:"🌐", desc:"Sites vitrines, professionnels et pages web adaptées à vos besoins.", examples:["Site vitrine","Portfolio","Page entreprise","Landing page","Blog"]},
  {id:"serveurs", title:"Création de serveurs", icon:"🖥️", desc:"Serveurs sécurisés et performants pour vos projets.", examples:["Serveur web","API","Base de données","Cloud","Serveur applicatif"]},
  {id:"applications-mobiles", title:"Création d'applications mobiles", icon:"📱", desc:"Applications Android et iOS pensées pour votre activité.", examples:["Application métier","E-commerce","Gestion","Service client","Application personnalisée"]}
];

const grid = document.querySelector("#serviceGrid");
const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function renderGrid(){
  grid.innerHTML = services.map(s => `
    <article class="service-card">
      <div class="service-art"><span>${s.icon}</span><small>STEVE DIGITAL V2</small></div>
      <div class="service-body"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
      <a class="order-btn" href="service.html?service=${encodeURIComponent(s.id)}">Commandée <span>›</span></a></div>
    </article>`).join("");
}
renderGrid();

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(console.warn));