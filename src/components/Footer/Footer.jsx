import React from 'react';
import cn from 'classnames';

import Ptag from 'components/Ptag/Ptag';
import Tab from 'components/Tab/Tab';

import style from './Footer.module.css';

export default function Footer({ className }) {
  return (
    <div className={cn(className, style.footer)}>
      <Ptag size={'lgp'}>SlavnyiDanylo 2023</Ptag>
      <Tab
        href={'https://github.com/Daniel-Slavnyi'}
        target={'_blunk'}
        size={'mdt'}
      >
        GitHub
      </Tab>
      <Tab
        color={'red'}
        href={'https://www.linkedin.com/in/danylo-slavnyi/'}
        target={'_blunk'}
        size={'smt'}
      >
        LinkedIn
      </Tab>
    </div>
  );
}
