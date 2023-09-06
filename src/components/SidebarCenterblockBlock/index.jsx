import { PlayList } from '../PlayListBlock';
import { Filter } from '../FilterBlock';
import { Search } from '../SearchBlock';
import * as S from './styles';

export const SidebarCenterBlock = ({ isLoading, music, error }) => {
  return (
    <S.MainCenterBlock>
      <Search />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <Filter music={music} error={error} isLoading={isLoading}/>
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='13'
              viewBox='0 0 12 13'
              fill='none'
            >
              <circle cx='6' cy='6.75098' r='5.5' stroke='#4E4E4E' />
              <path d='M4 6.75098H6.5V3.25098' stroke='#4E4E4E' />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        {error ? (
          <><S.ErrorMessage>Не удалось загрузить плейлист, попробуйте позже: {error}</S.ErrorMessage><S.Img src='/img/404.gif' /></>
        ) : (
          isLoading && <PlayList isLoading={isLoading} music={music} />
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};
