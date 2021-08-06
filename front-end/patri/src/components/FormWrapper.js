import styled from 'styled-components';

export const FormWrapper = styled.div`
  min-width: 348px;
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

    &.modalTitle {
      margin-bottom: 48px;
    }
  }

  .formInputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 56px;

    &.modal {
      justify-content: flex-end;
    }

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
