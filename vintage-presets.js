/* =========================================================
   VINTAGE-PRESETS.JS — USA & GETTA v2.0 (MOTORE WEBGL DEDICATO)
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
        stampColor: "#ffae52",
        evBase: 0.0,
        optics: { ca: 0.0, barrel: 0.025, softness: 0.24, vignette: 0.44, bloom: 0.22 },
        grade: {
            isBW: true, orthoBW: true,
            blackCrush: 0.03, contrast: 0.48, shoulder: 0.34,
            saturation: 0.0, vibrance: 0.0,
            matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
            shadowTint: [0.96, 0.96, 0.94],
            midTint: [1.01, 1.00, 0.98],
            highTint: [1.03, 1.00, 0.92],
            bloomThresh: 0.64, halationWarmth: 0.20,
            grain: 0.044, grainSize: 1.28
        },
        exceptions: { leakProb: 0.20, chemProb: 0.16, agedProb: 0.42, scratchProb: 0.30 }
    },
    {
        id: "1950s",
        name: "Anni '50",
        subtitle: "Kodachrome • Rossi carminio & cobalto",
        tag: "'50 CHROME",
        yearStamp: "'55",
        color: "#d94e3f",
        textColor: "#ffffff",
        stampColor: "#ff8c3a",
        evBase: 0.02,
        optics: { ca: 0.14, barrel: 0.020, softness: 0.12, vignette: 0.30, bloom: 0.18 },
        grade: {
            isBW: false, orthoBW: false,
            blackCrush: 0.03, contrast: 0.44, shoulder: 0.38,
            saturation: 1.18, vibrance: 0.14,
            matrix: [1.09, -0.05, -0.04, 0.01, 0.99, 0.00, -0.05, 0.03, 1.02],
            shadowTint: [0.92, 0.95, 1.06],
            midTint: [1.03, 0.99, 0.96],
            highTint: [1.04, 1.00, 0.92],
            bloomThresh: 0.66, halationWarmth: 0.45,
            grain: 0.020, grainSize: 1.00
        },
        exceptions: { leakProb: 0.24, chemProb: 0.06, agedProb: 0.20, scratchProb: 0.12 }
    },
    {
        id: "1960s",
        name: "Anni '60",
        subtitle: "Agfacolor • Sole caldo & pastelli",
        tag: "'60 MOD",
        yearStamp: "'68",
        color: "#e08a28",
        textColor: "#141004",
        stampColor: "#ff7e29",
        evBase: 0.02,
        optics: { ca: 0.22, barrel: 0.028, softness: 0.18, vignette: 0.32, bloom: 0.26 },
        grade: {
            isBW: false, orthoBW: false,
            blackCrush: 0.015, contrast: 0.36, shoulder: 0.42,
            saturation: 1.12, vibrance: 0.12,
            matrix: [1.06, -0.03, -0.03, -0.01, 1.02, -0.01, -0.04, 0.04, 1.00],
            shadowTint: [0.92, 1.01, 1.06],
            midTint: [1.03, 1.00, 0.94],
            highTint: [1.04, 1.00, 0.90],
            bloomThresh: 0.62, halationWarmth: 0.55,
            grain: 0.024, grainSize: 1.08
        },
        exceptions: { leakProb: 0.34, chemProb: 0.08, agedProb: 0.26, scratchProb: 0.14 }
    },
    {
        id: "1970s",
        name: "Anni '70",
        subtitle: "Kodacolor II • Ambra calda & ombre morbide",
        tag: "'70 AMBER",
        yearStamp: "'77",
        color: "#c97b2b",
        textColor: "#ffffff",
        stampColor: "#ff6d1f",
        evBase: 0.02,
        optics: { ca: 0.26, barrel: 0.032, softness: 0.24, vignette: 0.34, bloom: 0.30 },
        grade: {
            isBW: false, orthoBW: false,
            blackCrush: 0.010, contrast: 0.32, shoulder: 0.48,
            saturation: 0.98, vibrance: 0.10,
            matrix: [1.07, 0.00, -0.07, 0.02, 0.99, -0.01, -0.06, 0.02, 1.04],
            shadowTint: [1.02, 0.97, 0.90],
            midTint: [1.05, 0.99, 0.89],
            highTint: [1.04, 0.99, 0.87],
            bloomThresh: 0.60, halationWarmth: 0.65,
            grain: 0.028, grainSize: 1.18
        },
        exceptions: { leakProb: 0.40, chemProb: 0.12, agedProb: 0.34, scratchProb: 0.16 }
    },
    {
        id: "1980s",
        name: "Anni '80",
        subtitle: "Minilab Pop • Contrasto vivo & magenta",
        tag: "'80 MINILAB",
        yearStamp: "'86",
        color: "#d9488b",
        textColor: "#ffffff",
        stampColor: "#ff5c1a",
        evBase: 0.04,
        optics: { ca: 0.32, barrel: 0.038, softness: 0.24, vignette: 0.34, bloom: 0.28 },
        grade: {
            isBW: false, orthoBW: false,
            blackCrush: 0.028, contrast: 0.40, shoulder: 0.38,
            saturation: 1.18, vibrance: 0.16,
            matrix: [1.06, -0.04, -0.02, -0.03, 0.98, 0.05, 0.00, 0.01, 0.99],
            shadowTint: [0.97, 0.93, 1.07],
            midTint: [1.03, 0.97, 1.01],
            highTint: [1.02, 0.99, 0.97],
            bloomThresh: 0.62, halationWarmth: 0.45,
            grain: 0.026, grainSize: 1.10
        },
        exceptions: { leakProb: 0.38, chemProb: 0.06, agedProb: 0.06, scratchProb: 0.08 }
    },
    {
        id: "1990s",
        name: "Anni '90 (Huji)",
        subtitle: "Huji '98 • 30mm plastica, bloom & colore vivo",
        tag: "'98 HUJI",
        yearStamp: "'98",
        color: "#1fa35b",
        textColor: "#ffffff",
        stampColor: "#ff5514",
        evBase: 0.08,
        optics: { ca: 0.46, barrel: 0.055, softness: 0.38, vignette: 0.42, bloom: 0.42 },
        grade: {
            isBW: false, orthoBW: false,
            blackCrush: 0.034, contrast: 0.42, shoulder: 0.38,
            saturation: 1.18, vibrance: 0.22,
            matrix: [1.09, -0.04, -0.05, -0.03, 0.99, 0.04, -0.05, 0.02, 1.03],
            shadowTint: [0.92, 0.97, 1.06],
            midTint: [1.03, 0.97, 0.98],
            highTint: [1.03, 1.00, 0.93],
            bloomThresh: 0.58, halationWarmth: 0.50,
            grain: 0.025, grainSize: 1.05
        },
        exceptions: { leakProb: 0.48, chemProb: 0.0, agedProb: 0.0, scratchProb: 0.0 }
    },
    {
        id: "y2k",
        name: "Y2K (2000s)",
        subtitle: "Compatta '02 • Freddo nitido & ciano-blu",
        tag: "'02 Y2K",
        yearStamp: "'02",
        color: "#3ea3d8",
        textColor: "#0d141a",
        stampColor: "#ff3b1a",
        evBase: 0.05,
        optics: { ca: 0.28, barrel: 0.032, softness: 0.16, vignette: 0.32, bloom: 0.24 },
        grade: {
            isBW: false, orthoBW: false,
            blackCrush: 0.030, contrast: 0.44, shoulder: 0.36,
            saturation: 1.16, vibrance: 0.18,
            matrix: [1.01, -0.03, 0.02, -0.02, 1.01, 0.01, 0.01, 0.01, 1.05],
            shadowTint: [0.90, 0.97, 1.10],
            midTint: [0.98, 1.00, 1.02],
            highTint: [0.96, 1.00, 1.04],
            bloomThresh: 0.64, halationWarmth: 0.22,
            grain: 0.019, grainSize: 1.00
        },
        exceptions: { leakProb: 0.34, chemProb: 0.0, agedProb: 0.0, scratchProb: 0.0 }
    }
];

/* =========================================================
   MOTORE WEBGL MULTI-PASS DEDICATO ALLA SOLA USA & GETTA
   ========================================================= */
