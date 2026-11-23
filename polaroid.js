/* =========================================================
   POLAROID.JS
   Emulazione Polaroid a Scatto Singolo (NO rullino)
   - Sviluppo chimico progressivo dal vivo in fessura
   - 6 tipologie di carta/pellicola reale + 4 finiture cornice
   - Dimensioni fisiche esatte esportabili a 300 DPI (con metadati JFIF 300 DPI)
   ========================================================= */

const POLAROID_STOCKS = [
    {
        id: "color-600",
        name: "Color 600",
        tag: "600 CLASSIC",
        desc: "ISO 640 • Lucida • Ombre verde-blu, luci cremose",
        format: "classic", // 88.5 x 107.5 mm -> 1045 x 1270 px @ 300 DPI
        totalW: 1045, totalH: 1270,
        imgW: 907, imgH: 932,
        padSide: 69, padTop: 69,
        mmLabel: "88.5×107.5mm",
        surface: "Lucida (Glossy)",
        devSeconds: 11,
        paperId: "kodak-endura",
        film: {
            id: "pol-600", name: "Polaroid Color 600", iso: 640, mode: "color",
            toe: 0.032, shoulder: 0.48, contrast: 0.28, temp: 0.07, tint: -0.04,
            saturation: 0.88, shadowTemp: -0.10, highTemp: 0.08,
            halation: 0.22, halThreshold: 0.82, bloom: 0.16, grain: 0.022, grainSize: 1.32,
            matrix: [1.01, 0.01, -0.02, -0.02, 1.03, -0.01, 0.02, 0.03, 0.95]
        }
    },
    {
        id: "color-itype",
        name: "Color i-Type",
        tag: "i-TYPE",
        desc: "ISO 640 • Lucida • Colori moderni più vivi e neutri",
        format: "classic",
        totalW: 1045, totalH: 1270,
        imgW: 907, imgH: 932,
        padSide: 69, padTop: 69,
        mmLabel: "88.5×107.5mm",
        surface: "Lucida (Glossy)",
        devSeconds: 10,
        paperId: "fuji-crystal",
        film: {
            id: "pol-itype", name: "Polaroid Color i-Type", iso: 640, mode: "color",
            toe: 0.020, shoulder: 0.42, contrast: 0.34, temp: 0.04, tint: -0.01,
            saturation: 1.02, shadowTemp: -0.04, highTemp: 0.04,
            halation: 0.18, halThreshold: 0.84, bloom: 0.12, grain: 0.018, grainSize: 1.15,
            matrix: [1.03, -0.01, -0.02, -0.01, 1.02, -0.01, 0.00, 0.02, 0.98]
        }
    },
    {
        id: "sx-70",
        name: "SX-70 Classic",
        tag: "SX-70",
        desc: "ISO 160 • Emulsione spessa • Toni caldi pittorici anni '70",
        format: "classic",
        totalW: 1045, totalH: 1270,
        imgW: 907, imgH: 932,
        padSide: 69, padTop: 69,
        mmLabel: "88.5×107.5mm",
        surface: "Lucida Spessa",
        devSeconds: 13,
        paperId: "ilford-fb-warm",
        film: {
            id: "pol-sx70", name: "Polaroid SX-70", iso: 160, mode: "color",
            toe: 0.028, shoulder: 0.54, contrast: 0.32, temp: 0.14, tint: 0.02,
            saturation: 0.94, shadowTemp: 0.04, highTemp: 0.12,
            halation: 0.30, halThreshold: 0.80, bloom: 0.24, grain: 0.019, grainSize: 1.25,
            matrix: [1.06, 0.00, -0.06, 0.02, 1.00, -0.02, -0.05, 0.04, 1.01]
        }
    },
    {
        id: "bw-600",
        name: "B&W 600 Mono",
        tag: "B&W 600",
        desc: "ISO 640 • Satinata • Argento caldo, sviluppo rapido",
        format: "classic",
        totalW: 1045, totalH: 1270,
        imgW: 907, imgH: 932,
        padSide: 69, padTop: 69,
        mmLabel: "88.5×107.5mm",
        surface: "Satinata / Lucida",
        devSeconds: 8,
        paperId: "ilford-fb-warm",
        film: {
            id: "pol-bw", name: "Polaroid B&W 600", iso: 640, mode: "bw",
            toe: 0.030, shoulder: 0.44, contrast: 0.42, temp: 0.0, tint: 0.0,
            saturation: 0.0, shadowTemp: 0.04, highTemp: 0.06,
            halation: 0.16, halThreshold: 0.82, bloom: 0.18, grain: 0.036, grainSize: 1.30,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
        }
    },
    {
        id: "round-600",
        name: "600 Round",
        tag: "ROUND",
        desc: "ISO 640 • Finestra circolare Ø 76.8mm su formato 600",
        format: "round",
        totalW: 1045, totalH: 1270,
        imgW: 907, imgH: 907,
        padSide: 69, padTop: 69,
        mmLabel: "88.5×107.5mm (Ø76.8)",
        surface: "Lucida (Glossy)",
        devSeconds: 11,
        paperId: "kodak-endura",
        film: {
            id: "pol-round", name: "Polaroid Round 600", iso: 640, mode: "color",
            toe: 0.030, shoulder: 0.46, contrast: 0.30, temp: 0.06, tint: -0.03,
            saturation: 0.90, shadowTemp: -0.09, highTemp: 0.07,
            halation: 0.22, halThreshold: 0.82, bloom: 0.16, grain: 0.022, grainSize: 1.30,
            matrix: [1.01, 0.01, -0.02, -0.02, 1.03, -0.01, 0.02, 0.03, 0.95]
        }
    },
    {
        id: "polaroid-go",
        name: "Polaroid Go",
        tag: "GO MINI",
        desc: "ISO 640 • Tascabile 53.9×66.6mm (637×787 px @ 300 DPI)",
        format: "go",
        totalW: 637, totalH: 787,
        imgW: 543, imgH: 555,
        padSide: 47, padTop: 47,
        mmLabel: "53.9×66.6mm",
        surface: "Lucida (Glossy)",
        devSeconds: 9,
        paperId: "fuji-crystal",
        film: {
            id: "pol-go", name: "Polaroid Go", iso: 640, mode: "color",
            toe: 0.024, shoulder: 0.42, contrast: 0.36, temp: 0.05, tint: -0.02,
            saturation: 1.04, shadowTemp: -0.06, highTemp: 0.05,
            halation: 0.20, halThreshold: 0.84, bloom: 0.14, grain: 0.024, grainSize: 1.25,
            matrix: [1.03, -0.01, -0.02, -0.01, 1.03, -0.02, 0.00, 0.02, 0.98]
        }
    }
];

