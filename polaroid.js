/* =========================================================
   POLAROID.JS — v1.0.3
   Emulazione Polaroid a Scatto Singolo alla MASSIMA RISOLUZIONE NATIVA
   - Proporzioni fisiche esatte (600/i-Type/SX-70, Round, Go) senza downscale
   - Calibrazione Lift/Gamma/Gain reale per tutte le 6 emulsioni (zero aloni)
   - Sviluppo progressivo chimico dal vivo in fessura
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
        optics: { ca: 0.16, barrel: 0.020, softness: 0.08, fadeBlack: 0.018, edgeBleed: 0.14 },
        colorGrade: {
            shadowLift: [-0.010, 0.018, 0.020],
            midGain: [1.01, 1.00, 0.96],
            highGain: [1.04, 1.00, 0.91]
        },
        film: {
            id: "pol-600", name: "Polaroid Color 600", iso: 640, mode: "color",
            toe: 0.022, shoulder: 0.48, contrast: 0.30, temp: 0.06, tint: -0.04,
            saturation: 0.90, shadowTemp: -0.10, highTemp: 0.08,
            halation: 0.04, halThreshold: 0.88, bloom: 0.05, grain: 0.022, grainSize: 1.28,
            matrix: [1.02, 0.01, -0.03, -0.03, 1.04, -0.01, 0.02, 0.04, 0.94]
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
        optics: { ca: 0.10, barrel: 0.014, softness: 0.04, fadeBlack: 0.010, edgeBleed: 0.08 },
        colorGrade: {
            shadowLift: [-0.004, 0.008, 0.010],
            midGain: [1.02, 1.00, 0.98],
            highGain: [1.03, 1.01, 0.95]
        },
        film: {
            id: "pol-itype", name: "Polaroid Color i-Type", iso: 640, mode: "color",
            toe: 0.014, shoulder: 0.40, contrast: 0.38, temp: 0.03, tint: -0.01,
            saturation: 1.06, shadowTemp: -0.05, highTemp: 0.04,
            halation: 0.02, halThreshold: 0.90, bloom: 0.03, grain: 0.018, grainSize: 1.15,
            matrix: [1.04, -0.01, -0.03, -0.01, 1.02, -0.01, 0.00, 0.02, 0.98]
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
        paperId: "ilford-fb-warm",
        optics: { ca: 0.20, barrel: 0.024, softness: 0.12, fadeBlack: 0.018, edgeBleed: 0.16 },
        colorGrade: {
            shadowLift: [0.012, 0.016, 0.006],
            midGain: [1.05, 0.99, 0.90],
            highGain: [1.06, 1.01, 0.87]
        },
        film: {
            id: "pol-sx70", name: "Polaroid SX-70", iso: 160, mode: "color",
            toe: 0.020, shoulder: 0.54, contrast: 0.32, temp: 0.14, tint: 0.02,
            saturation: 0.94, shadowTemp: 0.03, highTemp: 0.12,
            halation: 0.06, halThreshold: 0.86, bloom: 0.07, grain: 0.020, grainSize: 1.22,
            matrix: [1.07, 0.00, -0.07, 0.02, 1.00, -0.02, -0.06, 0.05, 1.01]
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
        optics: { ca: 0.0, barrel: 0.018, softness: 0.06, fadeBlack: 0.024, edgeBleed: 0.12 },
        colorGrade: {
            shadowLift: [0.018, 0.016, 0.012],
            midGain: [1.02, 1.00, 0.97],
            highGain: [1.03, 1.00, 0.94]
        },
        film: {
            id: "pol-bw", name: "Polaroid B&W 600", iso: 640, mode: "bw",
            toe: 0.024, shoulder: 0.42, contrast: 0.44, temp: 0.0, tint: 0.0,
            saturation: 0.0, shadowTemp: 0.04, highTemp: 0.05,
            halation: 0.02, halThreshold: 0.88, bloom: 0.04, grain: 0.034, grainSize: 1.30,
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
        optics: { ca: 0.16, barrel: 0.020, softness: 0.08, fadeBlack: 0.018, edgeBleed: 0.14 },
        colorGrade: {
            shadowLift: [-0.010, 0.018, 0.020],
            midGain: [1.01, 1.00, 0.96],
            highGain: [1.04, 1.00, 0.91]
        },
        film: {
            id: "pol-round", name: "Polaroid Round 600", iso: 640, mode: "color",
            toe: 0.022, shoulder: 0.48, contrast: 0.30, temp: 0.06, tint: -0.04,
            saturation: 0.90, shadowTemp: -0.10, highTemp: 0.08,
            halation: 0.04, halThreshold: 0.88, bloom: 0.05, grain: 0.022, grainSize: 1.28,
            matrix: [1.02, 0.01, -0.03, -0.03, 1.04, -0.01, 0.02, 0.04, 0.94]
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
        optics: { ca: 0.18, barrel: 0.026, softness: 0.06, fadeBlack: 0.012, edgeBleed: 0.18 },
        colorGrade: {
            shadowLift: [-0.006, 0.012, 0.016],
            midGain: [1.03, 0.99, 0.98],
            highGain: [1.04, 1.00, 0.93]
        },
        film: {
            id: "pol-go", name: "Polaroid Go", iso: 640, mode: "color",
            toe: 0.016, shoulder: 0.40, contrast: 0.38, temp: 0.04, tint: -0.02,
            saturation: 1.06, shadowTemp: -0.06, highTemp: 0.05,
            halation: 0.03, halThreshold: 0.88, bloom: 0.04, grain: 0.024, grainSize: 1.22,
            matrix: [1.04, -0.01, -0.03, -0.01, 1.03, -0.02, 0.00, 0.02, 0.98]
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

let livePolAnimId = null;
let livePolActiveShot = null;
let livePolForceFinish = null;

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

    const MAX_SIDE = 4096;
    const MAX_AREA = 15500000;
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
        for (let i = 0; i < 1400; i++) {
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

    const outBlob = await canvasToBlob(outCanvas, "image/jpeg", 0.95);
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
    const videoConstraints = { facingMode: facingMode, width: { ideal: 4096 }, height: { ideal: 3072 } };

    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
        if (video) {
            video.srcObject = mediaStream;
            video.style.display = "block";
        }
        if (fallback) fallback.style.display = "none";
        detectFlashCapabilities();
    } catch (err) {
        if (video) video.style.display = "none";
        if (fallback) fallback.style.display = "flex";
    }
}

function enterPolaroidMode() {
    const tGrid = document.getElementById("polaroidThirdsGrid");
    const tBtn = document.getElementById("polaroidThirdsToggleBtn");
    if (tGrid) tGrid.classList.toggle("visible", thirdsVisible);
    if (tBtn) tBtn.classList.toggle("active", thirdsVisible);
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
    canvas.height = Math.round(240 / stock.imgRatio);
    canvas.style.borderRadius = stock.format === "round" ? "50%" : "0px";

    tray.classList.add("open");
    card.classList.remove("ejected");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => card.classList.add("ejected"));
    });

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

        if (p > 0.08) {
            const imgAlpha = Math.pow(Math.min(1, (p - 0.08) / 0.84), 1.45);
            const contrastPct = Math.round(35 + p * 65);
            const brightPct = Math.round(140 - p * 40);
            const satPct = stock.film.mode === "bw" ? 0 : Math.round(15 + p * 85);

            ctx.save();
            ctx.globalAlpha = imgAlpha;
            ctx.filter = `contrast(${contrastPct}%) brightness(${brightPct}%) saturate(${satPct}%)`;
            ctx.drawImage(innerImg, 0, 0, w, h);
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

    function finishNow() {
        if (livePolAnimId) cancelAnimationFrame(livePolAnimId);
        livePolAnimId = null;
        drawStage(1);
        const resTxt = shot.width && shot.height ? `${shot.width}×${shot.height}px` : "Piena Ris.";
        statusTxt.textContent = `Pronta • ${resTxt}`;
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
    if (curtain) {
        curtain.classList.add("blink");
        setTimeout(() => curtain.classList.remove("blink"), 110);
    }

    const croppedCanvas = drawCroppedToCanvas(sourceCanvas, sourceCanvas.width, sourceCanvas.height, stock.imgRatio, false);

    const flashBoost = (usedFlash && !hardwareFlashFired) ? 0.25 : 0.0;
    const frameStub = {
        exposureEV: polaroidLdEV + flashBoost,
        aperture: 4.0,
        defectSeed: Math.random(),
        defects: createDefaultFrameDefects(Math.random()),
        grade: stock.colorGrade || null,
        optics: {
            ca: stock.optics.ca,
            barrel: stock.optics.barrel,
            softness: stock.optics.softness,
            fadeBlack: stock.optics.fadeBlack,
            flashFalloff: (usedFlash && !hardwareFlashFired) ? 0.72 : (usedFlash ? 0.28 : 0.0)
        }
    };
    const printOptsStub = {
        paperId: stock.paperId,
        time: 12.0,
        grade: 2.3,
        cyan: 0,
        mag: 0,
        yel: 0,
        burn: 0.16,
        grainScale: 1.0,
        paperTexScale: 0.35,
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

    const fullTargetDim = Math.min(MAX_GL_TEX, Math.max(croppedCanvas.width, croppedCanvas.height));
    renderFrameWithWebGL(croppedCanvas, stock.film, frameStub, 0, printOptsStub, false, fullTargetDim, 0);
    croppedCanvas.width = 0; croppedCanvas.height = 0;

    const innerW = glCanvas.width;
    const innerH = glCanvas.height;
    const innerCanvas = document.createElement("canvas");
    innerCanvas.width = innerW;
    innerCanvas.height = innerH;
    innerCanvas.getContext("2d").drawImage(glCanvas, 0, 0, innerW, innerH);

    const innerBlob = await canvasToBlob(innerCanvas, "image/jpeg", 0.95);
    const sheetResult = await renderPolaroidFinalSheetBlob(innerCanvas, stock, frameStyle, "");

    const sheetImg = await loadImageFromSource(sheetResult.blob);
    const tCanvas = document.createElement("canvas");
    tCanvas.width = 360;
    tCanvas.height = Math.round(360 / stock.totalRatio);
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
        width: sheetResult.width,
        height: sheetResult.height,
        innerBlob,
        sheetBlob: sheetResult.blob,
        thumbBlob
    };

    await savePolaroidShotToDB(shot);
    await refreshPolaroidGalleryBadge();
    await refreshStorageSummary();

    const liveImg = await loadImageFromSource(innerBlob);
    innerCanvas.width = 0; innerCanvas.height = 0;
    startLivePolaroidDevelopment(shot, liveImg, stock, frameStyle);
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

async function openPolaroidGallery() {
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

    pOn("polaroidExitBtn", "click", () => {
        stopCamera();
        refreshHomeStatus();
        switchView("view-home");
    });

    pOn("polaroidOpenGalleryBtn", "click", () => {
        stopCamera();
        openPolaroidGallery();
    });

    pOn("polaroidGalleryBackCamBtn", "click", () => {
        enterPolaroidMode();
    });

    pOn("polaroidGalleryHomeBtn", "click", () => {
        refreshHomeStatus();
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
        const video = document.getElementById("polaroidVideo");
        if (!mediaStream || !video || video.videoWidth === 0) {
            alert("Fotocamera live non attiva: tocca '📷 Carica Foto' qui a sinistra per sviluppare subito una Polaroid!");
            return;
        }
        polaroidCapturing = true;
        const prevFlash = flashActive;
        flashActive = polaroidFlashEnabled;
        try {
            const stock = getPolaroidStock();
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameFullRes(video, stock.imgRatio, polaroidFlashEnabled);
            await captureAndDevelopPolaroid(capCanvas, polaroidFlashEnabled, hardwareFlashFired);
            capCanvas.width = 0; capCanvas.height = 0;
        } finally {
            flashActive = prevFlash;
            polaroidCapturing = false;
        }
    });

    pOn("polaroidGalleryInput", "change", (e) => {
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

    pOn("polaroidDetailCloseBtn", "click", () => {
        document.getElementById("polaroidDetailModal").classList.remove("open");
    });

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

        const sheetImg = await loadImageFromSource(shot.sheetBlob);
        const tCanvas = document.createElement("canvas");
        tCanvas.width = 360;
        tCanvas.height = Math.round(360 / stock.totalRatio);
        tCanvas.getContext("2d").drawImage(sheetImg, 0, 0, tCanvas.width, tCanvas.height);
        shot.thumbBlob = await canvasToBlob(tCanvas, "image/jpeg", 0.84);
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
        document.getElementById("polaroidDetailModal").classList.remove("open");
        await refreshPolaroidGalleryBadge();
        await refreshStorageSummary();
        const galView = document.getElementById("view-polaroid-gallery");
        if (galView && galView.classList.contains("active")) {
            openPolaroidGallery();
        }
    });
}