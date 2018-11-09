// @flow
import React, { Component } from 'react';
import './Invoice.css';
import { reduxForm, Field } from 'redux-form';
import { printInvoice } from './printInvoice';

type Props = {};

const validate = values => {
  console.log(values);
  return { firstName: 'sam' };
};
class Invoice extends Component<Props> {
  render() {
    console.log('props: ', this.props);
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <x-button
          onClick={() => {
            printInvoice();
          }}
        >
          <x-label>Print</x-label>
        </x-button>

        <div className="row">
          <div className="col-xs-12">
            <div className="invoice-title">
              <h2>Invoice: Invoice Number</h2>
            </div>
          </div>
        </div>
        <br />

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xs-4">
              <Field
                name="customerName"
                component={props => {
                  const { input } = props;
                  return (
                    <x-input skin="flat" {...input}>
                      <x-label>Customer Name</x-label>
                    </x-input>
                  );
                }}
              />
            </div>

            <div className="col-xs-4">
              <Field
                name="contactNumber"
                component={props => {
                  const { input } = props;
                  return (
                    <x-input skin="flat" {...input}>
                      <x-label>Contact Number</x-label>
                    </x-input>
                  );
                }}
              />
            </div>
            <div className="col-xs-4">
              <Field
                name="gstNumber"
                component={props => {
                  const { input } = props;
                  return (
                    <x-input skin="flat" {...input}>
                      <x-label>GSTIN/UIN</x-label>
                    </x-input>
                  );
                }}
              />
            </div>
          </div>
        </form>

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

export default reduxForm({
  form: 'invoice', // a unique name for this form
  validate
})(Invoice);
