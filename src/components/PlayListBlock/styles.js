import styled, { keyframes } from 'styled-components';

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackTitle = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`;

export const TrackTitleComponent = styled.div``

export const TrackTitleImage = styled.svg`
  width: 51px;
  height: 51px;
  margin-right: 16px;
  background-color: var(--title-track-img);
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  rect {
    fill: var(--track-title-svg-bg);
  }
  path {
    stroke: var(--track-title-svg);
  }
  ellipse {
    stroke: var(--track-title-svg);
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

export const SkeletonIcon = styled(TrackTitleImage)`
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const TrackTitleBlock = styled.div`
  width: 356px;
  height: 19px;
`;

export const SkeletonTrackTitle = styled(TrackTitleBlock)`
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const SkeletonTrackAuthor = styled(TrackTitleBlock)`
  width: 271px;
  height: 19px;
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--track-title-span);
    margin-left: 6px;
  }
`;

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  text-align: left;
`;

export const TrackAlbum = styled.div`
  width: 245px;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--play-list-title);
`;

export const TrackTimeComponent = styled.div``

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  path {
    stroke: var(--play-list-title);
  }
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: var(--play-list-title);
`;

export const ContentPlayList = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  overflow-y: auto;
`;