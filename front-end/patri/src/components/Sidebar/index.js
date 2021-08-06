import React from 'react';
import { SidebarWrapper } from './styles/SidebarWrapper';
import { RiDashboardLine } from 'react-icons/ri';
import { BiDoorOpen } from 'react-icons/bi';
import { FiBox } from 'react-icons/fi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function Sidebar() {
  const router = useRouter();
  const activePage = router.pathname;

  console.log(router.pathname);

  return (
    <SidebarWrapper>
      <div>
        <div className={`sidebarItem ${activePage === '/' ? 'active' : ''}`}>
          <NextLink href="/" passHref>
            <a>
              <RiDashboardLine />
              <span>Painel de controle</span>
            </a>
          </NextLink>
        </div>
        <div
          className={`sidebarItem ${activePage === '/rooms' ? 'active' : ''}`}
        >
          <NextLink href="/rooms" passHref>
            <a>
              <BiDoorOpen />
              <span>Salas</span>
            </a>
          </NextLink>
        </div>
        <div
          className={`sidebarItem ${
            activePage === '/equipment' ? 'active' : ''
          }`}
        >
          <NextLink href="/equipment" passHref>
            <a>
              <FiBox />
              <span>Equipamentos</span>
            </a>
          </NextLink>
        </div>
      </div>
    </SidebarWrapper>
  );
}
