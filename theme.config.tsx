import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <Image src="/isotipo.svg" alt="Agotao" width={100} height={100} />,
  project: {
    link: 'https://agotao.com/',
  },
  chat: {
    link: 'https://twitter.com/nestoredduardo',
    icon: '🐤 twitter',
  },
  docsRepositoryBase: 'https://github.com/nestoredduardo/agotao-docs',
  footer: {
    text: 'Agotao API',
  },
};

export default config;
