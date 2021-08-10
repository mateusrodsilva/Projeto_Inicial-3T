import React from 'react';
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #fff;
  padding: 8px 18px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
  }

  select {
    width: 100%;
    border: none;
    outline: none;
    color: #333;
  }
`;

export function Select({ value, onChange, children }) {
  return (
    <SelectWrapper>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </SelectWrapper>
  );
}
