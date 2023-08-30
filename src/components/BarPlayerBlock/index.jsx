import { PlayerControls } from '../PlayerControlBlock';
import { PlayerTrackPlay } from '../PlayerTrackPlayBlock';
import * as S from './styles';

export const BarPlayer = ({ isLoading }) => {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading} />
    </S.BarPlayer>
  );
}
