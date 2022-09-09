import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { useAppSelector } from "../hooks/redux-hooks";
export const Resume = () => {
  const { theme } = useAppSelector((s) => s.theme);
  const resumeData = theme
    ? "https://www.canva.com/design/DAE8chyjLFI/3KCE6xSdpLlKqkkFSy2mGg/view?embed"
    : "https://www.canva.com/design/DAFJ2vMRFl8/BWVKubZQ2pRU67HAz3HVrw/view?embed";

  return (
    <>
      <PageSection>
        <article>
          <h1 className="intro__text">Resumé.</h1>
        </article>
        <br />
        <iframe
          src={resumeData}
          allowFullScreen
          width="740"
          height="780"
          title="Adenekan Wonderful Resumé"
        />
      </PageSection>
      <br />
      <br />
      <Footer goto="/portfolio">Go Back Home?</Footer>
    </>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }

  iframe {
    width: 100%;
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;
export default Resume;
