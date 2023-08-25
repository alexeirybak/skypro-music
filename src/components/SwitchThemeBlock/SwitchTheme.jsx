import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/global.js';
import * as S from './styles';

export function SwitchTheme() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  function changeTheme() {
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      setCurrentTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setCurrentTheme('dark');
    }
  }, []);

  return (
    <S.SwitcherLabel>
      <S.Switcher
        type='checkbox'
        id='switcher'
        aria-label='Переключить на дневную / ночную тему'
        checked={currentTheme === 'dark'}
        onChange={changeTheme}
      />
      <S.SwitcherSwitcherLabel htmlFor='switcher'>
        <S.SwitcherBlock>
          {currentTheme === 'dark' ? (
            <S.SwitcherSwitcher
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
            >
              <path
                d='M19.2839 28.1637C14.7495 28.1637 11.0608 24.4749 11.0608 19.9406C11.0608 15.6864 14.2509 12.1687 18.4809 11.758C18.7518 11.731 19.0076 11.88 19.1193 12.1271C19.2315 12.3743 19.1743 12.6651 18.9768 12.8507C17.9456 13.8215 17.378 15.1311 17.378 16.5389C17.378 19.3352 19.653 21.6102 22.4492 21.6102C23.9741 21.6102 25.4036 20.9324 26.3721 19.7518C26.5443 19.5419 26.8314 19.4658 27.0839 19.5597C27.338 19.6546 27.5032 19.9007 27.4956 20.1716C27.3715 24.653 23.7642 28.1637 19.2839 28.1637ZM16.9501 13.3844C14.2267 14.3422 12.3283 16.9226 12.3283 19.9406C12.3283 23.7762 15.4483 26.8962 19.2839 26.8962C22.4961 26.8962 25.1775 24.762 25.9836 21.8028C24.9508 22.4984 23.7265 22.8788 22.4492 22.8788C18.9536 22.8788 16.1099 20.0356 16.1099 16.5395C16.1099 15.4106 16.4013 14.3325 16.9501 13.3844Z'
                fill='white'
              />
              <circle cx='19.5576' cy='20.2549' r='19' stroke='white' />
            </S.SwitcherSwitcher>
          ) : (
            <S.SwitcherSwitcher
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
            >
              <path
                d='M19.887 26.5137C16.4577 26.5137 13.668 23.7239 13.668 20.2947C13.668 16.8654 16.4577 14.0762 19.887 14.0762C23.3163 14.0762 26.106 16.866 26.106 20.2947C26.106 23.7239 23.3163 26.5137 19.887 26.5137ZM19.887 15.3197C17.1438 15.3197 14.912 17.5515 14.912 20.2947C14.912 23.0384 17.1438 25.2697 19.887 25.2697C22.6302 25.2697 24.862 23.0384 24.862 20.2947C24.862 17.552 22.6302 15.3197 19.887 15.3197Z'
                fill='black'
              />
              <path
                d='M19.8869 11.7103C19.5433 11.7103 19.2649 11.4313 19.2649 11.0883V8.49648C19.2649 8.15292 19.5433 7.875 19.8869 7.875C20.2299 7.875 20.5089 8.15292 20.5089 8.49648V11.0883C20.5089 11.4313 20.2299 11.7103 19.8869 11.7103Z'
                fill='black'
              />
              <path
                d='M26.0762 14.8717C25.9169 14.8717 25.7581 14.8109 25.6363 14.6896C25.3934 14.4472 25.3934 14.0533 25.6363 13.8103L27.8645 11.5822C28.1074 11.3398 28.5008 11.3398 28.7437 11.5822C28.9867 11.8252 28.9867 12.2191 28.7437 12.4615L26.5156 14.6896C26.3944 14.8109 26.2356 14.8717 26.0762 14.8717Z'
                fill='black'
              />
              <path
                d='M12.7066 14.8717C12.5473 14.8717 12.3879 14.8109 12.2667 14.6896L10.038 12.4615C9.79559 12.2191 9.79559 11.8252 10.038 11.5822C10.281 11.3398 10.6749 11.3398 10.9173 11.5822L13.146 13.8103C13.3884 14.0533 13.3884 14.4477 13.146 14.6896C13.0247 14.8109 12.8654 14.8717 12.7066 14.8717Z'
                fill='black'
              />
              <path
                d='M19.3913 32.621C19.0477 32.621 18.7693 32.3425 18.7693 31.999V29.4072C18.7693 29.0636 19.0477 28.7852 19.3913 28.7852C19.7343 28.7852 20.0128 29.0636 20.0128 29.4072V31.999C20.0128 32.3425 19.7343 32.621 19.3913 32.621Z'
                fill='black'
              />
              <path
                d='M10.9734 29.0963C10.8146 29.0963 10.6553 29.0354 10.534 28.9142C10.2911 28.6717 10.2911 28.2774 10.534 28.0344L12.7622 25.8063C13.0051 25.5633 13.3985 25.5633 13.6414 25.8063C13.8844 26.0487 13.8844 26.4426 13.6414 26.6855L11.4133 28.9142C11.2921 29.0354 11.1328 29.0963 10.9734 29.0963Z'
                fill='black'
              />
              <path
                d='M28.8005 29.0963C28.6416 29.0963 28.4823 29.0354 28.3605 28.9142L26.1324 26.6855C25.8895 26.4426 25.8895 26.0492 26.1324 25.8063C26.3754 25.5633 26.7687 25.5633 27.0117 25.8063L29.2398 28.0344C29.4828 28.2774 29.4828 28.6707 29.2398 28.9142C29.1186 29.0354 28.9598 29.0963 28.8005 29.0963Z'
                fill='black'
              />
              <path
                d='M10.4779 20.9169H7.67963C7.33607 20.9169 7.05762 20.6384 7.05762 20.2949C7.05762 19.9518 7.33607 19.6729 7.67963 19.6729H10.4779C10.8214 19.6729 11.0999 19.9513 11.0999 20.2949C11.0994 20.6384 10.8214 20.9169 10.4779 20.9169Z'
                fill='black'
              />
              <path
                d='M31.6214 20.9169H28.3044C27.9608 20.9169 27.6824 20.6384 27.6824 20.2949C27.6824 19.9518 27.9608 19.6729 28.3044 19.6729H31.6214C31.9644 19.6729 32.2434 19.9513 32.2434 20.2949C32.2434 20.6384 31.9644 20.9169 31.6214 20.9169Z'
                fill='black'
              />
              <circle cx='19.5576' cy='20.375' r='19' stroke='black' />
            </S.SwitcherSwitcher>
          )}
        </S.SwitcherBlock>
      </S.SwitcherSwitcherLabel>
    </S.SwitcherLabel>
  );
}
