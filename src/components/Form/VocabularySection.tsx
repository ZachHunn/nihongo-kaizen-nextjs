import React from 'react';

export const VocabularySection = () => {
  return (
    <div>
      <label className="label">Word:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Meaning:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Reading:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Part Of Speech:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Example Sentence:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
    </div>
  );
};
