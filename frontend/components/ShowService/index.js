import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";
import Head from "next/head";
import { Query, Mutation } from "react-apollo";
import Link from "next/link";
import Router from "next/router";
import { GET_SERVICE, ADD_COMMENT, ADD_BID } from "./queries";
import Error from "../ErrorMessage";
import { MainImage } from "./style";
import DeleteService from "../DeleteService";
import timestamp from "../../lib/timestamp";
import { withAlert } from "react-alert";

class ShowService extends Component {
  state = {
    comment: "",
    possibleDate: "",
    bid: 0
  };
  options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  static propTypes = {
    id: PropTypes.string
  };

  handleChange = e => {
    let { name, value, type } = e.target;
    if (type === "number") {
      value = parseFloat(value);
    }
    if (type === "date") {
      value = new Date(value);
    }
    this.setState({ [name]: value });
  };

  handleAddComment = async addComment => {
    const res = await addComment();
    if (res.data.addComment) {
      this.props.alert.success("Comment successfully added!");
    }
  };

  handleUpdataCache = (cache, { data: { addComment } }) => {
    //Add to the services pool
    const { service, canEditPost } = cache.readQuery({
      query: GET_SERVICE,
      variables: { id: this.props.id }
    });
    service.comments.push(addComment);
    cache.writeQuery({
      query: GET_SERVICE,
      variables: { id: this.props.id },
      data: { service, canEditPost }
    });
  };

  handleAddBid = async (e, addBid) => {
    e.preventDefault();
    const res = await addBid();
    console.log(res);
    if (res.data.addBid) {
      this.props.alert.success("Your bid was placed successfully!");
    }
  };

  handleErrorId = () => {
    this.props.alert.error("Service Not Found! Please try again!");
    Router.push("/services");
  };

