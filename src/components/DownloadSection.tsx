import React from 'react';
import { Download, Monitor, Apple, Package, ExternalLink } from 'lucide-react';
import { SnagixReleaseState } from '../hooks/useSnagixRelease';

interface DownloadSectionProps {
  release: SnagixReleaseState;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ release }) => {
  return (
    <section id="telecharger" className="py-10 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Télécharger Snagix
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Windows */}
          <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-5">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <Monitor className="h-5 w-5 text-[#FF6347]" />
                <span className="font-bold text-slate-900">Windows 10 / 11 (x64)</span>
              </div>
              {release.detectedOS === 'windows' && (
                <span className="shrink-0 whitespace-nowrap rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                  Votre OS
                </span>
              )}
            </div>

            <div className="space-y-2">
              <a
                href={release.links.winSetup}
                className="flex w-full items-center justify-between rounded-md bg-[#FF6347] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#e55339] transition-all"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Installateur Windows</span>
                </span>
                <span className="font-mono text-xs opacity-90">Setup .exe</span>
              </a>

              <a
                href={release.links.winPortable}
                className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Package className="h-3.5 w-3.5 text-[#FF6347]" />
                  <span>Version Portable</span>
                </span>
                <span className="font-mono text-xs text-slate-500">Portable .exe</span>
              </a>
            </div>
          </div>

          {/* macOS */}
          <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-5">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <Apple className="h-5 w-5 text-[#FF6347]" />
                <span className="font-bold text-slate-900">macOS (Apple Silicon)</span>
              </div>
              {release.detectedOS === 'macos' && (
                <span className="shrink-0 whitespace-nowrap rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                  Votre OS
                </span>
              )}
            </div>

            <div className="space-y-2">
              <a
                href={release.links.macDmg}
                className="flex w-full items-center justify-between rounded-md bg-[#FF6347] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#e55339] transition-all"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Image Disque macOS</span>
                </span>
                <span className="font-mono text-xs opacity-90">.dmg</span>
              </a>

              <a
                href={release.links.macZip}
                className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Package className="h-3.5 w-3.5 text-[#FF6347]" />
                  <span>Archive Directe</span>
                </span>
                <span className="font-mono text-xs text-slate-500">.zip</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <a
            href={release.links.releasesPage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#FF6347] transition-colors"
          >
            <span>Voir les notes de version et toutes les archives sur GitHub Releases</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
