import React from 'react';

export const KanjiSection = () => {
  return (
    <section>
      <label className="label">Kanji:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">On&#39;yomi Readings:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Kun&#39;yomi Reading:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Meanings:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Strokes:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Examples:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
    </section>
  );
};
