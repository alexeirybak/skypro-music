import { useState, useEffect } from 'react';
import { getTrackById } from '../../api';
import { PlayerBtnPrevSvg } from '../../utils/iconSVG/playerBtnPrev';
import { PlayerBtnPlaySvg } from '../../utils/iconSVG/playerBtnPlay';
import { PlayerBtnPauseSvg } from '../../utils/iconSVG/playerBtnPause';
import { PlayerBtnNextSvg } from '../../utils/iconSVG/playerBtnNext';
import { PlayerBtnRepeatSvg } from '../../utils/iconSVG/playerBtnRepeat';
import { PlayerBtnShuffleSvg } from '../../utils/iconSVG/playerBtnShuffle';
import * as S from './styles';

export const PlayerControls = ({
  currentTrack,
  setCurrentTrack,
  trackId,
  isPlaying,
  setIsPlaying,
  currentTime,
  setCurrentTime,
  setDuration,
  audioRef,
}) => {

  const [isLoop, setIsLoop] = useState(false);
  
  useEffect(() => {
    async function fetchTrack() {
      try {
        const track = await getTrackById(trackId);
        setCurrentTrack(track);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTrack();
  }, [trackId]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack.track_file, audioRef]);

  const toggleLoop = () => {
    setIsLoop(!isLoop);
  };

  const notUsed = () => {
    alert('Еще не реализовано');
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <>
      <audio
        key={currentTrack.track_file}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop={isLoop}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={currentTrack.track_file} type='audio/mpeg' />
      </audio>
      <S.PlayerControls>
        <S.PlayerBtnPrev onClick={notUsed}>
          <PlayerBtnPrevSvg alt='Предыдущий трек' />
        </S.PlayerBtnPrev>
        <S.PlayerBtnPlay onClick={togglePlay}>
          {isPlaying ? (
            <PlayerBtnPauseSvg alt='Пауза' />
          ) : (
            <PlayerBtnPlaySvg alt='Играть' />
          )}
        </S.PlayerBtnPlay>
        <S.PlayerBtnNext onClick={notUsed}>
          <PlayerBtnNextSvg alt='Следующий трек' />
        </S.PlayerBtnNext>
        <S.PlayerBtnRepeat onClick={toggleLoop}>
          <PlayerBtnRepeatSvg isLoop={isLoop} alt='Повтор' />
        </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle onClick={notUsed}>
          <PlayerBtnShuffleSvg alt='Случайный порядок' />
        </S.PlayerBtnShuffle>
      </S.PlayerControls>
    </>
  );
};
