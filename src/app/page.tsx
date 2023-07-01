'use client';

import Image from 'next/image';
import { useState } from 'react';
import { InputModal } from '@/components/InputModal';

export default function Home() {
  const [open, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <main>
      <div className="hero min-h-full bg-base-200 overflow-hidden py-10">
        <div className="hero-content text-center">
          <div className="max-w-md py-8 ">
            <h1 className="text-5xl font-bold">Welcome to Nihongo Kaizen</h1>
            <p className="py-6 text-lg ">
              Nihongo Kaizen is more than just an app; it&#39;s my personal
              passion project dedicated to helping you improve your Japanese
              language skills. Whether you&#39;re a beginner or an advanced
              learner, I&#39;ve poured my heart and soul into creating a
              platform that provides the tools and resources you need to excel
              in your language journey.
            </p>
            <div className="flex justify-center items-center pt-8 ">
              <button
                className="btn btn-primary w-full max-w-md"
                onClick={handleOnClick}
              >
                Add New Item
              </button>
              <InputModal open={open} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
