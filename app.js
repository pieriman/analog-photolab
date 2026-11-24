/* =========================================================
   ANALOG PHOTOLAB v1.0.6 — APP.JS
   ========================================================= */

function onId(id, event, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
    return el;
}

function appWaitPaint() {
    return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
}

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
    },
    {
        id: "kodak-ektachrome-100", name: "Kodak Ektachrome E100", iso: 100, mode: "slide",
        toe: 0.008, shoulder: 0.30, contrast: 0.44, temp: -0.04, tint: 0.01,
        saturation: 1.16, shadowTemp: -0.04, highTemp: 0.02,
        halation: 0.16, halThreshold: 0.88, bloom: 0.05, grain: 0.016, grainSize: 0.95,
        matrix: [1.04, -0.02, -0.02, -0.01, 1.02, -0.01, -0.02, 0.01, 1.01]
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
        id: "ilford-rc-glossy",
        name: "Ilford MG RC Glossy",
        isBW: true,
        desc: "B&N Politeneata Lucida • Neri profondi, bianchi freddi",
        swatch: "#f7f8fa",
        baseTint: [0.99, 1.00, 1.02], shadowTint: [0.98, 0.99, 1.02], highTint: [1.00, 1.00, 1.01],
        dmax: 0.96, contrastOffset: 0.08, satMult: 1.0, texture: 0.004
    },
    {
        id: "ilford-rc-pearl",
        name: "Ilford MG RC Pearl",
        isBW: true,
        desc: "B&N Satinata/Perlata • Antiriflesso equilibrata",
        swatch: "#f3f2ef",
        baseTint: [1.00, 1.00, 0.99], shadowTint: [1.00, 0.99, 0.98], highTint: [1.00, 1.00, 0.99],
        dmax: 0.90, contrastOffset: 0.02, satMult: 1.0, texture: 0.014
    },
    {
        id: "ilford-fb-classic",
        name: "Ilford MG FB Classic",
        isBW: true,
        desc: "B&N Baritata Fibra • Tono neutro museale, neri vellutati",
        swatch: "#f4f1ea",
        baseTint: [1.01, 1.00, 0.96], shadowTint: [1.01, 0.99, 0.96], highTint: [1.02, 1.00, 0.97],
        dmax: 0.95, contrastOffset: 0.06, satMult: 1.0, texture: 0.026
    },
    {
        id: "ilford-fb-warm",
        name: "Ilford MG FB Warmtone",
        isBW: true,
        desc: "B&N Baritata Calda • Avorio e ombre brune (ottima per viraggi)",
        swatch: "#efe2c6",
        baseTint: [1.04, 0.97, 0.87], shadowTint: [1.07, 0.95, 0.83], highTint: [1.04, 0.98, 0.89],
        dmax: 0.91, contrastOffset: 0.04, satMult: 1.0, texture: 0.032
    },
    {
        id: "kodak-endura",
        name: "Kodak Endura Supra",
        isBW: false,
        desc: "RA-4 Satinata • Incarnati naturali e luci morbide",
        swatch: "#f6f1e6",
        baseTint: [1.01, 0.99, 0.95], shadowTint: [1.03, 0.99, 0.95], highTint: [1.02, 1.00, 0.96],
        dmax: 0.90, contrastOffset: -0.02, satMult: 0.98, texture: 0.016
    },
    {
        id: "kodak-metallic",
        name: "Kodak Endura Metallic",
        isBW: false,
        desc: "RA-4 Metallica • Riflessi perlescenti, contrasto e saturazione",
        swatch: "#eef1f5",
        baseTint: [1.00, 1.01, 1.03], shadowTint: [0.97, 0.99, 1.04], highTint: [1.03, 1.02, 1.00],
        dmax: 0.98, contrastOffset: 0.16, satMult: 1.22, texture: 0.006
    },
    {
        id: "fuji-crystal-glossy",
        name: "Fuji Crystal Archive Glossy",
        isBW: false,
        desc: "RA-4 Lucida • Bianchi freddi puri, colori vivi e nitidi",
        swatch: "#f0f5fc",
        baseTint: [0.96, 0.99, 1.04], shadowTint: [0.93, 0.98, 1.07], highTint: [0.98, 1.00, 1.03],
        dmax: 0.96, contrastOffset: 0.10, satMult: 1.14, texture: 0.004
    },
    {
        id: "fuji-crystal-matte",
        name: "Fuji Crystal Archive Matte",
        isBW: false,
        desc: "RA-4 Opaca • Zero riflessi, neri morbidi editoriali",
        swatch: "#f4f2ed",
        baseTint: [1.00, 0.99, 0.97], shadowTint: [1.02, 1.00, 0.98], highTint: [1.00, 0.99, 0.97],
        dmax: 0.78, contrastOffset: -0.06, satMult: 0.92, texture: 0.028
    },
    {
        id: "ilfochrome-classic",
        name: "Ilfochrome / Cibachrome",
        isBW: false,
        desc: "Diapositiva Diretta • Poliestere lucido, contrasto e neri assoluti",
        swatch: "#f4f6fa",
        baseTint: [0.99, 1.00, 1.02], shadowTint: [0.95, 0.98, 1.05], highTint: [1.01, 1.01, 1.00],
        dmax: 0.99, contrastOffset: 0.20, satMult: 1.25, texture: 0.002
    }
];

const PRINT_PRESETS = [
    { id: "lab-std", name: "Lab RA-4 Neutro", sub: "Endura Satinata • Colore fedele", paperId: "kodak-endura", time: 12.0, grade: 2.5, cyan: 0, mag: 0, yel: 0, burn: 0.10, border: "none", tonerType: 0, tonerAmount: 0 },
    { id: "bw-portrait", name: "Ritratto Baritata Calda", sub: "Ilford FB Warm • Gr. 2.0 morbida", paperId: "ilford-fb-warm", time: 11.5, grade: 2.0, cyan: 0, mag: 0, yel: 0, burn: 0.18, border: "white", tonerType: 2, tonerAmount: 0.18 },
    { id: "bw-street", name: "Street B&N Contrasto Duro", sub: "RC Lucida Gr. 3.5 + Selenio", paperId: "ilford-rc-glossy", time: 13.0, grade: 3.5, cyan: 0, mag: 0, yel: 0, burn: 0.30, border: "white", tonerType: 1, tonerAmount: 0.45 },
    { id: "vivid-gallery", name: "Galleria Alta Brillantezza", sub: "Fuji Crystal Lucida • Marginatore", paperId: "fuji-crystal-glossy", time: 13.0, grade: 2.5, cyan: 0, mag: 0, yel: 0, burn: 0.22, border: "white", tonerType: 0, tonerAmount: 0 }
];

const ENLARGER_APERTURES = [2.8, 4.0, 5.6, 8.0, 11, 16];

