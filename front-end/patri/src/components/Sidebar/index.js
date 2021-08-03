import React from 'react';
import { SidebarWrapper } from './styles/SidebarWrapper';
import { RiDashboardLine } from 'react-icons/ri';
import { BiDoorOpen } from 'react-icons/bi';
import { FiBox } from 'react-icons/fi';

export function Sidebar() {
  return (
    <SidebarWrapper>
      <div>
        <div className="sidebarItem">
          <RiDashboardLine />
          <span>Dashboard</span>
        </div>
        <div className="sidebarItem">
          <BiDoorOpen />
          <span>Salas</span>
        </div>
        <div className="sidebarItem">
          <FiBox />
          <span>Equipamentos</span>
        </div>
      </div>
    </SidebarWrapper>
  );
}
