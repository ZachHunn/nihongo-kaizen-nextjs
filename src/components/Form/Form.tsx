'use client';

import React from 'react';
import { ELanguageElement } from '@/const/enums';
import { KanjiSection } from '@/components/Form/KanjiSection';
import { VocabularySection } from '@/components/Form/VocabularySection';
import { ParticleSection } from '@/components/Form/ParticleSection';

const languageElements: string[] = Object.values(ELanguageElement);
export const Form = () => {
  const [selectedElement, setSelectedElement] = React.useState<string>(
    ELanguageElement.KANJI
  );
  const handleSelectedElement = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedElement(event.target.value);
  };

  const formSelection = () => {
    switch (selectedElement) {
      case ELanguageElement.KANJI:
        return <KanjiSection />;
      case ELanguageElement.PARTICLES:
        return <ParticleSection />;
      case ELanguageElement.VOCABULARY:
        return <VocabularySection />;
      default:
        break;
    }
  };
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
      <form className="form-control">{formSelection()}</form>
    </>
  );
};
