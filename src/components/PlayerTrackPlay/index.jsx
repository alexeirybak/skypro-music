import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { getTrackById } from '../../api';
import { TrackPlaySvg } from '../../utils/iconSVG/trackPlay';
import { TrackPlayLikeSvg } from '../../utils/iconSVG/trackPlayLike';
import { TrackPlayDislikeSvg } from '../../utils/iconSVG/trackPlayDislike';
import * as S from './styles';

export const PlayerTrackPlay = ({
  isLoading,
  trackId,
  currentTrack,
  setCurrentTrack,
}) => {
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
  console.log(currentTrack);

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayerContain>
        {isLoading ? (
          <S.TrackPlayerImage>
            <S.TrackPlayerBlock>
              <TrackPlaySvg />
            </S.TrackPlayerBlock>
          </S.TrackPlayerImage>
        ) : (
          <S.SkeletonIcon></S.SkeletonIcon>
        )}
        {isLoading ? (
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink>{currentTrack.name}</S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
        ) : (
          <S.SceletonAuthor></S.SceletonAuthor>
        )}
        {isLoading ? (
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink>{currentTrack.author}</S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        ) : (
          <S.SceletonAlbum></S.SceletonAlbum>
        )}
      </S.TrackPlayerContain>
      <S.TrackPlayLikesDisplay>
        <S.TrackPlayLike>
          <TrackPlayLikeSvg />
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <TrackPlayDislikeSvg />
        </S.TrackPlayDislike>
      </S.TrackPlayLikesDisplay>
      {isLoading ? (
        <ReactAudioPlayer
          src={currentTrack.track_file}
          autoPlay
          controls
          className='audio-player'
        />
      ) : null}
    </S.PlayerTrackPlay>
  );
};
