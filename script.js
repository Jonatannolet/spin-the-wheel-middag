const countries = [
  {
    name: "ITALIA",
    flag: "🇮🇹",
    color: "#009246",
    tagline: "MAMMA MIA, LET'S-A EAT",
    dishes: "Pasta carbonara (UTEN fløte ellers gråter nonna), pizza napoletana med ekte bufala-mozzarella, risotto alla milanese, osso buco, tiramisù, og 600 forskjellige pastaformer.",
    info: "Italia har 20 regioner og hver er overbevist om at DERES mat er den ene sanne. 'Spaghetti bolognese' finnes ikke i Italia — det heter tagliatelle al ragù, og det serveres ALDRI med spaghetti. Å brekke spaghettien før koking regnes som et krigsforbrytelse.",
    meme: "'You put CREAM in the carbonara?? THIS! IS! RAW!! My nonna just woke up in her grave to slap you with a wooden spoon!' — Hver italiener som har Instagram"
  },
  {
    name: "SPANIA",
    flag: "🇪🇸",
    color: "#c60b1e",
    tagline: "¡OLÉ! TAPAS TIME",
    dishes: "Paella valenciana (IKKE med chorizo, Jamie Oliver), gazpacho, jamón ibérico bellota (4 år tørket gris), patatas bravas, tortilla española, croquetas, og churros med varm sjokolade.",
    info: "Spanjolene spiser lunsj kl 15 og middag kl 22. Siesta er hellig. Tapas-ordet kommer av 'tapa' = lokk — små tallerkener som dekket glasset mot fluer. Sangria er for turister; lokale drikker tinto de verano.",
    meme: "Jamie Oliver la chorizo i paellaen sin i 2016. Spania erklærte ham en nasjonal fiende. 8 år senere er han fortsatt ikke tilgitt. Valencia har bokstavelig talt et DNA-register for ekte paella."
  },
  {
    name: "TYRKIA",
    flag: "🇹🇷",
    color: "#e30a17",
    tagline: "KEBAB SO GOOD IT'LL SLAP YOU",
    dishes: "Döner kebab (oppfunnet i Berlin, men ideen er tyrkisk — ikke start krigen), iskender, meze-plater, baklava, künefe (smelta ost + søtt brød = himmel), lahmacun, og Turkish delight.",
    info: "Tyrkisk te drikkes i små tulipanglass — 3-10 kopper om dagen er helt normalt. En tyrkisk frokost (kahvaltı) er 15 små tallerkener og tar 2 timer. Grand Bazaar i Istanbul har 4000 butikker. Ja, fire tusen.",
    meme: "Tyrkisk iskrem-selger: *gir deg isen* *tar den tilbake* *snurrer den rundt hodet ditt* *gir den til en annen turist* *gir deg tom kjegle* *du ler nervøst* *han ler ikke* *du betaler uansett*"
  },
  {
    name: "FRANKRIKE",
    flag: "🇫🇷",
    color: "#0055a4",
    tagline: "SACRÉ BLEU, IT'S PERFEKT",
    dishes: "Coq au vin, bœuf bourguignon, croissant, crème brûlée, escargot i hvitløkssmør, ratatouille, confit de canard, og over 400 typer ost (De Gaulle: 'Hvordan styrer man et land med 246 oster?').",
    info: "Baguett-prisen i Frankrike er lovregulert siden 1790. Fransk middag tar minimum 2 timer og inkluderer aldri saus fra boks — det er straffbart ved blikk. Lunsjpause i 2 timer med vin er en menneskerett.",
    meme: "'Non non non, zat is not 'ow you 'old ze knife. Zis is a DISGRACE.' — Hver fransk kokk før de heller en liter smør oppå en potet og kaller det haute cuisine"
  },
  {
    name: "INDIA",
    flag: "🇮🇳",
    color: "#ff9933",
    tagline: "CURRY NIGHT FEVER",
    dishes: "Butter chicken, biryani (ris-krigen mellom Hyderabad og Kolkata pågår), tandoori, dosa, samosa, masala chai, gulab jamun, naan, og minst 47 forskjellige krydder du aldri har hørt om.",
    info: "India har 28 delstater og hver har sitt eget kjøkken — sørindisk er grunnleggende et helt annet land enn nordindisk. 'Curry' er ikke et indisk ord, det er britenes rot. Mer enn 40% av India er vegetarianere — verdens største plantebaserte befolkning.",
    meme: "Gordon Ramsay: 'It's a BIT spicy!' Indisk bestemor: *smaker* *legger til tre mer chilier* 'Dette er bhut-jolokia-nivå, beta. For babyer. Skulle du prøve ghost pepper?' *gordon svetter på tv*"
  },
  {
    name: "JAPAN",
    flag: "🇯🇵",
    color: "#bc002d",
    tagline: "ITADAKIMASU OR DIE",
    dishes: "Sushi (nigiri, ikke California roll), ramen (tonkotsu, shoyu, miso, shio), tempura, tonkatsu, okonomiyaki, takoyaki, wagyu A5 (så mørt at det smelter før det når tennene dine), matcha-alt.",
    info: "Å blande wasabi i soya hos en ordentlig sushi-mester er fornærmende — mesteren har allerede krydret hver bit perfekt. Høy slurping av ramen = kompliment. Tipping er aggressivt uhøflig. Tokyo har flere Michelin-stjerner enn Paris.",
    meme: "Deg: 'One California roll please, extra cream cheese?' Sushi-mester i Ginza, 40 år i bransjen: *legger fra seg kniven sakte* *ser ut vinduet* *tenker på sin mor* 'Kudasai... forlat restauranten.'"
  },
  {
    name: "USA",
    flag: "🇺🇸",
    color: "#b22234",
    tagline: "BIGGER. GREASIER. AMERICAN.",
    dishes: "Cheeseburger, BBQ brisket (Texas slåss mot Kansas City mot Memphis mot Carolina), buffalo wings, mac & cheese, apple pie, Philly cheesesteak, gumbo, clam chowder, donuts med BACON oppå.",
    info: "En gjennomsnittlig porsjon er stor nok til tre voksne. USA har over 350 typer frokostblanding. BBQ-krigen mellom regionene er REELL — å si 'Carolina BBQ er best' i Texas kan føre til eksil. Bbq = smoking hours/days, ikke grilling.",
    meme: "Turist: 'Is this gluten-free? And vegan? And keto? And low-FODMAP?' Texas pitmaster med kappmaskin: *stirrer inn i sjelen din i 7 lange sekunder* 'Son. This is BRISKET. The only question is: with pickles or without.'"
  },
  {
    name: "VIETNAM",
    flag: "🇻🇳",
    color: "#da251d",
    tagline: "PHO REAL? PHO REAL.",
    dishes: "Phở bò (buljong som er kokt i 24 timer), bánh mì (fransk baguette møter vietnamesiske urter = magi), bún chả (Obamas favoritt i Hanoi med Bourdain), gỏi cuốn, cà phê sữa đá, bánh xèo.",
    info: "Phở uttales 'fuh' — ikke 'foh' eller 'fo'. Vietnamesisk kaffe er filtrert gjennom en phin og servert med kondensmelk — gi fra deg kaffeidentiteten din. Hanoi har 'train street' hvor et tog kjører 1 meter fra middagsbordet ditt.",
    meme: "Deg på turist-café: 'One foh, please.' Vietnamesisk bestefar som har solgt phở i 60 år: *dyp, sliten sukk* *stirrer på krokken av universet* 'Det er F... U... H. Fuh. Bli med barnebarnet mitt, han underviser lingvistikk.'"
  },
  {
    name: "ARGENTINA",
    flag: "🇦🇷",
    color: "#74acdf",
    tagline: "MEAT. SWEET. COMPLETE.",
    dishes: "Asado (IKKE BBQ — ASADO, respekt), bife de chorizo, empanadas (hver provins har sin form), chimichurri, milanesa napolitana, choripán, dulce de leche i ALT, alfajores, mate.",
    info: "Asado er religion. 'Asador' (grillmester) er helligere enn prest. Argentina spiser 40 kg storfekjøtt per person per år. Mate-te: én bombilla deles rundt — ikke tørk av munnstykket (dødsfornærmelse), si 'gracias' kun når du ikke vil ha mer.",
    meme: "Argentina vant VM. Feiring: asado. Messi scoret: asado. Regnvær: asado innendørs. Mandag: asado. Begravelse: asado (til ære for avdøde). Ny hund: asado. Alt er asado. Spør ikke, bare bring vin."
  },
  {
    name: "MAROCCO",
    flag: "🇲🇦",
    color: "#c1272d",
    tagline: "TAGINE DREAMS",
    dishes: "Tagine med lam, svisker og mandler, couscous fredag (en plikt), harira (suppen som bryter Ramadan), pastilla (søt-salt duekake dekket av melis — ja, virkelig), b'stilla, og mynte-te helt fra stratosfæren.",
    info: "Mynte-te er 'marokkansk whisky'. Å avslå tre kopper er uhøflig. Den første er 'bitter som livet', den andre 'sterk som kjærlighet', den tredje 'søt som døden'. Krydderbutikkene i Marrakech-medinaen lukter så intenst at du får flashbacks du ikke har opplevd.",
    meme: "Marokkansk vert heller te fra 1 meters høyde ned i et lite glass uten å søle. Du: 'WOW.' Han: '*hever kannen til 1.5 meter*' Du: 'STOPP.' Han: '*kontakter Cirque du Soleil*' Du: 'La meg bare drikke teen.' Han: '*tre nye kopper*'"
  },
  {
    name: "ETIOPIA",
    flag: "🇪🇹",
    color: "#078930",
    tagline: "INJERA = SPISBART FAT",
    dishes: "Injera (syrlig, svampet teff-brød — både tallerken OG redskap), doro wat (kylling-gryte som tar 3 timer å lage), tibs, kitfo (rått biffkjøtt med krydder), shiro, berbere-krydder, og kaffeseremonien.",
    info: "Du spiser KUN med høyre hånd. Injera fungerer som både tallerken, brød og spiseredskap. Kaffe ble oppdaget i Etiopia (legenden: en geit som ble uvanlig våken). Kaffeseremonien tar 2-3 timer med 3 runder: abol, tona, baraka. Gursha = å mate gjestene med hendene = kjærlighetsbevis.",
    meme: "Vestlig turist: 'Excuse me, may I have a fork please?' Etiopisk bestemor: *smiler mildt* *legger et stort stykke ekstra injera i hånden din* 'Hendene dine er gaffelen, barnet mitt. Gud ga deg ti. Gaffelen har fire. Gud slår industrien.'"
  }
];

