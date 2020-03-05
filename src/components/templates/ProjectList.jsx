import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../organisms/ProjectCard';

import projects from '../../data/projects.json';


// react-slick
// import Slider from 'react-slick';
// import "./Slider1.css";
// import "./Slider2.css";
//

const sortedProjects = projects.sort((a, b) => a - b);

const ProjectList = () => (
  <>
    <ListContainer>
      {sortedProjects.map(({ name, ...props }, idx) => (
        <ProjectCard
          key={`project-${idx}`}
          image={require(`../../assets/projects/${name}.png`)}
          name={name}
          {...props}
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
`;

export default ProjectList;
