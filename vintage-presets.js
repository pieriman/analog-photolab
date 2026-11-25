/* =========================================================
   VINTAGE-PRESETS.JS — USA & GETTA v1.0.9 (LED FLASH SINCRO + NAV)
   ========================================================= */

const VINTAGE_DECADES = [
    {
        id: "1940s",
        name: "Anni '40",
        subtitle: "Nitrate Noir • Orto B&N nitido",
        tag: "'40 NOIR",
        yearStamp: "'46",
        color: "#b8b2a6",
        textColor: "#14120e",
        paperId: "ilford-fb-classic",
        grade: 3.0,
        burn: 0.22,
        evBase: -0.10,
        stampColor: "#e6c79c",
        optics: { ca: 0.0, barrel: 0.014, softness: 0.06, fadeBlack: 0.012, orthoBW: true },
        colorGrade: {
            shadowLift: [0.010, 0.009, 0.006],
            midGain: [1.01, 1.00, 0.98],
            highGain: [1.02, 0.99, 0.94]
        },
        film: {
            id: "vintage-40s", name: "1940s Nitrate Noir", iso: 100, mode: "bw",
            toe: 0.010, shoulder: 0.34, contrast: 0.48, temp: 0.0, tint: 0.0,
            saturation: 0.0, shadowTemp: 0.04, highTemp: 0.03,
            halation: 0.04, halThreshold: 0.90, bloom: 0.03, grain: 0.046, grainSize: 1.30,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
        },
        exceptions: { leakProb: 0.14, chemProb: 0.10, agedProb: 0.28, scratchProb: 0.22 }
    },
    {
        id: "1950s",
        name: "Anni '50",
        subtitle: "Kodachrome • Rossi carminio & cobalto",
        tag: "'50 CHROME",
        yearStamp: "'55",
        color: "#d94e3f",
        textColor: "#ffffff",
        paperId: "kodak-endura",
        grade: 2.6,
        burn: 0.12,
        evBase: -0.12,
        stampColor: "#ff9b54",
        optics: { ca: 0.06, barrel: 0.010, softness: 0.0, fadeBlack: 0.0, orthoBW: false },
        colorGrade: {
            shadowLift: [-0.005, -0.002, 0.008],
            midGain: [1.03, 0.99, 0.96],
            highGain: [1.02, 1.00, 0.94]
        },
        film: {
            id: "vintage-50s", name: "1950s Kodachrome", iso: 64, mode: "slide",
            toe: 0.008, shoulder: 0.42, contrast: 0.48, temp: 0.08, tint: 0.02,
            saturation: 1.16, shadowTemp: -0.04, highTemp: 0.06,
            halation: 0.0, halThreshold: 0.94, bloom: 0.0, grain: 0.018, grainSize: 1.00,
            matrix: [1.10, -0.06, -0.04, 0.01, 0.99, 0.00, -0.05, 0.04, 1.01]
        },
        exceptions: { leakProb: 0.14, chemProb: 0.03, agedProb: 0.12, scratchProb: 0.10 }
    },
    {
        id: "1960s",
        name: "Anni '60",
        subtitle: "Agfacolor • Sole caldo & toni pastello",
        tag: "'60 MOD",
        yearStamp: "'68",
        color: "#e08a28",
        textColor: "#141004",
        paperId: "kodak-endura",
        grade: 2.5,
        burn: 0.14,
        evBase: -0.14,
        stampColor: "#ff8c3a",
        optics: { ca: 0.10, barrel: 0.014, softness: 0.04, fadeBlack: 0.008, orthoBW: false },
        colorGrade: {
            shadowLift: [-0.004, 0.010, 0.014],
            midGain: [1.03, 1.00, 0.95],
            highGain: [1.02, 1.00, 0.92]
        },
        film: {
            id: "vintage-60s", name: "1960s Agfa Ekta", iso: 160, mode: "color",
            toe: 0.012, shoulder: 0.46, contrast: 0.36, temp: 0.09, tint: -0.02,
            saturation: 1.12, shadowTemp: -0.05, highTemp: 0.06,
            halation: 0.0, halThreshold: 0.94, bloom: 0.02, grain: 0.024, grainSize: 1.10,
            matrix: [1.06, -0.04, -0.02, -0.01, 1.02, -0.01, -0.04, 0.04, 1.00]
        },
        exceptions: { leakProb: 0.22, chemProb: 0.04, agedProb: 0.16, scratchProb: 0.12 }
    },
    {
        id: "1970s",
        name: "Anni '70",
        subtitle: "Kodacolor II • Ambra calda a colori",
        tag: "'70 AMBER",
        yearStamp: "'77",
        color: "#c97b2b",
        textColor: "#ffffff",
        paperId: "fuji-crystal-matte",
        grade: 2.2,
        burn: 0.18,
        evBase: -0.14,
        stampColor: "#ff7828",
        optics: { ca: 0.12, barrel: 0.016, softness: 0.06, fadeBlack: 0.018, orthoBW: false },
        colorGrade: {
            shadowLift: [0.030, 0.020, 0.006],
            midGain: [1.04, 0.99, 0.90],
            highGain: [1.03, 0.99, 0.88]
        },
        film: {
            id: "vintage-70s", name: "1970s Amber Fade", iso: 200, mode: "color",
            toe: 0.018, shoulder: 0.54, contrast: 0.28, temp: 0.12, tint: 0.02,
            saturation: 0.90, shadowTemp: 0.05, highTemp: 0.07,
            halation: 0.02, halThreshold: 0.92, bloom: 0.02, grain: 0.030, grainSize: 1.24,
            matrix: [1.05, 0.01, -0.06, 0.02, 0.99, -0.01, -0.06, 0.03, 1.03]
        },
        exceptions: { leakProb: 0.26, chemProb: 0.06, agedProb: 0.24, scratchProb: 0.16 }
    },
    {
        id: "1980s",
        name: "Anni '80",
        subtitle: "Minilab Pop • Contrasto & Magenta",
        tag: "'80 MINILAB",
        yearStamp: "'86",
        color: "#d9488b",
        textColor: "#ffffff",
        paperId: "fuji-crystal-glossy",
        grade: 2.6,
        burn: 0.14,
        evBase: -0.15,
        stampColor: "#ff661a",
        optics: { ca: 0.16, barrel: 0.016, softness: 0.06, fadeBlack: 0.004, orthoBW: false },
        colorGrade: {
            shadowLift: [0.008, -0.002, 0.014],
            midGain: [1.02, 0.98, 1.01],
            highGain: [1.01, 0.99, 0.99]
        },
        film: {
            id: "vintage-80s", name: "1980s Minilab Pop", iso: 400, mode: "color",
            toe: 0.010, shoulder: 0.42, contrast: 0.38, temp: 0.04, tint: 0.06,
            saturation: 1.14, shadowTemp: 0.03, highTemp: 0.03,
            halation: 0.0, halThreshold: 0.94, bloom: 0.0, grain: 0.028, grainSize: 1.15,
            matrix: [1.05, -0.04, -0.01, -0.02, 0.98, 0.04, 0.01, 0.01, 0.98]
        },
        exceptions: { leakProb: 0.24, chemProb: 0.02, agedProb: 0.04, scratchProb: 0.08 }
    },
    {
        id: "1990s",
        name: "Anni '90 (Huji)",
        subtitle: "Huji '98 • 30mm f/10 • Ombre malva-ardesia",
        tag: "'98 HUJI",
        yearStamp: "'98",
        color: "#1fa35b",
        textColor: "#ffffff",
        paperId: "fuji-crystal-glossy",
        grade: 2.5,
        burn: 0.16,
        evBase: -0.20,
        stampColor: "#ff5a14",
        optics: { ca: 0.22, barrel: 0.022, softness: 0.18, fadeBlack: 0.008, orthoBW: false },
        colorGrade: {
            shadowLift: [0.010, 0.004, 0.016],
            midGain: [1.02, 0.99, 0.99],
            highGain: [1.00, 0.98, 0.96]
        },
        film: {
            id: "vintage-90s", name: "1998 Huji Usa & Getta", iso: 800, mode: "color",
            toe: 0.010, shoulder: 0.48, contrast: 0.40, temp: 0.03, tint: 0.02,
            saturation: 1.12, shadowTemp: -0.03, highTemp: 0.03,
            halation: 0.0, halThreshold: 0.94, bloom: 0.0, grain: 0.028, grainSize: 1.15,
            matrix: [1.06, -0.03, -0.03, -0.02, 1.00, 0.02, -0.03, 0.02, 1.01]
        },
        exceptions: { leakProb: 0.36, chemProb: 0.0, agedProb: 0.0, scratchProb: 0.05 }
    },
    {
        id: "y2k",
        name: "Y2K (2000s)",
        subtitle: "Compatta '02 • Freddo nitido & ciano",
        tag: "'02 Y2K",
        yearStamp: "'02",
        color: "#3ea3d8",
        textColor: "#0d141a",
        paperId: "fuji-crystal-glossy",
        grade: 2.6,
        burn: 0.14,
        evBase: -0.14,
        stampColor: "#ff3d1f",
        optics: { ca: 0.14, barrel: 0.014, softness: 0.0, fadeBlack: 0.0, orthoBW: false },
        colorGrade: {
            shadowLift: [-0.004, 0.004, 0.014],
            midGain: [0.99, 1.00, 1.02],
            highGain: [0.96, 0.99, 1.04]
        },
        film: {
            id: "vintage-y2k", name: "Y2K Early Compact", iso: 400, mode: "color",
            toe: 0.008, shoulder: 0.40, contrast: 0.44, temp: -0.07, tint: 0.02,
            saturation: 1.12, shadowTemp: -0.04, highTemp: -0.05,
            halation: 0.0, halThreshold: 0.94, bloom: 0.0, grain: 0.020, grainSize: 1.05,
            matrix: [1.00, -0.02, 0.02, -0.01, 1.01, 0.00, 0.02, 0.01, 1.04]
        },
        exceptions: { leakProb: 0.20, chemProb: 0.0, agedProb: 0.0, scratchProb: 0.04 }
    }
];