function loadSavedFilmsSafe() {
    const keys = ["analog_lab_films_v10", "analog_lab_films_v9", "analog_lab_films_v7"];
    for (const k of keys) {
        try {
            const raw = localStorage.getItem(k);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch (e) { }
    }
    return JSON.parse(JSON.stringify(DEFAULT_FILMS));
}

let films = loadSavedFilmsSafe().filter(f => f && f.id !== "polaroid-600" && f.mode !== "instant");
if (films.length === 0) films = JSON.parse(JSON.stringify(DEFAULT_FILMS));
function saveFilms() { localStorage.setItem("analog_lab_films_v10", JSON.stringify(films)); }

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

async function loadFastThumbnailSource(srcOrBlob, maxWidth = 500) {
    if (typeof createImageBitmap === "function" && srcOrBlob instanceof Blob) {
        try {
            return await createImageBitmap(srcOrBlob, { resizeWidth: maxWidth });
        } catch (e) { }
    }
    return await loadImageFromSource(srcOrBlob);
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
                + measureItemBytes(f.negThumbBlob)
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

onId("cleanDiscardsBtn", "click", async () => {
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

onId("cleanSavedBtn", "click", async () => {
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

onId("clearAllStorageBtn", "click", async () => {
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

onId("exportBackupBtn", "click", async () => {
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
            if (fc.negThumbBlob instanceof Blob) { fc.negThumbDataUrl = await blobToDataUrl(fc.negThumbBlob); delete fc.negThumbBlob; }
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
        app: "AnalogPhotoLab", version: "1.0", exportedAt: new Date().toISOString(),
        films, rolls: serRolls, vintageRolls: serVRolls, polaroidShots: serPShots
    };
    const blob = new Blob([JSON.stringify(backupPayload)], { type: "application/json" });
    downloadSingleBlob(blob, `analog-photolab-backup-${new Date().toISOString().slice(0, 10)}.json`);
});

onId("importBackupInput", "change", (e) => {
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
                    if (f.negThumbDataUrl && !f.negThumbBlob) { f.negThumbBlob = await dataUrlToBlob(f.negThumbDataUrl); delete f.negThumbDataUrl; }
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

function playFilmRewindSound(durationSec = 1.2) {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const slideEnd = Math.max(0.4, durationSec - 0.16);

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
        slideGain.gain.linearRampToValueAtTime(0.16, now + 0.1);
        slideGain.gain.setValueAtTime(0.16, now + slideEnd - 0.15);
        slideGain.gain.exponentialRampToValueAtTime(0.001, now + slideEnd);
        slideNoise.connect(bp); bp.connect(slideGain); slideGain.connect(ctx.destination);
        slideNoise.start(now);

        let tCursor = 0.03;
        let stepIdx = 0;
        while (tCursor < slideEnd - 0.06) {
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

        const snapTime = now + slideEnd + 0.02;
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
   4. MOTORE WEBGL (FULL-RES + PRE-SCALE + SICUREZZA GPU)
   ========================================================= */
const glCanvas = document.getElementById("printCanvas");
const gl = glCanvas
    ? (glCanvas.getContext("webgl", { preserveDrawingBuffer: true, alpha: false, antialias: false })
        || glCanvas.getContext("experimental-webgl", { preserveDrawingBuffer: true, alpha: false }))
    : null;
const RAW_MAX_GL_TEX = gl ? (gl.getParameter(gl.MAX_TEXTURE_SIZE) || 4096) : 2048;
const MAX_GL_TEX = Math.min(4096, RAW_MAX_GL_TEX);

let program = null;
let glTex = null;

function initWebGLPipeline() {
    if (!gl) return false;
    function compileShader(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error("Shader compile error:", gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }
    const vsEl = document.getElementById("vs");
    const fsEl = document.getElementById("fs");
    if (!vsEl || !fsEl) return false;

    const vShader = compileShader(gl.VERTEX_SHADER, vsEl.text);
    const fShader = compileShader(gl.FRAGMENT_SHADER, fsEl.text);
    if (!vShader || !fShader) return false;

    program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program));
        program = null;
        return false;
    }
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
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, glTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.uniform1i(gl.getUniformLocation(program, "u_image"), 0);
    return true;
}

if (glCanvas) {
    glCanvas.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        console.warn("WebGL context lost");
    });
    glCanvas.addEventListener("webglcontextrestored", () => {
        initWebGLPipeline();
    });
}
initWebGLPipeline();

function getDefaultPaperIdForFilm(film) {
    if (!film) return "kodak-endura";
    if (film.mode === "bw") return "ilford-rc-glossy";
    if (film.mode === "slide") return "ilfochrome-classic";
    return "kodak-endura";
}

function renderFrameWithWebGL(imgElement, film, frameData, pushStops = 0, printOpts = null, showOrig = false, customMaxDim = null, negativeMode = 0) {
    let srcW = imgElement.naturalWidth || imgElement.width;
    let srcH = imgElement.naturalHeight || imgElement.height;
    if (!gl || !program || gl.isContextLost() || !srcW || !srcH) {
        if (glCanvas && srcW && srcH) {
            glCanvas.width = srcW;
            glCanvas.height = srcH;
        }
        return;
    }

    gl.useProgram(program);

    let uploadSource = imgElement;
    let tempPreScale = null;
    if (srcW > MAX_GL_TEX || srcH > MAX_GL_TEX) {
        const sc = Math.min(MAX_GL_TEX / srcW, MAX_GL_TEX / srcH);
        const nw = Math.round(srcW * sc);
        const nh = Math.round(srcH * sc);
        tempPreScale = document.createElement("canvas");
        tempPreScale.width = nw;
        tempPreScale.height = nh;
        tempPreScale.getContext("2d").drawImage(imgElement, 0, 0, nw, nh);
        uploadSource = tempPreScale;
        srcW = nw;
        srcH = nh;
    }

    const targetMaxDim = Math.min(MAX_GL_TEX, customMaxDim || Math.max(srcW, srcH));
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
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, glTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, uploadSource);
    gl.uniform1i(gl.getUniformLocation(program, "u_image"), 0);
    if (tempPreScale) { tempPreScale.width = 0; tempPreScale.height = 0; }

    const isBW = film.mode === "bw";
    const isSlide = film.mode === "slide";

    const ap = frameData.aperture || 4.0;
    const optics = frameData.optics || {};
    const enlargerApIdx = (printOpts && typeof printOpts.enlargerApIdx === "number") ? printOpts.enlargerApIdx : 3;
    const enlargerEvShift = printOpts ? (3 - enlargerApIdx) * 0.35 : 0.0;
    const enlargerEdgeVig = enlargerApIdx <= 1 ? (2 - enlargerApIdx) * 0.12 : 0.0;
    const enlargerSoft = enlargerApIdx === 0 ? 0.30 : (enlargerApIdx === 5 ? 0.12 : 0.0);

    const lensVignette = (ap <= 2.0 ? 0.34 : (ap <= 2.8 ? 0.18 : 0.05)) + enlargerEdgeVig;
    const lensSoftness = (ap <= 1.8 ? 0.75 : (ap <= 2.8 ? 0.30 : 0.0)) + (optics.softness || 0) + enlargerSoft;

    const defaultPid = getDefaultPaperIdForFilm(film);
    const paper = printOpts
        ? (PAPER_STOCKS.find(p => p.id === printOpts.paperId) || PAPER_STOCKS.find(p => p.id === defaultPid) || PAPER_STOCKS[0])
        : (PAPER_STOCKS.find(p => p.id === defaultPid) || PAPER_STOCKS[0]);

    const timerEV = printOpts ? Math.log2(printOpts.time / 12.0) : 0.0;
    const gradeDelta = (printOpts && paper.isBW) ? (printOpts.grade - 2.5) * 0.15 : 0.0;

    const dirSign = isSlide ? -1.0 : 1.0;
    const cyanShift = (printOpts && !paper.isBW) ? (printOpts.cyan || 0) * 0.008 * dirSign : 0.0;
    const magShift = (printOpts && !paper.isBW) ? (printOpts.mag || 0) * 0.008 * dirSign : 0.0;
    const yelShift = (printOpts && !paper.isBW) ? (printOpts.yel || 0) * 0.008 * dirSign : 0.0;

    const edgeBurn = printOpts ? printOpts.burn : 0.08;
    const grainScale = printOpts ? (printOpts.grainScale || 1.0) : 1.0;
    const paperTexScale = (printOpts && typeof printOpts.paperTexScale === "number") ? printOpts.paperTexScale : 1.0;

    const frameDef = ensureFrameDefects(frameData);
    const activeDef = (printOpts && printOpts.defects) ? printOpts.defects : frameDef;

    const seed = typeof activeDef.seed === "number" ? activeDef.seed : 0.42;
    const lightLeakAmount = activeDef.lightLeak.active ? activeDef.lightLeak.intensity : 0.0;
    const chemStainAmount = activeDef.chemStain.active ? activeDef.chemStain.intensity : 0.0;
    const agedPaperAmount = activeDef.agedPaper.active ? activeDef.agedPaper.intensity : 0.0;
    const scratchesAmount = activeDef.scratches.active ? activeDef.scratches.intensity : 0.0;

    const effectiveExp = (frameData.exposureEV || 0) + (pushStops * 0.55) + timerEV + enlargerEvShift;
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
    gl.uniform1f(gl.getUniformLocation(program, "u_fadeBlack"), optics.fadeBlack || 0.0);

    const rGain = 1.0 + film.temp * 0.75 + film.tint * 0.35 + cyanShift * 0.75 - magShift * 0.25 - yelShift * 0.25;
    const gGain = 1.0 - film.tint * 0.55 - cyanShift * 0.25 + magShift * 0.75 - yelShift * 0.25;
    const bGain = 1.0 - film.temp * 0.75 + film.tint * 0.35 - cyanShift * 0.25 - magShift * 0.25 + yelShift * 0.85;
    gl.uniform3f(gl.getUniformLocation(program, "u_wbGain"), Math.max(0.25, rGain), Math.max(0.25, gGain), Math.max(0.25, bGain));

    gl.uniform1i(gl.getUniformLocation(program, "u_isBW"), isBW ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, "u_orthoBW"), optics.orthoBW ? 1 : 0);
    gl.uniformMatrix3fv(gl.getUniformLocation(program, "u_colorMatrix"), false, new Float32Array(film.matrix || [1, 0, 0, 0, 1, 0, 0, 0, 1]));
    gl.uniform1f(gl.getUniformLocation(program, "u_saturation"), (isSlide ? film.saturation * 1.12 : film.saturation) * paper.satMult);

    gl.uniform3f(gl.getUniformLocation(program, "u_shadowTint"), 1.0 + film.shadowTemp * 0.45, 1.0 + Math.abs(film.shadowTemp) * 0.08, 1.0 - film.shadowTemp * 0.45);
    gl.uniform3f(gl.getUniformLocation(program, "u_highlightTint"), 1.0 + film.highTemp * 0.45, 1.0 + film.highTemp * 0.12, 1.0 - film.highTemp * 0.45);
    gl.uniform3f(gl.getUniformLocation(program, "u_bwWeights"), 0.34, 0.56, 0.10);

    const grade = frameData.grade || {};
    const sLift = grade.shadowLift || [0.0, 0.0, 0.0];
    const mGain = grade.midGain || [1.0, 1.0, 1.0];
    const hGain = grade.highGain || [1.0, 1.0, 1.0];
    gl.uniform3fv(gl.getUniformLocation(program, "u_shadowLift"), new Float32Array(sLift));
    gl.uniform3fv(gl.getUniformLocation(program, "u_midGain"), new Float32Array(mGain));
    gl.uniform3fv(gl.getUniformLocation(program, "u_highGain"), new Float32Array(hGain));

    gl.uniform1f(gl.getUniformLocation(program, "u_halation"), film.halation);
    gl.uniform1f(gl.getUniformLocation(program, "u_halThreshold"), film.halThreshold);
    gl.uniform3f(gl.getUniformLocation(program, "u_halationColor"), 0.96, 0.18, 0.04);
    gl.uniform1f(gl.getUniformLocation(program, "u_bloom"), film.bloom);

    gl.uniform1f(gl.getUniformLocation(program, "u_lensVignette"), lensVignette);
    gl.uniform1f(gl.getUniformLocation(program, "u_lensSoftness"), lensSoftness);
    gl.uniform1f(gl.getUniformLocation(program, "u_chromaticAberration"), optics.ca || 0.0);
    gl.uniform1f(gl.getUniformLocation(program, "u_barrelDistort"), optics.barrel || 0.0);
    gl.uniform1f(gl.getUniformLocation(program, "u_flashFalloff"), optics.flashFalloff || 0.0);

    gl.uniform1i(gl.getUniformLocation(program, "u_paperIsBW"), (negativeMode === 0 && paper.isBW) ? 1 : 0);
    gl.uniform1f(gl.getUniformLocation(program, "u_paperDmax"), paper.dmax);
    gl.uniform3fv(gl.getUniformLocation(program, "u_paperBaseTint"), new Float32Array(paper.baseTint));
    gl.uniform3fv(gl.getUniformLocation(program, "u_paperShadowTint"), new Float32Array(paper.shadowTint || [1, 1, 1]));
    gl.uniform3fv(gl.getUniformLocation(program, "u_paperHighTint"), new Float32Array(paper.highTint || [1, 1, 1]));
    gl.uniform1f(gl.getUniformLocation(program, "u_paperTexture"), (paper.texture || 0.01) * paperTexScale);
    gl.uniform1f(gl.getUniformLocation(program, "u_edgeBurn"), edgeBurn);
    gl.uniform1f(gl.getUniformLocation(program, "u_tonerType"), printOpts ? (printOpts.tonerType || 0) : 0);
    gl.uniform1f(gl.getUniformLocation(program, "u_tonerAmount"), printOpts ? (printOpts.tonerAmount || 0) : 0);
    gl.uniform1i(gl.getUniformLocation(program, "u_testStrip"), (printOpts && printOpts.testStrip && negativeMode === 0) ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, "u_negativeMode"), negativeMode || 0);

    gl.uniform1f(gl.getUniformLocation(program, "u_defectSeed"), seed);
    gl.uniform1f(gl.getUniformLocation(program, "u_lightLeakAmount"), lightLeakAmount);
    gl.uniform1f(gl.getUniformLocation(program, "u_chemStainAmount"), chemStainAmount);
    gl.uniform1f(gl.getUniformLocation(program, "u_agedPaperAmount"), agedPaperAmount);
    gl.uniform1f(gl.getUniformLocation(program, "u_scratchesAmount"), scratchesAmount);

    gl.uniform1f(gl.getUniformLocation(program, "u_grain"), effectiveGrain);
    gl.uniform1f(gl.getUniformLocation(program, "u_grainSize"), effectiveGrainSize);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

/* =========================================================
   5. TRIANGOLO ESPOSIZIONE, MODALITÀ M + LANCETTA
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
let measuredSceneEV100 = 9.0;
let meterInterval = null;

let isShutterArmed = false;
let flashActive = false;
let isCapturing = false;
let isRewinding = false;
let rollPendingCount = 0;
let rollSaveQueue = Promise.resolve();
let hardwareFlashSupport = { hasTorch: false, hasPhotoFlash: false, canTakePhoto: false };

let thirdsVisible = localStorage.getItem("analog_lab_thirds_v7") === "1";
function syncThirdsUI() {
    const vfGrid = document.getElementById("vfThirdsGrid");
    const vfBtn = document.getElementById("vfThirdsToggleBtn");
    if (vfGrid) vfGrid.classList.toggle("visible", thirdsVisible);
    if (vfBtn) vfBtn.classList.toggle("active", thirdsVisible);
}
onId("vfThirdsToggleBtn", "click", () => {
    thirdsVisible = !thirdsVisible;
    localStorage.setItem("analog_lab_thirds_v7", thirdsVisible ? "1" : "0");
    syncThirdsUI();
});

function detectFlashCapabilities() {
    hardwareFlashSupport = { hasTorch: false, hasPhotoFlash: false, canTakePhoto: false };
}

function getEffectiveRollCount() {
    if (!currentRoll) return 0;
    return currentRoll.frames.length + rollPendingCount;
}

function setShutterArmedState(armed) {
    isShutterArmed = armed;
    const leverBtn = document.getElementById("advanceLeverBtn");
    const shutterBtn = document.getElementById("shutterBtn");
    const cockDot = document.getElementById("waCockDot");
    const cockBadge = document.getElementById("vfCockBadge");
    const shutterLbl = document.getElementById("shutterMechLabel");
    const leverTxt = document.getElementById("leverStatusTxt");

    const rollFull = currentRoll && getEffectiveRollCount() >= currentRoll.capacity;
    if (rollFull) {
        if (leverBtn) leverBtn.classList.remove("armed", "needs-cock");
        if (shutterBtn) shutterBtn.classList.add("locked");
        if (cockDot) cockDot.classList.remove("armed");
        if (cockBadge) { cockBadge.classList.remove("armed"); cockBadge.textContent = "RULLINO FINITO • RIAVVOLGI"; }
        if (shutterLbl) shutterLbl.textContent = "FINE";
        if (leverTxt) leverTxt.textContent = "FINE";
        return;
    }

    if (armed) {
        if (leverBtn) { leverBtn.classList.remove("needs-cock"); leverBtn.classList.add("armed"); }
        if (shutterBtn) shutterBtn.classList.remove("locked");
        if (cockDot) cockDot.classList.add("armed");
        if (cockBadge) { cockBadge.classList.add("armed"); cockBadge.textContent = "OTTURATORE ARMATO"; }
        if (shutterLbl) shutterLbl.textContent = "SCATTA";
        if (leverTxt) leverTxt.textContent = "CARICO";
    } else {
        if (leverBtn) { leverBtn.classList.remove("armed"); leverBtn.classList.add("needs-cock"); }
        if (shutterBtn) shutterBtn.classList.add("locked");
        if (cockDot) cockDot.classList.remove("armed");
        if (cockBadge) { cockBadge.classList.remove("armed"); cockBadge.textContent = "TIRA LEVA PER CARICARE"; }
        if (shutterLbl) shutterLbl.textContent = "BLOCCATO";
        if (leverTxt) leverTxt.textContent = "CARICA";
    }
}

onId("advanceLeverBtn", "click", () => {
    if (isRewinding || (currentRoll && getEffectiveRollCount() >= currentRoll.capacity)) {
        playLockedShutterTick();
        return;
    }
    if (isShutterArmed) {
        playLockedShutterTick();
        return;
    }
    const leverBtn = document.getElementById("advanceLeverBtn");
    if (leverBtn) leverBtn.classList.add("cocking");
    playAdvanceLeverSound();
    setTimeout(() => {
        if (leverBtn) leverBtn.classList.remove("cocking");
        setShutterArmedState(true);
    }, 220);
});

onId("flashToggleBtn", "click", () => {
    flashActive = !flashActive;
    const btn = document.getElementById("flashToggleBtn");
    if (btn) btn.classList.toggle("active", flashActive);
    const lbl = document.getElementById("flashBtnLabel");
    if (lbl) lbl.textContent = flashActive ? "FLASH: ON" : "FLASH: OFF";
    playLockedShutterTick();
    recalculateExposureTriangle();
});

const meterCanvas = document.createElement("canvas");
meterCanvas.width = 16;
meterCanvas.height = 16;
const meterCtx = meterCanvas.getContext("2d", { willReadFrequently: true });

function sampleLiveSceneEV() {
    const video = document.getElementById("camVideo");
    if (mediaStream && video && video.readyState >= 2 && video.videoWidth > 0) {
        meterCtx.drawImage(video, 0, 0, 16, 16);
        const data = meterCtx.getImageData(0, 0, 16, 16).data;
        let sum = 0;
        for (let i = 0; i < data.length; i += 4) sum += (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
        const avg = sum / 256;
        if (avg > 0.005) {
            measuredSceneEV100 = 9.0 + Math.log2(avg / 0.18) * 1.6;
        }
    } else {
        measuredSceneEV100 = 9.0;
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
        hudSt.textContent = facingMode === "user" ? "FLASH SCHERMO ⚡" : "FLASH PRONTO ⚡";
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

onId("apertureSteppedSlider", "input", (e) => {
    selectedApertureIdx = parseInt(e.target.value);
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

onId("shutterSteppedSlider", "input", (e) => {
    selectedShutterIdx = parseInt(e.target.value);
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

onId("resetApertureBtn", "click", () => {
    selectedApertureIdx = 3;
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

onId("resetShutterBtn", "click", () => {
    selectedShutterIdx = 3;
    buildSteppedCameraSliders();
    recalculateExposureTriangle();
});

onId("resetCamEvBtn", "click", () => {
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
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");
    if (viewId !== "view-camera" && viewId !== "view-vintage-camera" && viewId !== "view-polaroid") {
        stopCamera();
        if (meterInterval) { clearInterval(meterInterval); meterInterval = null; }
    }
}

async function refreshHomeStatus() {
    const rolls = await getAllRollsFromDB();
    const vRolls = typeof getAllVintageRollsFromDB === "function" ? await getAllVintageRollsFromDB() : [];
    const pShots = typeof getAllPolaroidShotsFromDB === "function" ? await getAllPolaroidShotsFromDB() : [];

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

    const pBadge = document.getElementById("homePolaroidStatusBadge");
    const pGalBtn = document.getElementById("homePolaroidGalleryBtn");
    if (pBadge) pBadge.textContent = `${pShots.length} ${pShots.length === 1 ? "istantanea" : "istantanee"}`;
    if (pGalBtn) pGalBtn.textContent = `Galleria (${pShots.length})`;

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
    await rollSaveQueue.catch(() => { });
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

onId("pathRollsBtn", "click", () => {
    getAudioCtx();
    enterRollsSection();
});

onId("homeRollsArchiveBtn", "click", async (e) => {
    e.stopPropagation();
    await refreshArchiveList();
    renderLoadView();
    switchView("view-load");
});

onId("pathPolaroidBtn", "click", () => {
    getAudioCtx();
    if (typeof enterPolaroidMode === "function") enterPolaroidMode();
});

onId("homePolaroidGalleryBtn", "click", (e) => {
    e.stopPropagation();
    if (typeof openPolaroidGallery === "function") openPolaroidGallery();
});

onId("pathDisposableBtn", "click", () => {
    getAudioCtx();
    if (typeof enterDisposableSection === "function") enterDisposableSection();
});

onId("homeDisposableArchiveBtn", "click", async (e) => {
    e.stopPropagation();
    if (typeof refreshVintageArchiveList === "function") await refreshVintageArchiveList();
    switchView("view-disposable-load");
});

onId("backHomeFromLoadBtn", "click", () => {
    refreshHomeStatus();
    switchView("view-home");
});

onId("openLabFromRollsBtn", "click", openLabModal);

function renderLoadView() {
    const grid = document.getElementById("loadFilmGrid");
    if (!grid) return;
    grid.innerHTML = "";
    films.forEach(f => {
        const theme = resolveFilmBrandTheme(f);
        const div = document.createElement("div");
        div.className = "film-option" + (f.id === selectedLoadFilmId ? " selected" : "");
        div.style.setProperty("--brand-color", theme.color);
        const modeTxt = f.mode === "bw" ? "Bianco & Nero"
            : (f.mode === "slide" ? "Diapositiva (E-6)" : "Negativo Colore (C-41)");

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

async function refreshArchiveList() {
    const rolls = await getAllRollsFromDB();
    const developed = rolls.filter(r => r.status === "developed").sort((a, b) => b.createdAt - a.createdAt);
    const list = document.getElementById("archiveList");
    const emptyMsg = document.getElementById("archiveEmptyMsg");
    const countEl = document.getElementById("archiveCount");
    if (!list || !emptyMsg || !countEl) return;

    countEl.textContent = `${developed.length} ${developed.length === 1 ? "rullino" : "rullini"}`;
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
      <span style="color:var(--gold); font-size:12px; font-weight:700;">Tavolo Luminoso →</span>
    `;
        item.addEventListener("click", () => { currentRoll = roll; openContactSheet(); });
        list.appendChild(item);
    });
}

onId("loadRollBtn", "click", async () => {
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
    refreshHomeStatus().catch(() => { });
    enterCameraMode();
});

/* =========================================================
   7. FOTOCAMERA LIVE & ACQUISIZIONE ISTANTANEA
   ========================================================= */
async function startCamera() {
    stopCamera();
    const video = document.getElementById("camVideo");
    const fallback = document.getElementById("camFallbackMsg");
    const videoConstraints = { facingMode: facingMode, width: { ideal: 2560 }, height: { ideal: 1920 } };
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
        video.srcObject = mediaStream;
        video.style.display = "block";
        try { await video.play(); } catch (e) { }
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
    if (!currentRoll) return;
    const theme = resolveFilmBrandTheme(currentRoll.film);
    const canister = document.getElementById("camFilmCanister");
    canister.style.background = theme.bg;
    canister.style.color = theme.text;
    document.getElementById("camFilmBrand").textContent = `${theme.brand} • ${currentRoll.film.iso}`;
    document.getElementById("camFilmBadge").textContent = currentRoll.film.name;

    const cur = String(Math.min(currentRoll.capacity, getEffectiveRollCount())).padStart(2, "0");
    const tot = String(currentRoll.capacity).padStart(2, "0");
    document.getElementById("camCounter").textContent = `${cur} / ${tot}`;

    const isFull = getEffectiveRollCount() >= currentRoll.capacity;
    document.getElementById("rewindEarlyBtn").classList.toggle("pulse-finish", isFull);
    document.getElementById("rollFinishedOverlay").classList.toggle("open", isFull && !isRewinding);
}

function enterCameraMode() {
    isRewinding = false;
    rollPendingCount = 0;
    camCompEV = 0.0;
    document.getElementById("camExpSlider").value = 0;
    document.getElementById("camExpVal").textContent = "0.0";
    document.getElementById("rollFinishedOverlay").classList.remove("open");
    document.getElementById("rewindAnimOverlay").classList.remove("open");

    syncThirdsUI();
    setShutterArmedState(false);
    buildSteppedCameraSliders();
    updateCameraHUD();
    switchView("view-camera");
    startCamera();
    sampleLiveSceneEV();
    if (meterInterval) clearInterval(meterInterval);
    meterInterval = setInterval(sampleLiveSceneEV, 400);
}

onId("camHomeBtn", "click", async () => {
    if (isRewinding) return;
    await rollSaveQueue.catch(() => { });
    refreshHomeStatus();
    refreshStorageSummary();
    switchView("view-home");
});

onId("camExpSlider", "input", (e) => {
    camCompEV = parseFloat(e.target.value);
    document.getElementById("camExpVal").textContent = (camCompEV > 0 ? "+" : "") + camCompEV.toFixed(1);
    recalculateExposureTriangle();
});

onId("switchCamBtn", "click", () => {
    facingMode = facingMode === "environment" ? "user" : "environment";
    startCamera();
});

function drawCroppedToCanvas(sourceObj, srcW, srcH, targetRatio, mirror = false, maxLongSide = 2400) {
    let sx = 0, sy = 0, sw = srcW, sh = srcH;
    if (srcW / srcH > targetRatio) {
        sw = Math.round(srcH * targetRatio);
        sx = Math.round((srcW - sw) / 2);
    } else {
        sh = Math.round(srcW / targetRatio);
        sy = Math.round((srcH - sh) / 2);
    }
    let dw = sw, dh = sh;
    if (maxLongSide && (dw > maxLongSide || dh > maxLongSide)) {
        const s = Math.min(maxLongSide / dw, maxLongSide / dh);
        dw = Math.round(dw * s);
        dh = Math.round(dh * s);
    }
    const c = document.createElement("canvas");
    c.width = dw;
    c.height = dh;
    const ctx = c.getContext("2d");
    if (mirror) { ctx.translate(dw, 0); ctx.scale(-1, 1); }
    ctx.drawImage(sourceObj, sx, sy, sw, sh, 0, 0, dw, dh);
    return c;
}

async function captureFrameInstant(video, targetRatio, useFlash = false) {
    const mirror = facingMode === "user";
    if (useFlash && facingMode === "user") {
        const frontFlash = document.getElementById("frontScreenFlash");
        if (frontFlash) frontFlash.classList.add("lit");
        await new Promise(r => setTimeout(r, 90));
        const c = drawCroppedToCanvas(video, video.videoWidth, video.videoHeight, targetRatio, mirror, 2400);
        if (frontFlash) frontFlash.classList.remove("lit");
        return { canvas: c, hardwareFlashFired: true };
    }
    const c = drawCroppedToCanvas(video, video.videoWidth, video.videoHeight, targetRatio, mirror, 2400);
    return { canvas: c, hardwareFlashFired: false };
}

function enqueueLatentFrame(sourceCanvas, expInfo, usedFlash = false, hardwareFlashFired = false) {
    if (!currentRoll || getEffectiveRollCount() >= currentRoll.capacity) {
        sourceCanvas.width = 0; sourceCanvas.height = 0;
        return Promise.resolve();
    }

    const rollRef = currentRoll;
    const compSnap = camCompEV;
    const modeSnap = camMode;

    rollPendingCount++;
    setShutterArmedState(false);
    updateCameraHUD();

    const job = rollSaveQueue.then(async () => {
        await new Promise(r => setTimeout(r, 40));
        try {
            let encodeCanvas = sourceCanvas;
            const needsPostOverlay = (usedFlash && !hardwareFlashFired) || (!usedFlash && expInfo.shutter.sec >= 1 / 15);

            if (needsPostOverlay) {
                const ctx = encodeCanvas.getContext("2d");
                if (usedFlash && !hardwareFlashFired) {
                    const w = encodeCanvas.width, h = encodeCanvas.height;
                    const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.08, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
                    grad.addColorStop(0, "rgba(255, 252, 245, 0.24)");
                    grad.addColorStop(0.55, "rgba(255, 250, 240, 0.08)");
                    grad.addColorStop(1, "rgba(0, 0, 0, 0.22)");
                    ctx.fillStyle = grad;
                    ctx.fillRect(0, 0, w, h);
                }

                if (!usedFlash && expInfo.shutter.sec >= 1 / 15) {
                    const snapCanvas = document.createElement("canvas");
                    snapCanvas.width = encodeCanvas.width;
                    snapCanvas.height = encodeCanvas.height;
                    snapCanvas.getContext("2d").drawImage(encodeCanvas, 0, 0);
                    const shakePx = Math.min(22, Math.round(expInfo.shutter.sec * 28));
                    ctx.globalAlpha = 0.35;
                    ctx.drawImage(snapCanvas, shakePx, Math.round(shakePx * 0.4));
                    ctx.globalAlpha = 0.20;
                    ctx.drawImage(snapCanvas, -Math.round(shakePx * 0.5), -Math.round(shakePx * 0.3));
                    ctx.globalAlpha = 1.0;
                    snapCanvas.width = 0; snapCanvas.height = 0;
                }
            }

            const clampedErrEV = Math.max(-2.5, Math.min(2.5, expInfo.exposureErrorEV));
            const flashFillBoost = (usedFlash && !hardwareFlashFired) ? Math.max(0.45, -clampedErrEV * 0.65) : 0.0;
            const effectiveFrameEV = Math.max(-2.5, Math.min(2.5, (modeSnap === "M" ? 0 : compSnap) + clampedErrEV + flashFillBoost));
            const seed = Math.random();

            const rawBlob = await canvasToBlob(encodeCanvas, "image/jpeg", 0.90);
            encodeCanvas.width = 0; encodeCanvas.height = 0;

            rollRef.frames.push({
                number: rollRef.frames.length + 1,
                exposureEV: effectiveFrameEV,
                aperture: expInfo.aperture,
                shutterLabel: expInfo.shutter.label,
                mode: modeSnap,
                flash: usedFlash,
                starred: false,
                savedLocally: false,
                defectSeed: seed,
                defects: createDefaultFrameDefects(seed),
                rawBlob,
                negThumbBlob: null,
                thumbBlob: null
            });

            await saveRollToDB(rollRef);
        } finally {
            rollPendingCount = Math.max(0, rollPendingCount - 1);
            if (currentRoll === rollRef) updateCameraHUD();
        }
    });

    rollSaveQueue = job.catch(() => { });
    return job;
}

onId("shutterBtn", "click", async () => {
    if (isCapturing || isRewinding) return;
    if (!currentRoll || getEffectiveRollCount() >= currentRoll.capacity) {
        playLockedShutterTick();
        return;
    }
    if (!isShutterArmed) {
        playLockedShutterTick();
        const badge = document.getElementById("vfCockBadge");
        if (badge) {
            badge.style.transform = "scale(1.08)";
            setTimeout(() => { badge.style.transform = "scale(1)"; }, 160);
        }
        return;
    }

    const video = document.getElementById("camVideo");
    if (!mediaStream || !video || video.readyState < 2 || video.videoWidth === 0) {
        alert("Fotocamera live non ancora pronta: attendi un istante o tocca '+ GALLERIA' in basso a sinistra per esporre una foto sul rullino!");
        return;
    }

    const expInfo = recalculateExposureTriangle();
    const useFlash = flashActive;
    const curtain = document.getElementById("shutterCurtain");
    const blinkDuration = Math.min(600, Math.max(95, expInfo.shutter.sec * 1000));

    isCapturing = true;
    try {
        if (useFlash && facingMode === "user") {
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameInstant(video, 3 / 4, true);
            playShutterSound(expInfo.shutter.sec, true);
            if (curtain) {
                curtain.classList.add("blink");
                setTimeout(() => curtain.classList.remove("blink"), blinkDuration);
            }
            setShutterArmedState(false);
            await appWaitPaint();
            enqueueLatentFrame(capCanvas, expInfo, true, hardwareFlashFired);
        } else {
            playShutterSound(expInfo.shutter.sec, useFlash);
            if (curtain) {
                curtain.style.backgroundColor = useFlash ? "#fff8ea" : "#000000";
                curtain.classList.add("blink");
                setTimeout(() => {
                    curtain.classList.remove("blink");
                    curtain.style.backgroundColor = "#000000";
                }, useFlash ? 110 : blinkDuration);
            }
            const mirror = facingMode === "user";
            const capCanvas = drawCroppedToCanvas(video, video.videoWidth, video.videoHeight, 3 / 4, mirror, 2400);
            setShutterArmedState(false);
            await appWaitPaint();
            enqueueLatentFrame(capCanvas, expInfo, useFlash, false);
        }
    } finally {
        isCapturing = false;
    }
});

onId("camGalleryInput", "change", async (e) => {
    if (isRewinding || (currentRoll && getEffectiveRollCount() >= currentRoll.capacity)) {
        e.target.value = "";
        return;
    }
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    try {
        const img = await loadImageFromSource(file);
        const expInfo = recalculateExposureTriangle();
        playShutterSound(expInfo.shutter.sec, flashActive);
        const c = document.createElement("canvas");
        c.width = img.naturalWidth || img.width;
        c.height = img.naturalHeight || img.height;
        c.getContext("2d").drawImage(img, 0, 0);
        await enqueueLatentFrame(c, expInfo, flashActive, false);
    } catch (err) {
        alert("Impossibile caricare l'immagine selezionata.");
    }
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

    const totalFrames = getEffectiveRollCount();
    const totStr = String(currentRoll.capacity).padStart(2, "0");
    const durationMs = 1200;
    playFilmRewindSound(durationMs / 1000);

    const startTime = performance.now();
    const animPromise = new Promise((resolve) => {
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

    await Promise.all([animPromise, rollSaveQueue.catch(() => { })]);

    animOverlay.classList.remove("open");
    isRewinding = false;
    await goToDarkroom();
}

onId("finishRewindBtn", "click", executeRewindSequence);
onId("rewindEarlyBtn", "click", async () => {
    if (isRewinding || !currentRoll) return;
    const count = getEffectiveRollCount();
    if (count === 0) {
        if (confirm("Nessuna foto scattata. Estrarre il rullino vuoto?")) {
            await rollSaveQueue.catch(() => { });
            await deleteRollFromDB(currentRoll.id);
            currentRoll = null;
            refreshHomeStatus().catch(() => { });
            refreshStorageSummary().catch(() => { });
            switchView("view-load");
        }
        return;
    }
    if (count >= currentRoll.capacity) {
        executeRewindSequence();
        return;
    }
    if (confirm(`Riavvolgere il rullino con ${count} scatti e andare in Camera Oscura?`)) {
        executeRewindSequence();
    }
});

/* =========================================================
   8. CAMERA OSCURA -> NEGATIVI SUL TAVOLO LUMINOSO
   ========================================================= */
let selectedPushStops = 0;
let devLightLeaks = false;
let devChemStains = false;
let devAgedPaper = false;

function getRollNegativeMode(roll) {
    if (!roll || !roll.film) return 1;
    if (roll.film.mode === "slide") return 0;
    if (roll.film.mode === "bw") return 2;
    return 1;
}

async function goToDarkroom() {
    currentRoll.status = "rewound";
    await saveRollToDB(currentRoll);
    refreshHomeStatus().catch(() => { });
    selectedPushStops = 0;
    devLightLeaks = false;
    devChemStains = false;
    devAgedPaper = false;

    document.querySelectorAll("#pushGrid .push-btn").forEach(b => b.classList.remove("selected"));
    const stdPush = document.querySelector('#pushGrid .push-btn[data-push="0"]');
    if (stdPush) stdPush.classList.add("selected");
    document.getElementById("drToggleLeaks").classList.remove("active");
    document.getElementById("drToggleChem").classList.remove("active");
    document.getElementById("drToggleAged").classList.remove("active");

    document.getElementById("drFilmTitle").textContent = currentRoll.film.name;
    document.getElementById("drFrameSummary").textContent = `${currentRoll.frames.length} fotogrammi latenti pronti per il bagno chimico`;
    document.getElementById("devProgressBox").style.display = "none";
    document.getElementById("startDevelopBtn").style.display = "inline-flex";
    switchView("view-darkroom");
}

onId("darkroomHomeBtn", "click", () => {
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

onId("drToggleLeaks", "click", function () { devLightLeaks = !devLightLeaks; this.classList.toggle("active", devLightLeaks); });
onId("drToggleChem", "click", function () { devChemStains = !devChemStains; this.classList.toggle("active", devChemStains); });
onId("drToggleAged", "click", function () { devAgedPaper = !devAgedPaper; this.classList.toggle("active", devAgedPaper); });

onId("startDevelopBtn", "click", async () => {
    document.getElementById("startDevelopBtn").style.display = "none";
    const progBox = document.getElementById("devProgressBox");
    const progFill = document.getElementById("devProgressFill");
    const statusTxt = document.getElementById("devStatusText");
    progBox.style.display = "flex";
    progFill.style.width = "5%";

    currentRoll.pushStops = selectedPushStops;
    currentRoll.devDefects = { lightLeaks: devLightLeaks, chemStains: devChemStains, agedPaper: devAgedPaper };
    const total = currentRoll.frames.length;
    const negMode = getRollNegativeMode(currentRoll);
    let prevHadLeak = false;

    for (let i = 0; i < total; i++) {
        statusTxt.textContent = `Sviluppo chimico fotogramma ${i + 1} di ${total}...`;
        progFill.style.width = `${Math.round(((i + 0.5) / total) * 100)}%`;
        await appWaitPaint();

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

        const img = await loadFastThumbnailSource(frame.rawBlob || frame.rawDataUrl, 480);
        renderFrameWithWebGL(img, currentRoll.film, frame, currentRoll.pushStops, null, false, 480, negMode);
        if (img && typeof img.close === "function") img.close();
        frame.negThumbBlob = await canvasToBlob(glCanvas, "image/jpeg", 0.84);
        frame.thumbBlob = frame.negThumbBlob;
    }

    progFill.style.width = "100%";
    statusTxt.textContent = "Asciugatura completata!";
    currentRoll.status = "developed";
    await saveRollToDB(currentRoll);
    refreshHomeStatus().catch(() => { });
    refreshStorageSummary().catch(() => { });
    refreshArchiveList().catch(() => { });
    openContactSheet();
});

/* =========================================================
   9. TAVOLO LUMINOSO NEGATIVI & VISORE CAROSELLO FULLSCREEN
   ========================================================= */
let activeNegIdx = 0;
let negZoom = 1.0;
let negPanX = 0;
let negPanY = 0;

function updateContactSelectionUI() {
    if (!currentRoll) return;
    const starCount = currentRoll.frames.filter(f => f.starred).length;
    const selBtn = document.getElementById("csSaveSelectedBtn");
    const allBtn = document.getElementById("csSelectAllBtn");
    if (selBtn) selBtn.textContent = `Stampa Selezionate (${starCount})`;
    if (allBtn) {
        const allStarred = currentRoll.frames.length > 0 && starCount === currentRoll.frames.length;
        allBtn.textContent = allStarred ? "☆ Deseleziona" : "★ Tutte";
    }
}

async function openContactSheet() {
    const negMode = getRollNegativeMode(currentRoll);
    document.getElementById("csTitle").textContent = currentRoll.film.name;
    document.getElementById("csSubtitle").textContent = negMode === 0
        ? "Diapositive positive su tavolo luminoso • Tocca per ispezionare"
        : "Negativi sviluppati • Tocca per carosello zoom e stampa";
    document.getElementById("csFilmEdge").textContent = `${currentRoll.film.name.toUpperCase()} • ISO ${currentRoll.film.iso}`;
    const pTxt = currentRoll.pushStops === 0 ? "DEV: STD" : (currentRoll.pushStops > 0 ? `PUSH +${currentRoll.pushStops}` : `PULL ${currentRoll.pushStops}`);
    document.getElementById("csDevEdge").textContent = pTxt;

    const hintEl = document.getElementById("csLightTableHint");
    if (hintEl) {
        if (negMode === 0) {
            hintEl.innerHTML = `<b>Tavolo Luminoso (Diapositiva E-6):</b> questa pellicola è invertita e mostra subito immagini positive trasparenti. Tocca una diapositiva per ispezionarla o passare all'Ingranditore; i tasti <b>Stampa</b> in alto esportano direttamente i file in positivo.`;
        } else if (negMode === 2) {
            hintEl.innerHTML = `<b>Tavolo Luminoso (Negativo B&amp;N):</b> le zone scure del negativo rappresentano le luci brillanti della scena, quelle chiare le ombre. Tocca un negativo per zoomare/scorrere o passare all'Ingranditore; <b>Stampa</b> esporta già in positivo.`;
        } else {
            hintEl.innerHTML = `<b>Tavolo Luminoso (Negativo Colore C-41):</b> la tipica maschera arancione serve a correggere i colori in fase di stampa. Tocca un negativo per zoomare/scorrere o passare all'Ingranditore; <b>Stampa</b> in alto esporta le foto già in positivo!`;
        }
    }

    const grid = document.getElementById("contactGrid");
    grid.innerHTML = "";
    currentRoll.frames.forEach((frame, idx) => {
        const cell = document.createElement("div");
        cell.className = "contact-frame" + (frame.starred ? " starred" : "");

        const img = document.createElement("img");
        const srcObj = frame.negThumbBlob || frame.thumbBlob || frame.thumbDataUrl;
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

        cell.addEventListener("click", () => openNegativeViewer(idx));
        grid.appendChild(cell);
    });

    updateContactSelectionUI();
    switchView("view-contact");
}

function applyNegativeTransform() {
    const imgEl = document.getElementById("negModalImg");
    const badge = document.getElementById("negZoomBadge");
    const resetBtn = document.getElementById("negModalResetZoomBtn");
    if (!imgEl) return;

    imgEl.style.transform = `translate3d(${negPanX}px, ${negPanY}px, 0) scale(${negZoom.toFixed(3)})`;
    if (badge) badge.textContent = `${negZoom.toFixed(1)}×`;
    if (resetBtn) resetBtn.style.display = negZoom > 1.05 ? "inline-flex" : "none";
}

function resetNegativeZoom() {
    negZoom = 1.0;
    negPanX = 0;
    negPanY = 0;
    applyNegativeTransform();
}

async function renderNegativeSlideAtIdx(idx) {
    if (!currentRoll || !currentRoll.frames[idx]) return;
    activeNegIdx = idx;
    resetNegativeZoom();

    const frame = currentRoll.frames[idx];
    const negMode = getRollNegativeMode(currentRoll);
    const total = currentRoll.frames.length;

    document.getElementById("negModalTitle").textContent = negMode === 0
        ? `Diapositiva #${String(frame.number).padStart(2, "0")} (${idx + 1}/${total})`
        : `Negativo #${String(frame.number).padStart(2, "0")} (${idx + 1}/${total})`;

    const apStr = frame.aperture ? `f/${frame.aperture}` : "f/4";
    const shStr = frame.shutterLabel ? `${frame.shutterLabel}s` : "1/125s";
    document.getElementById("negModalMeta").textContent = `${currentRoll.film.name} • ${apStr} • ${shStr}${frame.flash ? " • ⚡" : ""}`;

    const starBtn = document.getElementById("negModalStarBtn");
    starBtn.textContent = frame.starred ? "★" : "☆";
    starBtn.classList.toggle("btn-gold", !!frame.starred);

    document.getElementById("negPrevBtn").disabled = idx <= 0;
    document.getElementById("negNextBtn").disabled = idx >= total - 1;

    const noteEl = document.getElementById("negDidacticNote");
    if (negMode === 0) {
        noteEl.textContent = "Diapositiva E-6: colori e densità sono già positivi e pronti da osservare sul tavolo luminoso o da stampare su Ilfochrome.";
    } else if (negMode === 2) {
        noteEl.textContent = "Negativo Bianco & Nero: più argento metallico scuro vedi, più luminosa sarà quell'area nella stampa finale positiva.";
    } else {
        noteEl.textContent = "Maschera arancione C-41: i cieli azzurri appaiono arancioni e le ombre scure risultano quasi trasparenti. Passa alla stampa per invertire i colori.";
    }

    const imgEl = document.getElementById("negModalImg");
    const rawImg = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
    renderFrameWithWebGL(rawImg, currentRoll.film, frame, currentRoll.pushStops, null, false, 1400, negMode);
    const negBlob = await canvasToBlob(glCanvas, "image/jpeg", 0.90);
    const u = URL.createObjectURL(negBlob);
    imgEl.onload = () => URL.revokeObjectURL(u);
    imgEl.src = u;
}

async function openNegativeViewer(idx) {
    document.getElementById("negativeModal").classList.add("open");
    await renderNegativeSlideAtIdx(idx);
}

onId("negModalCloseBtn", "click", () => {
    document.getElementById("negativeModal").classList.remove("open");
});

onId("negModalResetZoomBtn", "click", resetNegativeZoom);

onId("negModalStarBtn", "click", async () => {
    if (!currentRoll || !currentRoll.frames[activeNegIdx]) return;
    const fr = currentRoll.frames[activeNegIdx];
    fr.starred = !fr.starred;
    await saveRollToDB(currentRoll);
    const starBtn = document.getElementById("negModalStarBtn");
    starBtn.textContent = fr.starred ? "★" : "☆";
    starBtn.classList.toggle("btn-gold", !!fr.starred);
    openContactSheet();
});

onId("negPrevBtn", "click", () => {
    if (activeNegIdx > 0) renderNegativeSlideAtIdx(activeNegIdx - 1);
});

onId("negNextBtn", "click", () => {
    if (currentRoll && activeNegIdx < currentRoll.frames.length - 1) {
        renderNegativeSlideAtIdx(activeNegIdx + 1);
    }
});

onId("negPrintBtn", "click", () => {
    document.getElementById("negativeModal").classList.remove("open");
    openPrintEnlarger(activeNegIdx);
});

const negStage = document.getElementById("negModalStage");
let negPointers = new Map();
let negPinchStartDist = 0;
let negPinchStartZoom = 1;
let negSwipeStart = { x: 0, y: 0, panX: 0, panY: 0, moved: false };
let negLastTapTime = 0;

if (negStage) {
    negStage.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button")) return;
        e.preventDefault();
        negPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (negPointers.size === 1) {
            negSwipeStart = { x: e.clientX, y: e.clientY, panX: negPanX, panY: negPanY, moved: false };
        } else if (negPointers.size === 2) {
            const pts = Array.from(negPointers.values());
            negPinchStartDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
            negPinchStartZoom = negZoom;
        }
    });

    negStage.addEventListener("pointermove", (e) => {
        if (!negPointers.has(e.pointerId)) return;
        negPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (negPointers.size === 2) {
            const pts = Array.from(negPointers.values());
            const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
            if (negPinchStartDist > 10) {
                negZoom = Math.max(1.0, Math.min(4.0, negPinchStartZoom * (dist / negPinchStartDist)));
                if (negZoom <= 1.02) { negZoom = 1.0; negPanX = 0; negPanY = 0; }
                applyNegativeTransform();
            }
            return;
        }

        if (negPointers.size === 1) {
            const dx = e.clientX - negSwipeStart.x;
            const dy = e.clientY - negSwipeStart.y;
            if (Math.hypot(dx, dy) > 8) negSwipeStart.moved = true;

            if (negZoom > 1.05) {
                const limitX = (negStage.clientWidth * (negZoom - 1)) * 0.5;
                const limitY = (negStage.clientHeight * (negZoom - 1)) * 0.5;
                negPanX = Math.max(-limitX, Math.min(limitX, negSwipeStart.panX + dx));
                negPanY = Math.max(-limitY, Math.min(limitY, negSwipeStart.panY + dy));
                applyNegativeTransform();
            }
        }
    });

    const handleNegPointerEnd = (e) => {
        if (!negPointers.has(e.pointerId)) return;
        const endPos = negPointers.get(e.pointerId);
        negPointers.delete(e.pointerId);

        if (negPointers.size === 0) {
            const dx = endPos.x - negSwipeStart.x;
            const dy = endPos.y - negSwipeStart.y;

            if (!negSwipeStart.moved) {
                const now = Date.now();
                if (now - negLastTapTime < 280) {
                    if (negZoom > 1.1) resetNegativeZoom();
                    else { negZoom = 2.5; negPanX = 0; negPanY = 0; applyNegativeTransform(); }
                    negLastTapTime = 0;
                } else {
                    negLastTapTime = now;
                }
            } else if (negZoom <= 1.05 && Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.2) {
                if (dx < 0 && currentRoll && activeNegIdx < currentRoll.frames.length - 1) {
                    renderNegativeSlideAtIdx(activeNegIdx + 1);
                } else if (dx > 0 && activeNegIdx > 0) {
                    renderNegativeSlideAtIdx(activeNegIdx - 1);
                }
            }
        }
    };
    negStage.addEventListener("pointerup", handleNegPointerEnd);
    negStage.addEventListener("pointercancel", handleNegPointerEnd);
}

async function exportContactFrames(framesToExport, labelSlug) {
    if (!framesToExport.length) {
        alert("Metti prima la stellina (★) su almeno una foto oppure clicca 'Stampa Tutte (+)'.");
        return;
    }
    const items = [];
    const slug = currentRoll.film.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const defPid = getDefaultPaperIdForFilm(currentRoll.film);

    for (const frame of framesToExport) {
        const img = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
        renderFrameWithWebGL(img, currentRoll.film, frame, currentRoll.pushStops, {
            paperId: defPid, time: 12.0, grade: 2.5, cyan: 0, mag: 0, yel: 0,
            burn: 0.10, grainScale: 1.0, paperTexScale: 1.0, enlargerApIdx: 3,
            tonerType: 0, tonerAmount: 0, testStrip: false,
            zoom: 1.0, rotation: 0, panX: 0, panY: 0, border: "none",
            defects: ensureFrameDefects(frame)
        }, false, null, 0);
        const blob = await canvasToBlob(glCanvas, "image/jpeg", 0.95);
        items.push({ name: `${slug}-f${String(frame.number).padStart(2, "0")}.jpg`, blob });
        frame.savedLocally = true;
    }

    await downloadImagesBatch(items, `analog-photolab-${slug}-${labelSlug}.zip`);
    await saveRollToDB(currentRoll);
    await refreshArchiveList();
    await refreshStorageSummary();
    openContactSheet();
}

onId("csSelectAllBtn", "click", async () => {
    if (!currentRoll) return;
    const allStarred = currentRoll.frames.every(f => f.starred);
    currentRoll.frames.forEach(f => { f.starred = !allStarred; });
    await saveRollToDB(currentRoll);
    openContactSheet();
});

onId("csSaveSelectedBtn", "click", async () => {
    if (!currentRoll) return;
    const selected = currentRoll.frames.filter(f => f.starred);
    await exportContactFrames(selected, "scelte");
});

onId("csSaveAllBtn", "click", async () => {
    if (!currentRoll) return;
    await exportContactFrames(currentRoll.frames, "tutte");
});

onId("newRollFromCsBtn", "click", () => {
    currentRoll = null;
    refreshArchiveList();
    refreshHomeStatus();
    refreshStorageSummary();
    switchView("view-home");
});

/* =========================================================
   10. STAZIONE DI STAMPA / INGRANDITORE DIDATTICO
   ========================================================= */
let activePrintIdx = 0;
let activePrintImg = null;
let printShowOriginal = false;
let activeFrameDirty = false;

let activePrintPresetDefaults = {
    time: 12.0, grade: 2.5, cyan: 0, mag: 0, yel: 0, burn: 0.10,
    enlargerApIdx: 3, tonerType: 0, tonerAmount: 0.6,
    zoom: 1.0, rotation: 0, borderThickness: 0.06, grainScale: 1.0, paperTexScale: 1.0
};

let printState = {
    presetId: "lab-std",
    paperId: "kodak-endura",
    time: 12.0,
    enlargerApIdx: 3,
    grade: 2.5,
    cyan: 0,
    mag: 0,
    yel: 0,
    tonerType: 0,
    tonerAmount: 0.6,
    testStrip: false,
    burn: 0.10,
    border: "none",
    borderThickness: 0.06,
    grainScale: 1.0,
    paperTexScale: 1.0,
    zoom: 1.0,
    rotation: 0,
    panX: 0,
    panY: 0,
    defects: createDefaultFrameDefects(0.42)
};

function layoutPrintPreview() {
    const stage = document.getElementById("printStage");
    const wrap = document.getElementById("printWrapper");
    if (!stage || !wrap || !glCanvas || !glCanvas.width || !glCanvas.height) return;

    const availW = Math.max(80, stage.clientWidth - 24);
    const availH = Math.max(80, stage.clientHeight - 24);
    const aspect = glCanvas.width / glCanvas.height;

    let pSide = 0, pTop = 0, pBot = 0;
    if (printState.border === "white") {
        const t = printState.borderThickness;
        pSide = t; pTop = t; pBot = t;
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
    const pm = document.getElementById("printModal");
    if (pm && pm.classList.contains("open")) layoutPrintPreview();
});

function renderTestStripOverlay() {
    const ov = document.getElementById("testStripOverlay");
    if (!ov) return;
    ov.classList.toggle("visible", !!printState.testStrip);
    if (!printState.testStrip) {
        ov.innerHTML = "";
        return;
    }
    const evs = [-1.0, -0.5, 0.0, 0.5, 1.0];
    ov.innerHTML = evs.map(ev => {
        const sec = (printState.time * Math.pow(2, ev)).toFixed(1);
        return `<div class="test-strip-col"><span class="test-strip-tag">${sec}s</span></div>`;
    }).join("");
}

function renderPrintPresetsAndPapers() {
    const pStrip = document.getElementById("printPresetStrip");
    if (!pStrip) return;
    pStrip.innerHTML = "";
    PRINT_PRESETS.forEach(pr => {
        const chip = document.createElement("div");
        chip.className = "preset-chip" + (printState.presetId === pr.id ? " active" : "");
        chip.innerHTML = `<strong>${pr.name}</strong><small>${pr.sub}</small>`;
        chip.addEventListener("click", () => {
            activePrintPresetDefaults = {
                ...activePrintPresetDefaults,
                time: pr.time, grade: pr.grade, cyan: pr.cyan, mag: pr.mag, yel: pr.yel,
                burn: pr.burn, tonerType: pr.tonerType, tonerAmount: pr.tonerAmount || 0.5
            };
            printState = {
                ...printState,
                presetId: pr.id,
                paperId: pr.paperId,
                time: pr.time,
                grade: pr.grade,
                cyan: pr.cyan,
                mag: pr.mag,
                yel: pr.yel,
                burn: pr.burn,
                border: pr.border,
                tonerType: pr.tonerType,
                tonerAmount: pr.tonerAmount || 0.5
            };
            syncPrintControlsUI();
            updatePrintPreview();
        });
        pStrip.appendChild(chip);
    });

    const bwGroup = document.getElementById("paperGroupBW");
    const colGroup = document.getElementById("paperGroupColor");
    if (!bwGroup || !colGroup) return;
    bwGroup.innerHTML = "";
    colGroup.innerHTML = "";

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
        if (pk.isBW) bwGroup.appendChild(card);
        else colGroup.appendChild(card);
    });
}

function syncPrintControlsUI() {
    renderPrintPresetsAndPapers();

    const paper = PAPER_STOCKS.find(p => p.id === printState.paperId) || PAPER_STOCKS[0];
    const isSlide = currentRoll && currentRoll.film.mode === "slide";

    document.getElementById("prZoomSlider").value = printState.zoom;
    document.getElementById("prZoomVal").textContent = printState.zoom.toFixed(2) + "x";

    document.getElementById("prRotSlider").value = printState.rotation;
    document.getElementById("prRotVal").textContent = Math.round(printState.rotation) + "°";

    document.getElementById("prTimeSlider").value = printState.time;
    document.getElementById("prTimeVal").textContent = printState.time.toFixed(1) + "s";

    document.getElementById("prLensApSlider").value = printState.enlargerApIdx;
    document.getElementById("prLensApVal").textContent = `f/${ENLARGER_APERTURES[printState.enlargerApIdx]}`;

    document.getElementById("prGradeSlider").value = printState.grade;
    document.getElementById("prGradeVal").textContent = "Gr. " + printState.grade.toFixed(1);

    document.getElementById("prCyanSlider").value = printState.cyan;
    document.getElementById("prCyanVal").textContent = (printState.cyan > 0 ? "+" : "") + printState.cyan + " C";

    document.getElementById("prMagSlider").value = printState.mag;
    document.getElementById("prMagVal").textContent = (printState.mag > 0 ? "+" : "") + printState.mag + " M";

    document.getElementById("prYelSlider").value = printState.yel;
    document.getElementById("prYelVal").textContent = (printState.yel > 0 ? "+" : "") + printState.yel + " Y";

    document.getElementById("prTonerSelect").value = String(printState.tonerType || 0);
    document.getElementById("tonerIntRow").style.display = (paper.isBW && printState.tonerType > 0) ? "flex" : "none";
    document.getElementById("prTonerIntSlider").value = printState.tonerAmount;
    document.getElementById("prTonerIntVal").textContent = Math.round(printState.tonerAmount * 100) + "%";

    document.getElementById("prBurnSlider").value = printState.burn;
    document.getElementById("prBurnVal").textContent = Math.round(printState.burn * 100) + "%";

    document.getElementById("prGrainSlider").value = printState.grainScale;
    document.getElementById("prGrainVal").textContent = Math.round(printState.grainScale * 100) + "%";

    document.getElementById("prPaperTexSlider").value = printState.paperTexScale;
    document.getElementById("prPaperTexVal").textContent = Math.round(printState.paperTexScale * 100) + "%";

    document.getElementById("prBorderThickSlider").value = printState.borderThickness;
    document.getElementById("prBorderThickVal").textContent = Math.round(printState.borderThickness * 100) + "%";
    document.getElementById("borderThicknessRow").style.display = printState.border === "white" ? "flex" : "none";

    document.getElementById("bwGradeBlock").style.display = paper.isBW ? "flex" : "none";
    document.getElementById("bwTonerBlock").style.display = paper.isBW ? "flex" : "none";
    document.getElementById("ra4HeadBlock").style.display = paper.isBW ? "none" : "flex";

    const ra4Explain = document.getElementById("ra4PhysicsExplain");
    if (ra4Explain) {
        if (isSlide) {
            ra4Explain.innerHTML = `Stampa diretta da <b>Diapositiva</b> (${paper.name}): i filtri agiscono in modo diretto (+Giallo riscalda in giallo, +Magenta aggiunge magenta, +Ciano raffredda in ciano).`;
        } else {
            ra4Explain.innerHTML = `Nella stampa da <b>negativo colore</b> i filtri agiscono in modo sottrattivo: aggiungere <b>+Giallo (Y)</b> blocca il blu rendendo la stampa più <b>Blu</b>; <b>+Magenta (M)</b> più <b>Verde</b>; <b>+Ciano (C)</b> più <b>Rossa</b>.`;
        }
    }

    const compatHint = document.getElementById("paperCompatibilityHint");
    if (compatHint && currentRoll) {
        if (paper.isBW && currentRoll.film.mode !== "bw") {
            compatHint.innerHTML = `<b>Nota didattica:</b> stai stampando un rullino a colori su carta <b>${paper.name}</b> (gelatina d'argento). Come in una vera camera oscura, il risultato è in <b>Bianco &amp; Nero</b> controllato dal Filtro Grado 00–5.`;
        } else {
            compatHint.innerHTML = `Scegli una carta fotografica reale: le carte <b>B&amp;N</b> usano i filtri <b>Grado 00–5</b> e viraggi; le carte <b>RA-4 / Cibachrome</b> usano la <b>Testa Dicromatica C/M/Y</b>.`;
        }
    }

    const stripBtn = document.getElementById("prTestStripBtn");
    stripBtn.textContent = printState.testStrip
        ? "📏 Provino a Scalare (5 Tempi): ON"
        : "📏 Provino a Scalare (5 Tempi): OFF";
    stripBtn.classList.toggle("btn-gold", !!printState.testStrip);
    stripBtn.classList.toggle("btn-gold-outline", !printState.testStrip);

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

    const wrap = document.getElementById("printWrapper");
    const effectiveSwatch = (d.agedPaper.active && d.agedPaper.intensity > 0) ? "#e8d6b3" : paper.swatch;
    wrap.style.setProperty("--paper-bg", effectiveSwatch);
    wrap.className = "print-frame-wrapper";
    if (printState.border === "white") wrap.classList.add("border-white");

    document.querySelectorAll("#borderSelector button").forEach(b => {
        b.classList.toggle("btn-gold-outline", b.dataset.border === printState.border);
    });

    renderTestStripOverlay();
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
    document.getElementById("printFrameTitle").textContent = `Stampa #${String(frame.number).padStart(2, "0")}`;
    const apStr = frame.aperture ? `f/${frame.aperture}` : "f/4";
    const shStr = frame.shutterLabel ? `${frame.shutterLabel}s` : "1/125s";
    const flStr = frame.flash ? " • ⚡" : "";
    document.getElementById("printExifMeta").textContent = `${frame.mode || "AUTO"} • ${apStr} • ${shStr}${flStr}`;

    const frameDef = ensureFrameDefects(frame);

    const defPreset = currentRoll.film.mode === "bw"
        ? PRINT_PRESETS[1]
        : (currentRoll.film.mode === "slide" ? PRINT_PRESETS[3] : PRINT_PRESETS[0]);
    const defPaperId = currentRoll.film.mode === "slide" ? "ilfochrome-classic" : defPreset.paperId;

    activePrintPresetDefaults = {
        time: defPreset.time, grade: defPreset.grade, cyan: 0, mag: 0, yel: 0, burn: defPreset.burn,
        enlargerApIdx: 3, tonerType: defPreset.tonerType, tonerAmount: defPreset.tonerAmount || 0.5,
        zoom: 1.0, rotation: 0, borderThickness: 0.06, grainScale: 1.0, paperTexScale: 1.0
    };

    printState = {
        presetId: currentRoll.film.mode === "slide" ? "custom" : defPreset.id,
        paperId: defPaperId,
        time: defPreset.time,
        enlargerApIdx: 3,
        grade: defPreset.grade,
        cyan: 0,
        mag: 0,
        yel: 0,
        tonerType: defPreset.tonerType,
        tonerAmount: defPreset.tonerAmount || 0.5,
        testStrip: false,
        burn: defPreset.burn,
        border: defPreset.border,
        borderThickness: 0.06,
        grainScale: 1.0,
        paperTexScale: 1.0,
        zoom: 1.0,
        rotation: 0,
        panX: 0,
        panY: 0,
        defects: JSON.parse(JSON.stringify(frameDef))
    };

    activePrintImg = await loadImageFromSource(frame.rawBlob || frame.rawDataUrl);
    document.getElementById("printModal").classList.add("open");
    updatePrintPreview();
    syncPrintControlsUI();
}

function updatePrintPreview() {
    if (!activePrintImg) return;
    const frame = currentRoll.frames[activePrintIdx];
    renderFrameWithWebGL(activePrintImg, currentRoll.film, frame, currentRoll.pushStops, printState, printShowOriginal, null, 0);
    layoutPrintPreview();
}

document.querySelectorAll("#printTabs .print-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#printTabs .print-tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".print-tab-body").forEach(b => b.classList.remove("active"));
        tab.classList.add("active");
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add("active");
    });
});

onId("prTestStripBtn", "click", () => {
    printState.testStrip = !printState.testStrip;
    syncPrintControlsUI();
    updatePrintPreview();
});

function rotatePrint90() {
    printState.rotation = (Math.round(printState.rotation) + 90) % 360;
    printState.panX = 0;
    printState.panY = 0;
    updatePrintPreview();
    syncPrintControlsUI();
}

onId("prRotate90Btn", "click", rotatePrint90);
onId("headerRotate90Btn", "click", rotatePrint90);

onId("prResetGeomBtn", "click", () => {
    printState.zoom = 1.0;
    printState.rotation = 0;
    printState.panX = 0;
    printState.panY = 0;
    updatePrintPreview();
    syncPrintControlsUI();
});

onId("prZoomSlider", "input", (e) => {
    printState.zoom = parseFloat(e.target.value);
    const maxPan = Math.max(0, 0.5 * (1 - 1 / printState.zoom));
    printState.panX = Math.max(-maxPan, Math.min(maxPan, printState.panX));
    printState.panY = Math.max(-maxPan, Math.min(maxPan, printState.panY));
    document.getElementById("prZoomVal").textContent = printState.zoom.toFixed(2) + "x";
    updatePrintPreview();
});

onId("prRotSlider", "input", (e) => {
    printState.rotation = parseFloat(e.target.value) % 360;
    document.getElementById("prRotVal").textContent = Math.round(printState.rotation) + "°";
    updatePrintPreview();
});

onId("prLensApSlider", "input", (e) => {
    printState.enlargerApIdx = parseInt(e.target.value);
    syncPrintControlsUI();
    updatePrintPreview();
});

onId("prTonerSelect", "change", (e) => {
    printState.tonerType = parseInt(e.target.value);
    if (printState.tonerType > 0 && printState.tonerAmount === 0) printState.tonerAmount = 0.6;
    syncPrintControlsUI();
    updatePrintPreview();
});

onId("prTonerIntSlider", "input", (e) => {
    printState.tonerAmount = parseFloat(e.target.value);
    syncPrintControlsUI();
    updatePrintPreview();
});

onId("prBorderThickSlider", "input", (e) => {
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
    ["prCyanSlider", "cyan"],
    ["prMagSlider", "mag"],
    ["prYelSlider", "yel"],
    ["prBurnSlider", "burn"],
    ["prGrainSlider", "grainScale"],
    ["prPaperTexSlider", "paperTexScale"]
].forEach(([id, prop]) => {
    onId(id, "input", (e) => {
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
    onId(id, "click", async () => {
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
    onId(id, "input", async (e) => {
        const val = parseFloat(e.target.value);
        printState.defects[key].intensity = val;
        if (val > 0) printState.defects[key].active = true;
        await persistCurrentFrameDefects();
        syncPrintControlsUI();
        updatePrintPreview();
    });
});

onId("rerollDefectsBtn", "click", async () => {
    printState.defects.seed = Math.random();
    await persistCurrentFrameDefects();
    syncPrintControlsUI();
    updatePrintPreview();
});

onId("clearFrameDefectsBtn", "click", async () => {
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

if (pStage) {
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
}

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

onId("closePrintBtn", "click", async () => {
    document.getElementById("printModal").classList.remove("open");
    if (activeFrameDirty && currentRoll && currentRoll.frames[activePrintIdx] && activePrintImg) {
        const frame = currentRoll.frames[activePrintIdx];
        const negMode = getRollNegativeMode(currentRoll);
        renderFrameWithWebGL(activePrintImg, currentRoll.film, frame, currentRoll.pushStops, null, false, 480, negMode);
        frame.negThumbBlob = await canvasToBlob(glCanvas, "image/jpeg", 0.84);
        frame.thumbBlob = frame.negThumbBlob;
        await saveRollToDB(currentRoll);
        openContactSheet();
    }
});

onId("downloadPrintBtn", "click", async () => {
    printShowOriginal = false;
    const prevStrip = printState.testStrip;
    printState.testStrip = false;
    updatePrintPreview();

    const imgW = glCanvas.width;
    const imgH = glCanvas.height;
    const outCanvas = document.createElement("canvas");
    const ctx = outCanvas.getContext("2d");
    const paper = PAPER_STOCKS.find(p => p.id === printState.paperId) || PAPER_STOCKS[0];
    const agedActive = printState.defects.agedPaper.active && printState.defects.agedPaper.intensity > 0;
    const paperBgColor = agedActive ? "#e8d6b3" : paper.swatch;

    if (printState.border === "white") {
        const pad = Math.round(imgW * printState.borderThickness);
        outCanvas.width = imgW + pad * 2;
        outCanvas.height = imgH + pad * 2;
        ctx.fillStyle = paperBgColor;
        ctx.fillRect(0, 0, outCanvas.width, outCanvas.height);
        ctx.drawImage(glCanvas, pad, pad);
    } else {
        outCanvas.width = imgW;
        outCanvas.height = imgH;
        ctx.drawImage(glCanvas, 0, 0);
    }

    const outBlob = await canvasToBlob(outCanvas, "image/jpeg", 0.96);
    const slug = currentRoll.film.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadSingleBlob(outBlob, `print-${slug}-f${activePrintIdx + 1}.jpg`);
    outCanvas.width = 0; outCanvas.height = 0;

    printState.testStrip = prevStrip;
    updatePrintPreview();

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
    const lm = document.getElementById("labModal");
    if (!lm || !lm.classList.contains("open")) return;
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
        640,
        0
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
    if (!sel) return;
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
if (labPrevWrap) {
    labPrevWrap.addEventListener("pointerdown", (e) => { e.preventDefault(); labShowOriginal = true; renderLabPreview(); });
}
window.addEventListener("pointerup", () => { if (labShowOriginal) { labShowOriginal = false; renderLabPreview(); } });
window.addEventListener("pointercancel", () => { if (labShowOriginal) { labShowOriginal = false; renderLabPreview(); } });

onId("labSampleUpload", "change", async (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    try {
        const img = await loadImageFromSource(file);
        const maxD = 800;
        let w = img.naturalWidth || img.width;
        let h = img.naturalHeight || img.height;
        if (w > maxD || h > maxD) {
            const r = Math.min(maxD / w, maxD / h);
            w = Math.round(w * r); h = Math.round(h * r);
        }
        const c = document.createElement("canvas");
        c.width = w; c.height = h;
        c.getContext("2d").drawImage(img, 0, 0, w, h);
        labSampleImg = c;
        renderLabPreview();
    } catch (err) { }
});

onId("labResetSampleBtn", "click", () => {
    labSampleImg = buildDefaultLabSampleCanvas();
    renderLabPreview();
});

onId("labFilmSelect", "change", (e) => {
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
    onId(id, "input", (e) => {
        const f = films.find(x => x.id === labEditingId);
        f[prop] = parseFloat(e.target.value);
        markFilmAsModifiedInLab(f);
        syncLabForm();
        renderLabPreview();
    });
});

onId("edName", "input", (e) => {
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

onId("edIso", "input", (e) => {
    clearTimeout(isoDebounceTimer);
    isoDebounceTimer = setTimeout(() => handleIsoChange(e.target.value), 500);
});
onId("edIso", "change", (e) => {
    clearTimeout(isoDebounceTimer);
    handleIsoChange(e.target.value);
});

document.querySelectorAll("#labIsoPresets .iso-chip").forEach(btn => {
    btn.addEventListener("click", () => {
        clearTimeout(isoDebounceTimer);
        handleIsoChange(btn.dataset.iso);
    });
});

onId("edCustomColor", "input", (e) => {
    const f = films.find(x => x.id === labEditingId);
    f.customColor = e.target.value;
    markFilmAsModifiedInLab(f);
    syncLabForm();
});

onId("labResetColorBtn", "click", () => {
    const f = films.find(x => x.id === labEditingId);
    delete f.customColor;
    syncLabForm();
});

onId("edMode", "change", (e) => {
    const f = films.find(x => x.id === labEditingId);
    f.mode = e.target.value;
    if (f.mode !== "bw" && f.saturation === 0) f.saturation = 1.0;
    markFilmAsModifiedInLab(f);
    syncLabForm();
    renderLabPreview();
});

onId("labNewBtn", "click", () => {
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

onId("copyJsonTemplateBtn", "click", async () => {
    try {
        await navigator.clipboard.writeText(document.getElementById("jsonArea").value);
        alert("Ricetta JSON copiata negli appunti!");
    } catch (e) {
        document.getElementById("jsonArea").select();
        alert("Seleziona e copia il testo JSON qui sopra.");
    }
});

onId("importJsonBtn", "click", () => {
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

onId("deleteFilmBtn", "click", () => {
    if (films.length <= 1) return alert("Deve restare almeno una pellicola.");
    const target = films.find(x => x.id === labEditingId);
    const label = target ? target.name : "questa pellicola";
    if (!confirm(`Sei sicuro di voler eliminare definitivamente "${label}"?`)) return;

    films = films.filter(x => x.id !== labEditingId);
    labEditingId = films[0].id;
    if (target && selectedLoadFilmId === target.id) selectedLoadFilmId = films[0].id;
    populateLabSelect();
    syncLabForm();
    renderLabPreview();
});

onId("openLabFromLoadBtn", "click", openLabModal);

onId("cancelLabModalBtn", "click", () => {
    if (labSnapshotFilms) {
        films = JSON.parse(JSON.stringify(labSnapshotFilms));
        selectedLoadFilmId = labSnapshotSelectedId || films[0].id;
    }
    document.getElementById("labModal").classList.remove("open");
    renderLoadView();
});

onId("closeLabModalBtn", "click", () => {
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

onId("openDiagBtn", "click", async () => {
    await refreshDiagSummary();
    document.getElementById("diagModal").classList.add("open");
});

onId("closeDiagBtn", "click", () => {
    document.getElementById("diagModal").classList.remove("open");
});

onId("runDiagTestBtn", "click", async () => {
    const log = document.getElementById("diagLog");
    log.textContent = "1/2 Verifica apertura sensore fotocamera ad alta risoluzione...";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment", width: { ideal: 2560 }, height: { ideal: 1920 } },
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
        log.textContent = `Sensore OK: ${sw}×${sh}px. 2/2 Benchmark GPU WebGL...`;
    } catch (err) {
        document.getElementById("diagSensorRes").textContent = "Bloccato (Serve HTTPS)";
        log.textContent = `Camera non accessibile (${err.name}). 2/2 Benchmark GPU WebGL...`;
    }

    const testCanvas = document.createElement("canvas");
    testCanvas.width = 2400;
    testCanvas.height = 3200;
    const tCtx = testCanvas.getContext("2d");
    tCtx.fillStyle = "#7ea3b8";
    tCtx.fillRect(0, 0, 2400, 3200);

    const t0 = performance.now();
    renderFrameWithWebGL(
        testCanvas,
        films[0],
        { exposureEV: 0, aperture: 2.8, defects: createDefaultFrameDefects(0.5) },
        0,
        null,
        false,
        3200,
        0
    );
    if (gl) gl.finish();
    const dt = (performance.now() - t0).toFixed(1);
    document.getElementById("diagGpuTime").textContent = `${dt} ms (3200px)`;
    testCanvas.width = 0; testCanvas.height = 0;

    await refreshDiagSummary();
    log.textContent += ` Completato in ${dt} ms!`;
});

/* =========================================================
   13. AVVIO APP
   ========================================================= */
syncThirdsUI();
renderLoadView();

try {
    if (typeof initPolaroidEventListeners === "function") initPolaroidEventListeners();
} catch (e) { console.error("Errore init Polaroid:", e); }

try {
    if (typeof initVintageEventListeners === "function") initVintageEventListeners();
} catch (e) { console.error("Errore init Usa & Getta:", e); }

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