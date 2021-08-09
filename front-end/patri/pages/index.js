import React, { useEffect, useState } from 'react';
import Card from '../src/components/Card';
import { PageWrapper } from '../src/components/PageWrapper';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

export default function Home({ idInstituicao }) {
  const [equipment, setEquipment] = useState([]);
  const [roomList, setRoomList] = useState([]);

  async function getRoomsFromApi() {
    const res = await fetch(
      `http://localhost:5000/api/salas/por-instituicao/${idInstituicao}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setRoomList(res);
  }

  async function getEquipmentFromApi() {
    const res = await fetch(
      `http://localhost:5000/api/equipamentos/por-instituicao/${idInstituicao}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    setEquipment(res);
  }

  useEffect(() => {
    getRoomsFromApi();
    getEquipmentFromApi();
  }, []);

  return (
    <PageWrapper>
      <h1>Painel de controle</h1>
      <div className="cards">
        <Card>
          <span>Salas</span>
          <span className="number">{roomList.length}</span>
        </Card>
        <Card>
          <span>Equipamentos</span>
          <span className="number">{equipment.length}</span>
        </Card>
      </div>
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

  const { role, instituicao } = jwt.decode(userToken);

  console.log(role, instituicao);

  return {
    props: {
      token: userToken,
      idInstituicao: instituicao,
    },
  };
}
