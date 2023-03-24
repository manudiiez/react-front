import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */    
import styled from 'styled-components'
import CristaCard from './CristaCard'
import CristalCardHover from './CristalCardHover'

const CristalEffect = () => {
  return (
    <Container className='p-5'>
        <CristaCard/>
        <CristalCardHover/>
    </Container>
  )
}

export default CristalEffect

const Container = styled.div`
    

`
