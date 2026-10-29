import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface CalloutItem {
  num: string;
  text: string;
  top: string;
  left: string;
}

interface StoryBlock {
  stepNumber: string;
  title: string;
  shortcut: string;
  problem: string;
  solution: string;
  image: string;
  callouts: CalloutItem[];
}

const STORIES: StoryBlock[] = [
  {
    stepNumber: '01',
    title: 'Capturer un menu déroulant ou une infobulle',
    shortcut: 'Ctrl + Espace • Écran Libéré',
    problem: 'Le menu déroulant se referme dès que vous lancez une capture classique.',
    solution:
      'Défigez l’écran (Ctrl + Espace), ouvrez votre menu en direct, puis refigez l’instant exact.',
    image: './screenshots/01-passthrough-menu.png',
    callouts: [
      { num: '1', text: 'Écran défigé (cliquable)', top: '5.5%', left: '24.5%' },
      { num: '2', text: 'Menu & infobulle ouverts en direct', top: '43%', left: '32.5%' },
      { num: '3', text: 'Refigez en 1 clic (ou Ctrl+Espace)', top: '5.5%', left: '74%' },
    ],
  },
  {
    stepNumber: '02',
    title: 'Assembler plusieurs étapes en une seule image',
    shortcut: 'Touche E • Multi-Snap',
    problem: 'Envoyer 3 captures séparées ou perdre du temps à les coller côte-à-côte.',
    solution:
      'Appuyez sur E à chaque étape (#1, #2, #3), puis fusionnez-les Côte-à-côte ou Verticalement en un clic.',
    image: './screenshots/02-multisnap-workflow.png',
    callouts: [
      { num: '1', text: 'Capturez chaque étape avec E', top: '20%', left: '33.5%' },
      { num: '2', text: 'Aperçu des vues empilées (#1, #2, #3)', top: '84%', left: '26%' },
      { num: '3', text: 'Fusion Côte-à-côte en 1 clic', top: '84%', left: '51.5%' },
    ],
  },
  {
    stepNumber: '03',
    title: 'Corriger une annotation sans refaire la capture',
    shortcut: 'Touche V • Annotations rééditables',
    problem: 'Une flèche décalée ou un secret oublié oblige à recommencer toute la capture.',
    solution:
      'Chaque flèche, cadre, zone floutée et étape numérotée reste déplaçable, modifiable ou supprimable.',
    image: './screenshots/03-editable-annotations.png',
    callouts: [
      { num: '1', text: 'Étapes numérotées avec note éditable', top: '23%', left: '64.5%' },
      { num: '2', text: 'Masquage des données sensibles (B)', top: '39%', left: '24.5%' },
      { num: '3', text: 'Redimensionnable & supprimable (Suppr)', top: '45.5%', left: '67%' },
    ],
  },
];

export const WorkflowStory: React.FC = () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-14 sm:space-y-18">
        {STORIES.map((story) => (
          <div key={story.stepNumber} className="space-y-3.5">
            {/* Compact Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FF6347] text-xs font-extrabold text-white">
                  {story.stepNumber}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  {story.title}
                </h2>
              </div>
              <kbd className="rounded-md border border-orange-200 bg-orange-50 px-2.5 py-1 font-mono text-xs font-semibold text-[#FF6347]">
                {story.shortcut}
              </kbd>
            </div>

            {/* Direct Problem vs Solution Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2 rounded-lg border border-rose-200/80 bg-rose-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-700">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-700">Problème quotidien : </span>
                  <span>{story.problem}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 rounded-lg border border-emerald-200/90 bg-emerald-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-800">Résolu par Snagix : </span>
                  <span>{story.solution}</span>
                </div>
              </div>
            </div>

            {/* Annotated Screenshot */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md shadow-slate-900/5">
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-auto block"
                />
                {/* Visual Callout Badges on the Screenshot */}
                {story.callouts.map((c) => (
                  <div
                    key={c.num}
                    style={{ top: c.top, left: c.left }}
                    className="hidden sm:flex absolute -translate-x-1/2 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full bg-[#FF6347] text-xs font-extrabold text-white ring-4 ring-white shadow-lg pointer-events-none"
                  >
                    {c.num}
                  </div>
                ))}
              </div>

              {/* Concise 3-point legend bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-slate-100 bg-slate-50 px-4 py-2.5">
                {story.callouts.map((c) => (
                  <div key={c.num} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6347] text-[11px] font-bold text-white">
                      {c.num}
                    </span>
                    <span className="font-semibold">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
