import React from 'react';
import { Metadata } from 'next';
import {Header} from "@/app/Header";
import {Footer} from "@/app/Footer";

export const metadata: Metadata = {
  title: 'MovieLayout metadata',
};

type Props = { children: React.ReactNode };

const MovieLayout = ({ children }: Props) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );

};

export default MovieLayout;