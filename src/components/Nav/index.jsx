import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SwitchTheme } from '../SwitchTheme';
import { LogoImg } from '../../utils/iconSVG/logoImg';
import * as S from './styles';

export const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    localStorage.setItem('user', 'false');
  };

  const menuAppear = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <NavLink to='/'>
          <LogoImg />
        </NavLink>
      </S.NavLogo>
      <S.NavBurger onClick={menuAppear}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      <S.MenuContent $menuVisible={menuVisible}>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to='/' href='#'>
              Главное
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to='/favourites' href='#'>
              Мой плейлист
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink
              to='/login'
              href='../signin.html'
              onClick={handleLogout}
            >
              Выйти
            </S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuContent>
      <SwitchTheme />
    </S.MainNav>
  );
};
