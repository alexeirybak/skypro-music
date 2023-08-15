import { Data } from '../../utils/data';
import styles from './playList.module.css';

export function PlayList({ isLoading }) {
  const fullPlayList = Data.map((item, i) => {
    const { trackTitleLink, trackAuthorLink, trackAlbumLink, trackTimeText } =
      item;
    return (
      <div key={i} className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div>
              {isLoading ? (
                <svg
                  className={styles.track__title_image}
                  xmlns='http://www.w3.org/2000/svg'
                  width='51'
                  height='52'
                  viewBox='0 0 51 52'
                  fill='none'
                >
                  <rect y='0.750977' width='51' height='51' fill='#F6F4F4' />
                  <path
                    d='M23 32.751V18.7207L34 17.751V29.751'
                    stroke='#B1B1B1'
                  />
                  <ellipse
                    cx='19.5'
                    cy='32.751'
                    rx='3.5'
                    ry='2'
                    stroke='#B1B1B1'
                  />
                  <ellipse
                    cx='30.5'
                    cy='29.751'
                    rx='3.5'
                    ry='2'
                    stroke='#B1B1B1'
                  />
                </svg>
              ) : (
                <div className={styles.skeleton_icon}></div>
              )}
            </div>

            <div className={styles.track__title_block}>
            {isLoading ? (
              <a className={styles.track__title_link} href='http://'>
                {trackTitleLink.title}
                <span className={styles.track__title_span}>
                  {trackTitleLink?.remark}
                </span>
              </a>
              ) : (
                <div className={styles.skeleton__track_title}></div>
              )}
            </div>
          </div>

          <div className={styles.track__author}>
          {isLoading ? (
            <a className={styles.track__author_link} href='http://'>
              {trackAuthorLink}
            </a>
            ) : (
              <div className={styles.skeleton__track_author}></div>
            )}
          </div>
          <div className={styles.track__album}>
          {isLoading ? (
            <a className={styles.track__album_link} href='http://'>
              {trackAlbumLink}
            </a>
            ) : (
              <div className={styles.skeleton__track_author}></div>
            )}
          </div>
          <div>
            <svg
              className={styles.track__time_svg}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='14'
              viewBox='0 0 16 14'
              fill='none'
            >
              <path
                d='M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378'
                stroke='#B1B1B1'
              />
            </svg>
            <span className={styles.track__time_text}>{trackTimeText}</span>
          </div>
        </div>
      </div>
    );
  });
  return <div className={styles.content__playlist}>{fullPlayList}</div>;
}
