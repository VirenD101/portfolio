import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 px-8 py-16 md:py-32">
        
        {/* Left Sidebar */}
        <aside className="md:w-1/3 md:sticky md:top-32 md:h-fit space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest">
                System Active • Co-op May 2026
              </span>
            </div>
            
            <h1 className="text-6xl font-black tracking-tighter text-zinc-900">Viren Desai</h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed max-w-xs">
              Computer Engineering at <span className="text-zinc-900 font-medium text-indigo-600">UBC</span>. 
              Specializing in firmware architecture and modern web systems.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <a href="mailto:virendesai711@gmail.com" className="p-2 rounded-full border border-zinc-200 hover:border-indigo-500 hover:text-indigo-600 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest px-2">Email</span>
            </a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>

          <div className="pt-10">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Technical Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["C++", "Python", "SystemVerilog", "STM32", "Next.js", "Java", "FPGA"].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-zinc-900 text-zinc-100 rounded-md text-[11px] font-mono shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <main className="md:w-2/3 space-y-32">
          
          <section>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Featured Work</h2>
              <div className="h-[1px] flex-1 bg-zinc-200"></div>
            </div>
            
            <div className="grid gap-10">
              {projects.map((p) => (
                <div key={p.title} className="group relative">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-800 group-hover:text-indigo-600 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-base leading-relaxed mb-6 max-w-xl">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 h-[1px] w-full bg-zinc-100 group-hover:bg-indigo-100 transition-colors" />
                </div>
              ))}
            </div>
          </section>

          <section className="pb-24">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Background</h2>
              <div className="h-[1px] flex-1 bg-zinc-200"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-4">
                <h3 className="font-bold text-zinc-900 uppercase text-xs tracking-widest">Education</h3>
                <div>
                  <p className="font-bold text-zinc-800">University of British Columbia</p>
                  <p className="text-zinc-500 text-sm">B.A.Sc. Computer Engineering</p>
                  <p className="text-indigo-600 text-[10px] font-bold mt-1 uppercase tracking-widest">Graduating 2028</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-zinc-900 uppercase text-xs tracking-widest">Involvement</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-zinc-800">UBC AgroBot</p>
                    <p className="text-zinc-500 text-sm italic">Firmware Engineer</p>
                  </div>
                  <div>
                    <p className="font-bold text-zinc-800">Hot Potato Initiative</p>
                    <p className="text-zinc-500 text-sm italic">President</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}