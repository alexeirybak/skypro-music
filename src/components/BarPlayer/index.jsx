import { PlayerControls } from '../PlayerControl';
import { PlayerTrackPlay } from '../PlayerTrackPlay';
import * as S from './styles';

export const BarPlayer = ({ isLoading, currentTrack, setCurrentTrack }) => {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <PlayerTrackPlay
        isLoading={isLoading}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />
    </S.BarPlayer>
  );
};
