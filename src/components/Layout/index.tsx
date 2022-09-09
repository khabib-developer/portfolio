import { ReactNode } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
// import Cursor from "../Cursor";
import Navbar from "../Navbar";
import { BodyStyling, Main } from "./style";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useAppSelector((s) => s.theme);
  return (
    <Main>
      <BodyStyling theme={!theme} />
      <Navbar />
      <section id="main-content">
        <div className={`container`}>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10">{children}</div>
          </div>
        </div>
      </section>
    </Main>
  );
};
