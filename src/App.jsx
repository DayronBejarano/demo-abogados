import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  FileText, 
  Lock,
  Cpu, 
  Phone
} from 'lucide-react';

import { 
  AmbientBackground, 
  SpotlightCard, 
  MagicGlowButton, 
  ScrollReveal 
} from './components/ui/Effects';

const App = () => {
  const areasPractica = [
    {
      titulo: "Derecho Corporativo & M&A",
      descripcion: "Estructuración de fusiones, adquisiciones y gobierno corporativo para empresas de alto impacto.",
      icono: Building2
    },
    {
      titulo: "Litigio Estratégico & Arbitraje",
      descripcion: "Defensa jurídica de alta complejidad ante tribunales arbitrales y altas cortes.",
      icono: Scale
    },
    {
      titulo: "Derecho Tributario & Fiscal",
      descripcion: "Planeación tributaria nacional e internacional para la protección de activos corporativos.",
      icono: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 relative overflow-hidden pb-24">
      
      {/* FONDO ATMOSFÉRICO DE LUJO */}
      <AmbientBackground />
      
      {/* NAVEGACIÓN EJECUTIVA */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-lg shadow-lg shadow-amber-500/20 border border-amber-300/20">
              <Scale className="text-slate-950 w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-slate-100 block leading-none">VALENZUELA</span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-amber-400 uppercase font-semibold">Abogados Consultores</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-xs tracking-wider uppercase text-slate-300">
            <a href="#areas" className="hover:text-amber-400 transition-colors">Áreas de Práctica</a>
            <a href="#firma" className="hover:text-amber-400 transition-colors">La Firma</a>
            <a href="#casos" className="hover:text-amber-400 transition-colors">Casos de Éxito</a>
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-md font-bold transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              Consulta Privada
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DE ALTO ESTATUS */}
      <section className="relative z-10 pt-36 pb-20 px-6 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-6 uppercase tracking-widest backdrop-blur-md">
                <ShieldCheck className="w-4 h-4" />
                <span>Firma Legal Boutique • Bogotá Norte</span>
              </div>
              
              <h1 className="font-serif text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-100 leading-[1.15]">
                Protección Jurídica <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                  Estratégica & Rigurosa
                </span><br/>
                para Grandes Empresas.
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                Representamos a grupos corporativos y patrimonios familiares en litigios complejos, estructuración tributaria y protección de activos de alta cuantía.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <MagicGlowButton icon={ArrowRight}>
                  Agendar Evaluación Jurídica
                </MagicGlowButton>
                
                <button className="bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-amber-500/40 text-slate-200 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto h-full">
                  <Briefcase className="w-4 h-4 text-amber-500" />
                  Conocer la Firma
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative h-[480px] lg:h-[540px] rounded-2xl bg-slate-900 overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-slate-100 shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span className="font-serif text-xl font-bold text-amber-400">+98% Tasa de Éxito</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Respaldados por más de 20 años de trayectoria en la resolución favorable de litigios y consultorías de alto riesgo.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MÉTRICAS DE ESTATUS JURÍDICO */}
      <section className="relative z-10 bg-slate-900/50 backdrop-blur-md py-12 border-y border-white/5">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-500 mb-1">+$50M USD</div>
              <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Patrimonio Protegido</div>
            </div>
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-500 mb-1">20+ Años</div>
              <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Experiencia Combinada</div>
            </div>
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-500 mb-1">100%</div>
              <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Confidencialidad</div>
            </div>
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-500 mb-1">Chambers '24</div>
              <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Firma Reconocida</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">Especialidades Legales</span>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-slate-100">Áreas de Práctica Principal</h2>
            </div>
            <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-sm font-light leading-relaxed">
              Estrategias legales a la medida de los desafíos corporativos y personales de mayor exigencia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {areasPractica.map((area, idx) => {
            const Icono = area.icono;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <SpotlightCard className="h-full group">
                  <div className="bg-slate-950 p-3.5 rounded-lg w-fit border border-white/5 mb-6 group-hover:border-amber-500/30 transition-colors shadow-inner">
                    <Icono className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors">
                    {area.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                    {area.descripcion}
                  </p>
                  <button className="text-amber-500 font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Consultar Área <ChevronRight className="w-4 h-4" />
                  </button>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* BANNER COMERCIAL DE ADQUISICIÓN */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-950/95 backdrop-blur-2xl border-t border-amber-500/30 p-4 shadow-[0_-20px_40px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/30 shrink-0">
              <Cpu className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <div>
              <p className="text-slate-200 text-sm font-bold tracking-wide">
                Demo B2B Comercial <span className="text-amber-500 font-normal opacity-80">| DB Tech Studio</span>
              </p>
              <p className="text-slate-400 text-xs font-mono mt-0.5">
                ¿Le interesa implementar esta arquitectura web premium para su firma legal?
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => {
              const mensaje = "Hola Ing. Dayron. Estoy viendo su Demo de Abogados y me interesa implementar una plataforma de este nivel para mi firma. ¿Podemos agendar una asesoría comercial?";
              window.open(`https://wa.me/573104208919?text=${encodeURIComponent(mensaje)}`, '_blank');
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            Cotizar este Diseño
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;