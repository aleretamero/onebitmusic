import styles from './styles.module.scss';

import { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';

import { useForm } from '@/hooks/useForm';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export const Form = () => {
  const [loading, setLoading] = useState(false);

  const name = useForm('name');
  const email = useForm('email');
  const message = useForm('message');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nameValidate = name.validate();
    const emailValidate = email.validate();
    const messageValidate = message.validate();

    if (nameValidate && emailValidate && messageValidate) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success('Email enviado com sucesso!');

        name.setValue('');
        email.setValue('');
        message.setValue('');
      }, 1500);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <Input
        label="Nome"
        type="text"
        name="name"
        value={name.value}
        error={name.error}
        onChange={name.onChange}
        onBlur={name.onBlur}
      />
      <Input
        label="Email"
        type="text"
        name="email"
        value={email.value}
        error={email.error}
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <Input
        label="Mensagem"
        type="text"
        name="message"
        value={message.value}
        error={message.error}
        onChange={message.onChange}
        onBlur={message.onBlur}
      />
      {loading ? (
        <Button disabled={true} color="red">
          Enviando...
        </Button>
      ) : (
        <Button type="submit" color="red">
          Enviar
        </Button>
      )}
    </form>
  );
};
