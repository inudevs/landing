import React from "react";
import { CircleSlider } from "react-circle-slider";
import styled from 'styled-components';

class ProfileSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      Isstart: 0,
      Isend: 0,

      addvalue: 0.7
    };
  }

  handleChange = value => {
    console.log(`Changed value ${value}`);
    this.setState({ value });
  };

  handleChangeRange = event => {
    this.setState({
      value: event.target.valueAsNumber,
    });
  };

  Anim(e) {
    setTimeout(function () {
      this.setState({ Isstart: this.state.Isstart + e, value: this.state.Isstart });
    }.bind(this), 10)
    if (this.state.Isstart >= 99) {
      this.setState({
        Isend: 1
      });
    }
  }

  Sliderspeed = () => {
    if (this.state.Isstart <= 50) {
      return (
        0.7 + (0.7 / 50 * this.state.Isstart)
      )
    } else if (50 <= this.state.Isstart <= 100) {
      return (
        1.4 - (0.7 / 75 * this.state.Isstart)
      )
    }
  }

  render() {
    const { value, Isstart, Isend } = this.state;
    return (
      <>
        {
          Isend === 0
            ?
            <Logoslider>
              <CircleSlider value={value} onChange={this.handleChange} gradientColorTo="#F99F4D" gradientColorFrom="#C32E92" knobRadius="0" circleWidth="0" progressWidth="24" size="248" />
              {
                Isstart < 100
                  ? <>{this.Anim(this.Sliderspeed())}</>
                  : <></>
              }
            </Logoslider>
            : <Logoslider>
              <FadeOut>
                <CircleSlider value={100} onChange={this.handleChange} gradientColorTo="#F99F4D" gradientColorFrom="#C32E92" knobRadius="0" circleWidth="0" progressWidth="24" size="248" />
              </FadeOut>
            </Logoslider>
        }
      </>
    );
  }
}

const Logoslider = styled.div`
    display:inline;
    position:absolute;
    margin-top:2.5px;
    margin-left:-4px;
    @media all and (max-width:768px) {
        margin-top:-4px;
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
  animation:fadeOut 2.2s;

  @keyframes fadeOut {
    from{
        opacity:1
    }

    to{
        opacity:0
    }
  }
  opacity:0;
`;

export default ProfileSlider;
