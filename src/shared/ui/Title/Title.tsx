import { FC } from "react";
import styled, { css } from "styled-components";

const FooterText = styled.h2`
  font-size: 96px;
  line-height: 121px;
  font-weight: 400;
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  @media ${({ theme }) => theme.media.phone} {
    font-size: 64px;
    line-height: 80px;
  }
`;

export interface ITitle {
  children?: string;
}

export const Title: FC<ITitle> = ({ children }) => {
  return <FooterText>{children}</FooterText>;
};
