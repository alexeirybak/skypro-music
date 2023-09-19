import { PlayerControls } from '../PlayerControl';
import { PlayerTrackPlay } from '../PlayerTrackPlay';
import * as S from './styles';

export const BarPlayer = ({
  isLoading,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  currentTime,
  setCurrentTime,
  duration,
  setDuration,
  audioRef
}) => {
  return (
    <S.BarPlayer>
      <PlayerControls
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
      <PlayerTrackPlay
        isLoading={isLoading}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />
    </S.BarPlayer>
  );
};
