import { useState, useEffect } from 'react';
import { Main } from './components/MainBlock/Main';
import { Player } from './components/PlayerBlock/Player';
import { Footer } from './components/FooterBlock/Footer';
import { Enter } from './components/EnterBlock/Enter';
import './styles/normalize.css';
import './styles/global.css';
import { setTheme } from './utils/theme';

setTheme();

function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(true);
      }, 5000);

      return () => clearTimeout(timeout); // Очищаю перед размонтом
    }
  }, [isLoading]);


  return (
    <>
      <div className='wrapper'>
        {/* <Enter /> */}
        <div className='container'>
          <Main isLoading={isLoading} setIsLoading={setIsLoading} />
          <Player isLoading={isLoading} setIsLoading={setIsLoading} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
