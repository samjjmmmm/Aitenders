// src/components/Header_26.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Header_26.module.css';

export default function Header_26({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.Header_26_9248_28760}>
      <div className={styles.Container_9248_28761}>
        <div className={styles.Column_9248_28762}>
          <div className={styles.Content_9248_28763}>
            <span className={styles.MediumLengthHeroHeadlineGoesHere_9248_28764}>
              {t(`${t_prefix}.title`)}
            </span>
            <span className={styles.LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverraOrnareErosDolorInterdumNullaUtCommodoDiamLiberoVitaeErat_9248_28765}>
              {t(`${t_prefix}.subtitle`)}
            </span>
          </div>

          {/* UPDATED: Buttons are now translated */}
          <div className={styles.Actions_9248_28766}>
            <div className={styles.Button_9248_28767}>
              <span className={styles.Button_4179_8873}>{t(`${t_prefix}.cta1`)}</span>
            </div>
            <div className={styles.Button_9248_28768}>
              <span className={styles.Button_4179_8893}>{t(`${t_prefix}.cta2`)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}