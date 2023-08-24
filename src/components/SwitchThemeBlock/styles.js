import styled, { keyframes } from 'styled-components';

export const Switcher = styled.input`
  position: relative;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`;

const animSwitcher = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;
  
export const SwitcherSwitcher = styled.svg`
  animation: ${animSwitcher} 1s ease;
  cursor: pointer;
`;
