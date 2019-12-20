import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Nav from "../Nav";
import theme, { Wrapper, InnerWrapper } from "./style";

interface IProps {
  children: React.ReactNode
}

export default class Layout extends Component<IProps, {}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Nav />
          <InnerWrapper>{this.props.children}</InnerWrapper>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
