import React, { Component } from 'react';
// import styled from 'styled-components';

import MemberCard from '../organisms/MemberCard';

import members from '../../data/members.json';


//
import Slider from 'react-slick';
import "./Slider1.css";
import "./Slider2.css";

//

const sortedMembers = members.sort((a, b) => (a.name > b.name) ? 1 : -1);

// const MemberList = () => {
//   return (
//     <>
//       <ListContainer>
//         {sortedMembers.map(({ name, ...props }, idx) => {
//           return (
//             <MemberCard
//               key={`member-${idx}`}
//               image={require(`../../assets/members/${name}.png`)}
//               name={name}
//               {...props}
//             />
//           );
//         })}
//       </ListContainer>
//     </>
//   );
// };




export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
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




// const ListContainer = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 2rem;
//   display: grid;
//   grid-column-gap: 1rem;
//   grid-row-gap: 1rem;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// `;
