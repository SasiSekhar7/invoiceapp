import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import callAddFont from './sunsetfont';

const generateInvoice = (client, books, transporter, packaging) => {
  const doc = new jsPDF();

  const drawCommonElements = () => {
    doc.setDrawColor(0); // Black color (default)
    doc.setLineWidth(0.5);
    doc.roundedRect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20, 10, 10, 'S');
    doc.roundedRect(40, 10, 130, 20, 5, 5, 'S');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    callAddFont.call(doc);
    doc.setFont('Sunset-DemiBold Regular'); // Set the font for text
    doc.setFontSize(38);
    doc.text('Order - Estimation', 105, 25, { align: 'center' });
    doc.setFontSize(18);
    doc.text('SKBW', 105, 38, { align: 'center' });
    doc.setFontSize(14);
    doc.text('VIJAYAWADA', 105, 45, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('+91 94415 44936, +91 99511 47195', 105, 52, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Date: ${formattedDate}`, 154, 55);

    doc.line(10, 60, 200, 60);
    //console.log(client['shopName'])
    doc.setFontSize(14);
    doc.text(`${client['CustomerName']},`, 14, 65);
    doc.text(`${client['shopName']},`, 14, 72);
    doc.setFontSize(12);
    doc.text(`${client['address']}, ${client['place']}, ${client['district']}, ${client['pincode']}`,14,79);
    doc.text(`${client['mobile']}`, 14, 86);
    doc.setFontSize(10);
    doc.text('GOODS ONCE SOLD CANNOT BE TAKEN BACK', doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 12, {
      align: 'center',
    });

  };

  drawCommonElements(); // Draw common elements on the first page

  const tableHeaders = [['GBL', 'PARTICULARS', 'Qty', 'Rate', 'Amount']];
  const packingForwardAmount = packaging * calculateTotalQuantity(books);

  const tableData = books.map((book) => [
    book.quantity.toString(),
    book.book['name'],
    (book.quantity * book.book['bundleQuantity']),
    book['rate'].toString(),
    (book.quantity * book['rate'] * book.book['bundleQuantity']).toString(),
  ]);
  let additionalFee = 80;
  let additionalFeeAmount =0;
  if (transporter['name'] === 'GVR' || transporter['name'] === 'Chenupatti') {

    additionalFeeAmount = additionalFee * calculateTotalQuantity(books);
    tableData.push(['', `${transporter['name']}`, `${calculateTotalQuantity(books)}`, additionalFee.toString(), additionalFeeAmount.toString()]);
    }
  tableData.push(
    ['', 'PACKING FORWARD', `${calculateTotalQuantity(books)}`, packaging.toString(), packingForwardAmount.toString()],
    ['', 'Thank You', '', '', `Total Amount: ${calculateTotalAmount(books, packingForwardAmount, additionalFeeAmount)}`]
  );


  const rowsPerPage = 20; // Adjust this based on your content and design
  const chunks = [];

  for (let i = 0; i < tableData.length; i += rowsPerPage) {
    chunks.push(tableData.slice(i, i + rowsPerPage));
  }

  chunks.forEach((chunk, chunkIndex) => {
    if (chunkIndex > 0) {
      doc.addPage(); // Add a new page for each chunk
      drawCommonElements(); // Draw common elements on the new page
    }

    // Render table for each chunk
    doc.autoTable({
      head: tableHeaders,
      body: chunk,
      startY: 90,
      theme: 'grid',
      headStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],

      },
      columnStyles: {
        4: { halign: 'right' },
    },        
      styles: {
        fontSize: 12,
        valign: 'middle',
        lineWidth: 0.1,

      },
    });

    doc.text(`Transporter: ${transporter['name']}`, 14, doc.autoTable.previous.finalY + 10);
  });

  // Continue with the rest of your code

  return doc;
};

const calculateTotalQuantity = (books) => {
  return books.reduce((total, book) => total + parseInt(book.quantity), 0);
};

const calculateTotalAmount = (books, packaging) => {
  const totalAmount = books.reduce((total, book) => total + book.quantity * book['rate'] * book.book['bundleQuantity'], 0);
  return totalAmount + packaging;
};

export default generateInvoice;
