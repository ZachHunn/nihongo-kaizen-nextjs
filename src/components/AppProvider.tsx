'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
};
