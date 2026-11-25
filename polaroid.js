/* =========================================================
   POLAROID.JS — v1.0.10 (LED FLASH FIX + SAFE DB)
   ========================================================= */

const POLAROID_STOCKS = [
    {
        id: "color-600",
        name: "Color 600",
        tag: "600 CLASSIC",
        desc: "ISO 640 • Lucida • Ombre verde-ciano, luci crema morbide",
        format: "classic",
        totalRatio: 88.5 / 107.5,
        imgRatio: 907 / 932,
        padSideFrac: 0.066,
        mmLabel: "88.5×107.5mm",
        surface: "Lucida (Glossy)",
        devSeconds: 10,
        paperId: "kodak-endura",
        optics: { ca: 0.08, barrel: 0.012, softness: 0.04, fadeBlack: 0.014, edgeBleed: 0.14 },
        colorGrade: {
            shadowLift: [-0.008, 0.014, 0.016],
            midGain: [1.01, 1.00, 0.97],
            highGain: [1.02, 1.00, 0.93]
        },
        film: {
            id: "pol-600", name: "Polaroid Color 600", iso: 640, mode: "color",
            toe: 0.018, shoulder: 0.48, contrast: 0.30, temp: 0.05, tint: -0.02,
            saturation: 0.92, shadowTemp: -0.06, highTemp: 0.06,
            halation: 0.02, halThreshold: 0.90, bloom: 0.03, grain: 0.020, grainSize: 1.24,
            matrix: [1.02, 0.01, -0.03, -0.02, 1.03, -0.01, 0.02, 0.03, 0.95]
        }
    },
    {
        id: "color-itype",
        name: "Color i-Type",
        tag: "i-TYPE",
        desc: "ISO 640 • Lucida • Colori moderni più vivi, bianchi crema",
        format: "classic",
        totalRatio: 88.5 / 107.5,
        imgRatio: 907 / 932,
        padSideFrac: 0.066,
        mmLabel: "88.5×107.5mm",
        surface: "Lucida (Glossy)",
        devSeconds: 9,
        paperId: "fuji-crystal-glossy",
        optics: { ca: 0.05, barrel: 0.010, softness: 0.0, fadeBlack: 0.008, edgeBleed: 0.08 },
        colorGrade: {
            shadowLift: [-0.004, 0.006, 0.008],
            midGain: [1.01, 1.00, 0.99],
            highGain: [1.02, 1.00, 0.96]
        },
        film: {
            id: "pol-itype", name: "Polaroid Color i-Type", iso: 640, mode: "color",
            toe: 0.012, shoulder: 0.42, contrast: 0.36, temp: 0.02, tint: 0.0,
            saturation: 1.06, shadowTemp: -0.04, highTemp: 0.03,
            halation: 0.0, halThreshold: 0.92, bloom: 0.02, grain: 0.016, grainSize: 1.12,
            matrix: [1.03, -0.01, -0.02, -0.01, 1.02, -0.01, 0.00, 0.02, 0.98]
        }
    },
    {
        id: "sx-70",
        name: "SX-70 Classic",
        tag: "SX-70",
        desc: "ISO 160 • Emulsione spessa • Ocra calda pittorica anni '70",
        format: "classic",
        totalRatio: 88.5 / 107.5,
        imgRatio: 907 / 932,
        padSideFrac: 0.066,
        mmLabel: "88.5×107.5mm",
        surface: "Lucida Spessa",
        devSeconds: 12,
        paperId: "kodak-endura",
        optics: { ca: 0.10, barrel: 0.014, softness: 0.06, fadeBlack: 0.016, edgeBleed: 0.16 },
        colorGrade: {
            shadowLift: [0.010, 0.014, 0.006],
            midGain: [1.04, 0.99, 0.91],
            highGain: [1.04, 1.00, 0.89]
        },
        film: {
            id: "pol-sx70", name: "Polaroid SX-70", iso: 160, mode: "color",
            toe: 0.018, shoulder: 0.54, contrast: 0.32, temp: 0.11, tint: 0.02,
            saturation: 0.94, shadowTemp: 0.02, highTemp: 0.09,
            halation: 0.03, halThreshold: 0.88, bloom: 0.04, grain: 0.018, grainSize: 1.20,
            matrix: [1.06, 0.00, -0.06, 0.02, 1.00, -0.02, -0.05, 0.04, 1.01]
        }
    },
    {
        id: "bw-600",
        name: "B&W 600 Mono",
        tag: "B&W 600",
        desc: "ISO 640 • Satinata • Argento caldo, neri carbone morbidi",
        format: "classic",
        totalRatio: 88.5 / 107.5,
        imgRatio: 907 / 932,
        padSideFrac: 0.066,
        mmLabel: "88.5×107.5mm",
        surface: "Satinata / Lucida",
        devSeconds: 8,
        paperId: "ilford-fb-warm",
        optics: { ca: 0.0, barrel: 0.012, softness: 0.04, fadeBlack: 0.020, edgeBleed: 0.12 },
        colorGrade: {
            shadowLift: [0.014, 0.012, 0.010],
            midGain: [1.02, 1.00, 0.97],
            highGain: [1.02, 1.00, 0.95]
        },
        film: {
            id: "pol-bw", name: "Polaroid B&W 600", iso: 640, mode: "bw",
            toe: 0.020, shoulder: 0.42, contrast: 0.44, temp: 0.0, tint: 0.0,
            saturation: 0.0, shadowTemp: 0.03, highTemp: 0.04,
            halation: 0.02, halThreshold: 0.90, bloom: 0.03, grain: 0.032, grainSize: 1.28,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
        }
    },
    {
        id: "round-600",
        name: "600 Round",
        tag: "ROUND",
        desc: "ISO 640 • Finestra circolare Ø 76.8mm su formato 600",
        format: "round",
        totalRatio: 88.5 / 107.5,
        imgRatio: 1.0,
        padSideFrac: 0.066,
        mmLabel: "88.5×107.5mm (Ø76.8)",
        surface: "Lucida (Glossy)",
        devSeconds: 10,
        paperId: "kodak-endura",
        optics: { ca: 0.08, barrel: 0.012, softness: 0.04, fadeBlack: 0.014, edgeBleed: 0.14 },
        colorGrade: {
            shadowLift: [-0.008, 0.014, 0.016],
            midGain: [1.01, 1.00, 0.97],
            highGain: [1.02, 1.00, 0.93]
        },
        film: {
            id: "pol-round", name: "Polaroid Round 600", iso: 640, mode: "color",
            toe: 0.018, shoulder: 0.48, contrast: 0.30, temp: 0.05, tint: -0.02,
            saturation: 0.92, shadowTemp: -0.06, highTemp: 0.06,
            halation: 0.02, halThreshold: 0.90, bloom: 0.03, grain: 0.020, grainSize: 1.24,
            matrix: [1.02, 0.01, -0.03, -0.02, 1.03, -0.01, 0.02, 0.03, 0.95]
        }
    },
    {
        id: "polaroid-go",
        name: "Polaroid Go",
        tag: "GO MINI",
        desc: "ISO 640 • Tascabile 53.9×66.6mm • Contrasto vivo",
        format: "go",
        totalRatio: 53.9 / 66.6,
        imgRatio: 543 / 555,
        padSideFrac: 0.0738,
        mmLabel: "53.9×66.6mm",
        surface: "Lucida (Glossy)",
        devSeconds: 9,
        paperId: "fuji-crystal-glossy",
        optics: { ca: 0.10, barrel: 0.014, softness: 0.04, fadeBlack: 0.010, edgeBleed: 0.18 },
        colorGrade: {
            shadowLift: [-0.005, 0.010, 0.014],
            midGain: [1.02, 0.99, 0.98],
            highGain: [1.03, 1.00, 0.94]
        },
        film: {
            id: "pol-go", name: "Polaroid Go", iso: 640, mode: "color",
            toe: 0.014, shoulder: 0.40, contrast: 0.38, temp: 0.03, tint: -0.01,
            saturation: 1.06, shadowTemp: -0.05, highTemp: 0.04,
            halation: 0.02, halThreshold: 0.90, bloom: 0.02, grain: 0.022, grainSize: 1.20,
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
let polaroidGalleryOrigin = "view-polaroid";
let memoryPolaroidShots = [];
let activePolaroidDetailId = null;

let livePolAnimId = null;
let livePolActiveShot = null;
let livePolForceFinish = null;
let polSaveQueue = Promise.resolve();

function polWaitPaint() {
    return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
}

function getPolaroidStock(id = selectedPolaroidStockId) {
    return POLAROID_STOCKS.find(s => s.id === id) || POLAROID_STOCKS[0];
}

function getPolaroidFrameStyle(id = selectedPolaroidFrameId) {
    return POLAROID_FRAMES.find(f => f.id === id) || POLAROID_FRAMES[0];
}

function computePolaroidSheetGeometry(srcImgW, srcImgH, stock) {
    const imgFracW = 1 - 2 * stock.padSideFrac;
    let totalW = Math.round(srcImgW / imgFracW);
    let totalH = Math.round(totalW / stock.totalRatio);

    const MAX_SIDE = 3600;
    const MAX_AREA = 11000000;
    if (totalH > MAX_SIDE) {
        totalH = MAX_SIDE;
        totalW = Math.round(totalH * stock.totalRatio);
    }
    if (totalW * totalH > MAX_AREA) {
        const s = Math.sqrt(MAX_AREA / (totalW * totalH));
        totalW = Math.floor(totalW * s);
        totalH = Math.floor(totalH * s);
    }

    const padSide = Math.round(totalW * stock.padSideFrac);
    const padTop = padSide;
    const imgW = totalW - padSide * 2;
    const imgH = Math.round(imgW / stock.imgRatio);
    return { totalW, totalH, imgW, imgH, padSide, padTop };
}

function savePolaroidShotToDB(shot) {
    const idx = memoryPolaroidShots.findIndex(s => s.id === shot.id);
    if (idx >= 0) memoryPolaroidShots[idx] = shot;
    else memoryPolaroidShots.unshift(shot);

    if (!db || !db.objectStoreNames.contains("polaroidShots")) return Promise.resolve();
    return new Promise((resolve) => {
        let settled = false;
        const done = () => { if (!settled) { settled = true; resolve(); } };
        const timer = setTimeout(done, 2500);
        try {
            const tx = db.transaction("polaroidShots", "readwrite");
            tx.objectStore("polaroidShots").put(shot);
            tx.oncomplete = () => { clearTimeout(timer); done(); };
            tx.onerror = () => { clearTimeout(timer); done(); };
            tx.onabort = () => { clearTimeout(timer); done(); };
        } catch (e) {
            clearTimeout(timer);
            done();
        }
    });
}

function getAllPolaroidShotsFromDB() {
    if (!db || !db.objectStoreNames.contains("polaroidShots")) {
        return Promise.resolve([...memoryPolaroidShots]);
    }
    return new Promise((resolve) => {
        try {
            const tx = db.transaction("polaroidShots", "readonly");
            const req = tx.objectStore("polaroidShots").getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => resolve([...memoryPolaroidShots]);
        } catch (e) {
            resolve([...memoryPolaroidShots]);
        }
    });
}

function deletePolaroidShotFromDB(id) {
    memoryPolaroidShots = memoryPolaroidShots.filter(s => s.id !== id);
    if (!db || !db.objectStoreNames.contains("polaroidShots")) return Promise.resolve();
    return new Promise((resolve) => {
        let settled = false;
        const done = () => { if (!settled) { settled = true; resolve(); } };
        const timer = setTimeout(done, 2000);
        try {
            const tx = db.transaction("polaroidShots", "readwrite");
            tx.objectStore("polaroidShots").delete(id);
            tx.oncomplete = () => { clearTimeout(timer); done(); };
            tx.onerror = () => { clearTimeout(timer); done(); };
            tx.onabort = () => { clearTimeout(timer); done(); };
        } catch (e) {
            clearTimeout(timer);
            done();
        }
    });
}

function playPolaroidEjectSound(withFlash = false) {
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

        if (withFlash) {
            const fOsc = ctx.createOscillator();
            const fGain = ctx.createGain();
            fOsc.type = "sine";
            fOsc.frequency.setValueAtTime(3100, now);
            fOsc.frequency.exponentialRampToValueAtTime(700, now + 0.032);
            fGain.gain.setValueAtTime(0.24, now);
            fGain.gain.exponentialRampToValueAtTime(0.001, now + 0.036);
            fOsc.connect(fGain); fGain.connect(ctx.destination);
            fOsc.start(now); fOsc.stop(now + 0.04);
        }

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

async function renderPolaroidFinalSheetBlob(innerImgOrCanvas, stock, frameStyle, caption = "") {
    const srcW = innerImgOrCanvas.naturalWidth || innerImgOrCanvas.width;
    const srcH = innerImgOrCanvas.naturalHeight || innerImgOrCanvas.height;
    const geo = computePolaroidSheetGeometry(srcW, srcH, stock);

    const outCanvas = document.createElement("canvas");
    outCanvas.width = geo.totalW;
    outCanvas.height = geo.totalH;
    const ctx = outCanvas.getContext("2d");

    ctx.fillStyle = frameStyle.bg;
    ctx.fillRect(0, 0, geo.totalW, geo.totalH);

    if (frameStyle.id === "matte-ivory" || frameStyle.id === "classic-white") {
        ctx.fillStyle = frameStyle.id === "matte-ivory" ? "rgba(120, 95, 50, 0.025)" : "rgba(0,0,0,0.012)";
        for (let i = 0; i < 900; i++) {
            ctx.fillRect(Math.random() * geo.totalW, Math.random() * geo.totalH, 2, 2);
        }
    } else if (frameStyle.id === "gold-frame") {
        const gGrad = ctx.createLinearGradient(0, 0, geo.totalW, geo.totalH);
        gGrad.addColorStop(0, "rgba(255,255,255,0.18)");
        gGrad.addColorStop(0.5, "rgba(0,0,0,0.04)");
        gGrad.addColorStop(1, "rgba(255,245,200,0.20)");
        ctx.fillStyle = gGrad;
        ctx.fillRect(0, 0, geo.totalW, geo.totalH);
    }

    const x = geo.padSide;
    const y = geo.padTop;
    const w = geo.imgW;
    const h = geo.imgH;

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

    const scale = Math.max(w / srcW, h / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    const dx = x + (w - drawW) / 2;
    const dy = y + (h - drawH) / 2;
    ctx.drawImage(innerImgOrCanvas, dx, dy, drawW, drawH);

    const bleedAmt = (stock.optics && stock.optics.edgeBleed) ? stock.optics.edgeBleed : 0.12;
    const edgeShade = ctx.createRadialGradient(x + w / 2, y + h / 2, w * 0.38, x + w / 2, y + h / 2, w * 0.75);
    edgeShade.addColorStop(0, "rgba(0,0,0,0)");
    edgeShade.addColorStop(1, `rgba(18, 28, 26, ${bleedAmt.toFixed(2)})`);
    ctx.fillStyle = edgeShade;
    ctx.fillRect(x, y, w, h);

    if (!stock.surface.includes("Satinata")) {
        const sheen = ctx.createLinearGradient(x, y, x + w, y + h);
        sheen.addColorStop(0, "rgba(255,255,255,0.045)");
        sheen.addColorStop(0.35, "rgba(255,255,255,0.0)");
        sheen.addColorStop(1, "rgba(0,0,0,0.035)");
        ctx.fillStyle = sheen;
        ctx.fillRect(x, y, w, h);
    }
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = frameStyle.innerBorder;
    ctx.lineWidth = Math.max(2, Math.round(geo.totalW * 0.0025));
    if (stock.format === "round") {
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
        ctx.stroke();
    } else {
        ctx.strokeRect(x, y, w, h);
    }
    ctx.restore();

    if (caption && caption.trim()) {
        const chinTop = y + h;
        const chinH = geo.totalH - chinTop;
        const fontSize = Math.round(geo.totalW * 0.044);
        ctx.save();
        ctx.fillStyle = frameStyle.text;
        ctx.font = `italic 600 ${fontSize}px "Bradley Hand", "Segoe Script", "Marker Felt", cursive, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.trim(), geo.totalW / 2, chinTop + chinH * 0.48, geo.imgW);
        ctx.restore();
    }

    const outBlob = await canvasToBlob(outCanvas, "image/jpeg", 0.92);
    const finalW = outCanvas.width;
    const finalH = outCanvas.height;
    outCanvas.width = 0; outCanvas.height = 0;
    return { blob: outBlob, width: finalW, height: finalH };
}

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
    if (specBadge) specBadge.textContent = `${stock.mmLabel} • PIENA RIS.`;

    const vf = document.getElementById("polaroidVfFrame");
    if (vf) {
        vf.style.aspectRatio = String(stock.imgRatio);
        vf.classList.toggle("is-round", stock.format === "round");
    }

    const vfTag = document.getElementById("polaroidVfStockTag");
    if (vfTag) vfTag.textContent = `${stock.tag} • ${stock.surface.toUpperCase()}`;

    const ldVal = document.getElementById("polaroidLdVal");
    if (ldVal) ldVal.textContent = (polaroidLdEV > 0 ? "+" : "") + polaroidLdEV.toFixed(1);

    const flashBtn = document.getElementById("polaroidFlashBtn");
    if (flashBtn) {
        flashBtn.classList.toggle("active", polaroidFlashEnabled);
        if (!polaroidFlashEnabled) {
            flashBtn.textContent = "⚡ OFF";
        } else if (facingMode === "user") {
            flashBtn.textContent = "⚡ SCHERMO";
        } else if (hardwareFlashSupport.hasTorch) {
            flashBtn.textContent = "⚡ LED ON";
        } else {
            flashBtn.textContent = "⚡ SIMULATO";
        }
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
    stopActiveMediaTracks();
    const localSession = ++cameraSessionSeq;
    const video = document.getElementById("polaroidVideo");
    const fallback = document.getElementById("polaroidFallbackMsg");
    const videoConstraints = { facingMode: facingMode, width: { ideal: 2560 }, height: { ideal: 1920 } };

    try {
        const stream = await openCameraStreamWithRetry(videoConstraints, localSession);
        if (!stream || localSession !== cameraSessionSeq) {
            if (stream) stream.getTracks().forEach(t => { try { t.stop(); } catch (e) { } });
            return;
        }
        mediaStream = stream;
        if (video) {
            video.srcObject = mediaStream;
            video.style.display = "block";
            await withTimeout(video.play(), 1200, undefined);
        }
        if (localSession !== cameraSessionSeq) return;
        if (fallback) fallback.style.display = "none";
        await detectFlashCapabilities();
        if (localSession !== cameraSessionSeq) return;
        updatePolaroidUI();
    } catch (err) {
        if (localSession === cameraSessionSeq) {
            if (video) video.style.display = "none";
            if (fallback) fallback.style.display = "flex";
        }
    }
}

function enterPolaroidMode() {
    polaroidCapturing = false;
    const tGrid = document.getElementById("polaroidThirdsGrid");
    const tBtn = document.getElementById("polaroidThirdsToggleBtn");
    if (tGrid) tGrid.classList.toggle("visible", thirdsVisible);
    if (tBtn) tBtn.classList.toggle("active", thirdsVisible);
    updatePolaroidUI();
    refreshPolaroidGalleryBadge();
    switchView("view-polaroid");
    startPolaroidCameraStream();
}

function buildPolaroidFastPreview(sourceCanvas, stock) {
    const pCanvas = document.createElement("canvas");
    const w = 240;
    const h = Math.round(w / stock.imgRatio);
    pCanvas.width = w;
    pCanvas.height = h;
    const pCtx = pCanvas.getContext("2d");
    pCtx.drawImage(sourceCanvas, 0, 0, w, h);
    return pCanvas;
}

function startLivePolaroidDevelopment(initialShot, previewImgOrCanvas, stock, frameStyle, pendingShotPromise = null) {
    if (livePolAnimId) cancelAnimationFrame(livePolAnimId);
    livePolActiveShot = initialShot;
    let activePreview = previewImgOrCanvas;
    let devFinished = false;

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
    canvas.height = Math.round(240 / stock.imgRatio);
    canvas.style.width = "146px";
    canvas.style.height = Math.round(146 / stock.imgRatio) + "px";
    canvas.style.borderRadius = stock.format === "round" ? "50%" : "0px";

    tray.classList.add("open");
    card.classList.remove("ejected");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => card.classList.add("ejected"));
    });

    if (pendingShotPromise) {
        pendingShotPromise.then(async (savedShot) => {
            if (!savedShot) return;
            livePolActiveShot = savedShot;
            if (savedShot.innerBlob) {
                try {
                    const developedImg = await loadFastThumbnailSource(savedShot.innerBlob, 260);
                    activePreview = developedImg;
                    if (devFinished) {
                        drawStage(1);
                        const resTxt = savedShot.width && savedShot.height ? `${savedShot.width}×${savedShot.height}px` : "Piena Ris.";
                        statusTxt.textContent = `Pronta • ${resTxt}`;
                        openBtn.style.display = "inline-flex";
                    }
                } catch (e) { }
            }
        });
    }

    const ctx = canvas.getContext("2d");
    const totalMs = (stock.devSeconds || 10) * 1000;
    const startTime = performance.now();

    function drawStage(progress) {
        const p = Math.max(0, Math.min(1, progress));
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const baseR = Math.round(18 + p * 195);
        const baseG = Math.round(44 + p * 188);
        const baseB = Math.round(48 + p * 180);
        ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
        ctx.fillRect(0, 0, w, h);

        if (p > 0.08 && activePreview) {
            const imgAlpha = Math.pow(Math.min(1, (p - 0.08) / 0.84), 1.45);
            const contrastPct = Math.round(35 + p * 65);
            const brightPct = Math.round(140 - p * 40);
            const satPct = stock.film.mode === "bw" ? 0 : Math.round(15 + p * 85);

            ctx.save();
            ctx.globalAlpha = imgAlpha;
            ctx.filter = `contrast(${contrastPct}%) brightness(${brightPct}%) saturate(${satPct}%)`;
            ctx.drawImage(activePreview, 0, 0, w, h);
            ctx.restore();
        }

        const veilAlpha = Math.max(0, 0.78 * Math.pow(1 - p, 1.6));
        if (veilAlpha > 0.01) {
            const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.1, w * 0.5, h * 0.5, w * 0.75);
            grad.addColorStop(0, `rgba(210, 232, 228, ${(veilAlpha * 0.75).toFixed(3)})`);
            grad.addColorStop(1, `rgba(182, 214, 210, ${veilAlpha.toFixed(3)})`);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);
        }

        if (p < 0.35) {
            const streakA = (0.35 - p) * 0.28;
            ctx.fillStyle = `rgba(14, 34, 38, ${streakA.toFixed(3)})`;
            ctx.fillRect(0, h * 0.18, w, 3);
            ctx.fillRect(0, h * 0.72, w, 2);
        }
    }

    async function finishNow() {
        if (livePolAnimId) cancelAnimationFrame(livePolAnimId);
        livePolAnimId = null;
        devFinished = true;
        drawStage(1);
        chin.textContent = stock.name.toUpperCase();
        skipBtn.style.display = "none";

        if (!livePolActiveShot && pendingShotPromise) {
            statusTxt.textContent = "Finalizzazione HD...";
            await pendingShotPromise;
        }
        drawStage(1);
        const s = livePolActiveShot;
        const resTxt = s && s.width && s.height ? `${s.width}×${s.height}px` : "Piena Ris.";
        statusTxt.textContent = `Pronta • ${resTxt}`;
        openBtn.style.display = s ? "inline-flex" : "none";
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

async function processPolaroidInQueue(croppedCanvas, stock, frameStyle, ldEV, usedFlash, hardwareFlashFired) {
    const flashBoost = usedFlash ? (hardwareFlashFired ? 0.05 : 0.35) : 0.0;
    const frameStub = {
        exposureEV: ldEV + flashBoost - 0.10,
        aperture: 4.0,
        defectSeed: Math.random(),
        defects: createDefaultFrameDefects(Math.random()),
        grade: stock.colorGrade || null,
        optics: {
            ca: stock.optics.ca,
            barrel: stock.optics.barrel,
            softness: stock.optics.softness,
            fadeBlack: stock.optics.fadeBlack,
            flashFalloff: usedFlash ? (hardwareFlashFired ? 0.28 : 0.80) : 0.0
        }
    };
    const printOptsStub = {
        paperId: stock.paperId,
        time: 12.0,
        grade: 2.3,
        cyan: 0,
        mag: 0,
        yel: 0,
        burn: 0.14,
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
        defects: frameStub.defects
    };

    const fullTargetDim = Math.min(MAX_GL_TEX, 3072, Math.max(croppedCanvas.width, croppedCanvas.height));
    renderFrameWithWebGL(croppedCanvas, stock.film, frameStub, 0, printOptsStub, false, fullTargetDim, 0);
    croppedCanvas.width = 0; croppedCanvas.height = 0;

    const innerW = glCanvas.width;
    const innerH = glCanvas.height;
    const innerCanvas = document.createElement("canvas");
    innerCanvas.width = innerW;
    innerCanvas.height = innerH;
    innerCanvas.getContext("2d").drawImage(glCanvas, 0, 0, innerW, innerH);

    const innerBlob = await canvasToBlob(innerCanvas, "image/jpeg", 0.92);
    const sheetResult = await renderPolaroidFinalSheetBlob(innerCanvas, stock, frameStyle, "");
    innerCanvas.width = 0; innerCanvas.height = 0;

    const sheetImg = await loadFastThumbnailSource(sheetResult.blob, 360);
    const tCanvas = document.createElement("canvas");
    tCanvas.width = 360;
    tCanvas.height = Math.round(360 / stock.totalRatio);
    tCanvas.getContext("2d").drawImage(sheetImg, 0, 0, tCanvas.width, tCanvas.height);
    if (sheetImg && typeof sheetImg.close === "function") sheetImg.close();
    const thumbBlob = await canvasToBlob(tCanvas, "image/jpeg", 0.82);
    tCanvas.width = 0; tCanvas.height = 0;

    const shot = {
        id: "pol-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        createdAt: Date.now(),
        stockId: stock.id,
        frameId: frameStyle.id,
        caption: "",
        flash: usedFlash,
        starred: false,
        savedLocally: false,
        width: sheetResult.width,
        height: sheetResult.height,
        innerBlob,
        sheetBlob: sheetResult.blob,
        thumbBlob
    };

    await savePolaroidShotToDB(shot);
    refreshPolaroidGalleryBadge().catch(() => { });
    return shot;
}

function captureAndDevelopPolaroidInstant(croppedCanvas, usedFlash = false, hardwareFlashFired = false) {
    const stock = getPolaroidStock();
    const frameStyle = getPolaroidFrameStyle();
    const ldSnapshot = polaroidLdEV;

    const previewCanvas = buildPolaroidFastPreview(croppedCanvas, stock);

    const bgJob = polSaveQueue.then(async () => {
        await new Promise(r => setTimeout(r, 80));
        return processPolaroidInQueue(croppedCanvas, stock, frameStyle, ldSnapshot, usedFlash, hardwareFlashFired);
    });
    polSaveQueue = bgJob.catch(() => null);

    startLivePolaroidDevelopment(null, previewCanvas, stock, frameStyle, bgJob);
}

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

async function openPolaroidGallery(origin = null) {
    if (origin) polaroidGalleryOrigin = origin;
    const backBtn = document.getElementById("polaroidGalleryBackCamBtn");
    if (backBtn) {
        backBtn.textContent = polaroidGalleryOrigin === "view-home" ? "← Home" : "← Camera";
    }

    await Promise.race([polSaveQueue.catch(() => null), new Promise(r => setTimeout(r, 1500))]);
    const shots = (await getAllPolaroidShotsFromDB()).sort((a, b) => b.createdAt - a.createdAt);
    const grid = document.getElementById("polaroidGalleryGrid");
    const empty = document.getElementById("polaroidGalleryEmpty");
    if (!grid || !empty) return;
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
            img.style.aspectRatio = String(stock.totalRatio);
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
    const dimLabel = (shot.width && shot.height) ? `${shot.width}×${shot.height} px` : "Piena risoluzione";
    document.getElementById("polaroidDetailMeta").textContent = `${stock.mmLabel} • ${dimLabel}`;

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
    if (typeof ensureBackGuard === "function") ensureBackGuard();
}

function closePolaroidDetailModal() {
    document.getElementById("polaroidDetailModal").classList.remove("open");
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
        if (s.sheetBlob) {
            items.push({
                name: `polaroid-${stock.id}-${String(i + 1).padStart(2, "0")}.jpg`,
                blob: s.sheetBlob
            });
            s.savedLocally = true;
            await savePolaroidShotToDB(s);
        }
    }
    await downloadImagesBatch(items, zipName);
    await refreshPolaroidGalleryBadge();
    await refreshStorageSummary();
    const galView = document.getElementById("view-polaroid-gallery");
    if (galView && galView.classList.contains("active")) {
        openPolaroidGallery();
    }
}

function initPolaroidEventListeners() {
    updatePolaroidUI();

    const pOn = (id, ev, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(ev, fn);
    };

    pOn("polaroidExitBtn", "click", async () => {
        stopCamera();
        polaroidCapturing = false;
        await Promise.race([polSaveQueue.catch(() => null), new Promise(r => setTimeout(r, 1000))]);
        refreshHomeStatus();
        refreshStorageSummary();
        switchView("view-home");
    });

    pOn("polaroidOpenGalleryBtn", "click", () => {
        if (polaroidCapturing) return;
        stopCamera();
        openPolaroidGallery("view-polaroid");
    });

    pOn("polaroidGalleryBackCamBtn", "click", () => {
        if (polaroidGalleryOrigin === "view-home") {
            refreshHomeStatus();
            refreshStorageSummary();
            switchView("view-home");
        } else {
            enterPolaroidMode();
        }
    });

    pOn("polaroidGalleryHomeBtn", "click", () => {
        refreshHomeStatus();
        refreshStorageSummary();
        switchView("view-home");
    });

    pOn("polaroidThirdsToggleBtn", "click", () => {
        thirdsVisible = !thirdsVisible;
        localStorage.setItem("analog_lab_thirds_v7", thirdsVisible ? "1" : "0");
        const tGrid = document.getElementById("polaroidThirdsGrid");
        const tBtn = document.getElementById("polaroidThirdsToggleBtn");
        if (tGrid) tGrid.classList.toggle("visible", thirdsVisible);
        if (tBtn) tBtn.classList.toggle("active", thirdsVisible);
        syncThirdsUI();
    });

    pOn("polaroidLdMinus", "click", () => {
        polaroidLdEV = Math.max(-1.5, +(polaroidLdEV - 0.5).toFixed(1));
        updatePolaroidUI();
    });

    pOn("polaroidLdPlus", "click", () => {
        polaroidLdEV = Math.min(1.5, +(polaroidLdEV + 0.5).toFixed(1));
        updatePolaroidUI();
    });

    pOn("polaroidFlashBtn", "click", () => {
        polaroidFlashEnabled = !polaroidFlashEnabled;
        updatePolaroidUI();
    });

    pOn("polaroidSwitchCamBtn", "click", () => {
        if (polaroidCapturing || isCameraRestarting) return;
        facingMode = facingMode === "environment" ? "user" : "environment";
        startPolaroidCameraStream();
    });

    pOn("polaroidSkipDevBtn", "click", () => {
        if (typeof livePolForceFinish === "function") livePolForceFinish();
    });

    pOn("polaroidOpenEjectedBtn", "click", () => {
        if (livePolActiveShot) openPolaroidDetail(livePolActiveShot.id);
    });

    pOn("polaroidShutterBtn", "click", async () => {
        if (polaroidCapturing) return;
        if (isCameraRestarting) {
            await withTimeout(cameraRestartPromise, 1500, null);
        }
        const video = document.getElementById("polaroidVideo");
        if (!mediaStream || !video || video.readyState < 2 || video.videoWidth === 0) {
            alert("Fotocamera live non ancora pronta: attendi un istante o tocca '📷 Carica Foto' per sviluppare subito una Polaroid!");
            return;
        }
        polaroidCapturing = true;
        const useFlash = polaroidFlashEnabled;
        const curtain = document.getElementById("polaroidCurtain");

        try {
            const stock = getPolaroidStock();
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameWithSyncedFlash(video, stock.imgRatio, {
                useFlash,
                maxLongSide: 2400,
                curtainEl: curtain,
                curtainMinMs: 110,
                restartStreamFn: startPolaroidCameraStream,
                onShutterFire: () => playPolaroidEjectSound(useFlash)
            });
            if (!capCanvas) return;
            await polWaitPaint();
            captureAndDevelopPolaroidInstant(capCanvas, useFlash, hardwareFlashFired);
        } finally {
            polaroidCapturing = false;
        }
    });

    pOn("polaroidGalleryInput", "change", async (e) => {
        const file = e.target.files[0];
        e.target.value = "";
        if (!file) return;
        try {
            const img = await loadImageFromSource(file);
            playPolaroidEjectSound(polaroidFlashEnabled);
            const stock = getPolaroidStock();
            const c = drawCroppedToCanvas(img, img.naturalWidth || img.width, img.naturalHeight || img.height, stock.imgRatio, false, 3072);
            captureAndDevelopPolaroidInstant(c, polaroidFlashEnabled, false);
        } catch (err) {
            alert("Impossibile caricare l'immagine selezionata.");
        }
    });

    pOn("polaroidSelectAllBtn", "click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        if (!shots.length) return;
        const allStarred = shots.every(s => s.starred);
        for (const s of shots) {
            s.starred = !allStarred;
            await savePolaroidShotToDB(s);
        }
        openPolaroidGallery();
    });

    pOn("polaroidSaveSelectedBtn", "click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const selected = shots.filter(s => s.starred);
        await exportPolaroidBatch(selected, "polaroid-scelte.zip");
    });

    pOn("polaroidSaveAllBtn", "click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        await exportPolaroidBatch(shots, "polaroid-tutte.zip");
    });

    pOn("polaroidDetailCloseBtn", "click", closePolaroidDetailModal);

    pOn("polaroidDetailStarBtn", "click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const shot = shots.find(s => s.id === activePolaroidDetailId);
        if (!shot) return;
        shot.starred = !shot.starred;
        await savePolaroidShotToDB(shot);
        openPolaroidDetail(shot.id);
        const galView = document.getElementById("view-polaroid-gallery");
        if (galView && galView.classList.contains("active")) {
            openPolaroidGallery();
        }
    });

    pOn("polaroidApplyCaptionBtn", "click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const shot = shots.find(s => s.id === activePolaroidDetailId);
        if (!shot || !shot.innerBlob) return;
        const caption = document.getElementById("polaroidCaptionInput").value || "";
        const stock = getPolaroidStock(shot.stockId);
        const frameStyle = getPolaroidFrameStyle(shot.frameId);
        const innerImg = await loadImageFromSource(shot.innerBlob);

        shot.caption = caption;
        const sheetRes = await renderPolaroidFinalSheetBlob(innerImg, stock, frameStyle, caption);
        shot.sheetBlob = sheetRes.blob;
        shot.width = sheetRes.width;
        shot.height = sheetRes.height;

        const sheetImg = await loadFastThumbnailSource(shot.sheetBlob, 360);
        const tCanvas = document.createElement("canvas");
        tCanvas.width = 360;
        tCanvas.height = Math.round(360 / stock.totalRatio);
        tCanvas.getContext("2d").drawImage(sheetImg, 0, 0, tCanvas.width, tCanvas.height);
        if (sheetImg && typeof sheetImg.close === "function") sheetImg.close();
        shot.thumbBlob = await canvasToBlob(tCanvas, "image/jpeg", 0.82);
        tCanvas.width = 0; tCanvas.height = 0;

        await savePolaroidShotToDB(shot);
        await refreshStorageSummary();
        openPolaroidDetail(shot.id);
        const galView = document.getElementById("view-polaroid-gallery");
        if (galView && galView.classList.contains("active")) {
            openPolaroidGallery();
        }
    });

    pOn("polaroidDetailSaveBtn", "click", async () => {
        const shots = await getAllPolaroidShotsFromDB();
        const shot = shots.find(s => s.id === activePolaroidDetailId);
        if (!shot) return;
        await exportPolaroidBatch([shot], "polaroid-hd.zip");
        openPolaroidDetail(shot.id);
    });

    pOn("polaroidDeleteShotBtn", "click", async () => {
        if (!activePolaroidDetailId) return;
        if (!confirm("Eliminare questa Polaroid dalla memoria?")) return;
        await deletePolaroidShotFromDB(activePolaroidDetailId);
        closePolaroidDetailModal();
        await refreshPolaroidGalleryBadge();
        await refreshStorageSummary();
        const galView = document.getElementById("view-polaroid-gallery");
        if (galView && galView.classList.contains("active")) {
            openPolaroidGallery();
        }
    });
}