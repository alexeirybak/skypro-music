import { Main } from './components/MainBlock/Main';
import { Player } from './components/PlayerBlock/Player';
import { Footer } from './components/FooterBlock/Footer';
import './styles/normalize.css';
import { Enter } from './components/EnterBlock/Enter';
import './styles/global.css';
import { setTheme } from './utils/theme';

setTheme();

function App() {
  return (
    <>
      <div className='wrapper'>
        <Enter />
        <div className='container'>
          <Main />
          <Player />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
