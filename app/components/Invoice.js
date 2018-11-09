// @flow
import React, { Component } from 'react';
import './Invoice.css';
import { printInvoice } from './printInvoice';

type Props = {};

export default class Invoice extends Component<Props> {
  render() {
    return (
      <div className="container">
        <button
          type="button"
          onClick={() => {
            printInvoice();
          }}
        >
          Print
        </button>
        <div className="row">
          <div className="col-xs-12">
            <div className="invoice-title">
              <h2>Invoice: Invoice Number</h2>
            </div>
            <hr />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-xs-4">
            <x-input skin="flat">
              <x-label>Customer Name</x-label>
            </x-input>
          </div>
          <div className="col-xs-4">
            <x-input skin="flat">
              <x-label>Contact Number</x-label>
            </x-input>
          </div>
          <div className="col-xs-4">
            <x-input skin="flat">
              <x-label>GSTIN/UIN:</x-label>
            </x-input>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Order summary</strong>
                </h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <td>
                          <strong>Item</strong>
                        </td>
                        <td className="text-center">
                          <strong>Price</strong>
                        </td>
                        <td className="text-center">
                          <strong>Quantity</strong>
                        </td>
                        <td className="text-right">
                          <strong>Totals</strong>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BS-200</td>
                        <td className="text-center">$10.99</td>
                        <td className="text-center">1</td>
                        <td className="text-right">$10.99</td>
                      </tr>
                      <tr>
                        <td>BS-400</td>
                        <td className="text-center">$20.00</td>
                        <td className="text-center">3</td>
                        <td className="text-right">$60.00</td>
                      </tr>
                      <tr>
                        <td>BS-1000</td>
                        <td className="text-center">$600.00</td>
                        <td className="text-center">1</td>
                        <td className="text-right">$600.00</td>
                      </tr>
                      <tr>
                        <td className="thick-line" />
                        <td className="thick-line" />
                        <td className="thick-line text-center">
                          <strong>Subtotal</strong>
                        </td>
                        <td className="thick-line text-right">$670.99</td>
                      </tr>
                      <tr>
                        <td className="no-line" />
                        <td className="no-line" />
                        <td className="no-line text-center">
                          <strong>Shipping</strong>
                        </td>
                        <td className="no-line text-right">$15</td>
                      </tr>
                      <tr>
                        <td className="no-line" />
                        <td className="no-line" />
                        <td className="no-line text-center">
                          <strong>Total</strong>
                        </td>
                        <td className="no-line text-right">sam$685.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
