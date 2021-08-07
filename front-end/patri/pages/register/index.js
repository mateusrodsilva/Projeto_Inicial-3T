import React, { useState } from 'react';
import { FormWrapper } from '../../src/components/FormWrapper';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { Logo } from '../../src/img/Logo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();

  const [institutionName, setinstitutionName] = useState('');
  const [institutionSocialReason, setinstitutionSocialReason] = useState('');
  const [institutionCnpj, setinstitutionCnpj] = useState('');
  const [institutionAddress, setinstitutionAddress] = useState('');
  const [institutionEmail, setinstitutionEmail] = useState('');
  const [institutionPassword, setinstitutionPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const { status } = await fetch('http://localhost:5000/api/instituicoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        nome: institutionName,
        razaoSocial: institutionSocialReason,
        cnpj: institutionCnpj,
        endereco: institutionAddress,
        email: institutionEmail,
        senha: institutionPassword,
      }),
    }).catch((err) => console.error(err));

    if (status === 201) {
      router.push('/login');
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
      }}
    >
      <FormWrapper>
        <Logo />
        <h1>Cadastre-se!</h1>
        <form onSubmit={(e) => handleRegister(e)}>
          <div className="formInputs">
            <Input
              placeholder="Nome"
              value={institutionName}
              onChange={(e) => setinstitutionName(e.target.value)}
            />
            <Input
              placeholder="Razão social"
              value={institutionSocialReason}
              onChange={(e) => setinstitutionSocialReason(e.target.value)}
            />
            <Input
              placeholder="CNPJ"
              value={institutionCnpj}
              onChange={(e) => setinstitutionCnpj(e.target.value)}
            />
            <Input
              placeholder="Endereço"
              value={institutionAddress}
              onChange={(e) => setinstitutionAddress(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              value={institutionEmail}
              onChange={(e) => setinstitutionEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              value={institutionPassword}
              onChange={(e) => setinstitutionPassword(e.target.value)}
            />
          </div>
          <div className="links">
            <div>
              <span>Sua empresa ainda não é cadastra?</span>
              <NextLink href="/login" passHref>
                <a> Faça o login!</a>
              </NextLink>
            </div>
            <Button colorType="done" type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
}
