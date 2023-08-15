import { useState } from 'react';
import styles from './filter.module.css';
import { Data } from '../../utils/data';

export function Filter() {
  const authorList = [...new Set(Data.map((item) => item.trackAuthorLink))];
  const yearList = [...new Set(Data.map((item) => item.year))];
  const genreList = [...new Set(Data.map((item) => item.genre))];

  const [isAuthorMenuOpen, setIsAuthorMenuOpen] = useState(false);
  const [isYearMenuOpen, setIsYearMenuOpen] = useState(false);
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);

  const toggleAuthorMenu = () => {
    setIsAuthorMenuOpen(!isAuthorMenuOpen);
    setIsYearMenuOpen(false);
    setIsGenreMenuOpen(false);
  };

  const toggleYearMenu = () => {
    setIsYearMenuOpen(!isYearMenuOpen);
    setIsAuthorMenuOpen(false);
    setIsGenreMenuOpen(false);
  };

  const toggleGenreMenu = () => {
    setIsGenreMenuOpen(!isGenreMenuOpen);
    setIsAuthorMenuOpen(false);
    setIsYearMenuOpen(false);
  };

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <div className={styles.filter__list}>
        <div
          className={`${styles.filter__button} ${
            isAuthorMenuOpen ? styles._btn__text_active : styles._btn__text
          }`}
          onClick={toggleAuthorMenu}
        >
          исполнителю
        </div>
        {isAuthorMenuOpen ? (
          <div className={styles.filter__counter}>{authorList.length}</div>
        ) : (
          ''
        )}
        <div
          className={`${isAuthorMenuOpen ? styles.filter__content_show : ''} ${
            styles.filter__content
          }`}
        >
          <div className={styles.filter__block}>
            <ul className={styles.filter__list_menu}>
              {authorList.map((item) => (
                <li key={item}>
                  <a href='#'>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.filter__list}>
        <div
          className={`${styles.filter__button} ${
            isYearMenuOpen ? styles._btn__text_active : styles._btn__text
          }`}
          onClick={toggleYearMenu}
        >
          году выпуска
        </div>
        {isYearMenuOpen ? (
          <div className={styles.filter__counter}>{yearList.length}</div>
        ) : (
          ''
        )}

        <div
          className={`${
            isYearMenuOpen ? styles.filter__content_show_year : ''
          } ${styles.filter__content_year}`}
        >
          <div className={styles.filter__block}>
            <ul
              className={`${styles.filter__list_menu} ${styles.filter__list_menu_year}`}
            >
              {yearList.map((item) => (
                <li key={item}>
                  <a href='#'>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.filter__list}>
        <div
          className={`${styles.filter__button} ${
            isGenreMenuOpen ? styles._btn__text_active : styles._btn__text
          }`}
          onClick={toggleGenreMenu}
        >
          жанру
        </div>
        {isGenreMenuOpen ? (
          <div className={styles.filter__counter}>{genreList.length}</div>
        ) : (
          ''
        )}

        <div
          className={`${isGenreMenuOpen ? styles.filter__content_show : ''} ${
            styles.filter__content
          }`}
        >
          <div className={styles.filter__block}>
            <ul className={styles.filter__list_menu}>
              {genreList.map((item) => (
                <li key={item}>
                  <a href='#'>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
