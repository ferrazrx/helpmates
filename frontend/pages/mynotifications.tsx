import * as React from "react";
import MyNotificationsList from "../components/MyNotificationsList";
import authentication from "../components/authentication";
import MyAccountMenu from "../components/MyAccountMenu";

interface IProps {
  pathname: string
}

const mynotifications: React.FunctionComponent<IProps> = ({ pathname }): JSX.Element => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <MyAccountMenu pathname={pathname} />
        </div>
        <div className="col-md-8">
          <MyNotificationsList />
        </div>
      </div>
    </div>
  );
}

export default authentication(mynotifications);