let selectedVintageDecadeId = localStorage.getItem("analog_photolab_vintage_decade") || "1990s";
let selectedVintageExposures = 12;
let vintageRandomEnabled = true;
let vintageDateMode = "era";
let vintageFlashState = "off";
let vintageFlashChargeTimer = null;

let vintageWheelArmed = false;
let vintageWheelProgress = 0;
let vintageWheelLastNotch = 0;
let vintageWheelVisualOffset = 0;

let vintageCapturing = false;
let vintageDeveloping = false;
let vintagePendingCount = 0;
let vintageSaveQueue = Promise.resolve();

let currentVintageRoll = null;
let memoryVintageRolls = [];
let activeVintageDetailIdx = 0;
let activeVintageRawImg = null;
let vintageDetailShowOriginal = false;
let vintageEditSaveTimer = null;

function vWaitPaint() {
    return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
}

function getActiveVintageDecade(id = selectedVintageDecadeId) {
    return VINTAGE_DECADES.find(d => d.id === id) || VINTAGE_DECADES[5];
}

function getVintageDateParts() {
    const now = new Date();
    return {
        mm: String(now.getMonth() + 1).padStart(2, "0"),
        dd: String(now.getDate()).padStart(2, "0"),
        todayYY: "'" + String(now.getFullYear()).slice(-2)
    };
}

