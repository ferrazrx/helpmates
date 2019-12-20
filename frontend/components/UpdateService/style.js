import styled from "styled-components";

const ImageInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const ImageDisplay = styled.img`
  display: block;
  margin: 0 auto;
  width: auto;
  max-height: 180px;
`;

export { ImageInput, ImageDisplay };
