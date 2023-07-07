import { useState } from 'react';
import styles from './styles.module.scss';

import { Button } from '@/components/Button';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label>
        <span>Nome</span>
        <input
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Mensagem</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <Button type="submit" color="red">
        Enviar
      </Button>
    </form>
  );
};