const wheelSvg = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const spinAgainBtn = document.getElementById('spinAgain');

const SVG_NS = 'http://www.w3.org/2000/svg';
const N = countries.length;
const SEG = 360 / N;
const CX = 250, CY = 250, R = 245;

function polar(cx, cy, r, deg) {
  const rad = (deg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function buildWheel() {
  // Outer background disc
  const bg = document.createElementNS(SVG_NS, 'circle');
  bg.setAttribute('cx', CX);
  bg.setAttribute('cy', CY);
  bg.setAttribute('r', R);
  bg.setAttribute('fill', '#0a0606');
  wheelSvg.appendChild(bg);

  // Gradient defs
  const defs = document.createElementNS(SVG_NS, 'defs');
  countries.forEach((c, i) => {
    const grad = document.createElementNS(SVG_NS, 'radialGradient');
    grad.setAttribute('id', `grad-${i}`);
    grad.setAttribute('cx', '50%');
    grad.setAttribute('cy', '50%');
    grad.setAttribute('r', '70%');
    grad.innerHTML = `
      <stop offset="0%" stop-color="${lighten(c.color, 18)}" />
      <stop offset="70%" stop-color="${c.color}" />
      <stop offset="100%" stop-color="${darken(c.color, 20)}" />`;
    defs.appendChild(grad);
  });
  wheelSvg.appendChild(defs);

  countries.forEach((c, i) => {
    const start = i * SEG - SEG / 2;
    const end = start + SEG;
    const p1 = polar(CX, CY, R, start);
    const p2 = polar(CX, CY, R, end);
    const largeArc = SEG > 180 ? 1 : 0;

    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d',
      `M ${CX} ${CY} L ${p1.x} ${p1.y} A ${R} ${R} 0 ${largeArc} 1 ${p2.x} ${p2.y} Z`);
    path.setAttribute('fill', `url(#grad-${i})`);
    path.setAttribute('stroke', '#ffd700');
    path.setAttribute('stroke-width', '2');
    path.classList.add('segment');
    path.addEventListener('click', () => { if (!isSpinning) spin(); });
    wheelSvg.appendChild(path);

    const mid = start + SEG / 2;
    const normMid = ((mid % 360) + 360) % 360;
    const isBottom = normMid > 90 && normMid < 270;

    // Curved arc path for country name (readable on all segments)
    const textRadius = R * 0.82;
    const arcStart = isBottom ? start + SEG - 2 : start + 2;
    const arcEnd   = isBottom ? start + 2       : start + SEG - 2;
    const ap1 = polar(CX, CY, textRadius, arcStart);
    const ap2 = polar(CX, CY, textRadius, arcEnd);
    const sweep = isBottom ? 0 : 1;
    const arcPath = document.createElementNS(SVG_NS, 'path');
    arcPath.setAttribute('id', `arc-${i}`);
    arcPath.setAttribute('d', `M ${ap1.x} ${ap1.y} A ${textRadius} ${textRadius} 0 0 ${sweep} ${ap2.x} ${ap2.y}`);
    arcPath.setAttribute('fill', 'none');
    defs.appendChild(arcPath);

    // Flag (always upright — no rotation)
    const flagPos = polar(CX, CY, R * 0.5, mid);
    const flag = document.createElementNS(SVG_NS, 'text');
    flag.setAttribute('x', flagPos.x);
    flag.setAttribute('y', flagPos.y);
    flag.setAttribute('text-anchor', 'middle');
    flag.setAttribute('dominant-baseline', 'central');
    flag.setAttribute('font-size', '38');
    flag.textContent = c.flag;
    wheelSvg.appendChild(flag);

    // Country name along the arc
    const nameText = document.createElementNS(SVG_NS, 'text');
    nameText.setAttribute('font-size', '22');
    nameText.setAttribute('font-weight', '700');
    nameText.setAttribute('fill', '#ffffff');
    nameText.setAttribute('stroke', '#000');
    nameText.setAttribute('stroke-width', '0.8');
    nameText.setAttribute('paint-order', 'stroke');
    nameText.setAttribute('letter-spacing', '1');
    const tp = document.createElementNS(SVG_NS, 'textPath');
    tp.setAttribute('href', `#arc-${i}`);
    tp.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#arc-${i}`);
    tp.setAttribute('startOffset', '50%');
    tp.setAttribute('text-anchor', 'middle');
    tp.textContent = c.name;
    nameText.appendChild(tp);
    wheelSvg.appendChild(nameText);
  });

  // Decorative bulbs around the ring
  for (let i = 0; i < 36; i++) {
    const angle = i * 10;
    const pos = polar(CX, CY, R - 10, angle);
    const bulb = document.createElementNS(SVG_NS, 'circle');
    bulb.setAttribute('cx', pos.x);
    bulb.setAttribute('cy', pos.y);
    bulb.setAttribute('r', 5);
    bulb.setAttribute('fill', i % 2 === 0 ? '#ffd700' : '#fff8e1');
    bulb.setAttribute('opacity', '0.95');
    wheelSvg.appendChild(bulb);
  }

  // Center disc cover
  const centerDisc = document.createElementNS(SVG_NS, 'circle');
  centerDisc.setAttribute('cx', CX);
  centerDisc.setAttribute('cy', CY);
  centerDisc.setAttribute('r', 60);
  centerDisc.setAttribute('fill', '#0a0606');
  centerDisc.setAttribute('stroke', '#ffd700');
  centerDisc.setAttribute('stroke-width', '3');
  wheelSvg.appendChild(centerDisc);
}

function lighten(hex, amt) {
  const { r, g, b } = hexToRgb(hex);
  const f = amt / 100;
  return rgbToHex(
    Math.min(255, Math.round(r + (255 - r) * f)),
    Math.min(255, Math.round(g + (255 - g) * f)),
    Math.min(255, Math.round(b + (255 - b) * f))
  );
}
function darken(hex, amt) {
  const { r, g, b } = hexToRgb(hex);
  const f = 1 - amt / 100;
  return rgbToHex(Math.round(r * f), Math.round(g * f), Math.round(b * f));
}
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0,2), 16), g: parseInt(h.slice(2,4), 16), b: parseInt(h.slice(4,6), 16) };
}
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

