import React from 'react';
import { MainWrapper } from './styles/MainWrapper';
import { Sidebar } from '../Sidebar';

export function Main() {
  return (
    <MainWrapper>
      <Sidebar />
      {/* <Sidebar></Sidebar>
      <Content></Content> */}
    </MainWrapper>
  );
}
