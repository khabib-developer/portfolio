import styled from "styled-components";
import { Footer } from "../components/Footer";
import { TextAnimation } from "../components/textAnimation";

export const Home = () => {
  return (
    <PageSection color={"#000"}>
      <article>
        <TextAnimation />
        <p>
          I am a self-taught web developer with a strong eye for new
          technologies and a deep understanding of techniques. I have experience
          with React/Typescript Expressjs Nestjs. As I continually expand my
          skill set, I am actively learning about Web3.0. Now I am improving my
          skills in this direction and expanding them with new technologies. In
          my free time I improve my English. Open for your suggestion.
        </p>
      </article>
      <br />
      <Footer goto="/projects">See my projects</Footer>
      <br />
    </PageSection>
  );
};

const PageSection = styled.div`
  min-height: calc(100vh - 39vh);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  }
  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (max-width: 989px) {
    margin: 3rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
`;
