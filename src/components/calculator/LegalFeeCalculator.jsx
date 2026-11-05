import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export const LegalFeeCalculator = ({ t, triggerSound, handleWhatsAppRedirect }) => {
  const [cuantiaUSD, setCuantiaUSD] = useState(250000);
  const [complejidad, setComplejidad] = useState('alta');

  const multiplicadores = { baja: 0.05, media: 0.08, alta: 0.12, arbitraje: 0.15 };
  const honorariosEstimados = Math.round(cuantiaUSD * multiplicadores[complejidad] + 1500);

  return (
    <div className="space-y-8 font-mono">
      <div className={`p-8 md:p-12 rounded-3xl ${t.bgCard} border ${t.border} shadow-2xl relative overflow-hidden backdrop-blur-xl`}>
        <div className={`flex justify-between items-center border-b ${t.border} pb-6 mb-8`}>
          <div>
            <span className={`text-xs ${t.accent} uppercase tracking-widest block font-bold mb-1`}>
              Simulador Comercial para Firmas Jurídicas
            </span>
            <h2 className="text-2xl md:text-4xl font-black">
              Calculador de Honorarios & Cuantías $USD
            </h2>
          </div>
          <Calculator className={`w-8 h-8 ${t.accent} hidden sm:block`} />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs mb-2 uppercase font-bold">Nivel de Complejidad Procesal</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'baja', label: '🟢 Ordinario' },
                  { id: 'media', label: '🟡 Especializado' },
                  { id: 'alta', label: '🟠 Complejo' },
                  { id: 'arbitraje', label: '⚖️ Arbitraje' }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { triggerSound(400); setComplejidad(c.id); }}
                    className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                      complejidad === c.id ? `${t.btnPrimary} scale-105` : `${t.bgCardSubtle} ${t.border} ${t.textMuted}`
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className={t.textMuted}>Cuantía del Litigio / Contrato:</span>
                <span className={`${t.accent} font-bold`}>${cuantiaUSD.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={cuantiaUSD}
                onChange={(e) => setCuantiaUSD(Number(e.target.value))}
                className="w-full h-2 bg-slate-400 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>
          </div>

          <div className={`lg:col-span-5 ${t.bgCardSubtle} p-6 rounded-2xl border ${t.border} space-y-4`}>
            <div className={`pb-3 border-b ${t.border}`}>
              <span className={`text-[10px] ${t.textMuted} uppercase block`}>Honorarios Estimados Proyectados</span>
              <span className="text-3xl font-black">${honorariosEstimados.toLocaleString()} USD</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className={t.textMuted}>Retención Inicial / Prima Exito:</span>
                <span className="font-bold">20% Cuota Litis</span>
              </div>
              <div className="flex justify-between">
                <span className={t.textMuted}>Tiempo Est. Resolución:</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">14 a 22 Meses</span>
              </div>
            </div>

            <button
              onClick={() => handleWhatsAppRedirect('Cotización-Honorarios-Legal', `Complejidad: ${complejidad} | Cuantía: $${cuantiaUSD}USD | Total: $${honorariosEstimados}USD`)}
              className={`w-full ${t.btnPrimary} py-4 rounded-xl text-xs uppercase tracking-wider font-bold mt-4 flex items-center justify-center gap-2`}
            >
              <span>Generar Propuesta de Servicios PDF</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};