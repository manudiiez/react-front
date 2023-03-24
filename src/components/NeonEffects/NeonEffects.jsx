import React from "react";
import styled from "styled-components";
import NeonAnimationInfinite from "./NeonAnimationInfinite";
import NeonButtonHover from "./NeonButtonHover";
import NeonButtonHover2 from "./NeonButtonHover2";
import NeonCardHover from "./NeonCardHover";
import NeonMediaItem from "./NeonMediaItem";
import NeonMenu from "./NeonMenu";
import NeonSignAnimation from "./NeonSignAnimation";
import NeonTitle from "./NeonTitle";

const NeonEffects = () => {
  return (
    <Container className="container-lg">
      <div className="row p-5">

      </div>
      {/* BOTON CON HOVER DE CARGA */}
      <NeonButtonHover/>
      <NeonAnimationInfinite/>
      <NeonCardHover/>
      <NeonMediaItem/>
      <NeonSignAnimation/>
      <NeonButtonHover2/>
      <NeonMenu/>
      <NeonTitle/>
    </Container>
  );
};

export default NeonEffects;

const Container = styled.div`
  min-height: 90vh;
  background-color: #060C1F;
`;

// BOTON CON HOVER DE CARGA




