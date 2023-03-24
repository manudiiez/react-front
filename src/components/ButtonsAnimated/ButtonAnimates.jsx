import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ButtonAnimates = () => {
  return (
    <Container className='container-lg'>
        <div className="titleContainer d-flex justify-content-center align-items-center">
            <h1>Bottones Animados</h1>
        </div>
        <div className="containerButtons mt-5">
            <ButtonUno className='boton'><span>BOTON</span></ButtonUno>
            <ButtonDos className='boton'><span>BOTON</span></ButtonDos>
            <ButtonTres className='boton'><span>BOTON</span></ButtonTres>
            <ButtonCuatro className='boton'><span>BOTON</span></ButtonCuatro>
            <ButtonCinco className='boton'>
                <div className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </div>
                <span className='text'>BOTON</span>
            </ButtonCinco>
            <ButtonSeis className='boton'>
                <span>BOTON</span>
                <svg>
                    <rect x="0" y="0" fill='none'></rect>
                </svg>
            </ButtonSeis>
            <ButtonSiete className='boton'><span>BOTON</span></ButtonSiete>


        </div>
    </Container>
  )
}

export default ButtonAnimates

const Container = styled.div`
    
    .titleContainer{
        border: 1px solid #000;
        padding: 15px;
    }

    .containerButtons{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    .boton{
        display: inline-flex;
        width: 100%;
        height: 80px;
        background-color: #141414;
        color: #fff;
        font-size: 20px;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        transition: .3s ease all;
        border-radius: 5px;
        position: relative;
        overflow: hidden;

        span{
            position: relative;
            z-index: 2;
            transition: .3s ease all;
        }
    }

`

const ButtonUno = styled.button`
    
    &::after{
        content: '';
        width: 100%;
        height: 100%;
        background-color: #c4b107;
        position: absolute;
        z-index: 1;
        top: -80px;
        left: 0;
        /* EASE-IN-OUT: entra despacio, a la mitad acelera, al final vuelve a ir lento */
        transition: .4s ease-in-out all;
    }

    &:hover{
        &::after{
            top: 0;
        }
    }

`

const ButtonDos = styled.button`

    &::after{
        content: '';
        width: calc(100% + 80px);
        position: absolute;
        z-index: 1;
        top: 0;
        left: calc(-100% - 80px);

        border-right: 80px solid transparent;
        border-bottom: 80px solid #286cff;

        transition: .4s ease-in-out all;

    }

    &:hover{
        &::after{
            left: 0;
        }
    }

`

const ButtonTres = styled.button`

    &::after{
        content: '';
        width: 100%;
        height: 300px;
        background-color: #18a362;
        position: absolute;
        z-index: 1;
        top: -300px;
        left: 0;
        /* EASE-IN-OUT: entra despacio, a la mitad acelera, al final vuelve a ir lento */
        transition: .3s ease-in-out all;

        border-radius: 0px 0px 300px 300px;
    }

    &:hover{
        &::after{
            top: 0;
        }
    }  


`

const ButtonCuatro = styled.button`
    
    &::after{
        content: '';
        width: 1px;
        height: 1px;
        background-color: none;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        /* EASE-IN-OUT: entra despacio, a la mitad acelera, al final vuelve a ir lento */
        transition: .4s ease-in-out all;
        border-radius: 50%;
        transform-origin: center;
    }

    &:hover{
        background-color: #960909;

        &::after{
            transform: scale(400);
            background-color: #cc1010;
        }
    }

`

const ButtonCinco = styled.button`
    span{
        transition: .4s all ease-in-out;
        position: absolute!important;
        left: 40%!important;
    }

    .icono{
        display: flex;
        align-items: center;
        position: absolute;
        z-index: 2;
        left: -40px;
        transition: .3s ease-in-out all;
        opacity: 0;
        svg{
            color: #fff;
            width: 35px;
            height: 35px;
        }
    }
    
    &:hover{

        background-color: #2f9b05;

        span{
            left: 20px!important;
        }

        .icono{
            left: calc(100% - 50px);
            opacity: 1;
        }
    }


`

const ButtonSeis = styled.button`

    background: none!important;
    color: #000!important;

    svg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        fill: none;

        rect{
            width: 100%;
            height: 100%;
            stroke: #000;
            stroke-width: 10px;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            transition: .6s ease all;
        }
    }

    &:hover{
        svg{
            rect{
                stroke-dashoffset: 0;
            }
        }
    }

`

const ButtonSiete = styled.button`
    
    &::after{
        content: '';
        width: 100%;
        height: 50%;
        background-color: #c407c1;
        position: absolute;
        z-index: 1;
        top: 0;
        left: -100%;
        /* EASE-IN-OUT: entra despacio, a la mitad acelera, al final vuelve a ir lento */
        transition: .4s ease-in-out all;
    }

    &::before{
        content: '';
        width: 100%;
        height: 50%;
        background-color: #c407c1;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 100%;
        /* EASE-IN-OUT: entra despacio, a la mitad acelera, al final vuelve a ir lento */
        transition: .4s ease-in-out all;
    }

    &:hover{
        &::after{
            left: 0;
        }
        &::before{
            left: 0;     
        }
    }

`