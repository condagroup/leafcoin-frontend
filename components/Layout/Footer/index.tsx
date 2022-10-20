import { NeutralLogo } from 'components/Icons';
import { Logo } from 'components/Icons';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import footerGraphic from 'public/footerGraphic.svg';
import * as React from 'react';

const Widget = dynamic(() => import('./AnteWIdget'), {
  ssr: false,
});

// TODO add translations
const Footer = () => {
  return (
    // <footer className="relative mt-20 flex flex-col flex-wrap gap-12 bg-lp-gray-5 p-10 text-lp-white sm:p-20 lg:min-h-[26.25rem] xl:min-h-[30rem] xl:flex-row xl:justify-between xl:p-24">
    <footer className="relative mt-20 flex flex-col flex-wrap gap-12 bg-black p-10 text-lp-white sm:p-20 lg:min-h-[26.25rem] xl:min-h-[30rem] xl:flex-row xl:justify-between xl:p-24">
      <Widget />
    </footer>
  );
};
export default Footer;
