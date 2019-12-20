import styled, { keyframes } from "styled-components";

const ring = keyframes`
  0% { -webkit-transform: rotateZ(0); }
  1% { -webkit-transform: rotateZ(30deg); }
  3% { -webkit-transform: rotateZ(-28deg); }
  5% { -webkit-transform: rotateZ(34deg); }
  7% { -webkit-transform: rotateZ(-32deg); }
  9% { -webkit-transform: rotateZ(30deg); }
  11% { -webkit-transform: rotateZ(-28deg); }
  13% { -webkit-transform: rotateZ(26deg); }
  15% { -webkit-transform: rotateZ(-24deg); }
  17% { -webkit-transform: rotateZ(22deg); }
  19% { -webkit-transform: rotateZ(-20deg); }
  21% { -webkit-transform: rotateZ(18deg); }
  23% { -webkit-transform: rotateZ(-16deg); }
  25% { -webkit-transform: rotateZ(14deg); }
  27% { -webkit-transform: rotateZ(-12deg); }
  29% { -webkit-transform: rotateZ(10deg); }
  31% { -webkit-transform: rotateZ(-8deg); }
  33% { -webkit-transform: rotateZ(6deg); }
  35% { -webkit-transform: rotateZ(-4deg); }
  37% { -webkit-transform: rotateZ(2deg); }
  39% { -webkit-transform: rotateZ(-1deg); }
  41% { -webkit-transform: rotateZ(1deg); }

  43% { -webkit-transform: rotateZ(0); }
  100% { -webkit-transform: rotateZ(0); }
`;

const ActiveBell = styled.div`
  background: #eec735;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: ${props => props.theme.bs};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;

  i {
    transform-origin: 50% 4px;
    animation: ${ring} 7s 0.7s ease-in-out infinite;
  }
`;

const InactiveBell = styled.div`
  background: rgba(238, 199, 53, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: ${props => props.theme.bs};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;
`;

const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #ff0000;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.5rem;
`;

export { ActiveBell, Amount, InactiveBell };
