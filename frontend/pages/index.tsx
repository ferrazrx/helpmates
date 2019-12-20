import React, { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import Snippets from "../components/Snippets";

const Banner = styled.div`
  height: 70vh;

  @media (max-width: 767.98px) {
    height: 100vh;
  }

  .bg {
    width: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.3;
    filter: contrast(140%);
  }
  .text-bold {
    font-weight: 100;
    font-size: 2.4rem;
  }
`;

const Home = (): JSX.Element => (
  <Fragment>
    <Banner className="container-fluid m-0 p-0 position-relative">
      <img className="bg" src="static/img/bg.gif" alt="man working" />
      <div className="container position-relative pt-5 px-4">
        <h1 className="text-bold">We are ready to work!</h1>
        <p className="text-dark">
          Choose the best option to solve your problem and start saving!
        </p>
        <hr className="w-25 py-4 m-0" />
        <div>
          <Link href="/create">
            <a className="btn btn-dark mr-3 shadow-sm mb-1">
              <i className="far fa-clipboard" /> Post a Job
            </a>
          </Link>
          <Link href="/services">
            <a className="btn btn-warning shadow-sm">
              <i className="fas fa-search-location" /> Find a Job
            </a>
          </Link>
          <Snippets />
        </div>
      </div>
    </Banner>

    <div className="container-fluid pt-5 position-relative">
      <div className="container bg-white shadow-sm p-5">
        <h1 className="text-center">How does it work?</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <div className="content py-1">
              <div className="text-center">
                <i className=" display-2 fas fa-clipboard-check text-warning py-3" />
              </div>
              <h2 className="text-center py-3">Post your job!</h2>
              <p>
                You post your job/service to be found by professionals that are
                ready to solve your problem quickly.{" "}
              </p>
              <button className="btn btn-warning d-block ml-auto mr-auto">
                Learn More!
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content py-1">
              <div className="text-center">
                <i className="display-2 fas fa-comments text-warning py-3" />
              </div>
              <h2 className="text-center py-3">Receive Bids!</h2>
              <p>
                Once you post your job/service, workers can bid in your post and
                you will have different prices to pick up.{" "}
              </p>
              <button className="btn btn-warning d-block ml-auto mr-auto">
                Learn More!
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content py-1">
              <div className="text-center">
                <i className="display-2 fas fa-hands-helping text-warning py-3" />
              </div>
              <h2 className="text-center py-3">Select your option!</h2>
              <p>
                Now, you just need to select the best bid, pay and relax! We
                will take care of the rest.{" "}
              </p>
              <button className="btn btn-warning d-block ml-auto mr-auto">
                Learn More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;
