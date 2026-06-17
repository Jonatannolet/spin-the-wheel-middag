/* ============================================================
   SPIN THE WHEEL — 6 STJERNES MIDDAG  ·  INSANE EDITION
   Vanilla JS. No deps. Web Audio synth. Emoji FX.
   ============================================================ */

const countries = [
  {
    name: "ITALIA",
    flag: "🇮🇹",
    color: "#009246",
    tagline: "MAMMA MIA, LET'S-A EAT",
    dishes: "Pasta carbonara (UTEN fløte ellers gråter nonna), pizza napoletana med ekte bufala-mozzarella, risotto alla milanese, osso buco, tiramisù, og 600 forskjellige pastaformer.",
    info: "Italia har 20 regioner og hver er overbevist om at DERES mat er den ene sanne. 'Spaghetti bolognese' finnes ikke i Italia — det heter tagliatelle al ragù, og det serveres ALDRI med spaghetti. Å brekke spaghettien før koking regnes som et krigsforbrytelse.",
    meme: "'You put CREAM in the carbonara?? THIS! IS! RAW!! My nonna just woke up in her grave to slap you with a wooden spoon!' — Hver italiener som har Instagram",
    spice: 2, difficulty: 3, drink: "🍷 Chianti / Aperol Spritz",
    foodEmojis: ["🍕", "🍝", "🧀", "🍷", "🍅", "🌿"],
    dishList: [
      { emoji: "🍝", navn: "Carbonara (uten fløte!)" },
      { emoji: "🍕", navn: "Pizza Napoletana" },
      { emoji: "🍚", navn: "Risotto alla Milanese" },
      { emoji: "🥩", navn: "Osso Buco" },
      { emoji: "🍮", navn: "Tiramisù" },
      { emoji: "🍝", navn: "Cacio e Pepe" },
      { emoji: "🧆", navn: "Arancini" },
      { emoji: "🥟", navn: "Ravioli al Ragù" }
    ]
  },
  {
    name: "SPANIA",
    flag: "🇪🇸",
    color: "#c60b1e",
    tagline: "¡OLÉ! TAPAS TIME",
    dishes: "Paella valenciana (IKKE med chorizo, Jamie Oliver), gazpacho, jamón ibérico bellota (4 år tørket gris), patatas bravas, tortilla española, croquetas, og churros med varm sjokolade.",
    info: "Spanjolene spiser lunsj kl 15 og middag kl 22. Siesta er hellig. Tapas-ordet kommer av 'tapa' = lokk — små tallerkener som dekket glasset mot fluer. Sangria er for turister; lokale drikker tinto de verano.",
    meme: "Jamie Oliver la chorizo i paellaen sin i 2016. Spania erklærte ham en nasjonal fiende. 8 år senere er han fortsatt ikke tilgitt. Valencia har bokstavelig talt et DNA-register for ekte paella.",
    spice: 2, difficulty: 3, drink: "🍷 Tinto de Verano / Cava",
    foodEmojis: ["🥘", "🍤", "🍷", "🫒", "🍅", "🥖"],
    dishList: [
      { emoji: "🥘", navn: "Paella Valenciana" },
      { emoji: "🍅", navn: "Gazpacho" },
      { emoji: "🥓", navn: "Jamón Ibérico" },
      { emoji: "🥔", navn: "Patatas Bravas" },
      { emoji: "🍳", navn: "Tortilla Española" },
      { emoji: "🧆", navn: "Croquetas" },
      { emoji: "🍫", navn: "Churros con Chocolate" }
    ]
  },
  {
    name: "FRANKRIKE",
    flag: "🇫🇷",
    color: "#0055a4",
    tagline: "SACRÉ BLEU, IT'S PERFEKT",
    dishes: "Coq au vin, bœuf bourguignon, croissant, crème brûlée, escargot i hvitløkssmør, ratatouille, confit de canard, og over 400 typer ost (De Gaulle: 'Hvordan styrer man et land med 246 oster?').",
    info: "Baguett-prisen i Frankrike er lovregulert siden 1790. Fransk middag tar minimum 2 timer og inkluderer aldri saus fra boks — det er straffbart ved blikk. Lunsjpause i 2 timer med vin er en menneskerett.",
    meme: "'Non non non, zat is not 'ow you 'old ze knife. Zis is a DISGRACE.' — Hver fransk kokk før de heller en liter smør oppå en potet og kaller det haute cuisine",
    spice: 1, difficulty: 5, drink: "🍷 Bordeaux / Champagne",
    foodEmojis: ["🥐", "🧀", "🍷", "🥖", "🐌", "🧈"],
    dishList: [
      { emoji: "🍗", navn: "Coq au Vin" },
      { emoji: "🥩", navn: "Bœuf Bourguignon" },
      { emoji: "🥐", navn: "Croissant" },
      { emoji: "🍮", navn: "Crème Brûlée" },
      { emoji: "🐌", navn: "Escargot" },
      { emoji: "🍆", navn: "Ratatouille" },
      { emoji: "🦆", navn: "Confit de Canard" }
    ]
  },
  {
    name: "INDIA",
    flag: "🇮🇳",
    color: "#ff9933",
    tagline: "CURRY NIGHT FEVER",
    dishes: "Butter chicken, biryani (ris-krigen mellom Hyderabad og Kolkata pågår), tandoori, dosa, samosa, masala chai, gulab jamun, naan, og minst 47 forskjellige krydder du aldri har hørt om.",
    info: "India har 28 delstater og hver har sitt eget kjøkken — sørindisk er grunnleggende et helt annet land enn nordindisk. 'Curry' er ikke et indisk ord, det er britenes rot. Mer enn 40% av India er vegetarianere — verdens største plantebaserte befolkning.",
    meme: "Gordon Ramsay: 'It's a BIT spicy!' Indisk bestemor: *smaker* *legger til tre mer chilier* 'Dette er bhut-jolokia-nivå, beta. For babyer. Skulle du prøve ghost pepper?' *gordon svetter på tv*",
    spice: 5, difficulty: 4, drink: "🥭 Mango Lassi / Masala Chai",
    foodEmojis: ["🍛", "🌶️", "🍚", "🫓", "🧄", "🔥"],
    dishList: [
      { emoji: "🍛", navn: "Butter Chicken" },
      { emoji: "🍚", navn: "Biryani" },
      { emoji: "🍗", navn: "Tandoori Chicken" },
      { emoji: "🥞", navn: "Masala Dosa" },
      { emoji: "🥟", navn: "Samosa" },
      { emoji: "🫓", navn: "Garlic Naan" },
      { emoji: "🍮", navn: "Gulab Jamun" }
    ]
  },
  {
    name: "USA",
    flag: "🇺🇸",
    color: "#b22234",
    tagline: "BIGGER. GREASIER. AMERICAN.",
    dishes: "Cheeseburger, BBQ brisket (Texas slåss mot Kansas City mot Memphis mot Carolina), buffalo wings, mac & cheese, apple pie, Philly cheesesteak, gumbo, clam chowder, donuts med BACON oppå.",
    info: "En gjennomsnittlig porsjon er stor nok til tre voksne. USA har over 350 typer frokostblanding. BBQ-krigen mellom regionene er REELL — å si 'Carolina BBQ er best' i Texas kan føre til eksil. Bbq = smoking hours/days, ikke grilling.",
    meme: "Turist: 'Is this gluten-free? And vegan? And keto? And low-FODMAP?' Texas pitmaster med kappmaskin: *stirrer inn i sjelen din i 7 lange sekunder* 'Son. This is BRISKET. The only question is: with pickles or without.'",
    spice: 2, difficulty: 2, drink: "🥤 Root Beer / Craft IPA",
    foodEmojis: ["🍔", "🍟", "🥓", "🌭", "🍩", "🥧"],
    dishList: [
      { emoji: "🍔", navn: "Cheeseburger" },
      { emoji: "🥩", navn: "BBQ Brisket" },
      { emoji: "🍗", navn: "Buffalo Wings" },
      { emoji: "🧀", navn: "Mac & Cheese" },
      { emoji: "🥧", navn: "Apple Pie" },
      { emoji: "🥖", navn: "Philly Cheesesteak" },
      { emoji: "🍩", navn: "Bacon Donut" }
    ]
  },
  {
    name: "VIETNAM",
    flag: "🇻🇳",
    color: "#da251d",
    tagline: "PHO REAL? PHO REAL.",
    dishes: "Phở bò (buljong som er kokt i 24 timer), bánh mì (fransk baguette møter vietnamesiske urter = magi), bún chả (Obamas favoritt i Hanoi med Bourdain), gỏi cuốn, cà phê sữa đá, bánh xèo.",
    info: "Phở uttales 'fuh' — ikke 'foh' eller 'fo'. Vietnamesisk kaffe er filtrert gjennom en phin og servert med kondensmelk — gi fra deg kaffeidentiteten din. Hanoi har 'train street' hvor et tog kjører 1 meter fra middagsbordet ditt.",
    meme: "Deg på turist-café: 'One foh, please.' Vietnamesisk bestefar som har solgt phở i 60 år: *dyp, sliten sukk* *stirrer på krokken av universet* 'Det er F... U... H. Fuh. Bli med barnebarnet mitt, han underviser lingvistikk.'",
    spice: 3, difficulty: 3, drink: "☕ Cà phê sữa đá / Bia Hơi",
    foodEmojis: ["🍜", "🥖", "🌿", "🍤", "☕", "🌶️"],
    dishList: [
      { emoji: "🍜", navn: "Phở Bò" },
      { emoji: "🥖", navn: "Bánh Mì" },
      { emoji: "🍢", navn: "Bún Chả" },
      { emoji: "🌯", navn: "Gỏi Cuốn (vårruller)" },
      { emoji: "☕", navn: "Cà Phê Sữa Đá" },
      { emoji: "🥞", navn: "Bánh Xèo" }
    ]
  },
  {
    name: "ARGENTINA",
    flag: "🇦🇷",
    color: "#74acdf",
    tagline: "MEAT. SWEET. COMPLETE.",
    dishes: "Asado (IKKE BBQ — ASADO, respekt), bife de chorizo, empanadas (hver provins har sin form), chimichurri, milanesa napolitana, choripán, dulce de leche i ALT, alfajores, mate.",
    info: "Asado er religion. 'Asador' (grillmester) er helligere enn prest. Argentina spiser 40 kg storfekjøtt per person per år. Mate-te: én bombilla deles rundt — ikke tørk av munnstykket (dødsfornærmelse), si 'gracias' kun når du ikke vil ha mer.",
    meme: "Argentina vant VM. Feiring: asado. Messi scoret: asado. Regnvær: asado innendørs. Mandag: asado. Begravelse: asado (til ære for avdøde). Ny hund: asado. Alt er asado. Spør ikke, bare bring vin.",
    spice: 1, difficulty: 3, drink: "🍷 Malbec / Mate",
    foodEmojis: ["🥩", "🔥", "🍷", "🥟", "🧉", "🌿"],
    dishList: [
      { emoji: "🥩", navn: "Asado" },
      { emoji: "🥩", navn: "Bife de Chorizo" },
      { emoji: "🥟", navn: "Empanadas" },
      { emoji: "🌿", navn: "Chimichurri-biff" },
      { emoji: "🍖", navn: "Milanesa Napolitana" },
      { emoji: "🌭", navn: "Choripán" },
      { emoji: "🍪", navn: "Alfajores" }
    ]
  },
  {
    name: "MAROCCO",
    flag: "🇲🇦",
    color: "#c1272d",
    tagline: "TAGINE DREAMS",
    dishes: "Tagine med lam, svisker og mandler, couscous fredag (en plikt), harira (suppen som bryter Ramadan), pastilla (søt-salt duekake dekket av melis — ja, virkelig), b'stilla, og mynte-te helt fra stratosfæren.",
    info: "Mynte-te er 'marokkansk whisky'. Å avslå tre kopper er uhøflig. Den første er 'bitter som livet', den andre 'sterk som kjærlighet', den tredje 'søt som døden'. Krydderbutikkene i Marrakech-medinaen lukter så intenst at du får flashbacks du ikke har opplevd.",
    meme: "Marokkansk vert heller te fra 1 meters høyde ned i et lite glass uten å søle. Du: 'WOW.' Han: '*hever kannen til 1.5 meter*' Du: 'STOPP.' Han: '*kontakter Cirque du Soleil*' Du: 'La meg bare drikke teen.' Han: '*tre nye kopper*'",
    spice: 3, difficulty: 4, drink: "🍵 Mynte-te (fra stratosfæren)",
    foodEmojis: ["🍲", "🫓", "🌙", "🍵", "🌰", "🍋"],
    dishList: [
      { emoji: "🍲", navn: "Lam-tagine" },
      { emoji: "🍚", navn: "Couscous" },
      { emoji: "🥣", navn: "Harira" },
      { emoji: "🥧", navn: "Pastilla" },
      { emoji: "🫓", navn: "Khobz + dips" },
      { emoji: "🍵", navn: "Mynte-te + bakverk" }
    ]
  },
  {
    name: "ETIOPIA",
    flag: "🇪🇹",
    color: "#078930",
    tagline: "INJERA = SPISBART FAT",
    dishes: "Injera (syrlig, svampet teff-brød — både tallerken OG redskap), doro wat (kylling-gryte som tar 3 timer å lage), tibs, kitfo (rått biffkjøtt med krydder), shiro, berbere-krydder, og kaffeseremonien.",
    info: "Du spiser KUN med høyre hånd. Injera fungerer som både tallerken, brød og spiseredskap. Kaffe ble oppdaget i Etiopia (legenden: en geit som ble uvanlig våken). Kaffeseremonien tar 2-3 timer med 3 runder: abol, tona, baraka. Gursha = å mate gjestene med hendene = kjærlighetsbevis.",
    meme: "Vestlig turist: 'Excuse me, may I have a fork please?' Etiopisk bestemor: *smiler mildt* *legger et stort stykke ekstra injera i hånden din* 'Hendene dine er gaffelen, barnet mitt. Gud ga deg ti. Gaffelen har fire. Gud slår industrien.'",
    spice: 4, difficulty: 4, drink: "☕ Buna (seremoni-kaffe)",
    foodEmojis: ["🫓", "🍗", "🌶️", "☕", "🔥", "🥘"],
    dishList: [
      { emoji: "🫓", navn: "Injera" },
      { emoji: "🍗", navn: "Doro Wat" },
      { emoji: "🥩", navn: "Tibs" },
      { emoji: "🥩", navn: "Kitfo" },
      { emoji: "🥣", navn: "Shiro" },
      { emoji: "☕", navn: "Kaffeseremoni" }
    ]
  }
];

