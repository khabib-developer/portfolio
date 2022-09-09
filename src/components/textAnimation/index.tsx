import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux-hooks";

export const TextAnimation = () => {
  const { theme } = useAppSelector((s) => s.theme);
  return (
    <Element color={!theme ? "#fff" : "#000"}>
      <div className="wrapper">
        <span>I am a web developer</span>
      </div>
    </Element>
  );
};

const Element = styled.div`
  .wrapper {
    font-weight: 900;
    font-size: 60px;
    letter-spacing: 0.02em;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  span {
    -webkit-text-stroke-color: ${(props) => props.color};
    -webkit-text-stroke-width: 0.02em;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    -webkit-transition: background-size 1s cubic-bezier(0.02, 0.99, 0.62, 1);
    transition: background-size 1s cubic-bezier(0.02, 0.99, 0.62, 1);
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${(props) => props.color}),
      color-stop(50%, ${(props) => props.color}),
      color-stop(50.1%, transparent)
    );
    background-image: linear-gradient(
      90deg,
      ${(props) => props.color} 0%,
      ${(props) => props.color} 50%,
      transparent 50.1%
    );
    background-size: 0% 100%;
  }

  span: hover {
    background-size: 200% 100%;
  }
`;
