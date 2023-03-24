import React from 'react'
import styled from 'styled-components'

const NeonCardHover = () => {
  return (
    <Container className='py-5 my-5'>
        <div className="card__container">
            <div className="face face1">
                <div className="content">
                    <i className="fab fa-windows"></i>            
                    <h3>Windows</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
                    <a href="#" type="button">Read More</a>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default NeonCardHover

const Container = styled.div`
    
    .card__container{
        position: relative;
        width:300px;
        height: 200px;
        
        .face{
            height: 200px;
            transition:.4s;

            &.face1{
                position: relative;
                background-color: #050917;
                display: flex;
                justify-content: center;
                align-content:center;
                align-items: center;
                z-index: 1;
                transform: translateY(100px);

                .content{
                    opacity: .2;
                    transition:  0.5s;
                    text-align: center;

                    i{
                        font-size: 3em;
                        color: white;
                        display: inline-block;
                    }

                    h3{
                        font-size: 1em;
                        color: white;
                        text-align: center;
                    }

                    a{
                        transition: .5s;
                    }
                }
            }
            &.face2{
                position: relative;
                background: whitesmoke;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                box-sizing: border-box;
                box-shadow: 0 20px 50px rgba(0,0,0,.8);
                transform: translateY(-100px);

                .content{
                    p, a{
                        font-size: 10pt;
                        margin: 0 ;
                        padding: 0;
                        color:#333;
                    }

                    a{
                        text-decoration:none;
                        color: black;
                        box-sizing: border-box;
                        outline : 1px dashed #333;
                        padding: 10px;
                        margin: 15px 0 0;
                        display: inline-block;

                        &:hover{
                            background: #333 ;
                            color: whitesmoke; 
                            box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
                        }
                    }
                }
            }
        }

        &:hover{
            .face{
                &.face1{
                    transform: translateY(0);
                    box-shadow:
                        inset 0 0 60px whitesmoke,
                        inset 20px 0 80px #f0f,
                        inset -20px 0 80px #0ff,
                        inset 20px 0 300px #f0f,
                        inset -20px 0 300px #0ff,
                        0 0 50px #fff,
                        -10px 0 80px #f0f,
                        10px 0 80px #0ff;

                    .content{
                        opacity: 1;
                    }
                }
                &.face2{
                    transform: translateY(0);
                }
            }
        }
    }

`