const DisposableFXEngine = (() => {
    const outCanvas = document.createElement("canvas");
    const gl = outCanvas.getContext("webgl", { preserveDrawingBuffer: true, alpha: false, antialias: false })
        || outCanvas.getContext("experimental-webgl", { preserveDrawingBuffer: true, alpha: false });
    const MAX_TEX = gl ? Math.min(4096, gl.getParameter(gl.MAX_TEXTURE_SIZE) || 2048) : 2048;

    const VS_SRC = `
      attribute vec2 a_pos;
      attribute vec2 a_uv;
      varying vec2 v_uv;
      void main() {
        gl_Position = vec4(a_pos, 0.0, 1.0);
        v_uv = a_uv;
      }
    `;

    const BRIGHT_FS_SRC = `
      precision highp float;
      uniform sampler2D u_image;
      uniform vec2 u_effSrcRes;
      uniform vec2 u_outRes;
      uniform float u_rotRad;
      uniform float u_barrel;
      uniform float u_bloomThresh;
      uniform float u_halationWarmth;
      uniform float u_ev;
      varying vec2 v_uv;

      vec2 computeSourceUV(vec2 outUV) {
        vec2 pOut = (outUV - 0.5) * u_outRes;
        float c = cos(u_rotRad);
        float s = sin(u_rotRad);
        vec2 pRot = vec2(pOut.x * c - pOut.y * s, pOut.x * s + pOut.y * c);
        vec2 uv = pRot / u_effSrcRes + 0.5;
        if (u_barrel > 0.0005) {
          vec2 d = uv - 0.5;
          float r2 = dot(d, d);
          float comp = 1.0 - u_barrel * 0.52;
          uv = 0.5 + d * comp * (1.0 + u_barrel * r2);
        }
        return uv;
      }

      void main() {
        vec2 uv = computeSourceUV(v_uv);
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
          return;
        }
        vec3 s = texture2D(u_image, uv).rgb;
        vec3 lin = pow(max(s, vec3(0.0001)), vec3(2.2)) * pow(2.0, clamp(u_ev, -2.5, 2.5));
        float lum = dot(lin, vec3(0.299, 0.587, 0.114));
        float w = smoothstep(u_bloomThresh, 1.15, lum);
        w = w * w * 1.25 + pow(max(0.0, lum - 0.90), 2.0) * 0.9;
        vec3 warmHalo = lin * vec3(1.18, 0.84, 0.52);
        vec3 bloomCol = mix(lin, warmHalo, u_halationWarmth);
        gl_FragColor = vec4(min(bloomCol * w, vec3(2.5)), 1.0);
      }
    `;

    const BLUR_FS_SRC = `
      precision highp float;
      uniform sampler2D u_tex;
      uniform vec2 u_step;
      varying vec2 v_uv;

      void main() {
        vec3 sum = texture2D(u_tex, v_uv).rgb * 0.227027;
        vec2 o1 = u_step * 1.38461538;
        vec2 o2 = u_step * 3.23076923;
        sum += texture2D(u_tex, clamp(v_uv + o1, 0.001, 0.999)).rgb * 0.31621622;
        sum += texture2D(u_tex, clamp(v_uv - o1, 0.001, 0.999)).rgb * 0.31621622;
        sum += texture2D(u_tex, clamp(v_uv + o2, 0.001, 0.999)).rgb * 0.07027027;
        sum += texture2D(u_tex, clamp(v_uv - o2, 0.001, 0.999)).rgb * 0.07027027;
        gl_FragColor = vec4(sum, 1.0);
      }
    `;

    const MAIN_FS_SRC = `
      precision highp float;

      uniform sampler2D u_image;
      uniform sampler2D u_bloomTex;
      uniform vec2 u_effSrcRes;
      uniform vec2 u_outRes;
      uniform float u_rotRad;
      uniform bool u_showOriginal;

      uniform float u_barrel;
      uniform float u_ca;
      uniform float u_softness;
      uniform float u_vignette;
      uniform float u_flashFalloff;
      uniform float u_bloomAmount;

      uniform float u_ev;
      uniform float u_blackCrush;
      uniform float u_contrast;
      uniform float u_shoulder;
      uniform float u_saturation;
      uniform float u_vibrance;
      uniform mat3 u_colorMatrix;
      uniform vec3 u_shadowTint;
      uniform vec3 u_midTint;
      uniform vec3 u_highTint;
      uniform bool u_isBW;
      uniform bool u_orthoBW;

      uniform float u_seed;
      uniform float u_lightLeak;
      uniform float u_chemStain;
      uniform float u_agedPaper;
      uniform float u_scratches;

      uniform float u_grain;
      uniform float u_grainSize;

      varying vec2 v_uv;

      vec2 computeSourceUV(vec2 outUV) {
        vec2 pOut = (outUV - 0.5) * u_outRes;
        float c = cos(u_rotRad);
        float s = sin(u_rotRad);
        vec2 pRot = vec2(pOut.x * c - pOut.y * s, pOut.x * s + pOut.y * c);
        vec2 uv = pRot / u_effSrcRes + 0.5;
        if (u_barrel > 0.0005) {
          vec2 d = uv - 0.5;
          float r2 = dot(d, d);
          float comp = 1.0 - u_barrel * 0.52;
          uv = 0.5 + d * comp * (1.0 + u_barrel * r2);
        }
        return uv;
      }

      float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      float valueNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
                   mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * valueNoise(p);
          p *= 2.03;
          a *= 0.5;
        }
        return v;
      }

      float filmGrain(vec2 p, float seed) {
        float fine = (hash12(p + seed) + hash12(p * 1.37 + seed + 11.3)) - 1.0;
        float clump = (hash12(floor(p * 0.58) + seed * 1.9) + hash12(floor(p * 0.58) * 1.41 + seed)) - 1.0;
        return mix(fine, clump, 0.38);
      }

      vec3 samplePlasticOptics(vec2 uv, float edgeFactor) {
        if (u_ca <= 0.001 && u_softness <= 0.001) {
          return texture2D(u_image, uv).rgb;
        }
        vec2 d = uv - 0.5;
        vec2 caShift = d * edgeFactor * (u_ca * 0.0155);
        float softRad = edgeFactor * (u_softness * 0.0038 + u_ca * 0.0014);

        vec2 uvR = clamp(uv + caShift, 0.001, 0.999);
        vec2 uvG = clamp(uv, 0.001, 0.999);
        vec2 uvB = clamp(uv - caShift * 1.18, 0.001, 0.999);

        if (softRad <= 0.0002) {
          return vec3(
            texture2D(u_image, uvR).r,
            texture2D(u_image, uvG).g,
            texture2D(u_image, uvB).b
          );
        }

        float srcAspect = u_effSrcRes.x / max(1.0, u_effSrcRes.y);
        vec2 radDir = length(d) > 0.001 ? normalize(d) : vec2(1.0, 0.0);
        vec2 tanDir = vec2(-radDir.y, radDir.x);
        vec2 aspectFix = vec2(1.0 / max(1.0, srcAspect), min(1.0, srcAspect));

        vec2 s1 = radDir * softRad * aspectFix;
        vec2 s2 = tanDir * softRad * 0.72 * aspectFix;

        float r = (
          texture2D(u_image, uvR).r * 0.36 +
          texture2D(u_image, clamp(uvR + s1, 0.001, 0.999)).r * 0.16 +
          texture2D(u_image, clamp(uvR - s1, 0.001, 0.999)).r * 0.16 +
          texture2D(u_image, clamp(uvR + s2, 0.001, 0.999)).r * 0.16 +
          texture2D(u_image, clamp(uvR - s2, 0.001, 0.999)).r * 0.16
        );
        float g = (
          texture2D(u_image, uvG).g * 0.40 +
          texture2D(u_image, clamp(uvG + s1, 0.001, 0.999)).g * 0.15 +
          texture2D(u_image, clamp(uvG - s1, 0.001, 0.999)).g * 0.15 +
          texture2D(u_image, clamp(uvG + s2, 0.001, 0.999)).g * 0.15 +
          texture2D(u_image, clamp(uvG - s2, 0.001, 0.999)).g * 0.15
        );
        float b = (
          texture2D(u_image, uvB).b * 0.36 +
          texture2D(u_image, clamp(uvB + s1, 0.001, 0.999)).b * 0.16 +
          texture2D(u_image, clamp(uvB - s1, 0.001, 0.999)).b * 0.16 +
          texture2D(u_image, clamp(uvB + s2, 0.001, 0.999)).b * 0.16 +
          texture2D(u_image, clamp(uvB - s2, 0.001, 0.999)).b * 0.16
        );
        return vec3(r, g, b);
      }

      void main() {
        vec2 uv = computeSourceUV(v_uv);
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
          gl_FragColor = vec4(0.03, 0.03, 0.035, 1.0);
          return;
        }
        if (u_showOriginal) {
          gl_FragColor = vec4(texture2D(u_image, uv).rgb, 1.0);
          return;
        }

        vec2 cUV = uv - 0.5;
        float r2Src = dot(cUV, cUV) * 2.0;
        float edgeFactor = smoothstep(0.14, 1.05, r2Src);

        vec3 rawRGB = samplePlasticOptics(uv, edgeFactor);
        vec3 col = pow(max(rawRGB, vec3(0.0001)), vec3(2.2));
        col *= pow(2.0, clamp(u_ev, -4.0, 4.0));

        if (u_flashFalloff > 0.001) {
          float rad = smoothstep(0.02, 0.95, r2Src);
          float flashGain = mix(1.95, 0.42, pow(rad, 0.85));
          vec3 xenonTint = mix(vec3(1.00, 1.00, 1.04), vec3(1.00, 0.97, 0.93), rad);
          col *= mix(vec3(1.0), xenonTint * flashGain, u_flashFalloff);
        }

        float vigDist = dot(v_uv - 0.5, v_uv - 0.5) * 2.0;
        float vig = pow(max(0.08, 1.0 - vigDist * u_vignette * 0.62), 1.55);
        col *= vig;

        vec3 bloomSample = texture2D(u_bloomTex, v_uv).rgb;
        col += bloomSample * (u_bloomAmount * 0.85);

        if (u_chemStain > 0.001) {
          float amt = clamp(u_chemStain, 0.0, 1.0);
          float s1 = fbm(v_uv * vec2(2.8, 5.2) + vec2(u_seed * 11.3, u_seed * 7.1));
          float s2 = fbm(v_uv * vec2(6.5, 3.0) - vec2(u_seed * 5.7, u_seed * 13.9));
          float blotch = smoothstep(0.32, 0.78, s1 * 0.65 + s2 * 0.35);
          float streakX = v_uv.x * 14.0 + fbm(v_uv * 5.0 + u_seed * 9.0) * 2.2;
          float drip = smoothstep(0.74, 0.92, valueNoise(vec2(streakX, v_uv.y * 1.6 + u_seed * 4.0)));
          col *= mix(1.0, mix(0.45, 1.60, blotch), amt * 0.85);
          vec3 tintShift = mix(vec3(1.18, 0.86, 0.72), vec3(0.76, 1.06, 1.22), s2);
          col = mix(col, col * tintShift, blotch * amt * 0.72);
          col *= (1.0 - drip * amt * 0.38);
          col += vec3(0.16, 0.10, 0.04) * drip * amt;
        }

        // Shoulder roll-off morbido sulle alte luci in lineare
        col = col / (1.0 + col * u_shoulder);
        col *= (1.0 + u_shoulder * 0.86);

        // Encoding gamma + ancoraggio neri profondi + S-curve filmica
        col = pow(max(col, vec3(0.0)), vec3(1.0 / 2.2));
        col = clamp((col - u_blackCrush) / max(0.05, 1.0 - u_blackCrush), 0.0, 1.0);

        float lumPre = dot(col, vec3(0.299, 0.587, 0.114));
        float lumS = lumPre * lumPre * (3.0 - 2.0 * lumPre);
        vec3 chanS = col * col * (3.0 - 2.0 * col);
        vec3 lumaScaled = col * (lumS / max(lumPre, 0.0005));
        col = mix(col, mix(lumaScaled, chanS, 0.28), u_contrast);
        col = clamp(col, 0.0, 1.0);

        if (u_isBW) {
          vec3 w = u_orthoBW ? vec3(0.14, 0.52, 0.34) : vec3(0.33, 0.55, 0.12);
          float bw = dot(col, w);
          col = vec3(bw);
        } else {
          col = u_colorMatrix * col;
          float l = dot(col, vec3(0.299, 0.587, 0.114));
          float maxC = max(col.r, max(col.g, col.b));
          float minC = min(col.r, min(col.g, col.b));
          float sat = maxC - minC;
          float vibBoost = 1.0 + u_vibrance * (1.0 - smoothstep(0.0, 0.65, sat));
          col = mix(vec3(l), col, u_saturation * vibBoost);
        }
        col = clamp(col, 0.0, 1.0);

        float lum = clamp(dot(col, vec3(0.299, 0.587, 0.114)), 0.0, 1.0);
        float shW = pow(max(1.0 - lum, 0.0001), 2.1);
        float midW = 4.0 * lum * (1.0 - lum);
        float hiW = pow(max(lum, 0.0001), 1.7);
        col *= mix(vec3(1.0), u_shadowTint, shW);
        col *= mix(vec3(1.0), u_midTint, midW);
        col *= mix(vec3(1.0), u_highTint, hiW);
        col = clamp(col, 0.0, 1.0);

        // Light Leaks organici stile Huji (4 archetipi)
        if (u_lightLeak > 0.001) {
          float amt = clamp(u_lightLeak, 0.0, 1.0);
          float arch = fract(u_seed * 13.37);
          float flipX = step(0.5, fract(u_seed * 29.1));
          float flipY = step(0.5, fract(u_seed * 47.7));
          vec2 luv = vec2(flipX > 0.5 ? (1.0 - v_uv.x) : v_uv.x, flipY > 0.5 ? (1.0 - v_uv.y) : v_uv.y);
          float n1 = fbm(luv * 3.0 + u_seed * 17.0);
          float n2 = fbm(luv * 6.5 - u_seed * 23.0);
          vec3 leakRGB = vec3(0.0);

          if (arch < 0.34) {
            // Archetipo 0: Fascio diagonale prismatico caldo/arcobaleno (stile Huji interno)
            float curve = luv.y + sin(luv.x * 3.1 + fract(u_seed * 7.0) * 2.0) * 0.08 + (n1 - 0.5) * 0.06;
            float offset = 0.10 + fract(u_seed * 19.3) * 0.14;
            float distBand = curve - offset;
            float mainGlow = exp(-(distBand * distBand) / (0.012 + amt * 0.018));
            float prismShift = clamp((distBand + 0.08) / 0.18, 0.0, 1.0);
            vec3 prismCol = mix(vec3(1.00, 0.34, 0.06), vec3(0.96, 0.22, 0.52), smoothstep(0.15, 0.65, prismShift));
            prismCol = mix(prismCol, vec3(0.24, 0.80, 0.74), smoothstep(0.60, 0.95, prismShift) * 0.55);
            float alongFade = smoothstep(-0.05, 0.65, 1.0 - luv.x * 0.65 + n2 * 0.25);
            leakRGB += prismCol * mainGlow * alongFade * (amt * 0.95);
            // Bagliore caldo angolare di supporto
            float cGlow = exp(-dot(luv - vec2(0.15, 0.05), luv - vec2(0.15, 0.05)) * 5.0);
            leakRGB += vec3(1.00, 0.56, 0.16) * cGlow * amt * 0.62;
          } else if (arch < 0.64) {
            // Archetipo 1: Banda verticale calda da infiltrazione sportellino laterale
            float xPos = 0.04 + fract(u_seed * 11.7) * 0.16;
            float dx = luv.x - xPos + (n1 - 0.5) * 0.05;
            float edgeGlow = exp(-(dx * dx) / (0.010 + amt * 0.022));
            float yMod = 0.45 + 0.55 * exp(-pow((luv.y - (0.3 + fract(u_seed * 23.1) * 0.4)) * 1.4, 2.0));
            float core = pow(edgeGlow, 2.2);
            vec3 c1 = vec3(0.98, 0.20, 0.05) * edgeGlow + vec3(1.0, 0.68, 0.18) * core;
            leakRGB += c1 * yMod * (0.65 + 0.45 * n2) * amt;
          } else if (arch < 0.84) {
            // Archetipo 2: Flare rosso-arancio d'angolo + fascio obliquo
            float dCorner = length(luv - vec2(0.0, 0.0));
            float cornerMask = exp(-(dCorner * dCorner) * (3.2 - amt * 1.1));
            float diag = (luv.x * 0.72 + luv.y * 0.68) - (0.28 + fract(u_seed * 31.3) * 0.18);
            float beam = exp(-(diag * diag) / 0.014) * smoothstep(0.85, 0.1, luv.x);
            leakRGB += vec3(0.98, 0.26, 0.12) * cornerMask * amt * 0.90;
            leakRGB += vec3(1.00, 0.58, 0.18) * beam * (0.6 + 0.5 * n1) * amt * 0.78;
          } else {
            // Archetipo 3: Doppia infiltrazione morbida opposta
            float g1 = exp(-pow((luv.x - 0.05) * 5.0, 2.0)) * (0.5 + 0.5 * n1);
            float g2 = exp(-pow((1.0 - luv.x - 0.06) * 5.5, 2.0)) * (0.4 + 0.6 * n2);
            leakRGB += vec3(0.98, 0.28, 0.08) * g1 * amt * 0.85;
            leakRGB += vec3(0.92, 0.18, 0.42) * g2 * amt * 0.55;
          }

          col = 1.0 - (1.0 - col) * (1.0 - clamp(leakRGB, 0.0, 0.94));
        }

        // Patina invecchiamento opzionale (per decadi vecchie o slider manuale)
        if (u_agedPaper > 0.001) {
          float amt = clamp(u_agedPaper, 0.0, 1.0);
          float oldL = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(col, vec3(oldL), amt * 0.30);
          float bDist = min(min(v_uv.x, 1.0 - v_uv.x), min(v_uv.y, 1.0 - v_uv.y));
          float nEdge = fbm(v_uv * 4.2 + u_seed * 17.0);
          float ePat = smoothstep(mix(0.16, 0.38, nEdge), 0.0, bDist);
          col = mix(col, col * vec3(1.03, 0.87, 0.60), amt * 0.68);
          col = mix(col, col * vec3(0.86, 0.66, 0.40), clamp(ePat * amt * 0.85, 0.0, 0.85));
          float fox = smoothstep(0.65, 0.84, fbm(v_uv * 16.0 + u_seed * 41.0));
          col = mix(col, vec3(0.46, 0.28, 0.14), clamp(fox * amt * 0.60, 0.0, 0.68));
        }

        // Polvere / graffi leggeri opzionali (per decadi vecchie o slider manuale)
        if (u_scratches > 0.001) {
          float amt = clamp(u_scratches, 0.0, 1.0);
          float aspect = u_outRes.x / max(1.0, u_outRes.y);
          vec2 uvA = vec2(v_uv.x * aspect, v_uv.y);
          float dust = 0.0;
          for (int dl = 0; dl < 2; dl++) {
            float sc = dl == 0 ? 20.0 : 38.0;
            vec2 p = uvA * sc + vec2(u_seed * (dl == 0 ? 23.0 : 59.0));
            vec2 id = floor(p);
            vec2 f = fract(p) - 0.5;
            if (hash12(id + float(dl) * 17.3) > 0.925) {
              vec2 jit = vec2(hash12(id + 3.1) - 0.5, hash12(id + 7.9) - 0.5) * 0.5;
              float rS = 0.045 + hash12(id + 12.7) * 0.075;
              dust += smoothstep(rS, rS * 0.25, length(f - jit)) * 0.45;
            }
          }
          col = mix(col, vec3(0.94, 0.92, 0.88), clamp(dust * amt * 0.65, 0.0, 0.65));

          float ang = (fract(u_seed * 43.7) - 0.5) * 0.8;
          vec2 rS = vec2(uvA.x * cos(ang) - uvA.y * sin(ang), uvA.x * sin(ang) + uvA.y * cos(ang));
          float streak = smoothstep(0.89, 0.97, valueNoise(vec2(rS.x * 28.0 + u_seed * 17.0, rS.y * 2.8)));
          col = mix(col, vec3(0.90, 0.87, 0.82), clamp(streak * amt * 0.35, 0.0, 0.40));
        }

        // Grana film normalizzata su sensore virtuale 35mm (identica a ogni risoluzione)
        float gLum = dot(col, vec3(0.299, 0.587, 0.114));
        float midMask = 4.0 * gLum * (1.0 - gLum);
        float gStrength = u_grain * (0.28 + 0.72 * midMask);
        float outAspect = u_outRes.x / max(1.0, u_outRes.y);
        vec2 grainCoord = v_uv * vec2(1200.0 * outAspect, 1200.0) / max(0.5, u_grainSize);

        if (u_isBW) {
          col += vec3(filmGrain(grainCoord, 1.7) * gStrength);
        } else {
          float gR = filmGrain(grainCoord, 1.1) * gStrength;
          float gG = filmGrain(grainCoord, 2.7) * gStrength * 0.86;
          float gB = filmGrain(grainCoord, 4.3) * gStrength * 1.12;
          col += vec3(gR, gG, gB);
        }

        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }
    `;

    let progBright = null, progBlur = null, progMain = null;
    let srcTex = null, quadPosBuf = null, quadUvBuf = null;
    let fboA = null, fboB = null, texA = null, texB = null;
    let curFboW = 0, curFboH = 0;

    function compile(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error("Disposable shader error:", gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    function buildProgram(fsSrc) {
        const vs = compile(gl.VERTEX_SHADER, VS_SRC);
        const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
        if (!vs || !fs) return null;
        const p = gl.createProgram();
        gl.attachShader(p, vs);
        gl.attachShader(p, fs);
        gl.linkProgram(p);
        if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
            console.error("Disposable link error:", gl.getProgramInfoLog(p));
            return null;
        }
        return p;
    }

    function createTex(w, h) {
        const t = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, t);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        if (w > 0 && h > 0) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        return t;
    }

    function init() {
        if (!gl || progMain) return !!progMain;
        progBright = buildProgram(BRIGHT_FS_SRC);
        progBlur = buildProgram(BLUR_FS_SRC);
        progMain = buildProgram(MAIN_FS_SRC);
        if (!progBright || !progBlur || !progMain) return false;

        quadPosBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadPosBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

        quadUvBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadUvBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), gl.STATIC_DRAW);

        srcTex = createTex(0, 0);
        return true;
    }

    function ensureFBOs(w, h) {
        if (curFboW === w && curFboH === h && fboA && fboB) return;
        if (texA) gl.deleteTexture(texA);
        if (texB) gl.deleteTexture(texB);
        if (fboA) gl.deleteFramebuffer(fboA);
        if (fboB) gl.deleteFramebuffer(fboB);

        texA = createTex(w, h);
        fboA = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fboA);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texA, 0);

        texB = createTex(w, h);
        fboB = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fboB);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texB, 0);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        curFboW = w;
        curFboH = h;
    }

    function bindQuadAttribs(prog) {
        const pLoc = gl.getAttribLocation(prog, "a_pos");
        gl.bindBuffer(gl.ARRAY_BUFFER, quadPosBuf);
        gl.enableVertexAttribArray(pLoc);
        gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0);

        const uLoc = gl.getAttribLocation(prog, "a_uv");
        gl.bindBuffer(gl.ARRAY_BUFFER, quadUvBuf);
        gl.enableVertexAttribArray(uLoc);
        gl.vertexAttribPointer(uLoc, 2, gl.FLOAT, false, 0, 0);
    }

    function render(srcImg, params) {
        let srcW = srcImg.naturalWidth || srcImg.width;
        let srcH = srcImg.naturalHeight || srcImg.height;
        if (!gl || !init() || !srcW || !srcH) return outCanvas;

        let uploadSrc = srcImg;
        let preCanvas = null;
        if (srcW > MAX_TEX || srcH > MAX_TEX) {
            const sc = Math.min(MAX_TEX / srcW, MAX_TEX / srcH);
            const nw = Math.round(srcW * sc);
            const nh = Math.round(srcH * sc);
            preCanvas = document.createElement("canvas");
            preCanvas.width = nw;
            preCanvas.height = nh;
            preCanvas.getContext("2d").drawImage(srcImg, 0, 0, nw, nh);
            uploadSrc = preCanvas;
            srcW = nw;
            srcH = nh;
        }

        const rotDeg = params.rotation || 0;
        const rotRad = (rotDeg * Math.PI) / 180.0;
        const isQuarter = Math.abs(Math.sin(rotRad)) > Math.abs(Math.cos(rotRad));
        const rotSrcW = isQuarter ? srcH : srcW;
        const rotSrcH = isQuarter ? srcW : srcH;

        const targetMax = Math.min(MAX_TEX, params.maxDim || Math.max(rotSrcW, rotSrcH));
        let outW = rotSrcW, outH = rotSrcH;
        if (outW > targetMax || outH > targetMax) {
            const r = Math.min(targetMax / outW, targetMax / outH);
            outW = Math.round(outW * r);
            outH = Math.round(outH * r);
        }

        const dimScale = outW / rotSrcW;
        const effSrcW = srcW * dimScale;
        const effSrcH = srcH * dimScale;

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, srcTex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, uploadSrc);
        if (preCanvas) { preCanvas.width = 0; preCanvas.height = 0; }

        // FBO Blur Bloom / Halation (max lato 448px per alone ampio e morbido)
        const fboScale = Math.min(1.0, 448 / Math.max(outW, outH));
        const fboW = Math.max(64, Math.round(outW * fboScale));
        const fboH = Math.max(64, Math.round(outH * fboScale));
        ensureFBOs(fboW, fboH);

        if (params.enabled && params.bloom > 0.001) {
            // Pass 1A: Bright Extract -> fboA
            gl.bindFramebuffer(gl.FRAMEBUFFER, fboA);
            gl.viewport(0, 0, fboW, fboH);
            gl.useProgram(progBright);
            bindQuadAttribs(progBright);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, srcTex);
            gl.uniform1i(gl.getUniformLocation(progBright, "u_image"), 0);
            gl.uniform2f(gl.getUniformLocation(progBright, "u_effSrcRes"), effSrcW, effSrcH);
            gl.uniform2f(gl.getUniformLocation(progBright, "u_outRes"), outW, outH);
            gl.uniform1f(gl.getUniformLocation(progBright, "u_rotRad"), rotRad);
            gl.uniform1f(gl.getUniformLocation(progBright, "u_barrel"), params.barrel);
            gl.uniform1f(gl.getUniformLocation(progBright, "u_bloomThresh"), params.bloomThresh);
            gl.uniform1f(gl.getUniformLocation(progBright, "u_halationWarmth"), params.halationWarmth);
            gl.uniform1f(gl.getUniformLocation(progBright, "u_ev"), params.ev);
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            // Pass 1B + 1C (2 iterazioni H+V per glow morbido senza aloni rigidi)
            gl.useProgram(progBlur);
            bindQuadAttribs(progBlur);
            gl.uniform1i(gl.getUniformLocation(progBlur, "u_tex"), 0);

            for (let pass = 0; pass < 2; pass++) {
                const radMul = pass === 0 ? 1.35 : 2.15;
                // H: fboA -> fboB
                gl.bindFramebuffer(gl.FRAMEBUFFER, fboB);
                gl.bindTexture(gl.TEXTURE_2D, texA);
                gl.uniform2f(gl.getUniformLocation(progBlur, "u_step"), radMul / fboW, 0.0);
                gl.drawArrays(gl.TRIANGLES, 0, 6);

                // V: fboB -> fboA
                gl.bindFramebuffer(gl.FRAMEBUFFER, fboA);
                gl.bindTexture(gl.TEXTURE_2D, texB);
                gl.uniform2f(gl.getUniformLocation(progBlur, "u_step"), 0.0, radMul / fboH);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
            }
        } else {
            gl.bindFramebuffer(gl.FRAMEBUFFER, fboA);
            gl.viewport(0, 0, fboW, fboH);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        // Pass 2: Main Composite su outCanvas a risoluzione target
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        outCanvas.width = outW;
        outCanvas.height = outH;
        gl.viewport(0, 0, outW, outH);
        gl.useProgram(progMain);
        bindQuadAttribs(progMain);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, srcTex);
        gl.uniform1i(gl.getUniformLocation(progMain, "u_image"), 0);

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, texA);
        gl.uniform1i(gl.getUniformLocation(progMain, "u_bloomTex"), 1);

        gl.uniform2f(gl.getUniformLocation(progMain, "u_effSrcRes"), effSrcW, effSrcH);
        gl.uniform2f(gl.getUniformLocation(progMain, "u_outRes"), outW, outH);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_rotRad"), rotRad);
        gl.uniform1i(gl.getUniformLocation(progMain, "u_showOriginal"), params.enabled ? 0 : 1);

        gl.uniform1f(gl.getUniformLocation(progMain, "u_barrel"), params.barrel);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_ca"), params.ca);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_softness"), params.softness);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_vignette"), params.vignette);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_flashFalloff"), params.flashFalloff);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_bloomAmount"), params.bloom);

        gl.uniform1f(gl.getUniformLocation(progMain, "u_ev"), params.ev);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_blackCrush"), params.blackCrush);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_contrast"), params.contrast);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_shoulder"), params.shoulder);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_saturation"), params.saturation);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_vibrance"), params.vibrance);
        gl.uniformMatrix3fv(gl.getUniformLocation(progMain, "u_colorMatrix"), false, new Float32Array(params.matrix));
        gl.uniform3fv(gl.getUniformLocation(progMain, "u_shadowTint"), new Float32Array(params.shadowTint));
        gl.uniform3fv(gl.getUniformLocation(progMain, "u_midTint"), new Float32Array(params.midTint));
        gl.uniform3fv(gl.getUniformLocation(progMain, "u_highTint"), new Float32Array(params.highTint));
        gl.uniform1i(gl.getUniformLocation(progMain, "u_isBW"), params.isBW ? 1 : 0);
        gl.uniform1i(gl.getUniformLocation(progMain, "u_orthoBW"), params.orthoBW ? 1 : 0);

        gl.uniform1f(gl.getUniformLocation(progMain, "u_seed"), params.seed);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_lightLeak"), params.lightLeak);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_chemStain"), params.chemStain);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_agedPaper"), params.agedPaper);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_scratches"), params.scratches);

        gl.uniform1f(gl.getUniformLocation(progMain, "u_grain"), params.grain);
        gl.uniform1f(gl.getUniformLocation(progMain, "u_grainSize"), params.grainSize);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        return outCanvas;
    }

    return { render, MAX_TEX };
})();

