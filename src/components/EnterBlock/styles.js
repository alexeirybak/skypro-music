import styled, { css } from 'styled-components';

const BtnMixin = css`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgb(0 0 0 / 85%);
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`;

export const ModalFormLogin = styled.form`
  width: 366px;
  height: 439px;
  background-color: #fff;
  border-radius: 12px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  justify-content: space-between;
  padding: 43px 47px 47px 41px;
  align-items: center;
`;

export const ModalFormLoginInput = styled.div`
  width: 278px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ModalFormLoginButtons = styled(ModalFormLoginInput)``;

export const ModalInput = styled.input`
  height: 52px;
  border: none;
  border-bottom: 1px solid #d0cece;
  outline: none;
  &::placeholder {
    font-family: StratosSkyeng, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    color: #d0cece;
  }
`;

export const ModalInputConfirmPassword = styled(ModalInput)``;

export const ModalButtonEnter = styled.button`
  ${BtnMixin}
  background-color: #580ea2;
  height: 52px;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`;

export const ModalBtnSignup = styled.button`
  height: 52px;
  border: 1px solid #d0cece;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ $status }) => ($status ? '#580ea2' : '#fff')};
  color: ${({ $status }) => ($status ? '#fff' : '#000')};
  &:hover {
    background-color: #3f007d;
    color: #fff;
  }
  &:active {
    background-color: #271a58;
    color: #fff;
  }
`;
