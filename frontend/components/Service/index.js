import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Thumbnail, AddServiceButton } from "./style";
import timestamp from "../../lib/timestamp";

export default class Service extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
  };
  render() {
    const { title, description, category, id, images, createdAt } = this.props;
    const [image] = images;
    return (
      <div className="list-group-item list-group-item-action mt-2 p-2">
        <div className="row">
          <Link href={{ pathname: "/service", query: { id } }}>
            <a className={`col-${this.props.children ? "10" : "12"}`}>
              <div className="row">
                <div className="col-2">
                  <Thumbnail>
                    {image && <img src={image} alt="service image" />}
                  </Thumbnail>
                </div>
                <div className="col-10">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 text-truncate">{title}</h5>
                    <small className="pr-3 text-nowrap">
                      {timestamp(new Date(createdAt))}
                    </small>
                  </div>
                  <p className="mb-1 text-truncate">{description}</p>
                  <small>{category.name}</small>
                </div>
              </div>
            </a>
          </Link>
          {this.props.children && (
            <div className="col-2 py-2">
              <span>{this.props.children}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
