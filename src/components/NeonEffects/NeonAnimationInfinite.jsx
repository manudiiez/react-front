import React from 'react'
import styled from 'styled-components'

const NeonAnimationInfinite = () => {
  return (
    <Container2 className="col-12">
        <div className="main-div main-div1">
          <p>Enjoy</p>
        </div>
        <div className="main-div main-div2">
          <p>Every</p>
        </div>
    </Container2>
  )
}

export default NeonAnimationInfinite

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .main-div {
    position: relative;
    margin: 10px;
    background-color: transparent;
    p {
      font-size: 50px;
      margin: 0;
      position: relative;
      z-index:11;
      padding: 20px;
      background-color: #060C1F;
      color: #fff;
      border-radius: 5px;
    }
  }
  .main-div1 {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 50%;
      box-shadow: 0 0 17px 3px #ffff01, 0 0 4px 2px #ffff01;
      z-index: 10;
      animation-name: yellow-shadow;
      animation-timing-function: ease;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      border-radius: 5px;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 50%;
      box-shadow: 0 0 17px 3px #0ff, 0 0 4px 2px #0ff;
      z-index: 10;
      animation-name: cyan-shadow;
      animation-timing-function: ease;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      border-radius: 5px;
    }

    @keyframes yellow-shadow {
      0% {
        top: 0;
        left: 0;
      }
      25% {
        top: 50%;
        left: 0;
      }
      50% {
        top: 50%;
        left: 50%;
      }
      75% {
        top: 0;
        left: 50%;
      }
      100% {
        top: 0;
        left: 0;
      }
    } 
  }

  .main-div2 {
    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
      z-index: 10;
      animation-name: gradient-shadow;
      animation-timing-function: ease;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      border-radius: 5px;

    }

    @keyframes gradient-shadow {
      0% {
        -webkit-box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
                box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      }
      20% {
        -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
                box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
      }
      40% {
        -webkit-box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
                box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
      }
      60% {
        -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
                box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
      }
      80% {
        -webkit-box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
                box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
      }
      100% {
        -webkit-box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
                box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      }
    }
  }


  
`;