function getVintageDateStampString(decade) {
    if (vintageDateMode === "off") return "";
    const { mm, dd, todayYY } = getVintageDateParts();
    const yy = vintageDateMode === "today" ? todayYY : decade.yearStamp;
    return `${yy} ${mm} ${dd}`;
}

function resolveFrameStampString(frame, decade) {
    if (frame.dateMMDD) {
        const yy = (frame.dateModeAtShot === "today" && frame.todayYY) ? frame.todayYY : decade.yearStamp;
        return `${yy} ${frame.dateMMDD}`;
    }
    if (frame.stamp) return frame.stamp;
    const { mm, dd } = getVintageDateParts();
    return `${decade.yearStamp} ${mm} ${dd}`;
}

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
        osc.frequency.exponentialRampToValueAtTime(3400, now + 0.75);
        g.gain.setValueAtTime(0.001, now);
        g.gain.linearRampToValueAtTime(0.065, now + 0.12);
        g.gain.setValueAtTime(0.05, now + 0.55);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.78);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(now); osc.stop(now + 0.80);
    } catch (e) { }
}

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

async function enterDisposableSection() {
    await vintageSaveQueue.catch(() => { });
    const vRolls = await getAllVintageRollsFromDB();
    const activeShooting = vRolls.find(r => r.status === "shooting");
    if (activeShooting) {
        currentVintageRoll = activeShooting;
        enterVintageCameraMode();
        return;
    }
    renderVintageHomeGrid();
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

function getEffectiveVintageCount() {
    if (!currentVintageRoll) return 0;
    return currentVintageRoll.frames.length + vintagePendingCount;
}

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

    const isFull = currentVintageRoll && getEffectiveVintageCount() >= currentVintageRoll.capacity;
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
        if (facingMode === "user") lbl.textContent = "⚡ FLASH SCHERMO";
        else if (hardwareFlashSupport.hasTorch) lbl.textContent = "⚡ LED PRONTO";
        else lbl.textContent = "⚡ FLASH PRONTO";
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
        }, 780);
    } else {
        vintageFlashState = "off";
        updateVintageFlashButtonUI();
    }
}

