import styled from "styled-components";

const Thumbnail = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;

    padding: 5px;
  }
`;

export { Thumbnail };
