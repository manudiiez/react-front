import React from 'react'
import styled from 'styled-components'

const ThemeItem = ({change}) => {
  return (
    <Container>
        <button onClick={change}>toggleTheme</button>
        <p>Text</p>
    </Container>
  )
}

export default ThemeItem


const Container = styled.div`
    width: 100%;
    height: 90vh;
    transition: all .15s linear;
    background-color: ${({theme}) => theme.colors.background};

    display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center;
    font-size: 5rem;
    color: ${({theme}) => theme.colors.text2};

`