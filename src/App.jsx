import React, { useState } from 'react';
import { 
  Scale, Shield, Landmark, BookOpen, Award, Phone, Calendar, 
  ArrowRight, ExternalLink, X, CheckCircle2, Building, Briefcase, 
  Lock, ChevronRight, FileText, UserCheck, Gavel, Globe, Palette 
} from 'lucide-react';

// PALETAS DE COLOR DE ALTO ESTATUS (REGLA 60-30-10)
const PALETAS_LEGAL = {
  oro: {
    id: 'oro',
    nombre: 'Oro Imperial',
    subtitulo: 'Boutique & Litigio de Alto Nivel',
    bgApp: 'bg-[#0b0f17]',
    bgNav: 'bg-[#0b0f17]/95 border-amber-500/20',
    bgCard: 'bg-[#0e1420]',
    textMain: 'text-amber-50',
    textMuted: 'text-slate-300',
    accent: 'text-amber-400',
    accentGrad: 'from-amber-400 via-amber-500 to-amber-600',
    border: 'border-amber-500/20',
    borderHover: 'hover:border-amber-400/50',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    btnPrimary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20',
    glow: 'rgba(245, 158, 11, 0.15)'
  },
  azul: {
    id: 'azul',
    nombre: 'Azul Zafiro Notarial',
    subtitulo: 'M&A & Corporativo Institucional',
    bgApp: 'bg-[#030712]',
    bgNav: 'bg-[#030712]/95 border-blue-500/20',
    bgCard: 'bg-[#0b1329]',
    textMain: 'text-blue-50',
    textMuted: 'text-slate-300',
    accent: 'text-blue-400',
    accentGrad: 'from-blue-400 via-cyan-400 to-blue-600',
    border: 'border-blue-500/20',
    borderHover: 'hover:border-blue-400/50',
    badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    btnPrimary: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-slate-950 shadow-blue-500/20',
    glow: 'rgba(59, 130, 246, 0.15)'
  },
  esmeralda: {
    id: 'esmeralda',
    nombre: 'Esmeralda Judicial',
    subtitulo: 'Arbitraje Internacional & Diplomático',
    bgApp: 'bg-[#060d0a]',
    bgNav: 'bg-[#060d0a]/95 border-emerald-500/20',
    bgCard: 'bg-[#0c1a14]',
    textMain: 'text-emerald-50',
    textMuted: 'text-slate-300',
    accent: 'text-emerald-400',
    accentGrad: 'from-emerald-400 via-teal-400 to-emerald-600',
    border: 'border-emerald-500/20',
    borderHover: 'hover:border-emerald-400/50',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    btnPrimary: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600 text-slate-950 shadow-emerald-500/20',
    glow: 'rgba(16, 185, 129, 0.15)'
  }
};

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
  const [paletaKey, setPaletaKey] = useState('oro');
  const [modalConsulta, setModalConsulta] = useState(false);
  const [areaSeleccionada, setAreaSeleccionada] = useState('ma');
  const [datosForm, setDatosForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    detalles: ''
  });

  const pal = PALETAS_LEGAL[paletaKey];

  const handleWhatsApp = (motivo) => {
    const area = AREAS_PRACTICA.find(a => a.id === areaSeleccionada)?.titulo || 'General';
    const msg = `Hola Ing. Dayron. Vengo de interactuar con el Demo Legal de Abogados [REF: DEMO-LEGAL] (Paleta: *${pal.nombre}* | Motivo: ${motivo} | Área: ${area}) y solicito valoración técnica para una firma boutique.`;
    window.open(`https://wa.me/573104208919?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();
    setModalConsulta(false);
    handleWhatsApp(`Consulta Confidencial por ${datosForm.empresa || datosForm.nombre}`);
  };

  return (
    <div className={`min-h-screen ${pal.bgApp} ${pal.textMain} font-serif selection:bg-amber-500 selection:text-black pb-28 transition-colors duration-500`}>
      
      {/* HEADER DE LA FIRMA */}
      <nav className={`fixed w-full z-50 ${pal.bgNav} backdrop-blur-xl border-b ${pal.border} px-6 py-4 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 ${pal.btnPrimary} rounded-xl shadow-lg shrink-0`}>
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white uppercase block font-serif leading-none">
                Valenzuela & Asociados
              </span>
              <span className={`text-[9px] font-sans ${pal.accent} tracking-[0.25em] uppercase block mt-1`}>
                Firma Legal Boutique • M&A Corporativo
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-sans text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <a href="#areas" className={`hover:${pal.accent} transition-colors`}>Áreas de Práctica</a>
            <a href="#socios" className={`hover:${pal.accent} transition-colors`}>Socios Directores</a>
            <a href="#credenciales" className={`hover:${pal.accent} transition-colors`}>Credenciales</a>
          </div>

          <button 
            onClick={() => setModalConsulta(true)} 
            className={`hidden sm:inline-flex ${pal.btnPrimary} font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95`}
          >
            Agendar Consulta Confidencial
          </button>
        </div>
      </nav>

      {/* SELECTOR PERSISTENTE DE PALETAS / TEMAS LEGALES */}
      <div className="relative z-30 pt-28 px-6 max-w-7xl mx-auto">
        <div className={`p-2 rounded-2xl ${pal.bgCard} border ${pal.border} backdrop-blur-2xl shadow-xl flex flex-wrap items-center justify-center gap-2 transition-colors duration-500`}>
          <div className="flex items-center gap-2 px-3 py-1 font-mono text-[11px] text-slate-400 border-r border-white/10 mr-2 hidden md:flex">
            <Palette className={`w-4 h-4 ${pal.accent}`} />
            <span>PALETA INSTITUCIONAL:</span>
          </div>
          
          {Object.keys(PALETAS_LEGAL).map((key) => {
            const p = PALETAS_LEGAL[key];
            const isActive = paletaKey === key;
            return (
              <button
                key={key}
                onClick={() => setPaletaKey(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-sans font-bold text-xs transition-all duration-300 ${
                  isActive 
                    ? `${p.btnPrimary} scale-105 shadow-md` 
                    : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                <span>{p.nombre}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-10 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className={`inline-flex items-center gap-2 font-sans text-xs ${pal.accent} tracking-widest uppercase border ${pal.border} px-4 py-1.5 rounded-full bg-white/5 mb-6 backdrop-blur-md`}>
            <Award className={`w-4 h-4 ${pal.accent}`} />
            <span>Litigio Corporativo & Transacciones M&A</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 font-serif">
            Defensa Jurídica de Alto Nivel para <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${pal.accentGrad}`}>
              Corporaciones Exigentes.
            </span>
          </h1>

          <p className="font-sans text-slate-300 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl font-light">
            Estructuración de operaciones transfronterizas, resolución de controversias complejas y blindaje patrimonial con el más alto estándar de confidencialidad institucional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-sans">
            <button 
              onClick={() => setModalConsulta(true)} 
              className={`${pal.btnPrimary} font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl`}
            >
              <span>Agendar Evaluación Privada</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => handleWhatsApp('Dossier-Corporativo')} 
              className={`border ${pal.border} ${pal.accent} font-bold text-sm px-8 py-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2`}
            >
              <FileText className={`w-4 h-4 ${pal.accent}`} />
              <span>Descargar Dossier Legal</span>
            </button>
          </div>
        </div>

        {/* METRICAS DE ESTATUS */}
        <div className={`lg:col-span-5 ${pal.bgCard} p-8 rounded-3xl border ${pal.border} font-sans shadow-2xl relative overflow-hidden transition-colors duration-500`}>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Shield className={`w-6 h-6 ${pal.accent}`} />
            <div>
              <h3 className={`${pal.accent} font-bold text-xs uppercase tracking-wider`}>Métricas de Relevancia Institucional</h3>
              <p className="text-[11px] text-slate-400 font-mono">Verificables por auditoría externa</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-black/40 border border-white/5 rounded-2xl">
              <p className="text-3xl font-bold text-white font-serif mb-1">$450M+</p>
              <p className="text-xs text-slate-400 font-light">En Transacciones M&A Cerradas</p>
            </div>

            <div className="p-5 bg-black/40 border border-white/5 rounded-2xl">
              <p className={`text-3xl font-bold ${pal.accent} font-serif mb-1`}>98.4%</p>
              <p className="text-xs text-slate-400 font-light">Tasa de Éxito en Arbitraje</p>
            </div>

            <div className="p-5 bg-black/40 border border-white/5 rounded-2xl">
              <p className={`text-3xl font-bold ${pal.accent} font-serif mb-1`}>+25</p>
              <p className="text-xs text-slate-400 font-light">Años de Liderazgo Jurídico</p>
            </div>

            <div className="p-5 bg-black/40 border border-white/5 rounded-2xl">
              <p className="text-3xl font-bold text-white font-serif mb-1">100%</p>
              <p className="text-xs text-slate-400 font-light">Garantía de Confidencialidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`font-sans text-xs ${pal.accent} uppercase tracking-[0.25em] block mb-3 font-semibold`}>
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
                className={`${pal.bgCard} p-8 rounded-3xl border ${pal.border} ${pal.borderHover} transition-all cursor-pointer group shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-6 font-sans">
                  <div className={`p-3.5 bg-white/5 border ${pal.border} rounded-2xl ${pal.accent} group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full ${pal.badgeBg}`}>
                    {area.badge}
                  </span>
                </div>

                <span className={`font-sans text-xs ${pal.accent} block mb-1 font-semibold`}>{area.subtitulo}</span>
                <h3 className={`text-2xl font-bold text-white mb-3 font-serif group-hover:${pal.accent} transition-colors`}>
                  {area.titulo}
                </h3>
                <p className="font-sans text-slate-400 text-xs leading-relaxed mb-6 font-light">
                  {area.descripcion}
                </p>

                <div className={`font-sans pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold ${pal.accent}`}>
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
      <section id="socios" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`font-sans text-xs ${pal.accent} uppercase tracking-[0.25em] block mb-3 font-semibold`}>
            Liderazgo Intelectual
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-serif">
            Socios Principales & Dirección
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SOCIOS_DIRECTORES.map((socio, idx) => (
            <div key={idx} className={`${pal.bgCard} p-8 rounded-3xl border ${pal.border} font-sans relative overflow-hidden`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl ${pal.btnPrimary} flex items-center justify-center font-serif font-black text-xl shrink-0 shadow-lg`}>
                  {socio.nombre.split(' ')[1]?.[0] || 'V'}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">{socio.nombre}</h3>
                  <p className={`text-xs ${pal.accent} font-semibold`}>{socio.cargo}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{socio.llm}</p>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                {socio.bio}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Especialidad Principal:</span>
                <span className={`font-bold font-mono ${pal.accent}`}>{socio.especialidad}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL CONSULTA CONFIDENCIAL */}
      {modalConsulta && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans">
          <div className={`${pal.bgCard} border ${pal.border} w-full max-w-lg p-6 sm:p-8 rounded-3xl text-slate-100 shadow-2xl relative`}>
            
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div className={`flex items-center gap-2 ${pal.accent}`}>
                <Lock className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-white">Consulta Legal Confidencial</h3>
              </div>
              <button onClick={() => setModalConsulta(false)} className={`text-slate-400 hover:${pal.accent} transition-colors p-1`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitModal} className="space-y-4">
              <div>
                <label className={`block text-xs font-bold ${pal.accent} mb-1.5 uppercase tracking-wider`}>
                  Área Jurídica de Interés
                </label>
                <select 
                  value={areaSeleccionada}
                  onChange={(e) => setAreaSeleccionada(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-sm text-white outline-none focus:border-amber-400 transition-colors cursor-pointer"
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
                    className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-sm text-white outline-none" 
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
                    className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-sm text-white outline-none" 
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
                  className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-sm text-white outline-none font-mono" 
                />
              </div>

              <button 
                type="submit" 
                className={`w-full ${pal.btnPrimary} font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg mt-2 hover:opacity-95 transition-opacity`}
              >
                Transmitir Solicitud Privada
              </button>
            </form>
          </div>
        </div>
      )}

      {/* BANNER FLOTANTE COMERCIAL PERSISTENTE DB TECH STUDIO */}
      <div className={`fixed bottom-0 inset-x-0 ${pal.bgNav} border-t ${pal.border} p-4 font-sans backdrop-blur-2xl z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 bg-white/5 border ${pal.border} rounded-xl ${pal.accent} shrink-0`}>
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">
                Demo B2B Corporativo Legal <span className={`${pal.accent} font-normal`}>/ DB Tech Studio</span>
              </p>
              <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                Paleta Activa: <strong className={pal.accent}>{pal.nombre}</strong>.
              </p>
            </div>
          </div>

          <button 
            onClick={() => handleWhatsApp('Cotizar-Plataforma-Legal')} 
            className={`w-full sm:w-auto ${pal.btnPrimary} font-bold text-xs px-6 py-3 rounded-xl shadow-lg active:scale-95 transition-all`}
          >
            Cotizar esta Plataforma
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;