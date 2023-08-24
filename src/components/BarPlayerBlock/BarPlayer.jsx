import { PlayerControls } from '../PlayerControlBlock/PlayerControls';
import { PlayerTrackPlay } from '../PlayerTrackPlayBlock/PlayerTrackPlay';
import * as S from './styles';

export function BarPlayer({ isLoading }) {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading} />
    </S.BarPlayer>
  );
}
