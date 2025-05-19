import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
//import BackgroundVideo from "../assets/BackgroundVideo.mp4";
import GroovePaper from "../assets/GroovePaper.png";

const Layout = styled.div`
  width: 80%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 3rem;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;
/*
const VideoBackground = styled.video`
  width: 100%;
`;
*/


const WeddingInvitation = styled.p`
  font-size: 1.24rem; /* 0.825 * 1.5 = 1.24rem */
  opacity: 0.45;
  margin-bottom: 1rem;
`;

const GroomBride = styled.p`
  font-size: 2.25rem; /* 1.5 * 1.5 = 2.25rem */
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 1rem;
`;

const Schedule = styled.p`
  font-size: 1.59rem; /* 1.06 * 1.5 = 1.59rem */
  opacity: 0.65;
  margin-bottom: 1.5rem;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
