import styled from 'styled-components';

import Text from './Text';

const TextWithLink = Text.withComponent('a');

const Link = styled(TextWithLink)`
  cursor: pointer;
  color: #01356a;
  font-weight: bold;
  text-shadow: 3px 3px 15px rgba(0, 74, 150, 0.29);
  text-decoration: none;
`;

export default Link;
