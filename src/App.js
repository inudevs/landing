import React from 'react';
import styled from 'styled-components';

import Global from './components/atoms/Global';
import Link from './components/atoms/Link';
import Text from './components/atoms/Text';
import LayeredText from './components/molecules/LayeredText';
import Image from './components/atoms/Image';

import profileImage from './assets/profile.png';

function App() {
  return (
    <>
      <Global />
      <Page>
        <Container>
          <ProfileBorder>
            <Profile
              src={profileImage}
            />
          </ProfileBorder>
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

const ProfileBorder = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background-image: linear-gradient(222deg, #c32e92, #dc316f, #f99f4d 85%);
  box-shadow:
    25px 10px 50px 0 rgba(255, 0, 104, 0.25),
    25px 25px 50px 0 rgba(255, 58, 0, 0.2),
    -5px -5px 10px 0 #fff2fa;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: saturate(120%);
  margin-right: 2rem;

  @media (max-width: 635px) {
    margin-right: 0;
  }
`;

const Profile = styled(Image)`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  box-shadow: 10px 10px 16px 0 rgba(254, 151, 52, 0.45);
  filter: saturate(105%);
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
