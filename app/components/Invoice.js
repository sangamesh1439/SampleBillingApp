// @flow
import React, { Component } from 'react';
import './Invoice.css';

type Props = {};

export default class Invoice extends Component<Props> {
  render() {
    return (
      <div className="container">
        <button
          type="button"
          onClick={() => {
            /* eslint-disable */
            const doc = new jsPDF();
            let yCordinate = 0;
            doc.setFont('helvetica');

            doc.setFontSize(12);
            doc.text(90, (yCordinate += 10), 'Invoice');
            doc.text(150, (yCordinate += 5), 'Invoice Number:');
            doc.text(150, (yCordinate += 5), 'Date: ');

            doc.setFontType('bold');
            doc.setFontSize(22);
            doc.text(60, (yCordinate += 5), 'Somawar Computers');
            doc.setFontType('normal');
            doc.setFontSize(12);
            doc.text(
              25,
              (yCordinate += 5),
              'Town Market, Nanded, Mobile Number: 9145555855 Email: nsomawar@gmail.com'
            );
            doc.text(
              50,
              (yCordinate += 5),
              'GSTIN/UIN : xyz State Name: Maharashtra, Code: 27'
            );

            doc.text(20, (yCordinate += 15), 'To: Sangamesh Somawar');
            doc.text(20, (yCordinate += 5), 'Contact Number: 9145555755');
            doc.text(20, (yCordinate += 5), 'GSTIN/UIN: 8765803815284691');

            var header = function(data) {
              doc.setFontSize(8);
              doc.setTextColor(40);
              doc.setFontStyle('normal');
            };
            doc.setFontSize(8);
            doc.setFontStyle('normal');
            // let yCordinate = 70;
            yCordinate += 10;
            var options = {
              beforePageContent: header,
              margin: {
                top: 20
              },
              styles: {
                overflow: 'linebreak',
                fontSize: 8,
                rowHeight: 'auto',
                columnWidth: 'wrap'
              },
              columnStyles: {
                1: { columnWidth: 'auto' },
                2: { columnWidth: 'auto' },
                3: { columnWidth: 'auto' },
                4: { columnWidth: 'auto' },
                5: { columnWidth: 'auto' },
                6: { columnWidth: 'auto' }
              },
              startY: yCordinate
            };

            var columns = [
              { title: 'ID', dataKey: 'id', width: 90 },
              { title: 'Product', dataKey: 'Product', width: 40 },
              { title: 'Rate/Item', dataKey: 'Rate/Item', width: 40 },
              { title: 'Qty', dataKey: 'Qty', width: 40 },
              { title: 'Dsnt', dataKey: 'Dsnt', width: 40 },
              { title: 'S.Total', dataKey: 'STotal', width: 40 },
              { title: 'CGST', dataKey: 'CGST', width: 40 },
              { title: 'SGST', dataKey: 'SGST', width: 40 },
              { title: 'IGST', dataKey: 'IGST', width: 40 },
              { title: 'CESS', dataKey: 'CESS', width: 40 },
              { title: 'Total', dataKey: 'Total', width: 40 }
            ];
            var rows = [
              {
                id: 1,
                Product: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '0',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 2,
                Product: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '0',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 3,
                Product: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: 4,
                Product: 'Shaw',
                'Rate/Item': '10',
                Qty: '12',
                Dsnt: '10',
                STotal: '120',
                CGST: 20,
                SGST: 20,
                IGST: 0,
                CESS: 20,
                Total: 180
              },
              {
                id: '',
                Product: '',
                'Rate/Item': 'Total',
                Qty: '',
                Dsnt: '20',
                STotal: '360',
                CGST: 60,
                SGST: 60,
                IGST: 0,
                CESS: 60,
                Total: 680
              }
            ];

            // columnStyles: {
            //   id: {fillColor: 255}
            // },

            doc.autoTable(columns, rows, options);
            yCordinate = doc.autoTable.previous.finalY;

            doc.text(10, (yCordinate += 30), 'Customer Sign');
            doc.text(140, yCordinate, 'Authorised Stamp/ Signatory');
            doc.text(
              10,
              (yCordinate += 10),
              'Declaration: We declare that this invoice shows the actual price of the goods described and that all particulars are turue and correct'
            );
            doc.text(65, (yCordinate += 10), 'SUBJECT TO NANDED JURISDICTION');

            doc.save('a4.pdf');
            /* eslint-enable */
          }}
        >
          {' '}
          Click here{' '}
        </button>
        <div className="row">
          <div className="col-xs-12">
            <div className="invoice-title">
              <h2>Invoice</h2>
              <h3 className="pull-right">Order # 12345</h3>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-6">
                <address>
                  <strong>Billed To:</strong>
                  <br />
                  John Smith
                  <br />
                  1234 Main
                  <br />
                  Apt. 4B
                  <br />
                  Springfield, ST 54321
                </address>
              </div>

              <div className="col-xs-6 text-right">
                <address>
                  <strong>Shipped To:</strong>
                  <br />
                  Jane Smith
                  <br />
                  1234 Main
                  <br />
                  Apt. 4B
                  <br />
                  Springfield, ST 54321
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <address>
                  <strong>Payment Method:</strong>
                  <br />
                  Visa ending **** 4242
                  <br />
                  jsmith@email.com
                </address>
              </div>
              <div className="col-xs-6 text-right">
                <address>
                  <strong>Order Date:</strong>
                  <br />
                  March 7, 2014
                  <br />
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>

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
