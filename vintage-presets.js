/* =========================================================
   VINTAGE-PRESETS.JS — USA & GETTA v1.0 (STILE HUJI)
   - Rotella plastica zigrinata da trascinare/girare con il dito (suono "trac-trac-trac")
   - Tasto carica flash con ronzio condensatore e spia LED neon
   - Resa ottica e chimica maniacale per 7 decadi (CA laterale, distorsione lente plastica,
     split-toning profondo ombre/luci, light leaks prismatici stile Huji)
   - Editor completo post-scatto: attiva/disattiva/personalizza gli effetti anche dopo lo sviluppo
   ========================================================= */

const VINTAGE_DECADES = [
    {
        id: "1940s",
        name: "Anni '40",
        subtitle: "Nitrate Noir • Orto B&N",
        tag: "'40 NOIR",
        yearStamp: "'46",
        color: "#b8b2a6",
        textColor: "#14120e",
        paperId: "ilford-fb-warm",
        grade: 3.1,
        burn: 0.48,
        stampColor: "#e6c79c",
        optics: { ca: 0.14, barrel: 0.030, softness: 0.44, fadeBlack: 0.032, orthoBW: true },
        film: {
            id: "vintage-40s", name: "1940s Nitrate Noir", iso: 100, mode: "bw",
            toe: 0.012, shoulder: 0.30, contrast: 0.66, temp: 0.0, tint: 0.0,
            saturation: 0.0, shadowTemp: 0.09, highTemp: 0.05,
            halation: 0.52, halThreshold: 0.76, bloom: 0.38, grain: 0.058, grainSize: 1.45,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
        },
        exceptions: { leakProb: 0.25, chemProb: 0.42, agedProb: 0.60, scratchProb: 0.58 }
    },
    {
        id: "1950s",
        name: "Anni '50",
        subtitle: "Kodachrome • Rossi & Cobalto",
        tag: "'50 CHROME",
        yearStamp: "'55",
        color: "#d94e3f",
        textColor: "#ffffff",
        paperId: "kodak-endura",
        grade: 2.8,
        burn: 0.28,
        stampColor: "#ff9b54",
        optics: { ca: 0.20, barrel: 0.025, softness: 0.24, fadeBlack: 0.012, orthoBW: false },
        film: {
            id: "vintage-50s", name: "1950s Kodachrome", iso: 64, mode: "slide",
            toe: 0.012, shoulder: 0.42, contrast: 0.56, temp: 0.15, tint: 0.03,
            saturation: 1.24, shadowTemp: -0.09, highTemp: 0.14,
            halation: 0.36, halThreshold: 0.82, bloom: 0.18, grain: 0.024, grainSize: 1.05,
            matrix: [1.11, -0.06, -0.05, 0.01, 1.01, -0.02, -0.07, 0.04, 1.03]
        },
        exceptions: { leakProb: 0.32, chemProb: 0.28, agedProb: 0.45, scratchProb: 0.35 }
    },
    {
        id: "1960s",
        name: "Anni '60",
        subtitle: "Agfacolor • Sole & Ciani",
        tag: "'60 MOD",
        yearStamp: "'68",
        color: "#e08a28",
        textColor: "#141004",
        paperId: "kodak-endura",
        grade: 2.6,
        burn: 0.30,
        stampColor: "#ff8c3a",
        optics: { ca: 0.32, barrel: 0.032, softness: 0.28, fadeBlack: 0.024, orthoBW: false },
        film: {
            id: "vintage-60s", name: "1960s Agfa Ekta", iso: 160, mode: "color",
            toe: 0.022, shoulder: 0.48, contrast: 0.44, temp: 0.17, tint: -0.06,
            saturation: 1.24, shadowTemp: -0.14, highTemp: 0.15,
            halation: 0.56, halThreshold: 0.78, bloom: 0.24, grain: 0.032, grainSize: 1.15,
            matrix: [1.08, -0.05, -0.03, -0.02, 1.05, -0.03, -0.06, 0.06, 1.00]
        },
        exceptions: { leakProb: 0.48, chemProb: 0.32, agedProb: 0.40, scratchProb: 0.30 }
    },
    {
        id: "1970s",
        name: "Anni '70",
        subtitle: "Ambra Sbiadita • Ombre Teak",
        tag: "'70 AMBER",
        yearStamp: "'77",
        color: "#c97b2b",
        textColor: "#ffffff",
        paperId: "ilford-fb-warm",
        grade: 2.1,
        burn: 0.34,
        stampColor: "#ff7828",
        optics: { ca: 0.40, barrel: 0.038, softness: 0.32, fadeBlack: 0.048, orthoBW: false },
        film: {
            id: "vintage-70s", name: "1970s Amber Fade", iso: 200, mode: "color",
            toe: 0.044, shoulder: 0.62, contrast: 0.26, temp: 0.22, tint: 0.04,
            saturation: 0.88, shadowTemp: 0.11, highTemp: 0.16,
            halation: 0.62, halThreshold: 0.76, bloom: 0.28, grain: 0.036, grainSize: 1.35,
            matrix: [1.06, 0.01, -0.07, 0.03, 0.99, -0.02, -0.09, 0.05, 1.04]
        },
        exceptions: { leakProb: 0.55, chemProb: 0.36, agedProb: 0.55, scratchProb: 0.32 }
    },
    {
        id: "1980s",
        name: "Anni '80",
        subtitle: "Minilab Pop • Magenta & Flash",
        tag: "'80 MINILAB",
        yearStamp: "'86",
        color: "#d9488b",
        textColor: "#ffffff",
        paperId: "fuji-crystal-glossy",
        grade: 3.0,
        burn: 0.32,
        stampColor: "#ff661a",
        optics: { ca: 0.48, barrel: 0.040, softness: 0.26, fadeBlack: 0.022, orthoBW: false },
        film: {
            id: "vintage-80s", name: "1980s Minilab Pop", iso: 400, mode: "color",
            toe: 0.024, shoulder: 0.40, contrast: 0.48, temp: 0.09, tint: 0.10,
            saturation: 1.22, shadowTemp: 0.06, highTemp: 0.05,
            halation: 0.68, halThreshold: 0.78, bloom: 0.18, grain: 0.038, grainSize: 1.22,
            matrix: [1.07, -0.06, -0.01, -0.03, 0.98, 0.05, 0.01, 0.02, 0.97]
        },
        exceptions: { leakProb: 0.50, chemProb: 0.30, agedProb: 0.28, scratchProb: 0.26 }
    },
    {
        id: "1990s",
        name: "Anni '90 (Huji)",
        subtitle: "Usa & Getta '98 • Ombre Verde-Blu",
        tag: "'98 HUJI",
        yearStamp: "'98",
        color: "#1fa35b",
        textColor: "#ffffff",
        paperId: "fuji-crystal-glossy",
        grade: 3.3,
        burn: 0.48,
        stampColor: "#ff5e0e",
        optics: { ca: 0.65, barrel: 0.048, softness: 0.34, fadeBlack: 0.020, orthoBW: false },
        film: {
            id: "vintage-90s", name: "1998 Huji Usa & Getta", iso: 800, mode: "color",
            toe: 0.018, shoulder: 0.34, contrast: 0.60, temp: -0.04, tint: -0.09,
            saturation: 1.30, shadowTemp: -0.18, highTemp: 0.13,
            halation: 1.15, halThreshold: 0.72, bloom: 0.24, grain: 0.044, grainSize: 1.30,
            matrix: [1.05, -0.03, -0.02, -0.04, 1.09, -0.05, -0.03, 0.05, 0.98]
        },
        exceptions: { leakProb: 0.68, chemProb: 0.34, agedProb: 0.24, scratchProb: 0.26 }
    },
    {
        id: "y2k",
        name: "Y2K (2000s)",
        subtitle: "Ibrido CCD/C-41 • Luci Ciano",
        tag: "'02 Y2K",
        yearStamp: "'02",
        color: "#3ea3d8",
        textColor: "#0d141a",
        paperId: "fuji-crystal-glossy",
        grade: 3.1,
        burn: 0.28,
        stampColor: "#ff3d1f",
        optics: { ca: 0.50, barrel: 0.034, softness: 0.20, fadeBlack: 0.012, orthoBW: false },
        film: {
            id: "vintage-y2k", name: "Y2K Early Compact", iso: 400, mode: "color",
            toe: 0.014, shoulder: 0.32, contrast: 0.54, temp: -0.13, tint: 0.06,
            saturation: 1.18, shadowTemp: -0.08, highTemp: -0.10,
            halation: 0.74, halThreshold: 0.74, bloom: 0.34, grain: 0.030, grainSize: 1.08,
            matrix: [1.00, -0.02, 0.02, -0.01, 1.02, -0.01, 0.02, 0.02, 1.05]
        },
        exceptions: { leakProb: 0.42, chemProb: 0.24, agedProb: 0.16, scratchProb: 0.20 }
    }
];

