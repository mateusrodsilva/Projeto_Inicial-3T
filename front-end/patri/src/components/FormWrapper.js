import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #465775;
  border-radius: 16px;
  padding: 24px;
  margin-top: auto;
  margin: auto;

  svg {
    margin-bottom: 48px;
    align-self: center;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 12px;
  }

  .formInputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .loginLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 56px;

    > div {
      width: 200px;
      font-size: 12px;
      color: #fff;

      a {
        text-decoration: none;
        color: #e7e8b3;
      }
    }
  }
`;
