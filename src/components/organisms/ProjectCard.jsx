import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

const MemberCard = ({
  image, name, quote,
  award, date
}) => (
    <Container>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <Overlay>
        <InfoBox>
          <Name>
            {name}
            <Date>{date}</Date>
          </Name>

          <Quote>
            {quote.split('\n').map((line, idx) => (
              <span key={`line-${idx}`}>{line}</span>
            ))}
          </Quote>
          <Position>
            {
              award
                ? <span role="img" aria-label="trophy">&#x1F3C6;</span>
                : <span>&nbsp;</span>
            }
            {' '}
            {award}
          </Position>
        </InfoBox>
      </Overlay>
    </Container>
  );

export default MemberCard;

const Container = styled.div`
  animation: cardAimation 1.8s;
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
  width: 100%;
  height: 16.8rem;
  margin: 3rem auto;

  @keyframes cardAimation {
    from {
      opacity: 0%;
      margin-top: 4rem;
    }
    to {
      opacity: 100%;
      margin-top: 3rem;
    }
  }

  &:hover {
    box-shadow:
      12px 12px 22px rgb(163, 177, 198, 0.8),
      -9px -9px 16px rgba(255, 255, 255, 0.65);
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
  left:0;
  position: absolute;
  width: 24.5rem;
  height: 18.5rem;
  filter: saturate(105%);
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
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(230, 241, 252, 0.99) 31%,
    #e6f1fc 40%
  );
  
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  position: absolute;
  top:5%;
  bottom: 0;
  left: 32%;
  right: 0;
`;

const Name = styled(Text)`
  color: #1b2944;
  font-weight: 900;
  font-size: 2rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5),
  -3px -3px 15px #ffffff;
  /* font-family: 'Noto Sans KR', sans-serif; */
`;


const Date = styled.div`
color: #1B2A4445;
display:inline-block;
font-size:1rem;
margin-left:0.6rem;
vertical-align:middle;
text-shadow: 0 3px 6px rgba(27, 42, 68, 0.2),
  -3px -3px 15px #ffffff;
`;

const Position = styled(Text)`
  text-shadow: 0 3px 12px rgba(255, 156, 0, 0.45);
  font-weight: bold;
  color: #ff9a00;
  font-size: 0.98rem;
  position: absolute;
  bottom:15%;
`;

const Quote = styled(Text)`
  color: #354461;
  font-size: 0.98rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5);
  line-height: 1.5;
  min-height: 36px;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

