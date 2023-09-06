import { Nav } from '../NavBlock';
import { SidebarCenterBlock } from '../SidebarCenterblockBlock';
import { MainSidebar } from '../MainSidebarBlock';
import * as S from './styles.js';

export const NavTrackSidebar = ({ isLoading, music, getTracksError }) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <SidebarCenterBlock
        isLoading={isLoading}
        music={music}
        getTracksError={getTracksError}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};