let selectedVintageDecadeId = localStorage.getItem("analog_photolab_vintage_decade") || "1990s";
let selectedVintageExposures = 12;
let vintageRandomEnabled = true;
let vintageDateMode = "era";
let vintageFlashState = "off"; // "off" | "charging" | "ready"
let vintageFlashChargeTimer = null;

// Meccanica rotella plastica usa & getta
let vintageWheelArmed = false;
let vintageWheelProgress = 0; // 0 .. 100
let vintageWheelLastNotch = 0;
let vintageWheelVisualOffset = 0;

let vintageCapturing = false;
let vintageDeveloping = false;

let currentVintageRoll = null;
let memoryVintageRolls = [];
let activeVintageDetailIdx = 0;
let activeVintageRawImg = null;
let vintageDetailShowOriginal = false;
let vintageEditSaveTimer = null;

function getActiveVintageDecade(id = selectedVintageDecadeId) {
    return VINTAGE_DECADES.find(d => d.id === id) || VINTAGE_DECADES[5];
}

function getVintageDateStampString(decade) {
    if (vintageDateMode === "off") return "";
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const yy = vintageDateMode === "today"
        ? "'" + String(now.getFullYear()).slice(-2)
        : decade.yearStamp;
    return `${yy} ${mm} ${dd}`;
}

/* =========================================================
   SUONI MECCANICI USA & GETTA (ROTELLA TRAC-TRAC + FLASH)
   ========================================================= */
function playPlasticWheelClick(notch = 1) {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(1600 + (notch % 3) * 140, now);
        osc.frequency.exponentialRampToValueAtTime(420, now + 0.018);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(now); osc.stop(now + 0.025);

        const bufLen = Math.floor(ctx.sampleRate * 0.016);
        const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < bufLen; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.004));
        const n = ctx.createBufferSource();
        n.buffer = buf;
        const hp = ctx.createBiquadFilter();
        hp.type = "highpass"; hp.frequency.value = 1800;
        const ng = ctx.createGain(); ng.gain.value = 0.35;
        n.connect(hp); hp.connect(ng); ng.connect(ctx.destination);
        n.start(now);
    } catch (e) { }
}

function playPlasticWheelLock() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(980, now);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.055);
        g.gain.setValueAtTime(0.42, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(now); osc.stop(now + 0.065);
    } catch (e) { }
}

function playFlashCapacitorWhine() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(3400, now + 0.95);
        g.gain.setValueAtTime(0.001, now);
        g.gain.linearRampToValueAtTime(0.065, now + 0.15);
        g.gain.setValueAtTime(0.05, now + 0.72);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.98);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(now); osc.stop(now + 1.0);
    } catch (e) { }
}

/* =========================================================
   PERSISTENZA RULLINI USA & GETTA
   ========================================================= */
function saveVintageRollToDB(vRoll) {
    const idx = memoryVintageRolls.findIndex(r => r.id === vRoll.id);
    if (idx >= 0) memoryVintageRolls[idx] = vRoll;
    else memoryVintageRolls.unshift(vRoll);

    if (!db || !db.objectStoreNames.contains("vintageRolls")) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        const tx = db.transaction("vintageRolls", "readwrite");
        tx.objectStore("vintageRolls").put(vRoll);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
    });
}

function getAllVintageRollsFromDB() {
    if (!db || !db.objectStoreNames.contains("vintageRolls")) {
        return Promise.resolve([...memoryVintageRolls]);
    }
    return new Promise((resolve) => {
        const tx = db.transaction("vintageRolls", "readonly");
        const req = tx.objectStore("vintageRolls").getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([...memoryVintageRolls]);
    });
}

function deleteVintageRollFromDB(id) {
    memoryVintageRolls = memoryVintageRolls.filter(r => r.id !== id);
    if (!db || !db.objectStoreNames.contains("vintageRolls")) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        const tx = db.transaction("vintageRolls", "readwrite");
        tx.objectStore("vintageRolls").delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
    });
}

/* =========================================================
   ACCESSO SEZIONE USA & GETTA
   ========================================================= */
async function enterDisposableSection() {
    const vRolls = await getAllVintageRollsFromDB();
    const activeShooting = vRolls.find(r => r.status === "shooting");
    if (activeShooting) {
        currentVintageRoll = activeShooting;
        enterVintageCameraMode();
        return;
    }
    await refreshVintageArchiveList();
    switchView("view-disposable-load");
}

function renderVintageHomeGrid() {
    const grid = document.getElementById("vintageDecadeGrid");
    if (!grid) return;
    grid.innerHTML = "";
    VINTAGE_DECADES.forEach(d => {
        const card = document.createElement("div");
        card.className = "film-option" + (d.id === selectedVintageDecadeId ? " selected" : "");
        card.style.setProperty("--brand-color", d.color);
        card.innerHTML = `
      <div class="film-canister-strip">
        <span class="film-canister-pill" style="background:${d.color}; color:${d.textColor};">${d.tag}</span>
        <span class="film-canister-iso">ISO ${d.film.iso}</span>
      </div>
      <strong>${d.name}</strong>
      <small>${d.subtitle}</small>
    `;
        card.addEventListener("click", () => {
            selectedVintageDecadeId = d.id;
            localStorage.setItem("analog_photolab_vintage_decade", d.id);
            renderVintageHomeGrid();
        });
        grid.appendChild(card);
    });

    const active = getActiveVintageDecade();
    const badge = document.getElementById("selectedVintageEraBadge");
    if (badge) badge.textContent = active.tag;
}

