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
}) => {
  const onClickCard = () => history.push(route);

  return (
    <Wrapper>
      <Container
        onClick={onClickCard}
      >
        <CoverImage
          src={image}
          shadowColor={shadowColor}
        />
        <Title
          shadowColor={shadowColor}
        >
          {title}
        </Title>
        <Description>
          {description}
        </Description>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  border-radius: 16px;
  background-color: rgb(224, 229, 236);
  box-shadow:
    rgba(163, 177, 198, 0.6) 9px 9px 16px,
    rgba(255, 255, 255, 0.5) -9px -9px 16px;
  padding: 1rem 0;
  cursor: pointer;
`;

const CoverImage = styled(Image)`
  width: 312px;

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

  ${({ shadowColor }) => shadowColor && css`
    text-shadow: 3px 3px 35px ${shadowColor};
  `}
`;

const Description = styled(LayeredText)`
  font-size: 0.98rem;
  font-weight: 500;
`;
