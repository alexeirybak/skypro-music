import styled, { css } from 'styled-components';

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

const PlayerButtonMixin = css`
  padding: 5px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
`;

export const PlayerBtnPrev = styled.div`
  ${PlayerButtonMixin};
  margin-right: 23px;
`;

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
  path {
    fill: var(--player-btn-prev-next);
  }
  &:hover path {
    fill: var(--player-btn-hover);
  }
  &:active path {
    fill: var(--player-btn-prev-next);
  }
`;

export const PlayerBtnPlay = styled.div`
  ${PlayerButtonMixin};
  margin-right: 23px;
`;

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  path {
    fill: var(--player-btn-prev-next);
  }
  &:hover path {
    fill: var(--player-btn-hover);
  }
  &:active path {
    fill: var(--player-btn-prev-next);
  }
`;

export const PlayerBtnNext = styled.div`
  ${PlayerButtonMixin};
  margin-right: 28px;
`;

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  path {
    fill: var(--player-btn-prev-next);
  }
  &:hover path {
    fill: var(--player-btn-hover);
  }
  &:active path {
    fill: var(--player-btn-prev-next);
  }
`;

export const PlayerBtnRepeat = styled.div`
  ${PlayerButtonMixin};
  margin-right: 24px;
`;

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: var(--play-list-title);
  path {
    fill: var(--player-btn-repeat-shuffle);
  }
  &:hover path {
    fill: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--main-text);
  }
`;

export const PlayerBtnShuffle = styled.div`
  ${PlayerButtonMixin};
`;

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: var(--play-list-title);
  path {
    fill: var(--player-btn-repeat-shuffle);
  }
  &:hover path {
    fill: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--main-text);
  }
`;
