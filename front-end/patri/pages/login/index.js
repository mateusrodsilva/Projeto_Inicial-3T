import React from 'react';
import { FormWrapper } from '../../src/components/FormWrapper';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { Logo } from '../../src/img/Logo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  return (
    <FormWrapper>
      <Logo />
      <h1>Login</h1>
      <div className="formInputs">
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
      </div>
      <div className="loginLinks">
        <div>
          <span>Sua empresa ainda não é cadastra?</span>
          <NextLink href="/register" passHref>
            <a> Cadastre-se</a>
          </NextLink>
        </div>
        <Button colorType="done" onClick={() => router.push('/')}>
          Entrar
        </Button>
      </div>
    </FormWrapper>
  );
}
