import * as React from "react";
import { Mutation, Query } from "react-apollo";
import Router from "next/router";
import { CREATE_SERVICE, GET_CATEGORIES } from "./queries";
import Error from "../ErrorMessage";
import { ImageInput, ImageDisplay } from "./style";
import { GET_SERVICES } from "../Services/queries";
import Head from "next/head";
import Link from "next/link";
import authentication from "../authentication";
import { MY_SERVICES } from "../MyServicesList/queries";

interface IState{
    title: string,
    description: string,
    maxPayment: number,
    images: any[],
    category: string,
    imagePlaceholder: any
}

class CreateService extends React.Component<{}, IState> {
  state = {
    title: "",
    description: "",
    maxPayment: 0,
    images: [],
    category: "",
    imagePlaceholder: [
      "/static/img/placeholder.gif",
      "/static/img/placeholder.gif",
      "/static/img/placeholder.gif"
    ]
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value }: any = e.target;
    const val: string | number = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val } as Pick<IState, keyof IState>);
  };

  handlePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    var input = e.target;
    const reader = new FileReader();
    const [file] = input.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState(prevState => {
        prevState.images[input.id] = file;
        prevState.imagePlaceholder[input.id] = reader.result;
        return {
          images: prevState.images,
          imagePlaceholder: prevState.imagePlaceholder
        };
      });
    };
  };

  createService = async (e: React.FormEvent<HTMLFormElement>, createService) => {
    e.preventDefault();
    const variables = { ...this.state };
    delete variables.imagePlaceholder;
    const res = await createService({ variables });
    Router.push({
      pathname: "/service",
      query: { id: res.data.createService.id }
    });
  };

  handleCreate = (cache, { data: { createService } }) => {
    //Add to the services pool
    const { allServices } = cache.readQuery({ query: GET_SERVICES });
    allServices.push(createService);
    cache.writeQuery({
      query: GET_SERVICES,
      data: { allServices }
    });
    //Add to my Services
    const { myServices } = cache.readQuery({ query: MY_SERVICES });
    myServices.push(createService);
    cache.writeQuery({
      query: MY_SERVICES,
      data: { myServices }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Create Service | Help Mates</title>
        </Head>
        <div className="container bg-white mt-3 shadow-sm px-3 py-5">
          <p>
            You are here:{" "}
            <Link href="/">
              <a>Home</a>
            </Link>
            ->Create New Service
          </p>
          <h1 className="py-3"> Create New Service</h1>
          <hr />
          <Mutation mutation={CREATE_SERVICE} update={this.handleCreate}>
            {(createService, { loading, error, data, called }) => (
              <form onSubmit={e => this.createService(e, createService)}>
                <Error error={error} />
                <fieldset disabled={loading}>
                  <div className="form-group">
                    <label htmlFor="title">Service Title:</label>
                    <input
                      className="form-control"
                      onChange={this.handleChange}
                      type="text"
                      name="title"
                      value={this.state.title}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      className="form-control"
                      onChange={this.handleChange}
                      name="description"
                      value={this.state.description}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="value">Max Payment:</label>
                    <input
                      className="form-control"
                      onChange={this.handleChange}
                      type="number"
                      name="maxPayment"
                      value={this.state.maxPayment}
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="value">Category:</label>
                    <select
                      className="custom-select"
                      onChange={this.handleChange}
                      name="category"
                      defaultChecked={true}
                    >
                      <option />
                      <Query query={GET_CATEGORIES}>
                        {({ data, loading, error }) => {
                          if (loading)
                            return <option disabled>Loading...</option>;
                          if (error)
                            return (
                              <option disabled>
                                Error! Please, try again.
                              </option>
                            );
                          return data.categories.map(category => {
                            return (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            );
                          });
                        }}
                      </Query>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>Add an image to your jobs:</p>
                    <div className="row w-100 d-flex justify-content-center pt-1 m-0">
                      {this.state.imagePlaceholder.map((image, i) => (
                        <div key={i} className="col-md-4">
                          <ImageInput
                            onChange={this.handlePicture}
                            type="file"
                            name="image"
                            accept=".png,.jpg,.jpeg"
                            id={i.toString()}
                            className="inputfile"
                          />
                          <label className="w-100" htmlFor={i.toString()}>
                            <ImageDisplay
                              src={this.state.imagePlaceholder[i]}
                              alt="placeholder"
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {!error && !loading && called && (
                    <div className="alert alert-success" role="alert">
                      Service successfully created! Redirecting...
                      <i className="fas fa-cog fa-spin" />
                    </div>
                  )}
                  {loading ? (
                    <button className="btn btn-outline-success disabled">
                      Posting... <i className="fas fa-cog fa-spin" />
                    </button>
                  ) : (
                    <button
                      className={`btn btn-outline-success ${!error &&
                        !loading &&
                        called &&
                        "disabled"}`}
                    >
                      Post Service
                    </button>
                  )}
                </fieldset>
              </form>
            )}
          </Mutation>
        </div>
      </React.Fragment>
    );
  }
}

export default authentication(CreateService);
