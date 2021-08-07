import React, { useState, useEffect } from 'react';
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
  const [roomList, setRoomList] = useState([]);

  const [roomFloor, setRoomFloor] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomFootage, setRoomFootage] = useState('');

  async function getRoomsFromApi() {
    const res = await fetch('http://localhost:5000/api/salas')
      .then((res) => res.json())
      .catch((err) => console.log(err));

    const roomList = res.map((x) => ({
      id: x.idSala,
      floor: x.andar,
      name: x.nomeSala,
      footage: x.metragemSala,
    }));

    setRoomList(roomList);
  }

  async function handleCreateRoom(e) {
    e.preventDefault();

    const { status } = await fetch('http://localhost:5000/api/salas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        idInstituicao: 1,
        andar: roomFloor,
        nomeSala: roomName,
        metragemSala: roomFootage,
      }),
    }).catch((err) => console.error(err));

    if (status === 201) {
      getRoomsFromApi();
      setShowModal(false);
      cleanInputs();
    }
  }

  async function handleRemoveRoom(id) {
    const { status } = await fetch(`http://localhost:5000/api/salas/${id}`, {
      method: 'DELETE',
    }).catch((err) => console.error(err));

    if (status === 204) {
      getRoomsFromApi();
    }
  }

  useEffect(() => {
    getRoomsFromApi();
  }, []);

  function cleanInputs() {
    setRoomFloor('');
    setRoomName('');
    setRoomFootage('');
  }

  return (
    <PageWrapper>
      <h1>Salas</h1>
      <div className="tableInteraction">
        <Input
          icon={<AiOutlineSearch className="searchIcon" />}
          placeholder="Buscar"
        />
        <Button colorType="done" onClick={() => setShowModal(true)}>
          + Nova sala
        </Button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <FormWrapper>
            <h1 className="modalTitle">+ Nova sala</h1>
            <form onSubmit={(e) => handleCreateRoom(e)}>
              <div className="formInputs">
                <Input
                  placeholder="Andar"
                  value={roomFloor}
                  onChange={(e) => setRoomFloor(e.target.value)}
                />
                <Input
                  placeholder="Nome"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <Input
                  placeholder="Metragem"
                  value={roomFootage}
                  onChange={(e) => setRoomFootage(e.target.value)}
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
        data={roomList}
        role="1"
        idInstituicao={roomList.idInstituicao}
        handleRemove={handleRemoveRoom}
        updateTable={getRoomsFromApi}
      />
    </PageWrapper>
  );
}
