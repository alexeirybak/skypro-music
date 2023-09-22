import { useState, useEffect } from 'react';
import { AppRoutes } from './routes';
import { setTheme } from './utils/theme';
import { GlobalStyle } from './styles/global';
import { getAllTracks } from './api/apiGetAllTracks';

setTheme();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const tracks = await getAllTracks();
        setMusic(tracks);
        setIsLoading(true);
        setError(false);
      } catch (error) {
        setIsLoading(true);
        setError(error.message);
      }
    }
    fetchTracks();
  }, []);


  return (
    <>
      <GlobalStyle />
      <AppRoutes
        isLoading={isLoading}
        music={music}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        error={error}
      />
    </>
  );
}

export default App;
