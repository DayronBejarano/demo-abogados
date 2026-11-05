import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { PALETAS_LEGAL } from '../../constants/themeLegal';

export const PaletteSelector = ({ t, modoKey, setModoKey, triggerSound }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activePalette = PALETAS_LEGAL[modoKey] || PALETAS_LEGAL.clasica;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative font-sans-legal" ref={dropdownRef}>
      <button
        onClick={() => { triggerSound(450); setOpen(!open); }}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all text-xs font-bold ${t.bgCard} ${t.border}`}
      >
        <Palette className={`w-4 h-4 ${t.accent}`} />
        <div className="flex items-center gap-1.5">
          <span className="hidden sm:inline text-xs">{activePalette.nombre.split('—')[0]}</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: activePalette.swatchBg }} />
            <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: activePalette.swatchPrimary }} />
            <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: activePalette.swatchAccent }} />
          </div>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 ${t.textMuted} transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className={`absolute right-0 mt-2 w-72 rounded-2xl ${t.bgCard} border ${t.border} shadow-2xl p-2 z-50 space-y-1`}>
          <div className={`text-[10px] uppercase font-bold px-3 py-1.5 ${t.textMuted} border-b ${t.border}`}>
            Seleccionar Identidad Cromática
          </div>
          {Object.keys(PALETAS_LEGAL).map((key) => {
            const pal = PALETAS_LEGAL[key];
            const isSelected = modoKey === key;
            return (
              <button
                key={key}
                onClick={() => {
                  triggerSound(600);
                  setModoKey(key);
                  setOpen(false);
                }}
                className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs font-bold ${
                  isSelected ? `${t.bgCardSubtle} ${t.accent} border ${t.border}` : `${t.textMain} hover:${t.bgCardSubtle}`
                }`}
              >
                <div>
                  <span className="block">{pal.nombre}</span>
                  <span className={`text-[10px] font-normal block ${t.textMuted}`}>{pal.subtitulo}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: pal.swatchBg }} />
                  <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: pal.swatchPrimary }} />
                  <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: pal.swatchAccent }} />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};