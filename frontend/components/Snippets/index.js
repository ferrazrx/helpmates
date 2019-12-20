import React, { Component } from "react";
import { Snippet, New } from "./style";
import HOC from "./HOC";
import timestamp from "../../lib/timestamp";

class Snippets extends Component {
  state = { service: null };
  interval = null;

  componentDidMount() {
    this.handleChange();
  }

  handleChange = () => {
    if (this.props.data.length !== 0 || this.props.data[0]) {
      let count = 0;
      const createServiceElement = () => {
        let { images, title, createdAt, category } = this.props.data[count];

        this.setState({
          service: (
            <Snippet className="shadow">
              <div className="row">
                <div className="col-3">
                  <img className="w-100" src={images[0]} />
                </div>
                <div className="col-9">
                  <h5>
                    <strong>{title}</strong>
                  </h5>
                  <p>{category.name}</p>
                  <p>{timestamp(new Date(createdAt))}</p>
                </div>
              </div>
              <New src="/static/img/new.svg" />
            </Snippet>
          )
        });
        count = this.props.data.length - 1 > count ? count + 1 : 0;
        setTimeout(() => {
          this.interval = requestAnimationFrame(createServiceElement);
        }, 4000);
      };
      createServiceElement();
    }
  };

  render() {
    return this.state.service;
  }
  componentWillUnmount() {
    let cancelAnimationFrame =
      window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    cancelAnimationFrame(this.interval);
  }
}

export default HOC(Snippets);
