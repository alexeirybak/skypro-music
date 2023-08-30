import { useState } from 'react';
import { AppRoutes } from './routes';
import { setTheme } from './utils/theme';
import { GlobalStyle } from './styles/global';

setTheme();

function App() {
  const initialUserState = localStorage.getItem('user') === 'true';
  const [user, setUser] = useState(initialUserState);
  const handleLogin = () => {
    localStorage.setItem('user', 'true');
    setUser(true);
  };

  return (
    <>
      <GlobalStyle />
      <AppRoutes
        user={user}
        onAuthButtonClick={handleLogin}
      />
    </>
  );
}

export default App;
