import { useState } from 'react';
import { Data } from '../../constants';
import * as S from './styles';

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
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterList>
        <S.FilterButton
          as={isAuthorMenuOpen && S.BtnTextActive}
          onClick={toggleAuthorMenu}
        >
          исполнителю
        </S.FilterButton>
        {isAuthorMenuOpen ? (
          <S.FilterCounter>{authorList.length}</S.FilterCounter>
        ) : (
          ''
        )}
        <S.FilterContent $isAuthorMenuOpen={isAuthorMenuOpen}>
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
          as={isYearMenuOpen && S.BtnTextActive}
          onClick={toggleYearMenu}
        >
          году выпуска
        </S.FilterButton>
        {isYearMenuOpen ? (
          <S.FilterCounter>{yearList.length}</S.FilterCounter>
        ) : (
          ''
        )}
        <S.FilterContentYear $isYearMenuOpen={isYearMenuOpen}>
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
          as={isGenreMenuOpen && S.BtnTextActive}
          onClick={toggleGenreMenu}
        >
          жанру
        </S.FilterButton>
        {isGenreMenuOpen ? (
          <S.FilterCounter>{genreList.length}</S.FilterCounter>
        ) : (
          ''
        )}
        <S.FilterContentGenre $isGenreMenuOpen={isGenreMenuOpen}>
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
    </S.CenterblockFilter>
  );
}
