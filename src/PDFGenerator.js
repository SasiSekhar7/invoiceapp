import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const PDFGenerator = ({ client, books, distributor, packaging }) => {
  // Create a Blob from the PDF content
  const blob = new Blob(
    [
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>Order Estimation</Text>
          <Text style={styles.subtitle}>Krishna Binding Works</Text>
          <Text style={styles.text}>0866-2564823, 9441544936</Text>
          <Text style={styles.text}>SBI A/CNO:30154617297, IFSC CODE: SBIN0003526</Text>
          {/* ... (Rest of your content) */}
        </Page>
      </Document>,
    ],
    { type: 'application/pdf' }
  );

  // Create a download URL for the Blob
  const downloadUrl = URL.createObjectURL(blob);

  return (
    <div>
      <a href={downloadUrl} download="order_estimation.pdf">
        Download PDF
      </a>
    </div>
  );
};

export default PDFGenerator;
