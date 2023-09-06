import { PlayerControls } from '../PlayerControl';
import { PlayerTrackPlay } from '../PlayerTrackPlay';
import * as S from './styles';

export const BarPlayer = ({ isLoading }) => {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading} />
    </S.BarPlayer>
  );
}
