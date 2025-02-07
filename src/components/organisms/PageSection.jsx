import React from 'react';
import styled from 'styled-components';

import Section from '../atoms/Section';
import LayeredText from '../molecules/LayeredText';

const PageSection = ({ title, children }) => (
  <Section>
    <SectionTitle>
      {title}
    </SectionTitle>
    {children}
  </Section>
);

export default PageSection;

const SectionTitle = styled(LayeredText)`
  font-weight: 700;
  font-size: 1.5rem;
`;
