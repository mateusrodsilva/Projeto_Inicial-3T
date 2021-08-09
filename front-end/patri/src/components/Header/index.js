import React, { useState, useEffect } from 'react';
import { HeaderWrapper } from './styles/HeaderWrapper';
import { FiPower } from 'react-icons/fi';
import NextLink from 'next/link';
import nookies, { destroyCookie } from 'nookies';

export function Header({ toggleTheme }) {
  const activeTheme = nookies.get().theme;
  const [check, setCheck] = useState();

  useEffect(() => {
    if (activeTheme === 'dark') {
      setCheck(true);
    }
    if (activeTheme === 'light') {
      setCheck(false);
    }
  }, [activeTheme, check]);

  return (
    <HeaderWrapper>
      <div>
        <span>SENAI Informática</span>
      </div>
      <div className="headerIcons">
        {/* <Switch
          onChange={toggleTheme}
          checked={check ? true : false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#f5f5f5"
          onColor="#3B4454"
        /> */}
        <NextLink href="/login" passHref>
          <a
            onClick={() => {
              destroyCookie(null, 'token');
            }}
          >
            <FiPower className="logoutIcon" />
          </a>
        </NextLink>
      </div>
    </HeaderWrapper>
  );
}
