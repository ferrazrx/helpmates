import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const NotificationContainer = styled.div`
  position: relative;
`;
const New = styled.img`
  position: absolute;
  width: 60px;
  top: -14px;
  right: -14px;
`;

const Answer = styled.div``;

const AnswerContainer = styled.div`
  animation: ${fadein} 0.4s ease-in;
`;

export { NotificationContainer, New, AnswerContainer };
