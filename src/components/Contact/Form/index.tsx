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

  const fields = [
    { name: 'name', label: 'Nome', component: name },
    { name: 'email', label: 'Email', component: email },
    { name: 'message', label: 'Mensagem', component: message },
  ];

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
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          type="text"
          name={field.name}
          value={field.component.value}
          error={field.component.error}
          onChange={field.component.onChange}
          onBlur={field.component.onBlur}
        />
      ))}
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