function updateVintageCameraHUD() {
    if (!currentVintageRoll) return;
    const d = getActiveVintageDecade(currentVintageRoll.decadeId);
    document.getElementById("vintageTopEraBadge").textContent = d.tag;
    document.getElementById("vintageVfEraLabel").textContent = `${d.tag} • 30mm f/10 • 1m–∞`;

    const cur = String(Math.min(currentVintageRoll.capacity, getEffectiveVintageCount())).padStart(2, "0");
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

    const isFull = getEffectiveVintageCount() >= currentVintageRoll.capacity;
    document.getElementById("vintageRewindBtn").classList.toggle("pulse-finish", isFull);
    document.getElementById("vintageFinishedOverlay").classList.toggle("open", isFull && !vintageDeveloping);
}

async function applyFixedHyperfocalFocus(track) {
    if (!track || !track.getCapabilities || !track.applyConstraints) return;
    try {
        const caps = track.getCapabilities();
        if (caps && Array.isArray(caps.focusMode) && caps.focusMode.includes("manual") && caps.focusDistance) {
            const minD = typeof caps.focusDistance.min === "number" ? caps.focusDistance.min : 0;
            const maxD = typeof caps.focusDistance.max === "number" ? caps.focusDistance.max : 10;
            const targetDist = maxD <= 2.5 ? Math.min(maxD, Math.max(minD, 0.45)) : Math.min(maxD, Math.max(minD, 2.2));
            await track.applyConstraints({
                advanced: [{ focusMode: "manual", focusDistance: targetDist }]
            });
        }
    } catch (e) { }
}

async function startVintageCameraStream() {
    stopCamera();
    const video = document.getElementById("vintageVideo");
    const fallback = document.getElementById("vintageFallbackMsg");
    const videoConstraints = { facingMode: facingMode, width: { ideal: 2560 }, height: { ideal: 1920 } };

    try {
        mediaStream = await openCameraStreamWithRetry(videoConstraints);
        video.srcObject = mediaStream;
        video.style.display = "block";
        try { await video.play(); } catch (e) { }
        fallback.style.display = "none";
        await detectFlashCapabilities();
        updateVintageFlashButtonUI();
        const track = mediaStream.getVideoTracks()[0];
        if (track) applyFixedHyperfocalFocus(track);
    } catch (err) {
        video.style.display = "none";
        fallback.style.display = "flex";
    }
}

function enterVintageCameraMode() {
    vintageDeveloping = false;
    vintagePendingCount = 0;
    setVintageWheelArmedState(false);
    document.getElementById("vintageFinishedOverlay").classList.remove("open");
    document.getElementById("vintageDevAnimOverlay").classList.remove("open");
    document.getElementById("vintageThirdsGrid").classList.toggle("visible", thirdsVisible);
    document.getElementById("vintageThirdsToggleBtn").classList.toggle("active", thirdsVisible);
    updateVintageCameraHUD();
    switchView("view-vintage-camera");
    startVintageCameraStream();
}

function enqueueVintageLatentFrame(sourceCanvas, usedFlash = false, hardwareFlashFired = false) {
    if (!currentVintageRoll || getEffectiveVintageCount() >= currentVintageRoll.capacity) {
        sourceCanvas.width = 0; sourceCanvas.height = 0;
        return Promise.resolve();
    }

    const rollRef = currentVintageRoll;
    const decadeId = rollRef.decadeId;
    const dateModeAtShot = vintageDateMode;
    const { mm, dd, todayYY } = getVintageDateParts();
    const stamp = getVintageDateStampString(getActiveVintageDecade(decadeId));

    vintagePendingCount++;
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
        }, 650);
    }
    updateVintageCameraHUD();

    const job = vintageSaveQueue.then(async () => {
        await new Promise(r => setTimeout(r, 40));
        try {
            const rawBlob = await canvasToBlob(sourceCanvas, "image/jpeg", 0.90);
            sourceCanvas.width = 0; sourceCanvas.height = 0;

            rollRef.frames.push({
                number: rollRef.frames.length + 1,
                decadeId,
                flash: usedFlash,
                hardwareFlashFired,
                starred: false,
                savedLocally: false,
                rawBlob,
                developedBlob: null,
                thumbBlob: null,
                stamp,
                dateModeAtShot,
                dateMMDD: `${mm} ${dd}`,
                todayYY,
                vintageEdit: null
            });

            await saveVintageRollToDB(rollRef);
        } finally {
            vintagePendingCount = Math.max(0, vintagePendingCount - 1);
            if (currentVintageRoll === rollRef) updateVintageCameraHUD();
        }
    });

    vintageSaveQueue = job.catch(() => { });
    return job;
}

