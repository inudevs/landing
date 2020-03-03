import React, { useEffect, useState, useMemo } from 'react';
import styled, { css } from 'styled-components';

import Text, { TextWithButton } from '../atoms/Text';

import socials from '../../data/socials.json';

const SocialBar = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentTextHTML, setCurrentTextHTML] = useState('');

  const mappedSocialTextHTML = useMemo(
    () => [
      '<strong>소셜 미디어</strong>로 더 큰 꿈을',
      ...socials.map((v) => v.html),
    ],
    [],
  );

  useEffect(
    () => setCurrentTextHTML(
      mappedSocialTextHTML[currentIdx],
    ),
    [currentIdx, mappedSocialTextHTML],
  );

  const onMouseOverIcon = (idx) => setCurrentIdx(idx);

  const onMouseOutIcon = (event) => {
    event.stopPropagation();
    const element = event.target || event.srcElement;
    if (element.id === 'dvRep') {
      setCurrentIdx(0);
    }
  };

  const onClickIcon = (url) => {
    const win = window.open(`${url}/inudevs`, '_blank');
    win.focus();
  };

  return (
    <Wrapper
      onMouseOut={onMouseOutIcon}
      onBlur={onMouseOutIcon}
    >
      <SocialContainer>
        {socials.map(({ url, color, icon }, idx) => (
          <SocialButton
            onClick={() => onClickIcon(url)}
            onMouseOver={() => onMouseOverIcon(idx + 1)}
            onFocus={() => onMouseOverIcon(idx + 1)}
            color={color}
          >
            <SocialIcon
              key={`social-${idx}`}
              className={icon}
            />
          </SocialButton>
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
  display: flex;
`;

const SocialButton = styled(TextWithButton)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-left: 0.5rem;
  background: linear-gradient(to top left, #caced4, #f0f5fd);
  box-shadow:
    6px 6px 13px #bec3c9,
    -6px -6px 13px #ffffff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: linear-gradient(to top left, #f0f5fd, #caced4);
    box-shadow:
      6px 6px 13px #bec3c9,
      -6px -6px 13px #ffffff;

    i {
      ${({ color = 'black' }) => color && css`
        color: ${color};
        text-shadow: 1px 1px 24px ${color};
      `};
    }
  }
`;

const SocialIcon = styled.i`
  font-size: 1.1rem;
  color: #4D5966;
  transition: all 0.2s ease-in-out;
`;

const SocialText = styled(Text)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);

  strong {
    ${({ color }) => color && css`
      color: ${color};
    `}
  }
`;