async function refreshVintageArchiveList() {
    const rolls = await getAllVintageRollsFromDB();
    const developed = rolls.filter(r => r.status === "developed").sort((a, b) => b.createdAt - a.createdAt);
    const list = document.getElementById("vintageArchiveList");
    const emptyMsg = document.getElementById("vintageArchiveEmptyMsg");
    const countEl = document.getElementById("vintageArchiveCount");
    if (!list || !emptyMsg || !countEl) return;

    countEl.textContent = `${developed.length} ${developed.length === 1 ? "rullino" : "rullini"}`;
    list.innerHTML = "";

    if (developed.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }
    emptyMsg.style.display = "none";

    developed.forEach(vRoll => {
        const dec = getActiveVintageDecade(vRoll.decadeId);
        const item = document.createElement("div");
        item.className = "archive-item";
        item.style.borderLeft = `4px solid ${dec.color}`;
        const dateStr = new Date(vRoll.createdAt).toLocaleDateString("it-IT", { day: "2-digit", month: "short" });
        const savedCount = vRoll.frames.filter(f => f.savedLocally).length;
        const starCount = vRoll.frames.filter(f => f.starred).length;
        item.innerHTML = `
      <div>
        <strong>${dec.name} (${dec.tag})</strong>
        <small>${vRoll.frames.length} pose • ★ ${starCount} • ✓ ${savedCount} salvate • ${dateStr}</small>
      </div>
      <span style="color:var(--gold); font-size:12px; font-weight:700;">Apri →</span>
    `;
        item.addEventListener("click", () => {
            currentVintageRoll = vRoll;
            openVintageLabRoll();
        });
        list.appendChild(item);
    });
}

/* =========================================================
   CONTROLLO ROTELLA CARICAMENTO & FLASH CONDENSATORE
   ========================================================= */
function setVintageWheelArmedState(armed) {
    vintageWheelArmed = armed;
    if (armed) vintageWheelProgress = 100;
    else {
        vintageWheelProgress = 0;
        vintageWheelLastNotch = 0;
    }
    syncVintageWheelUI();
}

function syncVintageWheelUI() {
    const housing = document.getElementById("vintageWheelControl");
    const fill = document.getElementById("vintageWheelProgressFill");
    const hint = document.getElementById("vintageWheelHint");
    const shutterBtn = document.getElementById("vintageShutterBtn");
    const shutterLbl = document.getElementById("vintageShutterLabel");
    const dot = document.getElementById("vintageCockDot");
    const badge = document.getElementById("vintageCockBadge");
    if (!housing || !fill) return;

    const isFull = currentVintageRoll && currentVintageRoll.frames.length >= currentVintageRoll.capacity;
    fill.style.width = `${Math.min(100, Math.round(vintageWheelProgress))}%`;

    if (isFull) {
        housing.classList.remove("needs-wind", "armed");
        shutterBtn.classList.add("locked");
        dot.classList.remove("armed");
        badge.classList.remove("armed");
        badge.textContent = "RULLINO FINITO • SVILUPPA";
        shutterLbl.textContent = "FINE";
        hint.textContent = "FINE RULLINO";
        return;
    }

    if (vintageWheelArmed) {
        housing.classList.remove("needs-wind");
        housing.classList.add("armed");
        shutterBtn.classList.remove("locked");
        dot.classList.add("armed");
        badge.classList.add("armed");
        badge.textContent = "OTTURATORE PRONTO";
        shutterLbl.textContent = "SCATTA";
        hint.textContent = "CARICA OK";
    } else {
        housing.classList.remove("armed");
        housing.classList.add("needs-wind");
        shutterBtn.classList.add("locked");
        dot.classList.remove("armed");
        badge.classList.remove("armed");
        badge.textContent = "GIRA ROTELLA PER CARICARE";
        shutterLbl.textContent = "BLOCCATO";
        hint.textContent = vintageWheelProgress > 0
            ? `GIRA... ${Math.round(vintageWheelProgress)}%`
            : "TRASCINA ROTELLA";
    }
}

function updateVintageFlashButtonUI() {
    const btn = document.getElementById("vintageFlashChargeBtn");
    const lbl = document.getElementById("vintageFlashLabel");
    if (!btn || !lbl) return;
    btn.classList.remove("charging", "ready");
    if (vintageFlashState === "charging") {
        btn.classList.add("charging");
        lbl.textContent = "CARICA FLASH...";
    } else if (vintageFlashState === "ready") {
        btn.classList.add("ready");
        lbl.textContent = "⚡ FLASH PRONTO";
    } else {
        lbl.textContent = "⚡ CARICA FLASH";
    }
}

function triggerVintageFlashCharge() {
    clearTimeout(vintageFlashChargeTimer);
    if (vintageFlashState === "off") {
        vintageFlashState = "charging";
        updateVintageFlashButtonUI();
        playFlashCapacitorWhine();
        vintageFlashChargeTimer = setTimeout(() => {
            if (vintageFlashState === "charging") {
                vintageFlashState = "ready";
                updateVintageFlashButtonUI();
            }
        }, 950);
    } else {
        vintageFlashState = "off";
        updateVintageFlashButtonUI();
    }
}

function updateVintageCameraHUD() {
    if (!currentVintageRoll) return;
    const d = getActiveVintageDecade(currentVintageRoll.decadeId);
    document.getElementById("vintageTopEraBadge").textContent = d.tag;
    document.getElementById("vintageVfEraLabel").textContent = `${d.name.toUpperCase()} • ${d.tag}`;

    const cur = String(currentVintageRoll.frames.length).padStart(2, "0");
    const tot = String(currentVintageRoll.capacity).padStart(2, "0");
    document.getElementById("vintageCounter").textContent = `${cur} / ${tot}`;

    const stamp = getVintageDateStampString(d);
    const datePrev = document.getElementById("vintageDatePreview");
    if (datePrev) {
        datePrev.textContent = stamp;
        datePrev.style.display = stamp ? "block" : "none";
        datePrev.style.color = d.stampColor;
    }

    const randBtn = document.getElementById("vintageRandomBtn");
    const dateBtn = document.getElementById("vintageDateBtn");
    randBtn.classList.toggle("active", vintageRandomEnabled);
    randBtn.textContent = vintageRandomEnabled ? "✨ Casuali: ON" : "✨ Casuali: OFF";

    dateBtn.classList.toggle("active", vintageDateMode !== "off");
    dateBtn.textContent = vintageDateMode === "era"
        ? `📅 Data: ${d.yearStamp}`
        : (vintageDateMode === "today" ? "📅 Data: Oggi" : "📅 Data: OFF");

    updateVintageFlashButtonUI();
    syncVintageWheelUI();

    const strip = document.getElementById("vintageQuickDecadeStrip");
    strip.innerHTML = "";
    VINTAGE_DECADES.forEach(item => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vintage-era-btn" + (item.id === d.id ? " active" : "");
        btn.textContent = item.tag;
        btn.addEventListener("click", async () => {
            currentVintageRoll.decadeId = item.id;
            selectedVintageDecadeId = item.id;
            localStorage.setItem("analog_photolab_vintage_decade", item.id);
            await saveVintageRollToDB(currentVintageRoll);
            updateVintageCameraHUD();
        });
        strip.appendChild(btn);
    });

    const isFull = currentVintageRoll.frames.length >= currentVintageRoll.capacity;
    document.getElementById("vintageRewindBtn").classList.toggle("pulse-finish", isFull);
    document.getElementById("vintageFinishedOverlay").classList.toggle("open", isFull && !vintageDeveloping);
}

