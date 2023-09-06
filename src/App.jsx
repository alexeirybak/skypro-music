import { useState, useEffect } from 'react';
import { AppRoutes } from './routes';
import { setTheme } from './utils/theme';
import { GlobalStyle } from './styles/global';
import { getAllTracks } from './api';

setTheme();

function App() {
  const initialUserState = localStorage.getItem('user') === 'true';
  const [user, setUser] = useState(initialUserState);
  const [music, setMusic] = useState([]);
  const [getTracksError, setGetTracksError] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const tracks = await getAllTracks();
        setMusic(tracks);
      } catch (error) {
        setGetTracksError('Не удалось загрузить плейлист, попробуйте позже');
      }
    }
    fetchTracks();
  }, []);

  const handleLogin = () => {
    localStorage.setItem('user', 'true');
    setUser(true);
  };

  return (
    <>
      <GlobalStyle />
      <AppRoutes
        user={user}
        music={music}
        onAuthButtonClick={handleLogin}
        getTracksError={getTracksError}
      />
    </>
  );
}

export default App;
