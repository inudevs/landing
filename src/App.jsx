import React from 'react';
import styled from 'styled-components';

import Router from './client/Router';

import Global from './components/atoms/Global';
import Footer from './components/molecules/Footer';

function App() {
  return (
    <>
      <Global />
      <Container>
        <Router />
        <Footer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
