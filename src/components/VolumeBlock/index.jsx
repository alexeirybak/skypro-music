import * as S from './styles'

export const VolumeBlock = () => {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt='volume'>
            <use xlinkHref='img/icon/sprite.svg#icon-volume'></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine type='range' name='range' />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
}
