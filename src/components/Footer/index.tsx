/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import { IconRight, Linkedin, Github, Instagram } from "../Icons";

import { SocialMedia } from "../Layout/style";

export const Footer: React.FC<{ children: ReactNode; goto: string }> = ({
  children,
  goto,
  ...rest
}) => {
  return (
    <>
      <FooterStyle>
        <Link id="cardHover" to={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/habib-sharopov-b73a281a0/"
          aria-label="Go To Adenekan Wonderful Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/khabib-developer"
          aria-label="Go To Adenekan Wonderful Github Page"
          title="Github"
        >
          <Github />
        </a>
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://telegram.me/khabib_sharopov"
          aria-label="Go To Adenekan Wonderful Dribble Page"
          title="Telegram"
        >
          <TelegramIcon />
        </a>
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/habib_sharopov"
          aria-label="Go To Adenekan Wonderful Instagram Page"
          title="Instagram"
        >
          <Instagram />
        </a>
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:habib.sharopov2001@mail.ru"
          aria-label="Go To Adenekan Wonderful Instagram Page"
          title="Email"
        >
          <EmailIcon />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;
    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;
