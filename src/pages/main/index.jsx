import { useState, useEffect } from 'react';
import { NavTrackSidebar } from '../../components/NavTrackSidebarBlock';
import { Player } from '../../components/PlayerBlock';
import { Footer } from '../../components/FooterBlock';
import * as S from './styles';

export const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);
  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar isLoading={isLoading} />
        <Player isLoading={isLoading} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
