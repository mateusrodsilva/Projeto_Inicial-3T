import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash, FiCheck } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { TableWrapper } from './styles/TableWrapper';
import { useRouter } from 'next/router';

export function Table({
  columns,
  data,
  userToken,
  updateTable,
  handleRemove,
  idInstituicao,
  roomList,
  equipmentTypesList,
}) {
  const router = useRouter();

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [floor, setFloor] = useState('');
  const [name, setName] = useState('');
  const [footage, setFootage] = useState('');

  const [equipmentRoom, setEquipmentRoom] = useState('');
  const [equipmentDeveloper, setEquipmentDeveloper] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [equipmentSerialNumber, setEquipmentSerialNumber] = useState('');
  const [equipmentDescription, setEquipmentDescription] = useState('');
  const [equipmentPatrimonyNumber, setEquipmentPatrimonyNumber] = useState('');
  const [equipmentStatus, setEquipmentStatus] = useState('');

  function onEdit(rowItem) {
    setInEditMode({
      status: true,
      rowKey: rowItem.id,
    });

    setFloor(rowItem.floor);
    setName(rowItem.name);
    setFootage(rowItem.footage);

    setEquipmentRoom(rowItem.roomName);
    setEquipmentDeveloper(rowItem.developer);
    setEquipmentType(rowItem.type);
    setEquipmentSerialNumber(rowItem.serialNumber);
    setEquipmentDescription(rowItem.description);
    setEquipmentPatrimonyNumber(rowItem.patrimonyNumber);
    setEquipmentStatus(rowItem.status === 'Ativo' ? true : false);
  }

  async function onSave({ id, newInfo }) {
    if (router.pathname === '/rooms') {
      const { status } = await fetch(`http://localhost:5000/api/salas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + userToken,
        },
        body: JSON.stringify(newInfo),
      }).catch((err) => console.error(err));

      if (status === 204) {
        updateTable();
        onCancel();
      }
    }

    if (router.pathname === '/equipment') {
      console.log(newInfo);

      const { status } = await fetch(
        `http://localhost:5000/api/equipamentos/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + userToken,
          },
          body: JSON.stringify(newInfo),
        }
      ).catch((err) => console.error(err));

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
                row.key === 'Sala' ||
                row.key === 'Tipo' ||
                row.key === 'Status' ? (
                  <select
                    defaultValue={row.value}
                    onChange={(e) => {
                      row.key === 'Sala' && setEquipmentRoom(e.target.value);
                      row.key === 'Tipo' && setEquipmentType(e.target.value);
                      row.key === 'Status' &&
                        setEquipmentStatus(e.target.value);
                    }}
                  >
                    <option>{row.value}</option>
                    {(row.key === 'Sala' &&
                      roomList.map((r) => {
                        return (
                          <option key={r.id} value={r.id}>
                            {r.name}
                          </option>
                        );
                      })) ||
                      (row.key === 'Tipo' &&
                        equipmentTypesList.map((et) => {
                          return (
                            <option
                              key={et.idTipoEquipamento}
                              value={et.idTipoEquipamento}
                            >
                              {et.nomeTipoEquipamento}
                            </option>
                          );
                        })) ||
                      (row.key === 'Status' && (
                        <>
                          <option value={true}>Ativo</option>
                          <option value={false}>Inativo</option>
                        </>
                      ))}
                  </select>
                ) : (
                  <input
                    className="table__input"
                    type="text"
                    defaultValue={row.value}
                    onChange={(e) => {
                      row.key === 'Andar' && setFloor(e.target.value);
                      row.key === 'Nome' && setName(e.target.value);
                      row.key === 'Metragem' && setFootage(e.target.value);
                      row.key === 'Marca' &&
                        setEquipmentDeveloper(e.target.value);
                      row.key === 'Nº de série' &&
                        setEquipmentSerialNumber(e.target.value);
                      row.key === 'Descrição' &&
                        setEquipmentDescription(e.target.value);
                      row.key === 'Nº de patrimônio' &&
                        setEquipmentPatrimonyNumber(e.target.value);
                      row.key === 'Status' &&
                        setEquipmentStatus(
                          e.target.value === 'Ativo' ? true : false
                        );
                    }}
                  />
                )
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
                        idInstituicao: idInstituicao,
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
                        idInstituicao: idInstituicao,
                        // idSala: 1,
                        // marca: 'teste',
                        // IdTipoEquipamento: 1,
                        // numeroSerie: '123',
                        // descricao: 'descricao',
                        // numeroPatrimonio: '321',
                        // statusEquipamento: true,
                        idSala: equipmentRoom,
                        marca: equipmentDeveloper,
                        IdTipoEquipamento: equipmentType,
                        numeroSerie: equipmentSerialNumber,
                        descricao: equipmentDescription,
                        numeroPatrimonio: equipmentPatrimonyNumber,
                        statusEquipamento: equipmentStatus,
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{mappedData}</tbody>
      </table>
    </TableWrapper>
  );
}
