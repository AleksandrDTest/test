import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 181px;
  height: 43px;
  font-size: 18px;
  line-height: 43px;
  padding-left: 15px;
  text-transform: uppercase;
  font-weight: 300;
  ${({ theme }) => css`
    color: ${theme.colors.black};
    border: solid ${theme.colors.grey};
  `}
  border-radius: 10px;
`;

interface IInputIconButton {
  scale: string;
}

export const InputIconButton = styled.button<IInputIconButton>`
  position: absolute;
  display: flex;
  height: 100%;
  width: 57px;
  align-items: center;
  justify-content: space-around;
  right: 0px;
  top: 50%;
  transition: transform 0.5s ease-out;
  transform: translate(0, -50%)
    ${({ scale }) => (scale === "false" ? "scaleY(-1)" : "scaleY(1)")};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 181px;
`;

interface IInputListWrapper {
  $isopened: boolean;
}

export const InputListWrapper = styled.ul<IInputListWrapper>`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  height: ${(props) => (props.$isopened ? "172px" : "0")};
  left: 0;
  top: 100%;
  margin-top: 6px;
  transition: all 0.5s ease-out;
  overflow: ${(props) => (props.$isopened ? "auto" : "hidden")};
  background-color: ${({ theme }) => theme.colors.white};
`;

interface IInputListItem {
  $active: boolean;
}

export const InputListItem = styled(Input)<IInputListItem>`
  border-radius: 0;
  border-top: none;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.greyLight : "none"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyLight};
  }
  &:first-child {
    border-top: solid ${({ theme }) => theme.colors.grey};
  }
`;
