import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-[#050505] text-zinc-300 font-mono selection:bg-emerald-500/30">
      
      {/* SECTION 1: HERO SNAP */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center p-6 bg-[#050505] border-b border-zinc-900">
        <div className="space-y-6 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <span className="text-emerald-500 animate-pulse">viren@ubc:~$</span>
            <span className="text-white">cat --v2.0</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none">
            Viren Desai
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-[0.2em]">
            UBC COMPUTER ENGINEERING
          </p>
          <div className="pt-20 flex flex-col items-center gap-4 opacity-50">
            <span className="text-[10px] uppercase tracking-[0.5em]">Scroll to Initialize</span>
            <div className="h-16 w-px bg-gradient-to-b from-emerald-500 to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 2: WORK EXPERIENCE (AgroBot & Others) */}
      <section className="h-screen w-full snap-start flex items-center justify-center p-6 bg-[#09090b]">
        <div className="max-w-5xl w-full border border-zinc-800 rounded-xl overflow-hidden bg-black/40 backdrop-blur-md shadow-2xl">
          <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Directory: /usr/viren/experience</span>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-white text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-emerald-500 text-xl font-mono">01.</span> Technical_Work
            </h2>
            <div className="space-y-12">
              <div className="relative pl-8 border-l border-emerald-500/30">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">Firmware Engineer | UBC AgroBot</h3>
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest pt-1">Jan 2026 — Present</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                  Developing robust power management firmware on STM32 platforms. Engineering efficient power-switching logic and charging protocols to maximize energy transfer.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-zinc-800">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-zinc-400">Ride Operator | Playland PNE</h3>
                  <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest pt-1">Aug 2025 — Sept 2025</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
                  Performed routine diagnostics and troubleshooting of computer-controlled ride systems to ensure optimal safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PERSONAL PROJECTS */}
      <section className="h-screen w-full snap-start flex items-center justify-center p-6 bg-[#050505]">
        <div className="max-w-5xl w-full border border-zinc-800 rounded-xl overflow-hidden bg-black/40 shadow-2xl">
          <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-800">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Directory: /home/viren/projects</span>
          </div>
          <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh]">
            <h2 className="text-white text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-emerald-500 text-xl font-mono">02.</span> Projects.exe
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.title !== "UBC AgroBot | Firmware Engineer").map((p) => (
                <div key={p.title} className="p-6 bg-zinc-900/20 border border-zinc-800 rounded-lg group hover:border-emerald-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 mb-3">{p.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-[9px] px-2 py-0.5 bg-black text-zinc-600 border border-zinc-800 rounded uppercase">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & LINKS */}
      <section className="h-screen w-full snap-start flex items-center justify-center p-6 bg-[#09090b]">
        <div className="text-center space-y-12">
          <div className="p-12 border border-emerald-900/20 bg-emerald-950/5 rounded-2xl">
            <h2 className="text-emerald-500 font-bold text-sm tracking-[0.4em] uppercase mb-10">Communications_Link</h2>
            <div className="flex flex-col gap-6 items-center">
              <a href="mailto:virendesai711@gmail.com" className="text-white hover:text-emerald-400 transition-colors border-b border-zinc-800 pb-1">virendesai711@gmail.com</a>
              <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
              <div className="pt-8">
                <a href="/Viren Desai - Resume.pdf" target="_blank" className="px-12 py-5 bg-emerald-500 text-black font-black hover:bg-white transition-all text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                  Download_Resume.pdf
                </a>
              </div>
            </div>
          </div>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">Available for Co-op May 2026</p>
        </div>
      </section>

    </div>
  );
}