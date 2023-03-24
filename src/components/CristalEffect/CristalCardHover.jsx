import React from 'react'
import styled from 'styled-components'

const CristalCardHover = () => {
  return (
    <Container className='py-5 my-5'>
        <div className="row px-2 py-3">
            <div className="col-6">
                <h1>Hi I'm manuel</h1>
            </div>
            <div className="col-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
    </Container>
  )
}



export default CristalCardHover

const Container = styled.div`

    width: 100%;
    background-color: #212429;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .row{
        justify-content: center;
        align-items: center;
        max-width: 400px;
        background: linear-gradient(101deg,rgba(245,247,250,.12),rgba(245,247,250,.06) 52%, rgba(245, 247, 250, 0.1) 100%);
        backdrop-filter: blur(40px);
        border-radius: 10px;
        box-shadow: 8px 8px 24px 0 rgba(9,13,20,0.4),-4px -4px 8px 0 rgba(224,224,255,0.04),0 1px 1px 0 rgba(9,13,20,0.4);
        h1{
            color: #fff;
        }

        p{
            color: #E0E0FF;
        }

        &:hover{
            background: linear-gradient(113deg,#0fa,#4579f5 53%,#9c42f5);
        }
    }

`