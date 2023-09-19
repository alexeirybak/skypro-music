import { useState, useRef } from 'react';
import { ProgressBar } from '../ProgressBar';
import { BarPlayer } from '../BarPlayer';
import { VolumeBlock } from '../VolumeBlock';
import * as S from './styles';

export const Player = ({
  isLoading,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
 
  return (
    <S.Bar>
      <S.BarContent>
        <ProgressBar
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          duration={duration}
          setDuration={setDuration}
        />
        <S.BarPlayerBlock>
          <BarPlayer
            isLoading={isLoading}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
            audioRef={audioRef}
          />
          <VolumeBlock currentTrack={currentTrack} audioRef={audioRef} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
