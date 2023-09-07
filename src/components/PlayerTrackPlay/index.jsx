import { TrackPlaySvg } from '../../utils/iconSVG/trackPlay';
import { TrackPlayLikeSvg } from '../../utils/iconSVG/trackPlayLike';
import { TrackPlayDislikeSvg } from '../../utils/iconSVG/trackPlayDislike';
import * as S from './styles';

export const PlayerTrackPlay = ({
  isLoading,
  currentTrack,
  setCurrentTrack,
}) => {
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
            <S.TrackPlayAuthorLink href='http://'>
              {currentTrack.name}
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
        ) : (
          <S.SceletonAuthor></S.SceletonAuthor>
        )}
        {isLoading ? (
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href='http://'>{currentTrack.author}</S.TrackPlayAlbumLink>
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
    </S.PlayerTrackPlay>
  );
};