/* =========================================================
   TIMBRO DATA QUARZO A 7 SEGMENTI ('98 11 27)
   ========================================================= */
const SEVEN_SEG_MAP = {
    "0": [1, 1, 1, 1, 1, 1, 0],
    "1": [0, 1, 1, 0, 0, 0, 0],
    "2": [1, 1, 0, 1, 1, 0, 1],
    "3": [1, 1, 1, 1, 0, 0, 1],
    "4": [0, 1, 1, 0, 0, 1, 1],
    "5": [1, 0, 1, 1, 0, 1, 1],
    "6": [1, 0, 1, 1, 1, 1, 1],
    "7": [1, 1, 1, 0, 0, 0, 0],
    "8": [1, 1, 1, 1, 1, 1, 1],
    "9": [1, 1, 1, 1, 0, 1, 1]
};

function drawQuartzDateStamp(ctx, canvasW, canvasH, text, glowColor = "#ff5514") {
    if (!text) return;
    const minSide = Math.min(canvasW, canvasH);
    const digitH = Math.max(18, Math.round(minSide * 0.032));
    const digitW = digitH * 0.52;
    const thick = Math.max(2.0, digitH * 0.13);
    const gap = digitH * 0.28;
    const spaceGap = digitH * 0.42;
    const aposW = digitH * 0.22;

    let totalW = 0;
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") totalW += spaceGap;
        else if (ch === "'") totalW += aposW + gap * 0.4;
        else totalW += digitW + (i < text.length - 1 && text[i + 1] !== " " ? gap : 0);
    }

    const padX = Math.round(canvasW * 0.045);
    const padY = Math.round(canvasH * 0.038);
    const startX = canvasW - padX - totalW;
    const startY = canvasH - padY - digitH;

    const drawHBar = (x, y, w, t) => {
        const hw = t * 0.48;
        ctx.beginPath();
        ctx.moveTo(x + hw, y);
        ctx.lineTo(x + w - hw, y);
        ctx.lineTo(x + w, y + hw);
        ctx.lineTo(x + w - hw, y + t);
        ctx.lineTo(x + hw, y + t);
        ctx.lineTo(x, y + hw);
        ctx.closePath();
        ctx.fill();
    };

    const drawVBar = (x, y, h, t) => {
        const hw = t * 0.48;
        ctx.beginPath();
        ctx.moveTo(x + hw, y);
        ctx.lineTo(x + t, y + hw);
        ctx.lineTo(x + t, y + h - hw);
        ctx.lineTo(x + hw, y + h);
        ctx.lineTo(x, y + h - hw);
        ctx.lineTo(x, y + hw);
        ctx.closePath();
        ctx.fill();
    };

    const renderPass = (fillStyle, shadowCol, shadowBlur) => {
        ctx.save();
        ctx.translate(startX, startY);
        ctx.transform(1, 0, -0.09, 1, 0, 0);
        ctx.fillStyle = fillStyle;
        ctx.shadowColor = shadowCol;
        ctx.shadowBlur = shadowBlur;

        let cx = 0;
        const halfH = digitH * 0.5;
        const segGap = thick * 0.16;

        for (let i = 0; i < text.length; i++) {
            const ch = text[i];
            if (ch === " ") {
                cx += spaceGap;
                continue;
            }
            if (ch === "'") {
                ctx.fillRect(cx + aposW * 0.25, 0, thick * 0.9, digitH * 0.26);
                cx += aposW + gap * 0.4;
                continue;
            }
            const segs = SEVEN_SEG_MAP[ch];
            if (segs) {
                const hLen = digitW - thick * 0.5;
                const vLen = halfH - thick * 0.55;
                // A (top), B (top-right), C (bot-right), D (bottom), E (bot-left), F (top-left), G (mid)
                if (segs[0]) drawHBar(cx + thick * 0.25, 0, hLen, thick);
                if (segs[1]) drawVBar(cx + digitW - thick, thick * 0.25 + segGap, vLen - segGap, thick);
                if (segs[2]) drawVBar(cx + digitW - thick, halfH + segGap, vLen - segGap, thick);
                if (segs[3]) drawHBar(cx + thick * 0.25, digitH - thick, hLen, thick);
                if (segs[4]) drawVBar(cx, halfH + segGap, vLen - segGap, thick);
                if (segs[5]) drawVBar(cx, thick * 0.25 + segGap, vLen - segGap, thick);
                if (segs[6]) drawHBar(cx + thick * 0.25, halfH - thick * 0.5, hLen, thick);
            }
            cx += digitW + (i < text.length - 1 && text[i + 1] !== " " ? gap : 0);
        }
        ctx.restore();
    };

    renderPass(glowColor, glowColor, Math.round(digitH * 0.65));
    renderPass("rgba(255, 218, 158, 0.92)", glowColor, Math.round(digitH * 0.14));
}

