import styles from './search.module.css';

export function Search() {
  return (
    <div className={styles.centerblock__search}>
      <div className={styles.glass}>
        <svg
          className={styles.icon__search}
          xmlns='http://www.w3.org/2000/svg'
          width='13'
          height='13'
          viewBox='0 0 13 13'
          fill='none'
        >
          <circle
            cx='6.48533'
            cy='6.48477'
            r='5.5'
            transform='rotate(-38.7469 6.48533 6.48477)'
            stroke='black'
          />
        </svg>
        <div className={styles.handle}>
          <svg
            className={styles.icon__search_handle}
            xmlns='http://www.w3.org/2000/svg'
            width='5'
            height='6'
            viewBox='0 0 5 6'
            fill='none'
          >
            <path
              d='M0.927734 0.774414L4.37008 5.06397'
              stroke='black'
              strokeLinecap='round'
            />
          </svg>
        </div>
      </div>
      <input
        className={styles.search__text}
        type='search'
        placeholder='Поиск'
        name='search'
      />
    </div>
  );
}
