import { BarPlayer } from '../BarPlayerBlock';
import { VolumeBlock } from '../VolumeBlockBlock';
import * as S from './styles';

export const Player = ({ isLoading }) => {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <BarPlayer isLoading={isLoading} />
          <VolumeBlock />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
