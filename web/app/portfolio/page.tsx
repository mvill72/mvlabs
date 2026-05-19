import Link from 'next/link';
import { 
  Shield, Trophy, RefreshCw, HardHat, Network, Medal, 
  TrendingUp, User, ArrowLeft, ExternalLink 
} from 'lucide-react';

const portfolioProjects = [
  {
    name: "Sovereign Realms",
    category: "Web3",
    status: "MVP Complete",
    description: "Sovereign web3 vault with archetype chooser. Stoic + Jungian visual systems and on-chain identity.",
    tech: "Next.js, Wagmi, Solidity",
    icon: Shield,
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Resume Wars",
    category: "Productivity",
    status: "MVP Complete",
    description: "Gamified resume analysis with intelligent 5-category scoring and actionable feedback.",
    tech: "Next.js, pdf-parse",
    icon: Trophy,
    color: "from-red-500 to-rose-600",
  },
  {
    name: "SRE Forge",
    category: "Career",
    status: "Beta Live",
    description: "4-phase AI-powered SRE transformation engine with archetype discovery and GitHub portfolio generator.",
    tech: "Streamlit, Python, LiteLLM",
    icon: HardHat,
    color: "from-teal-500 to-cyan-600",
    liveUrl: "https://sre-forge-q72swjqf3md9zmsbk9wan8.streamlit.app/",
  },
  {
    name: "SubnetVerse",
    category: "Education",
    status: "Advanced",
    description: "Immersive CCNA learning platform with rich analogies, adaptive AI, and 3D visualizations.",
    tech: "Next.js, Three.js",
    icon: Network,
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Veterans Claim Forge",
    category: "Impact",
    status: "In Progress",
    description: "Stoic-guided companion for VA disability claims with ethical checklists and journaling.",
    tech: "Next.js",
    icon: Medal,
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Grok Personal Finance",
    category: "Finance",
    status: "Production Ready",
    description: "Enterprise-grade finance analyzer with multi-sheet Excel support and AI categorization.",
    tech: "Next.js, xAI Grok",
    icon: TrendingUp,
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "ForgePro",
    category: "Mobile",
    status: "Complete",
    description: "Beautiful, privacy-first habit tracking app with streaks and progress rings.",
    tech: "Expo, React Native, WatermelonDB",
    icon: RefreshCw,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "RepReflect (EchoMask)",
    category: "Philosophy",
    status: "Conceptual",
    description: "Jung + Stoic social media authenticity mirror. Measures mastery of the digital mask.",
    tech: "Next.js (planned)",
    icon: User,
    color: "from-zinc-600 to-slate-700",
  },
];

export default function MasterPortfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Command Center</span>
          </Link>
          <div className="font-semibold text-xl tracking-tighter">MVlabs Portfolio</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 pt-12 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold tracking-tighter mb-3">Master Portfolio</h1>
          <p className="text-xl text-slate-400 max-w-md mx-auto">
            Tools and platforms built with discipline, depth, and intention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="group bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-3xl p-7 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight mb-2">{project.name}</h3>
                
                <div className="mb-4">
                  <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium border ${
                    project.status.includes("Complete") || project.status === "Production Ready" 
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
                      : project.status === "Beta Live" 
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                <div className="pt-5 border-t border-slate-700 flex items-center justify-between text-sm">
                  <div className="text-slate-400 text-xs">{project.tech}</div>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      className="flex items-center gap-x-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-medium"
                    >
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}