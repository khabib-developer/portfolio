import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "../components/Layout";
import { Projects } from "../pages/projects";
import { Resume } from "../pages/resume";

export const Pages = () => {
  const location = useLocation();
  return (
    <Layout>
      <TransitionGroup component={null}>
        <CSSTransition classNames="fade" timeout={500} key={location.key}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};
