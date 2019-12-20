import styled from "styled-components";

const ServicesWrapper = styled.div`
  background: #fff;
  box-shadow: ${props => props.theme.bs};
  margin: 1rem 0;
  padding: 1rem;
`;

const AddServiceButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1rem;
  padding: 0.3rem;
  transform: translate(-25%, 50%);
`;

export { ServicesWrapper, AddServiceButton };
