import React from 'react';
import styled, { css } from 'styled-components';

import Text from '../atoms/Text';

const MemberCard = ({
  image, name, quote,
  position, major, icon,
  color, shadow, img,
}) => (
    <Container>
      <Image
        src={image}
      >
        <IconWrap
          color={color}
          shadow={shadow}
        >
          {
            icon
              ?
              <Icon className={icon} />
              :
              <img src={require(`../../assets/etc/${img}.png`)} />

          }
        </IconWrap>
      </Image>
      <InfoBox>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Quote>
          {quote.split('\n').map((line, idx) => (
            <span key={`line-${idx}`}>{line}</span>
          ))}
        </Quote>
        <Major>{major}</Major>
      </InfoBox>
    </Container>
  );

export default MemberCard;

const Container = styled.div`
  animation: cardAnimation 1.8s;
  display: flex;
  flex-direction: column;
  box-shadow:
    9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.3);
  border-radius: 48px;
  transition: all 0.7s;
  overflow: hidden;
  position: relative;
  width: 16rem;
  height: 21.8rem;
  margin: 0 auto;
  padding: 1.28rem;

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

  &:hover {
    box-shadow:
      12px 12px 22px rgb(163, 177, 198, 0.8),
      -9px -9px 16px rgba(255, 255, 255, 0.65);
  }
`;

const Image = styled.div`
  position: relative;
  background-size: cover;
  width: 156px;
  height: 156px;
  border-radius: 48px;
  filter: saturate(105%);
  cursor: pointer;
  box-shadow: inset 3px 3px 32px -1px rgba(84,88,89,0.5), inset -16px -16px 32px rgba(114,118,121,0.1);
  transition: 0.35s;

  ${({ src }) => src && css`
    background-image: url(${src});
  `};

  &:hover {
    box-shadow: inset 3px 3px 32px -1px rgba(84,88,89,0.3), inset -16px -16px 32px rgba(114,118,121,0.09);
  }
`;

const IconWrap = styled.div`
  position: absolute;
  bottom: -15px;
  right: -15px;
  border-radius: 25px;
  height: 62px;
  width: 62px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) => color && css`
    background: ${color};
  `};

  ${({ shadow }) => shadow && css`
    box-shadow: ${shadow};
  `};
`;

const Icon = styled.i`
  font-size: 25px;
  color: white;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Name = styled(Text)`
  color: #1b2944;
  font-weight: 900;
  font-size: 1.5rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5) -3px -3px 15px #ffffff;
`;

const Position = styled(Text)`
  text-shadow: 0 1px 12px rgba(245, 136, 0, 0.8);
  font-weight: bold;
  color: #ff9a00;
  font-size: 0.98rem;
`;

const Quote = styled(Text)`
  color: #354461;
  font-size: 0.98rem;
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5) -3px -3px 15px #ffffff;
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
  text-shadow: 0 3px 12px rgba(27, 42, 68, 0.5) -3px -3px 15px #ffffff;
  margin-top: 0.25rem;
  font-size: 0.98rem;
`;
