export const printInvoice = () => {
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
    // beforePageContent: header,
    margin: {
      top: 20
    },
    theme: 'grid',
    styles: {
      overflow: 'linebreak',
      fontSize: 8,
      rowHeight: 'auto',
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0]
    },
    columnStyles: {
      1: { columnWidth: 50 },
      2: { columnWidth: 50 },
      3: { columnWidth: 50 },
      4: { columnWidth: 50 },
      5: { columnWidth: 50 },
      6: { columnWidth: 50 }
    },
    startY: yCordinate
  };

  var columns = [
    { title: 'Sr. No', dataKey: 'srno' },
    { title: 'Description', dataKey: 'description' },
    { title: 'Quantity', dataKey: 'qty' },
    { title: 'Unit Price', dataKey: 'unitPrice' },
    { title: 'Final Price', dataKey: 'finalPrice' },
    { title: 'Amount', dataKey: 'amount' }
  ];
  var rows = [
    {
      srno: 1,
      description: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
      'Rate/Item': '10',
      qty: '1245',
      unitPrice: '0',
      finalPrice: '120',
      amount: 180
    },
    {
      srno: 412,
      description: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
      'Rate/Item': '10',
      qty: '12',
      unitPrice: '0',
      finalPrice: '120',
      amount: 180
    },
    {
      srno: 1,
      description: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
      'Rate/Item': '10',
      qty: '12',
      unitPrice: '0',
      finalPrice: '120',
      amount: 180
    },
    {
      srno: 1,
      description: 'SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040',
      'Rate/Item': '10',
      qty: '12',
      unitPrice: '0',
      finalPrice: '120',
      amount: 180
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
    'Declaration: We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct'
  );
  doc.text(65, (yCordinate += 10), 'SUBJECT TO NANDED JURISDICTION');

  doc.save('a4.pdf');
  /* eslint-enable */
};