const WILDCARD = {
  name: "CHEF'S WILDCARD",
  flag: "🌟",
  color: "#ffd700",
  wildcard: true
};

// Wheel = countries + one gold wildcard segment.
const segments = [...countries, WILDCARD];
const WILDCARD_INDEX = countries.length;

/* ---------- DOM refs ---------- */
const wheelSvg     = document.getElementById('wheel');
const spinBtn      = document.getElementById('spinBtn');
const modal        = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const spinAgainBtn = document.getElementById('spinAgain');
const soundToggle  = document.getElementById('soundToggle');
const shareBtn     = document.getElementById('shareBtn');
const drumroll     = document.getElementById('drumroll');
const toastHost    = document.getElementById('toastHost');
const pointerEl    = document.querySelector('.pointer');
const wheelShell   = document.querySelector('.wheel-shell');

const SVG_NS = 'http://www.w3.org/2000/svg';
const N   = segments.length;
const SEG = 360 / N;
const CX = 250, CY = 250, R = 245;
const SPIN_MS = 5600;

function polar(cx, cy, r, deg) {
  const rad = (deg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ============================================================
   WEB AUDIO — synthesized, zero files
   ============================================================ */
let audioCtx = null;
let muted = localStorage.getItem('stw-muted') === '1';

function initAudio() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) { audioCtx = null; }
}
function resumeAudio() {
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function tone(freq, dur, type = 'sine', gain = 0.2, when = 0) {
  if (muted || !audioCtx) return;
  const t = audioCtx.currentTime + when;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}
function playTick() {
  if (muted || !audioCtx) return;
  tone(1100 + Math.random() * 250, 0.035, 'square', 0.07);
}
function playClick() { tone(620, 0.05, 'triangle', 0.12); }
function playWhoosh() {
  if (muted || !audioCtx) return;
  const t = audioCtx.currentTime;
  const len = 0.5;
  const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * len, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const bp = audioCtx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.setValueAtTime(900, t);
  bp.frequency.exponentialRampToValueAtTime(300, t + len);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.25, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  src.connect(bp).connect(g).connect(audioCtx.destination);
  src.start(t);
}
function playWin(jackpot = false) {
  if (muted || !audioCtx) return;
  const notes = jackpot
    ? [523, 659, 784, 1047, 1319, 1568]
    : [523, 659, 784, 1047];
  notes.forEach((f, i) => tone(f, 0.32, 'triangle', 0.18, i * 0.09));
  if (jackpot) tone(2093, 0.5, 'sine', 0.12, notes.length * 0.09);
}

function buzz(pattern) {
  if (navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) {} }
}

