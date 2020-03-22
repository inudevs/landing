import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

const BrandBackground = () => {
  return (
    <Group>
      <Line />
      <Line />
      <Line />
    </Group>
  );
};

const Brand = () => {
  return (
    <BrandWrapper>
      <BrandBackground />
      <BrandText>
        FALL IN,<br />
        TO YOU.<br />
        INU.
      </BrandText>
    </BrandWrapper>
  );
};

export default Brand;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45px;
  left: 38px;
`;

const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  width: 240px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 9px;
  &:nth-child(2) {
    width: 160px;
  }
  &:last-child {
    width: 80px;
  }
`;

const BrandWrapper = styled.div`
  position: relative;
  height: 320px;
`;

const BrandText = styled(Text)`
  color: #000457;
  /* word-break: keep-all; */
  letter-spacing: -0.5px;
  font-weight: 900;
  font-size: 78px;
  line-height: 1.2;
  position: absolute;
  z-index: 999;
  margin: 0;
  text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 9px;
`;
