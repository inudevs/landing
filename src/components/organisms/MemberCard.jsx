import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

const MemberCard = ({
  image, name, quote,
  position, major,
}) => (
  <Container>
    <ImageWrapper>
      <Image src={image} />
    </ImageWrapper>
    <Overlay>
      <InfoBox>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Quote>
          {quote.split('\n').map((line) => <span>{line}</span>)}
        </Quote>
        <Major>{major}</Major>
      </InfoBox>
    </Overlay>
  </Container>
);

export default MemberCard;

const Container = styled.div`
  animation: cardAnimation 1.8s;
  width: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow:
    9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: all 0.7s;
  overflow: hidden;
  position: relative;
  width: 16rem;
  height: 21.8rem;
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
`;

// const BlurredImage = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: top center;
//   filter: blur(8px);
//   transform: scale(1.1) translateZ(0);
//   will-change: transform;
//   z-index: 1;

//   ${({ src }) => src && css`
//     background-image: url(${src});
//   `};
// `;

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
  width: 17.5rem;
  height: 16rem;
`;

const Overlay = styled.div`
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 40%,
    #e8f3fd 72%
  );
`;

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
  font-weight: 800;
  font-size: 1.5rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5),
  -3px -3px 15px #ffffff;
`;

const Position = styled(Text)`
  text-shadow: 0 3px 12px rgba(255, 156, 0, 0.45);
  font-weight: bold;
  color: #ff9a00;
  font-size: 0.95rem;
`;

const Quote = styled(Text)`
  color: #354461;
  font-size: 0.95rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5);
  line-height: 1.25;
  min-height: 36px;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`;

const Major = styled(Text)`
  color: #1c2a2e;
  font-weight: bold;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5);
  margin-top: 0.25rem;
  font-size: 0.95rem;
`;
