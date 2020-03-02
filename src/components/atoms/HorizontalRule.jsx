import styled from 'styled-components';

const HorizontalRule = styled.div`
  animation: widthAnimation 2s;
  height: 10px;
  width: 85%;
  max-width: 1145px;
  color: #FFFFFF;
  box-shadow:
    20px 10px 50px 0 rgba(209, 161, 178, 0.63),
    -5px -5px 10px 0 #fff2fa;
  border-radius: 5px;
  margin: 2.5rem 0;

  @keyframes widthAnimation {
    from { width: 0%; }
    to { width: 85%; }
  }
`;

export default HorizontalRule;
