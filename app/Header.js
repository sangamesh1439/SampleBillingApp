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
        <Link className="sam" to={routes.COUNTER}>
          to Counter
        </Link>
      </div>
    );
  }
}
