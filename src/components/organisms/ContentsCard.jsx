import React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

const ContentsCard = ({
  image, name, link
}) => (
    <Container>
      <a href={link} target="blink">
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <InfoBox>
        </InfoBox>
      </a>
    </Container>
  );

export default ContentsCard;

const Container = styled.div`
  animation: cardAnimation 1.8s;
  display: flex;
  flex-direction: column;
  box-shadow:
    9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: all 0.7s;
  overflow: hidden;
  position: relative;
  width: 14rem;
  height: 14rem;
  margin: 0 auto;


  @keyframes cardAnimation {
    from {
      opacity: 0%;
      margin-top: 15px;
    }
    to {
      opacity: 100%;
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 600px){
    width: 20rem;
    height: 20rem;
  }

  &:hover {
    box-shadow:
      12px 12px 22px rgb(163, 177, 198, 0.8),
      -9px -9px 16px rgba(255, 255, 255, 0.65);
    transform: scale(1.05);
  }

  

`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 14rem;
  height: 14rem;
  filter: saturate(105%);

    @media screen and (max-width: 600px){
    width: 20rem;
    height: 20rem;
  }
`;

// const Overlay = styled.div`
//   z-index: 999;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-image: linear-gradient(
//     to bottom,
//     rgba(255, 255, 255, 0) 40%,
//     rgba(232, 243, 253, 0.95) 66%,
//     #e8f3fd 70%
//   );
// `;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Name = styled(Text)`
  color: #1b2944;
  font-weight: 700;
  font-size: 1.5rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5),
    -3px -3px 15px #ffffff;
`;

const Position = styled(Text)`
  text-shadow: 0 3px 12px rgba(255, 156, 0, 0.45);
  font-weight: bold;
  color: #ff9a00;
  font-size: 0.98rem;
`;

const Quote = styled(Text)`
  color: #354461;
  font-size: 0.98rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5);
  line-height: 1.25;
  min-height: 36px;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
`;

const Major = styled(Text)`
  color: #1c2a2e;
  font-weight: bold;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5);
  margin-top: 0.25rem;
  font-size: 0.98rem;
`;
