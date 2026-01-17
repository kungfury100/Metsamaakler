import React from 'react';
import { Magnetic } from './utils/Magnetic';
import { 
  ShieldCheck, 
  Clock, 
  Send, 
  TreePine, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User,
  Lock
} from 'lucide-react';
import { OptimizedImage } from './ui/OptimizedImage';
import { StarIcon } from './hero/HeroIcons';
import metsaMuukKlient1 from '../assets/4c712585da1b4b9fbe2ba1a7295b58aaa2ba6813.png';
import metsaMuukKlient2 from '../assets/200dbd6af8d7ed82ca500c8263b23c6fed4e8a97.png';
import metsaMuukKlient3 from '../assets/b51955e50938bbde26efd2e38adab0bce951399b.png';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// CONTACT CTA SECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Purpose: Final conversion point. High-trust, high-fidelity lead capture form.
// Design: Split layout with value proposition on left, enclosed form on right.
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface ContactCTASectionProps {
  showCTA?: boolean;
  transparentBg?: boolean;
  title?: string;
  subtitle?: string;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({
  showCTA = true,
  transparentBg = false,
  title = "Metsamaakler",
  subtitle = "Metsa müük, raieõiguse müük, metsakinnistutega seotud tehingud. Ostame teie kinnistu või leiame parima hinnaga ostja ilma ebaprofessionaalsete vahendajateta."
}) => {
  const clientImages = [
    { src: metsaMuukKlient1, alt: 'metsa müük - rahulolev klient 1' },
    { src: metsaMuukKlient2, alt: 'metsa müük - rahulolev klient 2' },
    { src: metsaMuukKlient3, alt: 'metsa müük - rahulolev klient 3' }
  ];

  return (
    <section 
      id="kontakt" 
      className={`relative w-full pt-16 pb-20 lg:pt-34 lg:pb-44 overflow-hidden ${transparentBg ? 'bg-transparent' : 'bg-[#F4F9F6]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
          
          {/* 
             LEFT COLUMN: Value Proposition & Trust Signals
          */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            
            {/* Header Group */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-[rgb(22,56,35)] tracking-tight text-[clamp(2.5rem,10vw,3.75rem)] leading-[1.1]">
                {title}
              </h2>
              <p className="text-lg text-[rgb(88,98,90)] leading-relaxed max-w-2xl text-[clamp(1rem,4vw,1.125rem)]">
                {subtitle}
              </p>
              
              <p className="text-[rgb(88,98,90)] leading-relaxed max-w-2xl hidden lg:block">
                Metsa müük ning tehingud metsakinnistutega usaldage meile. Oleme metsaomanikele 
                usaldusväärseks partneriks juba rohkem kui 15-aastat ning kui me ise teie kinnistut 
                osta ei soovi, leiame teile parima ostja otse kokkuostjate seast, vältides peavalu 
                või tüütuid vahendajaid.
              </p>
            </div>

            {/* CTAs & Social Proof */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 sm:gap-8">
              {showCTA && (
                <a 
                  href="#form"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl bg-[rgb(52,125,78)] text-white font-bold text-lg shadow-lg shadow-[rgba(52,125,78,0.25)] hover:bg-[rgb(42,105,63)] hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 ease-out"
                >
                  Küsi tasuta hindamist
                </a>
              )}
              
              <div className="flex items-center gap-4 px-5 py-3 bg-[#F0F5F2] rounded-2xl border border-[rgba(52,125,78,0.05)] w-full sm:w-fit justify-center sm:justify-start">
                <div className="flex -space-x-3">
                  {clientImages.map((img, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center relative z-0 overflow-hidden"
                      style={{
                        boxShadow: '0 2px 4px rgba(88, 78, 68, 0.06)',
                      }}
                    >
                      <img
  src={img.src}
  alt={img.alt}
  className="w-full h-full object-cover"
  width={40}
  height={40}
  loading="eager"
/>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'rgb(88, 78, 68)', marginTop: '2px', fontWeight: 500 }}>
                    <span style={{ fontWeight: 800, color: 'rgb(34, 75, 48)' }}>500+</span> rahulolevat klienti
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[rgba(52,125,78,0.1)] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[rgb(240,250,245)] flex items-center justify-center text-[rgb(52,125,78)]">
                  <TreePine size={20} aria-label="metsa müük - tasuta hindamine" />
                </div>
                <span className="font-medium text-[rgb(22,56,35)]">Tasuta metsa hindamine ja turuanalüüs</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[rgba(52,125,78,0.1)] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[rgb(240,250,245)] flex items-center justify-center text-[rgb(52,125,78)]">
                  <ShieldCheck size={20} aria-label="metsa müük - sertifitseeritud hindajad" />
                </div>
                <span className="font-medium text-[rgb(22,56,35)]">Sertifitseeritud hindajad ja kogemus</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[rgba(52,125,78,0.1)] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[rgb(240,250,245)] flex items-center justify-center text-[rgb(52,125,78)]">
                  <CheckCircle2 size={20} aria-label="metsa müük - parim hind" />
                </div>
                <span className="font-medium text-[rgb(22,56,35)]">Parim hind ja läbipaistev protsess</span>
              </div>
            </div>

          </div>

          {/* 
             RIGHT COLUMN: Contact Form
          */}
          <div className="lg:col-span-5">
            <div 
              id="form"
              className="bg-white rounded-2xl border-2 border-[rgb(52,125,78)] p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[rgb(22,56,35)] mb-2">
                  Tasuta konsultatsioon
                </h3>
                <p className="text-[rgb(88,98,90)]">
                  Jätke meile oma andmed ning võtame teiega ühendust
                </p>
              </div>

              {/* Inputs */}
              <form className="space-y-5">
                <div className="relative">
                  <label htmlFor="contact-name" className="sr-only">Teie nimi</label>
                  <User className="absolute left-4 top-3.5 text-gray-400" size={20} aria-hidden="true" />
                  <input 
                    id="contact-name"
                    type="text" 
                    placeholder="Teie nimi"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[rgb(52,125,78)] focus:ring-2 focus:ring-[rgb(52,125,78)]/20 outline-none transition-all placeholder:text-gray-400 text-[rgb(22,56,35)] text-[16px] appearance-none"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="contact-phone" className="sr-only">Telefon</label>
                  <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} aria-hidden="true" />
                  <input 
                    id="contact-phone"
                    type="tel" 
                    placeholder="+372 5XXX XXXX"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[rgb(52,125,78)] focus:ring-2 focus:ring-[rgb(52,125,78)]/20 outline-none transition-all placeholder:text-gray-400 text-[rgb(22,56,35)] text-[16px] appearance-none"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="contact-email" className="sr-only">E-post</label>
                  <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} aria-hidden="true" />
                  <input 
                    id="contact-email"
                    type="email" 
                    placeholder="teie@email.ee"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[rgb(52,125,78)] focus:ring-2 focus:ring-[rgb(52,125,78)]/20 outline-none transition-all placeholder:text-gray-400 text-[rgb(22,56,35)] text-[16px] appearance-none"
                  />
                </div>

                <label htmlFor="contact-message" className="sr-only">Päringu sisu</label>
                <textarea 
                  id="contact-message"
                  rows={4}
                  placeholder="Kirjeldage oma vajadust..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[rgb(52,125,78)] focus:ring-2 focus:ring-[rgb(52,125,78)]/20 outline-none transition-all placeholder:text-gray-400 text-[rgb(22,56,35)] resize-none text-[16px] appearance-none"
                ></textarea>

                <button 
                  type="button"
                  className="w-full py-4 bg-[rgb(52,125,78)] text-white font-bold rounded-xl shadow-lg shadow-[rgba(52,125,78,0.2)] hover:bg-[rgb(42,105,63)] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Saada tasuta päring
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Footer Badges */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4 justify-between">
                 <div className="flex items-center gap-2 px-3 py-1.5 bg-[rgb(240,250,245)] rounded-lg text-[rgb(52,125,78)] text-xs font-bold uppercase tracking-wide">
                    <Lock size={12} />
                    Kaitstud andmed
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-lg text-orange-700 text-xs font-bold uppercase tracking-wide">
                    <Clock size={12} />
                    Kiire vastus
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};