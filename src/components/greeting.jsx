import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 3rem;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
`;

const Title = styled.p`
  font-size: 1.7rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 1.3rem; /* 0.875 * 1.5 = 1.3rem */
  line-height: 1.75;
  color: #000000;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.5rem; /* 1 * 1.5 = 1.5rem */
  line-height: 1.75;
  color: #000000;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

const NameHighlight = styled.span`
  color: #000000;
  font-weight: 600;
  font-size: 1.5rem;
`;

const SmallText = styled.span`
  font-size: 1.2rem;
  color: #A7A9AC;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        살면서 만난 많은 분들의 응원과
        <br />
        따뜻한 마음 덕분에
        <br />
        저희가 바르고 곱게 자랄 수 있었습니다.
        <br />
        <br />
        그 고마운 마음을 간직한 채
        <br />
        이제 한 가족을 이루려 합니다.
        <br />
        <br />
        지금의 저희를 있게 해주신 여러분을 초대합니다.
      </Content>
      <GroomBride data-aos="fade-up">
      {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<SmallText>의 장남</SmallText> <NameHighlight>엄광호</NameHighlight>
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<SmallText>의 장녀</SmallText> <NameHighlight>이재원</NameHighlight>
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
