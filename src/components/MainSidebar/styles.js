import styled, { keyframes } from 'styled-components';

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;

export const SidebarPersonal = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px;
`;

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main-text);
  margin-right: 16px;
`;

export const SidebarIcon = styled.svg`
  width: 43px;
  height: 43px;
  background-color: var(--sidebar-icon-bg);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.5s ease;
  path {
    stroke: var(--main-text);
  }
`;
export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const SidebarList = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  row-gap: 30px;
`;

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
`;

export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`;

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;

const blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }`;

export const SleketonSidebarImg = styled.div`
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
  width: 250px;
  height: 150px;
`;
