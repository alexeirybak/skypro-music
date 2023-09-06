import { durationFormatter } from './../../utils/durationFormatter';
// import { tracks } from '../../constants';
import * as S from './styles';
// import { getAllTracks } from '../../api';

export const PlayList = ({ isLoading, music }) => {

  const fullPlayList = music.map((item, i) => {
    const { name, author, album, duration_in_seconds } = item;
    const updatedAuthor = author === "-" ? "Неизвестный" : author;

    return (
      <S.PlaylistItem key={i}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleComponent>
              {isLoading ? (
                <S.TrackTitleImage
                  xmlns='http://www.w3.org/2000/svg'
                  width='51'
                  height='52'
                  viewBox='0 0 51 52'
                  fill='none'
                >
                  <rect y='0.750977' width='51' height='51' fill='#F6F4F4' />
                  <path
                    d='M23 32.751V18.7207L34 17.751V29.751'
                    stroke='#B1B1B1'
                  />
                  <ellipse
                    cx='19.5'
                    cy='32.751'
                    rx='3.5'
                    ry='2'
                    stroke='#B1B1B1'
                  />
                  <ellipse
                    cx='30.5'
                    cy='29.751'
                    rx='3.5'
                    ry='2'
                    stroke='#B1B1B1'
                  />
                </S.TrackTitleImage>
              ) : (
                <S.SkeletonIcon></S.SkeletonIcon>
              )}
            </S.TrackTitleComponent>
            <S.TrackTitleBlock>
              {isLoading ? (
                <S.TrackTitleLink>{name}</S.TrackTitleLink>
              ) : (
                <S.SkeletonTrackTitle></S.SkeletonTrackTitle>
              )}
            </S.TrackTitleBlock>
          </S.TrackTitle>

          <S.TrackAuthor>
            {isLoading ? (
              <S.TrackAuthorLink>{updatedAuthor}</S.TrackAuthorLink>
            ) : (
              <S.SkeletonTrackAuthor></S.SkeletonTrackAuthor>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <S.TrackAlbumLink>{album}</S.TrackAlbumLink>
            ) : (
              <S.SkeletonTrackAuthor></S.SkeletonTrackAuthor>
            )}
          </S.TrackAlbum>
          <S.TrackTimeComponent>
            <S.TrackTimeSvg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='14'
              viewBox='0 0 16 14'
              fill='none'
            >
              <path
                d='M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378'
                stroke='#B1B1B1'
              />
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {durationFormatter(duration_in_seconds)}
            </S.TrackTimeText>
          </S.TrackTimeComponent>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  });
  return <S.ContentPlayList>{fullPlayList}</S.ContentPlayList>;
};
