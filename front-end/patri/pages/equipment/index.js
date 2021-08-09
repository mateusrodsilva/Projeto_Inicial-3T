import React, { useState, useEffect } from 'react';
import { Button } from '../../src/components/common/Button';
import { Input } from '../../src/components/common/Input';
import { PageWrapper } from '../../src/components/PageWrapper';
import { Table } from '../../src/components/Table';
import { AiOutlineSearch } from 'react-icons/ai';
import Modal from '../../src/components/common/Modal';
import { FormWrapper } from '../../src/components/FormWrapper';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

const roomsData = [
  {
    id: '1',
    marca: 'Acer',
    tipo: 'Eletrônico',
    numSerie: '123456',
    descricao: 'Laptop',
    numPatrimonio: '654321',
    status: 'Ativo',
  },
  {
    id: '1',
    marca: 'Samsung',
    tipo: 'Eletrônico',
    numSerie: '456789',
    descricao: 'Laptop',
    numPatrimonio: '987654',
    status: 'Inativo',
  },
];

const roomsColumns = [
  '#',
  'Sala',
  'Marca',
  'Tipo',
  'Nº de série',
  'Descrição',
  'Nº do patrimônio',
  'Status',
];

export default function Equipment({ idInstituicao, token }) {
  const [showModal, setShowModal] = useState(false);
  const [equipment, setEquipment] = useState([]);
  const [equipmentRoom, setEquipmentRoom] = useState('');
  const [equipmentDeveloper, setEquipmentDeveloper] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [equipmentSerialNumber, setEquipmentSerialNumber] = useState('');
  const [equipmentDescription, setEquipmentDescription] = useState('');
  const [equipmentPatrimonyNumber, setEquipmentPatrimonyNumber] = useState('');
  const [equipmentStatus, setEquipmentStatus] = useState('');

  async function getEquipmentFromApi() {
    const res = await fetch(
      `http://localhost:5000/api/equipamentos/por-insti/${idInstituicao}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    const equipment = await res.map((x) => ({
      id: x.idEquipamento,
      roomName: x.idSalaNavigation.nomeSala,
      developer: x.marca,
      type: x.idTipoEquipamentoNavigation.nomeTipoEquipamento,
      serialNumber: x.numeroSerie,
      description: x.descricao,
      patrimonyNumber: x.numeroPatrimonio,
      status: x.statusEquipamento ? 'Ativo' : 'Inativo',
    }));

    setEquipment(equipment);
  }

  async function handleCreateEquipment(e) {
    e.preventDefault();

    const { status } = await fetch('http://localhost:5000/api/equipamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        idInstituicao: idInstituicao,
        idSala: equipmentRoom,
        IdTipoEquipamento: equipmentType,
        marca: equipmentDeveloper,
        numeroSerie: equipmentSerialNumber,
        descricao: equipmentDescription,
        numeroPatrimonio: equipmentPatrimonyNumber,
        statusEquipamento: equipmentStatus,
      }),
    }).catch((err) => console.error(err));

    if (status === 201) {
      setShowModal(false);
      cleanInputs();
      getEquipmentFromApi();
    }
  }

  async function handleRemoveEquipment(id) {
    const { status } = await fetch(
      `http://localhost:5000/api/equipamentos/${id}`,
      {
        method: 'DELETE',
      }
    ).catch((err) => console.error(err));

    if (status === 204) {
      getEquipmentFromApi();
    }
  }

  useEffect(() => {
    getEquipmentFromApi();
  }, []);

  function cleanInputs() {
    setEquipmentRoom('');
    setEquipmentDeveloper('');
    setEquipmentType('');
    setEquipmentSerialNumber('');
    setEquipmentDescription('');
    setEquipmentPatrimonyNumber('');
    setEquipmentStatus('');
  }

  return (
    <PageWrapper>
      <h1>Equipamentos</h1>
      <div className="tableInteraction">
        <Input
          icon={<AiOutlineSearch className="searchIcon" />}
          placeholder="Buscar"
        />
        <div className="tableButtons">
          <Button colorType="default">Filtrar</Button>
          <Button colorType="done" onClick={() => setShowModal(true)}>
            + Novo equipamento
          </Button>
        </div>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <FormWrapper>
            <h1 className="modalTitle">+ Nova sala</h1>
            <form onSubmit={(e) => handleCreateEquipment(e)}>
              <div className="formInputs">
                <Input
                  placeholder="Sala"
                  value={equipmentRoom}
                  onChange={(e) => setEquipmentRoom(e.target.value)}
                  required
                />
                <Input
                  placeholder="Marca"
                  value={equipmentDeveloper}
                  onChange={(e) => setEquipmentDeveloper(e.target.value)}
                  required
                />
                <Input
                  placeholder="Tipo"
                  value={equipmentType}
                  onChange={(e) => setEquipmentType(e.target.value)}
                  required
                />
                <Input
                  placeholder="Nº de série"
                  value={equipmentSerialNumber}
                  onChange={(e) => setEquipmentSerialNumber(e.target.value)}
                  required
                />
                <Input
                  placeholder="Descrição"
                  value={equipmentDescription}
                  onChange={(e) => setEquipmentDescription(e.target.value)}
                  required
                />
                <Input
                  placeholder="Nº de patrimônio"
                  value={equipmentPatrimonyNumber}
                  onChange={(e) => setEquipmentPatrimonyNumber(e.target.value)}
                  required
                />
                <Input
                  placeholder="Status"
                  value={equipmentStatus}
                  onChange={(e) => setEquipmentStatus(e.target.value)}
                  // required
                />
              </div>
              <div className="links modal">
                <Button
                  colorType="cancel"
                  onClick={() => {
                    setShowModal(false);
                    cleanInputs();
                  }}
                >
                  Cancelar
                </Button>
                <Button colorType="done" type="submit">
                  Entrar
                </Button>
              </div>
            </form>
          </FormWrapper>
        </Modal>
      </div>
      <Table
        columns={roomsColumns}
        data={equipment}
        userToken={token}
        idInstituicao={idInstituicao}
        handleRemove={handleRemoveEquipment}
        updateTable={getEquipmentFromApi}
      />
    </PageWrapper>
  );
}

export async function getServerSideProps(context) {
  const userToken = await nookies.get(context).token;

  if (!userToken) {
    return {
      redirect: {
        destination: '/login',
        permanet: false,
      },
    };
  }

  const { instituicao } = jwt.decode(userToken);

  // const res = await fetch('http://localhost:5000/api/equipamentos')
  //   .then((res) => res.json())
  //   .catch((err) => console.error(err));

  // const equipment = res.map((x) => ({
  //   id: x.idEquipamento,
  //   marca: x.marca,
  //   tipo: x.idTipoEquipamentoNavigation.nomeTipoEquipamento,
  //   numSerie: x.numeroSerie,
  //   descricao: x.descricao,
  //   numPatrimonio: x.numeroPatrimonio,
  //   status: x.statusEquipamento ? 'Ativo' : 'Inativo',
  // }));

  return {
    props: {
      token: userToken,
      idInstituicao: instituicao,
    },
  };
}