/* =========================================================
   STATO & GESTIONE RULLINI USA & GETTA
   ========================================================= */
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
        let settled = false;
        const done = () => { if (!settled) { settled = true; resolve(); } };
        const timer = setTimeout(done, 2500);
        try {
            const tx = db.transaction("vintageRolls", "readwrite");
            tx.objectStore("vintageRolls").put(vRoll);
            tx.oncomplete = () => { clearTimeout(timer); done(); };
            tx.onerror = () => { clearTimeout(timer); done(); };
            tx.onabort = () => { clearTimeout(timer); done(); };
        } catch (e) {
            clearTimeout(timer);
            done();
        }
    });
}

function getAllVintageRollsFromDB() {
    if (!db || !db.objectStoreNames.contains("vintageRolls")) {
        return Promise.resolve([...memoryVintageRolls]);
    }
    return new Promise((resolve) => {
        try {
            const tx = db.transaction("vintageRolls", "readonly");
            const req = tx.objectStore("vintageRolls").getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => resolve([...memoryVintageRolls]);
        } catch (e) {
            resolve([...memoryVintageRolls]);
        }
    });
}

function deleteVintageRollFromDB(id) {
    memoryVintageRolls = memoryVintageRolls.filter(r => r.id !== id);
    if (!db || !db.objectStoreNames.contains("vintageRolls")) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        let settled = false;
        const done = () => { if (!settled) { settled = true; resolve(); } };
        const timer = setTimeout(done, 2000);
        try {
            const tx = db.transaction("vintageRolls", "readwrite");
            tx.objectStore("vintageRolls").delete(id);
            tx.oncomplete = () => { clearTimeout(timer); done(); };
            tx.onerror = () => { clearTimeout(timer); done(); };
            tx.onabort = () => { clearTimeout(timer); done(); };
        } catch (e) {
            clearTimeout(timer);
            done();
        }
    });
}

