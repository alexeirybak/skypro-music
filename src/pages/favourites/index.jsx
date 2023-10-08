import { useEffect, useState } from 'react';
import * as S from './styles';
import { getFavoriteTracks } from '../../api/apiTracksList';

export const Favourites = () => {
  const [favouriteTracks, setFavouriteTracks] = useState([]);
  useEffect(() => {
    const fetchResponse = async () => {
      const res = await getFavoriteTracks(
        JSON.parse(localStorage.getItem('token')).access
      );
      setFavouriteTracks(res);
    };
    fetchResponse();
    console.log(JSON.parse(localStorage.getItem('token')).access);
  }, []);

  console.log(favouriteTracks);

  return (
    <S.LovelyTracks>
      <h1>Любимые треки</h1>
      <p>Привет</p>
    </S.LovelyTracks>
  );
};
