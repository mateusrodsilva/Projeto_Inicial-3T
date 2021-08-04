import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: #465775;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-radius: 0 0 16px 16px;

  .logoutIcon {
    font-size: 28px;
    border-radius: 16px;
    background-color: #ef6f6c;
    padding: 6px;
    cursor: pointer;
  }
`;
