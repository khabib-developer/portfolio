import styled from "styled-components";
import { ProgressiveImage } from "../ProgressiveImage";

interface IItem {
  src: string;
  placeholderSrc: string;
  title: string;
  description: string;
  skills: string[];
}

export const MansoryItem: React.FC<{ item: IItem }> = ({ item }) => {
  return (
    <MansoryItemStyle
      style={{
        height: "300px",
      }}
      role="gridcell"
      id="cardHover"
    >
      <ProgressiveImage src={item.src} placeholderSrc={item.placeholderSrc} />
      <div className="content__slate">
        <h3> {item.title} </h3>
        <p> {item.description} </p>
        <p className="d-flex flex-wrap">
          <span className="d-block mb-1">{item.skills.join(", ")}</span>
        </p>
      </div>
    </MansoryItemStyle>
  );
};

const MansoryItemStyle = styled.div`
  margin: 0 0 1.5em;
  position: relative;

  cursor: pointer;
  border-radius: 9px;
  object-fit: cover;
  background-color: var(--button-index);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: flex-end;
  border-radius: 9px;
  break-inside: avoid;
  img {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    left: 0 !important;
    top: 0 !important;
    object-fit: cover;
  }
  &:before {
    content: "";
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    background: radial-gradient(
      circle at center center,
      white 10%,
      whitesmoke 11%,
      whitesmoke 100%
    );
  }
  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    /* background: linear-gradient(
    191deg,
    rgba(0, 0, 0, 0.1) 20%,
    rgba(0, 0, 0, 0.76) 100%
  ); */
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 10%,
      rgb(0 0 0 / 78%) 80%
    );
  }
  &:hover,
  &:focus {
    cursor: none;
    &:after {
      opacity: 1;
    }
    div.content__slate {
      z-index: 999;
      transform: none;
      opacity: 1;
    }
  }

  h3 {
    color: #fff;
    font-size: var(--font-x-md);
    font-weight: 800;
  }
  p {
    color: #d5d5d5 !important;
    font-size: calc(var(--font-sm) + 0.9px);
    span {
      background: #696869;
      padding: 4px 10px;
      border-radius: 50px;
      text-transform: capitalize;
      font-size: 11px;
      margin-right: 6px;
      color: #fff;
      font-weight: 500;
    }
  }

  div.content__slate {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;

    /* &:hover {
          transform: none;
          opacity: 1;
      } */
  }
  @media (max-width: 585px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 989px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 220px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
`;
