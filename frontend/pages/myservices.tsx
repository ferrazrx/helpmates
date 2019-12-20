import * as React from "react";
import MyAccountMenu from "../components/MyAccountMenu";
import MyServicesList from "../components/MyServicesList";
import authentication from "../components/authentication";

interface IProps {
  pathname: string
}

const myaccount: React.FunctionComponent<IProps> = ({ pathname }): JSX.Element => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <MyAccountMenu pathname={pathname} />
        </div>
        <div className="col-md-8">
          <MyServicesList />
        </div>
      </div>
    </div>
  );
}

export default authentication(myaccount);
