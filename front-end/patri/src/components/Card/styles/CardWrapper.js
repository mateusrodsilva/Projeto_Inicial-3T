import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 256px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
  font-size: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  .number {
    font-size: 64px;
  }
`;
