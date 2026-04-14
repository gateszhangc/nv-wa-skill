import { mkdir, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import { execFile as execFileCallback } from "node:child_process";
import path from "node:path";

const execFile = promisify(execFileCallback);

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const brandDir = path.join(publicDir, "brand");

const colors = {
  bg: "#090909",
  bgSoft: "#121110",
  line: "#f1ebdc",
  lineSoft: "rgba(241, 235, 220, 0.14)",
  clay: "#d5542f",
  jade: "#8cd7c2",
  gold: "#d7c768",
  smoke: "#c8c0b1",
};

const markSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="clayStroke" x1="128" y1="72" x2="376" y2="420" gradientUnits="userSpaceOnUse">
      <stop stop-color="${colors.clay}"/>
      <stop offset="1" stop-color="${colors.gold}"/>
    </linearGradient>
  </defs>
  <path d="M118 150C152 108 204 88 256 88C352 88 424 154 424 250C424 364 330 428 238 428C160 428 96 378 88 300" stroke="url(#clayStroke)" stroke-width="28" stroke-linecap="round"/>
  <path d="M160 214C186 176 226 156 270 156C332 156 376 202 376 264C376 338 318 382 252 382C204 382 166 358 148 322" stroke="${colors.line}" stroke-opacity="0.96" stroke-width="20" stroke-linecap="round"/>
  <path d="M198 256C214 230 244 214 278 214C318 214 346 244 346 282C346 326 310 350 274 350C248 350 222 338 208 318" stroke="${colors.jade}" stroke-width="16" stroke-linecap="round"/>
  <path d="M256 114V62" stroke="${colors.gold}" stroke-width="12" stroke-linecap="round"/>
  <path d="M392 168L436 132" stroke="${colors.gold}" stroke-width="12" stroke-linecap="round"/>
  <path d="M120 372L74 402" stroke="${colors.gold}" stroke-width="12" stroke-linecap="round"/>
  <circle cx="256" cy="62" r="12" fill="${colors.gold}"/>
  <circle cx="448" cy="122" r="12" fill="${colors.clay}"/>
  <circle cx="64" cy="410" r="12" fill="${colors.jade}"/>
</svg>
`.trim();

const heroSvg = `
<svg width="1600" height="1400" viewBox="0 0 1600 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="1400" fill="${colors.bg}"/>
  <g opacity="0.18">
    ${Array.from({ length: 14 }, (_, i) => `<path d="M0 ${80 + i * 92}H1600" stroke="${colors.lineSoft}" />`).join("")}
    ${Array.from({ length: 12 }, (_, i) => `<path d="M${110 + i * 140} 0V1400" stroke="${colors.lineSoft}" />`).join("")}
  </g>
  <circle cx="1264" cy="240" r="126" stroke="${colors.jade}" stroke-opacity="0.18" stroke-width="2"/>
  <circle cx="1264" cy="240" r="194" stroke="${colors.line}" stroke-opacity="0.12" stroke-width="2"/>
  <circle cx="1264" cy="240" r="272" stroke="${colors.gold}" stroke-opacity="0.12" stroke-width="2"/>
  <path d="M936 222C1020 140 1126 96 1238 96C1442 96 1578 248 1578 454C1578 692 1390 842 1172 842C1000 842 856 746 810 620" stroke="${colors.clay}" stroke-width="40" stroke-linecap="round"/>
  <path d="M992 358C1044 296 1118 258 1198 258C1324 258 1416 352 1416 476C1416 632 1296 734 1162 734C1058 734 976 682 930 608" stroke="${colors.line}" stroke-width="28" stroke-linecap="round"/>
  <path d="M1066 468C1098 430 1144 406 1192 406C1274 406 1332 464 1332 544C1332 638 1256 692 1178 692C1122 692 1076 668 1046 628" stroke="${colors.jade}" stroke-width="20" stroke-linecap="round"/>
  <path d="M820 976H1462" stroke="${colors.line}" stroke-opacity="0.2" stroke-width="2"/>
  <path d="M820 1082H1462" stroke="${colors.line}" stroke-opacity="0.12" stroke-width="2"/>
  <rect x="118" y="118" width="148" height="148" rx="8" fill="${colors.bgSoft}" stroke="${colors.line}" stroke-opacity="0.22"/>
  <g transform="translate(140 140) scale(0.24)">
    ${markSvg.replace(/^<svg[^>]*>|<\/svg>$/g, "")}
  </g>
  <rect x="118" y="1048" width="308" height="168" rx="8" fill="${colors.bgSoft}" stroke="${colors.line}" stroke-opacity="0.18"/>
  <rect x="118" y="1048" width="12" height="168" fill="${colors.clay}"/>
  <rect x="512" y="1134" width="214" height="118" rx="8" fill="${colors.bgSoft}" stroke="${colors.line}" stroke-opacity="0.14"/>
  <rect x="746" y="972" width="206" height="96" rx="8" fill="${colors.bgSoft}" stroke="${colors.line}" stroke-opacity="0.14"/>
  <rect x="1218" y="1040" width="214" height="140" rx="8" fill="${colors.bgSoft}" stroke="${colors.line}" stroke-opacity="0.14"/>
  <path d="M426 1132H512" stroke="${colors.gold}" stroke-width="3"/>
  <path d="M726 1188H1218" stroke="${colors.jade}" stroke-width="3"/>
</svg>
`.trim();

const processSvg = `
<svg width="1400" height="1100" viewBox="0 0 1400 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1400" height="1100" fill="${colors.bgSoft}"/>
  <g opacity="0.16">
    ${Array.from({ length: 11 }, (_, i) => `<path d="M92 ${112 + i * 84}H1308" stroke="${colors.lineSoft}" />`).join("")}
    ${Array.from({ length: 11 }, (_, i) => `<path d="M${110 + i * 116} 82V1018" stroke="${colors.lineSoft}" />`).join("")}
  </g>
  <rect x="92" y="108" width="354" height="260" rx="8" fill="${colors.bg}" stroke="${colors.line}" stroke-opacity="0.18"/>
  <rect x="524" y="222" width="354" height="260" rx="8" fill="${colors.bg}" stroke="${colors.line}" stroke-opacity="0.18"/>
  <rect x="954" y="336" width="354" height="260" rx="8" fill="${colors.bg}" stroke="${colors.line}" stroke-opacity="0.18"/>
  <rect x="308" y="694" width="354" height="260" rx="8" fill="${colors.bg}" stroke="${colors.line}" stroke-opacity="0.18"/>
  <rect x="738" y="694" width="354" height="260" rx="8" fill="${colors.bg}" stroke="${colors.line}" stroke-opacity="0.18"/>
  <path d="M446 238H524" stroke="${colors.clay}" stroke-width="4"/>
  <path d="M878 352H954" stroke="${colors.jade}" stroke-width="4"/>
  <path d="M1132 596V694" stroke="${colors.gold}" stroke-width="4"/>
  <path d="M662 824H738" stroke="${colors.line}" stroke-width="4"/>
  <text x="126" y="172" fill="${colors.clay}" font-family="Helvetica" font-size="48">01</text>
  <text x="558" y="286" fill="${colors.jade}" font-family="Helvetica" font-size="48">02</text>
  <text x="988" y="400" fill="${colors.gold}" font-family="Helvetica" font-size="48">03</text>
  <text x="342" y="758" fill="${colors.line}" font-family="Helvetica" font-size="48">04</text>
  <text x="772" y="758" fill="${colors.line}" font-family="Helvetica" font-size="48">05</text>
  <circle cx="1188" cy="190" r="76" stroke="${colors.jade}" stroke-opacity="0.18" stroke-width="2"/>
  <circle cx="1188" cy="190" r="118" stroke="${colors.gold}" stroke-opacity="0.16" stroke-width="2"/>
  <g transform="translate(1010 84) scale(0.19)">
    ${markSvg.replace(/^<svg[^>]*>|<\/svg>$/g, "")}
  </g>
</svg>
`.trim();

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${colors.bg}"/>
  <rect x="44" y="44" width="1112" height="542" rx="8" stroke="${colors.line}" stroke-opacity="0.18"/>
  <g opacity="0.16">
    ${Array.from({ length: 6 }, (_, i) => `<path d="M44 ${124 + i * 82}H1156" stroke="${colors.lineSoft}" />`).join("")}
  </g>
  <g transform="translate(120 120) scale(0.48)">
    ${markSvg.replace(/^<svg[^>]*>|<\/svg>$/g, "")}
  </g>
  <text x="390" y="258" fill="${colors.line}" font-family="Helvetica" font-size="74" font-weight="700">女娲.skill</text>
  <text x="390" y="334" fill="${colors.smoke}" font-family="Helvetica" font-size="30">Distill minds into callable skills</text>
  <path d="M390 400H1040" stroke="${colors.clay}" stroke-width="6"/>
  <text x="390" y="466" fill="${colors.jade}" font-family="Helvetica" font-size="32">Research · Extract · Validate · Build</text>
</svg>
`.trim();

const squareIconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="${colors.bg}"/>
  <g transform="translate(0 0)">
    ${markSvg.replace(/^<svg[^>]*>|<\/svg>$/g, "")}
  </g>
</svg>
`.trim();

const renderPng = async (svg, outputPath, width, height) => {
  const tempSvgPath = `${outputPath}.tmp.svg`;
  await writeFile(tempSvgPath, svg);
  await execFile("/usr/local/bin/magick", [
    tempSvgPath,
    "-background",
    "none",
    "-resize",
    `${width}x${height}`,
    outputPath,
  ]);
  await execFile("/bin/rm", ["-f", tempSvgPath]);
};

const main = async () => {
  await mkdir(brandDir, { recursive: true });

  await writeFile(path.join(brandDir, "nuwa-mark.svg"), markSvg);
  await writeFile(path.join(brandDir, "nuwa-hero.svg"), heroSvg);
  await writeFile(path.join(brandDir, "nuwa-process-map.svg"), processSvg);
  await writeFile(path.join(publicDir, "favicon.svg"), markSvg);

  await renderPng(markSvg, path.join(brandDir, "nuwa-mark.png"), 512, 512);
  await renderPng(heroSvg, path.join(brandDir, "nuwa-hero.png"), 1600, 1400);
  await renderPng(processSvg, path.join(brandDir, "nuwa-process-map.png"), 1400, 1100);
  await renderPng(ogSvg, path.join(brandDir, "nuwa-og.png"), 1200, 630);
  await renderPng(markSvg, path.join(publicDir, "favicon.png"), 512, 512);
  await renderPng(squareIconSvg, path.join(publicDir, "apple-touch-icon.png"), 180, 180);

  console.log("Nuwa brand assets generated.");
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
