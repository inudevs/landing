import React from 'react';
import styled from 'styled-components';

import MemberCard from '../organisms/MemberCard';

import members from '../../data/members.json';
// const sortedMembers = members.sort((a, b) => a - b);

const MemberList = () => (
  <>
    <ListContainer>
      {members.map(({ name, ...props }, idx) => (
        <MemberCard
          key={`member-${idx}`}
          image={require(`../../assets/members/${name}.png`)}
          name={name}
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
  grid-row-gap: 1.95rem;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`;

export default MemberList;
