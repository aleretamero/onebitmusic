import { Button } from '../Button';
import { Title } from '../Title';
import styles from './styles.module.scss';

export const Contact = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.contact}>
        <Title style={{color: '#fefefe', textAlign: 'start'}}>Nos contate</Title>
        <address>
          <div>
            {/* icon */}
            <span>+55 99823-3232</span>
          </div>
          <div>
            {/* icon */}
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
