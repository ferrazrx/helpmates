import styled from "styled-components";

const theme = {
  red: "#FF0000",
  maxWidth: "1000px",
  bs: "0 2px 5px rgba(0,0,0,.05)"
};

const Wrapper = styled.div`
  width: "100%";
  background-color: #fdf9ea;
  min-height: 100%;
`;

const InnerWrapper = styled.div``;

export { theme as default, Wrapper, InnerWrapper };
