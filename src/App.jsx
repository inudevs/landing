import React from 'react';
import styled from 'styled-components';

import Global from './components/atoms/Global';
import Link from './components/atoms/Link';
import Text from './components/atoms/Text';
import LayeredText from './components/molecules/LayeredText';
import ProfileImage from './components/molecules/ProfileImage';

function App() {
  return (
    <>
      <Global />
      <Page>
        <Container>
          <ProfileImage />
          <TextSection>
            <Title>
              inudevs
            </Title>
            <StatusBar>
              <StatusText>
                게시물 0
              </StatusText>
              <StatusText>
                팔로워 ∞
              </StatusText>
              <StatusText>
                팔로우 ∞
              </StatusText>
            </StatusBar>
            <Info>
              <Name>
                이누
              </Name>
              <Description>
                뭉뭉~ 안뇽 난 이누 !!
              </Description>
              <Link
                href="https://facebook.com/inudevs"
              >
                fb.com/inudevs
              </Link>
            </Info>
          </TextSection>
        </Container>
      </Page>
    </>
  );
}

export default App;

const Page = styled.div`
  background-color: #F9F9F9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 635px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(LayeredText)`
  font-weight: bold;
  font-size: 3.4rem;
`;

const StatusBar = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const StatusText = styled(Text)`
  font-weight: bold;
  position: relative;
  margin-right: 0.6rem;
  padding-right: 1.1rem;

  &:not(:last-child)::after {
    content: '';
    top: 5px;
    right: 0px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    box-shadow: -10px -10px 20px 0 rgba(255, 255, 255, 0.95);
    background-color: #e2e2e2;
    position: absolute;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled(LayeredText)`
  font-weight: 900;
  margin-bottom: 3px;
`;

const Description = styled(Text)`
  font-weight: 600;
  margin-bottom: 3px;
`;
