import { useRef, useState } from 'react';
import PlayerProgress from './playerProgress';
import PlayerBlock from './playerBlock';
import * as S from './styles';

function MainBar({ playTrack }) {
  const audioRef = useRef(null);
  const [repeat, setRepeat] = useState(false);
  console.log(playTrack);

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          ref={audioRef}
          src={playTrack ? playTrack.track_file : null}
          autoPlay
          loop={repeat}
        />
        <PlayerProgress audioRef={audioRef} />
        <PlayerBlock
          repeat={repeat}
          setRepeat={setRepeat}
          audioRef={audioRef}
        />
      </S.BarContent>
    </S.Bar>
  );
}

export default MainBar;
