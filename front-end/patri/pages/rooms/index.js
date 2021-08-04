import React from 'react';
import { Button } from '../../src/components/common/Button';
import { Input } from '../../src/components/common/Input';
import { PageWrapper } from '../../src/components/PageWrapper';
import { Table } from '../../src/components/Table';
import { AiOutlineSearch } from 'react-icons/ai';

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
  return (
    <PageWrapper>
      <h1>Salas</h1>
      <div className="tableInteraction">
        <Input
          icon={<AiOutlineSearch className="searchIcon" />}
          placeholder="Buscar"
        />
        <Button>+ Nova sala</Button>
      </div>
      <Table columns={roomsColumns} data={roomsData} role="1" />
    </PageWrapper>
  );
}
