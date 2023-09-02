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
transition: transform 0.8s ease-in-out;
  transform: ${({ rotate }) => (rotate ? 'rotate(360deg)' : 'rotate(0)')};
  animation: ${animSwitcher} 1s ease;
  cursor: pointer;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const SwitcherLabel = styled.label``;

export const SwitcherBlock = styled.div``;

export const SwitcherSwitcherLabel = styled.label``;
