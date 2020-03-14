import React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Header from '../components/templates/Header';
import BookCard from '../components/organisms/BookCard';

import storyIllust from '../assets/illusts/story.png';
import membersIllust from '../assets/illusts/members.png';
import projectsIllust from '../assets/illusts/projects.png';
import contentsIllust from '../assets/illusts/contents.png';

const books = [
  {
    title: 'story',
    description: '이누를 소개합니다',
    image: storyIllust,
    route: '/story',
    shadowColor: 'rgba(66, 92, 255, 0.5)',
  },
  {
    title: 'members',
    description: '동아리를 이루는 사람들',
    image: membersIllust,
    route: '/members',
    shadowColor: 'rgba(255, 97, 104, 0.5)',
    isVertical: true,
  },
  {
    title: 'projects',
    description: '세상에 펼쳐진 아이디어',
    image: projectsIllust,
    route: '/projects',
    shadowColor: 'rgba(62, 49, 138, 0.5)',
  },
  {
    title: 'contents',
    description: '컨텐츠, 지식의 공유',
    image: contentsIllust,
    route: '/contents',
    shadowColor: 'rgba(62, 49, 138, 0.5)',
  },
];

const HomePage = () => {
  return (
    <Page>
      <Header />
      <BookShelf>
        {books.map(({ ...props }, idx) => (
          <BookCard
            key={`book-${idx}`}
            {...props}
          />
        ))}
      </BookShelf>
    </Page>
  );
};

export default HomePage;

const BookShelf = styled.div`
  width: 95%;
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
`;
