import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 200px;
  height: 100vh;
  background-color: #f5f5f5;
  font-size: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  .sidebarItem {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
