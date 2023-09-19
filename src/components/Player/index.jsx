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
  const [volume, setVolume] = useState(0.5);

  const handleSeek = (newTime) => {
    setCurrentTime(newTime);
    if (audioRef && audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

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
          onSeek={handleSeek}
          isPlaying={isPlaying}
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
            volume={volume}
          />
          <VolumeBlock
            audioRef={audioRef}
            volume={volume}
            setVolume={setVolume}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
