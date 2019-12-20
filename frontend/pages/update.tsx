import * as React from "react";
import UpdateService from "../components/UpdateService";

interface IProps {
  query: {
    id: string
  }
}

const Update: React.FunctionComponent<IProps> = ({ query }): JSX.Element=> {
  return <UpdateService id={query.id} />;
}

export default Update;
