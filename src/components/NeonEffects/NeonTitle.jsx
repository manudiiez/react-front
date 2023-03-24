import React from "react";
import styled from "styled-components";

const NeonTitle = () => {
  return (
    <Container className="py-5 my-5">
      <div className="container">
        <div className="lightbar"></div>
        <div className="topLayer"></div>
        <h2>Neon Text</h2>
      </div>
    </Container>
  );
};

export default NeonTitle;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #060c1f;
    overflow: hidden;

    .container {
        position: relative;
        width: 600px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
        color: #fff;
        font-size: 5em;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
            0 0 80px #00b3ff, 0 0 120px #00b3ff;
        }

        .lightbar{
            position: absolute;
            top: 0;
            left: 0;
            width: 10px;
            height: 100%;
            border-radius: 10px;
            background: #fff;
            z-index: 2;
            box-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
            0 0 80px #00b3ff, 0 0 120px #00b3ff;
            animation: animatelightbar 5s linear infinite;
        }

        .topLayer{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #060c1f;
            animation: animatetoplayer 10s linear infinite;
        }
    }

    @keyframes animatelightbar {
        0%, 5%{
            transform: scaleY(0) translateX(0);
        }
        10%{
            transform: scaleY(1) translateX(0);
        }
        90%{
            transform: scaleY(1) translateX(calc(600px - 10px));
        }
        95%, 100%{
            transform: scaleY(0) translateX(calc(600px - 10px));
        }
    }
    @keyframes animatetoplayer {
        0%, 2.5%{
            transform: translateX(0);
        }
        5%{
            transform: translateX(0);
        }
        45%{
            transform: translateX(100%);
        }
        47.5%, 50%{
            transform: translateX(100%);
        }
        50.001%, 52.5%{
            transform: translateX(-100%);
        }
        55%{
            transform: translateX(-100%);
        }
        95%{
            transform: translateX(0%);

        }
        97.5%, 100%{
            transform: translateX(0%);
        }
    }
`;
