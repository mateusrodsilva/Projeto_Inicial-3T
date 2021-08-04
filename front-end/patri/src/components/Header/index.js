import React from 'react';
import { HeaderWrapper } from './styles/HeaderWrapper';
import { FiPower } from 'react-icons/fi';
import NextLink from 'next/link';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <span>SENAI Informática</span>
      </div>
      <NextLink href="/login" passHref>
        <a>
          <FiPower className="logoutIcon" />
        </a>
      </NextLink>
    </HeaderWrapper>
  );
}
