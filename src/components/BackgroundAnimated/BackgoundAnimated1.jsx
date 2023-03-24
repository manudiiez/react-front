import React from 'react'
import styled from 'styled-components'


const BackgoundAnimated1 = () => {
  return (
    <Container className='my-5'>
        <div className="header_nav">
            <div className="contenedor">
                <h1>Effecto burbuja</h1>
            </div>
        </div>

        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
    </Container>
  )
}

export default BackgoundAnimated1

const Container = styled.div`
    
    width: 100%;
    height: 50vh;
    background-color: linear-gradient(90deg, #005c98 0%, #505bda 100%);
    background: linear-gradient(90deg, #005c98 0%, #505bda 100%);
    position: relative;
    overflow: hidden;


    .header_nav{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2{
            font-family: 'Gagalin';
        }
    }

    
    .burbuja{ 
        width: 80px;
        height: 80px;
        background-color: #fff;
        opacity: .3;
        border-radius: 50%;

        position: absolute;
        bottom: -150px;
        left: 5%;
        animation: burbujas 3s linear infinite;
        animation-delay: 3s;


        &:nth-child(2){
            height: 100px;
            width: 100px;
            left: 35%;
            animation-delay: 5s;
            
        }
        &:nth-child(3){
            height: 80px;
            width: 80px;
            left: 55%;
            animation-delay: 3s;

        }
        &:nth-child(4){
            height: 120px;
            width: 120px;
            left: 75%;
            animation-delay: 4s;

        }

    }
    @keyframes burbujas {
        0%{
            bottom: 0;
            opacity: 0;
        }
        30%{
            transform: translateX(30px);
        }
        50%{
            opacity: .4;
        }
        100%{
            bottom: 100%;
            opacity: 0;
        }
    }

`