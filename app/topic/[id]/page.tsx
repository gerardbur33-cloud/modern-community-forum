import Link from 'next/link';
import { notFound } from 'next/navigation';
import { postsByTopic, topics } from '@/lib/data';

export function generateStaticParams() {
  return topics.map((topic) => ({ id: topic.id }));
}

export default function TopicPage({ params }: { params: { id: string } }) {
  const topic = topics.find((item) => item.id === params.id);

  if (!topic) {
    notFound();
  }

  const posts = postsByTopic[topic.id] ?? [];

  return (
    <main className="shell pb-20 pt-12">
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <Link href="/forum" className="text-sky-300 hover:text-sky-200">Forum</Link>
        <span>/</span>
        <span>{topic.category}</span>
      </div>

      <article className="card overflow-hidden">
        <div className="border-b border-slate-800 bg-slate-950/60 p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {topic.pinned && <span className="badge">Épinglé</span>}
            <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{topic.category}</span>
            {topic.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-black text-white sm:text-4xl">{topic.title}</h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>par {topic.author}</span>
            <span>·</span>
            <span>{topic.createdAt}</span>
            <span>·</span>
            <span>{topic.views} vues</span>
            <span>·</span>
            <span>{topic.replies} réponses</span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-base leading-7 text-slate-200">
            {topic.excerpt}
          </div>
        </div>
      </article>

      <section className="mt-10 space-y-5">
        {posts.map((post) => (
          <article key={post.id} className="card p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 font-bold text-sky-200">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-white">{post.author}</div>
                  <div className="text-xs text-slate-400">{post.createdAt}</div>
                </div>
              </div>
              <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">#{post.role}</span>
            </div>
            <div className="text-slate-200 leading-7">{post.content}</div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-black text-white">Ajouter une réponse</h2>
        <textarea
          rows={6}
          className="mt-5 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
          placeholder="Partagez votre idée, votre solution ou votre retour…"
        />
        <div className="mt-5 flex justify-end">
          <button className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Publier la réponse
          </button>
        </div>
      </section>
    </main>
  );
}
