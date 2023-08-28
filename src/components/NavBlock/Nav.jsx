import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwitchTheme } from '../SwitchThemeBlock/SwitchTheme';
import * as S from './styles';

export function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuAppear = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to='/'>
          <S.LogoImage
            id='btn-menu'
            xmlns='http://www.w3.org/2000/svg'
            width='114'
            height='18'
            viewBox='0 0 114 18'
            fill='none'
          >
            <path
              d='M3.19264 17.414C1.36821 18.4678 0.0576172 17.5896 0.0576172 16.0275C0.0576172 14.3647 0.0576172 9.37523 0.0576172 9.37523C0.0576172 9.37523 0.0576172 4.38579 0.0576172 2.72291C0.0576172 1.16086 1.3674 0.28267 3.19264 1.3365C6.03415 2.97742 14.5579 7.90181 14.5579 7.90181C15.6912 8.55639 15.6912 10.1932 14.5579 10.8478C14.5579 10.8486 6.03415 15.773 3.19264 17.414Z'
              fill='#00C1FF'
            />
            <path
              d='M12.5745 17.413C10.75 18.4668 9.43945 17.5886 9.43945 16.0266C9.43945 14.3637 9.43945 9.37425 9.43945 9.37425C9.43945 9.37425 9.43945 4.38481 9.43945 2.72193C9.43945 1.15989 10.7492 0.281694 12.5745 1.33553C15.3534 2.94067 23.6901 7.75691 23.6901 7.75691C24.9349 8.47573 24.9349 10.2728 23.6901 10.9916C23.6893 10.9916 15.3534 15.8078 12.5745 17.413Z'
              fill='#BCEC30'
            />

            <path
              d='M12.5745 17.413C10.75 18.4668 9.43945 17.5886 9.43945 16.0266C9.43945 14.3637 9.43945 9.37425 9.43945 9.37425C9.43945 9.37425 9.43945 4.38481 9.43945 2.72193C9.43945 1.15989 10.7492 0.281694 12.5745 1.33553C15.3534 2.94067 23.6901 7.75691 23.6901 7.75691C24.9349 8.47573 24.9349 10.2728 23.6901 10.9916C23.6893 10.9916 15.3534 15.8078 12.5745 17.413Z'
              fill='#6FE4FF'
            />

            <path
              d='M3.19313 17.414C1.3687 18.4678 0.0581055 17.5896 0.0581055 16.0275C0.0581055 14.3647 0.0581055 9.37523 0.0581055 9.37523C0.0581055 9.37523 0.0581055 4.38579 0.0581055 2.72291C0.0581055 1.16086 1.36789 0.28267 3.19313 1.3365C6.03464 2.97742 14.5584 7.90181 14.5584 7.90181C15.6917 8.55639 15.6917 10.1932 14.5584 10.8478C14.5584 10.8486 6.03464 15.773 3.19313 17.414Z'
              fill='#99D100'
            />

            <S.LogoLetters
              d='M30.5687 12.3437L30.8865 11.62C31.1032 11.1278 31.4933 10.9976 31.9845 11.3594C32.9235 12.0542 34.4693 12.5608 36.5352 12.5608C38.2977 12.5608 39.0489 12.1121 39.0489 11.5765C39.0489 10.9686 38.4277 10.8094 37.402 10.6791L35.0616 10.3752C32.2445 9.99885 30.8287 8.98565 30.8287 7.2198C30.8287 5.32368 32.3745 3.81836 35.9573 3.81836C37.9509 3.81836 39.2367 4.12232 40.0746 4.44075C40.9992 4.80261 41.1292 5.10656 41.1292 5.85922V6.84347C41.1292 7.45139 40.9125 7.65403 40.3202 7.65403H39.6556C39.0489 7.65403 38.8466 7.43691 38.8466 6.84347V6.52504C38.4566 6.39477 37.4886 6.2066 36.3618 6.2066C34.3826 6.2066 33.4291 6.56846 33.4291 7.17638C33.4291 7.62508 34.007 7.88561 35.0616 8.03035L37.3586 8.33431C40.1324 8.68169 41.6059 9.5212 41.6059 11.5476C41.6059 13.6029 39.6556 14.9201 36.174 14.9201C33.6169 14.9201 31.5655 14.1095 30.7421 13.3569C30.4531 13.0674 30.4098 12.7055 30.5687 12.3437Z'
              fill='black'
            />
            <S.LogoLetters
              d='M55.9358 14.7465H54.7511C54.1733 14.7465 53.9855 14.6597 53.6965 14.2255L51.4718 10.9398C51.1539 10.4911 50.9083 10.3753 50.2438 10.3753H48.019V13.936C48.019 14.5439 47.8023 14.7465 47.21 14.7465H46.3577C45.7509 14.7465 45.5486 14.5294 45.5486 13.936V3.254H44.7541C44.1473 3.254 43.9451 3.03689 43.9451 2.44345V1.71974C43.9451 1.11182 44.1618 0.90918 44.7541 0.90918H47.2245C47.8312 0.90918 48.0335 1.12629 48.0335 1.71974V7.97259H50.0271C50.6916 7.97259 50.9228 7.87127 51.2551 7.4081L53.1187 4.52773C53.4221 4.07903 53.6099 3.99219 54.1877 3.99219H55.3723C56.0224 3.99219 56.138 4.51326 55.7769 5.0488L53.6965 8.20418C53.4798 8.50814 53.2198 8.82657 52.9742 9.08711C53.2342 9.30422 53.5954 9.66607 53.7399 9.88319L56.3403 13.7189C56.7014 14.2255 56.5714 14.7465 55.9358 14.7465Z'
              fill='black'
            />
            <S.LogoLetters
              d='M60.1631 16.7152V16.006C60.1631 15.398 60.3798 15.1954 60.9721 15.1954H61.9978C62.6191 15.1954 62.9224 15.0651 63.1536 14.573L63.2836 14.298L58.3717 4.99108C58.0684 4.42659 58.314 4.00684 58.9496 4.00684H60.062C60.6399 4.00684 60.8999 4.10816 61.1166 4.52791L63.168 8.75438C63.6448 9.72415 64.1793 10.8387 64.5982 11.8084C65.0316 10.8676 65.5228 9.78205 65.9851 8.84122L68.0799 4.52791C68.2677 4.12263 68.5566 4.00684 69.1345 4.00684H70.2469C70.897 4.00684 71.1281 4.44106 70.8247 4.99108L65.2339 15.6296C64.5838 16.8599 63.847 17.5402 62.1712 17.5402H60.9432C60.3654 17.5402 60.1631 17.3231 60.1631 16.7152Z'
              fill='black'
            />
            <S.LogoLetters
              d='M85.9316 9.37646C85.9316 12.7924 83.4034 14.9201 79.994 14.9201C78.5205 14.9201 77.3937 14.5582 76.5991 14.1095V17.0333C76.5991 17.6412 76.3824 17.8439 75.7901 17.8439H74.9377C74.331 17.8439 74.1287 17.6268 74.1287 17.0333V6.35135H73.3342C72.7274 6.35135 72.5251 6.13423 72.5251 5.54079V4.81708C72.5251 4.20916 72.7418 4.00652 73.3342 4.00652H75.4145C76.0212 4.00652 76.2235 4.22364 76.2235 4.81708V4.87498C77.0325 4.33943 78.2605 3.81836 79.994 3.81836C83.4034 3.83283 85.9316 5.96054 85.9316 9.37646ZM83.3601 9.37646C83.3601 7.37901 81.7565 6.2645 79.7629 6.2645C78.3327 6.2645 77.1625 6.87242 76.6135 7.36454V11.4028C77.177 11.895 78.3327 12.5029 79.7629 12.5029C81.7565 12.4884 83.3601 11.3739 83.3601 9.37646Z'
              fill='black'
            />
            <S.LogoLetters
              d='M99.3909 8.5381C99.3909 9.14602 99.1742 9.34866 98.5818 9.34866H97.7295C97.1227 9.34866 96.9205 9.17497 96.9205 8.5381C96.9205 6.94594 96.3137 6.2367 94.8691 6.2367C93.4966 6.2367 92.3554 7.09068 91.7197 8.13282V13.937C91.7197 14.5449 91.503 14.7475 90.9107 14.7475H90.0583C89.4516 14.7475 89.2493 14.5304 89.2493 13.937V6.3525H88.4548C87.848 6.3525 87.6458 6.13538 87.6458 5.54194V4.81823C87.6458 4.21031 87.8625 4.00767 88.4548 4.00767H90.5351C91.1418 4.00767 91.3441 4.22479 91.3441 4.81823V5.51299C92.1098 4.65901 93.2799 3.83398 95.2736 3.83398C98.1918 3.83398 99.3909 5.57089 99.3909 8.5381Z'
              fill='black'
            />
            <S.LogoLetters
              d='M100.924 9.37761C100.924 6.19328 103.611 3.83398 107.179 3.83398C110.719 3.83398 113.391 6.19328 113.391 9.37761C113.391 12.5764 110.704 14.9357 107.179 14.9357C103.611 14.9357 100.924 12.5764 100.924 9.37761ZM110.936 9.37761C110.936 7.52491 109.303 6.17881 107.179 6.17881C105.012 6.17881 103.38 7.53938 103.38 9.37761C103.38 11.2448 105.012 12.6054 107.179 12.6054C109.318 12.6054 110.936 11.2448 110.936 9.37761Z'
              fill='black'
            />
          </S.LogoImage>
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={menuAppear}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      <S.MenuContent $menuVisible={menuVisible}>
        <S.MenuList>
          <S.MenuItem>
            <Link to='/'>
              <S.MenuLink href='#'>Главное</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to='/favourites'>
              <S.MenuLink href='#'>Мой плейлист</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to='/login'>
              <S.MenuLink href='../signin.html'>Выйти</S.MenuLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuContent>
      <SwitchTheme />
    </S.MainNav>
  );
}
