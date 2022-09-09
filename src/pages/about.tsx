import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const About = () => {
  return (
    <>
      <PageSection>
        <div
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">Skills.</h1> <br />
          <Box sx={{ width: "100%" }}>
            <h5>Javascript</h5>
            <LinearProgress
              color="success"
              sx={{ mt: 1 }}
              variant="determinate"
              value={80}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <h5>Typescript</h5>
            <LinearProgress
              color="success"
              sx={{ mt: 1 }}
              variant="determinate"
              value={76}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <h5>React js</h5>
            <LinearProgress
              color="success"
              sx={{ mt: 1 }}
              variant="determinate"
              value={84}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <h5>Node js</h5>
            <LinearProgress
              color="success"
              sx={{ mt: 1 }}
              variant="determinate"
              value={70}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <h5>Express js</h5>
            <LinearProgress
              color="success"
              sx={{ mt: 1 }}
              variant="determinate"
              value={75}
            />
          </Box>
        </div>
      </PageSection>

      <div>
        <Footer goto="/projects">Lets Continue To Projects</Footer>
        <br />
      </div>
    </>
  );
};

const PageSection = styled.div`
  h5 {
    font-size: 13px;
  }
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h5 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
`;
