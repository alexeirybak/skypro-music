import styles from './filter.module.css';

export function Filter() {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <div className={`${styles.filter__button} ${styles._btn__text}`}>исполнителю</div>
      <div className={`${styles.filter__button} ${styles._btn__text}`}>году выпуска</div>
      <div className={`${styles.filter__button} ${styles._btn__text}`}>жанру</div>
    </div>
  );
}
