import React from 'react';

import Page from '../components/atoms/Page';
import PageSection from '../components/organisms/PageSection';
import ContentsList from '../components/templates/ContentsList';
import Header from '../components/templates/Header';

const ContentsPage = () => {
  return (
    <Page>
      <Header />
      <PageSection
        title="컨텐츠로 지식을 공유해요."
      >
        <ContentsList />
      </PageSection>
    </Page>
  );
};

export default ContentsPage;
