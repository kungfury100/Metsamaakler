import React, { useState, useEffect, useRef } from 'react';
import { Magnetic } from './utils/Magnetic';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from './assets/9dcda72c598330dc8a0a3e16c64e3b3a5261fe30.png';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Avaleht', href: '/' },
    { 
      label: 'Teenused', 
      href: '#',
      children: [
        { label: 'Metsa müük', href: '/ostame-kasvavat-metsa/' },
        { label: 'Raieõiguse müük', href: '/raieoiguse-muuk/' },
        { label: 'Metsa hindamine', href: '/metsa-hindamine/' },
        { label: 'Konsultatsioon', href: '#kontakt' },
      ]
    },
    { label: 'Ettevõttest', href: '/ettevottest/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ];

  const competitorLinks = [
    { href: '/lemeks/', label: 'Lemeks' },
    { href: '/metsa-muuk-ou/', label: 'Metsa Müük OÜ' },
    { href: '/lignamets/', label: 'Lignamets' },
    { href: '/eesti-metsameister/', label: 'Eesti Metsameister' },
    { href: '/eesti-maavara/', label: 'Eesti Maavara' },
    { href: '/marrek-puit/', label: 'Marrek Puit' },
    { href: '/valga-puu/', label: 'Valga Puu' },
    { href: '/timber/', label: 'Timber' },
    { href: '/karo-mets/', label: 'Karo Mets' },
    { href: '/tehingukeskus/', label: 'Tehingukeskus' },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServiceDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServiceDropdownOpen(false);
    }, 150); // Small delay for better UX
  };

  const NavItem = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-[0.9375rem] font-medium text-[#163823] hover:text-[#347D4E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#347D4E] rounded-sm py-2 px-1 block lg:inline-block"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {label}
    </a>
  );

  return (
    <>
      <header
        className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-[#A8D0BC]/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            title="Metsamaakler - metsa müük"
            className="focus:outline-none focus:ring-2 focus:ring-[#347D4E] rounded-md relative z-[60] flex items-center"
          >
            <img 
              src={logoImage} 
              alt="metsa müük logo" 
              className="h-[72px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8" aria-label="Peamenüü">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <div 
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                      className="relative"
                    >
                      <button
                        className="flex items-center gap-1 text-[0.9375rem] font-medium text-[#163823] hover:text-[#347D4E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#347D4E] rounded-sm py-2 px-1 cursor-pointer"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 origin-top-left ${
                          isServiceDropdownOpen 
                            ? 'opacity-100 scale-100 translate-y-0 visible' 
                            : 'opacity-0 scale-95 -translate-y-2 invisible'
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-[#A8D0BC]/30 overflow-hidden p-2 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-[#163823] hover:bg-[#F0F7F4] hover:text-[#347D4E] rounded-lg transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Magnetic>
                      <NavItem href={item.href} label={item.label} />
                    </Magnetic>
                  )}
                </div>
              ))}
            </nav>
            
            <a
              href="#kontakt"
              className="px-5 py-2 rounded-lg bg-[#347D4E] text-white text-[0.9375rem] font-semibold transition-all duration-300 hover:bg-[#2d6e43] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Alusta siit
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-[#347D4E] rounded-md text-[#163823]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Ava menüü"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#A8D0BC]/20 shrink-0">
          <span className="relative z-[60] flex items-center">
            <img 
              src={logoImage} 
              alt="metsa müük logo" 
              className="h-[72px] w-auto object-contain"
            />
          </span>
          <button
            className="p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-[#347D4E] rounded-md text-[#163823]"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Sulge menüü"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                {item.children ? (
                  <div className="flex flex-col gap-3">
                    <span className="text-xl font-bold text-[#163823]">{item.label}</span>
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-[#A8D0BC]/20">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-medium text-[#163823]/80 hover:text-[#347D4E]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-[#163823] hover:text-[#347D4E]"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            <div className="h-px bg-[#A8D0BC]/20 my-2" />

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#163823]/50">Metsafirmad</span>
              {competitorLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#163823]/70 hover:text-[#347D4E]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-8 mb-8">
            <a
              href="#kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-8 py-4 rounded-xl bg-[#163823] text-white text-lg font-semibold shadow-lg active:scale-95 transition-transform"
            >
              Küsi pakkumist
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
