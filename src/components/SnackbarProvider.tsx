'use client';

import React, { useState, createContext, useContext } from 'react';
import { ESnackbarVariant } from '@/const/enums';

type SnackbarInputType = {
  message: string;
  variant: string;
};

type SnackbarContextType = {
  showSnackbarMessage: (snackbarInput: SnackbarInputType) => void;
};

type SnackbarProviderProps = {
  children: React.ReactNode;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [variant, setVariant] = useState<string>(ESnackbarVariant.SUCCESS);

  const showSnackbarMessage = (snackbarInput: SnackbarInputType) => {
    setMessage(message);
    setVariant(variant);
    setShowSnackbar((prevState) => !prevState);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const snackbarValue: SnackbarContextType = {
    showSnackbarMessage,
  };

  return (
    <SnackbarContext.Provider value={snackbarValue}>
      {children}
      {showSnackbar && (
        <div className="toast toast-top toast-end">
          <div className={`alert ${variant}`}>
            <span>{message}</span>
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
