import React from 'react';
import { Scale, Gauge, Navigation, Calculator, Sparkles, Volume2, VolumeX, Calendar } from 'lucide-react';
import { PaletteSelector } from './PaletteSelector';

export const HeaderNavLegal = ({ 
  t, 
  modoKey, 
  setModoKey, 
  moduloActivo, 
  setModuloActivo, 
  sonidoHabilitado, 
  setSonidoHabilitado, 
  triggerSound, 
  setModalCita 
}) => {
  return (
    <nav className={`fixed w-full z-50 ${t.bgNav} backdrop-blur-2xl px-8 py-3.5 border-b ${t.border} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        
        {/* IDENTIDAD / LOGO */}
        <div 
          className="flex items-center gap-3 cursor-pointer shrink-0" 
          onClick={() => { triggerSound(400); setModuloActivo('dashboard'); }}
        >
          <div className={`p-2.5 ${t.btnPrimary} rounded-xl shadow-sm`}>
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight block uppercase leading-none font-serif-legal">
              LEX Enterprise<span className={t.accent}>.</span>
            </span>
            <span className={`text-[9px] font-sans-legal ${t.textMuted} tracking-[0.2em] uppercase block mt-1 font-semibold`}>
              LegalTech & Inteligencia Procesal
            </span>
          </div>
        </div>

        {/* NAVEGACIÓN CENTRAL FLOTANTE (SIN CAJA GRIS) */}
        <div className="hidden lg:flex items-center gap-2 font-sans-legal text-xs">
          {[
            { id: 'dashboard', label: 'Dashboard Exec', icon: Gauge },
            { id: 'casos', label: 'Expedientes GPS', icon: Navigation },
            { id: 'cotizador', label: 'Simulador Honorarios', icon: Calculator },
            { id: 'custom', label: 'Módulos Custom', icon: Sparkles }
          ].map((tab) => {
            const IconComp = tab.icon;
            const active = moduloActivo === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { triggerSound(active ? 300 : 600); setModuloActivo(tab.id); }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all font-semibold ${
                  active 
                    ? `${t.btnPrimary} shadow-md scale-105` 
                    : `${t.textMain} hover:bg-black/5 dark:hover:bg-white/10 opacity-75 hover:opacity-100`
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ACCIONES DERECHA */}
        <div className="flex items-center gap-3 font-sans-legal shrink-0">
          <PaletteSelector 
            t={t} 
            modoKey={modoKey} 
            setModoKey={setModoKey} 
            triggerSound={triggerSound} 
          />

          <button
            onClick={() => { setSonidoHabilitado(!sonidoHabilitado); triggerSound(700); }}
            className={`p-2.5 rounded-xl border transition-all ${t.bgCard} ${t.border} ${t.textMain} hover:bg-black/5 dark:hover:bg-white/10`}
            title="Retroalimentación Sonora UI"
          >
            {sonidoHabilitado ? <Volume2 className={`w-4 h-4 ${t.accent}`} /> : <VolumeX className="w-4 h-4 opacity-40" />}
          </button>

          <button 
            onClick={() => { triggerSound(800); setModalCita(true); }}
            className={`${t.btnPrimary} text-xs px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2 font-semibold`}
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita CTO</span>
          </button>
        </div>

      </div>
    </nav>
  );
};