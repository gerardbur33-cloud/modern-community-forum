import Link from 'next/link';

const adminMetrics = [
  { label: 'Utilisateurs actifs', value: '18.4k' },
  { label: 'Sujets cette semaine', value: '1.2k' },
  { label: 'Signalements ouverts', value: '34' },
  { label: 'Taux de satisfaction', value: '96%' },
];

const moderationQueue = [
  'Signalement sur le sujet “Les meilleurs stacks pour side-projects”',
  'Réponse supprimée après validation de contenu inapproprié',
  'Nouvelle demande de modération sur “Guide de lancement”',
  'Mise à jour de la catégorie “Communauté”',
];

export default function AdminPage() {
  return (
    <main className="shell pb-20 pt-12">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Administration</p>
        <h1 className="mt-2 text-3xl font-black text-white">Tableau de bord modération</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="card p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
            <div className="mt-3 text-3xl font-black text-white">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black text-white">Files de modération</h2>
            <Link href="/forum" className="text-sm font-medium text-sky-300 hover:text-sky-200">Voir le forum</Link>
          </div>
          <div className="space-y-3">
            {moderationQueue.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-black text-white">Actions rapides</h2>
          <div className="mt-5 space-y-3">
            <button className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-sky-500">
              Épingler un sujet majeur
            </button>
            <button className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-sky-500">
              Fermer une discussion litigieuse
            </button>
            <button className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-sky-500">
              Modifier les règles de la communauté
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
