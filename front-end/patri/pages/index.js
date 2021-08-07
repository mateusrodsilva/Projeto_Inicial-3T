import React from 'react';
import Card from '../src/components/Card';
import { PageWrapper } from '../src/components/PageWrapper';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

export default function Home() {
  return (
    <PageWrapper>
      <h1>Painel de controle</h1>
      <div className="cards">
        <Card>
          <span>Salas</span>
          <span className="number">4</span>
        </Card>
        <Card>
          <span>Equipamentos</span>
          <span className="number">12</span>
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
      role: role,
      idInstituicao: instituicao,
    },
  };
}
