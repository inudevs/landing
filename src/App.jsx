import React from 'react';
import styled from 'styled-components';

import Router from './client/Router';

import Global from './components/atoms/Global';
import Footer from './components/molecules/Footer';
import Text from './components/atoms/Text';
import LayeredText from './components/molecules/LayeredText';

function App() {
  return (
    <>
      <Global />
      <Container>
        {/* 작업할 때는 아래 부분을 주석하고 작업하세요. */}
        {/* <Cover>
          <Tape>LANDING AT<br />2020-03-26</Tape>
          <Desc>git 
            많은 기대 부탁드립니다.
          </Desc>
          <Bottom>
            @inudevs
          </Bottom>
        </Cover> */}

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

const Cover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 990;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Tape = styled(Text)`
  font-size: 85px;
  font-weight: 900;
  line-height: 1;
  color: white;
  background-color: #111;
  padding: 0.8rem;
  z-index: 999;
`;

const Desc = styled(Text)`
  color: white;
  font-size: 1.8rem;
  font-weight: 900;
`;

const Bottom = styled(Text)`
  color: white;
  font-size: 1.1rem;
  font-weight: 900;
`;
