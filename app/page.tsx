import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-obsidian/90 backdrop-blur border-b border-ember/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔨</span>
            <span className="font-bold text-2xl tracking-tighter">MV LABS</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="#forge">The Forge</Link>
            <Link href="#creations">Creations</Link>
            <Link href="#hosting">Sovereign Hosting</Link>
            <Link href="#chronicle">Chronicle</Link>
          </div>
          <button className="px-6 py-3 bg-ember hover:bg-orange-600 rounded-full text-black font-semibold transition">
            Enter the Vault
          </button>
        </div>
      </nav>

      {/* HERO CITADEL */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Own Your Story.<br />Forge Your Future.
          </h1>
          <p className="text-2xl text-cyan mb-12 max-w-2xl mx-auto">
            Neurodivergent-led Web3 studio in Columbus, Ohio.<br />
            Concert memories on-chain. Tasks turned heroic. Hosting you alone control.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-6 bg-white text-black text-xl font-semibold rounded-3xl hover:scale-105 transition">
              Enter Concert Vault Beta (Summer 2026)
            </button>
            <button className="px-10 py-6 border border-cyan text-cyan text-xl font-semibold rounded-3xl hover:bg-cyan hover:text-black transition">
              Launch Sovereign Hosting
            </button>
          </div>
          <div className="mt-16 text-xs tracking-[2px] text-ember/70 flex justify-center gap-8">
            <span>CLARITY AS LANTERN</span>
            <span>SOVEREIGNTY AS WALL</span>
            <span>MEMORY THAT ENDURES</span>
          </div>
        </div>
      </section>

      {/* THE FORGE (About) */}
      <section id="forge" className="py-24 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Built by a Divergent Mind, for Divergent Minds</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            MVLabs is an independent studio in Columbus, Ohio. I am neurodivergent. I built this because the apps the world offers fracture me — and I know they fracture you too.<br /><br />
            We create Web3 applications that honor how different brains actually work: high-signal, low-noise, owned by you.
          </p>
          {/* Principles grid here — add Tailwind cards as needed */}
        </div>
      </section>

      {/* CREATIONS + HOSTING + CHRONICLE sections follow the same clean pattern — expand as you wish or tell me and I will generate the next batch of components instantly. */}

      <footer className="bg-black py-12 text-center text-sm text-gray-400">
        Columbus, Ohio • Neurodivergent-led • Your key. Your memory. Your forge.
      </footer>
    </>
  );
}
