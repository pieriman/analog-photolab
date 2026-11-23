/* =========================================================
   ANALOG PHOTOLAB v0.9 — APP.JS
   Home a 3 Percorsi (Simulazione Pellicole, Polaroid 300 DPI, Usa & Getta)
   Motore Blob, ZIP multi-download, Gestione Memoria, WebGL,
   Modalità Manuale M + Lancetta, Lab Pellicole & Backup
   ========================================================= */

/* =========================================================
   1. DATABASE EMULSIONI, MARCHE ICONICHE & CARTE FOTOGRAFICHE
   ========================================================= */
const DEFAULT_FILMS = [
    {
        id: "portra-400", name: "Kodak Portra 400", iso: 400, mode: "color",
        toe: 0.020, shoulder: 0.55, contrast: 0.24, temp: 0.06, tint: 0.02,
        saturation: 0.94, shadowTemp: -0.02, highTemp: 0.04,
        halation: 0.30, halThreshold: 0.86, bloom: 0.08, grain: 0.026, grainSize: 1.05,
        matrix: [1.03, -0.02, -0.01, 0.01, 1.00, -0.01, -0.02, 0.03, 0.99]
    },
    {
        id: "cinestill-800t", name: "Cinestill 800T", iso: 800, mode: "color",
        toe: 0.012, shoulder: 0.38, contrast: 0.46, temp: -0.18, tint: -0.03,
        saturation: 1.06, shadowTemp: -0.10, highTemp: 0.06,
        halation: 1.55, halThreshold: 0.72, bloom: 0.14, grain: 0.044, grainSize: 1.25,
        matrix: [1.05, -0.03, -0.02, -0.02, 1.02, 0.00, -0.04, 0.04, 1.00]
    },
    {
        id: "kodak-gold-200", name: "Kodak Gold 200", iso: 200, mode: "color",
        toe: 0.016, shoulder: 0.42, contrast: 0.38, temp: 0.14, tint: 0.03,
        saturation: 1.12, shadowTemp: 0.03, highTemp: 0.09,
        halation: 0.42, halThreshold: 0.84, bloom: 0.10, grain: 0.024, grainSize: 1.00,
        matrix: [1.06, -0.04, -0.02, 0.02, 0.99, -0.01, -0.05, 0.03, 1.02]
    },
    {
        id: "fuji-superia-400", name: "Fuji Superia 400", iso: 400, mode: "color",
        toe: 0.015, shoulder: 0.44, contrast: 0.36, temp: -0.04, tint: -0.07,
        saturation: 1.04, shadowTemp: -0.06, highTemp: 0.02,
        halation: 0.25, halThreshold: 0.86, bloom: 0.06, grain: 0.032, grainSize: 1.10,
        matrix: [0.99, 0.02, -0.01, -0.03, 1.05, -0.02, -0.01, 0.02, 0.99]
    },
    {
        id: "ilford-hp5", name: "Ilford HP5 400", iso: 400, mode: "bw",
        toe: 0.018, shoulder: 0.34, contrast: 0.54, temp: 0.0, tint: 0.0,
        saturation: 0.0, shadowTemp: 0.01, highTemp: 0.03,
        halation: 0.20, halThreshold: 0.82, bloom: 0.12, grain: 0.054, grainSize: 1.30,
        matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
    }
];

const BRAND_PROFILES = [
    { keys: ["kodak", "portra", "ektar", "ultramax", "tri-x", "t-max", "tmax", "colorplus", "kodachrome", "ektachrome", "vision3", "pro image"], brand: "KODAK", color: "#f4b400", text: "#141004", bg: "#f4b400" },
    { keys: ["fuji", "superia", "provia", "velvia", "astia", "pro 400h", "neopan", "acros", "c200"], brand: "FUJIFILM", color: "#1a9e56", text: "#ffffff", bg: "#1a9e56" },
    { keys: ["agfa", "apx", "vista", "precisa", "optima", "scala", "isopan", "agfachrome"], brand: "AGFA", color: "#e03c28", text: "#ffffff", bg: "#e03c28" },
    { keys: ["ilford", "hp5", "fp4", "delta", "xp2", "pan f"], brand: "ILFORD", color: "#cfd4dc", text: "#141418", bg: "#cfd4dc" },
    { keys: ["cinestill", "800t", "400d", "50d", "double-x"], brand: "CINESTILL", color: "#178ca6", text: "#ffffff", bg: "#178ca6" },
    { keys: ["lomo", "lomochrome", "metropolis", "purple", "turquoise", "redscale", "earl grey", "lady grey"], brand: "LOMO", color: "#b9388e", text: "#ffffff", bg: "#b9388e" },
    { keys: ["harman", "phoenix"], brand: "HARMAN", color: "#e86a24", text: "#ffffff", bg: "#e86a24" },
    { keys: ["kentmere"], brand: "KENTMERE", color: "#4a6fa5", text: "#ffffff", bg: "#4a6fa5" },
    { keys: ["foma", "fomapan", "retropan"], brand: "FOMA", color: "#267373", text: "#ffffff", bg: "#267373" },
    { keys: ["rollei", "retro", "rpx", "crossbird", "superpan"], brand: "ROLLEI", color: "#8f2d3c", text: "#ffffff", bg: "#8f2d3c" },
    { keys: ["ferrania", "solaris", "p30", "p33", "orto"], brand: "FERRANIA", color: "#2d5da8", text: "#ffffff", bg: "#2d5da8" },
    { keys: ["adox", "chs", "hr-50", "silvermax"], brand: "ADOX", color: "#737d3b", text: "#ffffff", bg: "#737d3b" },
    { keys: ["orwo", "wolfen", "un54", "n74", "nc500", "nc400"], brand: "ORWO", color: "#c96a1b", text: "#ffffff", bg: "#c96a1b" },
    { keys: ["bergger", "pancro"], brand: "BERGGER", color: "#8c6d53", text: "#ffffff", bg: "#8c6d53" },
    { keys: ["washi"], brand: "WASHI", color: "#c9886b", text: "#18120e", bg: "#c9886b" },
    { keys: ["konica", "centuria"], brand: "KONICA", color: "#2864b8", text: "#ffffff", bg: "#2864b8" },
    { keys: ["lucky"], brand: "LUCKY", color: "#c42b2b", text: "#ffffff", bg: "#c42b2b" },
    { keys: ["silbersalz"], brand: "SILBERSALZ", color: "#56616b", text: "#ffffff", bg: "#56616b" },
    { keys: ["dubble", "revolog", "yodica"], brand: "CREATIVE", color: "#e8567f", text: "#ffffff", bg: "#e8567f" },
    { keys: ["candido"], brand: "CANDIDO", color: "#3ab795", text: "#111a17", bg: "#3ab795" },
    { keys: ["kono"], brand: "KONO!", color: "#b5b02b", text: "#161608", bg: "#b5b02b" },
    { keys: ["street candy"], brand: "ST.CANDY", color: "#5c6b57", text: "#ffffff", bg: "#5c6b57" },
    { keys: ["flic"], brand: "FLIC FILM", color: "#2e8099", text: "#ffffff", bg: "#2e8099" },
    { keys: ["arista"], brand: "ARISTA", color: "#3b5998", text: "#ffffff", bg: "#3b5998" }
];

const CUSTOM_NON_BRAND_PALETTE = [
    "#6c5ce7", "#26998e", "#c45c82", "#4d79c7",
    "#9c7444", "#874b8c", "#5f8c56", "#b5563e"
];

function getContrastTextColor(hex) {
    if (!hex || !hex.startsWith("#") || hex.length < 7) return "#ffffff";
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 148 ? "#14120e" : "#ffffff";
}

function resolveFilmBrandTheme(film) {
    const nameLower = (film.name || "").toLowerCase();
    const matchedBrand = BRAND_PROFILES.find(b => b.keys.some(k => nameLower.includes(k)));

    if (film.customColor) {
        return {
            brand: matchedBrand ? matchedBrand.brand : "CUSTOM",
            color: film.customColor,
            bg: film.customColor,
            text: getContrastTextColor(film.customColor),
            isRecognizedBrand: !!matchedBrand
        };
    }

    if (matchedBrand) {
        return {
            brand: matchedBrand.brand,
            color: matchedBrand.color,
            bg: matchedBrand.bg,
            text: matchedBrand.text,
            isRecognizedBrand: true
        };
    }

    const keyStr = (film.id || "") + "|" + (film.name || "");
    let hash = 0;
    for (let i = 0; i < keyStr.length; i++) hash = ((hash << 5) - hash + keyStr.charCodeAt(i)) | 0;
    const fallbackHex = CUSTOM_NON_BRAND_PALETTE[Math.abs(hash) % CUSTOM_NON_BRAND_PALETTE.length];
    return {
        brand: "CUSTOM",
        color: fallbackHex,
        bg: fallbackHex,
        text: getContrastTextColor(fallbackHex),
        isRecognizedBrand: false
    };
}

const PAPER_STOCKS = [
    {
        id: "kodak-endura", name: "Kodak Endura Supra",
        desc: "RA-4 Satinata • Toni caldi e naturali", swatch: "#f6f1e6",
        baseTint: [1.01, 0.99, 0.94], shadowTint: [1.03, 0.99, 0.95], highTint: [1.02, 1.00, 0.95],
        dmax: 0.48, contrastOffset: -0.02, satMult: 0.98, texture: 0.018
    },
    {
        id: "fuji-crystal", name: "Fuji Crystal Archive",
        desc: "RA-4 Lucida • Neri profondi, colori vivi", swatch: "#f0f5fc",
        baseTint: [0.95, 0.99, 1.05], shadowTint: [0.92, 0.98, 1.08], highTint: [0.97, 1.00, 1.04],
        dmax: 0.95, contrastOffset: 0.14, satMult: 1.16, texture: 0.004
    },
    {
        id: "ilford-fb-warm", name: "Ilford Multigrade FB",
        desc: "Baritata Cotone • Avorio caldo e ombre brune", swatch: "#efe2c6",
        baseTint: [1.04, 0.96, 0.84], shadowTint: [1.08, 0.95, 0.82], highTint: [1.05, 0.97, 0.86],
        dmax: 0.88, contrastOffset: 0.08, satMult: 0.90, texture: 0.032
    }
];

const PRINT_PRESETS = [
    { id: "lab-std", name: "Laboratorio Standard", sub: "Endura Satinata", paperId: "kodak-endura", time: 12.0, grade: 2.5, mag: 0, yel: 0, burn: 0.10, border: "none" },
    { id: "portrait-soft", name: "Baritata Cotone Calda", sub: "Ilford FB Avorio", paperId: "ilford-fb-warm", time: 11.5, grade: 2.0, mag: -2, yel: 6, burn: 0.18, border: "white" },
    { id: "gallery-punch", name: "Crystal Lucida Contrasto", sub: "Fuji DPII • Neri intensi", paperId: "fuji-crystal", time: 13.5, grade: 3.5, mag: 2, yel: -2, burn: 0.32, border: "white" },
    { id: "full-rebate", name: "Pieno Fotogramma 35mm", sub: "Perforazioni & bordo nero", paperId: "kodak-endura", time: 12.0, grade: 2.5, mag: 0, yel: 0, burn: 0.10, border: "rebate" }
];

let rawSavedFilms = JSON.parse(localStorage.getItem("analog_lab_films_v9"))
    || JSON.parse(localStorage.getItem("analog_lab_films_v7"))
    || JSON.parse(localStorage.getItem("analog_lab_films_v6"))
    || JSON.parse(JSON.stringify(DEFAULT_FILMS));

let films = rawSavedFilms.filter(f => f && f.id !== "polaroid-600" && f.mode !== "instant");
if (films.length === 0) films = JSON.parse(JSON.stringify(DEFAULT_FILMS));
function saveFilms() { localStorage.setItem("analog_lab_films_v9", JSON.stringify(films)); }

let qualityMode = localStorage.getItem("analog_lab_quality_v7")
    || localStorage.getItem("analog_lab_quality_v6")
    || "standard";

function setQualityMode(mode) {
    qualityMode = mode;
    localStorage.setItem("analog_lab_quality_v7", mode);
    document.querySelectorAll("#qualityRow .exp-pill, #vintageQualityRow .exp-pill, #printQualityRow .exp-pill").forEach(p => {
        p.classList.toggle("selected", p.dataset.quality === mode);
    });
    const camBadge = document.getElementById("camQualityBadge");
    if (camBadge) {
        camBadge.textContent = mode === "max" ? "MAX 4K" : "STD";
        camBadge.classList.toggle("max", mode === "max");
    }
}

function createDefaultFrameDefects(seed = Math.random()) {
    return {
        seed,
        lightLeak: { active: false, intensity: 0 },
        chemStain: { active: false, intensity: 0 },
        agedPaper: { active: false, intensity: 0 },
        scratches: { active: false, intensity: 0 }
    };
}

function ensureFrameDefects(frame) {
    if (!frame.defects) frame.defects = createDefaultFrameDefects(frame.defectSeed || Math.random());
    if (typeof frame.defects.seed !== "number") frame.defects.seed = frame.defectSeed || Math.random();
    return frame.defects;
}

function hasAnyFrameDefect(frame) {
    const d = ensureFrameDefects(frame);
    return (d.lightLeak.active && d.lightLeak.intensity > 0)
        || (d.chemStain.active && d.chemStain.intensity > 0)
        || (d.agedPaper.active && d.agedPaper.intensity > 0)
        || (d.scratches.active && d.scratches.intensity > 0);
}

/* =========================================================
   HELPER BLOB & GENERATORE .ZIP ZERO-DIPENDENZE
   ========================================================= */
function canvasToBlob(canvas, type = "image/jpeg", quality = 0.92) {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), type, quality);
    });
}

function loadImageFromSource(srcOrBlob) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        let objectUrl = null;
        img.onload = () => {
            if (objectUrl) URL.revokeObjectURL(objectUrl);
            resolve(img);
        };
        img.onerror = (err) => {
            if (objectUrl) URL.revokeObjectURL(objectUrl);
            reject(err);
        };
        if (srcOrBlob instanceof Blob) {
            objectUrl = URL.createObjectURL(srcOrBlob);
            img.src = objectUrl;
        } else {
            img.src = srcOrBlob;
        }
    });
}

function blobToDataUrl(blob) {
    return new Promise((resolve) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result);
        r.readAsDataURL(blob);
    });
}

async function dataUrlToBlob(dataUrl) {
    return await (await fetch(dataUrl)).blob();
}

function downloadSingleBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2500);
}

const CRC32_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
        let c = i;
        for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        t[i] = c >>> 0;
    }
    return t;
})();

function crc32Bytes(u8) {
    let c = 0xffffffff;
    for (let i = 0; i < u8.length; i++) c = CRC32_TABLE[(c ^ u8[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
}

async function buildZipBlob(items) {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    for (const item of items) {
        const nameBytes = encoder.encode(item.name);
        const dataBytes = new Uint8Array(await item.blob.arrayBuffer());
        const crc = crc32Bytes(dataBytes);

        const lh = new ArrayBuffer(30 + nameBytes.length);
        const lv = new DataView(lh);
        lv.setUint32(0, 0x04034b50, true);
        lv.setUint16(4, 20, true);
        lv.setUint16(6, 0x0800, true);
        lv.setUint16(8, 0, true);
        lv.setUint16(10, 0, true);
        lv.setUint16(12, 0, true);
        lv.setUint32(14, crc, true);
        lv.setUint32(18, dataBytes.length, true);
        lv.setUint32(22, dataBytes.length, true);
        lv.setUint16(26, nameBytes.length, true);
        lv.setUint16(28, 0, true);
        new Uint8Array(lh, 30).set(nameBytes);

        localParts.push(new Uint8Array(lh), dataBytes);

        const ch = new ArrayBuffer(46 + nameBytes.length);
        const cv = new DataView(ch);
        cv.setUint32(0, 0x02014b50, true);
        cv.setUint16(4, 20, true);
        cv.setUint16(6, 20, true);
        cv.setUint16(8, 0x0800, true);
        cv.setUint16(10, 0, true);
        cv.setUint16(12, 0, true);
        cv.setUint16(14, 0, true);
        cv.setUint32(16, crc, true);
        cv.setUint32(20, dataBytes.length, true);
        cv.setUint32(24, dataBytes.length, true);
        cv.setUint16(28, nameBytes.length, true);
        cv.setUint16(30, 0, true);
        cv.setUint16(32, 0, true);
        cv.setUint16(34, 0, true);
        cv.setUint16(36, 0, true);
        cv.setUint32(38, 0, true);
        cv.setUint32(42, offset, true);
        new Uint8Array(ch, 46).set(nameBytes);

        centralParts.push(new Uint8Array(ch));
        offset += 30 + nameBytes.length + dataBytes.length;
    }

    const centralSize = centralParts.reduce((s, p) => s + p.length, 0);
    const eocd = new ArrayBuffer(22);
    const ev = new DataView(eocd);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, items.length, true);
    ev.setUint16(10, items.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);

    return new Blob([...localParts, ...centralParts, new Uint8Array(eocd)], { type: "application/zip" });
}

async function downloadImagesBatch(items, zipName) {
    if (!items.length) return;
    if (items.length === 1) {
        downloadSingleBlob(items[0].blob, items[0].name);
        return;
    }
    const zipBlob = await buildZipBlob(items);
    downloadSingleBlob(zipBlob, zipName);
}

/* =========================================================
   2. INDEXED-DB PERSISTENCE, BACKUP & PULIZIA MEMORIA
   ========================================================= */
const DB_NAME = "AnalogCameraDB_v7";
const DB_VERSION = 5;
let db = null;

function initDB() {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("IndexedDB timeout")), 1500);
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
            const d = e.target.result;
            if (!d.objectStoreNames.contains("rolls")) d.createObjectStore("rolls", { keyPath: "id" });
            if (!d.objectStoreNames.contains("vintageRolls")) d.createObjectStore("vintageRolls", { keyPath: "id" });
            if (!d.objectStoreNames.contains("polaroidShots")) d.createObjectStore("polaroidShots", { keyPath: "id" });
        };
        req.onsuccess = (e) => { clearTimeout(timer); db = e.target.result; resolve(db); };
        req.onerror = (e) => { clearTimeout(timer); reject(e); };
        req.onblocked = () => { clearTimeout(timer); reject(new Error("IndexedDB blocked")); };
    });
}