function updateSoundUI() {
  if (!soundToggle) return;
  soundToggle.textContent = muted ? '🔇' : '🔊';
  soundToggle.setAttribute('aria-label', muted ? 'Skru på lyd' : 'Skru av lyd');
  soundToggle.classList.toggle('muted', muted);
}

/* ============================================================
   WHEEL BUILD
   ============================================================ */
function buildWheel() {
  const bg = document.createElementNS(SVG_NS, 'circle');
  bg.setAttribute('cx', CX); bg.setAttribute('cy', CY); bg.setAttribute('r', R);
  bg.setAttribute('fill', '#0a0606');
  wheelSvg.appendChild(bg);

  const defs = document.createElementNS(SVG_NS, 'defs');
  segments.forEach((c, i) => {
    const grad = document.createElementNS(SVG_NS, 'radialGradient');
    grad.setAttribute('id', `grad-${i}`);
    grad.setAttribute('cx', '50%'); grad.setAttribute('cy', '50%'); grad.setAttribute('r', '70%');
    grad.innerHTML = `
      <stop offset="0%" stop-color="${lighten(c.color, 18)}" />
      <stop offset="70%" stop-color="${c.color}" />
      <stop offset="100%" stop-color="${darken(c.color, 20)}" />`;
    defs.appendChild(grad);
  });
  wheelSvg.appendChild(defs);

  segments.forEach((c, i) => {
    const start = i * SEG - SEG / 2;
    const p1 = polar(CX, CY, R, start);
    const p2 = polar(CX, CY, R, start + SEG);

    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', `M ${CX} ${CY} L ${p1.x} ${p1.y} A ${R} ${R} 0 0 1 ${p2.x} ${p2.y} Z`);
    path.setAttribute('fill', `url(#grad-${i})`);
    path.setAttribute('stroke', '#ffd700');
    path.setAttribute('stroke-width', c.wildcard ? '3.5' : '2');
    path.classList.add('segment');
    if (c.wildcard) path.classList.add('segment-wild');
    path.addEventListener('click', () => { if (!isSpinning) spin(); });
    wheelSvg.appendChild(path);

    const mid = start + SEG / 2;
    const normMid = ((mid % 360) + 360) % 360;
    const isBottom = normMid > 90 && normMid < 270;

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

    // Flag
    const flagPos = polar(CX, CY, R * 0.5, mid);
    const flag = document.createElementNS(SVG_NS, 'text');
    flag.setAttribute('x', flagPos.x); flag.setAttribute('y', flagPos.y);
    flag.setAttribute('text-anchor', 'middle');
    flag.setAttribute('dominant-baseline', 'central');
    flag.setAttribute('font-size', c.wildcard ? '34' : '34');
    flag.textContent = c.flag;
    if (c.wildcard) flag.setAttribute('class', 'wild-flag');
    wheelSvg.appendChild(flag);

    // Name along arc
    const nameText = document.createElementNS(SVG_NS, 'text');
    nameText.setAttribute('font-size', c.wildcard ? '16' : '20');
    nameText.setAttribute('font-weight', '700');
    nameText.setAttribute('fill', c.wildcard ? '#3a2400' : '#ffffff');
    nameText.setAttribute('stroke', c.wildcard ? '#fff3b0' : '#000');
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

  for (let i = 0; i < 36; i++) {
    const pos = polar(CX, CY, R - 10, i * 10);
    const bulb = document.createElementNS(SVG_NS, 'circle');
    bulb.setAttribute('cx', pos.x); bulb.setAttribute('cy', pos.y); bulb.setAttribute('r', 5);
    bulb.setAttribute('fill', i % 2 === 0 ? '#ffd700' : '#fff8e1');
    bulb.setAttribute('opacity', '0.95');
    wheelSvg.appendChild(bulb);
  }

  const centerDisc = document.createElementNS(SVG_NS, 'circle');
  centerDisc.setAttribute('cx', CX); centerDisc.setAttribute('cy', CY); centerDisc.setAttribute('r', 60);
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

/* ============================================================
   SPIN
   ============================================================ */
let currentRotation = 0;
let isSpinning = false;
let lastCountryIndex = -1;
let lastResult = null;        // { country, dish, wildcard }
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function spin() {
  if (isSpinning) return;
  initAudio(); resumeAudio();
  playWhoosh();
  playClick();

  let targetIndex;
  // ~10% jackpot
  if (Math.random() < 0.10) {
    targetIndex = WILDCARD_INDEX;
  } else {
    do {
      targetIndex = Math.floor(Math.random() * countries.length);
    } while (countries.length > 1 && targetIndex === lastCountryIndex);
  }
  spinToIndex(targetIndex);
}

function spinToIndex(targetIndex) {
  if (isSpinning) return;
  isSpinning = true;
  spinBtn.disabled = true;
  triggerFocus();

  const extraSpins = 6 + Math.floor(Math.random() * 4);
  const segmentCenter = targetIndex * SEG;
  const jitter = (Math.random() - 0.5) * (SEG * 0.7);
  const currentMod = ((currentRotation % 360) + 360) % 360;
  const desiredMod = ((-segmentCenter + jitter) % 360 + 360) % 360;
  let delta = desiredMod - currentMod;
  if (delta <= 0) delta += 360;
  currentRotation += extraSpins * 360 + delta;

  wheelSvg.style.transform = `rotate(${currentRotation}deg)`;

  scheduleTicks();

  // Drumroll near the end
  const drumAt = SPIN_MS - 950;
  setTimeout(() => { if (isSpinning) startDrumroll(); }, drumAt);

  setTimeout(() => {
    stopDrumroll();
    clearFocus();
    const seg = segments[targetIndex];
    if (seg.wildcard) {
      revealWildcard();
    } else {
      lastCountryIndex = targetIndex;
      revealCountry(countries[targetIndex]);
    }
    isSpinning = false;
    spinBtn.disabled = false;
  }, SPIN_MS);
}

// Tick schedule: dense early, sparse late (ease-out feel).
function scheduleTicks() {
  let t = 120;
  let interval = 55;
  while (t < SPIN_MS - 200) {
    setTimeout(() => {
      playTick();
      buzz(8);
      if (pointerEl && !reduceMotion) {
        pointerEl.classList.remove('tick');
        void pointerEl.offsetWidth;
        pointerEl.classList.add('tick');
      }
    }, t);
    t += interval;
    interval *= 1.085;   // slow down
  }
}

/* ---------- Focus / cinematic ---------- */
function triggerFocus() {
  document.body.classList.add('is-spinning');
}
function clearFocus() {
  document.body.classList.remove('is-spinning');
}

/* ---------- Drumroll ---------- */
function startDrumroll() {
  if (!drumroll) return;
  drumroll.classList.add('active');
}
function stopDrumroll() {
  if (!drumroll) return;
  drumroll.classList.remove('active');
}

/* ============================================================
   REVEAL
   ============================================================ */
let savedScrollY = 0;

function revealCountry(country) {
  const dish = country.dishList[Math.floor(Math.random() * country.dishList.length)];
  lastResult = { country, dish, wildcard: false };
  openResultModal(country, dish, false);
  launchRain(country.foodEmojis);
  shakeScreen();
  flameBurst();
  playWin(false);
  buzz([0, 40, 60, 120]);
  recordSpin(country, dish, false);
}

function revealWildcard() {
  const src = countries[Math.floor(Math.random() * countries.length)];
  const dish = src.dishList[Math.floor(Math.random() * src.dishList.length)];
  lastResult = { country: src, dish, wildcard: true };
  openResultModal(src, dish, true);
  launchRain(['🌟', '💰', '👨‍🍳', '⭐', ...src.foodEmojis], true);
  shakeScreen();
  flameBurst(true);
  playWin(true);
  buzz([0, 50, 40, 50, 40, 120]);
  recordSpin(src, dish, true);
}

function openResultModal(country, dish, wildcard) {
  document.getElementById('modalFlag').textContent = wildcard ? '🌟' : country.flag;
  document.getElementById('modalCountry').textContent = wildcard ? country.name : country.name;
  document.getElementById('modalTagline').textContent = country.tagline;
  document.getElementById('modalDishes').textContent = country.dishes;
  document.getElementById('modalInfo').textContent = country.info;
  document.getElementById('modalMeme').textContent = country.meme;

  // Wildcard banner
  const wildBanner = document.getElementById('wildcardBanner');
  if (wildBanner) wildBanner.style.display = wildcard ? 'block' : 'none';
  const banner = document.querySelector('.modal-banner');
  if (banner) banner.textContent = wildcard ? '🌟 CHEF\'S WILDCARD 🌟' : '★ CHEF\'S CHOICE ★';

  // Origin line for wildcard
  const origin = document.getElementById('wildOrigin');
  if (origin) {
    origin.style.display = wildcard ? 'block' : 'none';
    origin.textContent = `Tilfeldig trukket fra ${country.flag} ${country.name}`;
  }

  renderMeters(country);

  modal.classList.toggle('wild', wildcard);

  savedScrollY = window.scrollY;
  document.body.style.top = `-${savedScrollY}px`;
  document.body.classList.add('modal-open');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  animateSlot(country, dish, wildcard);
}

// Slot machine cycling through dishes, landing on the chosen one.
function animateSlot(country, finalDish, wildcard) {
  const slotEmoji = document.getElementById('slotEmoji');
  const slotName  = document.getElementById('slotName');
  if (!slotEmoji || !slotName) return;

  const pool = wildcard
    ? countries.flatMap(c => c.dishList)
    : country.dishList;

  if (reduceMotion) {
    slotEmoji.textContent = finalDish.emoji;
    slotName.textContent = finalDish.navn;
    document.getElementById('dishSlot')?.classList.add('locked');
    return;
  }

  const slot = document.getElementById('dishSlot');
  slot?.classList.remove('locked');

  let t = 0, interval = 60, elapsed = 0;
  const total = 1300;
  function step() {
    const d = pool[Math.floor(Math.random() * pool.length)];
    slotEmoji.textContent = d.emoji;
    slotName.textContent = d.navn;
    playTick();
    elapsed += interval;
    interval *= 1.12;
    if (elapsed < total) {
      setTimeout(step, interval);
    } else {
      slotEmoji.textContent = finalDish.emoji;
      slotName.textContent = finalDish.navn;
      slot?.classList.add('locked');
      tone(880, 0.18, 'triangle', 0.2);
      buzz(40);
    }
  }
  step();
}

function renderMeters(country) {
  const spice = country.spice || 0;
  const diff = country.difficulty || 0;
  const sEl = document.getElementById('spiceMeter');
  const dEl = document.getElementById('diffMeter');
  const drinkEl = document.getElementById('drinkPair');
  if (sEl) sEl.innerHTML = meterRow('🌶️', spice, 5);
  if (dEl) dEl.innerHTML = meterRow('🔪', diff, 5);
  if (drinkEl) drinkEl.textContent = country.drink || '';
}
function meterRow(icon, value, max) {
  let s = '';
  for (let i = 0; i < max; i++) {
    s += `<span class="pip ${i < value ? 'on' : 'off'}" style="animation-delay:${i * 70}ms">${icon}</span>`;
  }
  return s;
}

function hideModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  window.scrollTo(0, savedScrollY);
}

/* ============================================================
   FX — rain, shake, flames
   ============================================================ */
function launchRain(emojis, jackpot = false) {
  const colors = ['#dc143c', '#ffd700', '#ff5722', '#ffffff', '#ff9800', '#ff1744'];
  const isMobile = window.innerWidth < 600;
  const total = (reduceMotion ? 14 : (isMobile ? 46 : 90));
  for (let i = 0; i < total; i++) {
    const c = document.createElement('div');
    const useEmoji = emojis && emojis.length && Math.random() > 0.42;
    if (useEmoji) {
      c.className = 'confetti emoji-bit';
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      c.style.fontSize = (18 + Math.random() * 22) + 'px';
    } else {
      c.className = 'confetti';
      c.style.background = jackpot
        ? (Math.random() > 0.5 ? '#ffd700' : '#fff3b0')
        : colors[Math.floor(Math.random() * colors.length)];
      c.style.width = (6 + Math.random() * 10) + 'px';
      c.style.height = (14 + Math.random() * 14) + 'px';
      c.style.borderRadius = Math.random() > 0.7 ? '50%' : '2px';
    }
    c.style.left = Math.random() * 100 + 'vw';
    c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5200);
  }
}

function shakeScreen() {
  if (reduceMotion) return;
  document.body.classList.remove('shake');
  void document.body.offsetWidth;
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 700);
}

