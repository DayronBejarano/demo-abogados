import React, { useState } from 'react';
import { 
  Scale, ShieldCheck, Briefcase, Award, ArrowRight, 
  ChevronRight, Building2, FileText, Lock, Cpu, Phone, Palette 
} from 'lucide-react';

import { 
  AmbientBackground, 
  SpotlightCard, 
  MagicGlowButton, 
  ScrollReveal 
} from './components/ui/Effects';

// MOTOR DE TEMAS CORPORATIVOS (WHITE-LABEL CONFIGURATION)
const themeConfig = {
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian (Negro)',
    bgApp: 'bg-slate-950',
    bgNav: 'bg-slate-950/80',
    bgCard: 'bg-slate-900/80',
    textMain: 'text-slate-100',
    textMuted: 'text-slate-400',
    accent: 'text-amber-500',
    accentGradient: 'from-amber-200 via-amber-400 to-amber-600',
    border: 'border-white/10',
    borderSubtle: 'border-white/5',
    buttonBg: 'bg-amber-500 hover:bg-amber-400 text-slate-950',
    cardGlow: 'rgba(245, 158, 11, 0.15)'
  },
  light: {
    id: 'light',
    name: 'Platinum (Claro)',
    bgApp: 'bg-slate-50',
    bgNav: 'bg-white/90',
    bgCard: 'bg-white',
    textMain: 'text-slate-900',
    textMuted: 'text-slate-600',
    accent: 'text-amber-700',
    accentGradient: 'from-amber-600 via-amber-700 to-amber-900',
    border: 'border-slate-200',
    borderSubtle: 'border-slate-200',
    buttonBg: 'bg-slate-900 hover:bg-slate-800 text-white',
    cardGlow: 'rgba(180, 83, 9, 0.08)'
  },
  gold: {
    id: 'gold',
    name: 'Imperial (Dorado Puro)',
    bgApp: 'bg-black',
    bgNav: 'bg-black/90',
    bgCard: 'bg-zinc-950',
    textMain: 'text-yellow-50',
    textMuted: 'text-yellow-200/60',
    accent: 'text-yellow-500',
    accentGradient: 'from-yellow-300 via-yellow-500 to-yellow-600',
    border: 'border-yellow-500/30',
    borderSubtle: 'border-yellow-500/10',
    buttonBg: 'bg-yellow-500 hover:bg-yellow-400 text-black',
    cardGlow: 'rgba(234, 179, 8, 0.15)'
  }
};

