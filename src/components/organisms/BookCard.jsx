import React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

const BookCard = ({ image, title }) => {
  return (
    <Container>
      <Image
        src={image}
      />
      <Title>
        {title}
      </Title>
    </Container>
  );
};

export default BookCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 256px;
`;

const Title = styled(Text)`
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
`;
