import React, { useState } from 'react';
import { FormWrapper } from '../../src/components/FormWrapper';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { Logo } from '../../src/img/Logo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import nookies from 'nookies';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: password,
      }),
    })
      .then(async (res) => {
        const data = await res.json();

        if (res.status === 200) {
          nookies.set(null, 'token', data.token, {
            maxAge: 86400 * 7,
            path: '/',
          });

          router.push('/');
        }
      })
      .catch((err) => console.error(err));
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
            <Input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
