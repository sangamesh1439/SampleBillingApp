// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './constants/routes';
import './Header.css';

type Props = {};

export default class Header extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="navbar">
        <Link to={routes.COUNTER}>to Counter</Link>
        <Link to="/invoice">New Invoice </Link>
      </div>
    );
  }
}
