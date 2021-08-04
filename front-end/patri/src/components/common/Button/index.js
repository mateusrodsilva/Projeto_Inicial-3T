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
`;