async function startVintageCameraStream() {
    stopCamera();
    const video = document.getElementById("vintageVideo");
    const fallback = document.getElementById("vintageFallbackMsg");
    const videoConstraints = { facingMode: facingMode, width: { ideal: 4096 }, height: { ideal: 3072 } };

    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
        video.srcObject = mediaStream;
        video.style.display = "block";
        fallback.style.display = "none";
        detectFlashCapabilities();
    } catch (err) {
        video.style.display = "none";
        fallback.style.display = "flex";
    }
}

function enterVintageCameraMode() {
    vintageDeveloping = false;
    setVintageWheelArmedState(false);
    document.getElementById("vintageFinishedOverlay").classList.remove("open");
    document.getElementById("vintageDevAnimOverlay").classList.remove("open");
    document.getElementById("vintageThirdsGrid").classList.toggle("visible", thirdsVisible);
    document.getElementById("vintageThirdsToggleBtn").classList.toggle("active", thirdsVisible);
    updateVintageCameraHUD();
    switchView("view-vintage-camera");
    startVintageCameraStream();
}

/* =========================================================
   SCATTO & RENDER EFFETTI HUJI / DECADI
   ========================================================= */
async function recordVintageLatentFrame(sourceCanvas, usedFlash = false, hardwareFlashFired = false) {
    if (!currentVintageRoll || currentVintageRoll.frames.length >= currentVintageRoll.capacity) return;

    playShutterSound(1 / 125, usedFlash);
    const curtain = document.getElementById("vintageCurtain");
    curtain.classList.add("blink");
    setTimeout(() => curtain.classList.remove("blink"), 110);

    const rawBlob = await canvasToBlob(sourceCanvas, "image/jpeg", 0.96);

    currentVintageRoll.frames.push({
        number: currentVintageRoll.frames.length + 1,
        decadeId: currentVintageRoll.decadeId,
        flash: usedFlash,
        hardwareFlashFired,
        starred: false,
        savedLocally: false,
        rawBlob,
        developedBlob: null,
        thumbBlob: null,
        stamp: getVintageDateStampString(getActiveVintageDecade(currentVintageRoll.decadeId)),
        vintageEdit: null
    });

    // Scarica rotella dopo lo scatto + eventuale ricarica lampo condensatore
    setVintageWheelArmedState(false);
    if (usedFlash && vintageFlashState === "ready") {
        vintageFlashState = "charging";
        updateVintageFlashButtonUI();
        clearTimeout(vintageFlashChargeTimer);
        vintageFlashChargeTimer = setTimeout(() => {
            if (vintageFlashState === "charging") {
                vintageFlashState = "ready";
                updateVintageFlashButtonUI();
            }
        }, 700);
    }

    updateVintageCameraHUD();
    await saveVintageRollToDB(currentVintageRoll);
    if (typeof refreshHomeStatus === "function") refreshHomeStatus();
}

function buildInitialVintageEdit(decade, applyRandom) {
    const ex = decade.exceptions;
    const rollVal = (prob) => (applyRandom && Math.random() < prob) ? +(0.18 + Math.random() * 0.54).toFixed(2) : 0;

    return {
        enabled: true,
        decadeId: decade.id,
        showStamp: true,
        seed: Math.random(),
        lightLeak: rollVal(ex.leakProb),
        chemStain: rollVal(ex.chemProb),
        agedPaper: rollVal(ex.agedProb),
        scratches: rollVal(ex.scratchProb),
        ca: decade.optics ? decade.optics.ca : 0.45,
        vignette: decade.burn || 0.35,
        ev: applyRandom ? +((Math.random() - 0.48) * 0.36).toFixed(2) : 0
    };
}

function ensureFrameVintageEdit(frame) {
    if (frame.vintageEdit) return frame.vintageEdit;
    const dec = getActiveVintageDecade(frame.decadeId || (currentVintageRoll && currentVintageRoll.decadeId));
    frame.vintageEdit = buildInitialVintageEdit(dec, false);
    return frame.vintageEdit;
}

async function renderVintageShotWithEdit(srcImg, frame, maxDimOverride = null) {
    const edit = ensureFrameVintageEdit(frame);
    const decade = getActiveVintageDecade(edit.decadeId || frame.decadeId);
    const outCanvas = document.createElement("canvas");
    const targetDim = maxDimOverride || Math.min(MAX_GL_TEX, Math.max(srcImg.naturalWidth || srcImg.width, srcImg.naturalHeight || srcImg.height));

    if (!edit.enabled) {
        // Effetti vintage DISATTIVATI: resa pulita dell'immagine grezza (con eventuale flash hardware già nello scatto)
        const cleanStub = {
            exposureEV: edit.ev || 0,
            aperture: 4.0,
            defectSeed: edit.seed,
            defects: createDefaultFrameDefects(edit.seed),
            optics: { ca: 0, barrel: 0, softness: 0, fadeBlack: 0, flashFalloff: 0, orthoBW: false }
        };
        const neutralFilm = {
            id: "clean", name: "Clean", iso: 100, mode: "color",
            toe: 0, shoulder: 0.05, contrast: 0.08, temp: 0, tint: 0,
            saturation: 1.0, shadowTemp: 0, highTemp: 0,
            halation: 0, halThreshold: 0.99, bloom: 0, grain: 0, grainSize: 1.0,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
        };
        renderFrameWithWebGL(srcImg, neutralFilm, cleanStub, 0, null, true, targetDim);
    } else {
        const defects = {
            seed: edit.seed,
            lightLeak: { active: edit.lightLeak > 0, intensity: edit.lightLeak },
            chemStain: { active: edit.chemStain > 0, intensity: edit.chemStain },
            agedPaper: { active: edit.agedPaper > 0, intensity: edit.agedPaper },
            scratches: { active: edit.scratches > 0, intensity: edit.scratches }
        };
        const flashBoost = (frame.flash && !frame.hardwareFlashFired) ? 0.34 : 0.0;
        const flashFalloff = (frame.flash && !frame.hardwareFlashFired) ? 0.85 : (frame.flash ? 0.35 : 0.0);

        const frameStub = {
            exposureEV: (edit.ev || 0) + flashBoost,
            aperture: 2.8,
            defectSeed: edit.seed,
            defects,
            optics: {
                ca: edit.ca,
                barrel: decade.optics ? decade.optics.barrel : 0.035,
                softness: decade.optics ? decade.optics.softness : 0.28,
                fadeBlack: decade.optics ? decade.optics.fadeBlack : 0.02,
                orthoBW: decade.optics ? !!decade.optics.orthoBW : false,
                flashFalloff
            }
        };
        const printOptsStub = {
            paperId: decade.paperId,
            time: 12.0,
            grade: decade.grade,
            cyan: 0,
            mag: 0,
            yel: 0,
            burn: edit.vignette,
            grainScale: 1.0,
            paperTexScale: 0.5,
            enlargerApIdx: 3,
            tonerType: 0,
            tonerAmount: 0,
            testStrip: false,
            zoom: 1.0,
            rotation: 0,
            panX: 0,
            panY: 0,
            border: "none",
            defects
        };
        renderFrameWithWebGL(srcImg, decade.film, frameStub, 0, printOptsStub, false, targetDim);
    }

    outCanvas.width = glCanvas.width;
    outCanvas.height = glCanvas.height;
    const oCtx = outCanvas.getContext("2d");
    oCtx.drawImage(glCanvas, 0, 0);

    if (edit.enabled && edit.showStamp && frame.stamp) {
        const fontSize = Math.max(20, Math.round(outCanvas.width * 0.036));
        oCtx.save();
        oCtx.font = `900 ${fontSize}px "Courier New", monospace`;
        oCtx.textAlign = "right";
        oCtx.textBaseline = "bottom";
        const padX = Math.round(outCanvas.width * 0.045);
        const padY = Math.round(outCanvas.height * 0.038);

        oCtx.shadowColor = "rgba(255, 72, 12, 0.92)";
        oCtx.shadowBlur = Math.round(fontSize * 0.45);
        oCtx.fillStyle = decade.stampColor || "#ff5e0e";
        oCtx.fillText(frame.stamp, outCanvas.width - padX, outCanvas.height - padY);

        oCtx.shadowBlur = 0;
        oCtx.fillStyle = "rgba(255, 224, 166, 0.72)";
        oCtx.fillText(frame.stamp, outCanvas.width - padX, outCanvas.height - padY);
        oCtx.restore();
    }

    return outCanvas;
}

