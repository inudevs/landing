import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';




const MemberCard = ({ image, name, quote }) => {
  return (
    <Container>
      <Image
        src={image}
      />
      <Name>
        {name}
      </Name><br />
      <Quote>
        {quote}
      </Quote>
    </Container>
  );
};

export default MemberCard;

const Container = styled.div`
  animation: cardAnimation 3.3s;
  background-color: white;
  width: fit-content;
  padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow:
    inset 4px 4px 4px rgba(163, 177, 198, 0.7),
    inset -3px -3px 4px rgba(255, 255, 255, 0.5),
    9px 9px 16px rgb(163,177,198,0.25),
    -9px -9px 16px white;
  border: 5px solid #f2f4f7;
  border-radius: 8px;
  transition: all 0.7s;

  &:hover{
  box-shadow:
    inset 0px 0px 0px rgba(163, 177, 198, 0.7),
    inset 0px 0px 0px rgba(255, 255, 255, 0.5),
    3px 3px 6px rgba(163, 177, 198, 0.7),
    9px 9px 25px rgb(163,177,198,0.5),
    -9px -9px 16px white;
    transition: all 0.7s;
  }

    @keyframes cardAnimation {
    from { 
      opacity: 0%; 
      margin-top:15px;}
    to { 
      opacity:100%; 
      margin-top:0px;
      }
}
`;




const Image = styled.img`
  width: 11rem;
  height: 12rem;
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
  font-size: 0.95rem;
  text-shadow:
    5px 5px 9px rgba(163, 177, 198, 0.35),
    -3px -3px 15px #ffffff;
  line-height: 1.25;
`;
