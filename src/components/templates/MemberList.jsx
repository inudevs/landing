import React from 'react';
import styled from 'styled-components';

import MemberCard from '../organisms/MemberCard';

import members from '../../data/members.json';

const sortedMembers = members.sort((a, b) => (a.name > b.name) ? 1 : -1);

const MemberList = () => {
  return (
    <ListContainer>
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
    </ListContainer>
  );
};

export default MemberList;

const ListContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
