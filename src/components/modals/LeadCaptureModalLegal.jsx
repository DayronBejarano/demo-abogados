import React from 'react';
import { Calendar, Sparkles, X } from 'lucide-react';

export const LeadCaptureModalLegal = ({ 
  t, 
  modalCita, 
  setModalCita, 
  modalIdeaCustom, 
  setModalIdeaCustom, 
  triggerSound, 
  handleWhatsAppRedirect 
}) => {
  return (
    <>
      {modalCita && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-mono">
          <div className={`${t.bgCard} border ${t.border} w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl relative`}>
            <div className={`flex justify-between items-center mb-6 pb-4 border-b ${t.border}`}>
              <div className="flex items-center gap-2">
                <Calendar className={`w-5 h-5 ${t.accent}`} />
                <h3 className="font-bold text-base uppercase">Agendar Sesión Técnica con CTO</h3>
              </div>
              <button onClick={() => { triggerSound(300); setModalCita(false); }} className={`${t.textMuted} p-1`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setModalCita(false); handleWhatsAppRedirect('Cita-Asesoria-LegalTech'); }} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 uppercase font-bold">Nombre Completo & Firma / Entidad *</label>
                <input type="text" required placeholder="Ej. Dr. Mauricio Gómez (Socio Director)" className={`w-full ${t.inputBg} border ${t.border} p-3 rounded-xl outline-none`} />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 uppercase font-bold">Teléfono / WhatsApp *</label>
                <input type="tel" required placeholder="+57 310..." className={`w-full ${t.inputBg} border ${t.border} p-3 rounded-xl outline-none`} />
              </div>
              <button type="submit" className={`w-full ${t.btnPrimary} py-4 rounded-xl text-xs font-bold uppercase tracking-wider mt-2 shadow-xl`}>
                Confirmar Agendamiento Directo
              </button>
            </form>
          </div>
        </div>
      )}

      {modalIdeaCustom && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-mono">
          <div className={`${t.bgCard} border ${t.border} w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl relative`}>
            <div className={`flex justify-between items-center mb-6 pb-4 border-b ${t.border}`}>
              <div className="flex items-center gap-2">
                <Sparkles className={`w-5 h-5 ${t.accent}`} />
                <h3 className="font-bold text-base uppercase">Requerimiento LegalTech Personalizado</h3>
              </div>
              <button onClick={() => { triggerSound(300); setModalIdeaCustom(false); }} className={`${t.textMuted} p-1`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const idea = formData.get('idea');
                setModalIdeaCustom(false); 
                handleWhatsAppRedirect('Requerimiento-LegalTech-Custom', `Detalle: ${idea}`); 
              }} 
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-slate-400 mb-1 uppercase font-bold">Describe el flujo o sistema que necesitas *</label>
                <textarea 
                  name="idea"
                  required 
                  rows="4" 
                  placeholder="Ej. Requerimos una plataforma para que 50 abogados sigan expedientes con alertas por WhatsApp..." 
                  className={`w-full ${t.inputBg} border ${t.border} p-3 rounded-xl outline-none`} 
                />
              </div>
              <button type="submit" className={`w-full ${t.btnPrimary} py-4 rounded-xl text-xs font-bold uppercase tracking-wider mt-2 shadow-xl`}>
                Enviar Requerimiento a WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};