async function executeVintageDevelopSequence() {
    if (vintageDeveloping || !currentVintageRoll) return;
    if (currentVintageRoll.frames.length === 0) return;

    vintageDeveloping = true;
    getAudioCtx();
    document.getElementById("vintageFinishedOverlay").classList.remove("open");
    const overlay = document.getElementById("vintageDevAnimOverlay");
    const fill = document.getElementById("vintageDevProgressFill");
    const sub = document.getElementById("vintageDevAnimSub");
    const counterEl = document.getElementById("vintageCounter");
    fill.style.width = "0%";
    overlay.classList.add("open");

    const minDurationMs = 4000;
    playFilmRewindSound(4.0);
    const startTime = performance.now();

    const total = currentVintageRoll.frames.length;
    const totStr = String(currentVintageRoll.capacity).padStart(2, "0");

    for (let i = 0; i < total; i++) {
        const frame = currentVintageRoll.frames[i];
        const decade = getActiveVintageDecade(frame.decadeId || currentVintageRoll.decadeId);
        frame.vintageEdit = buildInitialVintageEdit(decade, vintageRandomEnabled);

        const srcImg = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
        const outCanvas = await renderVintageShotWithEdit(srcImg, frame, null);

        frame.developedBlob = await canvasToBlob(outCanvas, "image/jpeg", 0.95);

        const thumbCanvas = document.createElement("canvas");
        const tW = 360;
        const tH = Math.round((outCanvas.height / outCanvas.width) * tW);
        thumbCanvas.width = tW;
        thumbCanvas.height = tH;
        thumbCanvas.getContext("2d").drawImage(outCanvas, 0, 0, tW, tH);
        frame.thumbBlob = await canvasToBlob(thumbCanvas, "image/jpeg", 0.80);

        outCanvas.width = 0; outCanvas.height = 0;
        thumbCanvas.width = 0; thumbCanvas.height = 0;

        const elapsed = performance.now() - startTime;
        const p = Math.min(0.95, Math.max((i + 1) / total * 0.85, elapsed / minDurationMs));
        fill.style.width = `${Math.round(p * 100)}%`;
        sub.textContent = `Sviluppo posa ${i + 1} di ${total}...`;
        counterEl.textContent = `${String(Math.max(0, total - i - 1)).padStart(2, "0")} / ${totStr}`;
    }

    const remaining = minDurationMs - (performance.now() - startTime);
    if (remaining > 0) {
        sub.textContent = "Asciugatura e preparazione provini...";
        await new Promise((resolve) => {
            const waitStart = performance.now();
            const startPct = parseFloat(fill.style.width) || 80;
            function anim(now) {
                const wP = Math.min(1, (now - waitStart) / remaining);
                fill.style.width = `${Math.round(startPct + (100 - startPct) * wP)}%`;
                if (wP < 1) requestAnimationFrame(anim);
                else resolve();
            }
            requestAnimationFrame(anim);
        });
    }

    fill.style.width = "100%";
    counterEl.textContent = `00 / ${totStr}`;
    currentVintageRoll.status = "developed";
    await saveVintageRollToDB(currentVintageRoll);
    await refreshVintageArchiveList();
    await refreshStorageSummary();
    if (typeof refreshHomeStatus === "function") refreshHomeStatus();

    overlay.classList.remove("open");
    vintageDeveloping = false;
    openVintageLabRoll();
}

/* =========================================================
   GALLERIA RULLINO USA & GETTA + EDITOR POST-SCATTO
   ========================================================= */
function updateVintageSelectionUI() {
    if (!currentVintageRoll) return;
    const starCount = currentVintageRoll.frames.filter(f => f.starred).length;
    const selBtn = document.getElementById("vintageSaveSelectedBtn");
    const allBtn = document.getElementById("vintageSelectAllBtn");
    if (selBtn) selBtn.textContent = `Salva Selezionate (${starCount})`;
    if (allBtn) {
        const allStarred = currentVintageRoll.frames.length > 0 && starCount === currentVintageRoll.frames.length;
        allBtn.textContent = allStarred ? "☆ Deseleziona" : "★ Tutte";
    }
}

