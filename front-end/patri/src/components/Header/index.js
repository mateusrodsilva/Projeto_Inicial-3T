import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HeaderWrapper } from './styles/HeaderWrapper';
import { FiPower } from 'react-icons/fi';
import NextLink from 'next/link';
import Switch from 'react-switch';

export function Header({ toggleTheme }) {
  const { title, colors } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <div>
        <span>SENAI Informática</span>
      </div>
      <div className="headerIcons">
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#f5f5f5"
          onColor="#3B4454"
        />
        <NextLink href="/login" passHref>
          <a>
            <FiPower className="logoutIcon" />
          </a>
        </NextLink>
      </div>
    </HeaderWrapper>
  );
}
