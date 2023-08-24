import { Nav } from '../NavBlock/Nav';
import { SidebarCenterblock } from '../SidebarCenterblockBlock/SidebarCenterblock';
import { MainSidebar } from '../MainSidebarBlock/MainSidebar';
import * as S from './styles.js';

export function Main({ isLoading }) {
  return (
    <S.Main>
      <Nav />
      <SidebarCenterblock isLoading={isLoading} />
      <MainSidebar isLoading={isLoading} />
    </S.Main>
  );
}