async function openVintageLabRoll() {
    if (!currentVintageRoll) return;
    const dec = getActiveVintageDecade(currentVintageRoll.decadeId);
    document.getElementById("vintageLabTitle").textContent = `${dec.name} (${dec.tag})`;
    document.getElementById("vintageLabSubtitle").textContent = `${currentVintageRoll.frames.length} foto • Tocca per modificare o rimuovere gli effetti`;

    const grid = document.getElementById("vintageLabGrid");
    const empty = document.getElementById("vintageLabEmpty");
    grid.innerHTML = "";

    if (currentVintageRoll.frames.length === 0) {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
        currentVintageRoll.frames.forEach((frame, idx) => {
            const cell = document.createElement("div");
            cell.className = "contact-frame" + (frame.starred ? " starred" : "");

            const img = document.createElement("img");
            const srcObj = frame.thumbBlob || frame.developedBlob || frame.dataUrl;
            if (srcObj instanceof Blob) {
                const u = URL.createObjectURL(srcObj);
                img.onload = () => URL.revokeObjectURL(u);
                img.src = u;
            } else {
                img.src = srcObj || "";
            }

            const starBtn = document.createElement("button");
            starBtn.type = "button";
            starBtn.className = "frame-star-btn" + (frame.starred ? " active" : "");
            starBtn.textContent = frame.starred ? "★" : "☆";
            starBtn.title = "Scegli foto";
            starBtn.addEventListener("click", async (e) => {
                e.stopPropagation();
                frame.starred = !frame.starred;
                await saveVintageRollToDB(currentVintageRoll);
                openVintageLabRoll();
            });

            cell.appendChild(img);
            cell.appendChild(starBtn);

            if (frame.savedLocally) {
                const badge = document.createElement("span");
                badge.className = "frame-saved-badge";
                badge.textContent = "✓ Salvata";
                cell.appendChild(badge);
            }

            const numSpan = document.createElement("span");
            numSpan.className = "frame-num";
            numSpan.textContent = `${String(frame.number).padStart(2, "0")}${frame.flash ? " ⚡" : ""}`;
            cell.appendChild(numSpan);

            const edit = ensureFrameVintageEdit(frame);
            const tagEl = document.createElement("em");
            tagEl.className = "defect-dot";
            tagEl.textContent = edit.enabled ? (edit.showStamp && frame.stamp ? frame.stamp : "FX") : "PULITA";
            cell.appendChild(tagEl);

            cell.addEventListener("click", () => openVintageShotDetail(idx));
            grid.appendChild(cell);
        });
    }

    updateVintageSelectionUI();
    switchView("view-vintage-lab");
}

function syncVintageEditorUI(frame) {
    const edit = ensureFrameVintageEdit(frame);
    const dec = getActiveVintageDecade(edit.decadeId || frame.decadeId);

    document.getElementById("vintageDetailTitle").textContent = `${dec.name} • #${String(frame.number).padStart(2, "0")}`;
    document.getElementById("vintageDetailMeta").textContent = `${edit.enabled ? dec.tag : "ORIG. PULITA"}${frame.savedLocally ? " • ✓ Salvata" : ""}`;

    const starBtn = document.getElementById("vintageDetailStarBtn");
    starBtn.textContent = frame.starred ? "★" : "☆";
    starBtn.classList.toggle("btn-gold", !!frame.starred);

    const effBtn = document.getElementById("vEditEffectsToggle");
    effBtn.textContent = edit.enabled ? "✨ Effetti Vintage: ON" : "✨ Effetti Vintage: OFF";
    effBtn.classList.toggle("btn-gold-outline", edit.enabled);

    const dateBtn = document.getElementById("vEditDateToggle");
    dateBtn.textContent = edit.showStamp ? "📅 Data: ON" : "📅 Data: OFF";
    dateBtn.classList.toggle("btn-gold-outline", edit.showStamp);

    const strip = document.getElementById("vEditDecadeStrip");
    strip.innerHTML = "";
    VINTAGE_DECADES.forEach(item => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "vintage-era-btn" + (item.id === dec.id ? " active" : "");
        b.textContent = item.tag;
        b.addEventListener("click", () => {
            edit.decadeId = item.id;
            edit.enabled = true;
            edit.ca = item.optics ? item.optics.ca : 0.45;
            edit.vignette = item.burn || 0.35;
            syncVintageEditorUI(frame);
            refreshVintageDetailPreview(frame);
            scheduleSaveVintageEditedFrame(frame);
        });
        strip.appendChild(b);
    });

    document.getElementById("vEditLeakSlider").value = edit.lightLeak;
    document.getElementById("vEditLeakVal").textContent = Math.round(edit.lightLeak * 100) + "%";
    document.getElementById("vEditCaSlider").value = edit.ca;
    document.getElementById("vEditCaVal").textContent = Math.round(edit.ca * 100) + "%";
    document.getElementById("vEditVigSlider").value = edit.vignette;
    document.getElementById("vEditVigVal").textContent = Math.round(edit.vignette * 100) + "%";
    document.getElementById("vEditChemSlider").value = edit.chemStain;
    document.getElementById("vEditChemVal").textContent = Math.round(edit.chemStain * 100) + "%";
    document.getElementById("vEditAgedSlider").value = edit.agedPaper;
    document.getElementById("vEditAgedVal").textContent = Math.round(edit.agedPaper * 100) + "%";
    document.getElementById("vEditScratchSlider").value = edit.scratches;
    document.getElementById("vEditScratchVal").textContent = Math.round(edit.scratches * 100) + "%";
    document.getElementById("vEditEvSlider").value = edit.ev;
    document.getElementById("vEditEvVal").textContent = (edit.ev > 0 ? "+" : "") + edit.ev.toFixed(1);
}

async function refreshVintageDetailPreview(frame) {
    if (!activeVintageRawImg) return;
    const detailCanvas = document.getElementById("vintageDetailCanvas");
    if (vintageDetailShowOriginal) {
        const w = activeVintageRawImg.naturalWidth || activeVintageRawImg.width;
        const h = activeVintageRawImg.naturalHeight || activeVintageRawImg.height;
        const scale = Math.min(1, 1400 / Math.max(w, h));
        detailCanvas.width = Math.round(w * scale);
        detailCanvas.height = Math.round(h * scale);
        detailCanvas.getContext("2d").drawImage(activeVintageRawImg, 0, 0, detailCanvas.width, detailCanvas.height);
        return;
    }
    const rendered = await renderVintageShotWithEdit(activeVintageRawImg, frame, 1400);
    detailCanvas.width = rendered.width;
    detailCanvas.height = rendered.height;
    detailCanvas.getContext("2d").drawImage(rendered, 0, 0);
    rendered.width = 0; rendered.height = 0;
}

function scheduleSaveVintageEditedFrame(frame) {
    clearTimeout(vintageEditSaveTimer);
    vintageEditSaveTimer = setTimeout(async () => {
        if (!activeVintageRawImg || !currentVintageRoll) return;
        const fullCanvas = await renderVintageShotWithEdit(activeVintageRawImg, frame, null);
        frame.developedBlob = await canvasToBlob(fullCanvas, "image/jpeg", 0.95);

        const tCanvas = document.createElement("canvas");
        const tW = 360;
        const tH = Math.round((fullCanvas.height / fullCanvas.width) * tW);
        tCanvas.width = tW;
        tCanvas.height = tH;
        tCanvas.getContext("2d").drawImage(fullCanvas, 0, 0, tW, tH);
        frame.thumbBlob = await canvasToBlob(tCanvas, "image/jpeg", 0.80);

        fullCanvas.width = 0; fullCanvas.height = 0;
        tCanvas.width = 0; tCanvas.height = 0;
        await saveVintageRollToDB(currentVintageRoll);
        await refreshStorageSummary();
    }, 280);
}

async function openVintageShotDetail(idx) {
    activeVintageDetailIdx = idx;
    const frame = currentVintageRoll.frames[idx];
    ensureFrameVintageEdit(frame);

    const srcObj = frame.rawBlob || frame.rawDataUrl || frame.developedBlob;
    activeVintageRawImg = await loadImageFromSource(srcObj);
    vintageDetailShowOriginal = false;

    syncVintageEditorUI(frame);
    document.getElementById("vintageDetailModal").classList.add("open");
    await refreshVintageDetailPreview(frame);
}

