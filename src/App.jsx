import React, { useState } from 'react';
import { PALETAS_LEGAL } from './constants/themeLegal';
import { EXPEDIENTES_COMPLETOS } from './data/legalData';
import { playUISound } from './utils/sound';

import { ParticleBackground } from './components/common/ParticleBackground';
import { HeaderNavLegal } from './components/common/HeaderNavLegal';
import { LegalDashboard } from './components/dashboard/LegalDashboard';
import { CaseTracker } from './components/cases/CaseTracker';
import { LegalFeeCalculator } from './components/calculator/LegalFeeCalculator';
import { CustomLegalBuilder } from './components/custom/CustomLegalBuilder';
import { LeadCaptureModalLegal } from './components/modals/LeadCaptureModalLegal';

import { Scale, Sparkles } from 'lucide-react';

export const App = () => {
  const [modoKey, setModoKey] = useState('clasica');
  const [moduloActivo, setModuloActivo] = useState('dashboard');
  const [unidadActiva, setUnidadActiva] = useState(EXPEDIENTES_COMPLETOS[0]);
  const [sonidoHabilitado, setSonidoHabilitado] = useState(true);

  // Modales
  const [modalCita, setModalCita] = useState(false);
  const [modalIdeaCustom, setModalIdeaCustom] = useState(false);

  const t = PALETAS_LEGAL[modoKey] || PALETAS_LEGAL.clasica;

  const triggerSound = (freq = 520) => {
    playUISound(freq, 'sine', 0.05, sonidoHabilitado);
  };

  const handleWhatsAppRedirect = (motivo, detalle = '') => {
    triggerSound(880);
    const msg = `Hola Ing. Dayron. Vengo de interactuar con la Plataforma LegalTech Enterprise [REF: LEX-CTO-PRO].%0A%0A*Acción:* ${motivo}%0A*Detalle Técnico:* ${detalle || `Caso: ${unidadActiva.id} | Módulo: ${moduloActivo}`}%0A%0ASolicito agendar una sesión de arquitectura jurídica para implementar este sistema en nuestra firma.`;
    window.open(`https://wa.me/573104208919?text=${msg}`, '_blank');
  };

  return (
    <div className={`min-h-screen ${t.bgApp} ${t.textMain} font-sans-legal relative overflow-hidden pb-24 transition-colors duration-500 selection:bg-amber-700 selection:text-white`}>
      
      <ParticleBackground />

      <HeaderNavLegal 
        t={t} 
        modoKey={modoKey} 
        setModoKey={setModoKey} 
        moduloActivo={moduloActivo} 
        setModuloActivo={setModuloActivo}
        sonidoHabilitado={sonidoHabilitado}
        setSonidoHabilitado={setSonidoHabilitado}
        triggerSound={triggerSound}
        setModalCita={setModalCita}
      />

      <main className="relative z-10 pt-28 px-6 max-w-7xl mx-auto space-y-12">
        
        {moduloActivo === 'dashboard' && (
          <LegalDashboard 
            t={t}
            unidadActiva={unidadActiva}
            triggerSound={triggerSound}
            setModalCita={setModalCita}
            setModalIdeaCustom={setModalIdeaCustom}
            setModuloActivo={setModuloActivo}
          />
        )}

        {moduloActivo === 'casos' && (
          <CaseTracker 
            t={t}
            unidadActiva={unidadActiva}
            setUnidadActiva={setUnidadActiva}
            EXPEDIENTES_COMPLETOS={EXPEDIENTES_COMPLETOS}
            triggerSound={triggerSound}
            handleWhatsAppRedirect={handleWhatsAppRedirect}
          />
        )}

        {moduloActivo === 'cotizador' && (
          <LegalFeeCalculator 
            t={t}
            triggerSound={triggerSound}
            handleWhatsAppRedirect={handleWhatsAppRedirect}
          />
        )}

        {moduloActivo === 'custom' && (
          <CustomLegalBuilder 
            t={t}
            triggerSound={triggerSound}
            setModalIdeaCustom={setModalIdeaCustom}
          />
        )}

      </main>

      <LeadCaptureModalLegal 
        t={t}
        modalCita={modalCita}
        setModalCita={setModalCita}
        modalIdeaCustom={modalIdeaCustom}
        setModalIdeaCustom={setModalIdeaCustom}
        triggerSound={triggerSound}
        handleWhatsAppRedirect={handleWhatsAppRedirect}
      />

      {/* BARRA INFERIOR ULTRACOMPACTA SIN DUPLICIDAD DE CTAS */}
      <div className={`fixed bottom-0 inset-x-0 ${t.bgNav} border-t ${t.border} py-2.5 px-6 backdrop-blur-2xl z-40 shadow-2xl font-sans-legal`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 ${t.btnPrimary} rounded-lg shrink-0`}>
              <Scale className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider font-serif-legal">
                LEX Enterprise <span className={`${t.accent} font-normal font-sans-legal`}>/ DB Tech Studio</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => { triggerSound(500); setModalIdeaCustom(true); }} 
              className={`border ${t.border} ${t.bgCardSubtle} font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${t.accent}`} />
              <span>Requerimiento Custom</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;