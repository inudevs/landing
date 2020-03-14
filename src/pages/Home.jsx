import React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Header from '../components/templates/Header';

import storyIllust from '../assets/illusts/story.png';
import BookCard from '../components/organisms/BookCard';

const HomePage = () => {
  return (
    <Page>
      <Header />
      <BookShelf>
        <BookCard
          title="Story"
          image={storyIllust}
        />
      </BookShelf>
    </Page>
  );
};

export default HomePage;

const BookShelf = styled.div`
`;
