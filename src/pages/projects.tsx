import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { MansoryItem } from "../components/Mansory";

export const Projects = () => {
  return (
    <>
      <PageSection>
        <div>
          <h1 className="intro__text">Projects.</h1> <br />
          <Layout>
            <MansoryItem
              item={{
                src: process.env.PUBLIC_URL + "/img/alzargar.png",
                placeholderSrc:
                  "https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif",
                title: "Alzargar",
                description: "Site directory",
                skills: ["Expressjs", "Reactjs", "typescript", "MySql"],
              }}
            />
            <MansoryItem
              item={{
                src: process.env.PUBLIC_URL + "/img/surdik.png",
                placeholderSrc:
                  "https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif",
                title: "Surdik uz",
                description: "Website for booking tickets",
                skills: ["Javascript", "Expressjs", "MySql"],
              }}
            />
            <MansoryItem
              item={{
                src: process.env.PUBLIC_URL + "/img/smartinvest.png",
                placeholderSrc:
                  "https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif",
                title: "smartinvestdubai.ru",
                description: "Landing Page",
                skills: ["Javascript"],
              }}
            />
            <MansoryItem
              item={{
                src: process.env.PUBLIC_URL + "/img/360-air.png",
                placeholderSrc:
                  "https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif",
                title: "360-air.ru",
                description: "Landing Page",
                skills: ["Javascript"],
              }}
            />
          </Layout>
        </div>
      </PageSection>

      <div>
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
