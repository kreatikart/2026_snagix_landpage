import React from 'react';
import {
  ScanText,
  Pipette,
  Pin,
  AppWindow,
  History,
  HardDriveDownload,
} from 'lucide-react';

const EXTRA_FEATURES = [
  {
    icon: <ScanText className="h-4 w-4 text-[#FF6347]" />,
    title: 'OCR Natif Hors-Ligne',
    shortcut: 'Touche O',
    description:
      'Copiez instantanément le texte d’une image ou d’une vidéo sans connexion internet (Windows Media OCR & Apple Vision).',
  },
  {
    icon: <Pipette className="h-4 w-4 text-[#FF6347]" />,
    title: 'Pipette Vraie Couleur & Loupe 8×',
    shortcut: 'Shift + C',
    description:
      'Masquez le voile d’opacité pour inspecter les vraies couleurs au pixel près et copier le code HEX en un clic.',
  },
  {
    icon: <Pin className="h-4 w-4 text-[#FF6347]" />,
    title: 'Épinglage Flottant HD',
    shortcut: 'Ctrl + P',
    description:
      'Gardez une capture épinglée au-dessus de vos fenêtres en qualité 100 % native, avec opacité réglable à la molette.',
  },
  {
    icon: <AppWindow className="h-4 w-4 text-[#FF6347]" />,
    title: 'Détection Magnétique de Fenêtres',
    shortcut: 'Shift + W',
    description:
      'Ciblez automatiquement les dimensions exactes de n’importe quelle fenêtre au simple survol de la souris.',
  },
  {
    icon: <History className="h-4 w-4 text-[#FF6347]" />,
    title: 'Rappel de la Dernière Zone',
    shortcut: 'Ctrl + Shift + R',
    description:
      'Recapturez exactement la même zone d’écran au pixel près en un raccourci ou depuis la barre supérieure.',
  },
  {
    icon: <HardDriveDownload className="h-4 w-4 text-[#FF6347]" />,
    title: 'Auto-Save & Historique Disque',
    shortcut: '100 % Local',
    description:
      'Enregistrement automatique sur le disque lors de la copie et historique visuel (Liste / Grille) synchronisé.',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6347]">
              Et bien plus encore
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Toutes les autres fonctionnalités incluses
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Raccourcis clavier à une main • 100 % personnalisables
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {EXTRA_FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="rounded-lg border border-slate-200/90 bg-slate-50/70 p-4 hover:border-orange-200 hover:bg-white transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-50 border border-orange-200/60">
                  {feat.icon}
                </div>
                <kbd className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-mono font-semibold text-slate-600">
                  {feat.shortcut}
                </kbd>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
