import * as React from "react";
import ShowService from "../components/ShowService";

interface IProps {
  query: {
    id: string
  }
}

const ServicePage: React.FunctionComponent<IProps> = ({ query }): JSX.Element => {
  return <ShowService id={query.id} />;
}

export default ServicePage;
