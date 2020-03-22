import styled from 'styled-components';

const Text = styled.span`
  line-height: 1.47;
  color: rgba(0, 0, 0, 0.95);
  user-select: none;
  text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
`;

export default Text;

export const TextWithButton = Text.withComponent('button');