const App = () => {
  const [activeTheme, setActiveTheme] = useState('obsidian');
  const t = themeConfig[activeTheme]; // Extraemos la configuración del tema actual

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
    <div className={`min-h-screen ${t.bgApp} ${t.textMain} font-sans selection:bg-amber-400 selection:text-slate-950 relative overflow-hidden pb-24 transition-colors duration-500`}>
      
      {/* FONDO ATMOSFÉRICO DE LUJO (Oculto en modo claro para más limpieza) */}
      {activeTheme !== 'light' && <AmbientBackground />}
      
      {/* NAVEGACIÓN EJECUTIVA */}
      <nav className={`fixed w-full z-50 ${t.bgNav} backdrop-blur-xl border-b ${t.borderSubtle} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-lg shadow-lg border border-amber-300/20`}>
              <Scale className="text-slate-950 w-6 h-6" />
            </div>
            <div>
              <span className={`font-serif text-2xl font-bold tracking-wider ${t.textMain} block leading-none`}>VALENZUELA</span>
              <span className={`font-sans text-[10px] tracking-[0.25em] ${t.accent} uppercase font-semibold`}>Abogados Consultores</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 font-medium text-xs tracking-wider uppercase">
            {/* SELECTOR DE TEMAS EN VIVO PARA DEMOSTRACIÓN COMERCIAL */}
            <div className={`flex items-center gap-2 mr-4 px-4 py-2 rounded-full border ${t.border} bg-opacity-50`}>
              <Palette className={`w-3.5 h-3.5 ${t.accent}`} />
              {Object.keys(themeConfig).map((themeKey) => (
                <button 
                  key={themeKey}
                  onClick={() => setActiveTheme(themeKey)}
                  className={`w-3 h-3 rounded-full border border-white/20 transition-transform ${activeTheme === themeKey ? 'scale-125 ring-2 ring-amber-500' : 'opacity-50 hover:opacity-100'} 
                  ${themeKey === 'obsidian' ? 'bg-slate-800' : themeKey === 'light' ? 'bg-slate-200' : 'bg-yellow-500'}`}
                  title={`Cambiar a ${themeConfig[themeKey].name}`}
                />
              ))}
            </div>

            <a href="#areas" className={`${t.textMuted} hover:${t.accent} transition-colors`}>Áreas de Práctica</a>
            <a href="#firma" className={`${t.textMuted} hover:${t.accent} transition-colors`}>La Firma</a>
            <button className={`${t.buttonBg} px-5 py-2.5 rounded-md font-bold transition-all shadow-lg flex items-center gap-2`}>
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
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${t.border} ${t.accent} text-xs font-semibold mb-6 uppercase tracking-widest backdrop-blur-md`}>
                <ShieldCheck className="w-4 h-4" />
                <span>Firma Legal Boutique • Bogotá Norte</span>
              </div>
              
              <h1 className={`font-serif text-4xl lg:text-6xl font-bold tracking-tight mb-6 ${t.textMain} leading-[1.15]`}>
                Protección Jurídica <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.accentGradient}`}>
                  Estratégica & Rigurosa
                </span><br/>
                para Grandes Empresas.
              </h1>
              
              <p className={`text-lg ${t.textMuted} mb-8 leading-relaxed font-light`}>
                Representamos a grupos corporativos y patrimonios familiares en litigios complejos, estructuración tributaria y protección de activos de alta cuantía.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <MagicGlowButton icon={ArrowRight}>
                  Agendar Evaluación Jurídica
                </MagicGlowButton>
                
                <button className={`backdrop-blur-md border ${t.border} hover:border-amber-500/40 ${t.textMain} px-7 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto h-full`}>
                  <Briefcase className={`w-4 h-4 ${t.accent}`} />
                  Conocer la Firma
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={`relative h-[480px] lg:h-[540px] rounded-2xl ${t.bgCard} overflow-hidden border ${t.borderSubtle} shadow-2xl`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className={`absolute inset-0 bg-gradient-to-t from-${t.bgApp === 'bg-slate-50' ? 'white' : 'black'} via-transparent to-transparent opacity-80`}></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`backdrop-blur-xl border ${t.border} p-6 rounded-xl ${t.bgCard} shadow-2xl`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className={`w-6 h-6 ${t.accent}`} />
                    <span className={`font-serif text-xl font-bold ${t.accent}`}>+98% Tasa de Éxito</span>
                  </div>
                  <p className={`text-xs ${t.textMuted} leading-relaxed font-light`}>
                    Respaldados por más de 20 años de trayectoria en la resolución favorable de litigios y consultorías de alto riesgo.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MÉTRICAS DE ESTATUS JURÍDICO */}
      <section className={`relative z-10 ${t.bgCard} backdrop-blur-md py-12 border-y ${t.borderSubtle}`}>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`font-serif text-3xl lg:text-4xl font-bold ${t.accent} mb-1`}>+$50M USD</div>
              <div className={`text-[11px] uppercase tracking-widest ${t.textMuted} font-medium`}>Patrimonio Protegido</div>
            </div>
            <div>
              <div className={`font-serif text-3xl lg:text-4xl font-bold ${t.accent} mb-1`}>20+ Años</div>
              <div className={`text-[11px] uppercase tracking-widest ${t.textMuted} font-medium`}>Experiencia Combinada</div>
            </div>
            <div>
              <div className={`font-serif text-3xl lg:text-4xl font-bold ${t.accent} mb-1`}>100%</div>
              <div className={`text-[11px] uppercase tracking-widest ${t.textMuted} font-medium`}>Confidencialidad</div>
            </div>
            <div>
              <div className={`font-serif text-3xl lg:text-4xl font-bold ${t.accent} mb-1`}>Chambers '24</div>
              <div className={`text-[11px] uppercase tracking-widest ${t.textMuted} font-medium`}>Firma Reconocida</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className={`${t.accent} font-bold text-xs uppercase tracking-widest block mb-3`}>Especialidades Legales</span>
              <h2 className={`font-serif text-3xl lg:text-5xl font-bold ${t.textMain}`}>Áreas de Práctica Principal</h2>
            </div>
            <p className={`${t.textMuted} max-w-md mt-4 md:mt-0 text-sm font-light leading-relaxed`}>
              Estrategias legales a la medida de los desafíos corporativos y personales de mayor exigencia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {areasPractica.map((area, idx) => {
            const Icono = area.icono;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <SpotlightCard className={`h-full group ${t.bgCard} ${t.border}`} glowColor={t.cardGlow}>
                  <div className={`p-3.5 rounded-lg w-fit border ${t.borderSubtle} mb-6 transition-colors shadow-inner ${t.bgApp}`}>
                    <Icono className={`w-6 h-6 ${t.accent}`} />
                  </div>
                  <h3 className={`font-serif text-2xl font-bold ${t.textMain} mb-3`}>
                    {area.titulo}
                  </h3>
                  <p className={`${t.textMuted} text-sm mb-8 leading-relaxed font-light`}>
                    {area.descripcion}
                  </p>
                  <button className={`${t.accent} font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto`}>
                    Consultar Área <ChevronRight className="w-4 h-4" />
                  </button>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* BANNER COMERCIAL DE ADQUISICIÓN DB TECH STUDIO */}
      <div className={`fixed bottom-0 left-0 right-0 z-[100] ${t.bgNav} backdrop-blur-2xl border-t ${t.border} p-4 shadow-[0_-20px_40px_rgba(0,0,0,0.6)] transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className={`bg-amber-500/10 p-2 rounded-lg border ${t.border} shrink-0`}>
              <Cpu className={`w-6 h-6 ${t.accent} animate-pulse`} />
            </div>
            <div>
              <p className={`${t.textMain} text-sm font-bold tracking-wide`}>
                Demo B2B Comercial <span className={`${t.accent} font-normal opacity-80`}>| DB Tech Studio</span>
              </p>
              <p className={`${t.textMuted} text-xs font-mono mt-0.5`}>
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