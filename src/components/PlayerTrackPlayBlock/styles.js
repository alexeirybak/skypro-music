import styled, { css, keyframes } from 'styled-components';

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
`;

export const TrackPlayerContain = styled.div`
  width: auto;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackPlayerImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: var(--title-track-img);
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  -ms-grid-row-span: 2;
  grid-column: 1;
  grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
  rect {
    fill: var(--track-title-svg-bg);
  }
  path {
    stroke: var(--play-list-title);
  }
  ellipse {
    stroke: var(--play-list-title);
  }
`;

const blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }`;

export const SkeletonIcon = styled.div`
  grid-area: image;
  width: 51px;
  height: 51px;
  margin-right: 12px;
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

const SceletonMixin = css`
  width: 59px;
  height: 15px;
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const SceletonAuthor = styled.div`
  ${SceletonMixin};
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const SceletonAlbum = styled(SceletonAuthor)`
  grid-area: album;
`;

export const TrackPlayAuthor = styled.div`
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  grid-row: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: var(--main-text);
  white-space: nowrap;
`;

export const TrackPlayLikesDisplay = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

const BtnIconMixin = `css
cursor: pointer;
&:hover svg {
    fill: transparent;
    stroke: #acacac;
    }
&:active svg {
    fill: #696969;
    stroke: #fff;
    }
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
  cursor: pointer;
  ${BtnIconMixin}
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
  margin-left: 28.5px;
`;

const PathPlayLikesMixin = css`
  width: 14px;
  fill: transparent;
  path {
    fill: var(--container);
    stroke: var(--player-btn-repeat-shuffle);
  }
  &:hover path {
    stroke: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--like-active-fill);
    stroke: var(--like-active-stroke);
  }
`;

export const TrackPlayLikeSvg = styled.svg`
  height: 12px;
  stroke: var(--play-list-title);
  ${PathPlayLikesMixin}
`;

export const TrackPlayDislikeSvg = styled.svg`
  height: 13px;
  stroke: #696969;
  ${PathPlayLikesMixin}
`;
