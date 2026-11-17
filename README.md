# Control Room Video Wall Monitor Calculator — V04

A single-file calculator for sizing CCTV control room video walls in Dubai. It checks each design against **SIRA Administrative Resolution No. 13 of 2025**. It works out the wall monitor quantity, checks SIRA compliance clause by clause, lets you arrange the wall with drag and drop, and calculates the physical space the wall needs.

Open `index.html` in any modern browser. Nothing needs installing. A Windows desktop build is in `desktop/`.

## What it does

**Monitor quantity**
- Total cameras with a critical share (percentage or fixed quantity) and a camera aspect ratio
- Critical cameras are static and placed at the centre of the wall (SIRA item 9)
- Normal cameras are sequenced at the wall edges, in up to 6 sets with a total cycle of 60 s or less (item 10). Dwell = cycle ÷ sets used.
- Sequence camera numbers continue from the last critical camera
- Optional map / alarm / data monitors

**SIRA compliance (with clause and page references)**
- Tile image of at least 120 × 67 mm on wall monitors, based on the unrounded active area and fitted to the camera aspect ratio (item 5)
- Wall monitor frame of 4 mm or less (item 11), 1080p minimum (item 2), 24/7 rating (item 1), surveillance-grade displays (item 3)
- At least 2 monitors of 21" or more per operator (items 4 and 8)
- VMS trigger (Seventh, item 1) and Security Monitoring Operations Centre checks (Part 3, Ch 39)
- Ergonomic and space checks are clearly marked as advisory, because the manual has no viewing-distance or clearance rule

**Video wall layout**
- Single-, double-, triple- and four-row presets
- Drag-and-drop editing: each monitor is its own 16:9 box. You can move, swap and extend the wall.
- Live sequence playback, with a ×10 preview

**Space requirement**
- Monitor taken from the calculation, chosen from standard sizes 32"–86", or entered by hand as outer dimensions
- Height from FFL to the top of the wall, ceiling height needed, display width, and overall width with side clearances and depth
- Dimensioned elevation drawing, plus a size comparison table with the SIRA tile result for every size

**Project tools**
- Save and load configurations as JSON (V_02 and V03 files load too)
- Printable A4 report with the project name, compliance table, wall diagram and elevation

## Files

| Path | Contents |
|---|---|
| `index.html` | The calculator (browser version) |
| `desktop/` | Electron wrapper for a Windows portable `.exe` (fonts bundled for offline use) |
| `docs/User_Manual_V04.docx` | User manual |

## Building the Windows app

```bash
cd desktop
npm install
npm run build:win     # creates dist/Control_Room_Calculator_V04_Portable.exe
```

`npm start` runs it locally. The build copies `../index.html` into the app and points it at the local fonts. The .exe is unsigned, so Windows SmartScreen shows "More info → Run anyway" the first time it runs.

## Notes

- Rules are taken from SIRA Res. 13/2025 (English translation). The Arabic text prevails.
- The 120 × 67 mm rule applies to the video wall. Applying it to workstation monitors is an optional, stricter setting.
- Wall clearance defaults (300 mm above and at each side) are planning placeholders. Confirm them against the panel manufacturer's installation guide.
