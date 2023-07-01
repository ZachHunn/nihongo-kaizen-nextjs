'use client';

import React from 'react';
import { KanjiSection } from '@/components/Form/KanjiSection';
import { VocabularySection } from '@/components/Form/VocabularySection';
import { ParticleSection } from '@/components/Form/ParticleSection';

const languageElements = ['Kanji', 'Vocabulary', 'Particle'];
export const Form = () => {
  const [selectedElement, setSelectedElement] = React.useState<string>('Kanji');
  const handleSelectedElement = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedElement(event.target.value);
  };
  // console.log(selectedElement);
  return (
    <>
      <label className="label pt-6">Choose Language Element:</label>
      <select
        className="select select-bordered w-full max-w-xs"
        value={selectedElement}
        onChange={handleSelectedElement}
      >
        {languageElements.map((languageElement) => {
          return (
            <option key={languageElement} value={languageElement}>
              {languageElement}
            </option>
          );
        })}
      </select>
      <form className=" form-control  ">
        {selectedElement === 'Kanji' && <KanjiSection />}
        {selectedElement === 'Vocabulary' && <VocabularySection />}
        {selectedElement === 'Particle' && <ParticleSection />}
      </form>
    </>
  );
};