const POLAROID_FRAMES = [
    { id: "classic-white", name: "Bianca Classica", bg: "#f6f4ee", text: "#38342d", innerBorder: "rgba(0,0,0,0.16)" },
    { id: "matte-ivory", name: "Avorio Vintage", bg: "#ede2cb", text: "#4f4638", innerBorder: "rgba(65,50,25,0.22)" },
    { id: "black-frame", name: "Black Edition", bg: "#17171a", text: "#d6d0c4", innerBorder: "rgba(255,255,255,0.14)" },
    { id: "gold-frame", name: "Metallic Gold", bg: "#c8a962", text: "#261d0a", innerBorder: "rgba(38,29,10,0.26)" }
];

let selectedPolaroidStockId = localStorage.getItem("analog_photolab_pol_stock") || "color-600";
let selectedPolaroidFrameId = localStorage.getItem("analog_photolab_pol_frame") || "classic-white";
let polaroidLdEV = 0.0;
let polaroidFlashEnabled = false;
let polaroidCapturing = false;
let memoryPolaroidShots = [];
let activePolaroidDetailId = null;

// Stato animazione sviluppo live in fessura
let livePolAnimId = null;
let livePolActiveShot = null;
let livePolForceFinish = null;

function getPolaroidStock(id = selectedPolaroidStockId) {
    return POLAROID_STOCKS.find(s => s.id === id) || POLAROID_STOCKS[0];
}

function getPolaroidFrameStyle(id = selectedPolaroidFrameId) {
    return POLAROID_FRAMES.find(f => f.id === id) || POLAROID_FRAMES[0];
}

/* =========================================================
   PERSISTENZA INDEXED-DB POLAROID
   ========================================================= */
function savePolaroidShotToDB(shot) {
    const idx = memoryPolaroidShots.findIndex(s => s.id === shot.id);
    if (idx >= 0) memoryPolaroidShots[idx] = shot;
    else memoryPolaroidShots.unshift(shot);

    if (!db || !db.objectStoreNames.contains("polaroidShots")) return Promise.resolve();
    return new Promise((resolve) => {
        const tx = db.transaction("polaroidShots", "readwrite");
        tx.objectStore("polaroidShots").put(shot);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
    });
}

function getAllPolaroidShotsFromDB() {
    if (!db || !db.objectStoreNames.contains("polaroidShots")) {
        return Promise.resolve([...memoryPolaroidShots]);
    }
    return new Promise((resolve) => {
        const tx = db.transaction("polaroidShots", "readonly");
        const req = tx.objectStore("polaroidShots").getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([...memoryPolaroidShots]);
    });
}

function deletePolaroidShotFromDB(id) {
    memoryPolaroidShots = memoryPolaroidShots.filter(s => s.id !== id);
    if (!db || !db.objectStoreNames.contains("polaroidShots")) return Promise.resolve();
    return new Promise((resolve) => {
        const tx = db.transaction("polaroidShots", "readwrite");
        tx.objectStore("polaroidShots").delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
    });
}

/* =========================================================
   INIEZIONE METADATI JFIF 300 DPI IN BLOB JPEG
   ========================================================= */