async function enterDisposableSection() {
    await Promise.race([vintageSaveQueue.catch(() => { }), new Promise(r => setTimeout(r, 1500))]);
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
        <span class="film-canister-iso">${d.grade.isBW ? "B&W" : "COLOR"}</span>
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

async function startVintageCameraStream() {
    stopActiveMediaTracks();
    const localSession = ++cameraSessionSeq;
    const video = document.getElementById("vintageVideo");
    const fallback = document.getElementById("vintageFallbackMsg");
    const videoConstraints = { facingMode: facingMode, width: { ideal: 2560 }, height: { ideal: 1920 } };

    try {
        const stream = await openCameraStreamWithRetry(videoConstraints, localSession);
        if (!stream || localSession !== cameraSessionSeq) {
            if (stream) stream.getTracks().forEach(t => { try { t.stop(); } catch (e) { } });
            return;
        }
        mediaStream = stream;
        video.srcObject = mediaStream;
        video.style.display = "block";
        video.onloadedmetadata = () => syncViewfinderAspectFromVideo("vintageVideo", "vintageVfFrame");
        video.onresize = () => syncViewfinderAspectFromVideo("vintageVideo", "vintageVfFrame");
        await withTimeout(video.play(), 1200, undefined);
        syncViewfinderAspectFromVideo("vintageVideo", "vintageVfFrame");
        if (localSession !== cameraSessionSeq) return;
        fallback.style.display = "none";
        await detectFlashCapabilities();
        if (localSession !== cameraSessionSeq) return;
        updateVintageFlashButtonUI();
    } catch (err) {
        if (localSession === cameraSessionSeq) {
            video.style.display = "none";
            fallback.style.display = "flex";
        }
    }
}

function enterVintageCameraMode() {
    vintageDeveloping = false;
    vintageCapturing = false;
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
    const randomAtShot = vintageRandomEnabled;
    const shotSeed = Math.random();
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
                randomAtShot,
                shotSeed,
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

/* =========================================================
   COSTRUZIONE & GESTIONE EFFETTI CONGRUI PER ANNATA
   ========================================================= */
function buildInitialVintageEdit(decade, applyRandom, showStamp = true, forceVisibleRandom = false, seedOverride = null) {
    const ex = decade.exceptions;
    const rollVal = (prob) => (applyRandom && prob > 0 && Math.random() < prob)
        ? +(0.30 + Math.random() * 0.50).toFixed(2)
        : 0;

    let lightLeak = rollVal(ex.leakProb);
    let chemStain = rollVal(ex.chemProb);
    let agedPaper = rollVal(ex.agedProb);
    let scratches = rollVal(ex.scratchProb);

    // Quando l'utente clicca "🎲 Random" sulla singola foto, garantiamo un effetto congruo ben visibile
    if (applyRandom && forceVisibleRandom) {
        const eligible = [];
        if (ex.leakProb > 0) eligible.push("lightLeak");
        if (ex.chemProb > 0) eligible.push("chemStain");
        if (ex.agedProb > 0) eligible.push("agedPaper");
        if (ex.scratchProb > 0) eligible.push("scratches");

        if (eligible.length > 0 && lightLeak === 0 && chemStain === 0 && agedPaper === 0 && scratches === 0) {
            const pick = eligible[Math.floor(Math.random() * eligible.length)];
            const val = +(0.40 + Math.random() * 0.45).toFixed(2);
            if (pick === "lightLeak") lightLeak = val;
            else if (pick === "chemStain") chemStain = val;
            else if (pick === "agedPaper") agedPaper = val;
            else if (pick === "scratches") scratches = val;
        } else if (eligible.length === 1 && eligible[0] === "lightLeak") {
            lightLeak = +(0.35 + Math.random() * 0.50).toFixed(2);
        }
    }

    const optJitter = (applyRandom && forceVisibleRandom) ? (Math.random() - 0.5) * 0.12 : 0;

    return {
        enabled: true,
        decadeId: decade.id,
        showStamp,
        rotation: 0,
        seed: typeof seedOverride === "number" ? seedOverride : Math.random(),
        lightLeak,
        chemStain,
        agedPaper,
        scratches,
        bloom: +Math.max(0, Math.min(1, (decade.optics.bloom ?? 0.35) + optJitter)).toFixed(2),
        ca: +Math.max(0, Math.min(1, (decade.optics.ca ?? 0.35) + optJitter)).toFixed(2),
        vignette: +Math.max(0, Math.min(1, (decade.optics.vignette ?? 0.38) + optJitter)).toFixed(2),
        ev: decade.evBase || 0.0
    };
}

function ensureFrameVintageEdit(frame) {
    if (!frame.vintageEdit) {
        const dec = getActiveVintageDecade(frame.decadeId || (currentVintageRoll && currentVintageRoll.decadeId));
        const showStamp = frame.dateModeAtShot ? frame.dateModeAtShot !== "off" : !!frame.stamp;
        frame.vintageEdit = buildInitialVintageEdit(dec, false, showStamp, false, frame.shotSeed);
    }
    const edit = frame.vintageEdit;
    const dec = getActiveVintageDecade(edit.decadeId || frame.decadeId);
    if (typeof edit.rotation !== "number") edit.rotation = 0;
    if (typeof edit.bloom !== "number") edit.bloom = dec.optics.bloom ?? 0.35;
    if (typeof edit.ca !== "number") edit.ca = dec.optics.ca ?? 0.35;
    if (typeof edit.vignette !== "number") edit.vignette = dec.optics.vignette ?? 0.38;
    if (typeof edit.lightLeak !== "number") edit.lightLeak = 0;
    if (typeof edit.chemStain !== "number") edit.chemStain = 0;
    if (typeof edit.agedPaper !== "number") edit.agedPaper = 0;
    if (typeof edit.scratches !== "number") edit.scratches = 0;
    if (typeof edit.ev !== "number") edit.ev = dec.evBase || 0;
    return edit;
}

async function renderVintageShotWithEdit(srcImg, frame, maxDimOverride = null) {
    const edit = ensureFrameVintageEdit(frame);
    const decade = getActiveVintageDecade(edit.decadeId || frame.decadeId);
    const g = decade.grade;
    const rot = edit.rotation || 0;
    const flashBoost = frame.flash ? (frame.hardwareFlashFired ? 0.05 : 0.32) : 0.0;
    const flashFalloff = frame.flash ? (frame.hardwareFlashFired ? 0.28 : 0.80) : 0.0;

    const renderedCanvas = DisposableFXEngine.render(srcImg, {
        enabled: !!edit.enabled,
        maxDim: maxDimOverride || DisposableFXEngine.MAX_TEX,
        rotation: rot,
        barrel: edit.enabled ? (decade.optics.barrel || 0.03) : 0.0,
        ca: edit.enabled ? edit.ca : 0.0,
        softness: edit.enabled ? (decade.optics.softness || 0.25) : 0.0,
        vignette: edit.enabled ? edit.vignette : 0.0,
        flashFalloff: edit.enabled ? flashFalloff : 0.0,
        bloom: edit.enabled ? edit.bloom : 0.0,
        bloomThresh: g.bloomThresh ?? 0.60,
        halationWarmth: g.halationWarmth ?? 0.45,
        ev: edit.enabled ? ((edit.ev || 0) + flashBoost) : 0.0,
        blackCrush: g.blackCrush ?? 0.025,
        contrast: g.contrast ?? 0.40,
        shoulder: g.shoulder ?? 0.38,
        saturation: g.saturation ?? 1.15,
        vibrance: g.vibrance ?? 0.15,
        matrix: g.matrix || [1, 0, 0, 0, 1, 0, 0, 0, 1],
        shadowTint: g.shadowTint || [1, 1, 1],
        midTint: g.midTint || [1, 1, 1],
        highTint: g.highTint || [1, 1, 1],
        isBW: !!g.isBW,
        orthoBW: !!g.orthoBW,
        seed: edit.seed,
        lightLeak: edit.enabled ? edit.lightLeak : 0.0,
        chemStain: edit.enabled ? edit.chemStain : 0.0,
        agedPaper: edit.enabled ? edit.agedPaper : 0.0,
        scratches: edit.enabled ? edit.scratches : 0.0,
        grain: edit.enabled ? (g.grain ?? 0.024) : 0.0,
        grainSize: g.grainSize ?? 1.05
    });

    const outCanvas = document.createElement("canvas");
    outCanvas.width = renderedCanvas.width;
    outCanvas.height = renderedCanvas.height;
    const oCtx = outCanvas.getContext("2d");
    oCtx.drawImage(renderedCanvas, 0, 0);

    if (edit.enabled && edit.showStamp) {
        const stampTxt = resolveFrameStampString(frame, decade);
        drawQuartzDateStamp(oCtx, outCanvas.width, outCanvas.height, stampTxt, decade.stampColor || "#ff5514");
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

    await Promise.race([vintageSaveQueue.catch(() => { }), new Promise(r => setTimeout(r, 2000))]);
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
        const applyRandom = typeof frame.randomAtShot === "boolean" ? frame.randomAtShot : vintageRandomEnabled;
        frame.vintageEdit = buildInitialVintageEdit(decade, applyRandom, showStamp, false, frame.shotSeed);

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
    document.getElementById("vintageLabSubtitle").textContent = `${currentVintageRoll.frames.length} foto • Tocca per ruotare o regolare effetti`;

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
            img.style.objectFit = "contain";
            img.style.backgroundColor = "#0b0b0e";
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
            tagEl.textContent = edit.enabled ? (edit.showStamp ? resolveFrameStampString(frame, editDec) : editDec.tag) : "ORIG";
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
    const rot = ((edit.rotation || 0) % 360 + 360) % 360;

    document.getElementById("vintageDetailTitle").textContent = `${dec.name} • #${String(frame.number).padStart(2, "0")}`;
    document.getElementById("vintageDetailMeta").textContent = `${edit.enabled ? dec.tag : "ORIG. PULITA"}${rot ? ` • ${rot}°` : ""}${frame.savedLocally ? " • ✓ Salvata" : ""}`;

    const starBtn = document.getElementById("vintageDetailStarBtn");
    starBtn.textContent = frame.starred ? "★" : "☆";
    starBtn.classList.toggle("btn-gold", !!frame.starred);

    const effBtn = document.getElementById("vEditEffectsToggle");
    effBtn.textContent = edit.enabled ? "🎞️ Pellicola: ON" : "🎞️ Pellicola: OFF";
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
            edit.bloom = item.optics.bloom ?? 0.35;
            edit.ca = item.optics.ca ?? 0.35;
            edit.vignette = item.optics.vignette ?? 0.38;
            edit.ev = item.evBase || 0.0;
            syncVintageEditorUI(frame);
            refreshVintageDetailPreview(frame);
            scheduleSaveVintageEditedFrame(frame);
        });
        strip.appendChild(b);
    });

    const setS = (id, vid, val, fmt) => {
        const el = document.getElementById(id);
        const vEl = document.getElementById(vid);
        if (el) el.value = val;
        if (vEl) vEl.textContent = fmt(val);
    };

    setS("vEditLeakSlider", "vEditLeakVal", edit.lightLeak, v => Math.round(v * 100) + "%");
    setS("vEditBloomSlider", "vEditBloomVal", edit.bloom, v => Math.round(v * 100) + "%");
    setS("vEditCaSlider", "vEditCaVal", edit.ca, v => Math.round(v * 100) + "%");
    setS("vEditVigSlider", "vEditVigVal", edit.vignette, v => Math.round(v * 100) + "%");
    setS("vEditChemSlider", "vEditChemVal", edit.chemStain, v => Math.round(v * 100) + "%");
    setS("vEditAgedSlider", "vEditAgedVal", edit.agedPaper, v => Math.round(v * 100) + "%");
    setS("vEditScratchSlider", "vEditScratchVal", edit.scratches, v => Math.round(v * 100) + "%");
    setS("vEditEvSlider", "vEditEvVal", edit.ev, v => (v > 0 ? "+" : "") + v.toFixed(1));
}

