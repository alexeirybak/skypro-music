import { useState, useEffect } from 'react';
import { durationFormatter } from '../../utils/durationFormatter';
import * as S from './styles';

export const ProgressBar = ({
  currentTime,
  setCurrentTime,
  duration,
  setDuration,
}) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    if (duration > 0) {
      setProgressPercentage((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  const handleProgressBarClick = (event) => {
    const progressBar = event.currentTarget;
    const boundingRect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const width = boundingRect.width;
    const newTime = (offsetX / width) * duration;
    setCurrentTime(newTime);
  };

  return (
    <>
      <S.Timer>
        <S.TimerData>{durationFormatter(currentTime)}</S.TimerData>
        <S.TimerData> / </S.TimerData>
        <S.TimerData>{durationFormatter(duration)}</S.TimerData>
      </S.Timer>
      <S.ProgressBarWrapper onClick={(event) => handleProgressBarClick(event)}>
        <S.ProgressBar style={{ width: `${progressPercentage}%` }} />
      </S.ProgressBarWrapper>
    </>
  );
};
