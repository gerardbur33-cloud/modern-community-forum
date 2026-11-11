'use client';

import { useState } from 'react';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Technologie');

  return (
    <main className="shell pb-20 pt-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Nouveau sujet</p>
        <h1 className="mt-3 text-3xl font-black text-white">Créer une discussion</h1>

        <form className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Titre du sujet</label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ex. Quels outils utilisez-vous pour votre stack side-project ?"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Catégorie</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
            >
              <option>Technologie</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Communauté</option>
              <option>Productivité</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Contenu</label>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={10}
              placeholder="Décrivez votre besoin, votre idée ou votre question…"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
            />
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-slate-800 pt-5">
            <div className="text-sm text-slate-400">Les sujets sont vérifiés par la communauté.</div>
            <button type="submit" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Publier le sujet
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
