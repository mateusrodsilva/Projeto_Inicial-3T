import React from 'react';
import { FormWrapper } from '../../src/components/FormWrapper';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { Logo } from '../../src/img/Logo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  function handleRegister(e) {
    e.preventDefault();
    router.push('/login');
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
            <Input placeholder="Nome" />
            <Input placeholder="Razão social" />
            <Input placeholder="CNPJ" />
            <Input placeholder="Endereço" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
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
