import { Nav } from '../Nav';
import { SidebarCenterBlock } from '../SidebarCenterblock';
import { MainSidebar } from '../MainSidebar';
import * as S from './styles.js';

export const NavTrackSidebar = ({ isLoading, music, error }) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <SidebarCenterBlock
        isLoading={isLoading}
        music={music}
        error={error}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};