async function injectJpegDpi(blob, dpi = 300) {
    const buf = new Uint8Array(await blob.arrayBuffer());
    if (buf.length < 20 || buf[0] !== 0xff || buf[1] !== 0xd8) return blob;
    const hi = (dpi >> 8) & 0xff;
    const lo = dpi & 0xff;

    if (
        buf[2] === 0xff && buf[3] === 0xe0 &&
        buf[6] === 0x4a && buf[7] === 0x46 && buf[8] === 0x49 && buf[9] === 0x46 && buf[10] === 0x00
    ) {
        buf[13] = 1; // 1 = DPI (dots per inch)
        buf[14] = hi;
        buf[15] = lo;
        buf[16] = hi;
        buf[17] = lo;
        return new Blob([buf], { type: "image/jpeg" });
    }

    const app0 = new Uint8Array([
        0xff, 0xe0, 0x00, 0x10,
        0x4a, 0x46, 0x49, 0x46, 0x00,
        0x01, 0x01, 0x01,
        hi, lo, hi, lo,
        0x00, 0x00
    ]);
    const out = new Uint8Array(buf.length + app0.length);
    out.set(buf.slice(0, 2), 0);
    out.set(app0, 2);
    out.set(buf.slice(2), 2 + app0.length);
    return new Blob([out], { type: "image/jpeg" });
}

/* =========================================================
   SUONO MECCANICO POLAROID (OTTURATORE + MOTORINO ESPULSIONE)
   ========================================================= */
function playPolaroidEjectSound() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;

        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = "triangle";
        clickOsc.frequency.setValueAtTime(1150, now);
        clickOsc.frequency.exponentialRampToValueAtTime(240, now + 0.04);
        clickGain.gain.setValueAtTime(0.42, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
        clickOsc.connect(clickGain); clickGain.connect(ctx.destination);
        clickOsc.start(now); clickOsc.stop(now + 0.05);

        const motorOsc = ctx.createOscillator();
        const lfoOsc = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const motorGain = ctx.createGain();

        motorOsc.type = "sawtooth";
        motorOsc.frequency.setValueAtTime(145, now + 0.08);
        motorOsc.frequency.linearRampToValueAtTime(175, now + 0.35);
        motorOsc.frequency.linearRampToValueAtTime(135, now + 0.78);

        lfoOsc.type = "sine";
        lfoOsc.frequency.setValueAtTime(34, now + 0.08);
        lfoGain.gain.setValueAtTime(28, now + 0.08);
        lfoOsc.connect(lfoGain);
        lfoGain.connect(motorOsc.frequency);

        const bp = ctx.createBiquadFilter();
        bp.type = "bandpass";
        bp.frequency.value = 540;
        bp.Q.value = 1.4;

        motorGain.gain.setValueAtTime(0.001, now + 0.07);
        motorGain.gain.linearRampToValueAtTime(0.24, now + 0.14);
        motorGain.gain.setValueAtTime(0.22, now + 0.65);
        motorGain.gain.exponentialRampToValueAtTime(0.001, now + 0.80);

        motorOsc.connect(bp);
        bp.connect(motorGain);
        motorGain.connect(ctx.destination);

        motorOsc.start(now + 0.08);
        lfoOsc.start(now + 0.08);
        motorOsc.stop(now + 0.82);
        lfoOsc.stop(now + 0.82);
    } catch (e) { }
}

/* =========================================================
   COMPOSIZIONE FOGLIO POLAROID ESATTO A 300 DPI
   ========================================================= */
