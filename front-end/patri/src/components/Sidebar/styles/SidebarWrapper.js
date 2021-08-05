import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  background-color: ${({ theme }) => theme.tertiary};
  font-size: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 12px 24px 24px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 24px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #333;
    text-decoration: none;
  }
`;