async function exportVintageFrames(framesToExport, labelSlug) {
    if (!framesToExport.length) {
        alert("Metti prima la stellina (★) su almeno una foto oppure clicca 'Salva Tutte'.");
        return;
    }
    const items = [];
    for (const fr of framesToExport) {
        let blob = fr.developedBlob;
        if (!blob && fr.rawBlob) {
            const img = await loadImageFromSource(fr.rawBlob);
            const c = await renderVintageShotWithEdit(img, fr, null);
            blob = await canvasToBlob(c, "image/jpeg", 0.95);
            c.width = 0; c.height = 0;
        }
        if (blob) {
            items.push({
                name: `usa-getta-${currentVintageRoll.decadeId}-f${String(fr.number).padStart(2, "0")}.jpg`,
                blob
            });
            fr.savedLocally = true;
        }
    }
    await downloadImagesBatch(items, `analog-photolab-${labelSlug}.zip`);
    await saveVintageRollToDB(currentVintageRoll);
    await refreshVintageArchiveList();
    await refreshStorageSummary();
    openVintageLabRoll();
}

function initVintageEventListeners() {
    renderVintageHomeGrid();

    document.getElementById("backHomeFromDisposableBtn").addEventListener("click", () => {
        refreshHomeStatus();
        switchView("view-home");
    });

    document.querySelectorAll("#vintageExpCountRow .exp-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            document.querySelectorAll("#vintageExpCountRow .exp-pill").forEach(p => p.classList.remove("selected"));
            pill.classList.add("selected");
            selectedVintageExposures = parseInt(pill.dataset.count);
        });
    });

    document.getElementById("startVintageCamBtn").addEventListener("click", async () => {
        getAudioCtx();
        currentVintageRoll = {
            id: "vroll-" + Date.now(),
            createdAt: Date.now(),
            decadeId: selectedVintageDecadeId,
            capacity: selectedVintageExposures,
            status: "shooting",
            frames: []
        };
        await saveVintageRollToDB(currentVintageRoll);
        if (typeof refreshHomeStatus === "function") refreshHomeStatus();
        enterVintageCameraMode();
    });

    document.getElementById("vintageExitBtn").addEventListener("click", () => {
        if (vintageDeveloping) return;
        stopCamera();
        refreshVintageArchiveList();
        if (typeof refreshHomeStatus === "function") refreshHomeStatus();
        switchView("view-home");
    });

    document.getElementById("vintageRewindBtn").addEventListener("click", async () => {
        if (vintageDeveloping || !currentVintageRoll) return;
        if (currentVintageRoll.frames.length === 0) {
            if (confirm("Nessuna foto scattata. Estrarre il rullino Usa & Getta vuoto?")) {
                await deleteVintageRollFromDB(currentVintageRoll.id);
                currentVintageRoll = null;
                stopCamera();
                await refreshVintageArchiveList();
                if (typeof refreshHomeStatus === "function") refreshHomeStatus();
                switchView("view-disposable-load");
            }
            return;
        }
        if (currentVintageRoll.frames.length >= currentVintageRoll.capacity ||
            confirm(`Riavvolgere e sviluppare ora il rullino con ${currentVintageRoll.frames.length} foto?`)) {
            executeVintageDevelopSequence();
        }
    });

    document.getElementById("vintageFinishRewindBtn").addEventListener("click", executeVintageDevelopSequence);

    document.getElementById("vintageThirdsToggleBtn").addEventListener("click", () => {
        thirdsVisible = !thirdsVisible;
        localStorage.setItem("analog_lab_thirds_v7", thirdsVisible ? "1" : "0");
        document.getElementById("vintageThirdsGrid").classList.toggle("visible", thirdsVisible);
        document.getElementById("vintageThirdsToggleBtn").classList.toggle("active", thirdsVisible);
        syncThirdsUI();
    });

    document.getElementById("vintageRandomBtn").addEventListener("click", () => {
        vintageRandomEnabled = !vintageRandomEnabled;
        updateVintageCameraHUD();
    });

    document.getElementById("vintageDateBtn").addEventListener("click", () => {
        vintageDateMode = vintageDateMode === "era" ? "today" : (vintageDateMode === "today" ? "off" : "era");
        updateVintageCameraHUD();
    });

    document.getElementById("vintageFlashChargeBtn").addEventListener("click", () => {
        getAudioCtx();
        triggerVintageFlashCharge();
    });

    document.getElementById("vintageSwitchCamBtn").addEventListener("click", () => {
        facingMode = facingMode === "environment" ? "user" : "environment";
        startVintageCameraStream();
    });

    // ROTELLA PLASTICA TRASCINABILE CON IL DITO (TRAC-TRAC-TRAC)
    const wheelHousing = document.getElementById("vintageWheelControl");
    const wheelDisc = document.getElementById("vintageWheelDisc");
    let wheelDrag = { active: false, lastX: 0, lastY: 0 };

    function advanceWheelByDelta(delta) {
        if (vintageDeveloping || vintageWheelArmed) return;
        if (currentVintageRoll && currentVintageRoll.frames.length >= currentVintageRoll.capacity) return;

        vintageWheelProgress = Math.min(100, vintageWheelProgress + delta);
        vintageWheelVisualOffset = (vintageWheelVisualOffset + delta * 1.4) % 24;
        wheelDisc.style.backgroundPosition = `${Math.round(vintageWheelVisualOffset)}px 0px`;

        const currentNotch = Math.floor(vintageWheelProgress / 16);
        if (currentNotch > vintageWheelLastNotch) {
            vintageWheelLastNotch = currentNotch;
            playPlasticWheelClick(currentNotch);
            if (navigator.vibrate) navigator.vibrate(8);
        }

        if (vintageWheelProgress >= 100) {
            playPlasticWheelLock();
            if (navigator.vibrate) navigator.vibrate(18);
            setVintageWheelArmedState(true);
        } else {
            syncVintageWheelUI();
        }
    }

    wheelHousing.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        getAudioCtx();
        wheelDrag.active = true;
        wheelDrag.lastX = e.clientX;
        wheelDrag.lastY = e.clientY;
        wheelHousing.setPointerCapture?.(e.pointerId);
    });

    wheelHousing.addEventListener("pointermove", (e) => {
        if (!wheelDrag.active) return;
        const dx = e.clientX - wheelDrag.lastX;
        const dy = e.clientY - wheelDrag.lastY;
        wheelDrag.lastX = e.clientX;
        wheelDrag.lastY = e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist > 1) advanceWheelByDelta(dist * 1.15);
    });

    const stopWheelDrag = () => { wheelDrag.active = false; };
    wheelHousing.addEventListener("pointerup", stopWheelDrag);
    wheelHousing.addEventListener("pointercancel", stopWheelDrag);

    document.getElementById("vintageShutterBtn").addEventListener("click", async () => {
        if (vintageCapturing || vintageDeveloping) return;
        if (!currentVintageRoll || currentVintageRoll.frames.length >= currentVintageRoll.capacity) {
            playLockedShutterTick();
            return;
        }
        if (!vintageWheelArmed) {
            playLockedShutterTick();
            const badge = document.getElementById("vintageCockBadge");
            badge.style.transform = "scale(1.08)";
            setTimeout(() => { badge.style.transform = "scale(1)"; }, 160);
            return;
        }
        const video = document.getElementById("vintageVideo");
        if (!mediaStream || video.videoWidth === 0) {
            alert("Fotocamera live non attiva: tocca '📷 Carica' qui a sinistra per caricare foto sul rullino Usa & Getta!");
            return;
        }

        const useFlash = vintageFlashState === "ready";
        vintageCapturing = true;
        const prevFlashActive = flashActive;
        flashActive = useFlash;
        try {
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameFullRes(video, 3 / 4, useFlash);
            await recordVintageLatentFrame(capCanvas, useFlash, hardwareFlashFired);
            capCanvas.width = 0; capCanvas.height = 0;
        } finally {
            flashActive = prevFlashActive;
            vintageCapturing = false;
        }
    });

    document.getElementById("vintageGalleryInput").addEventListener("change", async (e) => {
        if (vintageDeveloping || !currentVintageRoll) {
            e.target.value = "";
            return;
        }
        const files = Array.from(e.target.files || []);
        e.target.value = "";
        if (!files.length) return;

        const useFlash = vintageFlashState === "ready";
        for (const file of files) {
            if (currentVintageRoll.frames.length >= currentVintageRoll.capacity) {
                alert(`Rullino Usa & Getta pieno (${currentVintageRoll.capacity} pose)! Premi Sviluppa.`);
                break;
            }
            const dataUrl = await new Promise((res) => {
                const r = new FileReader();
                r.onload = (ev) => res(ev.target.result);
                r.readAsDataURL(file);
            });
            const img = await loadImageFromSource(dataUrl);
            const c = document.createElement("canvas");
            c.width = img.width; c.height = img.height;
            c.getContext("2d").drawImage(img, 0, 0);
            await recordVintageLatentFrame(c, useFlash, false);
            c.width = 0; c.height = 0;
        }
    });

    document.getElementById("vintageLabHomeBtn").addEventListener("click", () => {
        currentVintageRoll = null;
        refreshVintageArchiveList();
        refreshStorageSummary();
        if (typeof refreshHomeStatus === "function") refreshHomeStatus();
        switchView("view-home");
    });

    document.getElementById("vintageSelectAllBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        const allStarred = currentVintageRoll.frames.every(f => f.starred);
        currentVintageRoll.frames.forEach(f => { f.starred = !allStarred; });
        await saveVintageRollToDB(currentVintageRoll);
        openVintageLabRoll();
    });

    document.getElementById("vintageSaveSelectedBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        const selected = currentVintageRoll.frames.filter(f => f.starred);
        await exportVintageFrames(selected, `${currentVintageRoll.decadeId}-scelte`);
    });

    document.getElementById("vintageSaveAllBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        await exportVintageFrames(currentVintageRoll.frames, `${currentVintageRoll.decadeId}-tutte`);
    });

    // EDITOR POST-SCATTO USA & GETTA
    document.getElementById("vintageDetailCloseBtn").addEventListener("click", async () => {
        clearTimeout(vintageEditSaveTimer);
        if (currentVintageRoll && activeVintageRawImg) {
            const frame = currentVintageRoll.frames[activeVintageDetailIdx];
            if (frame) {
                const fullC = await renderVintageShotWithEdit(activeVintageRawImg, frame, null);
                frame.developedBlob = await canvasToBlob(fullC, "image/jpeg", 0.95);
                const tC = document.createElement("canvas");
                tC.width = 360;
                tC.height = Math.round((fullC.height / fullC.width) * 360);
                tC.getContext("2d").drawImage(fullC, 0, 0, tC.width, tC.height);
                frame.thumbBlob = await canvasToBlob(tC, "image/jpeg", 0.80);
                fullC.width = 0; fullC.height = 0; tC.width = 0; tC.height = 0;
                await saveVintageRollToDB(currentVintageRoll);
            }
        }
        document.getElementById("vintageDetailModal").classList.remove("open");
        openVintageLabRoll();
    });

    document.getElementById("vintageDetailStarBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        fr.starred = !fr.starred;
        await saveVintageRollToDB(currentVintageRoll);
        syncVintageEditorUI(fr);
    });

    document.getElementById("vintageDetailSaveBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        if (activeVintageRawImg) {
            const fullC = await renderVintageShotWithEdit(activeVintageRawImg, fr, null);
            fr.developedBlob = await canvasToBlob(fullC, "image/jpeg", 0.95);
            fullC.width = 0; fullC.height = 0;
        }
        await exportVintageFrames([fr], currentVintageRoll.decadeId);
        syncVintageEditorUI(fr);
    });

    document.getElementById("vEditEffectsToggle").addEventListener("click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const edit = ensureFrameVintageEdit(fr);
        edit.enabled = !edit.enabled;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    document.getElementById("vEditDateToggle").addEventListener("click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const edit = ensureFrameVintageEdit(fr);
        edit.showStamp = !edit.showStamp;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    document.getElementById("vEditRerollBtn").addEventListener("click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const dec = getActiveVintageDecade(ensureFrameVintageEdit(fr).decadeId);
        fr.vintageEdit = buildInitialVintageEdit(dec, true);
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    document.getElementById("vEditResetBtn").addEventListener("click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const dec = getActiveVintageDecade(ensureFrameVintageEdit(fr).decadeId);
        fr.vintageEdit = buildInitialVintageEdit(dec, false);
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    [
        ["vEditLeakSlider", "lightLeak"],
        ["vEditCaSlider", "ca"],
        ["vEditVigSlider", "vignette"],
        ["vEditChemSlider", "chemStain"],
        ["vEditAgedSlider", "agedPaper"],
        ["vEditScratchSlider", "scratches"],
        ["vEditEvSlider", "ev"]
    ].forEach(([id, prop]) => {
        document.getElementById(id).addEventListener("input", (e) => {
            const fr = currentVintageRoll.frames[activeVintageDetailIdx];
            const edit = ensureFrameVintageEdit(fr);
            edit[prop] = parseFloat(e.target.value);
            edit.enabled = true;
            syncVintageEditorUI(fr);
            refreshVintageDetailPreview(fr);
            scheduleSaveVintageEditedFrame(fr);
        });
    });

    const vStage = document.getElementById("vintageDetailStage");
    vStage.addEventListener("pointerdown", () => {
        vintageDetailShowOriginal = true;
        if (currentVintageRoll) refreshVintageDetailPreview(currentVintageRoll.frames[activeVintageDetailIdx]);
    });
    const endVHold = () => {
        if (vintageDetailShowOriginal) {
            vintageDetailShowOriginal = false;
            if (currentVintageRoll) refreshVintageDetailPreview(currentVintageRoll.frames[activeVintageDetailIdx]);
        }
    };
    window.addEventListener("pointerup", endVHold);
    window.addEventListener("pointercancel", endVHold);
}
