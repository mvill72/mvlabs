"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, Trophy, RefreshCw, HardHat, Network, Medal, TrendingUp, 
  User, Rocket, CheckCircle 
} from 'lucide-react';

interface App {
  id: number;
  name: string;
  slug: string;
  description: string;
  status: string;
  tech: string;
  icon: React.ReactNode;
  color: string;
}

const initialApps: App[] = [
  {
    id: 1,
    name: "Sovereign Realms",
    slug: "sovereign-realms",
    description: "Sovereign web3 vault with archetype chooser. Full onboarding ritual, SIWE auth, and on-chain profiles.",
    status: "MVP COMPLETE",
    tech: "Next.js + Wagmi + Solidity",
    icon: <Shield className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    name: "Resume Wars",
    slug: "resume-wars",
    description: "Gamified resume analysis platform with intelligent 5-category scoring and beautiful feedback.",
    status: "MVP COMPLETE",
    tech: "Next.js + pdf-parse",
    icon: <Trophy className="w-5 h-5" />,
    color: "from-red-500 to-rose-600",
  },
  {
    id: 3,
    name: "ForgePro",
    slug: "forgepro",
    description: "Beautiful habit tracking mobile app with streaks, progress rings, and offline support.",
    status: "COMPLETE",
    tech: "Expo + React Native",
    icon: <RefreshCw className="w-5 h-5" />,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 4,
    name: "SRE Forge",
    slug: "sre-forge",
    description: "AI-powered SRE career transformation engine with archetype discovery and portfolio generation.",
    status: "BETA LIVE",
    tech: "Streamlit + Python",
    icon: <HardHat className="w-5 h-5" />,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 5,
    name: "SubnetVerse",
    slug: "packetforge",
    description: "Immersive CCNA learning platform with rich analogies and adaptive curriculum.",
    status: "ADVANCED",
    tech: "Next.js + Three.js",
    icon: <Network className="w-5 h-5" />,
    color: "from-sky-500 to-blue-600",
  },
  {
    id: 6,
    name: "Veterans Claim Forge",
    slug: "veteransclaims-forge",
    description: "Stoic-guided companion for VA disability claims with ethical checklists and journaling.",
    status: "IN PROGRESS",
    tech: "Next.js",
    icon: <Medal className="w-5 h-5" />,
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: 7,
    name: "Grok Personal Finance",
    slug: "grok-personal-finance-app",
    description: "Enterprise-grade finance analyzer with multi-sheet Excel support and AI categorization.",
    status: "PRODUCTION READY",
    tech: "Next.js + xAI",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    id: 8,
    name: "RepReflect (EchoMask)",
    slug: "repreffect",
    description: "Jung + Stoic social media authenticity mirror. Measures mastery of the digital mask.",
    status: "CONCEPTUAL",
    tech: "Next.js (planned)",
    icon: <User className="w-5 h-5" />,
    color: "from-zinc-600 to-slate-700",
  },
];

const statusColors: Record<string, string> = {
  "MVP COMPLETE": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "COMPLETE": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "BETA LIVE": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "ADVANCED": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "PRODUCTION READY": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "IN PROGRESS": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  "CONCEPTUAL": "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

export default function MVlabsCommandCenter() {
  const [apps] = useState<App[]>(initialApps);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Top Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl tracking-tighter">M</span>
              </div>
              <div>
                <span className="font-semibold text-2xl tracking-tighter">MVlabs</span>
                <span className="text-xs text-slate-500 font-mono ml-1">Command Center</span>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <Link 
                href="/portfolio" 
                className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors flex items-center gap-x-2"
              >
                Master Portfolio
              </Link>
              <div className="flex items-center gap-x-3">
                <div className="text-right">
                  <div className="text-sm font-medium">Mark Vee</div>
                  <div className="text-[10px] text-slate-500 -mt-0.5">Founder</div>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-8">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-x-3 mb-2">
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-[2px] rounded-full border border-emerald-500/20 flex items-center gap-x-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
            <h1 className="text-6xl font-semibold tracking-tighter">Good morning, Mark.</h1>
            <p className="text-xl text-slate-400 mt-2">Your MVlabs Command Center</p>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-slate-400">Active Projects</div>
            <div className="text-6xl font-semibold tabular-nums text-white">{apps.length}</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-8 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="text-emerald-400 text-xs font-semibold tracking-widest">PORTFOLIO</div>
            <div className="text-5xl font-semibold tabular-nums mt-1">{apps.length}</div>
            <div className="text-sm text-slate-400">Apps tracked</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="text-blue-400 text-xs font-semibold tracking-widest">LIVE / DEPLOYED</div>
            <div className="text-5xl font-semibold tabular-nums mt-1">3</div>
            <div className="text-sm text-slate-400">Publicly accessible</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="text-amber-400 text-xs font-semibold tracking-widest">MVP COMPLETE</div>
            <div className="text-5xl font-semibold tabular-nums mt-1">5</div>
            <div className="text-sm text-slate-400">Ready for iteration</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="text-purple-400 text-xs font-semibold tracking-widest">THIS BUILD</div>
            <div className="text-5xl font-semibold tabular-nums mt-1">Next.js</div>
            <div className="text-sm text-slate-400">Local Development</div>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">Active App Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {apps.map((app) => (
            <div key={app.id} className="bg-slate-900 border border-slate-700 rounded-3xl p-6 flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white`}>
                  {app.icon}
                </div>
                <div className={`text-xs px-3 py-1 rounded-full border font-medium ${statusColors[app.status]}`}>
                  {app.status}
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-tight mb-2">{app.name}</h3>
              <p className="text-sm text-slate-300 flex-1 mb-5">{app.description}</p>

              <div className="pt-4 border-t border-slate-700 text-xs text-slate-400">
                {app.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}