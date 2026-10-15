export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-ink bg-grid bg-[length:24px_24px]"
    >
      <div className="absolute inset-0 bg-grid-major bg-[length:120px_120px]" />
      {/* subtle vignette so edges recede */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,37,64,0.6)_100%)]" />
    </div>
  );
}
