import React, { memo } from 'react';

export const StarIcon = memo(() => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgb(255, 145, 77)">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
));

export const EvaluationIcon = memo(() => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <title>Metsa müük - tasuta hindamine ja konsultatsioon</title>
    <path
      d="M12 2L12 8M12 8L9 5M12 8L15 5"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8C8 8 6 10 6 12C6 14 8 16 8 16"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M16 8C16 8 18 10 18 12C18 14 16 16 16 16"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M12 16L12 22M10 22L14 22"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" stroke="rgb(52, 125, 78)" strokeWidth="1.2" />
  </svg>
));

export const CertifiedIcon = memo(() => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <title>Metsa müük - kogenud ja sertifitseeritud eksperdid</title>
    <path
      d="M12 2L14.5 8L21 9L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9L9.5 8L12 2Z"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 10L13 12L15 13L13 14L12 16L11 14L9 13L11 12L12 10Z"
      fill="rgb(52, 125, 78)"
      opacity="0.3"
    />
  </svg>
));

export const BestPriceIcon = memo(() => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <title>Metsa müük - parim turuhind ja läbipaistvus</title>
    <path
      d="M3 12L6 9L6 6L9 3L12 6L15 3L18 6L18 9L21 12L18 15L18 18L15 21L12 18L9 21L6 18L6 15L3 12Z"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="rgb(52, 125, 78)" strokeWidth="1.2" />
    <path d="M12 10L12 14M10 12L14 12" stroke="rgb(52, 125, 78)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
));

export const ProtectedDataIcon = memo(() => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <title>Metsa müük - turvaline andmekaitse</title>
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="rgb(52, 125, 78)"
      strokeWidth="1.8"
      fill="rgba(52, 125, 78, 0.1)"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="rgb(52, 125, 78)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export const FastResponseIcon = memo(() => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <title>Metsa müük - kiire vastus päringule</title>
    <circle cx="12" cy="12" r="10" stroke="rgb(255, 145, 77)" strokeWidth="1.8" />
    <path
      d="M12 6v6l4 2"
      stroke="rgb(255, 145, 77)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export const InputErrorIcon = memo(() => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="rgb(220, 38, 38)" strokeWidth="2" />
    <path d="M12 8v4m0 4h.01" stroke="rgb(220, 38, 38)" strokeWidth="2" strokeLinecap="round" />
  </svg>
));
