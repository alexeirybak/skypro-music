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
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const tracks = await getAllTracks();
        setMusic(tracks);
        setIsLoading(true);
      } catch (error) {
        setIsLoading(true);
        setError(error.message);
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
        isLoading={isLoading}
        music={music}
        onAuthButtonClick={handleLogin}
        error={error}
      />
    </>
  );
}

export default App;
