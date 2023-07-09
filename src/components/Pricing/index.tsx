import styles from './styles.module.scss';

import { Title } from '../Title';
import { Button } from '../Button';

import { plans } from './plansData';

export const Pricing = () => {
  return (
    <section className={`${styles.container} limitedSection`} id="pricing">
      <Title>Escolha o tipo de ingresso</Title>
      <div className={styles.cards}>
        {plans.map((plan, index) => (
          <div
            className={`${styles.card} ${styles[plan.type]}`}
            key={plan.plan}
            data-aos="fade-up"
            data-aos-duration={350 * (index + 1)}
          >
            <h3>{plan.plan}</h3>
            <strong>R${plan.price}</strong>
            <ul>
              {plan.benefits.map((benefit) => (
                <li key={plan + benefit}>{benefit}</li>
              ))}
            </ul>
            <Button color={plan.button}>Saber mais</Button>
          </div>
        ))}
      </div>
    </section>
  );
};
