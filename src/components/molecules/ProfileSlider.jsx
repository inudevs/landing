import React from 'react';
import { CircleSlider } from 'react-circle-slider';
import styled from 'styled-components';

class ProfileSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isStart: 0,
      isEnd: 0,
    };
  }

  handleChange = (value) => {
    console.log(`Changed value ${value}`);
    this.setState({ value });
  };

  handleChangeRange = (event) => {
    this.setState({
      value: event.target.valueAsNumber,
    });
  };

  Sliderspeed = () => {
    const { isStart } = this.state;
    if (isStart <= 50) {
      return 0.7 + ((0.7 / 50) * isStart);
    }
    if ((isStart >= 50) && (isStart <= 100)) {
      return 1.4 - ((0.7 / 75) * isStart);
    }
    return 0;
  }

  Anim(e) {
    setTimeout(() => {
      this.setState((prevState) => ({
        isStart: prevState.isStart + e,
        value: prevState.isStart,
      }));
    }, 10);

    const { isStart } = this.state;
    if (isStart >= 99) {
      this.setState({
        isEnd: 1,
      });
    }
  }

  render() {
    const { value, isStart, isEnd } = this.state;
    return (
      <>
        {
          isEnd === 0
            ? (
              <Logoslider>
                <CircleSlider value={value} onChange={this.handleChange} gradientColorTo="#F99F4D" gradientColorFrom="#C32E92" knobRadius="0" circleWidth="0" progressWidth="24" size="248" />
                {
                isStart < 100
                  ? <>{this.Anim(this.Sliderspeed())}</>
                  : <></>
              }
              </Logoslider>
            )
            : (
              <Logoslider>
                <FadeOut>
                  <CircleSlider value={100} onChange={this.handleChange} gradientColorTo="#F99F4D" gradientColorFrom="#C32E92" knobRadius="0" circleWidth="0" progressWidth="24" size="248" />
                </FadeOut>
              </Logoslider>
            )
        }
      </>
    );
  }
}

const Logoslider = styled.div`
  display: inline;
  position: absolute;
  margin-left: -4px;
`;

const FadeOut = styled.div`
  animation: fadeOut 1.2s;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  opacity: 0;
`;

export default ProfileSlider;
