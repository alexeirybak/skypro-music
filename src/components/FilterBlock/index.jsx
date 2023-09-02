import { useState } from 'react';
import { Data } from '../../constants';
import * as S from './styles';

export const Filter = () => {
  const authorList = [...new Set(Data.map((item) => item.trackAuthorLink))];
  const yearList = [...new Set(Data.map((item) => item.year))];
  const genreList = [...new Set(Data.map((item) => item.genre))];

  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? '' : menuName));
  };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterList>
        <S.FilterButton
          as={openMenu === 'author' && S.BtnTextActive}
          onClick={() => toggleMenu('author')}
        >
          исполнителю
        </S.FilterButton>
        {openMenu === 'author' ? (
          <S.FilterCounter>{authorList.length}</S.FilterCounter>
        ) : (
          ''
        )}
        <S.FilterContent $isAuthorMenuOpen={openMenu === 'author'}>
          <S.FilterBlock>
            <S.FilterListMenu>
              {authorList.map((item) => (
                <S.FilterListMenuItem key={item}>
                  <S.FilterListMenuLink href='#'>{item}</S.FilterListMenuLink>
                </S.FilterListMenuItem>
              ))}
            </S.FilterListMenu>
          </S.FilterBlock>
        </S.FilterContent>
      </S.FilterList>
      <S.FilterList>
        <S.FilterButton
          as={openMenu === 'year' && S.BtnTextActive}
          onClick={() => toggleMenu('year')}
        >
          году выпуска
        </S.FilterButton>
        {openMenu === 'year' ? (
          <S.FilterCounter>{yearList.length}</S.FilterCounter>
        ) : (
          ''
        )}
        <S.FilterContentYear $isYearMenuOpen={openMenu === 'year'}>
          <S.FilterBlock>
            <S.FilterListMenuYear>
              {yearList.map((item) => (
                <S.FilterListMenuItem key={item}>
                  <S.FilterListMenuLink href='#'>{item}</S.FilterListMenuLink>
                </S.FilterListMenuItem>
              ))}
            </S.FilterListMenuYear>
          </S.FilterBlock>
        </S.FilterContentYear>
      </S.FilterList>
      <S.FilterList>
        <S.FilterButton
          as={openMenu === 'genre' && S.BtnTextActive}
          onClick={() => toggleMenu('genre')}
        >
          жанру
        </S.FilterButton>
        {openMenu === 'genre' ? (
          <S.FilterCounter>{genreList.length}</S.FilterCounter>
        ) : (
          ''
        )}
        <S.FilterContentGenre $isGenreMenuOpen={openMenu === 'genre'}>
          <S.FilterBlock>
            <S.FilterListMenu>
              {genreList.map((item) => (
                <S.FilterListMenuItem key={item}>
                  <S.FilterListMenuLink href='#'>{item}</S.FilterListMenuLink>
                </S.FilterListMenuItem>
              ))}
            </S.FilterListMenu>
          </S.FilterBlock>
        </S.FilterContentGenre>
      </S.FilterList>
    </S.CenterBlockFilter>
  );
};
