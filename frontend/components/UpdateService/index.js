import React, { Component, Fragment } from "react";
import { Mutation, Query } from "react-apollo";
import Router from "next/router";
import { UPDATE_SERVICE, GET_SERVICE_CATEGORIES } from "./queries";
import Error from "../ErrorMessage";
import { ImageInput, ImageDisplay } from "./style";
import Head from "next/head";
import { withAlert } from "react-alert";

class UpdateService extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handlePicture = e => {
    var input = e.target;
    const reader = new FileReader();
    const [file] = input.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      document.getElementById(`image${input.id}`).src = reader.result;
      this.setState(prevState => {
        prevState.image
          ? (prevState.images[input.id] = file)
          : (prevState.images = [file]);
        return { images: prevState.images };
      });
    };
  };

  updateService = async (e, updateService) => {
    e.preventDefault();
    const variables = { ...this.state, id: this.props.id };
    const res = await updateService({ variables });
    if (res.data.updateService) {
      this.props.alert.success("Your post was successfully updated!");
      Router.push({
        pathname: "/service",
        query: { id: res.data.updateService.id }
      });
    }
  };

  updateCache = (cache, { data: { updateService } }) => {
    cache.writeQuery({
      query: GET_SERVICE_CATEGORIES,
      variables: { id: this.props.id },
      data: { service: { ...updateService } }
    });
  };

  render() {
    return (
      <Fragment>
        <Head>
          <title>Update Service | Help Mates</title>
        </Head>
        <div className="container bg-white mt-3 shadow-sm px-3 py-5">
          <h1 className="py-3"> Update Service</h1>
          <hr />
          <Query
            query={GET_SERVICE_CATEGORIES}
            variables={{ id: this.props.id }}
          >
            {({ data: { service, categories }, loading, error }) => {
              if (loading)
                return (
                  <div
                    className="container alert alert-light p-5 shadow-sm my-5"
                    role="alert"
                  >
                    <h1>
                      We are finding your service...
                      <i className="fas fa-cog fa-spin" />
                    </h1>
                  </div>
                );

              if (error)
                return (
                  <Error
                    className="alert alert-light p-5 shadow-sm"
                    error={error}
                  />
                );
              if (!service)
                return (
                  <div
                    className="alert alert-danget p-5 shadow-sm"
                    role="alert"
                  >
                    <h1>
                      No service was find with these parameters...
                      <i className="fas fa-times-circle" />
                    </h1>
                  </div>
                );
              return (
                <Mutation mutation={UPDATE_SERVICE} update={this.updateCache}>
                  {(updateService, { loading, error }) => (
                    <form onSubmit={e => this.updateService(e, updateService)}>
                      <Error error={error} />
                      <fieldset disabled={loading}>
                        <div className="form-group">
                          <label htmlFor="title">Service Title:</label>
                          <input
                            className="form-control"
                            onChange={this.handleChange}
                            type="text"
                            name="title"
                            defaultValue={service.title}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Description:</label>
                          <textarea
                            className="form-control"
                            onChange={this.handleChange}
                            type="text"
                            name="description"
                            defaultValue={service.description}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="value">Max Payment:</label>
                          <input
                            className="form-control"
                            onChange={this.handleChange}
                            type="number"
                            name="maxPayment"
                            defaultValue={service.maxPayment}
                            min="0"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="value">Category:</label>
                          <select
                            className="custom-select"
                            onChange={this.handleChange}
                            name="category"
                            defaultValue={service.category.id}
                          >
                            {categories.map(category => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        {service.images.length > 0 && (
                          <div className="form-group">
                            <p>Add an image to your jobs:</p>
                            <div className="row w-100 d-flex justify-content-center pt-1 m-0">
                              {service.images.map((image, i) => (
                                <div key={i} className="col-md-4">
                                  <ImageInput
                                    onChange={this.handlePicture}
                                    type="file"
                                    name="image"
                                    accept=".png,.jpg,.jpeg"
                                    id={i}
                                    className="inputfile"
                                  />
                                  <label className="w-100" htmlFor={i}>
                                    <ImageDisplay
                                      id={`image${i}`}
                                      src={image}
                                      alt="placeholder"
                                    />
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {loading ? (
                          <button className="btn btn-outline-success disabled">
                            Posting... <i className="fas fa-cog fa-spin" />
                          </button>
                        ) : (
                          <button className="btn btn-outline-success">
                            Post Service
                          </button>
                        )}
                      </fieldset>
                    </form>
                  )}
                </Mutation>
              );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}

export default withAlert(UpdateService);
