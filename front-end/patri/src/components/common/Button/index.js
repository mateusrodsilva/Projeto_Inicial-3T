import styled from 'styled-components';

const buttonTypes = {
  done: '#56E39F',
  cancel: '#ef6f6c',
  default: '#fff',
};

export const Button = styled.button`
  border: none;
  background-color: ${({ colorType }) => buttonTypes[colorType]};
  border-radius: 16px;
  color: #333;
  padding: 8px 18px;
  cursor: pointer;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;
