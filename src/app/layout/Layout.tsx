import { Outlet } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";
import kitten from "../../shared/assets/img/Kitten.png";
import { Head } from "../../shared/ui";
import { Logo } from "../../entities";

const Wrapp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${kitten}) no-repeat right;
  @media ${(props) => props.theme.media.phone} {
    background: none;
  }
`;

const Layout: FC = () => {
  return (
    <Wrapp>
      <Head>
        <Logo title="cat" subTitle="currencies academic terms" />
      </Head>
      <Outlet />
    </Wrapp>
  );
};

export default Layout;
