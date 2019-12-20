import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;

  }
`;

const Fadein = styled.div`
  animation: ${fadein} 1s;
`;

const Button = styled.div`
  cursor: pointer;
`;

export { Fadein, Button };
