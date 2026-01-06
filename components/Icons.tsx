import React from 'react';

export const OmIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
     {/* Abstract representation, normally needs complex path for true Om */}
     <text x="50%" y="65%" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" stroke="none">ॐ</text>
  </svg>
);

export const KalashIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" />
    <path d="M7 6L5 2" />
    <path d="M17 6L19 2" />
    <path d="M12 6V2" />
    <path d="M8 14H16" />
  </svg>
);