import * as React from "react";
import ResetPasswordForm from "../components/ResetPasswordForm";


interface IProps {
  query:{
    resetToken: string
  }
}

const resetPassword: React.FunctionComponent<IProps> = (props): JSX.Element => {
  if (!props.query.resetToken) {
    return (
      <div className="alert alert-danger container my-5" role="alert">
        A reset token was not provided! Please, try again!
      </div>
    );
  } else {
    return <ResetPasswordForm resetToken={props.query.resetToken} />;
  }
}

export default resetPassword;
