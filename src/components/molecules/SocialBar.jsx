import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Text from '../atoms/Text';

import socials from '../../data/socials.json';

const SocialBar = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentTextHTML, setCurrentTextHTML] = useState('');

  useEffect(
    () => {
      setCurrentTextHTML(
        [
          '<strong>소셜 미디어</strong>로 더 큰 꿈을',
          ...socials.map(v => v.html),
        ][currentIdx],
      );
    },
    [currentIdx],
  );

  const onMouseOverIcon = (idx) => setCurrentIdx(idx);
  const onMouseOutIcon = () => setCurrentIdx(0);
  const onClickIcon = (url) => {
    const win = window.open(`${url}/inudevs`, '_blank');
    win.focus();
  };

  return (
    <Wrapper>
      <SocialContainer>
        {socials.map(({ url, color, icon }, idx) => (
          <SocialIcon
            key={`social-${idx}`}
            className={icon}
            color={color}
            onClick={() => onClickIcon(url)}
            onMouseOut={onMouseOutIcon}
            onMouseOver={() => onMouseOverIcon(idx + 1)}
          />
        ))}
      </SocialContainer>
      <SocialText
        dangerouslySetInnerHTML={{ __html: currentTextHTML }}
      />
    </Wrapper>
  );
};

export default SocialBar;

const Wrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SocialContainer = styled.div`
  margin-bottom: 0.35rem;
`;

const SocialIcon = styled.i`
  font-size: 2.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  color: #fafafa;
  text-shadow:
    5px 5px 15px rgba(0, 0, 0, 0.2),
    -8px -8px 8px #ffffff;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({ color }) => color && css`
      text-shadow:
        2px 2px 16px ${color},
        -5px -5px 5px #ffffff;
    `};
  }
`;

const SocialText = styled(Text)`
  font-size: 12px;
`;
