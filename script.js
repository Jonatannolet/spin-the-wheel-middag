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

// ISO 3166-1 codes for self-hosted flag SVGs in /flags
// (Windows has no flag-emoji glyphs, so we render real images instead).
const FLAG_CODES = {
  ITALIA: 'it', SPANIA: 'es', FRANKRIKE: 'fr', INDIA: 'in', USA: 'us',
  VIETNAM: 'vn', ARGENTINA: 'ar', MAROCCO: 'ma', ETIOPIA: 'et'
};
function flagSrc(country) { return `flags/${FLAG_CODES[country.name]}.svg`; }

const segments = countries;

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
function playWin() {
  if (muted || !audioCtx) return;
  const notes = [523, 659, 784, 1047];
  notes.forEach((f, i) => tone(f, 0.32, 'triangle', 0.18, i * 0.09));
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
    path.setAttribute('stroke-width', '2');
    path.classList.add('segment');
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

    // Flag image (real SVG flag — Windows has no flag-emoji glyphs)
    const flagPos = polar(CX, CY, R * 0.52, mid);
    const fw = 54, fh = 36;
    const clip = document.createElementNS(SVG_NS, 'clipPath');
    clip.setAttribute('id', `flagclip-${i}`);
    const clipRect = document.createElementNS(SVG_NS, 'rect');
    clipRect.setAttribute('x', flagPos.x - fw / 2); clipRect.setAttribute('y', flagPos.y - fh / 2);
    clipRect.setAttribute('width', fw); clipRect.setAttribute('height', fh);
    clipRect.setAttribute('rx', 5);
    clip.appendChild(clipRect);
    defs.appendChild(clip);

    const img = document.createElementNS(SVG_NS, 'image');
    img.setAttribute('x', flagPos.x - fw / 2); img.setAttribute('y', flagPos.y - fh / 2);
    img.setAttribute('width', fw); img.setAttribute('height', fh);
    img.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    img.setAttribute('clip-path', `url(#flagclip-${i})`);
    img.setAttribute('href', flagSrc(c));
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', flagSrc(c));
    img.style.pointerEvents = 'none';
    wheelSvg.appendChild(img);

    const frame = document.createElementNS(SVG_NS, 'rect');
    frame.setAttribute('x', flagPos.x - fw / 2); frame.setAttribute('y', flagPos.y - fh / 2);
    frame.setAttribute('width', fw); frame.setAttribute('height', fh);
    frame.setAttribute('rx', 5);
    frame.setAttribute('fill', 'none');
    frame.setAttribute('stroke', '#ffffff');
    frame.setAttribute('stroke-width', '2');
    frame.style.pointerEvents = 'none';
    wheelSvg.appendChild(frame);

    // Name along arc
    const nameText = document.createElementNS(SVG_NS, 'text');
    nameText.setAttribute('font-size', '20');
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
let lastResult = null;        // { country }
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function spin() {
  if (isSpinning) return;
  initAudio(); resumeAudio();
  playWhoosh();
  playClick();

  let targetIndex;
  do {
    targetIndex = Math.floor(Math.random() * countries.length);
  } while (countries.length > 1 && targetIndex === lastCountryIndex);
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
    lastCountryIndex = targetIndex;
    revealCountry(countries[targetIndex]);
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
  lastResult = { country };
  openResultModal(country);
  launchRain(country.foodEmojis);
  foodExplosion(country.foodEmojis);
  shakeScreen();
  flameBurst();
  playWin();
  buzz([0, 40, 60, 120]);
  showToast(randomQuip());
}

const REACTION_GIFS = ['gifs/idiot-sandwich.gif', 'gifs/delicious-steak.gif', 'gifs/lets-do-this.gif', 'gifs/dog-shit.gif'];

function openResultModal(country) {
  const flagEl = document.getElementById('modalFlag');
  flagEl.innerHTML = `<img class="flag-img" src="${flagSrc(country)}" alt="${country.name}-flagg">`;
  const gifEl = document.getElementById('modalGif');
  if (gifEl) gifEl.src = REACTION_GIFS[Math.floor(Math.random() * REACTION_GIFS.length)];
  document.getElementById('modalCountry').textContent = country.name;
  document.getElementById('modalTagline').textContent = country.tagline;
  document.getElementById('modalDishes').textContent = country.dishes;
  document.getElementById('modalInfo').textContent = country.info;
  document.getElementById('modalMeme').textContent = country.meme;

  renderMeters(country);

  savedScrollY = window.scrollY;
  document.body.style.top = `-${savedScrollY}px`;
  document.body.classList.add('modal-open');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
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
   FX — rain, shake, flames, FOOD CHAOS
   ============================================================ */
// Big global food pool — "mer mat, mer av alt"
const FOOD_POOL = [
  '🍕','🍝','🍔','🌮','🌯','🥘','🍜','🍣','🍤','🥟','🧆','🫓','🥖','🥐','🥩','🍗','🍖',
  '🌭','🧀','🥗','🍲','🥣','🍛','🍚','🍱','🍙','🥑','🍅','🌶️','🧄','🧅','🥦','🌽','🥕',
  '🍷','🍺','🍹','☕','🧉','🍮','🍰','🧁','🍩','🍪','🥧','🍫','🍯','🥥','🍋','🍆','🦐','🐟'
];
function pickFood(extra) {
  const pool = extra && extra.length && Math.random() > 0.45 ? extra : FOOD_POOL;
  return pool[Math.floor(Math.random() * pool.length)];
}

function launchRain(emojis) {
  const colors = ['#dc143c', '#ffd700', '#ff5722', '#ffffff', '#ff9800', '#ff1744'];
  const isMobile = window.innerWidth < 600;
  const total = (reduceMotion ? 18 : (isMobile ? 70 : 150));
  for (let i = 0; i < total; i++) {
    const c = document.createElement('div');
    const useEmoji = Math.random() > 0.3;
    if (useEmoji) {
      c.className = 'confetti emoji-bit';
      c.textContent = pickFood(emojis);
      c.style.fontSize = (18 + Math.random() * 26) + 'px';
    } else {
      c.className = 'confetti';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
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

function flameBurst() {
  if (reduceMotion || !wheelShell) return;
  const rect = wheelShell.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const icons = ['🔥', '✨', '🔥', '💥'];
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

// Food blasts out from the centre of the wheel — pure chaos
function foodExplosion(extra) {
  if (reduceMotion || !wheelShell) return;
  const rect = wheelShell.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const count = window.innerWidth < 600 ? 22 : 40;
  for (let i = 0; i < count; i++) {
    const f = document.createElement('div');
    f.className = 'flame-burst';
    f.textContent = pickFood(extra);
    const angle = Math.random() * Math.PI * 2;
    const dist = 140 + Math.random() * 280;
    f.style.left = cx + 'px';
    f.style.top = cy + 'px';
    f.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    f.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    f.style.fontSize = (22 + Math.random() * 30) + 'px';
    f.style.animationDuration = (0.9 + Math.random() * 0.6) + 's';
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1600);
  }
}

// Ambient floating food in the background — always-on chaos
function buildFoodChaos() {
  const host = document.getElementById('foodChaos');
  if (!host || reduceMotion) return;
  const count = window.innerWidth < 600 ? 14 : 26;
  for (let i = 0; i < count; i++) {
    const e = document.createElement('span');
    e.className = 'food-float';
    e.textContent = FOOD_POOL[Math.floor(Math.random() * FOOD_POOL.length)];
    e.style.left = Math.random() * 100 + 'vw';
    e.style.top = Math.random() * 100 + 'vh';
    e.style.fontSize = (24 + Math.random() * 44) + 'px';
    e.style.setProperty('--dur', (12 + Math.random() * 16) + 's');
    e.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
    e.style.setProperty('--rot', (Math.random() * 80 - 40) + 'deg');
    e.style.animationDelay = `-${Math.random() * 20}s`;
    host.appendChild(e);
  }
}

/* ============================================================
   GORDON QUIPS — random chaos voice on every spin
   ============================================================ */
const GORDON_QUIPS = [
  '😤 FINALLY some good food!',
  '🔥 IT\'S RAW! ...nei da, perfekt. Lag det.',
  '👨‍🍳 Move it, move it, MOVE IT!',
  '🍝 My grandmother could cook this faster!',
  '💢 Where is the LAMB SAUCE?!',
  '😋 Beautiful. Stunning. Now GO.',
  '🥄 An idiot sandwich? Nei — en 6-stjerners middag!',
  '🌶️ Spice it up, you donut!',
  '🔪 Tonight, you cook like you mean it.',
  '😱 You call that a kjøkken?! Prove me wrong!',
  '🍷 Pour the wine, light the fire, LET\'S GO!',
  '💥 CHAOS in the kitchen — akkurat som jeg liker det!'
];
function randomQuip() {
  return GORDON_QUIPS[Math.floor(Math.random() * GORDON_QUIPS.length)];
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
  const { country } = lastResult;
  const text = `${country.flag} I kveld blir det ${country.name}! Gordon godkjenner. 6 ⭐ — Spin The Wheel: 6 Stjernes Middag`;
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
buildFoodChaos();

/* ---------- Intro loader ---------- */
(function introLoader() {
  const intro = document.getElementById('intro');
  if (!intro) return;
  let done = false;
  const start = performance.now();
  const MIN_MS = 2200;   // make sure the GTA intro is actually seen
  function hideIntro() {
    if (done) return;
    done = true;
    intro.classList.add('hide');
    setTimeout(() => intro.remove(), 700);
  }
  // Skip on tap (and prime audio with the gesture)
  intro.addEventListener('click', () => { initAudio(); resumeAudio(); hideIntro(); });
  // Hide after load, respecting a minimum on-screen time
  window.addEventListener('load', () => {
    const wait = Math.max(0, MIN_MS - (performance.now() - start));
    setTimeout(hideIntro, wait);
  });
  // Hard fallback so it never gets stuck
  setTimeout(hideIntro, 6000);
})();
