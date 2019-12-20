import * as React from "react";
import { Mutation } from "react-apollo";
import { withAlert } from "react-alert";
import { DELETE_SERVICE } from "./queries";
import Error from "../ErrorMessage";
import { GET_SERVICES } from "../Services/queries";
import Router from "next/router";

interface IProps {
  id: string,
  alert: {
    success: (s:string)=> void
  }
}

class DeleteService extends React.Component<IProps, {}> {
  
  handleDelete = async (e, deleteService) => {
    const variables = { id: this.props.id };
    const res =
      confirm("Do you want to delete this item?") &&
      (await deleteService({ variables }));
    console.log(res);
    if (res) {
      Router.push({
        pathname: "/myservices"
      });
      this.props.alert.success(`Your service was successfully deleted!`);
    }
  };

  updateCache = (cache, { data: { deleteService } }) => {
    const { services } = cache.readQuery({ query: GET_SERVICES });
    const updatedServices = services.filter(
      service => service.id !== deleteService.id
    );
    cache.writeQuery({
      query: GET_SERVICES,
      data: { services: [...updatedServices] }
    });
  };
  render() {
    return (
      <Mutation mutation={DELETE_SERVICE} update={this.updateCache}>
        {(deleteService, { loading, error, data }) => {
          if (loading) return <button disabled>{this.props.children}</button>;
          if (error)
            return (
              <React.Fragment>
                <Error error={error} />
                <button
                  className="btn bg-transparent border-0 p-0 ml-1"
                  onClick={(e) => this.handleDelete(e, deleteService)}
                >
                  {this.props.children}
                </button>
              </React.Fragment>
            );
          return (
            <button
              className="btn bg-transparent border-0 p-0 ml-1"
              onClick={e => this.handleDelete(e, deleteService)}
            >
              {this.props.children}
            </button>
          );
        }}
      </Mutation>
    );
  }
}

export default withAlert(DeleteService);
