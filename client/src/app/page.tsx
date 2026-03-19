# Stop current servers (Ctrl+C in terminals)
# Then restart:
cd server && npm run dev  # Backend
cd client && npm run dev  # Frontendimport Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-gray-50">
      <section className="relative h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6 md:px-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Your AI Concierge for Every Property</h1>
          <p className="text-gray-600 mb-6 text-lg md:text-xl">
            Automate tenants, maintenance, and communication with AI.
          </p>
          <a href="/signup" className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition">Get Started</a>
        </div>
        <div className="absolute right-0 bottom-0 hidden md:block">
          <Image src="/hero-ai-home.png" width={600} height={400} alt="AI Concierge Illustration" />
        </div>
      </section>
    </main>
  );
}