function saveRollToDB(roll) {
    if (!db || !db.objectStoreNames.contains("rolls")) return Promise.resolve();
    return new Promise((resolve) => {
        const tx = db.transaction("rolls", "readwrite");
        tx.objectStore("rolls").put(roll);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
    });
}

function getAllRollsFromDB() {
    if (!db || !db.objectStoreNames.contains("rolls")) return Promise.resolve([]);
    return new Promise((resolve) => {
        const tx = db.transaction("rolls", "readonly");
        const req = tx.objectStore("rolls").getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
    });
}

function deleteRollFromDB(id) {
    if (!db || !db.objectStoreNames.contains("rolls")) return Promise.resolve();
    return new Promise((resolve) => {
        const tx = db.transaction("rolls", "readwrite");
        tx.objectStore("rolls").delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
    });
}

function measureItemBytes(val) {
    if (!val) return 0;
    if (val instanceof Blob) return val.size;
    if (typeof val === "string") return val.length;
    return 0;
}

async function refreshStorageSummary() {
    const rolls = await getAllRollsFromDB();
    const vRolls = typeof getAllVintageRollsFromDB === "function" ? await getAllVintageRollsFromDB() : [];
    const pShots = typeof getAllPolaroidShotsFromDB === "function" ? await getAllPolaroidShotsFromDB() : [];
    let bytes = 0;
    let totalFrames = 0;
    let starredCount = 0;
    let savedCount = 0;

    const inspectFrames = (frames = []) => {
        frames.forEach(f => {
            totalFrames++;
            if (f.starred) starredCount++;
            if (f.savedLocally) savedCount++;
            bytes += measureItemBytes(f.rawBlob) + measureItemBytes(f.rawDataUrl)
                + measureItemBytes(f.thumbBlob) + measureItemBytes(f.thumbDataUrl)
                + measureItemBytes(f.developedBlob) + measureItemBytes(f.dataUrl);
        });
    };
    rolls.forEach(r => inspectFrames(r.frames));
    vRolls.forEach(r => inspectFrames(r.frames));

    pShots.forEach(s => {
        totalFrames++;
        if (s.starred) starredCount++;
        if (s.savedLocally) savedCount++;
        bytes += measureItemBytes(s.innerBlob) + measureItemBytes(s.sheetBlob) + measureItemBytes(s.thumbBlob);
    });

    const mb = (bytes / (1024 * 1024)).toFixed(1);
    const badge = document.getElementById("storageUsageBadge");
    const breakdown = document.getElementById("storageBreakdown");
    if (badge) badge.textContent = `${mb} MB`;
    if (breakdown) {
        breakdown.textContent = `${rolls.length} rullini pellicola • ${pShots.length} Polaroid • ${vRolls.length} Usa & Getta • ${totalFrames} scatti totali (★ ${starredCount}, ✓ ${savedCount})`;
    }
}

document.getElementById("cleanDiscardsBtn").addEventListener("click", async () => {
    if (!confirm("Eliminare dal browser tutte le foto NON scelte (☆) e NON ancora salvate in locale? Resteranno solo quelle con ★ o ✓ Salvata.")) return;
    const rolls = await getAllRollsFromDB();
    for (const r of rolls) {
        if (r.status !== "developed") continue;
        r.frames = r.frames.filter(f => f.starred || f.savedLocally);
        if (r.frames.length === 0) await deleteRollFromDB(r.id);
        else await saveRollToDB(r);
    }
    const vRolls = await getAllVintageRollsFromDB();
    for (const vr of vRolls) {
        if (vr.status !== "developed") continue;
        vr.frames = vr.frames.filter(f => f.starred || f.savedLocally);
        if (vr.frames.length === 0) await deleteVintageRollFromDB(vr.id);
        else await saveVintageRollToDB(vr);
    }
    const pShots = await getAllPolaroidShotsFromDB();
    for (const ps of pShots) {
        if (!ps.starred && !ps.savedLocally) await deletePolaroidShotFromDB(ps.id);
    }
    await refreshArchiveList();
    await refreshVintageArchiveList();
    await refreshPolaroidGalleryBadge();
    await refreshHomeStatus();
    await refreshStorageSummary();
    alert("Pulizia scarti completata! Restano solo le foto scelte (★) e salvate (✓).");
});

document.getElementById("cleanSavedBtn").addEventListener("click", async () => {
    if (!confirm("Rimuovere dal browser i file temporanei delle foto già salvate in locale (✓)? I file .jpg già scaricati sul dispositivo resteranno intatti.")) return;
    const rolls = await getAllRollsFromDB();
    for (const r of rolls) {
        if (r.status !== "developed") continue;
        r.frames = r.frames.filter(f => !f.savedLocally);
        if (r.frames.length === 0) await deleteRollFromDB(r.id);
        else await saveRollToDB(r);
    }
    const vRolls = await getAllVintageRollsFromDB();
    for (const vr of vRolls) {
        if (vr.status !== "developed") continue;
        vr.frames = vr.frames.filter(f => !f.savedLocally);
        if (vr.frames.length === 0) await deleteVintageRollFromDB(vr.id);
        else await saveVintageRollToDB(vr);
    }
    const pShots = await getAllPolaroidShotsFromDB();
    for (const ps of pShots) {
        if (ps.savedLocally) await deletePolaroidShotFromDB(ps.id);
    }
    await refreshArchiveList();
    await refreshVintageArchiveList();
    await refreshPolaroidGalleryBadge();
    await refreshHomeStatus();
    await refreshStorageSummary();
    alert("Spazio liberato! I file .jpg salvati sul dispositivo restano al sicuro.");
});

document.getElementById("clearAllStorageBtn").addEventListener("click", async () => {
    if (!confirm("Svuotare TUTTI i rullini, le Polaroid e le foto temporanee dal browser? I preset pellicole e i .jpg già esportati NON verranno toccati.")) return;
    const rolls = await getAllRollsFromDB();
    for (const r of rolls) await deleteRollFromDB(r.id);
    const vRolls = await getAllVintageRollsFromDB();
    for (const vr of vRolls) await deleteVintageRollFromDB(vr.id);
    const pShots = await getAllPolaroidShotsFromDB();
    for (const ps of pShots) await deletePolaroidShotFromDB(ps.id);

    currentRoll = null;
    currentVintageRoll = null;
    await refreshArchiveList();
    await refreshVintageArchiveList();
    await refreshPolaroidGalleryBadge();
    await refreshHomeStatus();
    await refreshStorageSummary();
    alert("Memoria temporanea svuotata completamente!");
});

document.getElementById("exportBackupBtn").addEventListener("click", async () => {
    const rolls = await getAllRollsFromDB();
    const vRolls = await getAllVintageRollsFromDB();
    const pShots = await getAllPolaroidShotsFromDB();
    if (rolls.length === 0 && vRolls.length === 0 && pShots.length === 0 && films.length === DEFAULT_FILMS.length) {
        alert("Nessun dato salvato in archivio da esportare.");
        return;
    }

    const serializeRoll = async (roll) => {
        const clone = { ...roll, frames: [] };
        for (const f of roll.frames) {
            const fc = { ...f };
            if (fc.rawBlob instanceof Blob) { fc.rawDataUrl = await blobToDataUrl(fc.rawBlob); delete fc.rawBlob; }
            if (fc.thumbBlob instanceof Blob) { fc.thumbDataUrl = await blobToDataUrl(fc.thumbBlob); delete fc.thumbBlob; }
            if (fc.developedBlob instanceof Blob) { fc.dataUrl = await blobToDataUrl(fc.developedBlob); delete fc.developedBlob; }
            clone.frames.push(fc);
        }
        return clone;
    };

    const serRolls = [];
    for (const r of rolls) serRolls.push(await serializeRoll(r));
    const serVRolls = [];
    for (const vr of vRolls) serVRolls.push(await serializeRoll(vr));
    const serPShots = [];
    for (const ps of pShots) {
        const pc = { ...ps };
        if (pc.innerBlob instanceof Blob) { pc.innerDataUrl = await blobToDataUrl(pc.innerBlob); delete pc.innerBlob; }
        if (pc.sheetBlob instanceof Blob) { pc.sheetDataUrl = await blobToDataUrl(pc.sheetBlob); delete pc.sheetBlob; }
        if (pc.thumbBlob instanceof Blob) { pc.thumbDataUrl = await blobToDataUrl(pc.thumbBlob); delete pc.thumbBlob; }
        serPShots.push(pc);
    }

    const backupPayload = {
        app: "AnalogPhotoLab", version: "0.9", exportedAt: new Date().toISOString(),
        films, rolls: serRolls, vintageRolls: serVRolls, polaroidShots: serPShots
    };
    const blob = new Blob([JSON.stringify(backupPayload)], { type: "application/json" });
    downloadSingleBlob(blob, `analog-photolab-backup-${new Date().toISOString().slice(0, 10)}.json`);
});

document.getElementById("importBackupInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
        try {
            const parsed = JSON.parse(ev.target.result);
            if (!parsed || (!Array.isArray(parsed.rolls) && !Array.isArray(parsed.vintageRolls) && !Array.isArray(parsed.polaroidShots))) {
                throw new Error("Formato backup non riconosciuto.");
            }
            const hydrateRoll = async (r) => {
                for (const f of r.frames) {
                    if (f.rawDataUrl && !f.rawBlob) { f.rawBlob = await dataUrlToBlob(f.rawDataUrl); delete f.rawDataUrl; }
                    if (f.thumbDataUrl && !f.thumbBlob) { f.thumbBlob = await dataUrlToBlob(f.thumbDataUrl); delete f.thumbDataUrl; }
                    if (f.dataUrl && !f.developedBlob) { f.developedBlob = await dataUrlToBlob(f.dataUrl); delete f.dataUrl; }
                }
                return r;
            };

            let count = 0;
            if (Array.isArray(parsed.rolls)) {
                for (const r of parsed.rolls) {
                    if (r && r.id && r.film && Array.isArray(r.frames)) {
                        await saveRollToDB(await hydrateRoll(r));
                        count++;
                    }
                }
            }
            if (Array.isArray(parsed.vintageRolls)) {
                for (const vr of parsed.vintageRolls) {
                    if (vr && vr.id && Array.isArray(vr.frames)) {
                        await saveVintageRollToDB(await hydrateRoll(vr));
                        count++;
                    }
                }
            }
            if (Array.isArray(parsed.polaroidShots)) {
                for (const ps of parsed.polaroidShots) {
                    if (ps && ps.id) {
                        if (ps.innerDataUrl && !ps.innerBlob) { ps.innerBlob = await dataUrlToBlob(ps.innerDataUrl); delete ps.innerDataUrl; }
                        if (ps.sheetDataUrl && !ps.sheetBlob) { ps.sheetBlob = await dataUrlToBlob(ps.sheetDataUrl); delete ps.sheetDataUrl; }
                        if (ps.thumbDataUrl && !ps.thumbBlob) { ps.thumbBlob = await dataUrlToBlob(ps.thumbDataUrl); delete ps.thumbDataUrl; }
                        await savePolaroidShotToDB(ps);
                        count++;
                    }
                }
            }
            if (Array.isArray(parsed.films) && parsed.films.length > 0) {
                const existingIds = new Set(films.map(f => f.id));
                parsed.films.forEach(f => {
                    if (f && f.id && f.id !== "polaroid-600" && f.mode !== "instant" && !existingIds.has(f.id)) films.push(f);
                });
                saveFilms();
                renderLoadView();
            }
            await refreshArchiveList();
            await refreshVintageArchiveList();
            await refreshPolaroidGalleryBadge();
            await refreshHomeStatus();
            await refreshStorageSummary();
            alert(`Ripristino completato: ${count} elementi importati!`);
        } catch (err) {
            alert("Errore durante il ripristino del backup: file JSON non valido.");
        }
    };
    reader.readAsText(file);
    e.target.value = "";
});

/* =========================================================
   3. SUONI MECCANICI REALISTICI
   ========================================================= */
let sharedAudioCtx = null;
function getAudioCtx() {
    if (!sharedAudioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) sharedAudioCtx = new Ctx();
    }
    if (sharedAudioCtx && sharedAudioCtx.state === "suspended") sharedAudioCtx.resume().catch(() => { });
    return sharedAudioCtx;
}

function playAdvanceLeverSound() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;

        [0.00, 0.045, 0.09, 0.135].forEach((off, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(1900 + idx * 180, now + off);
            osc.frequency.exponentialRampToValueAtTime(520, now + off + 0.022);
            gain.gain.setValueAtTime(0.28, now + off);
            gain.gain.exponentialRampToValueAtTime(0.001, now + off + 0.025);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(now + off); osc.stop(now + off + 0.028);
        });

        const clangTime = now + 0.18;
        const oscClang = ctx.createOscillator();
        const gainClang = ctx.createGain();
        oscClang.type = "sine";
        oscClang.frequency.setValueAtTime(840, clangTime);
        oscClang.frequency.exponentialRampToValueAtTime(290, clangTime + 0.075);
        gainClang.gain.setValueAtTime(0.45, clangTime);
        gainClang.gain.exponentialRampToValueAtTime(0.001, clangTime + 0.08);
        oscClang.connect(gainClang); gainClang.connect(ctx.destination);
        oscClang.start(clangTime); oscClang.stop(clangTime + 0.085);

        const bufLen = Math.floor(ctx.sampleRate * 0.035);
        const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
        const ch = buf.getChannelData(0);
        for (let i = 0; i < bufLen; i++) ch[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
        const noise = ctx.createBufferSource();
        noise.buffer = buf;
        const bp = ctx.createBiquadFilter();
        bp.type = "bandpass"; bp.frequency.value = 2300;
        const nGain = ctx.createGain(); nGain.gain.value = 0.42;
        noise.connect(bp); bp.connect(nGain); nGain.connect(ctx.destination);
        noise.start(clangTime);
    } catch (e) { }
}

function playShutterSound(shutterSeconds = 0.008, withFlash = false) {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const delay = Math.min(1.0, Math.max(0.038, shutterSeconds));

        [0, delay].forEach((offset, idx) => {
            const bufferSize = Math.floor(ctx.sampleRate * 0.04);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.value = idx === 0 ? 1350 : 1950;
            filter.Q.value = 1.6;

            const gain = ctx.createGain();
            gain.gain.value = idx === 0 ? 0.65 : 0.48;
            noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
            noise.start(now + offset);

            const ping = ctx.createOscillator();
            const pGain = ctx.createGain();
            ping.type = "triangle";
            ping.frequency.setValueAtTime(idx === 0 ? 620 : 980, now + offset);
            ping.frequency.exponentialRampToValueAtTime(idx === 0 ? 180 : 340, now + offset + 0.045);
            pGain.gain.setValueAtTime(idx === 0 ? 0.42 : 0.28, now + offset);
            pGain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.05);
            ping.connect(pGain); pGain.connect(ctx.destination);
            ping.start(now + offset); ping.stop(now + offset + 0.055);
        });

        if (withFlash) {
            const fOsc = ctx.createOscillator();
            const fGain = ctx.createGain();
            fOsc.type = "sine";
            fOsc.frequency.setValueAtTime(3200, now);
            fOsc.frequency.exponentialRampToValueAtTime(750, now + 0.03);
            fGain.gain.setValueAtTime(0.22, now);
            fGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
            fOsc.connect(fGain); fGain.connect(ctx.destination);
            fOsc.start(now); fOsc.stop(now + 0.04);
        }
    } catch (e) { }
}

