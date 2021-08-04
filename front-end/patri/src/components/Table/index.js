import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { TableWrapper } from './styles/TableWrapper';

export function Table({ columns, data, role }) {
  const mappedData = data.map((item, index) => {
    const items = [];
    let i = 0;

    for (const key in item) {
      items.push({
        key: columns[i],
        value: item[key],
      });

      i++;
    }

    return (
      <tr key={index}>
        {items.slice(1).map((row, index) => (
          <td key={index}>
            <span>
              {row.key === 'Descrição' &&
              inEditMode.status &&
              inEditMode.rowKey === item.id ? (
                <input
                  className="table__input"
                  type="text"
                  defaultValue={row.value}
                  onChange={(e) => setDesc(e.target.value)}
                />
              ) : (
                row.value
              )}
            </span>
          </td>
        ))}
        <td className="tableIcons">
          <FiEdit className="tableEditIcon" />
          <FiTrash className="tableDeleteIcon" />
        </td>
      </tr>
    );
  });

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {columns.slice(1).map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {(role === '1' || role === '3') && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>{mappedData}</tbody>
      </table>
    </TableWrapper>
  );
}
