import React from 'react';
import { Button } from '../../src/components/common/Button';
import { Input } from '../../src/components/common/Input';
import { PageWrapper } from '../../src/components/PageWrapper';
import { Table } from '../../src/components/Table';
import { AiOutlineSearch } from 'react-icons/ai';

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
          <Button colorType="done">+ Novo equipamento</Button>
        </div>
      </div>
      <Table columns={roomsColumns} data={roomsData} role="1" />
    </PageWrapper>
  );
}
