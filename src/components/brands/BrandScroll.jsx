import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const BrandScroll = () => {

  const elementHeader = useRef(null)

  const onScroll = (event) =>{
    console.log(event);
    const header = elementHeader.current;
    header.classList.toggle('sticky', window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <Container>
      <header ref={elementHeader}>
        <a href="#!" className='logo'>Brand.</a>
        <nav>
          <ul>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">About</a></li>
            <li><a href="#!">Services</a></li>
            <li><a href="#!">Portfolio</a></li>
            <li><a href="#!">Team</a></li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </nav>
      </header>
    </Container>
  )
}

export default BrandScroll

const Container = styled.div`
  box-sizing: border-box;
  height: 300vh;
  background-color: red;

  header{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 0 100px;
    background-color: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 1s;

    &.sticky{
      height: 80px;

      .logo{
        position: absolute;
        font-size: 2em;
        left: 100px;
        transform: translate(-50%, -50%)
      }
      nav{
        ul{
          transform: translateX(0);
          opacity: 1;
          transition-delay: 0.75s;
        }
      }
    }

    .logo{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 15vw;
      color: #fff;
      font-weight: 700;
      transition: 1s;
      text-decoration: none;
      z-index: 1;
    }

    nav{
      position: relative;
      display: flex;
      z-index: 1;

      ul{
        position: relative;
        display: flex;
        transition: 0.25s;
        transform: translateX(100px);
        opacity: 0;
        li{
          list-style: none;
          a{
            color: #fff;
            display: inline-block;
            padding: 10px 15px;
            font-size: 1.2em;
            text-decoration: none;

            &:hover{
              color: #ff275f;
            }

          }
        }
      }
    }

  }


`