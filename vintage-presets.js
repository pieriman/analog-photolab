/* =========================================================
   VINTAGE-PRESETS.JS
   Rullini Automatici Vintage (12/24/36 pose + 4s sviluppo)
   7 Decadi Iconiche + Eccezioni Casuali Indipendenti (0-70%)
   ========================================================= */

const VINTAGE_DECADES = [
    {
        id: "1940s",
        name: "Anni '40",
        subtitle: "Nitrate Noir • Argento puro",
        tag: "'40 NOIR",
        yearStamp: "'46",
        color: "#b8b2a6",
        textColor: "#14120e",
        paperId: "ilford-fb-warm",
        grade: 3.0,
        burn: 0.45,
        stampColor: "#e6c79c",
        film: {
            id: "vintage-40s", name: "1940s Nitrate Noir", iso: 100, mode: "bw",
            toe: 0.010, shoulder: 0.30, contrast: 0.68, temp: 0.0, tint: 0.0,
            saturation: 0.0, shadowTemp: 0.08, highTemp: 0.05,
            halation: 0.45, halThreshold: 0.78, bloom: 0.34, grain: 0.056, grainSize: 1.40,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
        },
        exceptions: { leakProb: 0.25, chemProb: 0.42, agedProb: 0.58, scratchProb: 0.55 }
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
        burn: 0.25,
        stampColor: "#ff9b54",
        film: {
            id: "vintage-50s", name: "1950s Kodachrome", iso: 64, mode: "slide",
            toe: 0.014, shoulder: 0.44, contrast: 0.54, temp: 0.14, tint: 0.03,
            saturation: 1.18, shadowTemp: -0.06, highTemp: 0.12,
            halation: 0.32, halThreshold: 0.84, bloom: 0.18, grain: 0.024, grainSize: 1.05,
            matrix: [1.09, -0.05, -0.04, 0.01, 1.01, -0.02, -0.06, 0.04, 1.02]
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
        burn: 0.28,
        stampColor: "#ff8c3a",
        film: {
            id: "vintage-60s", name: "1960s Agfa Ekta", iso: 160, mode: "color",
            toe: 0.022, shoulder: 0.48, contrast: 0.42, temp: 0.16, tint: -0.05,
            saturation: 1.20, shadowTemp: -0.10, highTemp: 0.14,
            halation: 0.50, halThreshold: 0.80, bloom: 0.22, grain: 0.032, grainSize: 1.15,
            matrix: [1.07, -0.04, -0.03, -0.02, 1.04, -0.02, -0.05, 0.05, 1.00]
        },
        exceptions: { leakProb: 0.48, chemProb: 0.32, agedProb: 0.40, scratchProb: 0.30 }
    },
    {
        id: "1970s",
        name: "Anni '70",
        subtitle: "Ambra sbiadita • Ombre morbide",
        tag: "'70 AMBER",
        yearStamp: "'77",
        color: "#c97b2b",
        textColor: "#ffffff",
        paperId: "polaroid-integral",
        grade: 2.0,
        burn: 0.30,
        stampColor: "#ff7828",
        film: {
            id: "vintage-70s", name: "1970s Amber Fade", iso: 200, mode: "color",
            toe: 0.044, shoulder: 0.62, contrast: 0.24, temp: 0.20, tint: 0.04,
            saturation: 0.86, shadowTemp: 0.10, highTemp: 0.14,
            halation: 0.55, halThreshold: 0.78, bloom: 0.26, grain: 0.036, grainSize: 1.35,
            matrix: [1.05, 0.01, -0.06, 0.03, 0.99, -0.02, -0.08, 0.04, 1.04]
        },
        exceptions: { leakProb: 0.52, chemProb: 0.36, agedProb: 0.52, scratchProb: 0.32 }
    },
    {
        id: "1980s",
        name: "Anni '80",
        subtitle: "Minilab Pop • Magenta & Flash",
        tag: "'80 MINILAB",
        yearStamp: "'86",
        color: "#d9488b",
        textColor: "#ffffff",
        paperId: "fuji-crystal",
        grade: 3.0,
        burn: 0.26,
        stampColor: "#ff661a",
        film: {
            id: "vintage-80s", name: "1980s Minilab Pop", iso: 400, mode: "color",
            toe: 0.024, shoulder: 0.42, contrast: 0.44, temp: 0.08, tint: 0.09,
            saturation: 1.18, shadowTemp: 0.05, highTemp: 0.04,
            halation: 0.55, halThreshold: 0.80, bloom: 0.16, grain: 0.038, grainSize: 1.20,
            matrix: [1.06, -0.05, -0.01, -0.02, 0.98, 0.04, 0.01, 0.02, 0.97]
        },
        exceptions: { leakProb: 0.46, chemProb: 0.30, agedProb: 0.28, scratchProb: 0.26 }
    },
    {
        id: "1990s",
        name: "Anni '90",
        subtitle: "Usa & Getta '98 • Light Leaks",
        tag: "'98 AUTO",
        yearStamp: "'98",
        color: "#1fa35b",
        textColor: "#ffffff",
        paperId: "fuji-crystal",
        grade: 3.3,
        burn: 0.42,
        stampColor: "#ff5e0e",
        film: {
            id: "vintage-90s", name: "1998 Usa & Getta", iso: 800, mode: "color",
            toe: 0.018, shoulder: 0.36, contrast: 0.58, temp: -0.03, tint: -0.08,
            saturation: 1.26, shadowTemp: -0.12, highTemp: 0.08,
            halation: 0.85, halThreshold: 0.74, bloom: 0.20, grain: 0.046, grainSize: 1.32,
            matrix: [1.04, -0.02, -0.02, -0.03, 1.07, -0.04, -0.02, 0.04, 0.98]
        },
        exceptions: { leakProb: 0.58, chemProb: 0.32, agedProb: 0.24, scratchProb: 0.25 }
    },
    {
        id: "y2k",
        name: "Y2K (2000s)",
        subtitle: "Ibrido CCD/C-41 • Luci Ciano",
        tag: "'02 Y2K",
        yearStamp: "'02",
        color: "#3ea3d8",
        textColor: "#0d141a",
        paperId: "fuji-crystal",
        grade: 3.1,
        burn: 0.24,
        stampColor: "#ff3d1f",
        film: {
            id: "vintage-y2k", name: "Y2K Early Compact", iso: 400, mode: "color",
            toe: 0.014, shoulder: 0.34, contrast: 0.50, temp: -0.12, tint: 0.05,
            saturation: 1.15, shadowTemp: -0.06, highTemp: -0.08,
            halation: 0.65, halThreshold: 0.76, bloom: 0.30, grain: 0.030, grainSize: 1.05,
            matrix: [1.00, -0.02, 0.02, -0.01, 1.02, -0.01, 0.02, 0.02, 1.04]
        },
        exceptions: { leakProb: 0.38, chemProb: 0.24, agedProb: 0.16, scratchProb: 0.20 }
    }
];

let selectedVintageDecadeId = localStorage.getItem("analog_photolab_vintage_decade") || "1990s";
let selectedVintageExposures = 12;
let vintageRandomEnabled = true;
let vintageDateMode = "era"; // "era" | "today" | "off"
let vintageFlashEnabled = false;
let vintageCapturing = false;
let vintageDeveloping = false;

let currentVintageRoll = null;
let memoryVintageRolls = [];
let activeVintageDetailIdx = 0;

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
   PERSISTENZA RULLINI VINTAGE (INDEXEDDB + FALLBACK MEMORIA)
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
   UI HOME DECADI & ARCHIVIO RULLINI VINTAGE
   ========================================================= */
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

function updateVintageCameraHUD() {
    if (!currentVintageRoll) return;
    const d = getActiveVintageDecade(currentVintageRoll.decadeId);
    document.getElementById("vintageTopEraBadge").textContent = d.tag;
    document.getElementById("vintageVfEraLabel").textContent = `${d.name.toUpperCase()} • AUTO`;

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
    const flashBtn = document.getElementById("vintageFlashBtn");

    randBtn.classList.toggle("active", vintageRandomEnabled);
    randBtn.textContent = vintageRandomEnabled ? "✨ Casuali: ON" : "✨ Casuali: OFF";

    dateBtn.classList.toggle("active", vintageDateMode !== "off");
    dateBtn.textContent = vintageDateMode === "era"
        ? `📅 Data: ${d.yearStamp}`
        : (vintageDateMode === "today" ? "📅 Data: Oggi" : "📅 Data: OFF");

    flashBtn.classList.toggle("active", vintageFlashEnabled);
    flashBtn.textContent = vintageFlashEnabled ? "⚡ Flash: ON" : "⚡ Flash: OFF";

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
    const videoConstraints = qualityMode === "max"
        ? { facingMode: facingMode, width: { ideal: 4096 }, height: { ideal: 3072 } }
        : { facingMode: facingMode, width: { ideal: 1920 }, height: { ideal: 1440 } };

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
    document.getElementById("vintageFinishedOverlay").classList.remove("open");
    document.getElementById("vintageDevAnimOverlay").classList.remove("open");
    document.getElementById("vintageThirdsGrid").classList.toggle("visible", thirdsVisible);
    document.getElementById("vintageThirdsToggleBtn").classList.toggle("active", thirdsVisible);
    updateVintageCameraHUD();
    switchView("view-vintage-camera");
    startVintageCameraStream();
}

/* =========================================================
   SCATTO SUL RULLINO VINTAGE + SVILUPPO 4s (RANDOM 0-70%)
   ========================================================= */
async function recordVintageLatentFrame(sourceCanvas, usedFlash = false, hardwareFlashFired = false) {
    if (!currentVintageRoll || currentVintageRoll.frames.length >= currentVintageRoll.capacity) return;

    playShutterSound(1 / 125, usedFlash);
    const curtain = document.getElementById("vintageCurtain");
    curtain.classList.add("blink");
    setTimeout(() => curtain.classList.remove("blink"), 110);

    if (usedFlash && !hardwareFlashFired) {
        const ctx = sourceCanvas.getContext("2d");
        const w = sourceCanvas.width, h = sourceCanvas.height;
        const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.08, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
        grad.addColorStop(0, "rgba(255, 252, 245, 0.26)");
        grad.addColorStop(0.55, "rgba(255, 250, 240, 0.08)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0.25)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }

    const jpegQ = qualityMode === "max" ? 0.96 : 0.91;
    const rawBlob = await canvasToBlob(sourceCanvas, "image/jpeg", jpegQ);

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
        stamp: getVintageDateStampString(getActiveVintageDecade(currentVintageRoll.decadeId))
    });

    updateVintageCameraHUD();
    await saveVintageRollToDB(currentVintageRoll);
}

// Estrazione indipendente per ciascuno dei 4 effetti (da 0 a tutti e 4) con range 0% - 70% MAX
function generateVintageRandomExceptions(decade) {
    const def = createDefaultFrameDefects(Math.random());
    if (!vintageRandomEnabled) return def;

    const ex = decade.exceptions;
    const rollDefect = (prob, target) => {
        if (Math.random() < prob) {
            const pct = +(Math.random() * 0.70).toFixed(2); // Range 0% - 70% max
            target.intensity = pct;
            target.active = pct > 0;
        } else {
            target.intensity = 0;
            target.active = false;
        }
    };

    rollDefect(ex.leakProb, def.lightLeak);
    rollDefect(ex.chemProb, def.chemStain);
    rollDefect(ex.agedProb, def.agedPaper);
    rollDefect(ex.scratchProb, def.scratches);
    return def;
}

async function executeVintageDevelopSequence() {
    if (vintageDeveloping || !currentVintageRoll) return;
    if (currentVintageRoll.frames.length === 0) return;

    vintageDeveloping = true;
    getAudioCtx(); // Sblocca audio su gesture
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
    const maxRes = qualityMode === "max" ? Math.min(4096, MAX_GL_TEX) : 1800;
    const jpegQ = qualityMode === "max" ? 0.96 : 0.90;

    // Sviluppo reale fotogramma per fotogramma durante i 4 secondi di riavvolgimento
    for (let i = 0; i < total; i++) {
        const frame = currentVintageRoll.frames[i];
        const decade = getActiveVintageDecade(frame.decadeId || currentVintageRoll.decadeId);
        const defects = generateVintageRandomExceptions(decade);
        frame.defects = defects;

        const autoEvDrift = vintageRandomEnabled ? (Math.random() - 0.48) * 0.42 : 0;
        const flashBoost = (frame.flash && !frame.hardwareFlashFired) ? 0.40 : 0.0;

        const srcImg = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);

        const frameStub = {
            exposureEV: autoEvDrift + flashBoost,
            aperture: 2.8,
            defectSeed: defects.seed,
            defects
        };
        const printOptsStub = {
            paperId: decade.paperId,
            time: 12.0,
            grade: decade.grade,
            mag: 0,
            yel: 0,
            burn: decade.burn,
            grainScale: 1.0,
            zoom: 1.0,
            rotation: 0,
            panX: 0,
            panY: 0,
            border: "none",
            defects
        };

        renderFrameWithWebGL(srcImg, decade.film, frameStub, 0, printOptsStub, false, maxRes);

        const outCanvas = document.createElement("canvas");
        outCanvas.width = glCanvas.width;
        outCanvas.height = glCanvas.height;
        const oCtx = outCanvas.getContext("2d");
        oCtx.drawImage(glCanvas, 0, 0);

        if (frame.stamp) {
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

        frame.developedBlob = await canvasToBlob(outCanvas, "image/jpeg", jpegQ);

        const thumbCanvas = document.createElement("canvas");
        const tW = 360;
        const tH = Math.round((outCanvas.height / outCanvas.width) * tW);
        thumbCanvas.width = tW;
        thumbCanvas.height = tH;
        thumbCanvas.getContext("2d").drawImage(outCanvas, 0, 0, tW, tH);
        frame.thumbBlob = await canvasToBlob(thumbCanvas, "image/jpeg", 0.80);

        // Libera il rawBlob pesante dopo sviluppo vintage perché non serve un ingranditore manuale
        delete frame.rawBlob;
        delete frame.rawDataUrl;
        outCanvas.width = 0; outCanvas.height = 0;
        thumbCanvas.width = 0; thumbCanvas.height = 0;

        const elapsed = performance.now() - startTime;
        const p = Math.min(0.95, Math.max((i + 1) / total * 0.85, elapsed / minDurationMs));
        fill.style.width = `${Math.round(p * 100)}%`;
        sub.textContent = `Sviluppo posa ${i + 1} di ${total}...`;
        counterEl.textContent = `${String(Math.max(0, total - i - 1)).padStart(2, "0")} / ${totStr}`;
    }

    // Completa esattamente i 4 secondi di attesa riavvolgimento/sviluppo
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

    overlay.classList.remove("open");
    vintageDeveloping = false;
    openVintageLabRoll();
}

/* =========================================================
   GALLERIA RULLINO VINTAGE SVILUPPATO (★ + SALVA SELEZIONATE / TUTTE)
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
    document.getElementById("vintageLabSubtitle").textContent = `${currentVintageRoll.frames.length} foto • Metti ★ alle migliori o salva tutte`;

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

            if (frame.stamp) {
                const stEl = document.createElement("em");
                stEl.className = "defect-dot";
                stEl.textContent = frame.stamp;
                cell.appendChild(stEl);
            }

            cell.addEventListener("click", () => openVintageShotDetail(idx));
            grid.appendChild(cell);
        });
    }

    updateVintageSelectionUI();
    switchView("view-vintage-lab");
}

function openVintageShotDetail(idx) {
    activeVintageDetailIdx = idx;
    const frame = currentVintageRoll.frames[idx];
    const dec = getActiveVintageDecade(frame.decadeId || currentVintageRoll.decadeId);
    document.getElementById("vintageDetailTitle").textContent = `${dec.name} • #${String(frame.number).padStart(2, "0")}`;
    document.getElementById("vintageDetailMeta").textContent = `${dec.tag}${frame.stamp ? " • " + frame.stamp : ""}${frame.savedLocally ? " • ✓ Salvata" : ""}`;

    const starBtn = document.getElementById("vintageDetailStarBtn");
    starBtn.textContent = frame.starred ? "★" : "☆";
    starBtn.classList.toggle("btn-gold", !!frame.starred);

    const imgEl = document.getElementById("vintageDetailImg");
    const srcObj = frame.developedBlob || frame.dataUrl;
    if (srcObj instanceof Blob) {
        const u = URL.createObjectURL(srcObj);
        imgEl.onload = () => URL.revokeObjectURL(u);
        imgEl.src = u;
    } else {
        imgEl.src = srcObj || "";
    }
    document.getElementById("vintageDetailModal").classList.add("open");
}

async function exportVintageFrames(framesToExport, labelSlug) {
    if (!framesToExport.length) {
        alert("Metti prima la stellina (★) su almeno una foto oppure clicca 'Salva Tutte'.");
        return;
    }
    const items = [];
    for (const fr of framesToExport) {
        let blob = fr.developedBlob;
        if (!blob && fr.dataUrl) {
            blob = await (await fetch(fr.dataUrl)).blob();
        }
        if (blob) {
            items.push({
                name: `vintage-${currentVintageRoll.decadeId}-f${String(fr.number).padStart(2, "0")}.jpg`,
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

    document.querySelectorAll("#vintageExpCountRow .exp-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            document.querySelectorAll("#vintageExpCountRow .exp-pill").forEach(p => p.classList.remove("selected"));
            pill.classList.add("selected");
            selectedVintageExposures = parseInt(pill.dataset.count);
        });
    });

    document.getElementById("startVintageCamBtn").addEventListener("click", async () => {
        getAudioCtx(); // Sblocca audio su click utente
        currentVintageRoll = {
            id: "vroll-" + Date.now(),
            createdAt: Date.now(),
            decadeId: selectedVintageDecadeId,
            capacity: selectedVintageExposures,
            status: "shooting",
            frames: []
        };
        await saveVintageRollToDB(currentVintageRoll);
        enterVintageCameraMode();
    });

    document.getElementById("vintageExitBtn").addEventListener("click", () => {
        if (vintageDeveloping) return;
        if (currentVintageRoll && currentVintageRoll.frames.length > 0) {
            if (!confirm(`Uscire? Il rullino ha ${currentVintageRoll.frames.length} scatti non ancora sviluppati (puoi anche premere Riavvolgi).`)) return;
        }
        stopCamera();
        refreshVintageArchiveList();
        switchView("view-load");
    });

    document.getElementById("vintageRewindBtn").addEventListener("click", () => {
        if (vintageDeveloping || !currentVintageRoll) return;
        if (currentVintageRoll.frames.length === 0) {
            if (confirm("Nessuna foto scattata. Tornare alla Home?")) {
                currentVintageRoll = null;
                stopCamera();
                switchView("view-load");
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

    document.getElementById("vintageFlashBtn").addEventListener("click", () => {
        vintageFlashEnabled = !vintageFlashEnabled;
        updateVintageCameraHUD();
    });

    document.getElementById("vintageSwitchCamBtn").addEventListener("click", () => {
        facingMode = facingMode === "environment" ? "user" : "environment";
        startVintageCameraStream();
    });

    document.getElementById("vintageShutterBtn").addEventListener("click", async () => {
        if (vintageCapturing || vintageDeveloping) return;
        if (!currentVintageRoll || currentVintageRoll.frames.length >= currentVintageRoll.capacity) {
            playLockedShutterTick();
            return;
        }
        const video = document.getElementById("vintageVideo");
        if (!mediaStream || video.videoWidth === 0) {
            alert("Fotocamera live non attiva: tocca '+ GALLERIA' qui a sinistra per caricare foto sul rullino vintage!");
            return;
        }

        vintageCapturing = true;
        const prevFlashActive = flashActive;
        flashActive = vintageFlashEnabled;
        try {
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameWithRealFlash(video, 3 / 4);
            await recordVintageLatentFrame(capCanvas, vintageFlashEnabled, hardwareFlashFired);
            capCanvas.width = 0; capCanvas.height = 0;
        } finally {
            flashActive = prevFlashActive;
            vintageCapturing = false;
        }
    });

    document.getElementById("vintageGalleryInput").addEventListener("change", (e) => {
        if (vintageDeveloping || (currentVintageRoll && currentVintageRoll.frames.length >= currentVintageRoll.capacity)) {
            e.target.value = "";
            return;
        }
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = async () => {
                let w = img.width, h = img.height;
                if (qualityMode !== "max") {
                    const maxD = 1800;
                    if (w > maxD || h > maxD) {
                        const r = Math.min(maxD / w, maxD / h);
                        w = Math.round(w * r); h = Math.round(h * r);
                    }
                }
                const c = document.createElement("canvas");
                c.width = w; c.height = h;
                c.getContext("2d").drawImage(img, 0, 0, w, h);
                await recordVintageLatentFrame(c, vintageFlashEnabled, false);
                c.width = 0; c.height = 0;
            };
            img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
        e.target.value = "";
    });

    // Galleria Rullino Vintage sviluppato
    document.getElementById("vintageLabHomeBtn").addEventListener("click", () => {
        currentVintageRoll = null;
        refreshVintageArchiveList();
        refreshStorageSummary();
        switchView("view-load");
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

    // Modal dettaglio scatto Vintage
    document.getElementById("vintageDetailCloseBtn").addEventListener("click", () => {
        document.getElementById("vintageDetailModal").classList.remove("open");
    });

    document.getElementById("vintageDetailStarBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        fr.starred = !fr.starred;
        await saveVintageRollToDB(currentVintageRoll);
        openVintageShotDetail(activeVintageDetailIdx);
        openVintageLabRoll();
    });

    document.getElementById("vintageDetailSaveBtn").addEventListener("click", async () => {
        if (!currentVintageRoll) return;
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        await exportVintageFrames([fr], currentVintageRoll.decadeId);
        openVintageShotDetail(activeVintageDetailIdx);
    });
}
