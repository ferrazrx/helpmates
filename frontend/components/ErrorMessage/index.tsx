import * as React from 'react';
import { ErrorStyles } from './style';
import { NetworkInterfaceBase } from 'os';


interface IProps {
  error: any 
}

const DisplayError: React.FunctionComponent<IProps>  = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorStyles>
  );
};


export default DisplayError;
