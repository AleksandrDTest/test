import { Outlet } from "react-router-dom";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <div>
      <header>ЛОГО</header>
      <section>
        <Outlet />
      </section>
      <footer>ПОДВАЛ</footer>
    </div>
  );
};

export default Layout;