async function renderPolaroidFinalSheetBlob(innerImgOrCanvas, stock, frameStyle, caption = "") {
    const outCanvas = document.createElement("canvas");
    outCanvas.width = stock.totalW;
    outCanvas.height = stock.totalH;
    const ctx = outCanvas.getContext("2d");

    // 1. Carta / Cornice esterna esatta
    ctx.fillStyle = frameStyle.bg;
    ctx.fillRect(0, 0, stock.totalW, stock.totalH);

    if (frameStyle.id === "matte-ivory" || frameStyle.id === "classic-white") {
        ctx.fillStyle = frameStyle.id === "matte-ivory" ? "rgba(120, 95, 50, 0.03)" : "rgba(0,0,0,0.015)";
        for (let i = 0; i < 900; i++) {
            ctx.fillRect(Math.random() * stock.totalW, Math.random() * stock.totalH, 2, 2);
        }
    } else if (frameStyle.id === "gold-frame") {
        const gGrad = ctx.createLinearGradient(0, 0, stock.totalW, stock.totalH);
        gGrad.addColorStop(0, "rgba(255,255,255,0.18)");
        gGrad.addColorStop(0.5, "rgba(0,0,0,0.04)");
        gGrad.addColorStop(1, "rgba(255,245,200,0.20)");
        ctx.fillStyle = gGrad;
        ctx.fillRect(0, 0, stock.totalW, stock.totalH);
    }

    const x = stock.padSide;
    const y = stock.padTop;
    const w = stock.imgW;
    const h = stock.imgH;

    // 2. Finestra fotografica (rettangolare o circolare)
    ctx.save();
    if (stock.format === "round") {
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
    } else {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();
    }

    const srcW = innerImgOrCanvas.naturalWidth || innerImgOrCanvas.width;
    const srcH = innerImgOrCanvas.naturalHeight || innerImgOrCanvas.height;
    const scale = Math.max(w / srcW, h / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    const dx = x + (w - drawW) / 2;
    const dy = y + (h - drawH) / 2;
    ctx.drawImage(innerImgOrCanvas, dx, dy, drawW, drawH);

    // Riflesso Mylar sulla superficie lucida
    if (!stock.surface.includes("Satinata")) {
        const sheen = ctx.createLinearGradient(x, y, x + w, y + h);
        sheen.addColorStop(0, "rgba(255,255,255,0.05)");
        sheen.addColorStop(0.35, "rgba(255,255,255,0.0)");
        sheen.addColorStop(1, "rgba(0,0,0,0.04)");
        ctx.fillStyle = sheen;
        ctx.fillRect(x, y, w, h);
    }
    ctx.restore();

    // Bordo incassato interno
    ctx.save();
    ctx.strokeStyle = frameStyle.innerBorder;
    ctx.lineWidth = Math.max(2, Math.round(stock.totalW * 0.0025));
    if (stock.format === "round") {
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
        ctx.stroke();
    } else {
        ctx.strokeRect(x, y, w, h);
    }
    ctx.restore();

    // 3. Eventuale nota scritta sul mento inferiore
    if (caption && caption.trim()) {
        const chinTop = y + h;
        const chinH = stock.totalH - chinTop;
        const fontSize = Math.round(stock.totalW * 0.044);
        ctx.save();
        ctx.fillStyle = frameStyle.text;
        ctx.font = `italic 600 ${fontSize}px "Bradley Hand", "Segoe Script", "Marker Felt", cursive, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.trim(), stock.totalW / 2, chinTop + chinH * 0.48, stock.imgW);
        ctx.restore();
    }

    const rawJpg = await canvasToBlob(outCanvas, "image/jpeg", 0.96);
    outCanvas.width = 0; outCanvas.height = 0;
    return await injectJpegDpi(rawJpg, 300);
}

/* =========================================================
   INTERFACCIA FOTOCAMERA POLAROID & SVILUPPO PROGRESSIVO LIVE
   ========================================================= */
async function refreshPolaroidGalleryBadge() {
    const shots = await getAllPolaroidShotsFromDB();
    const btn = document.getElementById("polaroidOpenGalleryBtn");
    if (btn) btn.textContent = `Galleria (${shots.length})`;
    if (typeof refreshHomeStatus === "function") refreshHomeStatus();
}

function updatePolaroidUI() {
    const stock = getPolaroidStock();
    const frameStyle = getPolaroidFrameStyle();

    const specBadge = document.getElementById("polaroidSpecBadge");
    if (specBadge) specBadge.textContent = `${stock.mmLabel} • ${stock.totalW}×${stock.totalH} @ 300 DPI`;

    const vf = document.getElementById("polaroidVfFrame");
    if (vf) {
        vf.style.aspectRatio = `${stock.imgW} / ${stock.imgH}`;
        vf.classList.toggle("is-round", stock.format === "round");
    }

    const vfTag = document.getElementById("polaroidVfStockTag");
    if (vfTag) vfTag.textContent = `${stock.tag} • ${stock.surface.toUpperCase()}`;

    const ldVal = document.getElementById("polaroidLdVal");
    if (ldVal) ldVal.textContent = (polaroidLdEV > 0 ? "+" : "") + polaroidLdEV.toFixed(1);

    const flashBtn = document.getElementById("polaroidFlashBtn");
    if (flashBtn) {
        flashBtn.classList.toggle("active", polaroidFlashEnabled);
        flashBtn.textContent = polaroidFlashEnabled ? "⚡ ON" : "⚡ OFF";
    }

    const stockStrip = document.getElementById("polaroidStockStrip");
    if (stockStrip) {
        stockStrip.innerHTML = "";
        POLAROID_STOCKS.forEach(s => {
            const chip = document.createElement("button");
            chip.type = "button";
            chip.className = "pol-stock-chip" + (s.id === stock.id ? " active" : "");
            chip.innerHTML = `<strong>${s.name}</strong><small>${s.surface} • ${s.format === "go" ? "Mini" : "600/SX"}</small>`;
            chip.addEventListener("click", () => {
                selectedPolaroidStockId = s.id;
                localStorage.setItem("analog_photolab_pol_stock", s.id);
                updatePolaroidUI();
            });
            stockStrip.appendChild(chip);
        });
    }

    const frameStrip = document.getElementById("polaroidFrameStrip");
    if (frameStrip) {
        frameStrip.innerHTML = "";
        POLAROID_FRAMES.forEach(fr => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "pol-frame-pill" + (fr.id === frameStyle.id ? " active" : "");
            btn.textContent = fr.name;
            btn.addEventListener("click", () => {
                selectedPolaroidFrameId = fr.id;
                localStorage.setItem("analog_photolab_pol_frame", fr.id);
                updatePolaroidUI();
            });
            frameStrip.appendChild(btn);
        });
    }
}

async function startPolaroidCameraStream() {
    stopCamera();
    const video = document.getElementById("polaroidVideo");
    const fallback = document.getElementById("polaroidFallbackMsg");
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

function enterPolaroidMode() {
    document.getElementById("polaroidThirdsGrid").classList.toggle("visible", thirdsVisible);
    document.getElementById("polaroidThirdsToggleBtn").classList.toggle("active", thirdsVisible);
    updatePolaroidUI();
    refreshPolaroidGalleryBadge();
    switchView("view-polaroid");
    startPolaroidCameraStream();
}

function startLivePolaroidDevelopment(shot, innerImg, stock, frameStyle) {
    if (livePolAnimId) cancelAnimationFrame(livePolAnimId);
    livePolActiveShot = shot;

    const tray = document.getElementById("polaroidDevTray");
    const card = document.getElementById("polaroidEjectCard");
    const cardFrame = document.getElementById("polaroidEjectFrame");
    const canvas = document.getElementById("polaroidLiveCanvas");
    const chin = document.getElementById("polaroidEjectChin");
    const statusTxt = document.getElementById("polaroidDevStatusTxt");
    const skipBtn = document.getElementById("polaroidSkipDevBtn");
    const openBtn = document.getElementById("polaroidOpenEjectedBtn");

    cardFrame.style.background = frameStyle.bg;
    chin.style.color = frameStyle.text;
    chin.textContent = "SVILUPPO CHIMICO...";
    skipBtn.style.display = "inline-flex";
    openBtn.style.display = "none";

    canvas.width = 240;
    canvas.height = Math.round(240 * (stock.imgH / stock.imgW));
    canvas.style.borderRadius = stock.format === "round" ? "50%" : "0px";

    // Slide-out dalla fessura della Polaroid
    tray.classList.add("open");
    card.classList.remove("ejected");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => card.classList.add("ejected"));
    });

    const ctx = canvas.getContext("2d");
    const totalMs = (stock.devSeconds || 11) * 1000;
    const startTime = performance.now();

    function drawStage(progress) {
        const p = Math.max(0, Math.min(1, progress));
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        // Strato base opacificante Polaroid (verde-blu scuro che poi diventa nebbia lattiginosa e infine svanisce)
        const baseR = Math.round(22 + p * 188);
        const baseG = Math.round(38 + p * 190);
        const baseB = Math.round(42 + p * 182);
        ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
        ctx.fillRect(0, 0, w, h);

        // Comparsa graduale dell'immagine reale chimica
        if (p > 0.06) {
            const imgAlpha = Math.pow(Math.min(1, (p - 0.06) / 0.86), 1.35);
            const contrastPct = Math.round(38 + p * 62);
            const brightPct = Math.round(135 - p * 35);
            const satPct = stock.film.mode === "bw" ? 0 : Math.round(20 + p * 80);

            ctx.save();
            ctx.globalAlpha = imgAlpha;
            ctx.filter = `contrast(${contrastPct}%) brightness(${brightPct}%) saturate(${satPct}%)`;
            ctx.drawImage(innerImg, 0, 0, w, h);
            ctx.restore();
        }

        // Velo lattiginoso residuo dell'opacificante chimico che si dissolve lentamente
        const veilAlpha = Math.max(0, 0.72 * Math.pow(1 - p, 1.55));
        if (veilAlpha > 0.01) {
            ctx.fillStyle = `rgba(212, 226, 222, ${veilAlpha.toFixed(3)})`;
            ctx.fillRect(0, 0, w, h);
        }

        // Striature leggere dei rulli nei primi secondi
        if (p < 0.35) {
            const streakA = (0.35 - p) * 0.25;
            ctx.fillStyle = `rgba(18, 30, 32, ${streakA.toFixed(3)})`;
            ctx.fillRect(0, h * 0.18, w, 3);
            ctx.fillRect(0, h * 0.67, w, 2);
        }
    }

    function finishNow() {
        if (livePolAnimId) cancelAnimationFrame(livePolAnimId);
        livePolAnimId = null;
        drawStage(1);
        statusTxt.textContent = `Pronta • ${stock.totalW}×${stock.totalH}px (300 DPI)`;
        chin.textContent = stock.name.toUpperCase();
        skipBtn.style.display = "none";
        openBtn.style.display = "inline-flex";
    }

    livePolForceFinish = finishNow;

    function tick(now) {
        const p = Math.min(1, (now - startTime) / totalMs);
        drawStage(p);
        statusTxt.textContent = `Sviluppo chimico... ${Math.round(p * 100)}%`;
        if (p < 1) {
            livePolAnimId = requestAnimationFrame(tick);
        } else {
            finishNow();
        }
    }
    livePolAnimId = requestAnimationFrame(tick);
}

async function captureAndDevelopPolaroid(sourceCanvas, usedFlash = false, hardwareFlashFired = false) {
    const stock = getPolaroidStock();
    const frameStyle = getPolaroidFrameStyle();

    playPolaroidEjectSound();
    const curtain = document.getElementById("polaroidCurtain");
    curtain.classList.add("blink");
    setTimeout(() => curtain.classList.remove("blink"), 110);

    // Crop esatto alle proporzioni della finestra Polaroid
    const targetRatio = stock.imgW / stock.imgH;
    const croppedCanvas = drawCroppedToCanvas(sourceCanvas, sourceCanvas.width, sourceCanvas.height, targetRatio, false);

    if (usedFlash && !hardwareFlashFired) {
        const ctx = croppedCanvas.getContext("2d");
        const w = croppedCanvas.width, h = croppedCanvas.height;
        const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.08, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
        grad.addColorStop(0, "rgba(255, 252, 245, 0.25)");
        grad.addColorStop(0.55, "rgba(255, 250, 240, 0.08)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0.24)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }

    const flashBoost = (usedFlash && !hardwareFlashFired) ? 0.35 : 0.0;
    const frameStub = {
        exposureEV: polaroidLdEV + flashBoost,
        aperture: 4.0,
        defectSeed: Math.random(),
        defects: createDefaultFrameDefects(Math.random())
    };
    const printOptsStub = {
        paperId: stock.paperId,
        time: 12.0,
        grade: 2.3,
        mag: 0,
        yel: 0,
        burn: 0.16,
        grainScale: 1.0,
        zoom: 1.0,
        rotation: 0,
        panX: 0,
        panY: 0,
        border: "none",
        defects: frameStub.defects
    };

    // Render WebGL alla risoluzione esatta dello slot Polaroid a 300 DPI
    renderFrameWithWebGL(croppedCanvas, stock.film, frameStub, 0, printOptsStub, false, Math.max(stock.imgW, stock.imgH));
    croppedCanvas.width = 0; croppedCanvas.height = 0;

    // Copia dell'immagine interna sviluppata
    const innerCanvas = document.createElement("canvas");
    innerCanvas.width = stock.imgW;
    innerCanvas.height = stock.imgH;
    innerCanvas.getContext("2d").drawImage(glCanvas, 0, 0, stock.imgW, stock.imgH);

    const innerBlob = await canvasToBlob(innerCanvas, "image/jpeg", 0.95);
    const sheetBlob = await renderPolaroidFinalSheetBlob(innerCanvas, stock, frameStyle, "");

    // Miniatura per la griglia galleria
    const sheetImg = await loadImageFromSource(sheetBlob);
    const tCanvas = document.createElement("canvas");
    tCanvas.width = 340;
    tCanvas.height = Math.round(340 * (stock.totalH / stock.totalW));
    tCanvas.getContext("2d").drawImage(sheetImg, 0, 0, tCanvas.width, tCanvas.height);
    const thumbBlob = await canvasToBlob(tCanvas, "image/jpeg", 0.84);
    tCanvas.width = 0; tCanvas.height = 0;

    const shot = {
        id: "pol-" + Date.now(),
        createdAt: Date.now(),
        stockId: stock.id,
        frameId: frameStyle.id,
        caption: "",
        flash: usedFlash,
        starred: false,
        savedLocally: false,
        innerBlob,
        sheetBlob,
        thumbBlob
    };

    await savePolaroidShotToDB(shot);
    await refreshPolaroidGalleryBadge();
    await refreshStorageSummary();

    const liveImg = await loadImageFromSource(innerBlob);
    innerCanvas.width = 0; innerCanvas.height = 0;
    startLivePolaroidDevelopment(shot, liveImg, stock, frameStyle);
}

/* =========================================================
   GALLERIA & DETTAGLIO POLAROID (ESPORTAZIONE 300 DPI)
   ========================================================= */
async function updatePolaroidSelectionUI() {
    const shots = await getAllPolaroidShotsFromDB();
    const starCount = shots.filter(s => s.starred).length;
    const selBtn = document.getElementById("polaroidSaveSelectedBtn");
    const allBtn = document.getElementById("polaroidSelectAllBtn");
    if (selBtn) selBtn.textContent = `Salva Selezionate (${starCount})`;
    if (allBtn) {
        const allStarred = shots.length > 0 && starCount === shots.length;
        allBtn.textContent = allStarred ? "☆ Deseleziona" : "★ Tutte";
    }
}

async function openPolaroidGallery() {
    const shots = (await getAllPolaroidShotsFromDB()).sort((a, b) => b.createdAt - a.createdAt);
    const grid = document.getElementById("polaroidGalleryGrid");
    const empty = document.getElementById("polaroidGalleryEmpty");
    grid.innerHTML = "";

    if (shots.length === 0) {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
        shots.forEach(shot => {
            const stock = getPolaroidStock(shot.stockId);
            const cell = document.createElement("div");
            cell.className = "contact-frame" + (shot.starred ? " starred" : "");

            const img = document.createElement("img");
            img.style.aspectRatio = `${stock.totalW} / ${stock.totalH}`;
            const srcObj = shot.thumbBlob || shot.sheetBlob;
            if (srcObj instanceof Blob) {
                const u = URL.createObjectURL(srcObj);
                img.onload = () => URL.revokeObjectURL(u);
                img.src = u;
            }

            const starBtn = document.createElement("button");
            starBtn.type = "button";
            starBtn.className = "frame-star-btn" + (shot.starred ? " active" : "");
            starBtn.textContent = shot.starred ? "★" : "☆";
            starBtn.addEventListener("click", async (e) => {
                e.stopPropagation();
                shot.starred = !shot.starred;
                await savePolaroidShotToDB(shot);
                openPolaroidGallery();
            });

            cell.appendChild(img);
            cell.appendChild(starBtn);

            if (shot.savedLocally) {
                const badge = document.createElement("span");
                badge.className = "frame-saved-badge";
                badge.textContent = "✓ Salvata";
                cell.appendChild(badge);
            }

            const numSpan = document.createElement("span");
            numSpan.className = "frame-num";
            numSpan.textContent = `${stock.tag}${shot.flash ? " ⚡" : ""}`;
            cell.appendChild(numSpan);

            cell.addEventListener("click", () => openPolaroidDetail(shot.id));
            grid.appendChild(cell);
        });
    }

    await updatePolaroidSelectionUI();
    switchView("view-polaroid-gallery");
}

async function openPolaroidDetail(shotId) {
    const shots = await getAllPolaroidShotsFromDB();
    const shot = shots.find(s => s.id === shotId);
    if (!shot) return;
    activePolaroidDetailId = shot.id;

    const stock = getPolaroidStock(shot.stockId);
    const frameStyle = getPolaroidFrameStyle(shot.frameId);
    document.getElementById("polaroidDetailTitle").textContent = `${stock.name} • ${frameStyle.name}`;
    document.getElementById("polaroidDetailMeta").textContent = `${stock.mmLabel} • ${stock.totalW}×${stock.totalH} px @ 300 DPI`;

    const starBtn = document.getElementById("polaroidDetailStarBtn");
    starBtn.textContent = shot.starred ? "★" : "☆";
    starBtn.classList.toggle("btn-gold", !!shot.starred);

    document.getElementById("polaroidCaptionInput").value = shot.caption || "";

    const imgEl = document.getElementById("polaroidDetailImg");
    const srcObj = shot.sheetBlob || shot.thumbBlob;
    if (srcObj instanceof Blob) {
        const u = URL.createObjectURL(srcObj);
        imgEl.onload = () => URL.revokeObjectURL(u);
        imgEl.src = u;
    }

    document.getElementById("polaroidDetailModal").classList.add("open");
}

async function exportPolaroidBatch(shotsToExport, zipName) {
    if (!shotsToExport.length) {
        alert("Metti prima la stellina (★) su almeno una Polaroid oppure clicca 'Salva Tutte'.");
        return;
    }
    const items = [];
    for (let i = 0; i < shotsToExport.length; i++) {
        const s = shotsToExport[i];
        const stock = getPolaroidStock(s.stockId);
        let blob = s.sheetBlob;
        if (blob) blob = await injectJpegDpi(blob, 300);
        if (blob) {
            items.push({
                name: `polaroid-${stock.id}-${String(i + 1).padStart(2, "0")}-300dpi.jpg`,
                blob
            });
            s.savedLocally = true;
            await savePolaroidShotToDB(s);
        }
    }
    await downloadImagesBatch(items, zipName);
    await refreshPolaroidGalleryBadge();
    await refreshStorageSummary();
    if (document.getElementById("view-polaroid-gallery").classList.contains("active")) {
        openPolaroidGallery();
    }
}

function initPolaroidEventListeners() {
    updatePolaroidUI();

    document.getElementById("polaroidExitBtn").addEventListener("click", () => {
        stopCamera();
        refreshHomeStatus();
        switchView("view-home");
    });

    document.getElementById("polaroidOpenGalleryBtn").addEventListener("click", () => {
        stopCamera();
        openPolaroidGallery();
    });

    document.getElementById("polaroidGalleryBackCamBtn").addEventListener("click", () => {
        enterPolaroidMode();
    });

    document.getElementById("polaroidGalleryHomeBtn").addEventListener("click", () => {
        refreshHomeStatus();
        switchView("view-home");
    });

    document.getElementById("polaroidThirdsToggleBtn").addEventListener("click", () => {
        thirdsVisible = !thirdsVisible;
        localStorage.setItem("analog_lab_thirds_v7", thirdsVisible ? "1" : "0");
        document.getElementById("polaroidThirdsGrid").classList.toggle("visible", thirdsVisible);
        document.getElementById("polaroidThirdsToggleBtn").classList.toggle("active", thirdsVisible);
        syncThirdsUI();
    });

    document.getElementById("polaroidLdMinus").addEventListener("click", () => {
        polaroidLdEV = Math.max(-1.5, +(polaroidLdEV - 0.5).toFixed(1));
        updatePolaroidUI();
    });

    document.getElementById("polaroidLdPlus").addEventListener("click", () => {
        polaroidLdEV = Math.min(1.5, +(polaroidLdEV + 0.5).toFixed(1));
        updatePolaroidUI();
    });

    document.getElementById("polaroidFlashBtn").addEventListener("click", () => {
        polaroidFlashEnabled = !polaroidFlashEnabled;
        updatePolaroidUI();
    });

    document.getElementById("polaroidSwitchCamBtn").addEventListener("click", () => {
        facingMode = facingMode === "environment" ? "user" : "environment";
        startPolaroidCameraStream();
    });

    document.getElementById("polaroidSkipDevBtn").addEventListener("click", () => {
        if (typeof livePolForceFinish === "function") livePolForceFinish();
    });

    document.getElementById("polaroidOpenEjectedBtn").addEventListener("click", () => {
        if (livePolActiveShot) openPolaroidDetail(livePolActiveShot.id);
    });

    document.getElementById("polaroidShutterBtn").addEventListener("click", async () => {
        if (polaroidCapturing) return;
        const video = document.getElementById("polaroidVideo");
        if (!mediaStream || video.videoWidth === 0) {
            alert("Fotocamera live non attiva: tocca '📷 Carica Foto' qui a sinistra per sviluppare subito una Polaroid!");
            return;
        }
        polaroidCapturing = true;
        const prevFlash = flashActive;
        flashActive = polaroidFlashEnabled;
        try {
            const stock = getPolaroidStock();
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameWithRealFlash(video, stock.imgW / stock.imgH);
            await captureAndDevelopPolaroid(capCanvas, polaroidFlashEnabled, hardwareFlashFired);
            capCanvas.width = 0; capCanvas.height = 0;
        } finally {
            flashActive = prevFlash;
            polaroidCapturing = false;
        }
    });

    document.getElementById("polaroidGalleryInput").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = async () => {
                const c = document.createElement("canvas");
                c.width = img.width;
                c.height = img.height;
                c.getContext("2d").drawImage(img, 0, 0);
                await captureAndDevelopPolaroid(c, polaroidFlashEnabled, false);
                c.width = 0; c.height = 0;
            };
            img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
        e.target.value = "";
    });

    document.getElementById("polaroidSelectAllBtn").addEventListener("click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        if (!shots.length) return;
        const allStarred = shots.every(s => s.starred);
        for (const s of shots) {
            s.starred = !allStarred;
            await savePolaroidShotToDB(s);
        }
        openPolaroidGallery();
    });

    document.getElementById("polaroidSaveSelectedBtn").addEventListener("click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const selected = shots.filter(s => s.starred);
        await exportPolaroidBatch(selected, "polaroid-scelte-300dpi.zip");
    });

    document.getElementById("polaroidSaveAllBtn").addEventListener("click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        await exportPolaroidBatch(shots, "polaroid-tutte-300dpi.zip");
    });

    document.getElementById("polaroidDetailCloseBtn").addEventListener("click", () => {
        document.getElementById("polaroidDetailModal").classList.remove("open");
    });

    document.getElementById("polaroidDetailStarBtn").addEventListener("click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const shot = shots.find(s => s.id === activePolaroidDetailId);
        if (!shot) return;
        shot.starred = !shot.starred;
        await savePolaroidShotToDB(shot);
        openPolaroidDetail(shot.id);
        if (document.getElementById("view-polaroid-gallery").classList.contains("active")) {
            openPolaroidGallery();
        }
    });

    document.getElementById("polaroidApplyCaptionBtn").addEventListener("click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const shot = shots.find(s => s.id === activePolaroidDetailId);
        if (!shot || !shot.innerBlob) return;
        const caption = document.getElementById("polaroidCaptionInput").value || "";
        const stock = getPolaroidStock(shot.stockId);
        const frameStyle = getPolaroidFrameStyle(shot.frameId);
        const innerImg = await loadImageFromSource(shot.innerBlob);

        shot.caption = caption;
        shot.sheetBlob = await renderPolaroidFinalSheetBlob(innerImg, stock, frameStyle, caption);

        const sheetImg = await loadImageFromSource(shot.sheetBlob);
        const tCanvas = document.createElement("canvas");
        tCanvas.width = 340;
        tCanvas.height = Math.round(340 * (stock.totalH / stock.totalW));
        tCanvas.getContext("2d").drawImage(sheetImg, 0, 0, tCanvas.width, tCanvas.height);
        shot.thumbBlob = await canvasToBlob(tCanvas, "image/jpeg", 0.84);
        tCanvas.width = 0; tCanvas.height = 0;

        await savePolaroidShotToDB(shot);
        await refreshStorageSummary();
        openPolaroidDetail(shot.id);
        if (document.getElementById("view-polaroid-gallery").classList.contains("active")) {
            openPolaroidGallery();
        }
    });

    document.getElementById("polaroidDetailSaveBtn").addEventListener("click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const shot = shots.find(s => s.id === activePolaroidDetailId);
        if (!shot) return;
        await exportPolaroidBatch([shot], "polaroid-300dpi.zip");
        openPolaroidDetail(shot.id);
    });

    document.getElementById("polaroidDeleteShotBtn").addEventListener("click", async () => {
        if (!activePolaroidDetailId) return;
        if (!confirm("Eliminare questa Polaroid dalla memoria?")) return;
        await deletePolaroidShotFromDB(activePolaroidDetailId);
        document.getElementById("polaroidDetailModal").classList.remove("open");
        await refreshPolaroidGalleryBadge();
        await refreshStorageSummary();
        if (document.getElementById("view-polaroid-gallery").classList.contains("active")) {
            openPolaroidGallery();
        }
    });
}
