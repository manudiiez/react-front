import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const NeonMediaItem = () => {
  return (
    <Container className='mt-5 pt-5'>
        <div className="btn2 fb-btn">
            <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="btn2 ig-btn">
            <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="btn2 tw-btn">
            <FontAwesomeIcon icon={faHome} />
        </div>
    </Container>
  )
}

export default NeonMediaItem

const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .btn2{
        width: 100px;
        height: 100px;
        background-color: #050917;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2em;
        margin-right: 1em;
        cursor: pointer;
        transition: all 0.3s;
        border-radius: 10px;

        svg{
            font-size: 44px;
        }

        &.fb-btn{

            box-shadow: 0 20px 20px -17px rgba(0,111,255,0.53);
        
            svg{
                color: #006fff;
                text-shadow: 0 0 30px #006fff;
            }    

            &:hover{
                transform: scale(1.2);
                box-shadow: 0 30px 45px -15px rgba(0,111,255,0.65);
            }
        }
        &.ig-btn{

            box-shadow: 0 20px 20px -17px rgba(255,16,39,0.5);


            svg{
                color: #ff5f40;
                text-shadow: 0 0 30px #ff5f40;
            }    

            &:hover{
                transform: scale(1.2);
                box-shadow: 0 30px 45px -15px rgba(255,16,39,0.57);
            }
        }
        &.tw-btn{

            box-shadow: 0 20px 20px -17px rgba(0,255,255,0.53);

            svg{
                color: #00acff;
                text-shadow: 0 0 30px #00acff;
            }    
            &:hover{
                transform: scale(1.2);
                box-shadow: 0 30px 45px -15px rgba(0,111,255,0.6);
            }
        }

        
    }

`