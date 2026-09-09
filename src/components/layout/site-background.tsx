export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-flow absolute -inset-x-20 -top-20 h-[46rem]" />
      <div className="scanline absolute inset-x-0 top-0" />
      <div className="noise-texture absolute inset-0" />
    </div>
  );
}
