import React from 'react';
import Card from '../src/components/Card';
import { PageWrapper } from '../src/components/PageWrapper';

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
