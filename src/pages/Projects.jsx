import React from 'react';

import Home from '../pages/Home';

import Page from '../components/atoms/Page';
import PageSection from '../components/organisms/PageSection';
import Header from '../components/templates/Header';
import ProjectList from '../components/templates/ProjectList';

const ProjectsPage = () => {
  return (
    <Page>
      <Header />
      <PageSection
        title="이누가 지금까지 세상에 펼친 아이디어들이에요."
        route='/story'
      >
        <ProjectList />
      </PageSection>
    </Page >
  );
};

export default ProjectsPage;
