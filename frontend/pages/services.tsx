import * as React from "react";
import Services from "../components/Services";

interface IProps {
  query: {
    page: string
  }
}

const ServicesPage: React.FunctionComponent<IProps> = ({ query }): JSX.Element => {
  return <Services page={parseInt(query.page) || 1} />;
}

export default ServicesPage;