function playLockedShutterTick() {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.02);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(now); osc.stop(now + 0.028);
    } catch (e) { }
}

function playFilmRewindSound(durationSec = 4.0) {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const slideEnd = durationSec - 0.22;

        const noiseLen = Math.floor(ctx.sampleRate * slideEnd);
        const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
        const ch = noiseBuf.getChannelData(0);
        for (let i = 0; i < noiseLen; i++) {
            const t = i / ctx.sampleRate;
            const crankWave = 0.65 + 0.35 * Math.sin(t * Math.PI * 5.2);
            ch[i] = (Math.random() * 2 - 1) * crankWave;
        }
        const slideNoise = ctx.createBufferSource();
        slideNoise.buffer = noiseBuf;
        const bp = ctx.createBiquadFilter();
        bp.type = "bandpass";
        bp.frequency.setValueAtTime(1600, now);
        bp.frequency.linearRampToValueAtTime(2200, now + slideEnd);
        bp.Q.value = 1.1;

        const slideGain = ctx.createGain();
        slideGain.gain.setValueAtTime(0.01, now);
        slideGain.gain.linearRampToValueAtTime(0.16, now + 0.15);
        slideGain.gain.setValueAtTime(0.16, now + slideEnd - 0.25);
        slideGain.gain.exponentialRampToValueAtTime(0.001, now + slideEnd);
        slideNoise.connect(bp); bp.connect(slideGain); slideGain.connect(ctx.destination);
        slideNoise.start(now);

        let tCursor = 0.04;
        let stepIdx = 0;
        while (tCursor < slideEnd - 0.08) {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = "triangle";
            const crankAccent = (stepIdx % 5 === 0) ? 1.35 : 1.0;
            const baseFreq = 1150 + Math.sin(tCursor * 6.0) * 240 + (stepIdx % 3) * 95;
            osc.frequency.setValueAtTime(baseFreq, now + tCursor);
            osc.frequency.exponentialRampToValueAtTime(380, now + tCursor + 0.018);
            g.gain.setValueAtTime(0.14 * crankAccent, now + tCursor);
            g.gain.exponentialRampToValueAtTime(0.001, now + tCursor + 0.02);
            osc.connect(g); g.connect(ctx.destination);
            osc.start(now + tCursor); osc.stop(now + tCursor + 0.024);

            tCursor += 0.042 + 0.016 * Math.cos(tCursor * Math.PI * 3.8);
            stepIdx++;
        }

        const snapTime = now + slideEnd + 0.04;
        const snapOsc = ctx.createOscillator();
        const snapGain = ctx.createGain();
        snapOsc.type = "triangle";
        snapOsc.frequency.setValueAtTime(780, snapTime);
        snapOsc.frequency.exponentialRampToValueAtTime(170, snapTime + 0.09);
        snapGain.gain.setValueAtTime(0.45, snapTime);
        snapGain.gain.exponentialRampToValueAtTime(0.001, snapTime + 0.11);
        snapOsc.connect(snapGain); snapGain.connect(ctx.destination);
        snapOsc.start(snapTime); snapOsc.stop(snapTime + 0.12);
    } catch (e) { }
}

/* =========================================================
   4. MOTORE WEBGL
   ========================================================= */
const glCanvas = document.getElementById("printCanvas");
const gl = glCanvas.getContext("webgl", { preserveDrawingBuffer: true })
    || glCanvas.getContext("experimental-webgl");
const MAX_GL_TEX = gl ? (gl.getParameter(gl.MAX_TEXTURE_SIZE) || 4096) : 2048;

let program = null;
let glTex = null;

if (gl) {
    function compileShader(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
    }
    program = gl.createProgram();
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, document.getElementById("vs").text));
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, document.getElementById("fs").text));
    gl.linkProgram(program);
    gl.useProgram(program);

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const texBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), gl.STATIC_DRAW);
    const texLoc = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(texLoc);
    gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 0, 0);

    glTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, glTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
}

