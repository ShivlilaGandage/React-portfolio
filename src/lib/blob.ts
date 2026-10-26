// Builds smooth closed blob paths with an identical command structure,
// so framer-motion can interpolate the `d` attribute between them.

function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function blobPath(
  cx: number,
  cy: number,
  r: number,
  variance: number,
  seed: number,
  points = 7
) {
  const pts: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const rr = r * (1 - variance / 2 + rand(seed + i * 1.7) * variance);
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  // Catmull-Rom to cubic Bezier
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < points; i++) {
    const p0 = pts[(i - 1 + points) % points];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % points];
    const p3 = pts[(i + 2) % points];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + " Z";
}

export function blobFrames(
  cx: number,
  cy: number,
  r: number,
  variance: number,
  seed: number,
  frames = 3
) {
  const list = Array.from({ length: frames }, (_, i) =>
    blobPath(cx, cy, r, variance, seed + i * 13)
  );
  return [...list, list[0]];
}