function buildInitialVintageEdit(decade, applyRandom, showStamp = true) {
    const ex = decade.exceptions;
    const rollVal = (prob) => (applyRandom && Math.random() < prob) ? +(0.24 + Math.random() * 0.42).toFixed(2) : 0;

    return {
        enabled: true,
        decadeId: decade.id,
        showStamp,
        seed: Math.random(),
        lightLeak: rollVal(ex.leakProb),
        chemStain: rollVal(ex.chemProb),
        agedPaper: rollVal(ex.agedProb),
        scratches: rollVal(ex.scratchProb),
        ca: decade.optics ? decade.optics.ca : 0.14,
        vignette: decade.burn || 0.16,
        ev: decade.evBase || -0.14
    };
}

function ensureFrameVintageEdit(frame) {
    if (frame.vintageEdit) return frame.vintageEdit;
    const dec = getActiveVintageDecade(frame.decadeId || (currentVintageRoll && currentVintageRoll.decadeId));
    const showStamp = frame.dateModeAtShot ? frame.dateModeAtShot !== "off" : !!frame.stamp;
    frame.vintageEdit = buildInitialVintageEdit(dec, false, showStamp);
    return frame.vintageEdit;
}

async function renderVintageShotWithEdit(srcImg, frame, maxDimOverride = null) {
    const edit = ensureFrameVintageEdit(frame);
    const decade = getActiveVintageDecade(edit.decadeId || frame.decadeId);
    const outCanvas = document.createElement("canvas");
    const targetDim = maxDimOverride || Math.min(MAX_GL_TEX, Math.max(srcImg.naturalWidth || srcImg.width, srcImg.naturalHeight || srcImg.height));

    if (!edit.enabled) {
        const cleanStub = {
            exposureEV: 0,
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
        renderFrameWithWebGL(srcImg, neutralFilm, cleanStub, 0, null, true, targetDim, 0);
    } else {
        const defects = {
            seed: edit.seed,
            lightLeak: { active: edit.lightLeak > 0, intensity: edit.lightLeak },
            chemStain: { active: edit.chemStain > 0, intensity: edit.chemStain },
            agedPaper: { active: edit.agedPaper > 0, intensity: edit.agedPaper },
            scratches: { active: edit.scratches > 0, intensity: edit.scratches }
        };
        const flashBoost = frame.flash ? (frame.hardwareFlashFired ? 0.05 : 0.38) : 0.0;
        const flashFalloff = frame.flash ? (frame.hardwareFlashFired ? 0.30 : 0.85) : 0.0;

        const frameStub = {
            exposureEV: (edit.ev || 0) + flashBoost,
            aperture: 4.0,
            defectSeed: edit.seed,
            defects,
            grade: decade.colorGrade || null,
            optics: {
                ca: edit.ca,
                barrel: decade.optics ? decade.optics.barrel : 0.016,
                softness: decade.optics ? decade.optics.softness : 0.0,
                fadeBlack: decade.optics ? decade.optics.fadeBlack : 0.005,
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
            paperTexScale: 0.25,
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
        renderFrameWithWebGL(srcImg, decade.film, frameStub, 0, printOptsStub, false, targetDim, 0);
    }

    outCanvas.width = glCanvas.width;
    outCanvas.height = glCanvas.height;
    const oCtx = outCanvas.getContext("2d");
    oCtx.drawImage(glCanvas, 0, 0);

    if (edit.enabled && edit.showStamp) {
        const stampTxt = resolveFrameStampString(frame, decade);
        if (stampTxt) {
            const fontSize = Math.max(20, Math.round(outCanvas.width * 0.036));
            oCtx.save();
            oCtx.font = `900 ${fontSize}px "Courier New", monospace`;
            oCtx.textAlign = "right";
            oCtx.textBaseline = "bottom";
            const padX = Math.round(outCanvas.width * 0.045);
            const padY = Math.round(outCanvas.height * 0.038);

            oCtx.shadowColor = "rgba(255, 42, 0, 0.95)";
            oCtx.shadowBlur = Math.round(fontSize * 0.55);
            oCtx.fillStyle = decade.stampColor || "#ff5a14";
            oCtx.fillText(stampTxt, outCanvas.width - padX, outCanvas.height - padY);

            oCtx.shadowBlur = Math.round(fontSize * 0.14);
            oCtx.fillStyle = "rgba(255, 224, 166, 0.88)";
            oCtx.fillText(stampTxt, outCanvas.width - padX, outCanvas.height - padY);
            oCtx.restore();
        }
    }

    return outCanvas;
}

async function executeVintageDevelopSequence() {
    if (vintageDeveloping || !currentVintageRoll) return;
    vintageDeveloping = true;
    getAudioCtx();
    document.getElementById("vintageFinishedOverlay").classList.remove("open");
    const overlay = document.getElementById("vintageDevAnimOverlay");
    const fill = document.getElementById("vintageDevProgressFill");
    const sub = document.getElementById("vintageDevAnimSub");
    const counterEl = document.getElementById("vintageCounter");
    fill.style.width = "5%";
    sub.textContent = "Riavvolgimento e preparazione sviluppo...";
    overlay.classList.add("open");

    await vintageSaveQueue.catch(() => { });
    if (currentVintageRoll.frames.length === 0) {
        overlay.classList.remove("open");
        vintageDeveloping = false;
        return;
    }

    const minDurationMs = 1200;
    playFilmRewindSound(1.2);
    const startTime = performance.now();

    const total = currentVintageRoll.frames.length;
    const totStr = String(currentVintageRoll.capacity).padStart(2, "0");

    for (let i = 0; i < total; i++) {
        await vWaitPaint();
        const frame = currentVintageRoll.frames[i];
        const decade = getActiveVintageDecade(frame.decadeId || currentVintageRoll.decadeId);
        const showStamp = frame.dateModeAtShot ? frame.dateModeAtShot !== "off" : !!frame.stamp;
        frame.vintageEdit = buildInitialVintageEdit(decade, vintageRandomEnabled, showStamp);

        const srcImg = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
        const outCanvas = await renderVintageShotWithEdit(srcImg, frame, null);

        frame.developedBlob = await canvasToBlob(outCanvas, "image/jpeg", 0.92);

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
        const p = Math.min(0.96, Math.max((i + 1) / total * 0.85, elapsed / minDurationMs));
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
    refreshVintageArchiveList().catch(() => { });
    refreshStorageSummary().catch(() => { });
    if (typeof refreshHomeStatus === "function") refreshHomeStatus();

    overlay.classList.remove("open");
    vintageDeveloping = false;
    openVintageLabRoll();
}

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
            const editDec = getActiveVintageDecade(edit.decadeId || frame.decadeId);
            const tagEl = document.createElement("em");
            tagEl.className = "defect-dot";
            tagEl.textContent = edit.enabled ? (edit.showStamp ? resolveFrameStampString(frame, editDec) : "FX") : "PULITA";
            cell.appendChild(tagEl);

            cell.addEventListener("click", () => openVintageShotDetail(idx));
            grid.appendChild(cell);
        });
    }

    updateVintageSelectionUI();
    switchView("view-vintage-lab");
}