function renderFrameWithWebGL(imgElement, film, frameData, pushStops = 0, printOpts = null, showOrig = false, customMaxDim = null) {
    const srcW = imgElement.naturalWidth || imgElement.width;
    const srcH = imgElement.naturalHeight || imgElement.height;
    if (!gl || !program) {
        glCanvas.width = srcW;
        glCanvas.height = srcH;
        return;
    }

    const targetMaxDim = customMaxDim || (qualityMode === "max" ? Math.min(4096, MAX_GL_TEX) : 1800);
    const zoom = printOpts ? (printOpts.zoom || 1.0) : 1.0;
    const rotDeg = printOpts ? (printOpts.rotation || 0) : 0;
    const rotRad = (rotDeg * Math.PI) / 180.0;
    const panX = printOpts ? (printOpts.panX || 0) : 0;
    const panY = printOpts ? (printOpts.panY || 0) : 0;

    const isQuarterTurn = Math.abs(Math.sin(rotRad)) > Math.abs(Math.cos(rotRad));
    const rotSrcW = isQuarterTurn ? srcH : srcW;
    const rotSrcH = isQuarterTurn ? srcW : srcH;

    let outW = rotSrcW;
    let outH = rotSrcH;
    if (outW > targetMaxDim || outH > targetMaxDim) {
        const r = Math.min(targetMaxDim / outW, targetMaxDim / outH);
        outW = Math.round(outW * r);
        outH = Math.round(outH * r);
    }

    const dimScale = outW / rotSrcW;
    const effSrcW = srcW * dimScale;
    const effSrcH = srcH * dimScale;

    glCanvas.width = outW;
    glCanvas.height = outH;
    gl.viewport(0, 0, outW, outH);
    gl.bindTexture(gl.TEXTURE_2D, glTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgElement);

    const isBW = film.mode === "bw";
    const isSlide = film.mode === "slide";

    const ap = frameData.aperture || 4.0;
    const lensVignette = ap <= 2.0 ? 0.34 : (ap <= 2.8 ? 0.18 : 0.05);
    const lensSoftness = ap <= 1.8 ? 0.85 : (ap <= 2.8 ? 0.35 : 0.0);

    const paper = printOpts ? PAPER_STOCKS.find(p => p.id === printOpts.paperId) || PAPER_STOCKS[0] : PAPER_STOCKS[0];
    const timerEV = printOpts ? Math.log2(printOpts.time / 12.0) : 0.0;
    const gradeDelta = printOpts ? (printOpts.grade - 2.5) * 0.14 : 0.0;
    const magShift = printOpts ? printOpts.mag * 0.008 : 0.0;
    const yelShift = printOpts ? printOpts.yel * 0.008 : 0.0;
    const edgeBurn = printOpts ? printOpts.burn : 0.08;
    const grainScale = printOpts ? printOpts.grainScale : 1.0;

    const frameDef = ensureFrameDefects(frameData);
    const activeDef = (printOpts && printOpts.defects) ? printOpts.defects : frameDef;

    const seed = typeof activeDef.seed === "number" ? activeDef.seed : 0.42;
    const lightLeakAmount = activeDef.lightLeak.active ? activeDef.lightLeak.intensity : 0.0;
    const chemStainAmount = activeDef.chemStain.active ? activeDef.chemStain.intensity : 0.0;
    const agedPaperAmount = activeDef.agedPaper.active ? activeDef.agedPaper.intensity : 0.0;
    const scratchesAmount = activeDef.scratches.active ? activeDef.scratches.intensity : 0.0;

    const effectiveExp = (frameData.exposureEV || 0) + (pushStops * 0.55) + timerEV;
    const baseContrast = isSlide ? film.contrast + 0.18 : film.contrast;
    const effectiveContrast = Math.min(0.95, Math.max(0.05, baseContrast + pushStops * 0.11 + gradeDelta + paper.contrastOffset));
    const effectiveToe = Math.max(0.0, (isSlide ? film.toe * 0.4 : film.toe) - pushStops * 0.003);
    const effectiveGrain = film.grain * grainScale * (pushStops > 0 ? 1 + pushStops * 0.35 : 1 + pushStops * 0.15);
    const effectiveGrainSize = film.grainSize * (pushStops > 0 ? 1 + pushStops * 0.12 : 1.0);

    gl.uniform2f(gl.getUniformLocation(program, "u_srcResolution"), effSrcW, effSrcH);
    gl.uniform2f(gl.getUniformLocation(program, "u_outResolution"), outW, outH);
    gl.uniform1f(gl.getUniformLocation(program, "u_zoom"), zoom);
    gl.uniform1f(gl.getUniformLocation(program, "u_rotationRad"), rotRad);
    gl.uniform2f(gl.getUniformLocation(program, "u_pan"), panX, panY);
    gl.uniform1f(gl.getUniformLocation(program, "u_coverScale"), 1.0);
    gl.uniform1i(gl.getUniformLocation(program, "u_showOriginal"), showOrig ? 1 : 0);

    gl.uniform1f(gl.getUniformLocation(program, "u_exposure"), effectiveExp);
    gl.uniform1f(gl.getUniformLocation(program, "u_toe"), effectiveToe);
    gl.uniform1f(gl.getUniformLocation(program, "u_shoulder"), isSlide ? film.shoulder * 0.5 : film.shoulder);
    gl.uniform1f(gl.getUniformLocation(program, "u_contrast"), effectiveContrast);

    const rGain = 1.0 + film.temp * 0.75 + film.tint * 0.35 + magShift * 0.4 + yelShift * 0.5;
    const gGain = 1.0 - film.tint * 0.55 - magShift * 0.65 + yelShift * 0.25;
    const bGain = 1.0 - film.temp * 0.75 + film.tint * 0.35 + magShift * 0.35 - yelShift * 0.75;
    gl.uniform3f(gl.getUniformLocation(program, "u_wbGain"), rGain, gGain, bGain);

    gl.uniform1i(gl.getUniformLocation(program, "u_isBW"), isBW ? 1 : 0);
    gl.uniformMatrix3fv(gl.getUniformLocation(program, "u_colorMatrix"), false, new Float32Array(film.matrix || [1, 0, 0, 0, 1, 0, 0, 0, 1]));
    gl.uniform1f(gl.getUniformLocation(program, "u_saturation"), (isSlide ? film.saturation * 1.12 : film.saturation) * paper.satMult);

    gl.uniform3f(gl.getUniformLocation(program, "u_shadowTint"), 1.0 + film.shadowTemp * 0.45, 1.0 + Math.abs(film.shadowTemp) * 0.08, 1.0 - film.shadowTemp * 0.45);
    gl.uniform3f(gl.getUniformLocation(program, "u_highlightTint"), 1.0 + film.highTemp * 0.45, 1.0 + film.highTemp * 0.12, 1.0 - film.highTemp * 0.45);
    gl.uniform3f(gl.getUniformLocation(program, "u_bwWeights"), 0.34, 0.56, 0.10);

    gl.uniform1f(gl.getUniformLocation(program, "u_halation"), film.halation);
    gl.uniform1f(gl.getUniformLocation(program, "u_halThreshold"), film.halThreshold);
    gl.uniform3f(gl.getUniformLocation(program, "u_halationColor"), 0.96, 0.18, 0.04);
    gl.uniform1f(gl.getUniformLocation(program, "u_bloom"), film.bloom);

    gl.uniform1f(gl.getUniformLocation(program, "u_lensVignette"), lensVignette);
    gl.uniform1f(gl.getUniformLocation(program, "u_lensSoftness"), lensSoftness);

    gl.uniform1f(gl.getUniformLocation(program, "u_paperDmax"), paper.dmax);
    gl.uniform3fv(gl.getUniformLocation(program, "u_paperBaseTint"), new Float32Array(paper.baseTint));
    gl.uniform3fv(gl.getUniformLocation(program, "u_paperShadowTint"), new Float32Array(paper.shadowTint || [1, 1, 1]));
    gl.uniform3fv(gl.getUniformLocation(program, "u_paperHighTint"), new Float32Array(paper.highTint || [1, 1, 1]));
    gl.uniform1f(gl.getUniformLocation(program, "u_paperTexture"), paper.texture || 0.01);
    gl.uniform1f(gl.getUniformLocation(program, "u_edgeBurn"), edgeBurn);

    gl.uniform1f(gl.getUniformLocation(program, "u_defectSeed"), seed);
    gl.uniform1f(gl.getUniformLocation(program, "u_lightLeakAmount"), lightLeakAmount);
    gl.uniform1f(gl.getUniformLocation(program, "u_chemStainAmount"), chemStainAmount);
    gl.uniform1f(gl.getUniformLocation(program, "u_agedPaperAmount"), agedPaperAmount);
    gl.uniform1f(gl.getUniformLocation(program, "u_scratchesAmount"), scratchesAmount);

    gl.uniform1f(gl.getUniformLocation(program, "u_grain"), effectiveGrain);
    gl.uniform1f(gl.getUniformLocation(program, "u_grainSize"), effectiveGrainSize);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

/* =========================================================
   5. TRIANGOLO ESPOSIZIONE, MODALITÀ M (2 COLONNE) + LANCETTA
   ========================================================= */
const APERTURES = [1.4, 2.0, 2.8, 4.0, 5.6, 8.0, 11, 16];
const SHUTTERS = [
    { label: "1/1000", sec: 1 / 1000 },
    { label: "1/500", sec: 1 / 500 },
    { label: "1/250", sec: 1 / 250 },
    { label: "1/125", sec: 1 / 125 },
    { label: "1/60", sec: 1 / 60 },
    { label: "1/30", sec: 1 / 30 },
    { label: "1/15", sec: 1 / 15 },
    { label: "1/8", sec: 1 / 8 },
    { label: "1/4", sec: 1 / 4 },
    { label: "1/2", sec: 1 / 2 },
    { label: '1"', sec: 1.0 }
];

let camMode = "AUTO";
let selectedApertureIdx = 3;
let selectedShutterIdx = 3;
let camCompEV = 0.0;
let measuredSceneEV100 = 10.5;
let meterInterval = null;

let isShutterArmed = false;
let flashActive = false;
let isCapturing = false;
let isRewinding = false;
let hardwareFlashSupport = { hasTorch: false, hasPhotoFlash: false };

let thirdsVisible = localStorage.getItem("analog_lab_thirds_v7") === "1";
function syncThirdsUI() {
    const vfGrid = document.getElementById("vfThirdsGrid");
    const vfBtn = document.getElementById("vfThirdsToggleBtn");
    if (vfGrid) vfGrid.classList.toggle("visible", thirdsVisible);
    if (vfBtn) vfBtn.classList.toggle("active", thirdsVisible);
}
document.getElementById("vfThirdsToggleBtn").addEventListener("click", () => {
    thirdsVisible = !thirdsVisible;
    localStorage.setItem("analog_lab_thirds_v7", thirdsVisible ? "1" : "0");
    syncThirdsUI();
});

function detectFlashCapabilities() {
    hardwareFlashSupport = { hasTorch: false, hasPhotoFlash: false };
    if (!mediaStream) return;
    const track = mediaStream.getVideoTracks()[0];
    if (!track) return;
    try {
        const caps = track.getCapabilities ? track.getCapabilities() : {};
        if (caps && caps.torch) hardwareFlashSupport.hasTorch = true;
    } catch (e) { }
    if (typeof ImageCapture !== "undefined") {
        try {
            const ic = new ImageCapture(track);
            ic.getPhotoCapabilities().then(pc => {
                if (pc && Array.isArray(pc.fillLightMode) && pc.fillLightMode.includes("flash")) {
                    hardwareFlashSupport.hasPhotoFlash = true;
                    recalculateExposureTriangle();
                }
            }).catch(() => { });
        } catch (e) { }
    }
}

function setShutterArmedState(armed) {
    isShutterArmed = armed;
    const leverBtn = document.getElementById("advanceLeverBtn");
    const shutterBtn = document.getElementById("shutterBtn");
    const cockDot = document.getElementById("waCockDot");
    const cockBadge = document.getElementById("vfCockBadge");
    const shutterLbl = document.getElementById("shutterMechLabel");
    const leverTxt = document.getElementById("leverStatusTxt");

    const rollFull = currentRoll && currentRoll.frames.length >= currentRoll.capacity;
    if (rollFull) {
        leverBtn.classList.remove("armed", "needs-cock");
        shutterBtn.classList.add("locked");
        cockDot.classList.remove("armed");
        cockBadge.classList.remove("armed");
        cockBadge.textContent = "RULLINO FINITO • RIAVVOLGI";
        shutterLbl.textContent = "FINE";
        leverTxt.textContent = "FINE";
        return;
    }

    if (armed) {
        leverBtn.classList.remove("needs-cock");
        leverBtn.classList.add("armed");
        shutterBtn.classList.remove("locked");
        cockDot.classList.add("armed");
        cockBadge.classList.add("armed");
        cockBadge.textContent = "OTTURATORE ARMATO";
        shutterLbl.textContent = "SCATTA";
        leverTxt.textContent = "CARICO";
    } else {
        leverBtn.classList.remove("armed");
        leverBtn.classList.add("needs-cock");
        shutterBtn.classList.add("locked");
        cockDot.classList.remove("armed");
        cockBadge.classList.remove("armed");
        cockBadge.textContent = "TIRA LEVA PER CARICARE";
        shutterLbl.textContent = "BLOCCATO";
        leverTxt.textContent = "CARICA";
    }
}

document.getElementById("advanceLeverBtn").addEventListener("click", () => {
    if (isRewinding || (currentRoll && currentRoll.frames.length >= currentRoll.capacity)) {
        playLockedShutterTick();
        return;
    }
    if (isShutterArmed) {
        playLockedShutterTick();
        return;
    }
    const leverBtn = document.getElementById("advanceLeverBtn");
    leverBtn.classList.add("cocking");
    playAdvanceLeverSound();
    setTimeout(() => {
        leverBtn.classList.remove("cocking");
        setShutterArmedState(true);
    }, 240);
});

document.getElementById("flashToggleBtn").addEventListener("click", () => {
    flashActive = !flashActive;
    const btn = document.getElementById("flashToggleBtn");
    btn.classList.toggle("active", flashActive);
    document.getElementById("flashBtnLabel").textContent = flashActive ? "FLASH: ON" : "FLASH: OFF";
    playLockedShutterTick();
    recalculateExposureTriangle();
});

const meterCanvas = document.createElement("canvas");
meterCanvas.width = 16;
meterCanvas.height = 16;
const meterCtx = meterCanvas.getContext("2d", { willReadFrequently: true });

function sampleLiveSceneEV() {
    const video = document.getElementById("camVideo");
    if (mediaStream && video.videoWidth > 0) {
        meterCtx.drawImage(video, 0, 0, 16, 16);
        const data = meterCtx.getImageData(0, 0, 16, 16).data;
        let sum = 0;
        for (let i = 0; i < data.length; i += 4) sum += (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
        const avgLuma = Math.max(0.02, sum / 256);
        measuredSceneEV100 = 7.5 + Math.log2(avgLuma / 0.18) * 1.9;
    } else {
        measuredSceneEV100 = 10.5;
    }
    recalculateExposureTriangle();
}

function recalculateExposureTriangle() {
    if (!currentRoll) return;
    const iso = currentRoll.film.iso || 400;
    const isoStops = Math.log2(iso / 100);
    const targetCamEV = measuredSceneEV100 + isoStops - camCompEV;

    let finalAp = APERTURES[selectedApertureIdx];
    let finalShutter = SHUTTERS[selectedShutterIdx];
    let actualCamEV = targetCamEV;

    if (camMode === "AUTO") {
        let bestAp = 4.0;
        if (targetCamEV < 9) bestAp = 2.0;
        else if (targetCamEV < 11) bestAp = 2.8;
        else if (targetCamEV < 13) bestAp = 5.6;
        else bestAp = 8.0;

        if (flashActive) {
            finalAp = 5.6;
            finalShutter = SHUTTERS[3];
            actualCamEV = targetCamEV;
        } else {
            const idealSec = (bestAp * bestAp) / Math.pow(2, targetCamEV);
            finalShutter = SHUTTERS.reduce((prev, curr) =>
                Math.abs(Math.log2(curr.sec) - Math.log2(idealSec)) < Math.abs(Math.log2(prev.sec) - Math.log2(idealSec)) ? curr : prev
            );
            finalAp = bestAp;
            actualCamEV = Math.log2((finalAp * finalAp) / finalShutter.sec);
        }
    } else if (camMode === "AV") {
        finalAp = APERTURES[selectedApertureIdx];
        if (flashActive) {
            finalShutter = SHUTTERS[3];
            actualCamEV = targetCamEV;
        } else {
            const idealSec = (finalAp * finalAp) / Math.pow(2, targetCamEV);
            finalShutter = SHUTTERS.reduce((prev, curr) =>
                Math.abs(Math.log2(curr.sec) - Math.log2(idealSec)) < Math.abs(Math.log2(prev.sec) - Math.log2(idealSec)) ? curr : prev
            );
            actualCamEV = Math.log2((finalAp * finalAp) / finalShutter.sec);
        }
    } else if (camMode === "TV") {
        finalShutter = SHUTTERS[selectedShutterIdx];
        const idealAp = Math.sqrt(finalShutter.sec * Math.pow(2, targetCamEV));
        finalAp = APERTURES.reduce((prev, curr) =>
            Math.abs(Math.log2(curr) - Math.log2(idealAp)) < Math.abs(Math.log2(prev) - Math.log2(idealAp)) ? curr : prev
        );
        actualCamEV = flashActive ? targetCamEV : Math.log2((finalAp * finalAp) / finalShutter.sec);
    } else if (camMode === "M") {
        finalAp = APERTURES[selectedApertureIdx];
        finalShutter = SHUTTERS[selectedShutterIdx];
        actualCamEV = Math.log2((finalAp * finalAp) / finalShutter.sec);
    }

    const exposureErrorEV = targetCamEV - actualCamEV;

    const needleBox = document.getElementById("vfNeedleMeter");
    if (needleBox) {
        needleBox.classList.toggle("visible", camMode === "M");
        if (camMode === "M") {
            const clampedEv = Math.max(-2.2, Math.min(2.2, exposureErrorEV));
            const angleDeg = (clampedEv / 2.2) * 44;
            document.getElementById("meterNeedleArm").setAttribute("transform", `rotate(${angleDeg.toFixed(1)} 70 52)`);
            const deltaEl = document.getElementById("needleEvDelta");
            deltaEl.textContent = (exposureErrorEV >= 0 ? "+" : "") + exposureErrorEV.toFixed(1) + " EV";
            deltaEl.style.color = Math.abs(exposureErrorEV) <= 0.4 ? "#7ce8a2" : "#ff8f8f";
        }
    }

    const hudAp = document.getElementById("hudAperture");
    const hudSh = document.getElementById("hudShutter");
    const hudSt = document.getElementById("hudStatus");

    hudAp.textContent = `f/${finalAp}`;
    hudSh.textContent = `${finalShutter.label}s`;
    hudAp.className = "vf-seg" + ((camMode === "AV" || camMode === "M") ? " locked" : "");
    hudSh.className = "vf-seg" + ((camMode === "TV" || camMode === "M") ? " locked" : "");

    if (flashActive) {
        const hasHw = hardwareFlashSupport.hasPhotoFlash || hardwareFlashSupport.hasTorch;
        if (facingMode === "user") hudSt.textContent = "FLASH SCHERMO ⚡";
        else if (hasHw) hudSt.textContent = "FLASH LED PRONTO ⚡";
        else hudSt.textContent = "FLASH SIM. (NO LED)";
        hudSt.className = "meter-status meter-warn";
    } else if (exposureErrorEV < -0.7) {
        hudSt.textContent = `SOTTO ${exposureErrorEV.toFixed(1)} EV`;
        hudSt.className = "meter-status meter-err";
    } else if (exposureErrorEV > 0.7) {
        hudSt.textContent = `SOVRA +${exposureErrorEV.toFixed(1)} EV`;
        hudSt.className = "meter-status meter-err";
    } else if (finalShutter.sec >= 1 / 30) {
        hudSt.textContent = "RISCHIO MOSSO";
        hudSt.className = "meter-status meter-warn";
    } else {
        hudSt.textContent = "● ESPOSIZIONE OK";
        hudSt.className = "meter-status meter-ok";
    }

    const vigOpacity = finalAp <= 2.0 ? 0.75 : (finalAp <= 4.0 ? 0.40 : 0.20);
    document.getElementById("vfOpticalVignette").style.opacity = vigOpacity;

    const visualEV = (camMode === "M" ? 0 : camCompEV) + Math.max(-2.0, Math.min(2.0, exposureErrorEV));
    document.getElementById("camVideo").style.filter = `brightness(${Math.pow(2, visualEV * 0.45).toFixed(2)})`;

    return { aperture: finalAp, shutter: finalShutter, exposureErrorEV };
}

function buildSteppedCameraSliders() {
    const apSlider = document.getElementById("apertureSteppedSlider");
    const shSlider = document.getElementById("shutterSteppedSlider");
    const apTicks = document.getElementById("apSteppedTicks");
    const shTicks = document.getElementById("shSteppedTicks");

    apSlider.value = selectedApertureIdx;
    document.getElementById("apDialValue").textContent = `f/${APERTURES[selectedApertureIdx]}`;
    apTicks.innerHTML = "";
    APERTURES.forEach((ap, idx) => {
        const sp = document.createElement("span");
        sp.textContent = (camMode === "M" && idx % 2 === 1) ? "•" : `${ap}`;
        sp.className = idx === selectedApertureIdx ? "active" : "";
        apTicks.appendChild(sp);
    });

    shSlider.value = selectedShutterIdx;
    document.getElementById("shDialValue").textContent = `${SHUTTERS[selectedShutterIdx].label}s`;
    shTicks.innerHTML = "";
    SHUTTERS.forEach((sh, idx) => {
        const sp = document.createElement("span");
        sp.textContent = (camMode === "M" ? idx % 3 === 0 : idx % 2 === 0) ? sh.label : "•";
        sp.className = idx === selectedShutterIdx ? "active" : "";
        shTicks.appendChild(sp);
    });
}

document.getElementById("apertureSteppedSlider").addEventListener("input", (e) => {
    selectedApertureIdx = parseInt(e.target.value);
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

document.getElementById("shutterSteppedSlider").addEventListener("input", (e) => {
    selectedShutterIdx = parseInt(e.target.value);
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

document.getElementById("resetApertureBtn").addEventListener("click", () => {
    selectedApertureIdx = 3;
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

document.getElementById("resetShutterBtn").addEventListener("click", () => {
    selectedShutterIdx = 3;
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

document.getElementById("resetCamEvBtn").addEventListener("click", () => {
    camCompEV = 0.0;
    document.getElementById("camExpSlider").value = 0;
    document.getElementById("camExpVal").textContent = "0.0";
    recalculateExposureTriangle();
});

document.querySelectorAll("#camModeSelector .mode-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        document.querySelectorAll("#camModeSelector .mode-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        camMode = pill.dataset.mode;
        const grid = document.getElementById("waDialsGrid");
        grid.classList.toggle("dual", camMode === "M");
        document.getElementById("apertureDialBox").style.display = (camMode === "AV" || camMode === "M") ? "flex" : "none";
        document.getElementById("shutterDialBox").style.display = (camMode === "TV" || camMode === "M") ? "flex" : "none";
        buildSteppedCameraSliders();
        recalculateExposureTriangle();
    });
});

/* =========================================================
   6. NAVIGAZIONE HOME 3 PERCORSI, RULLINI & ARCHIVIO
   ========================================================= */
let selectedLoadFilmId = films[0].id;
let selectedExposures = 12;
let currentRoll = null;
let mediaStream = null;
let facingMode = "environment";

function switchView(viewId) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById(viewId).classList.add("active");
    if (viewId !== "view-camera" && viewId !== "view-vintage-camera" && viewId !== "view-polaroid") {
        stopCamera();
        if (meterInterval) { clearInterval(meterInterval); meterInterval = null; }
    }
}

async function refreshHomeStatus() {
    const rolls = await getAllRollsFromDB();
    const vRolls = typeof getAllVintageRollsFromDB === "function" ? await getAllVintageRollsFromDB() : [];
    const pShots = typeof getAllPolaroidShotsFromDB === "function" ? await getAllPolaroidShotsFromDB() : [];

    // 1. Simulazione Pellicole
    const activeRoll = rolls.find(r => r.status === "shooting");
    const rewoundRoll = rolls.find(r => r.status === "rewound");
    const devRolls = rolls.filter(r => r.status === "developed");
    const rCard = document.getElementById("pathRollsBtn");
    const rBadge = document.getElementById("homeRollsStatusBadge");
    const rCta = document.getElementById("homeRollsCta");
    const rArchBtn = document.getElementById("homeRollsArchiveBtn");

    if (rCard && rBadge && rCta) {
        rCard.classList.toggle("has-active-roll", !!(activeRoll || rewoundRoll));
        if (activeRoll) {
            rBadge.className = "path-badge live";
            rBadge.textContent = `● Rullino attivo: ${String(activeRoll.frames.length).padStart(2, "0")}/${activeRoll.capacity}`;
            rCta.textContent = `Riprendi ${activeRoll.film.name} →`;
        } else if (rewoundRoll) {
            rBadge.className = "path-badge live";
            rBadge.textContent = "● In Camera Oscura";
            rCta.textContent = "Sviluppa Rullino →";
        } else {
            rBadge.className = "path-badge";
            rBadge.textContent = "Nessun rullino attivo";
            rCta.textContent = "Carica Pellicola →";
        }
    }
    if (rArchBtn) rArchBtn.textContent = `Archivio (${devRolls.length})`;

    // 2. Polaroid
    const pBadge = document.getElementById("homePolaroidStatusBadge");
    const pGalBtn = document.getElementById("homePolaroidGalleryBtn");
    if (pBadge) pBadge.textContent = `${pShots.length} ${pShots.length === 1 ? "istantanea" : "istantanee"}`;
    if (pGalBtn) pGalBtn.textContent = `Galleria (${pShots.length})`;

    // 3. Usa & Getta
    const activeV = vRolls.find(r => r.status === "shooting");
    const devVRolls = vRolls.filter(r => r.status === "developed");
    const dCard = document.getElementById("pathDisposableBtn");
    const dBadge = document.getElementById("homeDisposableStatusBadge");
    const dCta = document.getElementById("homeDisposableCta");
    const dArchBtn = document.getElementById("homeDisposableArchiveBtn");

    if (dCard && dBadge && dCta) {
        dCard.classList.toggle("has-active-roll", !!activeV);
        if (activeV) {
            dBadge.className = "path-badge live";
            dBadge.textContent = `● Rullino attivo: ${String(activeV.frames.length).padStart(2, "0")}/${activeV.capacity}`;
            dCta.textContent = "Riprendi Usa & Getta →";
        } else {
            dBadge.className = "path-badge";
            dBadge.textContent = "Pronto";
            dCta.textContent = "Carica Usa & Getta →";
        }
    }
    if (dArchBtn) dArchBtn.textContent = `Archivio (${devVRolls.length})`;
}

async function enterRollsSection() {
    const rolls = await getAllRollsFromDB();
    const activeShooting = rolls.find(r => r.status === "shooting");
    const activeRewound = rolls.find(r => r.status === "rewound");
    if (activeShooting) {
        currentRoll = activeShooting;
        enterCameraMode();
        return;
    }
    if (activeRewound) {
        currentRoll = activeRewound;
        goToDarkroom();
        return;
    }
    await refreshArchiveList();
    renderLoadView();
    switchView("view-load");
}

document.getElementById("pathRollsBtn").addEventListener("click", () => {
    getAudioCtx();
    enterRollsSection();
});

document.getElementById("homeRollsArchiveBtn").addEventListener("click", async (e) => {
    e.stopPropagation();
    await refreshArchiveList();
    renderLoadView();
    switchView("view-load");
});

document.getElementById("pathPolaroidBtn").addEventListener("click", () => {
    getAudioCtx();
    if (typeof enterPolaroidMode === "function") enterPolaroidMode();
});

document.getElementById("homePolaroidGalleryBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (typeof openPolaroidGallery === "function") openPolaroidGallery();
});

document.getElementById("pathDisposableBtn").addEventListener("click", () => {
    getAudioCtx();
    if (typeof enterDisposableSection === "function") enterDisposableSection();
});

document.getElementById("homeDisposableArchiveBtn").addEventListener("click", async (e) => {
    e.stopPropagation();
    if (typeof refreshVintageArchiveList === "function") await refreshVintageArchiveList();
    switchView("view-disposable-load");
});

document.getElementById("backHomeFromLoadBtn").addEventListener("click", () => {
    refreshHomeStatus();
    switchView("view-home");
});

document.getElementById("openLabFromRollsBtn").addEventListener("click", openLabModal);

function renderLoadView() {
    const grid = document.getElementById("loadFilmGrid");
    grid.innerHTML = "";
    films.forEach(f => {
        const theme = resolveFilmBrandTheme(f);
        const div = document.createElement("div");
        div.className = "film-option" + (f.id === selectedLoadFilmId ? " selected" : "");
        div.style.setProperty("--brand-color", theme.color);
        const modeTxt = f.mode === "bw" ? "Bianco & Nero"
            : (f.mode === "slide" ? "Diapositiva" : "Negativo Colore");

        div.innerHTML = `
      <div class="film-canister-strip">
        <span class="film-canister-pill" style="background:${theme.bg}; color:${theme.text};">${theme.brand}</span>
        <span class="film-canister-iso">ISO ${f.iso}</span>
      </div>
      <strong>${f.name}</strong>
      <small>${modeTxt}</small>
    `;
        div.addEventListener("click", () => {
            selectedLoadFilmId = f.id;
            document.getElementById("selectedFilmIso").textContent = "ISO " + f.iso;
            renderLoadView();
        });
        grid.appendChild(div);
    });
    const selF = films.find(x => x.id === selectedLoadFilmId) || films[0];
    if (selF) {
        selectedLoadFilmId = selF.id;
        document.getElementById("selectedFilmIso").textContent = "ISO " + selF.iso;
    }
}

document.querySelectorAll("#expCountRow .exp-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        document.querySelectorAll("#expCountRow .exp-pill").forEach(p => p.classList.remove("selected"));
        pill.classList.add("selected");
        selectedExposures = parseInt(pill.dataset.count);
    });
});

document.querySelectorAll("#qualityRow .exp-pill, #vintageQualityRow .exp-pill, #printQualityRow .exp-pill").forEach(pill => {
    pill.addEventListener("click", () => setQualityMode(pill.dataset.quality));
});

document.getElementById("camQualityBadge").addEventListener("click", () => {
    setQualityMode(qualityMode === "max" ? "standard" : "max");
    startCamera();
});

async function refreshArchiveList() {
    const rolls = await getAllRollsFromDB();
    const developed = rolls.filter(r => r.status === "developed").sort((a, b) => b.createdAt - a.createdAt);
    const list = document.getElementById("archiveList");
    const emptyMsg = document.getElementById("archiveEmptyMsg");
    document.getElementById("archiveCount").textContent = `${developed.length} ${developed.length === 1 ? "rullino" : "rullini"}`;
    list.innerHTML = "";

    if (developed.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }
    emptyMsg.style.display = "none";
    developed.forEach(roll => {
        const theme = resolveFilmBrandTheme(roll.film);
        const item = document.createElement("div");
        item.className = "archive-item";
        item.style.borderLeft = `4px solid ${theme.color}`;
        const dateStr = new Date(roll.createdAt).toLocaleDateString("it-IT", { day: "2-digit", month: "short" });
        const pushStr = roll.pushStops === 0 ? "STD" : (roll.pushStops > 0 ? `PUSH +${roll.pushStops}` : `PULL ${roll.pushStops}`);
        const savedC = roll.frames.filter(f => f.savedLocally).length;
        const starC = roll.frames.filter(f => f.starred).length;
        item.innerHTML = `
      <div>
        <strong>${roll.film.name}</strong>
        <small>${roll.frames.length} pose • ${pushStr} • ★ ${starC} • ✓ ${savedC} • ${dateStr}</small>
      </div>
      <span style="color:var(--gold); font-size:12px; font-weight:700;">Provini →</span>
    `;
        item.addEventListener("click", () => { currentRoll = roll; openContactSheet(); });
        list.appendChild(item);
    });
}

document.getElementById("loadRollBtn").addEventListener("click", async () => {
    getAudioCtx();
    const filmCopy = JSON.parse(JSON.stringify(films.find(f => f.id === selectedLoadFilmId) || films[0]));
    currentRoll = {
        id: "roll-" + Date.now(),
        createdAt: Date.now(),
        film: filmCopy,
        capacity: selectedExposures,
        status: "shooting",
        pushStops: 0,
        devDefects: { lightLeaks: false, chemStains: false, agedPaper: false },
        frames: []
    };
    await saveRollToDB(currentRoll);
    await refreshHomeStatus();
    enterCameraMode();
});

/* =========================================================
   7. FOTOCAMERA LIVE & RIAVVOLGIMENTO
   ========================================================= */
async function startCamera() {
    stopCamera();
    const video = document.getElementById("camVideo");
    const fallback = document.getElementById("camFallbackMsg");
    const videoConstraints = qualityMode === "max"
        ? { facingMode: facingMode, width: { ideal: 4096 }, height: { ideal: 3072 } }
        : { facingMode: facingMode, width: { ideal: 1920 }, height: { ideal: 1440 } };
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
        video.srcObject = mediaStream;
        video.style.display = "block";
        fallback.style.display = "none";
        detectFlashCapabilities();
        recalculateExposureTriangle();
    } catch (err) {
        video.style.display = "none";
        fallback.style.display = "flex";
    }
}

function stopCamera() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(t => t.stop());
        mediaStream = null;
    }
}

