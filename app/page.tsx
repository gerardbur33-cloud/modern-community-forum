import Link from 'next/link';
import { categories, featuredTopics, stats, trendingTags } from '@/lib/data';
import { HublyLogo } from '@/components/hubly-logo';

export default function HomePage() {
  return (
    <main className="shell pb-20 pt-12 sm:pt-16">
      <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Nouveau : Hubly est en ligne
          </div>

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Le forum où les idées prennent leur envol.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Découvrez des discussions vivantes, échangez avec des passionnés et construisez une communauté forte autour de vos centres d’intérêt.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/forum" className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Explorer le forum
            </Link>
            <Link href="/create" className="rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
              Créer un sujet
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-4">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card overflow-hidden border-slate-700 bg-slate-900/80 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HublyLogo className="h-12 w-12" />
              <div>
                <div className="text-lg font-bold text-white">Hubly</div>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Live community</div>
              </div>
            </div>
            <span className="badge">En ligne</span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Forum aujourd’hui</span>
              <span>12:40</span>
            </div>
            <div className="mt-4 space-y-4">
              {featuredTopics.slice(0, 3).map((topic) => (
                <div key={topic.id} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-[0.18em] text-sky-300">{topic.category}</span>
                    <span className="text-xs text-slate-400">{topic.replies} réponses</span>
                  </div>
                  <div className="mt-2 font-semibold text-white">{topic.title}</div>
                  <div className="mt-2 text-xs text-slate-400">par {topic.author} · {topic.createdAt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Catégories</p>
            <h2 className="mt-2 text-3xl font-black text-white">Explore les espaces de discussion</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link href="/forum" key={category.name} className="card group p-5 transition hover:-translate-y-1 hover:border-sky-500/60">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: category.color + '20', color: category.color }}>
                  {category.icon}
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{category.topics} sujets</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="card p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Trending</p>
              <h2 className="mt-2 text-2xl font-black text-white">Sujets populaires</h2>
            </div>
            <Link href="/forum" className="text-sm font-medium text-sky-300 hover:text-sky-200">Voir tout</Link>
          </div>

          <div className="space-y-4">
            {featuredTopics.map((topic) => (
              <Link href={`/topic/${topic.id}`} key={topic.id} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-sky-500/50 hover:bg-slate-950">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {topic.pinned && <span className="badge">Épinglé</span>}
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{topic.category}</span>
                  </div>
                  <span className="text-xs text-slate-400">{topic.views} vues</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{topic.excerpt}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span>par {topic.author}</span>
                    <span>·</span>
                    <span>{topic.createdAt}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{topic.replies} réponses</span>
                    <span>♥ {topic.likes}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Tags</p>
            <h3 className="mt-3 text-xl font-black text-white">Sujets du moment</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Règles</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Restez respectueux et constructif.</li>
              <li>• Partagez des sujets utiles et clairs.</li>
              <li>• Utilisez les catégories appropriées.</li>
              <li>• Les modérateurs peuvent ajuster les contenus.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
