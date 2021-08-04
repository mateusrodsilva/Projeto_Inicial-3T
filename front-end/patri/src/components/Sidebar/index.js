import React from 'react';
import { SidebarWrapper } from './styles/SidebarWrapper';
import { RiDashboardLine } from 'react-icons/ri';
import { BiDoorOpen } from 'react-icons/bi';
import { FiBox } from 'react-icons/fi';
import NextLink from 'next/link';

export function Sidebar() {
  return (
    <SidebarWrapper>
      <div>
        <div className="sidebarItem">
          <NextLink href="/dashboard" passHref>
            <a>
              <RiDashboardLine />
              <span>Painel de controle</span>
            </a>
          </NextLink>
        </div>
        <div className="sidebarItem">
          <NextLink href="/rooms" passHref>
            <a>
              <BiDoorOpen />
              <span>Salas</span>
            </a>
          </NextLink>
        </div>
        <div className="sidebarItem">
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
