import React from 'react';
import { HeaderWrapper } from './styles/HeaderWrapper';
import { FiPower } from 'react-icons/fi';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <span>SENAI Informática</span>
      </div>
      <FiPower className="logoutIcon" />
    </HeaderWrapper>
  );
}
