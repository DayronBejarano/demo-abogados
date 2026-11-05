import React from 'react';
import { ShieldCheck, Scale, ChevronRight, Sparkles, Calendar, Cpu } from 'lucide-react';

export const LegalDashboard = ({ t, unidadActiva, triggerSound, setModalCita, setModalIdeaCustom, setModuloActivo }) => {
  return (
    <div className="space-y-10 font-sans-legal">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className={`inline-flex items-center gap-2 text-xs ${t.badge} px-4 py-1.5 rounded-full border mb-6 backdrop-blur-md`}>
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>Plataforma Enterprise de Control Procesal & Compliance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-serif-legal">
            Gestión Jurídica & <br />
            <span className={`${t.accent}`}>
              Inteligencia Legal B2B.
            </span>
          </h1>

          <p className={`text-base ${t.textMuted} mb-8 leading-relaxed font-normal max-w-2xl`}>
            Monitoreo procesal en tiempo real, alertas automatizadas de vencimiento de términos, scoring de probabilidad procesal y cotizadores de cuantías para firmas y departamentos jurídicos.
          </p>

          <div className={`p-5 rounded-2xl ${t.bgCard} border ${t.border} shadow-xl mb-8 backdrop-blur-md`}>
            <div className="flex items-start gap-4">
              <Sparkles className={`w-6 h-6 ${t.accent} shrink-0 mt-0.5 animate-pulse`} />
              <div className="text-xs">
                <span className="font-bold block text-sm mb-1">¿Tu firma requiere integraciones con la Rama Judicial o ERPs?</span>
                <span className={`${t.textMuted} font-normal leading-relaxed block`}>
                  Desarrollamos conectores con repositorios judiciales, módulos de firma digital cifrada, lectura con IA de contratos y portales de clientes a la medida.
                </span>
                <button 
                  onClick={() => { triggerSound(600); setModalIdeaCustom(true); }}
                  className={`inline-flex items-center gap-1.5 mt-3 ${t.accent} font-bold hover:underline`}
                >
                  <span>+ Proponer requerimiento de software a la medida</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-xs">
            <button 
              onClick={() => { triggerSound(750); setModalCita(true); }}
              className={`${t.btnPrimary} px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all`}
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Sesión Técnica con el CTO</span>
            </button>

            <button 
              onClick={() => { triggerSound(500); setModuloActivo('casos'); }}
              className={`border ${t.border} ${t.textMain} font-bold px-8 py-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2`}
            >
              <Scale className={`w-4 h-4 ${t.accent}`} />
              <span>Explorar Monitor de Expedientes</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className={`${t.bgCard} p-7 rounded-3xl border ${t.border} shadow-2xl space-y-5`}>
            <div className={`flex justify-between items-center pb-4 border-b ${t.border}`}>
              <div className="flex items-center gap-3">
                <Scale className={`w-6 h-6 ${t.accent}`} />
                <div>
                  <h3 className="text-base font-bold uppercase font-serif-legal">Expediente Principal</h3>
                  <p className={`text-[11px] ${t.textMuted}`}>Monitoreo Procesal Activo</p>
                </div>
              </div>
              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800 font-bold font-mono">
                EN TÉRMINO
              </span>
            </div>

            <div className={`p-4 rounded-xl ${t.bgCardSubtle} border ${t.border} space-y-2`}>
              <span className={`text-[10px] ${t.textMuted} uppercase block font-mono`}>Referencia de Caso</span>
              <span className="font-bold text-sm block font-sans-legal"><strong className="font-mono">{unidadActiva.id}</strong> — {unidadActiva.titulo}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className={`p-3.5 rounded-xl ${t.bgCardSubtle} border ${t.border}`}>
                <span className={`${t.textMuted} text-[10px] uppercase block font-mono`}>Cuantía del Litigio</span>
                <span className="text-lg font-black mt-0.5 block font-mono">{unidadActiva.cuantia}</span>
              </div>
              <div className={`p-3.5 rounded-xl ${t.bgCardSubtle} border ${t.border}`}>
                <span className={`${t.textMuted} text-[10px] uppercase block font-mono`}>Vencimiento Término</span>
                <span className={`text-lg font-bold mt-0.5 block font-mono px-2 py-0.5 rounded-md inline-block ${t.badgeUrgency}`}>
                  {unidadActiva.diasRestantes} Días Restantes
                </span>
              </div>
            </div>

            <button
              onClick={() => { triggerSound(700); setModalCita(true); }}
              className={`w-full py-3.5 rounded-xl ${t.bgCardSubtle} border ${t.border} text-xs font-bold flex items-center justify-center gap-2 transition-all hover:bg-black/5 dark:hover:bg-white/10`}
            >
              <Cpu className={`w-4 h-4 ${t.accent}`} />
              <span>Cotizar Software LegalTech Marca Blanca</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};