let currentRotation = 0;
let isSpinning = false;

function spin() {
  if (isSpinning) return;
  const targetIndex = Math.floor(Math.random() * N);
  spinToIndex(targetIndex);
}

function spinToIndex(targetIndex) {
  if (isSpinning) return;
  isSpinning = true;
  spinBtn.disabled = true;

  const extraSpins = 6 + Math.floor(Math.random() * 4);
  const segmentCenter = targetIndex * SEG;
  const jitter = (Math.random() - 0.5) * (SEG * 0.7);
  const currentMod = ((currentRotation % 360) + 360) % 360;
  const desiredMod = ((-segmentCenter + jitter) % 360 + 360) % 360;
  let delta = desiredMod - currentMod;
  if (delta <= 0) delta += 360;
  currentRotation += extraSpins * 360 + delta;

  wheelSvg.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    showCountry(countries[targetIndex]);
    launchConfetti();
    isSpinning = false;
    spinBtn.disabled = false;
  }, 5600);
}

let savedScrollY = 0;

function showCountry(country) {
  document.getElementById('modalFlag').textContent = country.flag;
  document.getElementById('modalCountry').textContent = country.name;
  document.getElementById('modalTagline').textContent = country.tagline;
  document.getElementById('modalDishes').textContent = country.dishes;
  document.getElementById('modalInfo').textContent = country.info;
  document.getElementById('modalMeme').textContent = country.meme;
  savedScrollY = window.scrollY;
  document.body.style.top = `-${savedScrollY}px`;
  document.body.classList.add('modal-open');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function hideModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  window.scrollTo(0, savedScrollY);
}

function launchConfetti() {
  const colors = ['#dc143c', '#ffd700', '#ff5722', '#ffffff', '#ff9800', '#ff1744'];
  const isMobile = window.innerWidth < 600;
  const count = isMobile ? 40 : 80;
  for (let i = 0; i < count; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.width = (6 + Math.random() * 10) + 'px';
    c.style.height = (14 + Math.random() * 14) + 'px';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    c.style.borderRadius = Math.random() > 0.7 ? '50%' : '2px';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

spinBtn.addEventListener('click', spin);
closeModalBtn.addEventListener('click', hideModal);
spinAgainBtn.addEventListener('click', () => {
  hideModal();
  setTimeout(spin, 350);
});
modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideModal();
  if (e.key === ' ' && !isSpinning && !modal.classList.contains('active')) {
    e.preventDefault();
    spin();
  }
});

buildWheel();
