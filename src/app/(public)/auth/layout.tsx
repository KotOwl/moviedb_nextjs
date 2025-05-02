import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AuthLayout metadata',
};

type Props = { children: React.ReactNode };

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

export default AuthLayout;