// @flow
import React, { Component } from 'react';

type Props = {};

export default class SideBar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-default">
          Customers
        </button>
        <button type="button" className="btn btn-default">
          Dealers
        </button>
      </div>
    );
  }
}
