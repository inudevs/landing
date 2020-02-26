import styled from 'styled-components';

import Text from '../atoms/Text';

const LayeredText = styled(Text)`
  text-shadow:
    5px 5px 15px rgba(0, 0, 0, 0.28),
    -3px -3px 15px #ffffff;
`;

export default LayeredText;
