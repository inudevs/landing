import React, { useCallback, useEffect, useState } from 'react';
import { CircleSlider } from 'react-circle-slider';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const ProfileSlider = ({ className = '', history, route = '/' }) => {
  const [value, setValue] = useState(0);
  const [isStart, setIsStart] = useState(0);
  const [isEnd, setIsEnd] = useState(0);

  const handleChange = (val) => {
    console.log(`Changed value ${val}`);
    setValue(val);
  };

  const getSliderSpeed = useCallback(
    () => {
      if (isStart <= 50) {
        return 0.7 + ((0.7 / 50) * isStart);
      }
      if ((isStart >= 50) && (isStart <= 100)) {
        return 1.4 - ((0.7 / 75) * isStart);
      }
      return 0;
    },
    [isStart],
  );

  const animate = useCallback(
    () => {
      const sliderSpeed = getSliderSpeed();
      setTimeout(() => {
        setValue(isStart);
        setIsStart(isStart + sliderSpeed);
      }, 10);

      if (isStart >= 99) {
        setIsEnd(1);
      }
    },
    [getSliderSpeed, isStart],
  );

  useEffect(
    () => {
      if (isStart < 100) {
        animate();
      }
    },
    [isStart, animate, getSliderSpeed],
  );

  const onClickToHome = () => history.push(route);


  return (
    <Logoslider
      className={className}
      onClick={onClickToHome}
    >
      {
        isEnd === 0
          ? (
            <CircleSlider
              value={value}
              onChange={handleChange}
              gradientColorTo="#F99F4D"
              gradientColorFrom="#C32E92"
              knobRadius={0}
              circleWidth={0}
              progressWidth={24}
              size={240}
            />
          )
          : (
            <FadeOut>
              <CircleSlider
                value={100}
                onChange={handleChange}
                gradientColorTo="#F99F4D"
                gradientColorFrom="#C32E92"
                knobRadius={0}
                circleWidth={0}
                progressWidth={24}
                size={240}
              />
            </FadeOut>
          )
      }
    </Logoslider >
  );
};

const Logoslider = styled.div`
  filter: saturate(105%);
  z-index: 1;
  svg {
    padding: 0 !important;
  }
  &:hover{
    cursor:pointer;
  }
`;

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

export default withRouter(ProfileSlider);
