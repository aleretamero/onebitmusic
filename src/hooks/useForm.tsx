import { useState } from 'react';

const typesValidate = {
  name: {
    regex: /^.+$/,
    message: 'Preencha um nome',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  message: {
    regex: /^.+$/,
    message: 'Preencha uma mensagem',
  },
};

export const useForm = (type: keyof typeof typesValidate) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (typesValidate[type] && !typesValidate[type].regex.test(value)) {
      setError(typesValidate[type].message);
      setTimeout(() => {
        setError(null);
      }, 5000);
      return false;
    }
    setError(null);
    return true;
  };

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};
