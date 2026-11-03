import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

const App = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* NAVEGACIÓN EJECUTIVA */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-sm shadow-lg shadow-amber-500/10">
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
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-5 py-2.5 rounded-sm font-bold transition-all shadow-md flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              Consulta Confidencial
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DE ALTO ESTATUS */}
      <section className="relative pt-36 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-6 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Firma Legal Boutique • Bogotá Norte</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-100 leading-[1.15]">
              Protección Jurídica <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Estratégica & Rigurosa
              </span><br/>
              para Grandes Empresas.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              Representamos a grupos corporativos y patrimonios familiares en litigios complejos, estructuración tributaria y protección de activos de alta cuantía.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-7 py-3.5 rounded-sm font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group shadow-lg shadow-amber-400/10">
                Agendar Evaluación Jurídica
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-slate-900 border border-slate-800 hover:border-amber-400/40 text-slate-200 px-7 py-3.5 rounded-sm font-semibold text-sm transition-all flex items-center justify-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                Conocer la Firma
              </button>
            </motion.div>
          </motion.div>

          {/* TARJETA VISUAL PREMIUM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[480px] lg:h-[540px] rounded-sm bg-slate-900 overflow-hidden border border-slate-800 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-sm text-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span className="font-serif text-xl font-bold text-amber-400">+98% Tasa de Éxito</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Respaldados por más de 20 años de trayectoria en la resolución favorable de litigios y consultorías de alto riesgo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÉTRICAS DE ESTATUS JURÍDICO */}
      <section className="bg-slate-900 py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-400 mb-1">+$50M USD</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Patrimonio Protegido</div>
          </div>
          <div>
            <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-400 mb-1">20+ Años</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Experiencia Combinada</div>
          </div>
          <div>
            <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-400 mb-1">100%</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Confidencialidad</div>
          </div>
          <div>
            <div className="font-serif text-3xl lg:text-4xl font-bold text-amber-400 mb-1">Chambers 2025</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">Firma Reconocida</div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">Especialidades Legales</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-100">Áreas de Práctica Principal</h2>
          </div>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-sm font-light">
            Estrategias legales a la medida de los desafíos corporativos y personales de mayor exigencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areasPractica.map((area, idx) => {
            const Icono = area.icono;
            return (
              <div key={idx} className="bg-slate-900 p-8 rounded-sm border border-slate-800 hover:border-amber-400/50 transition-all duration-300 group">
                <div className="bg-slate-950 p-3.5 rounded-sm w-fit border border-slate-800 mb-6 group-hover:border-amber-400/30 transition-colors">
                  <Icono className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors">{area.titulo}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{area.descripcion}</p>
                <button className="text-amber-400 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Consultar Área <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default App;