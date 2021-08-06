import React, { useState } from 'react';
import { Button } from '../../src/components/common/Button';
import { Input } from '../../src/components/common/Input';
import { PageWrapper } from '../../src/components/PageWrapper';
import { Table } from '../../src/components/Table';
import { AiOutlineSearch } from 'react-icons/ai';
import Modal from '../../src/components/common/Modal';
import { FormWrapper } from '../../src/components/FormWrapper';

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
  'Marca',
  'Tipo',
  'Nº de série',
  'Descrição',
  'Nº do patrimônio',
  'Status',
];

export default function Equipment() {
  const [showModal, setShowModal] = useState(false);
  const [equipmentDeveloper, setEquipmentDeveloper] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [equipmentSerialNumber, setEquipmentSerialNumber] = useState('');
  const [equipmentDescription, setEquipmentDescription] = useState('');
  const [equipmentPatrimonyNumber, setEquipmentPatrimonyNumber] = useState('');
  const [equipmentStatus, setEquipmentStatus] = useState('');

  function cleanInputs() {
    setEquipmentDeveloper('');
    setEquipmentType('');
    setEquipmentSerialNumber('');
    setEquipmentDescription('');
    setEquipmentPatrimonyNumber('');
    setEquipmentStatus('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(equipmentDeveloper);
    console.log(equipmentType);
    console.log(equipmentSerialNumber);
    console.log(equipmentDescription);
    console.log(equipmentPatrimonyNumber);
    console.log(equipmentStatus);
    setShowModal(false);
    cleanInputs();
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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="formInputs">
                <Input
                  placeholder="Marca"
                  value={equipmentDeveloper}
                  onChange={(e) => setEquipmentDeveloper(e.target.value)}
                />
                <Input
                  placeholder="Tipo"
                  value={equipmentType}
                  onChange={(e) => setEquipmentType(e.target.value)}
                />
                <Input
                  placeholder="Nº de série"
                  value={equipmentSerialNumber}
                  onChange={(e) => setEquipmentSerialNumber(e.target.value)}
                />
                <Input
                  placeholder="Descrição"
                  value={equipmentDescription}
                  onChange={(e) => setEquipmentDescription(e.target.value)}
                />
                <Input
                  placeholder="Nº de patrimônio"
                  value={equipmentPatrimonyNumber}
                  onChange={(e) => setEquipmentPatrimonyNumber(e.target.value)}
                />
                <Input
                  placeholder="Status"
                  value={equipmentStatus}
                  onChange={(e) => setEquipmentStatus(e.target.value)}
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
      <Table columns={roomsColumns} data={roomsData} role="1" />
    </PageWrapper>
  );
}
