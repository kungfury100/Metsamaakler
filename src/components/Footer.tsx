import React from 'react';
import { Reveal } from './utils/Reveal';
import { Parallax } from './utils/Parallax';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE FOOTER
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, external = false }) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="relative inline-flex items-center group py-1.5 text-[0.9375rem] font-normal text-[rgb(88,78,68)] hover:text-[rgb(34,75,48)] transition-colors duration-300"
    >
      {/* hover indicator dot - positioned absolutely to not affect layout alignment */}
      <span
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-[rgb(52,125,78)] shadow-[0_0_4px_rgba(52,125,78,0.6)]"
      />
      
      <span className="relative">
        {children}
        
        {/* underline effect */}
        <span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-[rgb(52,125,78)] to-transparent group-hover:w-full transition-all duration-300 rounded-full opacity-40"
        />
      </span>
    </a>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 pb-12 overflow-hidden bg-[#F4F9F6]">

      {/* Decorational Leaf Top Right */}
      <Parallax offset={-15} className="absolute top-12 right-12 pointer-events-none z-0">
        <div className="opacity-12">
          <svg width="35" height="35" viewBox="0 0 40 40">
            <defs>
              <linearGradient id="footerLeaf2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(88, 165, 118)" />
                <stop offset="100%" stopColor="rgb(52, 125, 78)" />
              </linearGradient>
            </defs>
            <ellipse cx="20" cy="20" rx="12" ry="16" fill="url(#footerLeaf2)" transform="rotate(25 20 20)" />
            <path d="M 14 10 Q 19 20 17 30" stroke="rgba(34, 75, 48, 0.3)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
      </Parallax>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16 lg:justify-between">
          
          {/* 1. Company Info Column (Left Side) */}
          <div className="lg:w-[320px] shrink-0">
            <Reveal delay={0.1} width="100%">
              <div className="space-y-5">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#163823]">
                    Eesti Metsamaakler
                  </h3>
                </div>

                <p className="text-[0.9375rem] font-normal leading-relaxed text-[rgb(88,78,68)]">
                  Unustage tüütud vahendajad ja helistajad. <span className="font-bold">Eesti Metsamaakler Group OÜ</span> professionaalne metsamaakleri teenus tagab teile alati parima hinna ning usaldusväärsed koostööpartnerid.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Side Columns Container */}
          <div className="lg:max-w-[700px] w-full lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              
              {/* 2. Contact Column (Now First) */}
              <Reveal delay={0.2} width="100%">
                <div className="space-y-5">
                  <h3 className="text-[1.0625rem] font-semibold text-[rgb(34,75,48)] mb-4">
                    Kontaktinfo
                  </h3>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="mailto:info@metsamaakler.ee"
                      className="flex items-center gap-3 group text-[0.9375rem] text-[rgb(88,78,68)] hover:text-[rgb(34,75,48)] transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#347D4E] shrink-0" aria-label="email">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>info@metsamaakler.ee</span>
                    </a>

                    <a
                      href="tel:+37253765888"
                      className="flex items-center gap-3 group text-[0.9375rem] text-[rgb(88,78,68)] hover:text-[rgb(34,75,48)] transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#347D4E] shrink-0" aria-label="telefon">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>+372 5376 5888</span>
                    </a>

                    <div className="flex items-center gap-3 text-[0.9375rem] text-[rgb(88,78,68)] group hover:text-[rgb(34,75,48)] transition-colors cursor-default">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#347D4E] shrink-0" aria-label="asukoht">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Tallinn, Eesti</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 3. Main Nav Column */}
              <Reveal delay={0.3} width="100%">
                <div className="space-y-5">
                  <h3 className="text-[1.0625rem] font-semibold text-[rgb(34,75,48)] mb-4">
                    Navigatsioon
                  </h3>
                  <nav className="flex flex-col space-y-3 lg:space-y-2">
                    <FooterLink href="/">Avaleht</FooterLink>
                    <FooterLink href="#meist">Ettevõttest</FooterLink>
                    <FooterLink href="#kontakt">Kontakt</FooterLink>
                  </nav>
                </div>
              </Reveal>

              {/* 4. Services Column */}
              <Reveal delay={0.4} width="100%">
                <div className="space-y-5">
                  <h3 className="text-[1.0625rem] font-semibold text-[rgb(34,75,48)] mb-4">
                    Teenused
                  </h3>
                  <nav className="flex flex-col space-y-3 lg:space-y-2">
                    <FooterLink href="/ostame-kasvavat-metsa/">Metsa müük</FooterLink>
                    <FooterLink href="/raieoiguse-muuk/">Raieõiguse müük</FooterLink>
                    <FooterLink href="/metsa-hindamine/">Metsa hindamine</FooterLink>
                    <FooterLink href="#kontakt">Konsultatsioon</FooterLink>
                  </nav>
                </div>
              </Reveal>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[rgba(52,125,78,0.1)]">
          <p className="text-[0.875rem] text-[rgb(88,78,68)]">
            © {currentYear} Metsamaakler. Kõik õigused kaitstud.
          </p>

          <div className="flex items-center gap-6">
            <FooterLink href="#privaatsus">Privaatsuspoliitika</FooterLink>
            <FooterLink href="#tingimused">Kasutustingimused</FooterLink>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: 'facebook', href: '#', label: 'Metsamaakler Facebookis' },
              { icon: 'instagram', href: '#', label: 'Metsamaakler Instagramis' },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center group overflow-hidden relative bg-gradient-to-br from-[rgba(52,125,78,0.08)] to-[rgba(52,125,78,0.12)] shadow-[0_2px_4px_rgba(52,125,78,0.08)] transition-transform duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(52,125,78,0.2)_0%,transparent_70%)]" />

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(52, 125, 78)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10"
                  aria-hidden="true"
                >
                  {social.icon === 'facebook' && (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  )}
                  {social.icon === 'instagram' && (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