async function refreshVintageDetailPreview(frame) {
    if (!activeVintageRawImg) return;
    const detailCanvas = document.getElementById("vintageDetailCanvas");
    if (vintageDetailShowOriginal) {
        const edit = ensureFrameVintageEdit(frame);
        const rot = ((edit.rotation || 0) % 360 + 360) % 360;
        const isQ = rot === 90 || rot === 270;
        const w = activeVintageRawImg.naturalWidth || activeVintageRawImg.width;
        const h = activeVintageRawImg.naturalHeight || activeVintageRawImg.height;
        const scale = Math.min(1, 1400 / Math.max(w, h));
        const dw = Math.round((isQ ? h : w) * scale);
        const dh = Math.round((isQ ? w : h) * scale);
        detailCanvas.width = dw;
        detailCanvas.height = dh;
        const dCtx = detailCanvas.getContext("2d");
        dCtx.save();
        dCtx.translate(dw / 2, dh / 2);
        dCtx.rotate((rot * Math.PI) / 180);
        const drawW = isQ ? dh : dw;
        const drawH = isQ ? dw : dh;
        dCtx.drawImage(activeVintageRawImg, -drawW / 2, -drawH / 2, drawW, drawH);
        dCtx.restore();
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

    function rotateActiveVintageShot(deltaDeg) {
        if (!currentVintageRoll) return;
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        if (!fr) return;
        const edit = ensureFrameVintageEdit(fr);
        edit.rotation = (((edit.rotation || 0) + deltaDeg) % 360 + 360) % 360;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    }

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
        if (vintageDeveloping) return;
        stopCamera();
        vintageCapturing = false;
        await Promise.race([vintageSaveQueue.catch(() => { }), new Promise(r => setTimeout(r, 1000))]);
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
                await Promise.race([vintageSaveQueue.catch(() => { }), new Promise(r => setTimeout(r, 1000))]);
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
        if (vintageCapturing || isCameraRestarting) return;
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
        if (isCameraRestarting) {
            await withTimeout(cameraRestartPromise, 1500, null);
        }
        const video = document.getElementById("vintageVideo");
        if (!mediaStream || !video || video.readyState < 2 || video.videoWidth === 0) {
            alert("Fotocamera live non ancora pronta: attendi un istante o tocca '📷 Carica' qui a sinistra per caricare foto sul rullino Usa & Getta!");
            return;
        }

        const useFlash = vintageFlashState === "ready";
        const targetRatio = video.videoWidth > video.videoHeight ? (4 / 3) : (3 / 4);
        vintageCapturing = true;
        const curtain = document.getElementById("vintageCurtain");

        try {
            const { canvas: capCanvas, hardwareFlashFired } = await captureFrameWithSyncedFlash(video, targetRatio, {
                useFlash,
                maxLongSide: 2400,
                curtainEl: curtain,
                curtainMinMs: 110,
                restartStreamFn: startVintageCameraStream,
                onShutterFire: () => playShutterSound(1 / 125, useFlash)
            });
            if (!capCanvas) return;
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
    vOn("vEditHeaderRotate90Btn", "click", () => rotateActiveVintageShot(90));
    vOn("vEditRotateCWBtn", "click", () => rotateActiveVintageShot(90));
    vOn("vEditRotateCCWBtn", "click", () => rotateActiveVintageShot(-90));

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

    // 🎲 Random: genera sempre un effetto congruo all'annata ben visibile (cambia seed, posizione e intensità)
    vOn("vEditRerollBtn", "click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const prevEdit = ensureFrameVintageEdit(fr);
        const dec = getActiveVintageDecade(prevEdit.decadeId);
        const keepStamp = prevEdit.showStamp;
        const keepRot = prevEdit.rotation || 0;
        fr.vintageEdit = buildInitialVintageEdit(dec, true, keepStamp, true, Math.random());
        fr.vintageEdit.rotation = keepRot;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    // 🧹 Togli Difetti: rimuove solo difetti accidentali/stampa mantenendo attivi pellicola, colori, grana e ottica
    vOn("vEditResetBtn", "click", () => {
        const fr = currentVintageRoll.frames[activeVintageDetailIdx];
        const prevEdit = ensureFrameVintageEdit(fr);
        const dec = getActiveVintageDecade(prevEdit.decadeId);
        const keepStamp = prevEdit.showStamp;
        const keepRot = prevEdit.rotation || 0;
        fr.vintageEdit = buildInitialVintageEdit(dec, false, keepStamp, false, prevEdit.seed);
        fr.vintageEdit.rotation = keepRot;
        syncVintageEditorUI(fr);
        refreshVintageDetailPreview(fr);
        scheduleSaveVintageEditedFrame(fr);
    });

    [
        ["vEditLeakSlider", "lightLeak"],
        ["vEditBloomSlider", "bloom"],
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