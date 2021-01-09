import React from 'react';
import { useTranslation } from 'react-i18next';

const styles = {
  mainDiv: 'sm:flex justify-center items-center px-20 sm:flex-shrink-0',
  wrapper: 'sm:flex sm:flex-col text-center align-middle border border-gray-300 bg-gray-200 w-full h-70 rounded-lg',
  thankyou: 'sm:flex justify-center mt-10',
  emoji: 'text-5xl px-4',
  h1: 'text-5xl text-gray-700',
  p: 'mt-6 text-gray-800',
};
const ThankYou = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.mainDiv}>
      <div className={styles.wrapper}>
        <div className={styles.thankyou}>
          <span className={styles.emoji} aria-label="check mark symbol">
            ✅
          </span>
          <br />
          <h1 className={styles.h1}>{t('thankYou.h1')}</h1>
        </div>
        <p className={styles.p}>{t('thankYou.p')}</p>
      </div>
    </div>
  );
};

export default ThankYou;