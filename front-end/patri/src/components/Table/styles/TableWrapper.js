import styled from 'styled-components';

export const TableWrapper = styled.div`
  max-width: 100%;
  background-color: #fff;
  border-radius: 16px;
  color: #333;
  margin-top: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 18px;

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0;
  }

  thead tr th {
    padding: 18px 8px;
  }

  tbody tr td {
    border-top: 1px solid #c4c4c4;
    padding: 18px 8px;
  }

  .tableIcons {
    display: flex;
    gap: 12px;
  }

  .tableDeleteIcon {
    font-size: 24px;
    color: #ef6f6c;
    border: 1px solid #ef6f6c;
    border-radius: 6px;
    padding: 4px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #ef6f6c;
      border-color: #fff;
    }
  }

  .tableEditIcon {
    font-size: 24px;
    color: #465775;
    border: 1px solid #465775;
    border-radius: 6px;
    padding: 4px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #465775;
      border-color: #fff;
    }
  }
`;
