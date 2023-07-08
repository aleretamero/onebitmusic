import { MutableRefObject, useRef, useState } from 'react';

const typesValidate = {
  name: {
    regex: /^.+$/,
    message: 'O campo nome não pode estar vazio',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  message: {
    regex: /^.+$/,
    message: 'O campo de mensagem não pode estar vazio',
  },
};

export const useForm = (type: keyof typeof typesValidate) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const refClearError = useRef<NodeJS.Timeout | undefined>();

  const clearError = () => {
    if (refClearError.current) clearTimeout(refClearError.current);

    refClearError.current = setTimeout(() => {
      setError(null);
    }, 10 * 500);
  };

  const validate = (value: string) => {
    if (value === '') {
      setError('O campo não pode estar vazio');

      clearError();
      return false;
    }

    if (typesValidate[type] && !typesValidate[type].regex.test(value)) {
      setError(typesValidate[type].message);

      clearError();
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
