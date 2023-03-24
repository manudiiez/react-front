import React from 'react'
import bg from './cool-background.png'
import profile from './horse-gb0ca8db37_640.jpg'
import icon from './hucha-con-monedas-de-dolar.png'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */    
import styled from 'styled-components'

const CristaCard = () => {
  return (
    <Container className='p-5'>
        <CardContainer>
            <div className="sidebar">
                <div className="profile-card">
                    <img src={profile}  alt="" />
                    <h2>Elon Musk</h2>

                    <ul>
                        <li><a href="#!">Today</a></li>
                        <li><a href="#!">Important</a></li>
                        <li><a href="#!">School</a></li>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">Work</a></li>
                    </ul>
                </div>
            </div>

            <div className="main">
                <div className="header">
                    <h2>Welcom back!</h2>
                    <span>April 15th, 2022</span>
                </div>
                <div className="task">
                    <div className="card-container">
                        <div className="content">
                            <div className="left">
                                <img src={icon} alt="" />
                            </div>
                            <div className="right">
                                <div className="task">Texto</div>
                                <div className="status">4 of 10 activities completed</div>
                                <div className="progress">
                                    <div className="fill fill-40"></div>
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="btns">Complete</button>
                        </div>
                    </div>
                </div>
                <div className="task">
                    <div className="card-container">
                        <div className="content">
                            <div className="left">
                                <img src={icon} alt="" />
                            </div>
                            <div className="right">
                                <div className="task">Texto</div>
                                <div className="status">4 of 10 activities completed</div>
                                <div className="progress">
                                    <div className="fill fill-20"></div>
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="btns">Complete</button>
                        </div>
                    </div>
                </div>
                <div className="task">
                    <div className="card-container">
                        <div className="content">
                            <div className="left">
                                <img src={icon} alt="" />
                            </div>
                            <div className="right">
                                <div className="task">Texto</div>
                                <div className="status">4 of 10 activities completed</div>
                                <div className="progress">
                                    <div className="fill fill-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>
    </Container>
  )
}

export default CristaCard

const Container = styled.div`
    
    width: 100%;
    min-height: 90vh;
    background: url(${bg});
    background-position: center;
    background-size: cover;

`

const CardContainer = styled.div`
    
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    border-radius: 5px;
    width: 80%;
    margin: 50px auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
    display: flex;

    .sidebar{
        background-color: rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 30%;

        ul{
            padding: 0;
            margin: 20px 0;
            list-style: none;
            text-align: left;

            li{
                a{
                    color: rgba(255, 255, 255, 0.8);
                    display: block;
                    text-decoration: none;
                    padding: 12px 10px;

                    &:hover{
                        color: #fff;
                        border-radius: 5px;
                        background-color: #0084ff;
                        box-shadow: 0 5px 10px 2px rgba(10, 137, 255, 0.5)
                    }
                }
            }
        }
        .profile-card{
            color: #fff;
            text-align: center;
            margin-top: 10px; 
            img{
                width: 100px;
                border-radius: 50%;
                box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.53);
            }
        }
    }
    
    .main{
        padding: 20px;
        width: 70%;

        .header{
            h2{
                color: rgba(0, 0, 0, 0.7);
                font-size: 48px;
                margin: 10px 0;
            }

            span{
                color: rgba(0, 0, 0, 0.5);
                font-size: 18px;
                margin: 10px 0;
                font-weight: bolder;
                display: block;
            }
        }

        .task{
            .card-container{
                border-radius: 5px;
                box-sizing: border-box;
                width: 100%;
                margin: 10px 0 20px 0;
                overflow: hidden;
                box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.15);

                .content{
                    display: flex;
                    align-items: center;
                    background: #fff;
                    padding: 20px;

                    .left{
                        padding-right: 15px;
                        img{
                            background-color: rgba(0, 0, 0, 0.1);
                            width: 100px;
                            border-radius: 50%;
                        }
                    }

                    .right{
                        width: 100%;
                        .task{
                            font-size: 22px;
                        }

                        .status{
                            padding: 5px 0;
                            font-size: 14px;
                            color: #888;
                        }

                        .progress{
                            background-color: #ddd;
                            width: 100%;
                            height: 10px;

                            .fill{
                                height: 10px;
                                margin: 0;

                                &.fill-20{
                                    background-color: rgb(255, 56, 21);
                                    width: 20%;
                                }

                                &.fill-40{
                                    background-color: rgb(255, 181, 21);
                                    width: 40%;
                                }
                                &.fill-100{
                                    background-color: rgb(87, 255, 21);
                                    width: 100%;
                                }
                            }
                        }
                    }
                }

                .buttons{
                    backdrop-filter: blur(5px);
                    text-align: right;
                    padding: 20px;

                    .btns{
                        background: #0084ff;
                        border: none;
                        font-weight: bolder;
                        color: #fff;
                        padding: 15px 20px;
                        border-radius: 5px;

                        &:hover{
                            background-color: #118cff;
                            box-shadow: 0 5px 10px 2px rgba(10, 137, 255, 0.5)
                        }

                    }
                }

            }
        }
    }



`