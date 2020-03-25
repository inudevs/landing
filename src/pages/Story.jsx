import React from 'react';
import styled, { css } from 'styled-components';

import Page from '../components/atoms/Page';
import Header from '../components/templates/Header';
import Brand from '../components/molecules/Brand';
import LayeredText from '../components/molecules/LayeredText';
import Image from '../components/atoms/Image';

import drawArrows from '../assets/illusts/draw-arrows.png';
import drawCloud from '../assets/illusts/draw-cloud.png';
import drawFlask from '../assets/illusts/draw-flask.png';
import drawYellowUnderline from '../assets/illusts/draw-yellow-underline.png';

const StoryPage = () => {
  return (
    <Page>
      <Header />
      <Section>
        <CenterContainer>
          <ProfileImage
            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/88205483_639446300148891_496202815861948416_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=2U1Ozz-zg_oAX9QPqw3&_nc_ht=scontent-ssn1-1.xx&oh=34aaeeeba9cd6b5df2a606e031109af8&oe=5E9CD6B5"
          />
          <Title>
            아이디어로 실험하기
          </Title>
          <SubTitle centered>
            동아리원들의 아이디어를 현실로 이루는 실험.<br />
            한국디지털미디어고등학교 <strong>아이디어 실험 동아리, 이누</strong>.
            <FlaskIllust
              src={drawFlask}
            />
            <CloudIllust
              src={drawCloud}
            />
          </SubTitle>
        </CenterContainer>
      </Section>
      <Section>
        <LeftContent>
          <Title>그럴 때 있잖아요.</Title>
          <SubTitle>
            갑자기 머릿속에 아이디어가 떠올랐을 때!
          </SubTitle>
          <Paragraph>
            평소 느꼈던 자신 또는 타인의 불편함을 해결하기 위한 방법이나,<br />
            다른 사람들이 관심을 가지고 흥미로울 만한 컨텐츠,<br />
            아니면 그냥 한 번쯤은 이뤄 보고 싶은 목표.<br />
          </Paragraph>
        </LeftContent>
      </Section>
      <Section>
        <LeftContent>
          <Title>
            당신에게 빠져드는 방법.
          </Title>
          <SubTitle>
            사람들이 컨텐츠에 집중하게 하는 방법,<br />
            사람들을{' '}
            <RelativeSpan>
              이누의 브랜드
              <UnderlineImage
                src={drawYellowUnderline}
                alt="yellow underline"
              />
            </RelativeSpan>
            에 열광하게 만드는 방법.
          </SubTitle>
        </LeftContent>
        <BrandWrapper>
          <ArrawImage
            src={drawArrows}
            alt="arrows"
          />
          <Brand />
        </BrandWrapper>
      </Section>
      <Section>
        <Paragraph centered>
          작고 사소해 보이는 아이디어라도, <strong>열정</strong>만 있다면 현실로 만들 수 있습니다.<br />
          일상 속에서 영감을 받아 함께 아이디어를 생각하고, 발전시킵니다.<br />
          현실로 이루는 방법? 어렵지 않아요. 출발은 미미하지만 조금씩 성장해 가면 되죠.<br />
        </Paragraph>
      </Section>
    </Page>
  );
};

export default StoryPage;

const Section = styled.section`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 5rem 0;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    width: 95%;
  }

  @media (max-width: 738px) {
    flex-direction: column;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  width: 156px;
  height: 156px;
  margin-bottom: 1rem;
`;

const BrandWrapper = styled.div`
  padding: 0 3rem;
  padding-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Paragraph = styled(LayeredText)`
  font-size: 1.2rem;
  z-index: 999;
  margin-top: 1.2rem;

  ${({ centered }) => centered && css`
    text-align: center;
  `};
`;

const Title = styled(LayeredText)`
  font-size: 2.2rem;
  font-weight: 900;
  z-index: 999;
`;

const SubTitle = styled(LayeredText)`
  font-size: 1.35rem;
  z-index: 999;
  position: relative;

  ${({ centered }) => centered && css`
    text-align: center;
  `};
`;

const RelativeSpan = styled.span`
  position: relative;
`;

const ArrawImage = styled(Image)`
  width: 250px;
  height: auto;
  position: absolute;
  left: -125px;
  top: -45px;
`;

const UnderlineImage = styled(Image)`
  width: 125px;
  bottom: -12px;
  left: 0;
  right: 0;
  position: absolute;
`;

const FlaskIllust = styled(Image)`
  height: 128px;
  width: auto;
  right: -85px;
  top: -150px;
  position: absolute;
  transform: rotate(22deg);
`;

const CloudIllust = styled(Image)`
  width: 128px;
  height: auto;
  left: -40px;
  top: -150px;
  position: absolute;
  transform: rotate(-20deg);
`;
