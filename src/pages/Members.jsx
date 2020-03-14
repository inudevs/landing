import React from 'react';

import Page from '../components/atoms/Page';
import PageSection from '../components/organisms/PageSection';
import MemberList from '../components/templates/MemberList';
import Header from '../components/templates/Header';

const MembersPage = () => {
  return (
    <Page>
      <Header />
      <PageSection
        title="동아리를 이루는 사람들이에요."
      >
        <MemberList />
      </PageSection>
    </Page>
  );
};

export default MembersPage;
