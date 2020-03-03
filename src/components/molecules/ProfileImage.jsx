import React from 'react';
import styled from 'styled-components';

import Image from '../atoms/Image';

import profileImage from '../../assets/profile.png';

const ProfileImage = () => (
  <FadeIn>
    <ProfileBorder>
      <Profile
        src={profileImage}
      />
    </ProfileBorder>
  </FadeIn>
);

export default ProfileImage;

const ProfileBorder = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background-image: linear-gradient(222deg, #c32e92, #dc316f, #f99f4d 85%);
  background-size: 200% 200%;
  box-shadow:
    25px 10px 50px 0 rgba(255, 0, 104, 0.25),
    25px 25px 50px 0 rgba(255, 58, 0, 0.2),
    -5px -5px 10px 0 #fff2fa;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: saturate(120%);
  margin-right: 2rem;
  animation: gradientAnimation 4s infinite alternate;
  animation: profileRotate 2.5s;

  @keyframes profileRotate {
    0% { transform: rotate(-360deg); }
  }

  @keyframes gradientanimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 10%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 635px) {
    margin-right: 0;
  }
`;

const Profile = styled(Image)`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  box-shadow: 10px 10px 16px 0 rgba(254, 151, 52, 0.45);
  filter: saturate(105%);
`;

const FadeIn = styled.div`
  animation: fadeIn 2.3s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
