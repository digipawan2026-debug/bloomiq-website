export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="absolute h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Brand */}
        <h1 className="animate-pulse font-heading text-3xl font-light tracking-[8px] sm:text-4xl">
          BLOOMIQ
          <sup className="ml-1 align-top text-[8px] tracking-normal text-[#D4AF37]">
            ™
          </sup>
        </h1>

        <p className="mt-3 text-[9px] uppercase tracking-[5px] text-[#D4AF37] sm:text-[10px]">
          Luxury Within Reach
        </p>

        {/* Loading line */}
        <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[3px] text-gray-600">
          Preparing Your Experience
        </p>
      </div>
    </div>
  );
}