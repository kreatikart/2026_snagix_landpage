import React from 'react';
import { Download } from 'lucide-react';
import { SnagixReleaseState } from '../hooks/useSnagixRelease';

interface NavbarProps {
  release: SnagixReleaseState;
}

export const Navbar: React.FC<NavbarProps> = ({ release }) => {
  const primaryHref =
    release.detectedOS === 'macos' ? release.links.macDmg : release.links.winSetup;
  const primaryLabel =
    release.detectedOS === 'macos' ? 'Télécharger (.dmg)' : 'Télécharger (.exe)';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img src="./icon.png" alt="Snagix" className="h-8 w-8 rounded-lg shadow-2xs" />
          <span className="text-base font-bold tracking-tight text-slate-900">Snagix</span>
        </a>

        <a
          href={primaryHref}
          className="inline-flex items-center gap-1.5 rounded-md bg-[#FF6347] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-2xs hover:bg-[#e55339] transition-all"
        >
          <Download className="h-3.5 w-3.5" />
          <span>{primaryLabel}</span>
        </a>
      </div>
    </header>
  );
};
