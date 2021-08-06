import React from 'react';
import { FormWrapper } from '../../src/components/FormWrapper';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { Logo } from '../../src/img/Logo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  function handleSignIn(e) {
    e.preventDefault();
    router.push('/');
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
        <h1>Faça seu login!</h1>
        <form onSubmit={(e) => handleSignIn(e)}>
          <div className="formInputs">
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </div>
          <div className="links">
            <div>
              <span>Sua empresa ainda não é cadastra?</span>
              <NextLink href="/register" passHref>
                <a> Cadastre-se</a>
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
