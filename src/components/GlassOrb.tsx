type Props = {
  size: number;
  tint?: "accent" | "heat" | "neutral";
  className?: string;
};

/** A glossy, translucent 3D liquid droplet — the shaded orbs from the reference. */
export function GlassOrb({ size, tint = "neutral", className = "" }: Props) {
  const core =
    tint === "accent"
      ? "rgba(139,156,255,0.35)"
      : tint === "heat"
      ? "rgba(255,77,109,0.28)"
      : "rgba(120,132,160,0.22)";
  return (
    <div
      aria-hidden
      className={`morph border border-white/10 backdrop-blur-md ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 18%, ${core} 45%, rgba(14,20,32,0.65) 78%)`,
        boxShadow:
          "inset -10px -14px 28px rgba(8,12,20,0.7), inset 8px 10px 22px rgba(255,255,255,0.08), 0 30px 60px rgba(0,0,0,0.45)",
      }}
    />
  );
}
