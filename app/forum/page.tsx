import Link from 'next/link';
import { categories, topics } from '@/lib/data';

export default function ForumPage() {
  return (
    <main className="shell pb-20 pt-12">
      <section className="mb-10 flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Hubly</p>
          <h1 className="mt-2 text-3xl font-black text-white">Forum communautaire</h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            aria-label="Recherche"
            placeholder="Rechercher un sujet, un tag…"
            className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-500"
          />
          <Link href="/create" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Nouveau sujet
          </Link>
        </div>
      </section>

      <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div key={category.name} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg" style={{ backgroundColor: category.color + '20', color: category.color }}>
                {category.icon}
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{category.topics} sujets</span>
            </div>
            <div className="mt-4 text-lg font-bold text-white">{category.name}</div>
            <div className="mt-2 text-sm text-slate-300">{category.description}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/topic/${topic.id}`} className="card block p-5 transition hover:border-sky-500/50 hover:bg-slate-900/90">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {topic.pinned && <span className="badge">Épinglé</span>}
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{topic.category}</span>
                  {topic.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-white">{topic.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{topic.excerpt}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-400 lg:flex-col lg:items-end">
                <span>{topic.replies} réponses</span>
                <span>{topic.views} vues</span>
                <span>{topic.likes} likes</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-5 border-t border-slate-800 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 font-bold text-sky-200">
                  {topic.author.charAt(0).toUpperCase()}
                </div>
                <span>par {topic.author}</span>
              </div>
              <span>{topic.createdAt}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
