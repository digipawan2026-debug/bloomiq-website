export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#D4AF37]">404</h1>

        <h2 className="mt-6 text-3xl font-serif">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          The page you are looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-[#D4AF37] px-8 py-3 font-semibold text-black transition hover:scale-105"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}