function updateCameraHUD() {
    const theme = resolveFilmBrandTheme(currentRoll.film);
    const canister = document.getElementById("camFilmCanister");
    canister.style.background = theme.bg;
    canister.style.color = theme.text;
    document.getElementById("camFilmBrand").textContent = `${theme.brand} • ${currentRoll.film.iso}`;
    document.getElementById("camFilmBadge").textContent = currentRoll.film.name;

    const cur = String(currentRoll.frames.length).padStart(2, "0");
    const tot = String(currentRoll.capacity).padStart(2, "0");
    document.getElementById("camCounter").textContent = `${cur} / ${tot}`;

    const isFull = currentRoll.frames.length >= currentRoll.capacity;
    document.getElementById("rewindEarlyBtn").classList.toggle("pulse-finish", isFull);
    document.getElementById("rollFinishedOverlay").classList.toggle("open", isFull && !isRewinding);
}

function enterCameraMode() {
    isRewinding = false;
    camCompEV = 0.0;
    document.getElementById("camExpSlider").value = 0;
    document.getElementById("camExpVal").textContent = "0.0";
    document.getElementById("rollFinishedOverlay").classList.remove("open");
    document.getElementById("rewindAnimOverlay").classList.remove("open");

    setQualityMode(qualityMode);
    syncThirdsUI();
    setShutterArmedState(false);
    buildSteppedCameraSliders();
    updateCameraHUD();
    switchView("view-camera");
    startCamera();
    sampleLiveSceneEV();
    if (meterInterval) clearInterval(meterInterval);
    meterInterval = setInterval(sampleLiveSceneEV, 350);
}

document.getElementById("camHomeBtn").addEventListener("click", () => {
    if (isRewinding) return;
    refreshHomeStatus();
    switchView("view-home");
});

document.getElementById("camExpSlider").addEventListener("input", (e) => {
    camCompEV = parseFloat(e.target.value);
    document.getElementById("camExpVal").textContent = (camCompEV > 0 ? "+" : "") + camCompEV.toFixed(1);
    recalculateExposureTriangle();
});

document.getElementById("switchCamBtn").addEventListener("click", () => {
    facingMode = facingMode === "environment" ? "user" : "environment";
    startCamera();
});

function drawCroppedToCanvas(sourceObj, srcW, srcH, targetRatio, mirror = false) {
    let sx = 0, sy = 0, sw = srcW, sh = srcH;
    if (srcW / srcH > targetRatio) {
        sw = Math.round(srcH * targetRatio);
        sx = Math.round((srcW - sw) / 2);
    } else {
        sh = Math.round(srcW / targetRatio);
        sy = Math.round((srcH - sh) / 2);
    }
    const c = document.createElement("canvas");
    c.width = sw;
    c.height = sh;
    const ctx = c.getContext("2d");
    if (mirror) { ctx.translate(sw, 0); ctx.scale(-1, 1); }
    ctx.drawImage(sourceObj, sx, sy, sw, sh, 0, 0, sw, sh);
    return c;
}

async function captureFrameWithRealFlash(video, targetRatio) {
    const track = mediaStream ? mediaStream.getVideoTracks()[0] : null;
    const mirror = facingMode === "user";

    if (flashActive && track) {
        if (hardwareFlashSupport.hasPhotoFlash && typeof ImageCapture !== "undefined") {
            try {
                const ic = new ImageCapture(track);
                const blob = await ic.takePhoto({ fillLightMode: "flash" });
                const bitmap = await createImageBitmap(blob);
                const c = drawCroppedToCanvas(bitmap, bitmap.width, bitmap.height, targetRatio, mirror);
                bitmap.close();
                return { canvas: c, hardwareFlashFired: true };
            } catch (err) { }
        }

        if (hardwareFlashSupport.hasTorch) {
            try {
                await track.applyConstraints({ advanced: [{ torch: true }] });
                await new Promise(r => setTimeout(r, 320));
                const c = drawCroppedToCanvas(video, video.videoWidth, video.videoHeight, targetRatio, mirror);
                return { canvas: c, hardwareFlashFired: true };
            } catch (err) {
            } finally {
                try { await track.applyConstraints({ advanced: [{ torch: false }] }); } catch (e) { }
            }
        }

        if (facingMode === "user") {
            const frontFlash = document.getElementById("frontScreenFlash");
            frontFlash.classList.add("lit");
            await new Promise(r => setTimeout(r, 260));
            const c = drawCroppedToCanvas(video, video.videoWidth, video.videoHeight, targetRatio, mirror);
            frontFlash.classList.remove("lit");
            return { canvas: c, hardwareFlashFired: true };
        }
    }

    const c = drawCroppedToCanvas(video, video.videoWidth, video.videoHeight, targetRatio, mirror);
    return { canvas: c, hardwareFlashFired: false };
}

async function recordLatentFrame(sourceCanvasOrImg, usedFlash = false, hardwareFlashFired = false) {
    if (!currentRoll || currentRoll.frames.length >= currentRoll.capacity) return;

    const expInfo = recalculateExposureTriangle();
    playShutterSound(expInfo.shutter.sec, usedFlash);

    const curtain = document.getElementById("shutterCurtain");
    curtain.classList.add("blink");
    const blinkDuration = Math.min(700, Math.max(100, expInfo.shutter.sec * 1000));
    setTimeout(() => curtain.classList.remove("blink"), blinkDuration);

    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = sourceCanvasOrImg.width;
    finalCanvas.height = sourceCanvasOrImg.height;
    const ctx = finalCanvas.getContext("2d");
    ctx.drawImage(sourceCanvasOrImg, 0, 0);

    if (usedFlash && !hardwareFlashFired) {
        const w = finalCanvas.width, h = finalCanvas.height;
        const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.08, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
        grad.addColorStop(0, "rgba(255, 252, 245, 0.24)");
        grad.addColorStop(0.55, "rgba(255, 250, 240, 0.08)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0.22)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }

    if (!usedFlash && expInfo.shutter.sec >= 1 / 15) {
        const shakePx = Math.min(22, Math.round(expInfo.shutter.sec * 28));
        ctx.globalAlpha = 0.35;
        ctx.drawImage(sourceCanvasOrImg, shakePx, Math.round(shakePx * 0.4));
        ctx.globalAlpha = 0.20;
        ctx.drawImage(sourceCanvasOrImg, -Math.round(shakePx * 0.5), -Math.round(shakePx * 0.3));
        ctx.globalAlpha = 1.0;
    }

    const flashFillBoost = (usedFlash && !hardwareFlashFired) ? Math.max(0.45, -expInfo.exposureErrorEV * 0.65) : 0.0;
    const effectiveFrameEV = (camMode === "M" ? 0 : camCompEV) + expInfo.exposureErrorEV + flashFillBoost;
    const jpegQ = qualityMode === "max" ? 0.96 : 0.91;
    const seed = Math.random();
    const rawBlob = await canvasToBlob(finalCanvas, "image/jpeg", jpegQ);

    currentRoll.frames.push({
        number: currentRoll.frames.length + 1,
        exposureEV: effectiveFrameEV,
        aperture: expInfo.aperture,
        shutterLabel: expInfo.shutter.label,
        mode: camMode,
        flash: usedFlash,
        starred: false,
        savedLocally: false,
        defectSeed: seed,
        defects: createDefaultFrameDefects(seed),
        rawBlob,
        thumbBlob: null
    });

    finalCanvas.width = 0; finalCanvas.height = 0;
    setShutterArmedState(false);
    updateCameraHUD();
    await saveRollToDB(currentRoll);
    await refreshHomeStatus();
    await refreshStorageSummary();
}

document.getElementById("shutterBtn").addEventListener("click", async () => {
    if (isCapturing || isRewinding) return;
    if (!currentRoll || currentRoll.frames.length >= currentRoll.capacity) {
        playLockedShutterTick();
        return;
    }
    if (!isShutterArmed) {
        playLockedShutterTick();
        const badge = document.getElementById("vfCockBadge");
        badge.style.transform = "scale(1.08)";
        setTimeout(() => { badge.style.transform = "scale(1)"; }, 160);
        return;
    }

    const video = document.getElementById("camVideo");
    if (!mediaStream || video.videoWidth === 0) {
        alert("Fotocamera live non attiva in locale (file://): tocca '+ GALLERIA' in basso a sinistra per esporre una foto sul rullino!");
        return;
    }

    isCapturing = true;
    try {
        const { canvas: capCanvas, hardwareFlashFired } = await captureFrameWithRealFlash(video, 3 / 4);
        await recordLatentFrame(capCanvas, flashActive, hardwareFlashFired);
        capCanvas.width = 0; capCanvas.height = 0;
    } finally {
        isCapturing = false;
    }
});

document.getElementById("camGalleryInput").addEventListener("change", (e) => {
    if (isRewinding || (currentRoll && currentRoll.frames.length >= currentRoll.capacity)) {
        e.target.value = "";
        return;
    }
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
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
            recordLatentFrame(c, flashActive, false).then(() => { c.width = 0; c.height = 0; });
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
});

async function executeRewindSequence() {
    if (isRewinding || !currentRoll) return;
    getAudioCtx();
    isRewinding = true;
    document.getElementById("rollFinishedOverlay").classList.remove("open");
    const animOverlay = document.getElementById("rewindAnimOverlay");
    const fill = document.getElementById("rewindProgressFill");
    const counterEl = document.getElementById("camCounter");
    fill.style.width = "0%";
    animOverlay.classList.add("open");

    const totalFrames = currentRoll.frames.length;
    const totStr = String(currentRoll.capacity).padStart(2, "0");
    const durationMs = 4000;
    playFilmRewindSound(durationMs / 1000);

    const startTime = performance.now();
    await new Promise((resolve) => {
        function step(now) {
            const p = Math.min(1, (now - startTime) / durationMs);
            fill.style.width = `${Math.round(p * 100)}%`;
            const rem = Math.max(0, Math.round(totalFrames * (1 - p)));
            counterEl.textContent = `${String(rem).padStart(2, "0")} / ${totStr}`;
            if (p < 1) requestAnimationFrame(step);
            else resolve();
        }
        requestAnimationFrame(step);
    });

    animOverlay.classList.remove("open");
    isRewinding = false;
    await goToDarkroom();
}

document.getElementById("finishRewindBtn").addEventListener("click", executeRewindSequence);
document.getElementById("rewindEarlyBtn").addEventListener("click", async () => {
    if (isRewinding || !currentRoll) return;
    if (currentRoll.frames.length === 0) {
        if (confirm("Nessuna foto scattata. Estrarre il rullino vuoto?")) {
            await deleteRollFromDB(currentRoll.id);
            currentRoll = null;
            await refreshHomeStatus();
            await refreshStorageSummary();
            switchView("view-load");
        }
        return;
    }
    if (currentRoll.frames.length >= currentRoll.capacity) {
        executeRewindSequence();
        return;
    }
    if (confirm(`Riavvolgere il rullino con ${currentRoll.frames.length} scatti e andare in Camera Oscura?`)) {
        executeRewindSequence();
    }
});

/* =========================================================
   8. CAMERA OSCURA
   ========================================================= */
let selectedPushStops = 0;
let devLightLeaks = false;
let devChemStains = false;
let devAgedPaper = false;

async function goToDarkroom() {
    currentRoll.status = "rewound";
    await saveRollToDB(currentRoll);
    await refreshHomeStatus();
    selectedPushStops = 0;
    devLightLeaks = false;
    devChemStains = false;
    devAgedPaper = false;

    document.querySelectorAll("#pushGrid .push-btn").forEach(b => b.classList.remove("selected"));
    document.querySelector('#pushGrid .push-btn[data-push="0"]').classList.add("selected");
    document.getElementById("drToggleLeaks").classList.remove("active");
    document.getElementById("drToggleChem").classList.remove("active");
    document.getElementById("drToggleAged").classList.remove("active");

    document.getElementById("drFilmTitle").textContent = currentRoll.film.name;
    document.getElementById("drFrameSummary").textContent = `${currentRoll.frames.length} fotogrammi latenti pronti per il bagno chimico`;
    document.getElementById("devProgressBox").style.display = "none";
    document.getElementById("startDevelopBtn").style.display = "inline-flex";
    switchView("view-darkroom");
}

document.getElementById("darkroomHomeBtn").addEventListener("click", () => {
    refreshHomeStatus();
    switchView("view-home");
});

document.querySelectorAll("#pushGrid .push-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#pushGrid .push-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedPushStops = parseInt(btn.dataset.push);
    });
});