  render() {
    if (!this.props.id) {
      this.handleErrorId();
    }
    return (
      <div className="container p-3 my-2">
        <Query
          query={GET_SERVICE}
          variables={{ id: this.props.id }}
          ssr={false}
        >
          {({ data, loading, error }) => {
            if (loading)
              return (
                <div
                  className="container alert alert-light p-5 shadow-sm py-5 my-5"
                  role="alert"
                >
                  <h1>
                    We are finding your service...
                    <i className="fas fa-cog fa-spin" />
                  </h1>
                </div>
              );

            if (error) {
              this.handleErrorId();
              return (
                <Error
                  className="alert alert-light p-5 shadow-sm"
                  error={error}
                />
              );
            }
            if (!data.service)
              return (
                <div className="alert alert-danger p-5 shadow-sm" role="alert">
                  No service found with these parameters... please, try again.
                </div>
              );
            const {
              title,
              description,
              maxPayment,
              category,
              images,
              createdAt,
              author,
              comments
            } = data.service;
            return (
              <Fragment>
                <Head>
                  <title>{title} | Help Mates </title>
                </Head>
                <div className="row">
                  <div className="col-md-8 bg-white p-5 shadow-sm">
                    <div className="row">
                      <div className="col-md-10">
                        <h1> {title}</h1>
                        <h3 className="text-success">{`CA$ ${parseFloat(
                          maxPayment
                        ).toFixed(2)}`}</h3>
                      </div>
                      <div className="col-md-2 p-2">
                        <p className="badge badge-warning">{category.name}</p>
                        <br />
                        <small className="pr-3">
                          {timestamp(new Date(createdAt))} by {author.fname}
                        </small>
                        {data.canEditPost && (
                          <p>
                            <Link
                              href={{
                                pathname: "/update",
                                query: { id: this.props.id }
                              }}
                            >
                              <a>
                                <i className="far fa-edit" />
                              </a>
                            </Link>
                            <DeleteService id={this.props.id}>
                              <i className="far fa-trash-alt" />
                            </DeleteService>
                          </p>
                        )}
                      </div>
                    </div>
                    <hr />
                    {images.length > 0 && (
                      <Carousel>
                        {images.map((image, i) => (
                          <MainImage key={i}>
                            <img src={image} alt="service image" />
                          </MainImage>
                        ))}
                      </Carousel>
                    )}
                    <p>Description:</p>
                    <p className="text-dark">{description}</p>
                    <hr />
                    <h3 className="py-3">Comments:</h3>
                    {comments.length < 1 && (
                      <div className="alert alert-warning" role="alert">
                        This service has no comments yet! Be the first to add a
                        comment.
                      </div>
                    )}
                    {comments.map((comment, i) => (
                      <div key={i} className="list-group my-2">
                        <div className="list-group-item list-group-item-action flex-column align-items-start">
                          <div className="d-flex w-100 justify-content-between">
                            <p className="mb-1">
                              <small>
                                <i className="far fa-question-circle" />{" "}
                                {comment.question[0].toUpperCase() +
                                  comment.question.slice(1)}
                              </small>
                            </p>
                            <small className="ml-3">
                              {timestamp(new Date(comment.createdAt))} by{" "}
                              {comment.author.fname}
                            </small>
                          </div>
                          {comment.answers.map(answer => (
                            <p className="mb-1">{answer}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Mutation
                      mutation={ADD_COMMENT}
                      variables={{
                        service: this.props.id,
                        question: this.state.comment
                      }}
                      update={this.handleUpdataCache}
                    >
                      {(addComment, { loading, error, called }) => {
                        return (
                          <div className="form-group mt-4">
                            <Error error={error} />
                            <label htmlFor="comment">New Comment</label>
                            <textarea
                              onChange={this.handleChange}
                              className="form-control"
                              id="comment"
                              name="comment"
                              rows="3"
                              value={this.state.comment}
                            />
                            <button
                              className="btn btn-warning mt-3"
                              disabled={loading}
                              onClick={() => this.handleAddComment(addComment)}
                            >
                              Add{`${loading ? "ing" : ""}`} Comment
                              {`${loading ? "..." : ""}`}
                            </button>
                          </div>
                        );
                      }}
                    </Mutation>
                  </div>
                  <div className="col-md-4 pl-2">
                    <div className="bg-white shadow-sm py-4 px-3">
                      <p className="text-truncate">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                        ->
                        <Link href="/services">
                          <a> Services </a>
                        </Link>
                        -> {title}
                      </p>
                      <hr />
                      <p>Place your bid:</p>
                      <Mutation
                        mutation={ADD_BID}
                        variables={{
                          payment: this.state.bid,
                          service: this.props.id,
                          date: this.state.possibleDate
                        }}
                      >
                        {(addBid, { loading, error, data }) =>
                          data ? (
                            <div className="alert alert-success" role="alert">
                              <h4 className="alert-heading">Well done!</h4>
                              <p>
                                Your bid of CA${" "}
                                {`${data.addBid.payment.toFixed(
                                  2
                                )}. The possible date was set for ${new Date(
                                  data.addBid.possibleDate
                                ).toLocaleDateString("en-US", this.options)}`}
                              </p>
                              <hr />
                              <p className="mb-0">
                                The owner of the service was notified.
                              </p>
                            </div>
                          ) : (
                            <form
                              method="POST"
                              className="form-group"
                              onSubmit={e => this.handleAddBid(e, addBid)}
                            >
                              <label htmlFor="bid">Bid:</label>
                              <input
                                className="form-control"
                                name="bid"
                                type="number"
                                onChange={this.handleChange}
                                placeholder="CAD$ 0,00"
                              />
                              <label htmlFor="possibleDate">
                                Possible date for execution:
                              </label>
                              <input
                                className="form-control mt-3 "
                                name="possibleDate"
                                type="date"
                                onChange={this.handleChange}
                              />
                              {loading ? (
                                <button className="mt-3 btn btn-warning disabled">
                                  Placing Bid...
                                  <i className="fas fa-cog fa-spin" />
                                </button>
                              ) : (
                                <button className="mt-3 btn btn-warning">
                                  Place Bid
                                </button>
                              )}
                            </form>
                          )
                        }
                      </Mutation>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default withAlert(ShowService);
