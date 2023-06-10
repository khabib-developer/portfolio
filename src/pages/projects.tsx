import styled from "styled-components";
import { Footer } from "../components/Footer";
import { MansoryItem } from "../components/Mansory";
import { projects } from "../constants";

export const Projects = () => {
  return (
    <>
      <PageSection>
        <div>
          <h1 className="intro__text">Projects.</h1> <br />
          <Layout>
            {projects.map((project) => (
              <a
                href={`${!project.link ? "" : project.link}`}
                target={`${!project.link ? "" : "_blank"}`}
                rel="noreferrer"
              >
                <MansoryItem
                  item={{
                    ...project,
                  }}
                />
              </a>
            ))}
          </Layout>
        </div>
      </PageSection>

      <div>
        <div className="text">And some other landing pages</div>

        <Footer goto="/resume">Lets Go To My Resume.</Footer>
        <br />
      </div>
    </>
  );
};
export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }

  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
`;

const Layout = styled.div`
  margin: 1.5em 0;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-fill-mode: both;
  max-width: auto;
  column-gap: 1.5em;
  @media only screen and (min-width: 1024px) {
    column-count: 2;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 1;
  }

  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
  @keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }

    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }

    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }
  @media (max-width: 585px) {
    opacity: 1 !important;
  }
  @media (max-width: 989px) {
    opacity: 1 !important;
  }
  @media (max-width: 220px) {
    opacity: 1 !important;
  }
`;
