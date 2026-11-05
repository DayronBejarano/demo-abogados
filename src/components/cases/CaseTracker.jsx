import React from 'react';
import { Scale, AlertTriangle, FileText, Download } from 'lucide-react';

export const CaseTracker = ({ t, unidadActiva, setUnidadActiva, EXPEDIENTES_COMPLETOS, triggerSound, handleWhatsAppRedirect }) => {
  return (
    <div className="space-y-8 font-mono">
      <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b ${t.border}`}>
        <div>
          <span className={`text-xs ${t.accent} uppercase font-bold tracking-widest block`}>Control Procesal Integrado</span>
          <h2 className="text-3xl font-black mt-1">Expedientes & Términos en Vivo</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {EXPEDIENTES_COMPLETOS.map((exp) => (
            <button
              key={exp.id}
              onClick={() => { triggerSound(500); setUnidadActiva(exp); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                unidadActiva.id === exp.id 
                  ? `${t.btnPrimary} scale-105` 
                  : `${t.bgCard} ${t.border} ${t.textMuted}`
              }`}
            >
              ⚖️ {exp.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className={`lg:col-span-8 ${t.bgCard} p-6 sm:p-8 rounded-3xl border ${t.border} shadow-2xl space-y-6`}>
          <div className={`flex justify-between items-center pb-4 border-b ${t.border}`}>
            <div>
              <span className={`text-xs ${t.accent} uppercase block font-bold`}>{unidadActiva.id}</span>
              <h3 className="text-xl font-black mt-1">{unidadActiva.titulo}</h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 font-bold">
              {unidadActiva.riesgo}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div className={`p-4 rounded-xl ${t.bgCardSubtle} border ${t.border}`}>
              <span className={`${t.textMuted} text-[10px] uppercase block`}>Parte Demandante</span>
              <span className="font-bold block mt-1">{unidadActiva.demandante}</span>
            </div>
            <div className={`p-4 rounded-xl ${t.bgCardSubtle} border ${t.border}`}>
              <span className={`${t.textMuted} text-[10px] uppercase block`}>Parte Demandada</span>
              <span className="font-bold block mt-1">{unidadActiva.demandado}</span>
            </div>
          </div>

          <div className={`p-4 rounded-xl ${t.bgCardSubtle} border ${t.border} space-y-2 text-xs`}>
            <div className="flex justify-between">
              <span className={t.textMuted}>Despacho Judicial / Tribunal:</span>
              <span className="font-bold">{unidadActiva.juzgado}</span>
            </div>
            <div className="flex justify-between">
              <span className={t.textMuted}>Fase Procesal Actual:</span>
              <span className={`${t.accent} font-bold`}>{unidadActiva.faseActual}</span>
            </div>
            <div className="flex justify-between">
              <span className={t.textMuted}>Abogado Lider del Caso:</span>
              <span className="font-bold">{unidadActiva.abogadoLider}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 text-xs">
          <div className={`p-6 rounded-3xl ${t.bgCard} border ${t.border} space-y-4 shadow-xl`}>
            <h4 className="text-sm font-bold uppercase pb-3 border-b border-slate-300 dark:border-slate-800">
              Resumen Ejecutivo & Póliza
            </h4>

            <div className={`p-3.5 rounded-xl ${t.bgCardSubtle} border ${t.border}`}>
              <span className={`${t.textMuted} text-[10px] uppercase block`}>Cuantía Estimada</span>
              <span className="text-xl font-black text-amber-600 dark:text-amber-400 block mt-0.5">{unidadActiva.cuantia}</span>
            </div>

            <div className={`p-3.5 rounded-xl ${t.bgCardSubtle} border ${t.border}`}>
              <span className={`${t.textMuted} text-[10px] uppercase block`}>Documentos Digitalizados</span>
              <span className="font-bold text-sm block mt-0.5">{unidadActiva.documentosClave} Archivos Indexados</span>
            </div>

            <button
              onClick={() => handleWhatsAppRedirect('Reporte-Juridico-PDF', `Expediente: ${unidadActiva.id}`)}
              className={`w-full ${t.btnPrimary} py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2`}
            >
              <Download className="w-4 h-4" />
              <span>Descargar Informe Procesal PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};