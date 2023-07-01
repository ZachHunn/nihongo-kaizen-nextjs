import React from 'react';
import { ParticleType } from '.prisma/client';

export const ParticleSection = () => {
  return (
    <div>
      <label className="label">Particle Type:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Kana</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Meaning</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
      <label className="label">Explanation:</label>
      <input type="text" className="input input-bordered w-full max-w-xs" />
    </div>
  );
};