document.getElementById("drToggleLeaks").addEventListener("click", function () { devLightLeaks = !devLightLeaks; this.classList.toggle("active", devLightLeaks); });
document.getElementById("drToggleChem").addEventListener("click", function () { devChemStains = !devChemStains; this.classList.toggle("active", devChemStains); });
document.getElementById("drToggleAged").addEventListener("click", function () { devAgedPaper = !devAgedPaper; this.classList.toggle("active", devAgedPaper); });

document.getElementById("startDevelopBtn").addEventListener("click", async () => {
    document.getElementById("startDevelopBtn").style.display = "none";
    const progBox = document.getElementById("devProgressBox");
    const progFill = document.getElementById("devProgressFill");
    const statusTxt = document.getElementById("devStatusText");
    progBox.style.display = "flex";

    currentRoll.pushStops = selectedPushStops;
    currentRoll.devDefects = { lightLeaks: devLightLeaks, chemStains: devChemStains, agedPaper: devAgedPaper };
    const total = currentRoll.frames.length;
    let prevHadLeak = false;

    for (let i = 0; i < total; i++) {
        statusTxt.textContent = `Sviluppo chimico fotogramma ${i + 1} di ${total}...`;
        progFill.style.width = `${Math.round(((i + 0.5) / total) * 100)}%`;
        await new Promise(r => setTimeout(r, 170));

        const frame = currentRoll.frames[i];
        const fDef = ensureFrameDefects(frame);

        if (devLightLeaks) {
            const leakProb = prevHadLeak ? 0.55 : 0.40;
            const hit = Math.random() < leakProb;
            fDef.lightLeak.active = hit;
            fDef.lightLeak.intensity = hit ? +(0.35 + Math.random() * 0.65).toFixed(2) : 0;
            prevHadLeak = hit;
        } else { fDef.lightLeak.active = false; fDef.lightLeak.intensity = 0; prevHadLeak = false; }

        if (devChemStains) {
            const hit = Math.random() < 0.48;
            fDef.chemStain.active = hit;
            fDef.chemStain.intensity = hit ? +(0.35 + Math.random() * 0.65).toFixed(2) : 0;
        } else { fDef.chemStain.active = false; fDef.chemStain.intensity = 0; }

        if (devAgedPaper) {
            const hit = Math.random() < 0.55;
            fDef.agedPaper.active = hit;
            fDef.agedPaper.intensity = hit ? +(0.35 + Math.random() * 0.65).toFixed(2) : 0;
        } else { fDef.agedPaper.active = false; fDef.agedPaper.intensity = 0; }

        const img = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
        renderFrameWithWebGL(img, currentRoll.film, frame, currentRoll.pushStops, null, false, 480);
        frame.thumbBlob = await canvasToBlob(glCanvas, "image/jpeg", 0.82);
    }

    progFill.style.width = "100%";
    statusTxt.textContent = "Lavaggio e asciugatura completati!";
    currentRoll.status = "developed";
    await saveRollToDB(currentRoll);
    await refreshHomeStatus();
    await refreshStorageSummary();

    setTimeout(() => { refreshArchiveList(); openContactSheet(); }, 420);
});

/* =========================================================
   9. PROVINO A CONTATTO
   ========================================================= */
function updateContactSelectionUI() {
    if (!currentRoll) return;
    const starCount = currentRoll.frames.filter(f => f.starred).length;
    const selBtn = document.getElementById("csSaveSelectedBtn");
    const allBtn = document.getElementById("csSelectAllBtn");
    if (selBtn) selBtn.textContent = `Salva Selezionate (${starCount})`;
    if (allBtn) {
        const allStarred = currentRoll.frames.length > 0 && starCount === currentRoll.frames.length;
        allBtn.textContent = allStarred ? "☆ Deseleziona" : "★ Tutte";
    }
}

function openContactSheet() {
    document.getElementById("csTitle").textContent = currentRoll.film.name;
    document.getElementById("csFilmEdge").textContent = `${currentRoll.film.name.toUpperCase()} • ISO ${currentRoll.film.iso}`;
    const pTxt = currentRoll.pushStops === 0 ? "DEV: STD" : (currentRoll.pushStops > 0 ? `PUSH +${currentRoll.pushStops}` : `PULL ${currentRoll.pushStops}`);
    document.getElementById("csDevEdge").textContent = pTxt;

    const grid = document.getElementById("contactGrid");
    grid.innerHTML = "";
    currentRoll.frames.forEach((frame, idx) => {
        const cell = document.createElement("div");
        cell.className = "contact-frame" + (frame.starred ? " starred" : "");

        const img = document.createElement("img");
        const srcObj = frame.thumbBlob || frame.thumbDataUrl;
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
            await saveRollToDB(currentRoll);
            openContactSheet();
        });

        cell.appendChild(img);
        cell.appendChild(starBtn);

        if (frame.savedLocally) {
            const badge = document.createElement("span");
            badge.className = "frame-saved-badge";
            badge.textContent = "✓ Salvata";
            cell.appendChild(badge);
        }

        const numStr = String(frame.number).padStart(2, "0") + "A";
        const numSpan = document.createElement("span");
        numSpan.className = "frame-num";
        numSpan.textContent = `${numStr}${frame.flash ? " ⚡" : ""}`;
        cell.appendChild(numSpan);

        if (hasAnyFrameDefect(frame)) {
            const dot = document.createElement("em");
            dot.className = "defect-dot";
            dot.textContent = "●";
            cell.appendChild(dot);
        }

        cell.addEventListener("click", () => openPrintEnlarger(idx));
        grid.appendChild(cell);
    });

    updateContactSelectionUI();
    switchView("view-contact");
}

async function exportContactFrames(framesToExport, labelSlug) {
    if (!framesToExport.length) {
        alert("Metti prima la stellina (★) su almeno una foto oppure clicca 'Salva Tutte'.");
        return;
    }
    const items = [];
    const exportJpegQ = qualityMode === "max" ? 0.96 : 0.91;
    const slug = currentRoll.film.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    for (const frame of framesToExport) {
        const img = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
        renderFrameWithWebGL(img, currentRoll.film, frame, currentRoll.pushStops, null, false);
        const blob = await canvasToBlob(glCanvas, "image/jpeg", exportJpegQ);
        items.push({ name: `${slug}-f${String(frame.number).padStart(2, "0")}.jpg`, blob });
        frame.savedLocally = true;
    }

    await downloadImagesBatch(items, `analog-photolab-${slug}-${labelSlug}.zip`);
    await saveRollToDB(currentRoll);
    await refreshArchiveList();
    await refreshStorageSummary();
    openContactSheet();
}

document.getElementById("csSelectAllBtn").addEventListener("click", async () => {
    if (!currentRoll) return;
    const allStarred = currentRoll.frames.every(f => f.starred);
    currentRoll.frames.forEach(f => { f.starred = !allStarred; });
    await saveRollToDB(currentRoll);
    openContactSheet();
});

document.getElementById("csSaveSelectedBtn").addEventListener("click", async () => {
    if (!currentRoll) return;
    const selected = currentRoll.frames.filter(f => f.starred);
    await exportContactFrames(selected, "scelte");
});

document.getElementById("csSaveAllBtn").addEventListener("click", async () => {
    if (!currentRoll) return;
    await exportContactFrames(currentRoll.frames, "tutte");
});

document.getElementById("newRollFromCsBtn").addEventListener("click", () => {
    currentRoll = null;
    refreshArchiveList();
    refreshHomeStatus();
    refreshStorageSummary();
    switchView("view-home");
});

/* =========================================================
   10. STAZIONE DI STAMPA / INGRANDITORE
   ========================================================= */
let activePrintIdx = 0;
let activePrintImg = null;
let printShowOriginal = false;
let activeFrameDirty = false;

let activePrintPresetDefaults = {
    time: 12.0, grade: 2.5, mag: 0, yel: 0, burn: 0.10,
    zoom: 1.0, rotation: 0, borderThickness: 0.06, grainScale: 1.0
};

let printState = {
    presetId: "lab-std",
    paperId: "kodak-endura",
    time: 12.0,
    grade: 2.5,
    mag: 0,
    yel: 0,
    burn: 0.10,
    border: "none",
    borderThickness: 0.06,
    grainScale: 1.0,
    zoom: 1.0,
    rotation: 0,
    panX: 0,
    panY: 0,
    defects: createDefaultFrameDefects(0.42)
};

function layoutPrintPreview() {
    const stage = document.getElementById("printStage");
    const wrap = document.getElementById("printWrapper");
    if (!stage || !wrap || !glCanvas.width || !glCanvas.height) return;

    const availW = Math.max(80, stage.clientWidth - 24);
    const availH = Math.max(80, stage.clientHeight - 24);
    const aspect = glCanvas.width / glCanvas.height;

    let pSide = 0, pTop = 0, pBot = 0;
    if (printState.border === "white") {
        const t = printState.borderThickness;
        pSide = t; pTop = t; pBot = t;
    } else if (printState.border === "rebate") {
        pSide = 0.045; pTop = 0.085 / aspect; pBot = 0.085 / aspect;
    }

    const maxW_byW = availW / (1 + pSide * 2);
    const maxW_byH = availH / ((1 / aspect) + pTop + pBot);
    const dispW = Math.max(40, Math.floor(Math.min(maxW_byW, maxW_byH)));
    const dispH = Math.max(40, Math.floor(dispW / aspect));

    glCanvas.style.width = dispW + "px";
    glCanvas.style.height = dispH + "px";
    wrap.style.padding = `${Math.round(dispW * pTop)}px ${Math.round(dispW * pSide)}px ${Math.round(dispW * pBot)}px ${Math.round(dispW * pSide)}px`;
}

window.addEventListener("resize", () => {
    if (document.getElementById("printModal").classList.contains("open")) layoutPrintPreview();
});

function renderPrintPresetsAndPapers() {
    const pStrip = document.getElementById("printPresetStrip");
    pStrip.innerHTML = "";
    PRINT_PRESETS.forEach(pr => {
        const chip = document.createElement("div");
        chip.className = "preset-chip" + (printState.presetId === pr.id ? " active" : "");
        chip.innerHTML = `<strong>${pr.name}</strong><small>${pr.sub}</small>`;
        chip.addEventListener("click", () => {
            activePrintPresetDefaults = {
                time: pr.time, grade: pr.grade, mag: pr.mag, yel: pr.yel, burn: pr.burn,
                zoom: 1.0, rotation: 0, borderThickness: 0.06, grainScale: 1.0
            };
            printState = {
                ...printState,
                presetId: pr.id,
                paperId: pr.paperId,
                time: pr.time,
                grade: pr.grade,
                mag: pr.mag,
                yel: pr.yel,
                burn: pr.burn,
                border: pr.border
            };
            syncPrintControlsUI();
            updatePrintPreview();
        });
        pStrip.appendChild(chip);
    });

    const paperGrid = document.getElementById("paperGrid");
    paperGrid.innerHTML = "";
    PAPER_STOCKS.forEach(pk => {
        const card = document.createElement("div");
        card.className = "paper-card" + (printState.paperId === pk.id ? " active" : "");
        card.innerHTML = `
      <div class="paper-swatch" style="background:${pk.swatch};"></div>
      <div>
        <strong>${pk.name}</strong>
        <small>${pk.desc}</small>
      </div>
    `;
        card.addEventListener("click", () => {
            printState.presetId = "custom";
            printState.paperId = pk.id;
            syncPrintControlsUI();
            updatePrintPreview();
        });
        paperGrid.appendChild(card);
    });
}

function syncPrintControlsUI() {
    renderPrintPresetsAndPapers();

    document.getElementById("prZoomSlider").value = printState.zoom;
    document.getElementById("prZoomVal").textContent = printState.zoom.toFixed(2) + "x";

    document.getElementById("prRotSlider").value = printState.rotation;
    document.getElementById("prRotVal").textContent = Math.round(printState.rotation) + "°";

    document.getElementById("prTimeSlider").value = printState.time;
    document.getElementById("prTimeVal").textContent = printState.time.toFixed(1) + "s";

    document.getElementById("prGradeSlider").value = printState.grade;
    document.getElementById("prGradeVal").textContent = "Gr. " + printState.grade.toFixed(1);

    document.getElementById("prMagSlider").value = printState.mag;
    document.getElementById("prMagVal").textContent = (printState.mag > 0 ? "+" : "") + printState.mag + " M";

    document.getElementById("prYelSlider").value = printState.yel;
    document.getElementById("prYelVal").textContent = (printState.yel > 0 ? "+" : "") + printState.yel + " Y";

    document.getElementById("prBurnSlider").value = printState.burn;
    document.getElementById("prBurnVal").textContent = Math.round(printState.burn * 100) + "%";

    document.getElementById("prGrainSlider").value = printState.grainScale;
    document.getElementById("prGrainVal").textContent = Math.round(printState.grainScale * 100) + "%";

    document.getElementById("prBorderThickSlider").value = printState.borderThickness;
    document.getElementById("prBorderThickVal").textContent = Math.round(printState.borderThickness * 100) + "%";
    document.getElementById("borderThicknessRow").style.display = printState.border === "white" ? "flex" : "none";

    const d = printState.defects;
    document.getElementById("boxPrLeaks").classList.toggle("active", d.lightLeak.active);
    document.getElementById("prToggleLeaks").classList.toggle("active", d.lightLeak.active);
    document.getElementById("prLeakInt").value = d.lightLeak.intensity;
    document.getElementById("prLeakIntVal").textContent = Math.round(d.lightLeak.intensity * 100) + "%";

    document.getElementById("boxPrChem").classList.toggle("active", d.chemStain.active);
    document.getElementById("prToggleChem").classList.toggle("active", d.chemStain.active);
    document.getElementById("prChemInt").value = d.chemStain.intensity;
    document.getElementById("prChemIntVal").textContent = Math.round(d.chemStain.intensity * 100) + "%";

    document.getElementById("boxPrAged").classList.toggle("active", d.agedPaper.active);
    document.getElementById("prToggleAgedPaper").classList.toggle("active", d.agedPaper.active);
    document.getElementById("prAgedInt").value = d.agedPaper.intensity;
    document.getElementById("prAgedIntVal").textContent = Math.round(d.agedPaper.intensity * 100) + "%";

    document.getElementById("boxPrScratches").classList.toggle("active", d.scratches.active);
    document.getElementById("prToggleScratches").classList.toggle("active", d.scratches.active);
    document.getElementById("prScratchInt").value = d.scratches.intensity;
    document.getElementById("prScratchIntVal").textContent = Math.round(d.scratches.intensity * 100) + "%";

    const isBW = currentRoll && currentRoll.film.mode === "bw";
    document.getElementById("ra4MagentaRow").style.display = isBW ? "none" : "flex";
    document.getElementById("ra4YellowRow").style.display = isBW ? "none" : "flex";

    const paper = PAPER_STOCKS.find(p => p.id === printState.paperId) || PAPER_STOCKS[0];
    const wrap = document.getElementById("printWrapper");
    const effectiveSwatch = (d.agedPaper.active && d.agedPaper.intensity > 0) ? "#e8d6b3" : paper.swatch;
    wrap.style.setProperty("--paper-bg", effectiveSwatch);
    wrap.className = "print-frame-wrapper";
    if (printState.border === "white") wrap.classList.add("border-white");
    if (printState.border === "rebate") wrap.classList.add("border-rebate");

    document.querySelectorAll("#borderSelector button").forEach(b => {
        b.classList.toggle("btn-gold-outline", b.dataset.border === printState.border);
    });

    layoutPrintPreview();
}

async function persistCurrentFrameDefects() {
    if (!currentRoll || !currentRoll.frames[activePrintIdx]) return;
    const frame = currentRoll.frames[activePrintIdx];
    frame.defects = JSON.parse(JSON.stringify(printState.defects));
    frame.defectSeed = frame.defects.seed;
    activeFrameDirty = true;
    await saveRollToDB(currentRoll);
}

