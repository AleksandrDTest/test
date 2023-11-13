import { FC, ReactNode } from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  padding: 0 29px;
  display: flex;
  flex-direction: start;
  background-color: none;
`;

interface IHead {
  children: ReactNode;
}

export const Head: FC<IHead> = ({ children }) => {
  return <Header>{children}</Header>;
};
