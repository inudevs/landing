import React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Header from '../components/templates/Header';

import storyIllust from '../assets/illusts/story.png';
import BookCard from '../components/organisms/BookCard';

const books = [
  {
    title: 'story',
    description: '이누를 소개합니다',
    image: storyIllust,
    route: '/story',
  },
  {
    title: 'members',
    description: '이누를 소개합니다',
    image: storyIllust,
    route: '/story',
  },
  {
    title: 'contents',
    description: '이누를 소개합니다',
    image: storyIllust,
    route: '/story',
  },
  {
    title: 'projects',
    description: '이누를 소개합니다',
    image: storyIllust,
    route: '/story',
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
  width: 85%;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
`;
