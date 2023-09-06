import { useState, useEffect } from 'react';
import { NavTrackSidebar } from '../../components/NavTrackSidebarBlock';
import { Player } from '../../components/PlayerBlock';
import { Footer } from '../../components/FooterBlock';
import * as S from './styles';

export const Main = ({ isLoading, music, error }) => {

  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar
          isLoading={isLoading}
          music={music}
          error={error}
        />
        <Player isLoading={isLoading} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
