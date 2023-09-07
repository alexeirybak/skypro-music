import styled from 'styled-components';

export const TrackTitleImg = styled.svg`
  width: 51px;
  height: 51px;
  margin-right: 16px;
  background-color: var(--title-track-img);
  display: -webkit-box;
  display: flex;
  align-items: center;
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
