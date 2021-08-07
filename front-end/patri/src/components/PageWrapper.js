import styled from 'styled-components';

export const PageWrapper = styled.section`
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 16px;
  padding: 24px;
  margin: 24px 24px 24px 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 28px;
    font-weight: 400;
    color: #333;
  }

  .cards {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .tableInteraction {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    .tableButtons {
      display: flex;
      gap: 12px;
    }
  }
`;