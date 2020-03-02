import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

const ProjectCard = ({
  image, name, quote, award,
}) => (
  <>
    <Container>
      <Image
        src={image}
      />
      <Name>
        {name}
      </Name>
      <Quote>
        {quote}
      </Quote>
      <Award>
        {
          award
            ? <span role="img" aria-label="trophy">&#x1F3C6;</span>
            : <span>&nbsp;</span>
        }
        {' '}
        {award}
      </Award>
    </Container>
    <br />
  </>
);

export default ProjectCard;

const Container = styled.div`
  animation: cardAnimation 1.8s;
  background-color: white;
  /* width: fit-content; */
  width: 96%;
  margin-left: 2%;
  padding: 1.2rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow:
    inset 4px 4px 4px rgba(163, 177, 198, 0.7),
    inset -3px 0px 6px rgba(210, 210, 210, 0.5),
    9px 9px 16px rgb(163, 177, 198, 0.25),
    -9px -9px 16px white;
  border: 5px solid #f2f4f7;
  border-radius: 8px;
  transition: all 0.7s;

  &:hover {
    box-shadow:
      inset 0px 0px 0px rgba(163, 177, 198, 0.7),
      inset 0px 0px 0px rgba(255, 255, 255, 0.5),
      3px 3px 6px rgba(163, 177, 198, 0.7),
      9px 9px 25px rgb(163, 177, 198, 0.5),
      -9px -9px 16px white;
    transition: all 0.7s;
  }

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

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.6rem;
  box-shadow:
    5px 5px 15px rgba(0, 0, 0, 0.28),
    -3px -3px 15px #ffffff;
`;

const Name = styled(Text)`
  color: #1b2944;
  font-weight: 800;
  font-size: 1.5rem;
  text-shadow:
    5px 5px 9px rgba(163, 177, 198, 0.45),
    -3px -3px 15px #ffffff;
`;

const Quote = styled(Text)`
  color: #354461;
  font-size: 1rem;
  text-shadow:
    5px 5px 9px rgba(163, 177, 198, 0.35),
    -3px -3px 15px #ffffff;
  line-height: 1.2;
  margin-top: 0.5rem;
`;

const Award = styled(Text)`
  color: #354461;
  font-size: 1rem;
  font-weight: 600;
  text-shadow:
    5px 5px 9px rgba(163, 177, 198, 0.35),
    -3px -3px 15px #ffffff;
  line-height: 1.25;
  margin-top: 1.5rem;
`;
