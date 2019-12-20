import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
40%{
    opacity: 1;
}
60%{
    opacity: 1;
}
  100%{
    opacity: 0;
    transform: translateY(0px);
  }
`;

const Snippet = styled.div`
  width: 50%;
  margin-top: 5%;
  background: #fff;
  padding: 2%;
  animation: ${rotate} 4s infinite;
  animation-fill-mode: both;

  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

const New = styled.img`
  width: 100px;
  position: absolute;
  top: -23px;
  right: -23px;
`;

export { Snippet, New };
