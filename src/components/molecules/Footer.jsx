import React from 'react';
import styled from 'styled-components';

import LayeredText from './LayeredText';

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        © 2020 INU™. All rights reserved.
      </Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #c8d1e3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0px;
`;

const Text = styled(LayeredText)`
  font-weight: 900;
  color: #616b80;
`;
