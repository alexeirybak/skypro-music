import { NavTrackSidebar } from '../../components/NavTrackSidebar';
import { Player } from '../../components/Player';
import { Footer } from '../../components/Footer';
import * as S from './styles';

export const Main = ({ isLoading, music, error, isPlaying, setIsPlaying }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar isLoading={isLoading} music={music} error={error} />
        {isPlaying && <Player isLoading={isLoading} />}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