function flameBurst(jackpot = false) {
  if (reduceMotion || !wheelShell) return;
  const rect = wheelShell.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const icons = jackpot ? ['🔥', '🌟', '✨', '💥'] : ['🔥', '✨', '🔥', '💥'];
  const count = window.innerWidth < 600 ? 14 : 22;
  for (let i = 0; i < count; i++) {
    const f = document.createElement('div');
    f.className = 'flame-burst';
    f.textContent = icons[Math.floor(Math.random() * icons.length)];
    const angle = (i / count) * Math.PI * 2;
    const dist = 120 + Math.random() * 160;
    f.style.left = cx + 'px';
    f.style.top = cy + 'px';
    f.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    f.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    f.style.fontSize = (20 + Math.random() * 24) + 'px';
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1100);
  }
}

/* ============================================================
   HISTORY / PASSPORT (localStorage)
   ============================================================ */
const HKEY = 'stw-history';
function loadHistory() {
  try {
    const raw = localStorage.getItem(HKEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { total: 0, streakName: null, streakCount: 0, visited: {}, menu: [], achievements: [] };
}
function saveHistory(h) {
  try { localStorage.setItem(HKEY, JSON.stringify(h)); } catch (e) {}
}
let history = loadHistory();

function recordSpin(country, dish, wildcard) {
  history.total += 1;
  if (!wildcard) {
    history.visited[country.name] = (history.visited[country.name] || 0) + 1;
    if (history.streakName === country.name) history.streakCount += 1;
    else { history.streakName = country.name; history.streakCount = 1; }
  }
  history.menu.unshift({ flag: country.flag, emoji: dish.emoji, navn: dish.navn, country: country.name, wildcard });
  history.menu = history.menu.slice(0, 8);
  saveHistory(history);
  renderPassport();
  checkAchievements(country, wildcard);
}

function renderPassport() {
  const totalEl = document.getElementById('statTotal');
  const streakEl = document.getElementById('statStreak');
  const distinctEl = document.getElementById('statDistinct');
  if (totalEl) totalEl.textContent = history.total;
  if (streakEl) streakEl.textContent = history.streakCount > 1 ? `${history.streakCount}× ${history.streakName}` : '—';
  const distinct = Object.keys(history.visited).length;
  if (distinctEl) distinctEl.textContent = `${distinct}/${countries.length}`;

  const stamps = document.getElementById('stamps');
  if (stamps) {
    stamps.innerHTML = countries.map(c => {
      const n = history.visited[c.name] || 0;
      return `<div class="stamp ${n ? 'on' : ''}" title="${c.name}: ${n}">
        <span class="stamp-flag">${c.flag}</span>
        ${n ? `<span class="stamp-count">${n}</span>` : ''}
      </div>`;
    }).join('');
  }

  const menuEl = document.getElementById('menuList');
  if (menuEl) {
    if (!history.menu.length) {
      menuEl.innerHTML = '<li class="menu-empty">Ingen middager enda. Snurr hjulet!</li>';
    } else {
      menuEl.innerHTML = history.menu.map(m =>
        `<li>${m.wildcard ? '🌟 ' : ''}${m.emoji} <strong>${m.navn}</strong> <span>· ${m.flag} ${m.country}</span></li>`
      ).join('');
    }
  }
}

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */
const ACHIEVEMENTS = [
  { id: 'first',    test: () => history.total >= 1,                       text: '🎉 Første spinn! Velkommen til kjøkkenet.' },
  { id: 'five',     test: () => Object.keys(history.visited).length >= 5, text: '🌍 5 land besøkt — du er en globetrotter!' },
  { id: 'all',      test: () => Object.keys(history.visited).length >= countries.length, text: '👑 ALLE land besøkt! Gordon nikker (knapt).' },
  { id: 'streak3',  test: () => history.streakCount >= 3,                 text: '🔁 Triple på rad! Skjebnen elsker deg.' },
  { id: 'ten',      test: () => history.total >= 10,                      text: '🔥 10 spinn! Kjøkkenet er ditt nå.' },
  { id: 'wildcard', test: (_, wild) => wild,                              text: '🌟 WILDCARD! Sjeldnere enn en velstekt biff hos Gordon.' }
];
function checkAchievements(country, wildcard) {
  ACHIEVEMENTS.forEach(a => {
    if (history.achievements.includes(a.id)) return;
    if (a.test(country, wildcard)) {
      history.achievements.push(a.id);
      saveHistory(history);
      showToast(a.text);
    }
  });
}

/* ---------- Toasts ---------- */
let toastQueue = [];
let toastShowing = false;
function showToast(text) {
  toastQueue.push(text);
  if (!toastShowing) nextToast();
}
function nextToast() {
  if (!toastHost || !toastQueue.length) { toastShowing = false; return; }
  toastShowing = true;
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = toastQueue.shift();
  toastHost.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => { t.remove(); nextToast(); }, 350);
  }, 2600);
}