async function openPrintEnlarger(idx) {
    activePrintIdx = idx;
    activeFrameDirty = false;
    const frame = currentRoll.frames[idx];
    document.getElementById("printFrameTitle").textContent = `Foto #${String(frame.number).padStart(2, "0")}`;
    const apStr = frame.aperture ? `f/${frame.aperture}` : "f/4";
    const shStr = frame.shutterLabel ? `${frame.shutterLabel}s` : "1/125s";
    const flStr = frame.flash ? " • ⚡" : "";
    document.getElementById("printExifMeta").textContent = `${frame.mode || "AUTO"} • ${apStr} • ${shStr}${flStr}`;

    const frameDef = ensureFrameDefects(frame);

    printState.zoom = 1.0;
    printState.rotation = 0;
    printState.panX = 0;
    printState.panY = 0;
    printState.borderThickness = 0.06;
    printState.grainScale = 1.0;
    printState.defects = JSON.parse(JSON.stringify(frameDef));

    const std = PRINT_PRESETS[0];
    activePrintPresetDefaults = {
        time: std.time, grade: std.grade, mag: std.mag, yel: std.yel, burn: std.burn,
        zoom: 1.0, rotation: 0, borderThickness: 0.06, grainScale: 1.0
    };
    printState.presetId = "lab-std";
    printState.paperId = "kodak-endura";
    printState.border = "none";
    printState.time = std.time;
    printState.grade = std.grade;
    printState.mag = std.mag;
    printState.yel = std.yel;
    printState.burn = std.burn;

    activePrintImg = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
    document.getElementById("printModal").classList.add("open");
    updatePrintPreview();
    syncPrintControlsUI();
}

function updatePrintPreview() {
    if (!activePrintImg) return;
    const frame = currentRoll.frames[activePrintIdx];
    renderFrameWithWebGL(activePrintImg, currentRoll.film, frame, currentRoll.pushStops, printState, printShowOriginal);
    layoutPrintPreview();
}

document.querySelectorAll("#printTabs .print-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#printTabs .print-tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".print-tab-body").forEach(b => b.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

function rotatePrint90() {
    printState.rotation = (Math.round(printState.rotation) + 90) % 360;
    printState.panX = 0;
    printState.panY = 0;
    updatePrintPreview();
    syncPrintControlsUI();
}

document.getElementById("prRotate90Btn").addEventListener("click", rotatePrint90);
document.getElementById("headerRotate90Btn").addEventListener("click", rotatePrint90);

document.getElementById("prResetGeomBtn").addEventListener("click", () => {
    printState.zoom = 1.0;
    printState.rotation = 0;
    printState.panX = 0;
    printState.panY = 0;
    updatePrintPreview();
    syncPrintControlsUI();
});

document.getElementById("prZoomSlider").addEventListener("input", (e) => {
    printState.zoom = parseFloat(e.target.value);
    const maxPan = Math.max(0, 0.5 * (1 - 1 / printState.zoom));
    printState.panX = Math.max(-maxPan, Math.min(maxPan, printState.panX));
    printState.panY = Math.max(-maxPan, Math.min(maxPan, printState.panY));
    document.getElementById("prZoomVal").textContent = printState.zoom.toFixed(2) + "x";
    updatePrintPreview();
});

document.getElementById("prRotSlider").addEventListener("input", (e) => {
    printState.rotation = parseFloat(e.target.value) % 360;
    document.getElementById("prRotVal").textContent = Math.round(printState.rotation) + "°";
    updatePrintPreview();
});

document.getElementById("prBorderThickSlider").addEventListener("input", (e) => {
    printState.borderThickness = parseFloat(e.target.value);
    document.getElementById("prBorderThickVal").textContent = Math.round(printState.borderThickness * 100) + "%";
    layoutPrintPreview();
});

document.querySelectorAll("[data-reset-print]").forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.resetPrint;
        const defVal = activePrintPresetDefaults[key];
        if (typeof defVal !== "number") return;
        printState[key] = defVal;
        if (key === "zoom" || key === "rotation") { printState.panX = 0; printState.panY = 0; }
        syncPrintControlsUI();
        updatePrintPreview();
    });
});

document.querySelectorAll("[data-reset-defect]").forEach(btn => {
    btn.addEventListener("click", async () => {
        const key = btn.dataset.resetDefect;
        printState.defects[key].intensity = 0;
        await persistCurrentFrameDefects();
        syncPrintControlsUI();
        updatePrintPreview();
    });
});

[
    ["prTimeSlider", "time"],
    ["prGradeSlider", "grade"],
    ["prMagSlider", "mag"],
    ["prYelSlider", "yel"],
    ["prBurnSlider", "burn"],
    ["prGrainSlider", "grainScale"]
].forEach(([id, prop]) => {
    document.getElementById(id).addEventListener("input", (e) => {
        printState.presetId = "custom";
        printState[prop] = parseFloat(e.target.value);
        syncPrintControlsUI();
        updatePrintPreview();
    });
});

[
    ["prToggleLeaks", "lightLeak"],
    ["prToggleChem", "chemStain"],
    ["prToggleAgedPaper", "agedPaper"],
    ["prToggleScratches", "scratches"]
].forEach(([id, key]) => {
    document.getElementById(id).addEventListener("click", async () => {
        printState.defects[key].active = !printState.defects[key].active;
        await persistCurrentFrameDefects();
        syncPrintControlsUI();
        updatePrintPreview();
    });
});

[
    ["prLeakInt", "lightLeak"],
    ["prChemInt", "chemStain"],
    ["prAgedInt", "agedPaper"],
    ["prScratchInt", "scratches"]
].forEach(([id, key]) => {
    document.getElementById(id).addEventListener("input", async (e) => {
        const val = parseFloat(e.target.value);
        printState.defects[key].intensity = val;
        if (val > 0) printState.defects[key].active = true;
        await persistCurrentFrameDefects();
        syncPrintControlsUI();
        updatePrintPreview();
    });
});

document.getElementById("rerollDefectsBtn").addEventListener("click", async () => {
    printState.defects.seed = Math.random();
    await persistCurrentFrameDefects();
    syncPrintControlsUI();
    updatePrintPreview();
});

document.getElementById("clearFrameDefectsBtn").addEventListener("click", async () => {
    const d = printState.defects;
    d.lightLeak = { active: false, intensity: 0 };
    d.chemStain = { active: false, intensity: 0 };
    d.agedPaper = { active: false, intensity: 0 };
    d.scratches = { active: false, intensity: 0 };
    await persistCurrentFrameDefects();
    syncPrintControlsUI();
    updatePrintPreview();
});

document.querySelectorAll("#borderSelector button").forEach(btn => {
    btn.addEventListener("click", () => {
        printState.presetId = "custom";
        printState.border = btn.dataset.border;
        updatePrintPreview();
        syncPrintControlsUI();
    });
});

const pStage = document.getElementById("printStage");
let stageDrag = { active: false, moved: false, startX: 0, startY: 0, startPanX: 0, startPanY: 0, holdTimer: null, rafPending: false };

pStage.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    stageDrag.active = true;
    stageDrag.moved = false;
    stageDrag.startX = e.clientX;
    stageDrag.startY = e.clientY;
    stageDrag.startPanX = printState.panX;
    stageDrag.startPanY = printState.panY;

    clearTimeout(stageDrag.holdTimer);
    stageDrag.holdTimer = setTimeout(() => {
        if (stageDrag.active && !stageDrag.moved) {
            printShowOriginal = true;
            updatePrintPreview();
        }
    }, 180);
});

window.addEventListener("pointermove", (e) => {
    if (!stageDrag.active) return;
    const dx = e.clientX - stageDrag.startX;
    const dy = e.clientY - stageDrag.startY;
    if (Math.hypot(dx, dy) > 6) {
        stageDrag.moved = true;
        clearTimeout(stageDrag.holdTimer);
        if (printShowOriginal) {
            printShowOriginal = false;
            updatePrintPreview();
        }
        if (printState.zoom > 1.01) {
            const dispMin = Math.max(100, Math.min(glCanvas.clientWidth, glCanvas.clientHeight));
            const maxPan = 0.5 * (1 - 1 / printState.zoom) + 0.15;
            printState.panX = Math.max(-maxPan, Math.min(maxPan, stageDrag.startPanX + (dx / dispMin)));
            printState.panY = Math.max(-maxPan, Math.min(maxPan, stageDrag.startPanY - (dy / dispMin)));
            if (!stageDrag.rafPending) {
                stageDrag.rafPending = true;
                requestAnimationFrame(() => {
                    stageDrag.rafPending = false;
                    updatePrintPreview();
                });
            }
        }
    }
});

function endStagePointer() {
    if (!stageDrag.active) return;
    stageDrag.active = false;
    clearTimeout(stageDrag.holdTimer);
    if (printShowOriginal) {
        printShowOriginal = false;
        updatePrintPreview();
    }
}
window.addEventListener("pointerup", endStagePointer);
window.addEventListener("pointercancel", endStagePointer);

document.getElementById("closePrintBtn").addEventListener("click", async () => {
    document.getElementById("printModal").classList.remove("open");
    if (activeFrameDirty && currentRoll && currentRoll.frames[activePrintIdx] && activePrintImg) {
        const frame = currentRoll.frames[activePrintIdx];
        renderFrameWithWebGL(activePrintImg, currentRoll.film, frame, currentRoll.pushStops, null, false, 480);
        frame.thumbBlob = await canvasToBlob(glCanvas, "image/jpeg", 0.82);
        await saveRollToDB(currentRoll);
        openContactSheet();
    }
});

document.getElementById("downloadPrintBtn").addEventListener("click", async () => {
    printShowOriginal = false;
    updatePrintPreview();

    const imgW = glCanvas.width;
    const imgH = glCanvas.height;
    const outCanvas = document.createElement("canvas");
    const ctx = outCanvas.getContext("2d");
    const paper = PAPER_STOCKS.find(p => p.id === printState.paperId) || PAPER_STOCKS[0];
    const agedActive = printState.defects.agedPaper.active && printState.defects.agedPaper.intensity > 0;
    const paperBgColor = agedActive ? "#e8d6b3" : paper.swatch;
    const exportJpegQ = qualityMode === "max" ? 0.98 : 0.93;

    if (printState.border === "none") {
        outCanvas.width = imgW;
        outCanvas.height = imgH;
        ctx.drawImage(glCanvas, 0, 0);
    } else if (printState.border === "white") {
        const pad = Math.round(imgW * printState.borderThickness);
        outCanvas.width = imgW + pad * 2;
        outCanvas.height = imgH + pad * 2;
        ctx.fillStyle = paperBgColor;
        ctx.fillRect(0, 0, outCanvas.width, outCanvas.height);
        ctx.drawImage(glCanvas, pad, pad);
    } else if (printState.border === "rebate") {
        const padX = Math.round(imgW * 0.045);
        const padY = Math.round(imgH * 0.085);
        outCanvas.width = imgW + padX * 2;
        outCanvas.height = imgH + padY * 2;
        ctx.fillStyle = "#060607";
        ctx.fillRect(0, 0, outCanvas.width, outCanvas.height);
        ctx.drawImage(glCanvas, padX, padY);

        ctx.fillStyle = "#e8e8ec";
        const holeW = Math.round(imgW * 0.032);
        const holeH = Math.round(padY * 0.36);
        const step = holeW * 2.1;
        for (let x = padX; x < outCanvas.width - padX; x += step) {
            ctx.beginPath();
            ctx.roundRect(x, Math.round(padY * 0.18), holeW, holeH, 4);
            ctx.roundRect(x, outCanvas.height - Math.round(padY * 0.54), holeW, holeH, 4);
            ctx.fill();
        }
        ctx.fillStyle = "#e09f3e";
        ctx.font = `bold ${Math.max(14, Math.round(padY * 0.22))}px "Courier New", monospace`;
        const frameLabel = `${String(currentRoll.frames[activePrintIdx].number).padStart(2, "0")}A   ${currentRoll.film.name.toUpperCase()}`;
        ctx.fillText(frameLabel, padX, outCanvas.height - Math.round(padY * 0.12));
    }

    const outBlob = await canvasToBlob(outCanvas, "image/jpeg", exportJpegQ);
    const slug = currentRoll.film.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadSingleBlob(outBlob, `print-${slug}-f${activePrintIdx + 1}.jpg`);
    outCanvas.width = 0; outCanvas.height = 0;

    if (currentRoll && currentRoll.frames[activePrintIdx]) {
        currentRoll.frames[activePrintIdx].savedLocally = true;
        activeFrameDirty = true;
        await saveRollToDB(currentRoll);
        await refreshStorageSummary();
    }
});

/* =========================================================
   11. LAB PELLICOLE
   ========================================================= */
let labEditingId = films[0].id;
let labSampleImg = null;
let labShowOriginal = false;
let isoDebounceTimer = null;
let labSnapshotFilms = null;
let labSnapshotSelectedId = null;

function getLabPresetBaseline(film) {
    const builtin = DEFAULT_FILMS.find(d => d.id === film.id);
    if (builtin) return builtin;
    if (film._presetDefaults) return film._presetDefaults;
    return {
        toe: 0.018, shoulder: 0.45, contrast: 0.34, temp: 0.0, tint: 0.0,
        saturation: film.mode === "bw" ? 0.0 : 1.0,
        halation: 0.28, bloom: 0.08, grain: 0.026, grainSize: 1.10
    };
}

function markFilmAsModifiedInLab(film) {
    const isDefault = DEFAULT_FILMS.some(d => d.id === film.id);
    if (isDefault && !film._nameEditedManually && !/\bcustom\b/i.test(film.name)) {
        film.name = film.name.trim() + " Custom";
        populateLabSelect();
    }
}

function buildDefaultLabSampleCanvas() {
    const c = document.createElement("canvas");
    c.width = 540; c.height = 360;
    const ctx = c.getContext("2d");

    const sky = ctx.createLinearGradient(0, 0, 0, 220);
    sky.addColorStop(0, "#1d3557");
    sky.addColorStop(0.55, "#457b9d");
    sky.addColorStop(0.88, "#f4a261");
    sky.addColorStop(1, "#fff6d6");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 540, 220);

    const sun = ctx.createRadialGradient(420, 68, 8, 420, 68, 72);
    sun.addColorStop(0, "#ffffff");
    sun.addColorStop(0.32, "#fff9dc");
    sun.addColorStop(0.7, "rgba(255, 210, 140, 0.35)");
    sun.addColorStop(1, "rgba(255, 210, 140, 0)");
    ctx.fillStyle = sun;
    ctx.fillRect(340, 0, 170, 150);

    const arch = ctx.createLinearGradient(0, 40, 170, 300);
    arch.addColorStop(0, "#0b0b0e");
    arch.addColorStop(1, "#242228");
    ctx.fillStyle = arch;
    ctx.fillRect(0, 40, 130, 260);
    ctx.fillStyle = "#ffe599";
    ctx.fillRect(42, 72, 22, 42);

    const grass = ctx.createLinearGradient(0, 215, 0, 305);
    grass.addColorStop(0, "#3b6e4c");
    grass.addColorStop(1, "#1e3a28");
    ctx.fillStyle = grass;
    ctx.fillRect(130, 215, 410, 90);

    ctx.fillStyle = "#2e353b";
    ctx.beginPath();
    ctx.ellipse(275, 290, 66, 52, 0, Math.PI, 0);
    ctx.fill();

    const skin = ctx.createRadialGradient(264, 150, 10, 275, 165, 58);
    skin.addColorStop(0, "#f5cfb3");
    skin.addColorStop(0.65, "#d8a07a");
    skin.addColorStop(1, "#9a6345");
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.ellipse(275, 165, 42, 52, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#251a14";
    ctx.beginPath();
    ctx.ellipse(275, 126, 44, 24, 0, Math.PI, 0);
    ctx.fill();
    ctx.fillStyle = "#1f1815";
    ctx.beginPath();
    ctx.arc(259, 160, 4, 0, Math.PI * 2);
    ctx.arc(291, 160, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#b05e52";
    ctx.fillRect(264, 188, 22, 4);

    ctx.fillStyle = "#121215";
    ctx.fillRect(0, 300, 540, 60);
    ["#c93b34", "#d97b29", "#e5c135", "#3d9956", "#3185b8", "#7e4fa3", "#c85b89"].forEach((col, i) => {
        ctx.fillStyle = col;
        ctx.fillRect(10 + i * 36, 308, 30, 22);
    });
    for (let g = 0; g < 8; g++) {
        const v = Math.round((g / 7) * 255);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        ctx.fillRect(272 + g * 32, 308, 28, 22);
    }
    ctx.fillStyle = "#98938a";
    ctx.font = 'bold 10px "Courier New", monospace';
    ctx.fillText("SKIN • HIGHLIGHT • SHADOW • COLOR & GRAY RAMP", 12, 349);

    return c;
}

function ensureLabSampleImage() {
    if (!labSampleImg) labSampleImg = buildDefaultLabSampleCanvas();
    return labSampleImg;
}

function renderLabPreview() {
    if (!document.getElementById("labModal").classList.contains("open")) return;
    const f = films.find(x => x.id === labEditingId) || films[0];
    const sample = ensureLabSampleImage();
    const previewCanvas = document.getElementById("labPreviewCanvas");

    renderFrameWithWebGL(
        sample,
        f,
        { exposureEV: 0, aperture: 2.8, defects: createDefaultFrameDefects(0.5) },
        0,
        null,
        labShowOriginal,
        640
    );

    previewCanvas.width = glCanvas.width;
    previewCanvas.height = glCanvas.height;
    previewCanvas.getContext("2d").drawImage(glCanvas, 0, 0);
}

function applyIsoPhysics(film, newIso) {
    const clampedIso = Math.max(12, Math.min(12800, Math.round(newIso)));
    const prevIso = Math.max(12, film.iso || 400);
    if (clampedIso === prevIso) return;

    const stops = Math.log2(clampedIso / prevIso);
    film.iso = clampedIso;
    film.grain = +Math.max(0.006, Math.min(0.095, film.grain * Math.pow(1.42, stops))).toFixed(3);
    film.grainSize = +Math.max(0.80, Math.min(2.25, film.grainSize + stops * 0.14)).toFixed(2);
    film.contrast = +Math.max(0.08, Math.min(0.82, film.contrast + stops * 0.032)).toFixed(2);
    film.toe = +Math.max(0.004, Math.min(0.055, film.toe + (stops > 0 ? stops * 0.0022 : stops * 0.0014))).toFixed(3);
    if (film.mode !== "bw") {
        film.saturation = +Math.max(0.60, Math.min(1.38, film.saturation * Math.pow(0.955, stops))).toFixed(2);
    }
    film.bloom = +Math.max(0.0, Math.min(0.65, film.bloom + stops * 0.015)).toFixed(2);
}

function openLabModal() {
    labSnapshotFilms = JSON.parse(JSON.stringify(films));
    labSnapshotSelectedId = selectedLoadFilmId;
    labEditingId = films.some(f => f.id === selectedLoadFilmId) ? selectedLoadFilmId : films[0].id;

    films.forEach(f => {
        delete f._nameEditedManually;
        if (f.mode === "instant") f.mode = "color";
        if (!DEFAULT_FILMS.some(d => d.id === f.id) && !f._presetDefaults) {
            f._presetDefaults = {
                toe: f.toe, shoulder: f.shoulder, contrast: f.contrast,
                temp: f.temp, tint: f.tint, saturation: f.saturation,
                halation: f.halation, bloom: f.bloom, grain: f.grain, grainSize: f.grainSize
            };
        }
    });

    populateLabSelect();
    syncLabForm();
    document.getElementById("labModal").classList.add("open");
    renderLabPreview();
}

function populateLabSelect() {
    const sel = document.getElementById("labFilmSelect");
    sel.innerHTML = "";
    films.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = `${f.name} (ISO ${f.iso})`;
        if (f.id === labEditingId) opt.selected = true;
        sel.appendChild(opt);
    });
}

