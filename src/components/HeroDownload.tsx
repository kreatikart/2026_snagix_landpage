import React from 'react';
import { Download, Package, Apple, Monitor } from 'lucide-react';
import { SnagixReleaseState } from '../hooks/useSnagixRelease';

interface HeroDownloadProps {
  release: SnagixReleaseState;
}

export const HeroDownload: React.FC<HeroDownloadProps> = ({ release }) => {
  const isMac = release.detectedOS === 'macos';

  return (
    <section className="bg-grid-pattern pt-10 pb-8 sm:pt-14 sm:pb-10 border-b border-slate-200/70">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
          Capturez ce que les autres outils{' '}
          <span className="text-[#FF6347]">vous font rater.</span>
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-600">
          Menus déroulants à la volée, empilement multi-captures en un clic et annotations rééditables.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-2.5">
          {!isMac ? (
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={release.links.winSetup}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF6347] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#e55339] transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Télécharger pour Windows (Setup .exe)</span>
              </a>
              <a
                href={release.links.winPortable}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
              >
                <Package className="h-4 w-4 text-[#FF6347]" />
                <span>Portable (.exe)</span>
              </a>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={release.links.macDmg}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF6347] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#e55339] transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Télécharger pour macOS (.dmg)</span>
              </a>
              <a
                href={release.links.macZip}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
              >
                <Package className="h-4 w-4 text-[#FF6347]" />
                <span>Archive (.zip)</span>
              </a>
            </div>
          )}

          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
            <span>Windows 10/11 &amp; macOS</span>
            <span>•</span>
            {!isMac ? (
              <a
                href={release.links.macDmg}
                className="inline-flex items-center gap-1 font-semibold text-[#FF6347] hover:underline"
              >
                <Apple className="h-3.5 w-3.5" />
                <span>Version macOS (.dmg)</span>
              </a>
            ) : (
              <a
                href={release.links.winSetup}
                className="inline-flex items-center gap-1 font-semibold text-[#FF6347] hover:underline"
              >
                <Monitor className="h-3.5 w-3.5" />
                <span>Version Windows (.exe)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