function layoutVintageDetailCanvas(detailCanvas) {
    const stage = document.getElementById("vintageDetailStage");
    if (!stage || !detailCanvas || !detailCanvas.width || !detailCanvas.height) return;
    const availW = Math.max(80, stage.clientWidth - 24);
    const availH = Math.max(80, stage.clientHeight - 24);
    const aspect = detailCanvas.width / detailCanvas.height;
    let dispW = availW;
    let dispH = dispW / aspect;
    if (dispH > availH) {
        dispH = availH;
        dispW = dispH * aspect;
    }
    detailCanvas.style.width = Math.round(dispW) + "px";
    detailCanvas.style.height = Math.round(dispH) + "px";
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
            edit.ca = item.optics ? item.optics.ca : 0.14;
            edit.vignette = item.burn || 0.16;
            edit.ev = item.evBase || -0.14;
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
        layoutVintageDetailCanvas(detailCanvas);
        return;
    }
    const rendered = await renderVintageShotWithEdit(activeVintageRawImg, frame, 1400);
    detailCanvas.width = rendered.width;
    detailCanvas.height = rendered.height;
    detailCanvas.getContext("2d").drawImage(rendered, 0, 0);
    rendered.width = 0; rendered.height = 0;
    layoutVintageDetailCanvas(detailCanvas);
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
    if (typeof ensureBackGuard === "function") ensureBackGuard();
    await refreshVintageDetailPreview(frame);
}

