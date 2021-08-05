import styled from 'styled-components';

export const PageWrapper = styled.section`
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 24px;
  margin: 24px 24px 24px 12px;

  h1 {
    font-size: 28px;
    font-weight: 400;
    color: #333;
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
