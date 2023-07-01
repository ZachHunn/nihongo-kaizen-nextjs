'use client';

import React from 'react';
import Link from 'next/link';

type NavLinks = {
  href: string;
  linkText: string;
};

export const Navbar = () => {
  const links: NavLinks[] = [
    { href: '/Kana', linkText: 'Kana' },
    { href: '/Kanji', linkText: 'Kanji' },
    { href: '/Vocabulary', linkText: 'Vocabulary' },
    { href: '', linkText: 'Grammar' },
  ];

  return (
    <header className="w-full flex justify-center pt-8 pb-16">
      <div className="mr-auto pl-8 text-4xl">
        <Link href="/">日本語改善</Link>
      </div>
      <nav>
        {links.map((link) => {
          return link.linkText !== 'Grammar' ? (
            <Link
              key={link.linkText}
              href={link.href}
              className="mr-10 text-xl"
            >
              {link.linkText}
            </Link>
          ) : (
            <div key={link.linkText} className="dropdown hover:cursor-pointer">
              <label
                tabIndex={0}
                className="mr-10 text-xl hover:cursor-pointer"
              >
                {link.linkText}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    key="Particles"
                    href={'/Grammar/Particles'}
                    className="mr-10 text-xl"
                  >
                    Particles
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </nav>
    </header>
  );
};