async function closeVintageDetailModal() {
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

    const vOn = (id, ev, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(ev, fn);
    };

    vOn("backHomeFromDisposableBtn", "click", () => {
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

    vOn("startVintageCamBtn", "click", async () => {
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
        refreshHomeStatus().catch(() => { });
        enterVintageCameraMode();
    });

    vOn("vintageExitBtn", "click", async () => {
        if (vintageDeveloping || vintageCapturing) return;
        await vintageSaveQueue.catch(() => { });
        stopCamera();
        refreshVintageArchiveList();
        refreshStorageSummary();
        if (typeof refreshHomeStatus === "function") refreshHomeStatus();
        switchView("view-home");
    });

    vOn("vintageRewindBtn", "click", async () => {
        if (vintageDeveloping || vintageCapturing || !currentVintageRoll) return;
        const count = getEffectiveVintageCount();
        if (count === 0) {
            if (confirm("Nessuna foto scattata. Estrarre il rullino Usa & Getta vuoto?")) {
                await vintageSaveQueue.catch(() => { });
                await deleteVintageRollFromDB(currentVintageRoll.id);
                currentVintageRoll = null;
                stopCamera();
                refreshVintageArchiveList().catch(() => { });
                if (typeof refreshHomeStatus === "function") refreshHomeStatus();
                switchView("view-disposable-load");
            }
            return;
        }
        if (count >= currentVintageRoll.capacity ||
            confirm(`Riavvolgere e sviluppare ora il rullino con ${count} foto?`)) {
            executeVintageDevelopSequence();
        }
    });

    vOn("vintageFinishRewindBtn", "click", executeVintageDevelopSequence);

    vOn("vintageThirdsToggleBtn", "click", () => {
        thirdsVisible = !thirdsVisible;
        localStorage.setItem("analog_lab_thirds_v7", thirdsVisible ? "1" : "0");
        document.getElementById("vintageThirdsGrid").classList.toggle("visible", thirdsVisible);
        document.getElementById("vintageThirdsToggleBtn").classList.toggle("active", thirdsVisible);
        syncThirdsUI();
    });

    vOn("vintageRandomBtn", "click", () => {
        vintageRandomEnabled = !vintageRandomEnabled;
        updateVintageCameraHUD();
    });

    vOn("vintageDateBtn", "click", () => {
        vintageDateMode = vintageDateMode === "era" ? "today" : (vintageDateMode === "today" ? "off" : "era");
        updateVintageCameraHUD();
    });

    vOn("vintageFlashChargeBtn", "click", () => {
        getAudioCtx();
        triggerVintageFlashCharge();
    });

    vOn("vintageSwitchCamBtn", "click", () => {
        if (vintageCapturing) return;
        facingMode = facingMode === "environment" ? "user" : "environment";
        startVintageCameraStream();
    });

    const wheelHousing = document.getElementById("vintageWheelControl");
    const wheelDisc = document.getElementById("vintageWheelDisc");
    let wheelDrag = { active: false, lastX: 0, lastY: 0 };

    function advanceWheelByDelta(delta) {
        if (vintageDeveloping || vintageWheelArmed) return;
        if (currentVintageRoll && getEffectiveVintageCount() >= currentVintageRoll.capacity) return;

        vintageWheelProgress = Math.min(100, vintageWheelProgress + delta);
        vintageWheelVisualOffset = (vintageWheelVisualOffset + delta * 1.4) % 24;
        if (wheelDisc) wheelDisc.style.backgroundPosition = `${Math.round(vintageWheelVisualOffset)}px 0px`;

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

    if (wheelHousing) {
        wheelHousing.addEventListener("pointerdown", (e) => {
            e.preventDefault();
            getAudioCtx();
            wheelDrag.active = true;
            wheelDrag.lastX = e.clientX;
            wheelDrag.lastY = e.clientY;
            if (wheelHousing.setPointerCapture) {
                try { wheelHousing.setPointerCapture(e.pointerId); } catch (err) { }
            }
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
    }

    vOn("vintageShutterBtn", "click", async () => {
        if (vintageCapturing || vintageDeveloping) return;
        if (!currentVintageRoll || getEffectiveVintageCount() >= currentVintageRoll.capacity) {
            playLockedShutterTick();
            return;
        }
        if (!vintageWheelArmed) {
            playLockedShutterTick();
            const badge = document.getElementById("vintageCockBadge");
            if (badge) {
                badge.style.transform = "scale(1.08)";
                setTimeout(() => { badge.style.transform = "scale(1)"; }, 160);
            }
            return;
        }
        const video = document.getElementById("vintageVideo");
        if (!mediaStream || !video || video.readyState < 2 || video.videoWidth === 0) {
            alert("Fotocamera live non ancora pronta: attendi un istante o tocca '📷 Carica' qui a sinistra per caricare foto sul rullino Usa & Getta!");
            return;
        }

        const useFlash = vintageFlashState === "ready";
        vintageCapturing = true;
        const curtain = document.getElementById("vintageCurtain");

        try {
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameWithSyncedFlash(video, 3 / 4, {
                useFlash,
                maxLongSide: 2400,
                curtainEl: curtain,
                curtainMinMs: 110,
                restartStreamFn: startVintageCameraStream,
                onShutterFire: () => playShutterSound(1 / 125, useFlash)
            });
            setVintageWheelArmedState(false);
            await vWaitPaint();
            enqueueVintageLatentFrame(capCanvas, useFlash, hardwareFlashFired);
        } finally {
            vintageCapturing = false;
        }
    });

    vOn("vintageGalleryInput", "change", async (e) => {
        if (vintageDeveloping || !currentVintageRoll) {
            e.target.value = "";
            return;
        }
        const files = Array.from(e.target.files || []);
        e.target.value = "";
        if (!files.length) return;

        const useFlash = vintageFlashState === "ready";
        for (const file of files) {
            if (getEffectiveVintageCount() >= currentVintageRoll.capacity) {
                alert(`Rullino Usa & Getta pieno (${currentVintageRoll.capacity} pose)! Premi Sviluppa.`);
                break;
            }
            const img = await loadImageFromSource(file);
            const c = document.createElement("canvas");
            c.width = img.naturalWidth || img.width;
            c.height = img.naturalHeight || img.height;
            c.getContext("2d").drawImage(img, 0, 0);
            playShutterSound(1 / 125, useFlash);
            await enqueueVintageLatentFrame(c, useFlash, false);
        }
    });

    vOn("vintageLabBackBtn", "click", async () => {
        currentVintageRoll = null;
        await refreshVintageArchiveList();
        await refreshStorageSummary();
        if (typeof refreshHomeStatus === "function") refreshHomeStatus();
        switchView("view-disposable-load");
    });

    vOn("vintageLabHomeBtn", "click", () => {
        currentVintageRoll = null;
        refreshVintageArchiveList();
        refreshStorageSummary();
        if (typeof refreshHomeStatus === "function") refreshHomeStatus();
        switchView("view-home");
    });

    vOn("vintageSelectAllBtn", "click", async () => {
        if (!currentVintageRoll) return;
        const allStarred = currentVintageRoll.frames.every(f => f.starred);
        currentVintageRoll.frames.forEach(f => { f.starred = !allStarred; });
        await saveVintageRollToDB(currentVintageRoll);
        openVintageLabRoll();
    });

    vOn("vintageSaveSelectedBtn", "click", async () => {
        if (!currentVintageRoll) return;
        const selected = currentVintageRoll.frames.filter(f => f.starred);
        await exportVintageFrames(selected, `${currentVintageRoll.decadeId}-scelte`);
    });

    vOn("vintageSaveAllBtn", "click", async () => {
        if (!currentVintageRoll) return;
        await exportVintageFrames(currentVintageRoll.frames, `${currentVintageRoll.decadeId}-tutte`);
    });

    vOn("vintageDetailCloseBtn", "click", closeVintageDetailModal);

    vOn("vintageDetailStarBtn", "click", async () => {
        if (!currentVintageRoll) return;
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        fr.starred = !fr.starred;
        await saveVintageRollToDB(currentVintageRoll);
        syncVintageEditorUI(fr);
    });

    vOn("vintageDetailSaveBtn", "click", async () => {
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

    vOn("vEditEffectsToggle", "click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const edit = ensureFrameVintageEdit(fr);
        edit.enabled = !edit.enabled;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    vOn("vEditDateToggle", "click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const edit = ensureFrameVintageEdit(fr);
        edit.showStamp = !edit.showStamp;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    vOn("vEditRerollBtn", "click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const dec = getActiveVintageDecade(ensureFrameVintageEdit(fr).decadeId);
        const keepStamp = ensureFrameVintageEdit(fr).showStamp;
        fr.vintageEdit = buildInitialVintageEdit(dec, true, keepStamp);
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    vOn("vEditResetBtn", "click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const dec = getActiveVintageDecade(ensureFrameVintageEdit(fr).decadeId);
        const keepStamp = ensureFrameVintageEdit(fr).showStamp;
        fr.vintageEdit = buildInitialVintageEdit(dec, false, keepStamp);
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
        vOn(id, "input", (e) => {
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
    if (vStage) {
        vStage.addEventListener("pointerdown", () => {
            vintageDetailShowOriginal = true;
            if (currentVintageRoll) refreshVintageDetailPreview(currentVintageRoll.frames[activeVintageDetailIdx]);
        });
    }
    const endVHold = () => {
        if (vintageDetailShowOriginal) {
            vintageDetailShowOriginal = false;
            if (currentVintageRoll) refreshVintageDetailPreview(currentVintageRoll.frames[activeVintageDetailIdx]);
        }
    };
    window.addEventListener("pointerup", endVHold);
    window.addEventListener("pointercancel", endVHold);
    window.addEventListener("resize", () => {
        const modal = document.getElementById("vintageDetailModal");
        if (modal && modal.classList.contains("open")) {
            layoutVintageDetailCanvas(document.getElementById("vintageDetailCanvas"));
        }
    });
}