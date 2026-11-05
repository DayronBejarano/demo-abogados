import React from 'react';
import { Wrench, Sparkles, Scale, Lock, FileCheck } from 'lucide-react';

export const CustomLegalBuilder = ({ t, triggerSound, setModalIdeaCustom }) => {
  return (
    <div className="space-y-8 font-mono">
      <div className={`p-8 md:p-12 rounded-3xl ${t.bgCard} border ${t.border} text-center relative overflow-hidden backdrop-blur-xl`}>
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${t.badge} text-xs mb-6 border`}>
          <Wrench className={`w-4 h-4 ${t.accent}`} />
          <span>Arquitectura de Software Adaptativa LegalTech</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Materializamos cualquier Módulo Jurídico Custom
        </h2>

        <p className={`text-sm ${t.textMuted} max-w-2xl mx-auto mb-8 font-light leading-relaxed`}>
          Desarrollamos conectores a medida para sincronización con repositorios de la rama judicial, análisis predictivo de sentencias con IA, custodia de evidencia digital cifrada y portales privados de clientes.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mb-8">
          <div className={`p-5 rounded-2xl ${t.bgCardSubtle} border ${t.border}`}>
            <Scale className={`w-6 h-6 ${t.accent} mb-2`} />
            <h4 className="font-bold text-sm mb-1">Scraper Judicial APIs</h4>
            <p className={`text-xs ${t.textMuted}`}>Lectura automática de actuaciones y términos en tiempo real.</p>
          </div>
          <div className={`p-5 rounded-2xl ${t.bgCardSubtle} border ${t.border}`}>
            <Lock className={`w-6 h-6 ${t.accent} mb-2`} />
            <h4 className="font-bold text-sm mb-1">Cifrado & Hash SHA-256</h4>
            <p className={`text-xs ${t.textMuted}`}>Certificación de documentos y cadenas de custodia inalterables.</p>
          </div>
          <div className={`p-5 rounded-2xl ${t.bgCardSubtle} border ${t.border}`}>
            <FileCheck className={`w-6 h-6 ${t.accent} mb-2`} />
            <h4 className="font-bold text-sm mb-1">IA Contractual</h4>
            <p className={`text-xs ${t.textMuted}`}>Detección automatizada de cláusulas abusivas y pasivos.</p>
          </div>
        </div>

        <button
          onClick={() => { triggerSound(700); setModalIdeaCustom(true); }}
          className={`${t.btnPrimary} px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all inline-flex items-center gap-2`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Proponer un Módulo Personalizado</span>
        </button>
      </div>
    </div>
  );
};