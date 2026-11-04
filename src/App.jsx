import React, { useState } from 'react';
import { Scale, Shield, Landmark, BookOpen, Award, Phone, Calendar, ArrowRight, ExternalLink, X, CheckCircle2 } from 'lucide-react';

export const App = () => {
  const [modalConsulta, setModalConsulta] = useState(false);

  const handleWhatsApp = (motivo) => {
    const msg = `Hola Ing. Dayron. Vengo de revisar el Demo Legal de Abogados [REF: DEMO-LEGAL] (Motivo: ${motivo}) y deseo solicitar información para una firma de abogados.`;
    window.open(`https://wa.me/573104208919?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-amber-50 font-serif selection:bg-amber-500 selection:text-black pb-24">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#0b0f17]/90 backdrop-blur-md border-b border-amber-500/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg text-slate-950">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-amber-100 uppercase block font-serif">Valenzuela & Asociados</span>
              <span className="text-[9px] font-sans text-amber-400 tracking-[0.2em] uppercase">Firma Legal Boutique • M&A</span>
            </div>
          </div>
          <button onClick={() => setModalConsulta(true)} className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-sans font-bold text-xs px-6 py-3 rounded-lg transition-all shadow-lg shadow-amber-500/10">
            Agendar Consulta Privada
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-sans text-xs text-amber-400 tracking-widest uppercase border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/5">
            Litigio de Alta Complejidad & M&A
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-6 mb-6 leading-tight font-serif">
            Defensa Jurídica de Alto Nivel para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Corporaciones Exigentes.</span>
          </h1>
          <p className="font-sans text-slate-400 text-base leading-relaxed mb-8 max-w-xl">
            Asesoría estratégica en fusiones, arbitraje internacional y representación legal corporativa con estándares de estatus global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-sans">
            <button onClick={() => setModalConsulta(true)} className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all">
              Agendar Evaluación Privada <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => handleWhatsApp('Jurisprudencia')} className="border border-amber-500/30 text-amber-300 font-bold text-sm px-8 py-4 rounded-xl hover:bg-amber-500/5 transition-colors">
              Descargar Dossier
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-amber-500/10 to-transparent p-8 rounded-3xl border border-amber-500/20 font-sans">
          <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-6">Métricas de Relevancia Institucional</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-[#0b0f17] border border-amber-500/10 rounded-2xl">
              <p className="text-3xl font-bold text-white font-serif">$450M+</p>
              <p className="text-xs text-slate-400 mt-1">En Transacciones M&A</p>
            </div>
            <div className="p-4 bg-[#0b0f17] border border-amber-500/10 rounded-2xl">
              <p className="text-3xl font-bold text-amber-400 font-serif">98.4%</p>
              <p className="text-xs text-slate-400 mt-1">Éxito en Arbitraje</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalConsulta && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
          <div className="bg-[#0b0f17] border border-amber-500/30 w-full max-w-md p-6 rounded-2xl text-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif font-bold text-lg text-amber-400">Consulta Legal Confidencial</h3>
              <button onClick={() => setModalConsulta(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Nombre / Firma" className="w-full bg-slate-900 border border-amber-500/20 p-3 rounded-lg text-sm outline-none" />
              <input type="text" placeholder="Teléfono de contacto" className="w-full bg-slate-900 border border-amber-500/20 p-3 rounded-lg text-sm outline-none" />
              <button onClick={() => { setModalConsulta(false); handleWhatsApp('Agendamiento-Privado'); }} className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-lg text-xs uppercase tracking-wider">
                Enviar Requerimiento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BAR BANNER */}
      <div className="fixed bottom-0 inset-x-0 bg-[#0b0f17]/95 border-t border-amber-500/30 p-4 font-sans flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4 z-40">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-amber-400" />
          <p className="text-xs text-slate-300">Demo B2B Corporativo Legal / <strong>DB Tech Studio</strong></p>
        </div>
        <button onClick={() => handleWhatsApp('Cotizar-Demo-Legal')} className="bg-amber-500 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg">
          Cotizar Plataforma Legal
        </button>
      </div>
    </div>
  );
};

export default App;