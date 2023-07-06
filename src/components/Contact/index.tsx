import styles from './styles.module.scss';
import { Button } from '../Button';
import { Title } from '../Title';

import { IconEnvelope } from '../icons/IconEnvelope';
import { IconPhone } from '../icons/IconPhone';

export const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
      <aside className={styles.contact}>
        <Title style={{ color: '#fefefe', textAlign: 'start' }}>
          Nos contate
        </Title>
        <address>
          <div>
            <IconPhone />
            <span>+55 99823-3232</span>
          </div>
          <div>
            <IconEnvelope />
            <span>contato@onebitmusic.com</span>
          </div>
        </address>
      </aside>
      <section className={styles.containerForm}>
        <h3>Preencha com seus dados</h3>
        <form className={styles.form}>
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Mensagem</span>
            <textarea />
          </label>
          <Button type="submit" color="red">
            Enviar
          </Button>
        </form>
      </section>
    </div>
  );
};
