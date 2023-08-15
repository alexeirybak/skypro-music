import { PlayList } from '../PlayListBlock/PlayList';
import { Filter } from '../FilterBlock/Filter';
import { Search } from '../SearchBlock/Search';
import styles from './sidebarCenterblock.module.css';

export function SidebarCenterblock({ isLoading }) {
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={`${styles.playlist_title__col} ${styles.col01}`}>
            Трек
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col02}`}>
            ИСПОЛНИТЕЛЬ
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col03}`}>
            АЛЬБОМ
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col04}`}>
            <svg
              className={styles.playlist_title__svg}
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='13'
              viewBox='0 0 12 13'
              fill='none'
            >
              <circle cx='6' cy='6.75098' r='5.5' stroke='#4E4E4E' />
              <path d='M4 6.75098H6.5V3.25098' stroke='#4E4E4E' />
            </svg>
          </div>
        </div>
        <PlayList isLoading={isLoading} />
      </div>
    </div>
  );
}
