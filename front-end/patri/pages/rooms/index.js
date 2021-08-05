import React, { useState } from 'react';
import { Button } from '../../src/components/common/Button';
import { Input } from '../../src/components/common/Input';
import { PageWrapper } from '../../src/components/PageWrapper';
import { Table } from '../../src/components/Table';
import { AiOutlineSearch } from 'react-icons/ai';
import Modal from '../../src/components/common/Modal';

const roomsData = [
  {
    id: '1',
    andar: '2º',
    nome: 'Coworking',
    metragem: '65m²',
  },
  {
    id: '2',
    andar: '2º',
    nome: 'Dev',
    metragem: '65m²',
  },
];

const roomsColumns = ['#', 'Andar', 'Nome', 'Metragem'];

export default function Rooms() {
  const [showModal, setShowModal] = useState(false);

  return (
    <PageWrapper>
      <h1>Salas</h1>
      <div className="tableInteraction">
        <Input
          icon={<AiOutlineSearch className="searchIcon" />}
          placeholder="Buscar"
        />
        <Button colorType="done" onClick={() => setShowModal(true)}>+ Nova sala</Button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          Hello from the modal!
        </Modal>
      </div>
      <Table columns={roomsColumns} data={roomsData} role="1" />
    </PageWrapper>
  );
}
