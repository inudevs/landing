import React, { useState, useEffect } from 'react';
import { CircleSlider } from 'react-circle-slider';
import styled from 'styled-components';

const ProfileSlider = () => {
  const [value, setValue] = useState(0);
  const [isStart, setIsStart] = useState(0);
  const [isEnd, setIsEnd] = useState(0);

  const handleChange = (val) => {
    console.log(`Changed value ${val}`);
    setValue(val);
  };

  const getSliderSpeed = () => {
    if (isStart <= 50) {
      return 0.7 + ((0.7 / 50) * isStart);
    }
    if ((isStart >= 50) && (isStart <= 100)) {
      return 1.4 - ((0.7 / 75) * isStart);
    }
    return 0;
  };

  const animate = (e) => {
    setTimeout(() => {
      setValue(isStart);
      setIsStart(isStart + e);
    }, 10);

    if (isStart >= 99) {
      setIsEnd(1);
    }
  };

  return (
    <>
      {
        isEnd === 0
          ? (
            <Logoslider>
              <CircleSlider
                value={value}
                onChange={handleChange}
                gradientColorTo="#F99F4D"
                gradientColorFrom="#C32E92"
                knobRadius="0"
                circleWidth="0"
                progressWidth="24"
                size="248"
              />
              {isStart < 100
                && <>{animate(getSliderSpeed())}</>}
            </Logoslider>
          )
          : (
            <Logoslider>
              <FadeOut>
                <CircleSlider
                  value={100}
                  onChange={handleChange}
                  gradientColorTo="#F99F4D"
                  gradientColorFrom="#C32E92"
                  knobRadius="0"
                  circleWidth="0"
                  progressWidth="24"
                  size="248"
                />
              </FadeOut>
            </Logoslider>
          )
      }
    </>
  );
};

const Logoslider = styled.div`
  display: inline;
  position: absolute;
  margin-left: -4px;

  @media all and (max-width:768px) {
    margin-top: -4px;
    margin-left: -0.3px;
  }
`;

// const ProfileBorder = styled.div`
//   width: 15rem;
//   height: 15rem;
//   border-radius: 50%;
//   background-image: linear-gradient(222deg, #c32e92, #dc316f, #f99f4d 85%);
//   box-shadow:
//     25px 10px 50px 0 rgba(255, 0, 104, 0.25),
//     25px 25px 50px 0 rgba(255, 58, 0, 0.2),
//     -5px -5px 10px 0 #fff2fa;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   filter: saturate(120%);
//   margin-right: 2rem;
//   @media (max-width: 635px) {
//     margin-right: 0;
//   }
// `;

const FadeOut = styled.div`
  animation: fadeOut 1.2s;
  opacity: 0;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default ProfileSlider;
