import * as React from 'react';
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import Head from "next/head";
import Layout from "../components/Layout";
import withApollo from "../apollo/withApollo";
import Meta from "../components/Meta";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// optional cofiguration
const options = {
  position: "bottom center",
  timeout: 4000,
  offset: "30px",
  transition: "scale"
};

interface IProps {
  Component: React.ComponentClass,
  apollo: any,
  pageProps: {
    query: string,
    pathname: string
  }

}
class NewApp extends App<IProps, {}> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {
      query: null,
      pathname: null
    };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    pageProps.pathname = ctx.pathname;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <AlertProvider template={AlertTemplate} {...options}>
          <Head>
            <title>Help Mates</title>
          </Head>
          <Meta />
          <ApolloProvider client={apollo}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </AlertProvider>
      </Container>
    );
  }
}

export default withApollo(NewApp);
