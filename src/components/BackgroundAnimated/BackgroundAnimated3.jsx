import React from 'react'
import styled from 'styled-components'

const BackgroundAnimated3 = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className='stars'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
        <div className='title'>
          <span>PURE CSS</span>
          <br />
          <span>PARALLAX PIXEL BACKGROUND</span>
        </div>
      </div>
    </Container>
  )
}

export default BackgroundAnimated3

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  .wrapper{
    .title{
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      color: #fff;
      text-align: center;
      font-weight: 300;
      font-size: 50px;
      letter-spacing: 10px;
      margin-top: -60px;
      padding-left: 10px;
    }
  }
`