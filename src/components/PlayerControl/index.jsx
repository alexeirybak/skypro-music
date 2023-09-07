import { PlayerBtnPrevSvg } from '../../utils/iconSVG/playerBtnPrev';
import { PlayerBtnPlaySvg } from '../../utils/iconSVG/playerBtnPlay';
import { PlayerBtnNextSvg } from '../../utils/iconSVG/playerBtnNext';
import { PlayerBtnRepeatSvg } from '../../utils/iconSVG/playerBtnRepeat';
import { PlayerBtnShuffleSvg } from '../../utils/iconSVG/playerBtnShuffle';
import * as S from './styles';

export const PlayerControls = () => {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <PlayerBtnPrevSvg />
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <PlayerBtnPlaySvg />
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <PlayerBtnNextSvg />
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <PlayerBtnRepeatSvg />
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <PlayerBtnShuffleSvg />
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
};
