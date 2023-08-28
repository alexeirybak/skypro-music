import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Main } from './components/MainBlock/Main';
import { Player } from './components/PlayerBlock/Player';
import { Footer } from './components/FooterBlock/Footer';
import { Enter } from './components/EnterBlock/Enter';
import { setTheme } from './utils/theme';
import { GlobalStyle } from './styles/global';
import * as S from './styles/styles'

setTheme();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <Enter />
        <S.Container>
          <Main isLoading={isLoading} setIsLoading={setIsLoading} />
          <Player isLoading={isLoading} setIsLoading={setIsLoading} />
          <Footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;