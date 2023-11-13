import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

const WrappСontainerLower = styled.div`
  margin-top: auto;
  padding-top: 43px;
  min-height: 231px;
  text-align: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`;

interface IFooter {
  children?: ReactNode;
}

export const СontainerLower: FC<IFooter> = ({ children }) => {
  return <WrappСontainerLower>{children}</WrappСontainerLower>;
};
