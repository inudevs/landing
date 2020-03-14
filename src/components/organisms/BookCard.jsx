import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Text from '../atoms/Text';
import Image from '../atoms/Image';
import LayeredText from '../molecules/LayeredText';

const BookCard = ({
  image, title, description,
  shadowColor, route,
  history,
  isVertical = false,
}) => {
  const onClickCard = () => history.push(route);

  return (
    <Wrapper>
      <Container
        onClick={onClickCard}
      >
        <Content>
          <CoverImage
            src={image}
            shadowColor={shadowColor}
            isVertical={isVertical}
          />
          <Title
            shadowColor={shadowColor}
          >
            {title}
          </Title>
          <Description>
            {description}
          </Description>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default withRouter(BookCard);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 320px;
  border-radius: 16px;
  background-color: rgb(224, 229, 236);
  box-shadow:
    rgba(163, 177, 198, 0.6) 9px 9px 16px,
    rgba(255, 255, 255, 0.5) -9px -9px 16px;
  padding: 1rem 0;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1rem;
`;

const CoverImage = styled(Image)`
  width: 312px;

  ${({ isVertical }) => isVertical && css`
    height: 256px;
    width: unset;
  `};

  ${({ shadowColor }) => shadowColor && css`
    filter:
      saturate(110%)
      drop-shadow(-9px -9px 16px rgba(255, 255, 255, 0.3))
      drop-shadow(9px 9px 16px ${shadowColor});
    -webkit-filter:
      saturate(110%)
      drop-shadow(-9px -9px 16px rgba(255, 255, 255, 0.3))
      drop-shadow(9px 9px 16px ${shadowColor});
  `};
`;

const Title = styled(Text)`
  font-size: 1.35rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.5rem;

  ${({ shadowColor }) => shadowColor && css`
    text-shadow: 3px 3px 35px ${shadowColor};
  `}
`;

const Description = styled(LayeredText)`
  font-size: 0.98rem;
  font-weight: 500;
`;
