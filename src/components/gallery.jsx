import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.jpeg";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.jpeg";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.jpeg";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.jpeg";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.jpeg";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.jpeg";
import GalleryPhoto7 from "../assets/Gallery_Photo_7.jpeg";
import GalleryPhoto8 from "../assets/Gallery_Photo_8.jpeg";
import GalleryPhoto9 from "../assets/Gallery_Photo_9.jpeg";
import GalleryPhoto10 from "../assets/Gallery_Photo_10.jpeg";
import GalleryPhoto11 from "../assets/Gallery_Photo_11.jpeg";
import GalleryPhoto12 from "../assets/Gallery_Photo_12.jpeg";
import GalleryPhoto13 from "../assets/Gallery_Photo_13.jpeg";
import GalleryPhoto14 from "../assets/Gallery_Photo_14.jpeg";
import GalleryPhoto15 from "../assets/Gallery_Photo_15.jpeg";
import GalleryPhoto16 from "../assets/Gallery_Photo_16.jpeg";
import GalleryPhoto17 from "../assets/Gallery_Photo_17.jpeg";
import GalleryPhoto18 from "../assets/Gallery_Photo_18.jpeg";
import GalleryPhoto19 from "../assets/Gallery_Photo_19.jpeg";
import GalleryPhoto20 from "../assets/Gallery_Photo_20.jpeg";
import GalleryPhoto21 from "../assets/Gallery_Photo_21.jpeg";
import GalleryPhoto22 from "../assets/Gallery_Photo_22.jpeg";
import GalleryPhoto23 from "../assets/Gallery_Photo_23.jpeg";
import GalleryPhoto24 from "../assets/Gallery_Photo_24.jpeg";
import GalleryPhoto25 from "../assets/Gallery_Photo_25.jpeg";
import GalleryPhoto26 from "../assets/Gallery_Photo_26.jpeg";
import GalleryPhoto27 from "../assets/Gallery_Photo_27.jpeg";
import GalleryPhoto28 from "../assets/Gallery_Photo_28.jpeg";
import GalleryPhoto29 from "../assets/Gallery_Photo_29.jpeg";
import GalleryPhoto30 from "../assets/Gallery_Photo_30.jpeg";
import GalleryPhoto31 from "../assets/Gallery_Photo_31.jpeg";

const Wrapper = styled.div`
  padding-top: 3rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.7rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19,
  },
  {
    original: GalleryPhoto20,
    thumbnail: GalleryPhoto20,
  },
  {
    original: GalleryPhoto21,
    thumbnail: GalleryPhoto21,
  },
  {
    original: GalleryPhoto22,
    thumbnail: GalleryPhoto22,
  },
  {
    original: GalleryPhoto23,
    thumbnail: GalleryPhoto23,
  },
  {
    original: GalleryPhoto24,
    thumbnail: GalleryPhoto24,
  },
  {
    original: GalleryPhoto25,
    thumbnail: GalleryPhoto25,
  },
  {
    original: GalleryPhoto26,
    thumbnail: GalleryPhoto26,
  },
  {
    original: GalleryPhoto27,
    thumbnail: GalleryPhoto27,
  },
  {
    original: GalleryPhoto28,
    thumbnail: GalleryPhoto28,
  },
  {
    original: GalleryPhoto29,
    thumbnail: GalleryPhoto29,
  },
  {
    original: GalleryPhoto30,
    thumbnail: GalleryPhoto30,
  },
  {
    original: GalleryPhoto31,
    thumbnail: GalleryPhoto31,
  },
];
const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
