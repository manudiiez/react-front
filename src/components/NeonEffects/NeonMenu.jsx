import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrows,
  faBitcoinSign,
  faGlobe,
  faHome,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

const NeonMenu = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faArrows} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faBitcoinSign} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faRepeat} />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default NeonMenu;

const Container = styled.div`
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        li {
            list-style: none;
            margin: 0 15px;
        a {
            position: relative;
            display: block;
            width: 60px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            background: #171515;
            border-radius: 50%;
            font-size: 30px;
            color: #666;
            transition: 0.5s;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: #d35400;
                transition: 0.5s;
                transform: scale(0.9);
                z-index: -1;
            }

            &:hover {
                color: #ffa502;
                box-shadow: 0 0 15px #d35400;
                text-shadow: 0 0 15px #d35400;
            &::before {
                transform: scale(1.2);
                box-shadow: 0 0 15px #d35400;
                filter: blur(3px);
            }
            }
        }
        }
    }
`;
