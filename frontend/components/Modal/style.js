import styled from "styled-components";

const ModalContainer = styled.div`
  background: #fff;
  width: 90%;
  margin: 10% auto;
  @media (min-width: 768px) {
    width: 35%;
  }
`;

const Button = styled.div`
  cursor: pointer;
`;

export { ModalContainer, Button };
