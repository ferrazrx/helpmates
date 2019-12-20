import styled from "styled-components";

const NavWrapper = styled.div`
  background: #fff;
  box-shadow: ${props => props.theme.bs};
`;
const NavInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  .search {
    display: inline-block;
    margin: 0 auto;
  }
  .navigation {
    display: inline-block;
    margin-left: auto;
    margin-right: 0;
  }
`;
const NavLogo = styled.img`
  display: inline-block;
  max-width: 80px;
  padding: 5px 0;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 90%;
  margin: 10% auto;
  @media (min-width: 768px) {
    width: 35%;
  }
`;

export { NavWrapper, NavInner, NavLogo, ModalContainer };
