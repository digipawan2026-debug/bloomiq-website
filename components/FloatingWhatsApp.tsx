export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20would%20like%20to%20know%20more%20about%20Velvet%20Oud%20Royal."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 animate-pulse"></div>

      <div className="relative flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
        >
          <path d="M19.11 17.21c-.31-.16-1.84-.91-2.12-1.02-.28-.1-.49-.16-.69.16-.2.31-.79 1.02-.96 1.23-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.54-.91-.81-1.53-1.82-1.71-2.13-.18-.31-.02-.48.14-.64.15-.15.31-.39.46-.59.15-.2.2-.34.31-.57.1-.23.05-.44-.03-.61-.08-.16-.69-1.66-.95-2.28-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.52.08-.79.39-.28.31-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z" />
        </svg>

        <div className="hidden md:block">
          <p className="text-sm font-semibold text-white">
            Chat With BLOOMIQ
          </p>

          <p className="text-xs text-white/80">
            We're here to help
          </p>
        </div>
      </div>
    </a>
  );
}