import styled from 'styled-components';

export const PageWrapper = styled.section`
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 24px;

  h1 {
    font-size: 28px;
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
