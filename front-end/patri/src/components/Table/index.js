import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash, FiCheck } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { TableWrapper } from './styles/TableWrapper';
import { useRouter } from 'next/router';

export function Table({ columns, data, role, updateTable, handleRemove }) {
  const router = useRouter();

  // console.log('data', data);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [floor, setFloor] = useState('');
  const [name, setName] = useState('');
  const [footage, setFootage] = useState('');

  function onEdit(rowItem) {
    setInEditMode({
      status: true,
      rowKey: rowItem.id,
    });
    // console.log(rowItem);
    setFloor(rowItem.floor);
    setName(rowItem.name);
    setFootage(rowItem.footage);
  }

  async function onSave({ id, newInfo }) {
    if (router.pathname === '/rooms') {
      const { status } = await fetch(`http://localhost:5000/api/salas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newInfo),
      }).catch((err) => console.error(err));

      if (status === 204) {
        updateTable();
        onCancel();
      }
    }
  }

  function onCancel() {
    setInEditMode({
      status: false,
      rowKey: null,
    });

    setFloor(null);
    setName(null);
    setFootage(null);
  }

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
              {inEditMode.status && inEditMode.rowKey === item.id ? (
                <input
                  className="table__input"
                  type="text"
                  defaultValue={row.value}
                  onChange={(e) => {
                    row.key === 'Andar' && setFloor(e.target.value);
                    row.key === 'Nome' && setName(e.target.value);
                    row.key === 'Metragem' && setFootage(e.target.value);
                    // row.key === 'Marca' && setFloor(e.target.value);
                    // row.key === 'Tipo' && setName(e.target.value);
                    // row.key === 'Nº de série' && setFootage(e.target.value);
                    // row.key === 'Descrição' && setFloor(e.target.value);
                    // row.key === 'Nº de patrimônio' && setName(e.target.value);
                    // row.key === 'Status' && setStatus(e.target.value);
                  }}
                />
              ) : (
                row.value
              )}
            </span>
          </td>
        ))}
        <td className="tableIcons">
          {inEditMode.status && inEditMode.rowKey === item.id ? (
            <>
              <FiCheck
                className="tableEditIcon"
                onClick={() => {
                  if (router.pathname === '/rooms') {
                    onSave({
                      id: item.id,
                      newInfo: {
                        idInstituicao: 1,
                        andar: floor,
                        nomeSala: name,
                        metragemSala: footage,
                      },
                    });
                  }

                  if (router.pathname === '/equipment') {
                    onSave({
                      id: item.id,
                      newInfo: {
                        idInstituicao: 1,
                      },
                    });
                  }
                }}
              />
              <AiOutlineClose
                className="tableDeleteIcon"
                onClick={() => onCancel()}
              />
            </>
          ) : (
            <>
              <FiEdit className="tableEditIcon" onClick={() => onEdit(item)} />
              <FiTrash
                className="tableDeleteIcon"
                onClick={() => handleRemove(item.id)}
              />
            </>
          )}
        </td>
      </tr>
    );
  });

  // console.log('mappedData', mappedData);

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
