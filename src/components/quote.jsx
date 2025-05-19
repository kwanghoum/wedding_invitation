import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.95rem; // 1.3*1.5
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 3.425rem; // 2.25*1.5
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        <br />
        너를 안으면 세상이
        <br />
        다 내 것 같았다
        <br />
        <br />
        - 정양, (사루비아 中) -
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
