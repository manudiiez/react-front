import React, {useRef} from 'react'
import styled from 'styled-components'
import img from './stars-2643089_1280.jpg'


const TickedHover = () => {

  const wrapper = useRef()
  const ticket = useRef()

  const move = ({nativeEvent}) => {
    const {width, height} = wrapper.current.getBoundingClientRect()
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    console.log(halfWidth, halfHeight)
    const {offsetX, offsetY} = nativeEvent
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = -((offsetY - halfHeight) / halfHeight) * 10;
    ticket.current.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`
  }

  const onLeave = () => {
    ticket.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return (
    <Container>
      <div className="wrapper" onMouseMove={move} onMouseLeave={onLeave} ref={wrapper} >
        <div className="ticket" ref={ticket}>
          <h1>Ticked</h1>
        </div>
      </div>
    </Container>
  )
}

export default TickedHover

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${img});
  display: grid;
  place-content: center;
  box-sizing: border-box;

  .wrapper{
    perspective: 1000px;

    .ticket{
      box-shadow: 0  0 50px 5px rgba(0,0,0, .4);
      width: 600px;
      height: 300px;
      border-radius: 5px;
      border: 2px solid rgba(0, 153, 255, 0.435);
      position:relative;
      transition: transform .5s ease-in-out;  
      background-color: rgba(62, 65, 69, 0.3);
      backdrop-filter: blur(15px);

      h1{
        color: #fff;
        padding: 20px;
      }
      &:hover{
        transition: none;
      }
    }

  }

`