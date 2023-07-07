import styles from './styles.module.scss';

import { Title } from '../Title';
import { Form } from './Form';

import { IconEnvelope } from '../Icons/IconEnvelope';
import { IconPhone } from '../Icons/IconPhone';

export const Contact = () => {
  return (
    <div className={styles.container} id="contact">
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
        <Form />
      </section>
    </div>
  );
};
