import React, { useState, memo, useMemo } from 'react';
import { Magnetic } from '../utils/Magnetic';
import { ProtectedDataIcon, FastResponseIcon, InputErrorIcon } from './HeroIcons';

interface UltraInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

// Extract static styles to avoid recreation on every render
const inputBaseStyle: React.CSSProperties = {
  fontSize: '0.9375rem',
  fontWeight: 450,
  color: 'rgb(18, 12, 8)',
  letterSpacing: '-0.01em',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  width: '100%',
};

const textAreaStyle: React.CSSProperties = {
  ...inputBaseStyle,
  lineHeight: 1.6,
};

const UltraInput: React.FC<UltraInputProps> = memo(({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  multiline = false,
  rows = 3,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const showError = hasInteracted && required && value.length === 0;

  const handleBlur = () => {
    setIsFocused(false);
    setHasInteracted(true);
  };

  // Memoize dynamic styles
  const backgroundStyle = useMemo(() => ({
    background: isFocused
      ? 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(250, 254, 252) 100%)'
      : 'rgb(255, 255, 255)',
    border: showError
      ? '2px solid rgb(220, 38, 38)'
      : isFocused
      ? '2px solid rgb(52, 125, 78)'
      : '1.5px solid rgba(168, 208, 188, 0.5)',
    boxShadow: showError
      ? '0 0 0 3px rgba(220, 38, 38, 0.08), 0 1px 2px rgba(220, 38, 38, 0.1)'
      : isFocused
      ? `0 0 0 3px rgba(52, 125, 78, 0.08), 0 1px 3px rgba(34, 75, 48, 0.08), 0 4px 8px rgba(34, 75, 48, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)`
      : '0 1px 2px rgba(88, 78, 68, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
  }), [isFocused, showError]);

  return (
    <div className="relative w-full group">
      <div className="relative">
        {/* Input Background & Border Layer */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            ...backgroundStyle,
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          }}
        />

        {/* Input Element Layer */}
        <div className="relative flex items-start gap-3 px-4 py-3.5">
          <label htmlFor={name} className="sr-only">
            {label}
          </label>
          {multiline ? (
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              placeholder={placeholder}
              rows={rows}
              required={required}
              className="flex-1 bg-transparent border-none outline-none resize-none placeholder:text-gray-400"
              style={textAreaStyle}
            />
          ) : (
            <input
              id={name}
              type={type}
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              placeholder={placeholder}
              required={required}
              className="flex-1 bg-transparent border-none outline-none placeholder:text-gray-400"
              style={inputBaseStyle}
            />
          )}
        </div>
      </div>

      {/* Error Message Layer */}
      {showError && (
        <div
          className="mt-2 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200"
          style={{
            fontSize: '0.8125rem',
            color: 'rgb(220, 38, 38)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          <InputErrorIcon />
          <span>Kohustuslik väli</span>
        </div>
      )}
    </div>
  );
});

const focusTransition = "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";

// Memoized static styles for the form container
const formContainerStyle: React.CSSProperties = {
  background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(252, 254, 253) 100%)',
  border: '2px solid rgb(52, 125, 78)',
  boxShadow: `
    0 1px 2px rgba(34, 75, 48, 0.06),
    0 2px 8px rgba(34, 75, 48, 0.05),
    0 8px 16px rgba(34, 75, 48, 0.04),
    0 16px 32px rgba(34, 75, 48, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.8)
  `,
};

const formTitleStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: '2rem',
  fontWeight: 800,
  color: 'rgb(18, 45, 28)',
  marginBottom: '8px',
  letterSpacing: '-0.03em',
  lineHeight: 1.15,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
};

export const HeroContactForm: React.FC = memo(() => {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [formData, setFormData] = useState({
    nimi: '',
    telefon: '',
    email: '',
    paring: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const buttonStyle = useMemo(() => ({
    width: '100%',
    padding: '17px 24px',
    borderRadius: '10px',
    background: hoveredButton ? 'rgb(42, 105, 65)' : 'rgb(52, 125, 78)',
    color: 'rgb(255, 255, 255)',
    fontSize: '1.0625rem',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
    letterSpacing: '-0.015em',
    boxShadow: hoveredButton
      ? `0 4px 12px rgba(34, 75, 48, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)`
      : `0 2px 6px rgba(34, 75, 48, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12)`,
    transform: hoveredButton ? 'translateY(-1px)' : 'translateY(0)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }), [hoveredButton]);

  return (
    <div
      className="relative rounded-lg w-full max-w-md ml-auto"
      style={formContainerStyle}
    >
      <form onSubmit={handleSubmit} className="relative z-10 p-8 space-y-5">
        <div className="mb-6">
          <h3 style={formTitleStyle}>
            Tasuta konsultatsioon
          </h3>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'rgb(88, 78, 68)',
              lineHeight: 1.55,
              letterSpacing: '-0.012em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
            }}
          >
            Jätke meile oma andmed ning võtame teiega ühendust
          </p>
        </div>

        <UltraInput
          label="Nimi"
          type="text"
          name="nimi"
          value={formData.nimi}
          onChange={(value) => setFormData(prev => ({ ...prev, nimi: value }))}
          placeholder="Teie nimi"
          required
        />

        <UltraInput
          label="Telefon"
          type="tel"
          name="telefon"
          value={formData.telefon}
          onChange={(value) => setFormData(prev => ({ ...prev, telefon: value }))}
          placeholder="+372 5XXX XXXX"
          required
        />

        <UltraInput
          label="E-post"
          type="email"
          name="email"
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
          placeholder="teie@email.ee"
          required
        />

        <UltraInput
          label="Päringu sisu"
          type="text"
          name="paring"
          value={formData.paring}
          onChange={(value) => setFormData(prev => ({ ...prev, paring: value }))}
          placeholder="Kirjeldage oma vajadust..."
          multiline
          rows={3}
          required
        />

        <div className="pt-2">
          <button
            type="submit"
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            className="w-full transition-transform duration-300 ease-out active:scale-[0.99]"
            style={buttonStyle}
            aria-label="Saada tasuta päring"
          >
            Saada tasuta päring
          </button>
        </div>

        <div className="pt-3 grid grid-cols-2 gap-3">
          <div
            className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg transition-all duration-250"
            style={{
              border: '1.5px solid rgba(168, 208, 188, 0.45)',
              background: 'linear-gradient(135deg, rgba(250, 254, 252, 0.5) 0%, rgba(228, 242, 235, 0.3) 100%)',
              boxShadow: '0 1px 2px rgba(34, 75, 48, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            }}
          >
            <ProtectedDataIcon />
            <span
              style={{
                fontSize: '0.8125rem',
                color: 'rgb(28, 65, 42)',
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Kaitstud andmed
            </span>
          </div>

          <div
            className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg transition-all duration-250"
            style={{
              border: '1.5px solid rgba(255, 178, 115, 0.35)',
              background: 'linear-gradient(135deg, rgba(255, 250, 245, 0.5) 0%, rgba(255, 242, 230, 0.3) 100%)',
              boxShadow: '0 1px 2px rgba(255, 145, 77, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            }}
          >
            <FastResponseIcon />
            <span
              style={{
                fontSize: '0.8125rem',
                color: 'rgb(180, 95, 40)',
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Vastus 24h
            </span>
          </div>
        </div>
      </form>
    </div>
  );
});
