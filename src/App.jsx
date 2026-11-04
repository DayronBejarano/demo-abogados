import React, { useState } from 'react';
import { 
  Scale, Shield, Landmark, BookOpen, Award, Phone, Calendar, 
  ArrowRight, ExternalLink, X, CheckCircle2, Building, Briefcase, 
  Lock, ChevronRight, FileText, UserCheck, Gavel, Globe 
} from 'lucide-react';

const AREAS_PRACTICA = [
  {
    id: 'ma',
    titulo: 'Fusiones & Adquisiciones (M&A)',
    subtitulo: 'Transacciones Transfronterizas & Structuring',
    descripcion: 'Estructuración jurídica en compraventa de activos, Joint Ventures, Due Diligence integral y gobernanza corporativa para grupos empresariales.',
    icon: Building,
    badge: 'Transacciones High-Ticket',
    metricas: '$450M+ Negociados'
  },
  {
    id: 'litigio',
    titulo: 'Arbitraje & Litigio Complejo',
    subtitulo: 'Cámaras de Comercio & CIADI',
    descripcion: 'Representación estratégica en disputas comerciales masivas, arbitraje internacional de inversión y resolución de conflictos entre accionistas.',
    icon: Gavel,
    badge: 'Corte Internacional',
    metricas: '98.4% Tasa de Éxito'
  },
  {
    id: 'tributario',
    titulo: 'Derecho Fiscal & Planificación',
    subtitulo: 'Optimización & Cumplimiento Normativo',
    descripcion: 'Diseño de estructuras tributarias eficientes para holdings, defensa en litigios fiscales complejos y precios de transferencia internacional.',
    icon: Landmark,
    badge: 'Eficiencia Fiscal',
    metricas: 'Cero Deuda Tributaria'
  },
  {
    id: 'tecnologia',
    titulo: 'Propiedad Intelectual & Tech',
    subtitulo: 'Patentes, IA & Activos Digitales',
    descripcion: 'Protección de marcas, registro de software, cumplimiento GDPR/Habeas Data corporativo y asesoría a empresas de tecnología deep-tech.',
    icon: Lock,
    badge: 'Deep-Tech & IP',
    metricas: '+300 Marcas Registradas'
  }
];

const SOCIOS_DIRECTORES = [
  {
    nombre: 'Dr. Alejandro Valenzuela',
    cargo: 'Socio Director — M&A & Corporate',
    llm: 'Master of Laws (LL.M.) por Columbia University',
    bio: 'Más de 20 años liderando transacciones transfronterizas en Latinoamérica y Europa. Asesor de juntas directivas en el sector bancario e industrial.',
    especialidad: 'Fusiones Corporativas'
  },
  {
    nombre: 'Dra. Elena Santamaría',
    cargo: 'Socia Senior — Arbitraje Internacional',
    llm: 'Doctora en Derecho Procesal por la Sorbona de París',
    bio: 'Árbitro designada por la Cámara de Comercio Internacional (CCI). Especialista en litigio de infraestructura, concesiones civiles e hidrocarburos.',
    especialidad: 'Arbitraje CIADI & CCI'
  }
];

