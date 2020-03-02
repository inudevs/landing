import React from 'react';
import styled from 'styled-components';

import MemberCard from '../organisms/MemberCard';

import members from '../../data/members.json';


// react-slick
// import Slider from 'react-slick';
// import "./Slider1.css";
// import "./Slider2.css";
//

const sortedMembers = members.sort((a, b) => a - b);

const MemberList = () => (
  <>
    <ListContainer>
      {sortedMembers.map(({ name, quote }, idx) => (
        <MemberCard
          key={`member-${idx}`}
          image={require(`../../assets/members/${name}.png`)}
          name={name}
          quote={quote}
        />
      ))}
    </ListContainer>
  </>
);


// react-sick ver.
/*
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false
    };
    return (
      <Slider {...settings}>
        {sortedMembers.map(({ name, ...props }, idx) => {
          return (
            <MemberCard
              key={`member-${idx}`}
              image={require(`../../assets/members/${name}.png`)}
              name={name}
              {...props}
            />
          );
        })}
      </Slider>
    );
  }
}
*/


const ListContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default MemberList;
