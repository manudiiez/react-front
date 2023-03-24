import React from 'react'
import styled from 'styled-components'
import BackgoundAnimated1 from './BackgoundAnimated1'
import BackgroundAnimated2 from './BackgroundAnimated2'
import BackgroundAnimated3 from './BackgroundAnimated3'

const BackgroundAnimated = () => {
  return (
    <Container className='container-lg'>
      <BackgoundAnimated1 />
      <BackgroundAnimated2 />
      <BackgroundAnimated3 />
    </Container>
  )
}

export default BackgroundAnimated

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 50px;

`