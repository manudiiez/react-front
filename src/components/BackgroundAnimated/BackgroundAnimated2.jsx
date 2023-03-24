import React from 'react'
import styled from 'styled-components'

const BackgroundAnimated2 = () => {
  return (
    <Container>
        <div className="container">
            <div className="bubbles">
                <span style={ { "--i": 11 } }></span>
                <span style={ { "--i": 12 } }></span>
                <span style={ { "--i": 24 } }></span>
                <span style={ { "--i": 10 } }></span>
                <span style={ { "--i": 14 } }></span>
                <span style={ { "--i": 23} }></span>
                <span style={ { "--i": 18 } }></span>
                <span style={ { "--i": 16 } }></span>
                <span style={ { "--i": 19 } }></span>
                <span style={ { "--i": 20 } }></span>
                <span style={ { "--i": 22 } }></span>
                <span style={ { "--i": 25 } }></span>
                <span style={ { "--i": 18 } }></span>
                <span style={ { "--i": 21 } }></span>
                <span style={ { "--i": 15 } }></span>
                <span style={ { "--i": 13 } }></span>
                <span style={ { "--i": 26 } }></span>
                <span style={ { "--i": 17 } }></span>
                <span style={ { "--i": 13 } }></span>
                <span style={ { "--i": 28 } }></span>
                <span style={ { "--i": 11 } }></span>
                <span style={ { "--i": 12 } }></span>
                <span style={ { "--i": 24 } }></span>
                <span style={ { "--i": 10 } }></span>
                <span style={ { "--i": 14 } }></span>
                <span style={ { "--i": 23} }></span>
                <span style={ { "--i": 18 } }></span>
                <span style={ { "--i": 16 } }></span>
                <span style={ { "--i": 19 } }></span>
                <span style={ { "--i": 20 } }></span>
                <span style={ { "--i": 22 } }></span>
                <span style={ { "--i": 25 } }></span>
                <span style={ { "--i": 18 } }></span>
                <span style={ { "--i": 21 } }></span>
                <span style={ { "--i": 15 } }></span>
                <span style={ { "--i": 13 } }></span>
                <span style={ { "--i": 26 } }></span>
                <span style={ { "--i": 17 } }></span>
                <span style={ { "--i": 13 } }></span>
                <span style={ { "--i": 28 } }></span>
            </div>
        </div>
    </Container>
  )
}

export default BackgroundAnimated2

const Container = styled.div`
    min-height: 80vh;
    background-color: #0c192c;

    .container{
        position: relative;
        width: 100%;
        height: 80vh;
        overflow: hidden;

        .bubbles{
            position: relative;
            display: flex;
            span{
                position: relative;
                width: 20px;
                height: 20px;
                background-color: #4fc3dc;
                margin: 0 4px;
                border-radius: 50%;
                box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
                animation: animate 15s linear infinite;
                animation-duration: calc(125s / var(--i));
                &:nth-of-type(even){
                    background-color: #ff2d75;
                    box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;

                }
            }
        }
    }

    @keyframes animate {
        0%{
            transform: translateY(100vh) scale(0);
        }
        100%{
            transform: translateY(-10vh) scale(1);
        }
    }

`