export const App = () => {
  const [modalConsulta, setModalConsulta] = useState(false);
  const [areaSeleccionada, setAreaSeleccionada] = useState('ma');
  const [datosForm, setDatosForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    detalles: ''
  });

  const handleWhatsApp = (motivo) => {
    const area = AREAS_PRACTICA.find(a => a.id === areaSeleccionada)?.titulo || 'General';
    const msg = `Hola Ing. Dayron. Vengo de interactuar con el Demo Legal de Abogados [REF: DEMO-LEGAL] (Motivo: ${motivo} | Área: ${area}) y solicito valoración técnica para una firma boutique.`;
    window.open(`https://wa.me/573104208919?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();
    setModalConsulta(false);
    handleWhatsApp(`Consulta Confidencial por ${datosForm.empresa || datosForm.nombre}`);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-amber-50 font-serif selection:bg-amber-500 selection:text-black pb-28">
      
      {/* HEADER DE LA FIRMA */}
      <nav className="fixed w-full z-50 bg-[#0b0f17]/95 backdrop-blur-xl border-b border-amber-500/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 rounded-xl text-slate-950 shadow-lg shadow-amber-500/20 shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-amber-100 uppercase block font-serif leading-none">
                Valenzuela & Asociados
              </span>
              <span className="text-[9px] font-sans text-amber-400 tracking-[0.25em] uppercase block mt-1">
                Firma Legal Boutique • M&A Corporativo
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-sans text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <a href="#areas" className="hover:text-amber-400 transition-colors">Áreas de Práctica</a>
            <a href="#socios" className="hover:text-amber-400 transition-colors">Socios Directores</a>
            <a href="#credenciales" className="hover:text-amber-400 transition-colors">Credenciales</a>
          </div>

          <button 
            onClick={() => setModalConsulta(true)} 
            className="hidden sm:inline-flex bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
          >
            Agendar Consulta Confidencial
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 font-sans text-xs text-amber-400 tracking-widest uppercase border border-amber-500/30 px-4 py-1.5 rounded-full bg-amber-500/10 mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Litigio Corporativo & Transacciones M&A</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 font-serif">
            Defensa Jurídica de Alto Nivel para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Corporaciones Exigentes.
            </span>
          </h1>

          <p className="font-sans text-slate-300 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl font-light">
            Estructuración de operaciones transfronterizas, resolución de controversias complejas y blindaje patrimonial con el más alto estándar de confidencialidad institucional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-sans">
            <button 
              onClick={() => setModalConsulta(true)} 
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-amber-500/20"
            >
              <span>Agendar Evaluación Privada</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => handleWhatsApp('Dossier-Corporativo')} 
              className="border border-amber-500/30 text-amber-300 font-bold text-sm px-8 py-4 rounded-xl hover:bg-amber-500/10 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Descargar Dossier Legal</span>
            </button>
          </div>
        </div>

        {/* METRICAS DE ESTATUS */}
        <div className="lg:col-span-5 bg-gradient-to-b from-amber-500/10 via-[#0b0f17] to-amber-500/5 p-8 rounded-3xl border border-amber-500/20 font-sans shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
            <Shield className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-amber-300 font-bold text-xs uppercase tracking-wider">Métricas de Relevancia Institucional</h3>
              <p className="text-[11px] text-slate-400 font-mono">Verificables por auditoría externa</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-[#0b0f17]/90 border border-amber-500/15 rounded-2xl">
              <p className="text-3xl font-bold text-white font-serif mb-1">$450M+</p>
              <p className="text-xs text-slate-400 font-light">En Transacciones M&A Cerradas</p>
            </div>

            <div className="p-5 bg-[#0b0f17]/90 border border-amber-500/15 rounded-2xl">
              <p className="text-3xl font-bold text-amber-400 font-serif mb-1">98.4%</p>
              <p className="text-xs text-slate-400 font-light">Tasa de Éxito en Arbitraje</p>
            </div>

            <div className="p-5 bg-[#0b0f17]/90 border border-amber-500/15 rounded-2xl">
              <p className="text-3xl font-bold text-amber-400 font-serif mb-1">+25</p>
              <p className="text-xs text-slate-400 font-light">Años de Liderazgo Jurídico</p>
            </div>

            <div className="p-5 bg-[#0b0f17]/90 border border-amber-500/15 rounded-2xl">
              <p className="text-3xl font-bold text-white font-serif mb-1">100%</p>
              <p className="text-xs text-slate-400 font-light">Garantía de Confidencialidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs text-amber-400 uppercase tracking-[0.25em] block mb-3 font-semibold">
            Práctica Legal Especializada
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight font-serif">
            Estructuras Complejas & Defensa Estratégica
          </h2>
          <p className="font-sans text-slate-400 text-sm mt-4 font-light leading-relaxed">
            Nuestros equipos multidisciplinarios atienden exclusivamente materias de alto impacto financiero y reputacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {AREAS_PRACTICA.map((area) => {
            const IconComp = area.icon;
            return (
              <div 
                key={area.id}
                onClick={() => {
                  setAreaSeleccionada(area.id);
                  setModalConsulta(true);
                }}
                className="bg-gradient-to-br from-[#0e1420] to-[#0b0f17] p-8 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 transition-all cursor-pointer group shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6 font-sans">
                  <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {area.badge}
                  </span>
                </div>

                <span className="font-sans text-xs text-amber-400 block mb-1 font-semibold">{area.subtitulo}</span>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-amber-300 transition-colors">
                  {area.titulo}
                </h3>
                <p className="font-sans text-slate-400 text-xs leading-relaxed mb-6 font-light">
                  {area.descripcion}
                </p>

                <div className="font-sans pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>{area.metricas}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Consultar Caso</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOCIOS DIRECTORES */}
      <section id="socios" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-500/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs text-amber-400 uppercase tracking-[0.25em] block mb-3 font-semibold">
            Liderazgo Intelectual
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-serif">
            Socios Principales & Dirección
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SOCIOS_DIRECTORES.map((socio, idx) => (
            <div key={idx} className="bg-[#0e1420] p-8 rounded-3xl border border-amber-500/15 font-sans relative overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-serif font-black text-xl shrink-0 shadow-lg shadow-amber-500/20">
                  {socio.nombre.split(' ')[1]?.[0] || 'V'}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">{socio.nombre}</h3>
                  <p className="text-xs text-amber-400 font-semibold">{socio.cargo}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{socio.llm}</p>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                {socio.bio}
              </p>

              <div className="pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Especialidad Principal:</span>
                <span className="text-amber-300 font-bold font-mono">{socio.especialidad}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL CONSULTA CONFIDENCIAL */}
      {modalConsulta && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans">
          <div className="bg-[#0e1420] border border-amber-500/30 w-full max-w-lg p-6 sm:p-8 rounded-3xl text-slate-100 shadow-2xl relative">
            
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-2 text-amber-400">
                <Lock className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-white">Consulta Legal Confidencial</h3>
              </div>
              <button onClick={() => setModalConsulta(false)} className="text-slate-400 hover:text-amber-400 transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitModal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-amber-400 mb-1.5 uppercase tracking-wider">
                  Área Jurídica de Interés
                </label>
                <select 
                  value={areaSeleccionada}
                  onChange={(e) => setAreaSeleccionada(e.target.value)}
                  className="w-full bg-[#0b0f17] border border-amber-500/20 p-3 rounded-xl text-sm text-white outline-none focus:border-amber-400 transition-colors cursor-pointer"
                >
                  {AREAS_PRACTICA.map(a => (
                    <option key={a.id} value={a.id}>{a.titulo}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Nombre Completo *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. Dr. Carlos Mendoza" 
                    value={datosForm.nombre}
                    onChange={(e) => setDatosForm({ ...datosForm, nombre: e.target.value })}
                    className="w-full bg-[#0b0f17] border border-amber-500/20 p-3 rounded-xl text-sm text-white outline-none focus:border-amber-400" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Empresa / Firma *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. Grupo Industrial S.A." 
                    value={datosForm.empresa}
                    onChange={(e) => setDatosForm({ ...datosForm, empresa: e.target.value })}
                    className="w-full bg-[#0b0f17] border border-amber-500/20 p-3 rounded-xl text-sm text-white outline-none focus:border-amber-400" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Teléfono / WhatsApp *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="+57 310..." 
                  value={datosForm.telefono}
                  onChange={(e) => setDatosForm({ ...datosForm, telefono: e.target.value })}
                  className="w-full bg-[#0b0f17] border border-amber-500/20 p-3 rounded-xl text-sm text-white outline-none focus:border-amber-400 font-mono" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 mt-2 hover:opacity-95 transition-opacity"
              >
                Transmitir Solicitud Privada
              </button>
            </form>
          </div>
        </div>
      )}

      {/* BANNER FLOTANTE COMERCIAL PERSISTENTE DB TECH STUDIO */}
      <div className="fixed bottom-0 inset-x-0 bg-[#0b0f17]/95 border-t border-amber-500/30 p-4 font-sans backdrop-blur-2xl z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">
                Demo B2B Corporativo Legal <span className="text-amber-400 font-normal">/ DB Tech Studio</span>
              </p>
              <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                Plataforma de Alto Estatus para Firmas Boutique & Abogados.
              </p>
            </div>
          </div>

          <button 
            onClick={() => handleWhatsApp('Cotizar-Plataforma-Legal')} 
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            Cotizar esta Plataforma
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;