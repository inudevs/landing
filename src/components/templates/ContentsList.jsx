import React from 'react';
import styled from 'styled-components';

import ContentsCard from '../organisms/ContentsCard';

import contents from '../../data/contents.json';
// const sortedMembers = members.sort((a, b) => a - b);

const ContentsList = () => (
  <>
    <ListContainer>
      {contents.map(({ name, link, ...props }, idx) => (
        <ContentsCard
          key={`contents-${idx}`}
          image={require(`../../assets/contents/${name}.png`)}
          name={name}
          link={link}
          {...props}
        />
      ))}
    </ListContainer>
  </>
);

const ListContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`;

export default ContentsList;
