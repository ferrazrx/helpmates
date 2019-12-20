import React from "react";
import Link from "next/link";
import {GET_LOCAL_USER_LOGGED} from '../MyAccountInfo/queries';
import { Query } from 'react-apollo';
import MyAccountInfo from '../MyAccountInfo';

export default function MyAccountMenu(props) {
  return (
    <div className="p-5 bg-white shadow-sm">
      <MyAccountInfo />
      <ul className="list-group list-group-flush">
        <li className={`list-group-item ${props.pathname === "/myservices" &&
            "active"}`} >
          <Link href="/myservices">
            <a
              className={`${props.pathname === "/myservices" && "text-white"}`}
            >
              My Services
            </a>
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/myservices">
            <a>My Bids</a>
          </Link>
        </li>
        <li
          className={`list-group-item ${props.pathname === "/mynotifications" &&
            "active"}`}
        >
          <Link href="/mynotifications">
            <a
              className={`${props.pathname === "/mynotifications" &&
                "text-white"}`}
            >
              My Notifications
            </a>
          </Link>
        </li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
}