function syncLabForm() {
    const f = films.find(x => x.id === labEditingId) || films[0];
    document.getElementById("edName").value = f.name;
    document.getElementById("edIso").value = f.iso;
    document.getElementById("edMode").value = f.mode === "instant" ? "color" : f.mode;

    document.querySelectorAll("#labIsoPresets .iso-chip").forEach(ch => {
        ch.classList.toggle("active", parseInt(ch.dataset.iso) === f.iso);
    });

    const theme = resolveFilmBrandTheme(f);
    document.getElementById("labBrandColorChip").style.background = theme.bg;
    document.getElementById("labBrandDetectedLabel").textContent = f.customColor
        ? `Colore personalizzato (${f.customColor})`
        : (theme.isRecognizedBrand ? `Marca rilevata: ${theme.brand}` : `Colore custom automatico (${theme.color})`);
    document.getElementById("edCustomColor").value = theme.color;

    const fields = [
        ["edToe", "vToe", f.toe, v => v.toFixed(3)],
        ["edShoulder", "vShoulder", f.shoulder, v => Math.round(v * 100) + "%"],
        ["edContrast", "vContrast", f.contrast, v => Math.round(v * 100) + "%"],
        ["edTemp", "vTemp", f.temp, v => (v > 0 ? "+" : "") + Math.round(v * 100)],
        ["edTint", "vTint", f.tint, v => (v > 0 ? "+" : "") + Math.round(v * 100)],
        ["edSat", "vSat", f.saturation, v => Math.round(v * 100) + "%"],
        ["edHalation", "vHalation", f.halation, v => Math.round(v * 100) + "%"],
        ["edBloom", "vBloom", f.bloom, v => Math.round(v * 100) + "%"],
        ["edGrain", "vGrain", f.grain, v => Math.round(v * 1000)],
        ["edGrainSize", "vGrainSize", f.grainSize, v => v.toFixed(2) + "x"]
    ];
    fields.forEach(([id, vid, val, fmt]) => {
        document.getElementById(id).value = val;
        document.getElementById(vid).textContent = fmt(val);
    });
    document.getElementById("jsonArea").value = JSON.stringify(f, null, 2);
}

const labPrevWrap = document.getElementById("labPreviewWrap");
labPrevWrap.addEventListener("pointerdown", (e) => { e.preventDefault(); labShowOriginal = true; renderLabPreview(); });
window.addEventListener("pointerup", () => { if (labShowOriginal) { labShowOriginal = false; renderLabPreview(); } });
window.addEventListener("pointercancel", () => { if (labShowOriginal) { labShowOriginal = false; renderLabPreview(); } });

document.getElementById("labSampleUpload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
            const maxD = 800;
            let w = img.width, h = img.height;
            if (w > maxD || h > maxD) {
                const r = Math.min(maxD / w, maxD / h);
                w = Math.round(w * r); h = Math.round(h * r);
            }
            const c = document.createElement("canvas");
            c.width = w; c.height = h;
            c.getContext("2d").drawImage(img, 0, 0, w, h);
            labSampleImg = c;
            renderLabPreview();
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
});

document.getElementById("labResetSampleBtn").addEventListener("click", () => {
    labSampleImg = buildDefaultLabSampleCanvas();
    renderLabPreview();
});

document.getElementById("labFilmSelect").addEventListener("change", (e) => {
    labEditingId = e.target.value;
    syncLabForm();
    renderLabPreview();
});

document.querySelectorAll("[data-reset-lab]").forEach(btn => {
    btn.addEventListener("click", () => {
        const prop = btn.dataset.resetLab;
        const f = films.find(x => x.id === labEditingId);
        const baseline = getLabPresetBaseline(f);
        if (typeof baseline[prop] === "number") {
            f[prop] = baseline[prop];
            syncLabForm();
            renderLabPreview();
        }
    });
});

[
    ["edToe", "toe"], ["edShoulder", "shoulder"], ["edContrast", "contrast"],
    ["edTemp", "temp"], ["edTint", "tint"], ["edSat", "saturation"],
    ["edHalation", "halation"], ["edBloom", "bloom"], ["edGrain", "grain"], ["edGrainSize", "grainSize"]
].forEach(([id, prop]) => {
    document.getElementById(id).addEventListener("input", (e) => {
        const f = films.find(x => x.id === labEditingId);
        f[prop] = parseFloat(e.target.value);
        markFilmAsModifiedInLab(f);
        syncLabForm();
        renderLabPreview();
    });
});

document.getElementById("edName").addEventListener("input", (e) => {
    const f = films.find(x => x.id === labEditingId);
    f._nameEditedManually = true;
    f.name = e.target.value || "Custom Film";
    populateLabSelect();
    syncLabForm();
});

function handleIsoChange(newVal) {
    const val = parseInt(newVal);
    if (isNaN(val) || val < 12) return;
    const f = films.find(x => x.id === labEditingId);
    if (val !== f.iso) {
        applyIsoPhysics(f, val);
        markFilmAsModifiedInLab(f);
    }
    populateLabSelect();
    syncLabForm();
    renderLabPreview();
}

document.getElementById("edIso").addEventListener("input", (e) => {
    clearTimeout(isoDebounceTimer);
    isoDebounceTimer = setTimeout(() => handleIsoChange(e.target.value), 500);
});
document.getElementById("edIso").addEventListener("change", (e) => {
    clearTimeout(isoDebounceTimer);
    handleIsoChange(e.target.value);
});

document.querySelectorAll("#labIsoPresets .iso-chip").forEach(btn => {
    btn.addEventListener("click", () => {
        clearTimeout(isoDebounceTimer);
        handleIsoChange(btn.dataset.iso);
    });
});

document.getElementById("edCustomColor").addEventListener("input", (e) => {
    const f = films.find(x => x.id === labEditingId);
    f.customColor = e.target.value;
    markFilmAsModifiedInLab(f);
    syncLabForm();
});

document.getElementById("labResetColorBtn").addEventListener("click", () => {
    const f = films.find(x => x.id === labEditingId);
    delete f.customColor;
    syncLabForm();
});

document.getElementById("edMode").addEventListener("change", (e) => {
    const f = films.find(x => x.id === labEditingId);
    f.mode = e.target.value;
    if (f.mode !== "bw" && f.saturation === 0) f.saturation = 1.0;
    markFilmAsModifiedInLab(f);
    syncLabForm();
    renderLabPreview();
});

document.getElementById("labNewBtn").addEventListener("click", () => {
    const base = JSON.parse(JSON.stringify(films.find(x => x.id === labEditingId)));
    base.id = "custom-" + Date.now();
    if (!/\bcustom\b/i.test(base.name)) base.name = base.name + " Custom";
    delete base.customColor;
    delete base._nameEditedManually;
    base._presetDefaults = {
        toe: base.toe, shoulder: base.shoulder, contrast: base.contrast,
        temp: base.temp, tint: base.tint, saturation: base.saturation,
        halation: base.halation, bloom: base.bloom, grain: base.grain, grainSize: base.grainSize
    };
    films.push(base);
    labEditingId = base.id;
    populateLabSelect();
    syncLabForm();
    renderLabPreview();
});

document.getElementById("copyJsonTemplateBtn").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(document.getElementById("jsonArea").value);
        alert("Ricetta JSON copiata negli appunti!");
    } catch (e) {
        document.getElementById("jsonArea").select();
        alert("Seleziona e copia il testo JSON qui sopra.");
    }
});

document.getElementById("importJsonBtn").addEventListener("click", () => {
    try {
        const parsed = JSON.parse(document.getElementById("jsonArea").value);
        if (!parsed.name || typeof parsed.shoulder !== "number") throw new Error();
        parsed.id = "imp-" + Date.now();
        if (parsed.mode === "instant") parsed.mode = "color";
        parsed._presetDefaults = {
            toe: parsed.toe, shoulder: parsed.shoulder, contrast: parsed.contrast,
            temp: parsed.temp, tint: parsed.tint, saturation: parsed.saturation,
            halation: parsed.halation, bloom: parsed.bloom, grain: parsed.grain, grainSize: parsed.grainSize
        };
        films.push(parsed);
        labEditingId = parsed.id;
        populateLabSelect();
        syncLabForm();
        renderLabPreview();
        alert("Pellicola importata nel catalogo!");
    } catch (e) {
        alert("JSON non valido.");
    }
});

document.getElementById("deleteFilmBtn").addEventListener("click", () => {
    if (films.length <= 1) return alert("Deve restare almeno una pellicola.");
    const target = films.find(x => x.id === labEditingId);
    const label = target ? target.name : "questa pellicola";
    if (!confirm(`Sei sicuro di voler eliminare definitivamente "${label}"?`)) return;

    films = films.filter(x => x.id !== labEditingId);
    labEditingId = films[0].id;
    if (selectedLoadFilmId === target?.id) selectedLoadFilmId = films[0].id;
    populateLabSelect();
    syncLabForm();
    renderLabPreview();
});

document.getElementById("openLabFromLoadBtn").addEventListener("click", openLabModal);

document.getElementById("cancelLabModalBtn").addEventListener("click", () => {
    if (labSnapshotFilms) {
        films = JSON.parse(JSON.stringify(labSnapshotFilms));
        selectedLoadFilmId = labSnapshotSelectedId || films[0].id;
    }
    document.getElementById("labModal").classList.remove("open");
    renderLoadView();
});

document.getElementById("closeLabModalBtn").addEventListener("click", () => {
    films.forEach(f => delete f._nameEditedManually);
    saveFilms();
    document.getElementById("labModal").classList.remove("open");
    renderLoadView();
});

/* =========================================================
   12. DIAGNOSTICA DISPOSITIVO, RISOLUZIONE, MEMORIA & GPU
   ========================================================= */
async function refreshDiagSummary() {
    const isHttps = window.isSecureContext;
    document.getElementById("diagHttps").textContent = isHttps ? "SÌ (Attivo)" : "NO (Locale)";
    document.getElementById("diagWebgl").textContent = `${MAX_GL_TEX} × ${MAX_GL_TEX} px`;

    try {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            const devs = await navigator.mediaDevices.enumerateDevices();
            const cams = devs.filter(d => d.kind === "videoinput");
            document.getElementById("diagCams").textContent = `${cams.length} sensori`;
        } else {
            document.getElementById("diagCams").textContent = "Non supportato";
        }
    } catch (e) {
        document.getElementById("diagCams").textContent = "N/D";
    }

    try {
        const rolls = await getAllRollsFromDB();
        const vRolls = await getAllVintageRollsFromDB();
        const pShots = await getAllPolaroidShotsFromDB();
        const totalFrames = rolls.reduce((acc, r) => acc + (r.frames ? r.frames.length : 0), 0)
            + vRolls.reduce((acc, r) => acc + (r.frames ? r.frames.length : 0), 0)
            + pShots.length;
        if (navigator.storage && navigator.storage.estimate) {
            const est = await navigator.storage.estimate();
            const usedMB = ((est.usage || 0) / (1024 * 1024)).toFixed(1);
            document.getElementById("diagMem").textContent = `${usedMB} MB (${totalFrames} scatti)`;
        } else {
            document.getElementById("diagMem").textContent = `${rolls.length + vRolls.length} rullini / ${totalFrames} scatti`;
        }
    } catch (e) {
        document.getElementById("diagMem").textContent = "N/D";
    }
}

document.getElementById("openDiagBtn").addEventListener("click", async () => {
    await refreshDiagSummary();
    document.getElementById("diagModal").classList.add("open");
});

document.getElementById("closeDiagBtn").addEventListener("click", () => {
    document.getElementById("diagModal").classList.remove("open");
});

document.getElementById("runDiagTestBtn").addEventListener("click", async () => {
    const log = document.getElementById("diagLog");
    log.textContent = "1/2 Verifica apertura sensore fotocamera ad alta risoluzione...";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment", width: { ideal: 4096 }, height: { ideal: 3072 } },
            audio: false
        });
        const tempVid = document.createElement("video");
        tempVid.playsInline = true;
        tempVid.muted = true;
        tempVid.srcObject = stream;
        await tempVid.play();
        await new Promise(r => setTimeout(r, 250));

        const sw = tempVid.videoWidth;
        const sh = tempVid.videoHeight;
        const mp = ((sw * sh) / 1000000).toFixed(1);
        document.getElementById("diagSensorRes").textContent = `${sw}×${sh} (${mp} MP)`;
        stream.getTracks().forEach(t => t.stop());
        log.textContent = `Sensore OK: ${sw}×${sh}px (${mp} MP). 2/2 Benchmark GPU WebGL...`;
    } catch (err) {
        document.getElementById("diagSensorRes").textContent = "Bloccato (Serve HTTPS)";
        log.textContent = `Camera non accessibile (${err.name}). 2/2 Benchmark GPU WebGL...`;
    }

    const testCanvas = document.createElement("canvas");
    testCanvas.width = 1800;
    testCanvas.height = 2400;
    const tCtx = testCanvas.getContext("2d");
    tCtx.fillStyle = "#7ea3b8";
    tCtx.fillRect(0, 0, 1800, 2400);

    const t0 = performance.now();
    renderFrameWithWebGL(
        testCanvas,
        films[0],
        { exposureEV: 0, aperture: 2.8, defects: createDefaultFrameDefects(0.5) },
        0,
        null,
        false,
        1800
    );
    if (gl) gl.finish();
    const dt = (performance.now() - t0).toFixed(1);
    document.getElementById("diagGpuTime").textContent = `${dt} ms (1800px)`;
    testCanvas.width = 0; testCanvas.height = 0;

    await refreshDiagSummary();
    log.textContent += ` Completato in ${dt} ms!`;
});

/* =========================================================
   13. AVVIO APP
   ========================================================= */
setQualityMode(qualityMode);
syncThirdsUI();
renderLoadView();

if (typeof initPolaroidEventListeners === "function") {
    initPolaroidEventListeners();
}
if (typeof initVintageEventListeners === "function") {
    initVintageEventListeners();
}

(async function boot() {
    try {
        await initDB();
    } catch (e) {
        console.warn("IndexedDB non disponibile, uso memoria temporanea:", e);
    }

    await refreshStorageSummary();
    await refreshHomeStatus();

    if (db) {
        await refreshArchiveList();
        if (typeof refreshVintageArchiveList === "function") {
            await refreshVintageArchiveList();
        }
        if (typeof refreshPolaroidGalleryBadge === "function") {
            await refreshPolaroidGalleryBadge();
        }
    }
})();
