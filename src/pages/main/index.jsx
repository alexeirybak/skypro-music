import { useState, useEffect } from 'react';
import { NavTrackSidebar } from '../../components/NavTrackSidebarBlock/NavTrackSidebar';
import { Player } from '../../components/PlayerBlock/Player';
import { Footer } from '../../components/FooterBlock/Footer';
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
