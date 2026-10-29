import React from 'react';

interface FooterProps {
  version: string;
}

export const Footer: React.FC<FooterProps> = ({ version }) => {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <img src="./icon.png" alt="Snagix" className="h-5 w-5 rounded" />
          <span className="font-bold text-slate-800">Snagix</span>
          <span>v{version}</span>
          <span>•</span>
          <span>Windows 10/11 &amp; macOS</span>
        </div>
        <div>
          Copyright © {new Date().getFullYear()} Kenji Davong / KreatikArt. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
