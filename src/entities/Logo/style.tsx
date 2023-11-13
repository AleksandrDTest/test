import styled, { css } from "styled-components";

export const HeadText = styled.h1`
  font-size: 96px;
  line-height: 121px;
  text-transform: uppercase;
  font-weight: 400;
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  text-shadow: 1px 4px 1px rgba(0,0,0,0.25);
`;

export const HeadTextSubtitle = styled.h2`
  font-size: 20px;
  line-height: 25px;
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  text-shadow: 1px 2px 1px rgba(0,0,0,0.3);
`;

export const WrappLogo = styled.div`
  display: flex;
`;

export const WrappLogoSubtitle = styled.div`
  margin-left: 10px;
  width: 87px;
  display: flex;
  align-items: center;
`;
