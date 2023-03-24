import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const SliderItem2 = () => {

  const [page, setPage] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionXInicial, setPositionXInicial] = useState(0);

  const slideshow = useRef(null)

  const dragStartItem = (event) => {
    const localX = event.clientX - event.target.offsetLeft;
    setPositionXInicial(localX)
  }
  const dragItem = (event) => {
    const localX = event.clientX - event.target.offsetLeft;
    if (localX > positionXInicial) {
      console.log('Hacia la izquierda');
      move(positionXInicial - localX, false)
    } else if (localX < positionXInicial) {
      console.log('Hacia la derecha');
      move(positionXInicial - localX, true)
    } else {
      console.log('Quieto');
    }
    setPositionX(localX)
  }

  const dropItem = (event) => {
    const localX = event.clientX - event.target.offsetLeft;
    console.log('posicion incial', positionXInicial);
    console.log('posicion final', localX);
    if (localX - 200 > positionXInicial) {
      console.log('pasar');
      anterior()
    } else if (localX + 200 < positionXInicial) {
      console.log('pasar');
      siguiente()
    } else {
      moveEnd()
    }
  }

  const move = (move, direction) => {
    slideshow.current.style.transition = `.15s ease-out all`;
    slideshow.current.style.transform = `translateX(${direction ? '-' : ''}${move}px)`
  }

  const moveEnd = () => {
    slideshow.current.style.transition = `.15s ease-out all`;
    slideshow.current.style.transform = `translateX(0)`
  }

  const siguiente = () => {
    const primerElemento = slideshow.current.children[0]
    slideshow.current.style.transition = `1s ease-out all`;
    slideshow.current.style.transform = `translateX(-${primerElemento.offsetWidth}px)`
    const transicion = () => {
      slideshow.current.style.transition = 'none';
      slideshow.current.style.transform = `translateX(0)`;
      slideshow.current.appendChild(primerElemento);
      slideshow.current.removeEventListener('transitionend', transicion);
    }
    slideshow.current.addEventListener('transitionend', transicion);
  }

  const anterior = () => {
    const index = slideshow.current.children.length - 1;
    const ultimoElemento = slideshow.current.children[index];
    slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
    
    slideshow.current.style.transition = 'none';
    const tamañoSlide = slideshow.current.children[0].offsetWidth;
    slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
    
    setTimeout(() => {
        slideshow.current.style.transition = `1s ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
    }, 30);
}

  return (
    <Container>
      <h1>Slider con arrastre</h1>
      <div className="slider">
        <div className="itemList" ref={slideshow} draggable='true' onDragStart={dragStartItem} onDrag={dragItem} onDragEnd={dropItem}>
          <div className="item" draggable='true' >
            <img draggable='true' src="https://i0.wp.com/www.viviendoencasa.mx/wp-content/uploads/2022/08/Ideas-de-portadas-para-cuaderno-7.jpg?fit=1280%2C720&ssl=1" alt="" />
          </div>
          <div className="item" draggable='true'>
            <img draggable='true' src="https://static.vecteezy.com/system/resources/previews/016/467/565/non_2x/classical-book-cover-decorative-vintage-frames-or-borders-to-be-printed-on-the-book-covers-invitations-brochures-journals-silhouette-leaf-decoration-vector.jpg" alt="" />
          </div>
          <div className="item"  draggable='true' >
            <img draggable='true' src="https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/f6/98/cl-ds-1643646904-portadas-cuadernos_ver_1.jpg" alt="" />
          </div>
          <div className="item" draggable='true' >
            <img draggable='true' src="https://img.freepik.com/vector-gratis/conjunto-portadas-arte-abstracto-dibujado-mano_23-2148970324.jpg" alt="" />
          </div>
        </div>

        <div className="pagination">
          <span className={page === 1 ? 'active' : ''}></span>
          <span className={page === 2 ? 'active' : ''}></span>
          <span className={page === 3 ? 'active' : ''}></span>
          <span className={page === 4 ? 'active' : ''}></span>
        </div>
      </div>
    </Container>
  )
}

export default SliderItem2

const Container = styled.div`
    h1{
        text-align: center;
    }

    .slider{
        overflow: hidden;
        .itemList{
            display: grid;
            grid-template-columns: repeat(4, 100%);
            .item{
                font-size: 42px;
                font-weight: 700;
                cursor: grab;
                width: 100%;
                height: 400px;
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        .pagination {
            width: 100%;
            display: flex;
            justify-content: center; 
            align-items: center;
            gap: 10px;
            margin-top: 20px;
            span{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: black;

                &.active{
                    background-color: red;
                }
            }
        }
    }

`