/* ============================================================
   SHARE
   ============================================================ */
async function shareResult() {
  playClick();
  if (!lastResult) return;
  const { country, dish, wildcard } = lastResult;
  const text = wildcard
    ? `🌟 WILDCARD! I kveld lager jeg ${dish.emoji} ${dish.navn} (${country.flag} ${country.name}). Gordon godkjenner. 6 ⭐`
    : `I kveld lager jeg ${dish.emoji} ${dish.navn} fra ${country.flag} ${country.name}. Gordon godkjenner. 6 ⭐ — Spin The Wheel: 6 Stjernes Middag`;
  try {
    if (navigator.share) {
      await navigator.share({ title: '6 Stjernes Middag', text });
    } else {
      await navigator.clipboard.writeText(text);
      showToast('📋 Kopiert! Lim inn og skryt.');
    }
  } catch (e) { /* user cancelled */ }
}

/* ============================================================
   WIRING
   ============================================================ */
spinBtn.addEventListener('click', spin);
closeModalBtn.addEventListener('click', () => { playClick(); hideModal(); });
spinAgainBtn.addEventListener('click', () => {
  playClick();
  hideModal();
  setTimeout(spin, 350);
});
if (shareBtn) shareBtn.addEventListener('click', shareResult);

if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    initAudio(); resumeAudio();
    muted = !muted;
    localStorage.setItem('stw-muted', muted ? '1' : '0');
    updateSoundUI();
    if (!muted) playClick();
  });
}

modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideModal();
  if (e.key === ' ' && !isSpinning && !modal.classList.contains('active')) {
    e.preventDefault();
    spin();
  }
});

buildWheel();
updateSoundUI();
renderPassport();
