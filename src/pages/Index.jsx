import React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import PageSection from '../components/organisms/PageSection';
import MemberList from '../components/templates/MemberList';
import ProjectList from '../components/templates/ProjectList';
import Header from '../components/templates/Header';

const Index = () => (
  <Page>
    <Header />
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
    />
    <PageSection
      title="재미있는 프로젝트를 진행해요."
    >
      <ProjectList />
    </PageSection>
  </Page>
);

export default Index;
