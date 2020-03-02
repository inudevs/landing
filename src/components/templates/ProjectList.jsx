import React from 'react';
// import styled from 'styled-components';

import Slider from 'react-slick';
import ProjectCard from '../organisms/ProjectCard';

import projects from '../../data/projects.json';


// react-slick
import './Slider1.css';
import './Slider2.css';
//

const sortedProjects = projects.sort((a, b) => a - b);

// const ProjectList = () => {
//   return (
//     <>
//       <ListContainer>
//         {sortedMembers.map(({ name, ...props }, idx) => {
//           return (
//             <ProjectCard
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


// react-sick ver.

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      {sortedProjects.map(({ name, ...props }, idx) => (
        <ProjectCard
          key={`project-${idx}`}
          image={require(`../../assets/projects/${name}.png`)}
          name={name}
          {...props}
        />
      ))}
    </Slider>
  );
};

export default SimpleSlider;

// const ListContainer = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 2rem;
//   display: grid;
//   grid-column-gap: 1rem;
//   grid-row-gap: 1rem;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// `;

// export default ProjectList;
