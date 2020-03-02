import React from 'react';
import styled from 'styled-components';

import HorizontalRule from '../components/atoms/HorizontalRule';
import Link from '../components/atoms/Link';
import Page from '../components/atoms/Page';
import Text from '../components/atoms/Text';
import LayeredText from '../components/molecules/LayeredText';
import ProfileImage from '../components/molecules/ProfileImage';
import ProfileSlider from '../components/molecules/ProfileSlider';
import SocialBar from '../components/molecules/SocialBar';
import PageSection from '../components/organisms/PageSection';
import MemberList from '../components/templates/MemberList';
import ProjectList from '../components/templates/ProjectList';

const Index = () => {
  return (
    <Page>
      <SocialBar />
      <Container>
        <ProfileImage />
        <ProfileSlider />
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
      <HorizontalRule />
      <PageSection
        title="이누를 소개할게요."
      />
      <PageSection
        title="동아리를 이루는 사람들이에요."
      >
        <MemberList />
      </PageSection>
      <PageSection
        title="컨텐츠로 나눔을 실천하고 있어요."
      >
        <ProjectList />
      </PageSection>
      <PageSection
        title="재미있는 프로젝트를 진행해요."
      />
    </Page>
  );
};

export default Index;


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
