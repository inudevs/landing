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
import ideaIllust from '../assets/illusts/idea.png';
import note1 from '../assets/note1.jpeg';
import note2 from '../assets/note2.jpeg';
import project1 from '../assets/projects/deliveries.png';
import project2 from '../assets/projects/iceteam2.png';
import project3 from '../assets/projects/gifty.jpg';
import socialIllust from '../assets/social.png';
import dev from '../assets/dev.png';
import prize from '../assets/prize.png';

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
        <IdeaIllust src={ideaIllust} />
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
        <CenterContainer>
          <div style={{marginBottom: '1.2rem'}}>
            <NotionImage src={note1} />
            <NotionImage src={note2} />
          </div>
          <CenterContainer>
            <Title>
              이루고, 누리다.
            </Title>
            <SubTitle centered>
              모든 구성원이 각자의 생각을 현실로 이루어내고,<br />
              다른 사람들과 함께 누릴 수 있도록.<br />
              이누와 함께라면 단순히 서비스를 만드는 것을 넘어,<br />
              실제로 사람들에게 제공하고 반응을 살펴볼 수 있어요.<br />
            </SubTitle>
          </CenterContainer>
        </CenterContainer>
      </Section>
      <Section>
        <Paragraph centered>
          작고 사소해 보이는 아이디어라도, <strong>열정</strong>만 있다면 현실로 만들 수 있습니다.<br />
          일상 속에서 영감을 받아 함께 아이디어를 생각하고, 발전시킵니다.<br />
          현실로 이루는 방법? 어렵지 않아요. 출발은 미미하지만 조금씩 성장해 가면 되죠.<br />
        </Paragraph>
      </Section>
      <Section>
        <CenterContainer>
          <Title>데브옵스, 직접 운영하니까요.</Title>
          <SubTitle>
            최근 실리콘밸리 기업들이 차례로 적용하여 화제가 된 '데브옵스'를 아시나요?
          </SubTitle>
          <Paragraph>
            개발과 운영이 합쳐진 조직 문화를 만드는 것에 대한 소프트웨어 개발 방법론입니다.<br />
            아무리 멋진 서비스라도, 스스로 알리지 않는다면 아무도 알아주지 않는 법이죠.<br />
            실제 사용자의 입장에서 제품을 바라본다면 다를 수 있기 때문에 '데브옵스'를 도입,<br />
            빠르게 개발한 서비스를 직접 홍보하고 운영해 나가며 피드백을 받고 있습니다.<br />
            그렇기 때문에 더 깊이, 더 넓게, 그리고 더 빨리 많은 것들을 배울 수 있죠.
          </Paragraph>
        </CenterContainer>
      </Section>
      <Section>
        <CenterContainer>
          <img src={prize} style={{width: '512px'}} />
          <SubTitle centered style={{fontWeight: 500}}>
            동아리 내부에서 떠올린 아이디어를 실험을 통해 구체화했다면,<br />
            이제 더욱 확실히 검증할 차례입니다.
          </SubTitle>
          <Title>
            대외활동으로 검증과 자극을.
          </Title>
          <Paragraph centered>
            이누는 자율동아리로 시작된 작년부터 구성원 모두가 새로운 자극과 동기부여를 받아,<br />
            스스로를 발전시킬 수 있도록 다양한 외부활동에 적극적으로 참여하고 있습니다.<br /><br />
            <span style={{fontSize: '45px', textShadow: '0 1px 12px rgba(181,122,6, 0.8)'}}>🎖</span><br />
            개인별 소속 및 이누 동아리 소속으로,<br />
            <span style={{fontWeight: 600, textShadow: '0 1px 12px rgba(181,122,6, 0.8)'}}>서울 하드웨어 해커톤, Junction X Seoul, 비즈쿨 고등학생 기업가정신 캠프, 대한민국 융합 해커톤 등</span><br />
            규모 있는 여러 해커톤의 본선에 당당히 진출했으며,<br /><br />
            <span style={{fontSize: '45px', textShadow: '0 1px 12px rgba(245, 136, 0, 0.8)'}}>🏆</span><br />
            <span style={{fontWeight: 600, textShadow: '0 1px 12px rgba(245, 136, 0, 0.8)'}}>화성시 동탄 ICT 메이커톤(1위), 제 19회 앱잼(1위), 방구석 메이커톤(1위), 하모니 해커톤(2위), 충남 빅싱킹 아이디어 해커톤(4위) 등</span><br />
            다수의 수상실적을 이뤄냈습니다.<br /><br />
            작년 7월에는 이누 동아리 내부에서 총 10명이 참가한 삼성 스마트해커톤 본선에서<br />
            단체로 우수한 실적을 거둬, <strong>삼성 SDS 본사로 초청</strong>되기도 했습니다.<br /><br />
          </Paragraph>
        </CenterContainer>
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
        <img src={socialIllust} style={{width: '312px', marginRight: '20px'}} />
        <LeftContent>
          <Title>사회 기여와 브랜딩.</Title>
          <SubTitle>
            이누는 동아리 자체의 브랜딩과 SNS 채널을 통한 사회 기여에도 힘쓰고 있습니다.<br />
            작년부터 페이스북에 동아리 실적과 함께,<br />
            동아리원들의 아이디어를 카드 뉴스 등의 형태로 공유해 왔습니다.
          </SubTitle>
          <Paragraph>
            올해부터는 특히 기존 실적 중심 컨텐츠보다, 동아리원들이 직접 서비스를 개발하며 공부한<br />
            개념들을 설명하는 컨텐츠를 중심으로 게시하고 있습니다.<br />
            다양한 주제를 다뤄 동아리원들의 필수 소양과 컨텐츠 기획력을 높일 수 있었고,<br />
            국/내외 현업 개발자 및 디자이너, 브랜딩 업무 등에 종사하는 기획자분들과<br />
            다른 학교 학생들까지 페이지를 구독하며 동아리의 활동에 활발히 호응해주고 있습니다.
          </Paragraph>
        </LeftContent>
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

const IdeaIllust = styled.img`
  width: 312px;
  margin-right: 15px;
`;

const NotionImage = styled.img`
  width: 412px;

  &:first-of-type {
    margin-right: 2rem;
  }
`;

const ProjectImage = styled.img`
  width: 256px;
`;
