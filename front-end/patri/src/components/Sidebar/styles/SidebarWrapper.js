import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 250px;
  height: 100%;
  background-color: #f5f5f5;
  font-size: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 16px;
    color: #333;
    text-decoration: none;
  }
`;
