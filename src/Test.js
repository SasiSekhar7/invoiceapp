import React, { useState } from 'react';
import Select from 'react-select';
import './App1.css';
import generateInvoice from './InvoiceTemplate3';
import SelectedBooksTable from './SelectedBooksTable';
import InvoicesList from './InvoicesList';
import clientsData from './clientsData'; 
import booksData1 from './booksData'; 
import transporterData from './transporterData';


function App() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [packagingRate, setPackagingRate] = useState(45);
  const [selectedTransporter, setSelectedTransporter] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [clients] = useState(clientsData);
  const [booksData] = useState(booksData1);
  const [transporters]= useState(transporterData);
  const [books, setBooks] = useState([]);

  const handleClientChange = (selectedOption) => {
    setSelectedClient(selectedOption);
  };
  const handleTransporterChange = (selectedOption) => {
    setSelectedTransporter(selectedOption);
  };
  const handleBookChange = (selectedOption) => {
    setSelectedBook(selectedOption);
    setQuantity('');
    if (selectedOption) {
      setRate(selectedOption.rate); // Set the predefined rate for the selected book
    } else {
      setRate(0);
    }
  };
  

  const addBookToInvoice = () => {
    if (selectedBook && quantity > 0 && rate > 0) {
      const bookInfo = { book: selectedBook, quantity, rate };
      setSelectedBooks([...selectedBooks, bookInfo]);
      setSelectedBook(null);
      setQuantity(0);
      setRate(0);
    }
  };

  const calculateTotalAmount = (selectedBooks) => {
    return selectedBooks.reduce(
      (acc, book) => acc + book.quantity * book.rate * book.book.bundleQuantity,
      0
    );
  };

  const addInvoice = () => {
    if (selectedClient && selectedBooks.length > 0) {
      const total = calculateTotalAmount(selectedBooks);
      setBooks([...books, { client: selectedClient['shopName'], books: selectedBooks, total }]);
      setSelectedClient(null);
      setSelectedBooks([]);
    }
  };
  const downloadPdf = () => {
    if (selectedClient && selectedBooks.length > 0) {
      const invoiceDoc = generateInvoice(selectedClient, selectedBooks, selectedTransporter, packagingRate);
      invoiceDoc.save(`${selectedClient['shopName']}.pdf`);
      console.log(selectedClient)
    }
  }
  const deleteBook = (index) => {
    const updatedBooks = [...selectedBooks];
    updatedBooks.splice(index, 1);
    setSelectedBooks(updatedBooks);
  };

  return (
   <div className='app-container'> 
    <div className="App">
      <h1 className="app-title">Order Estimation Generator</h1>
      <div className="section">
        <h2>Select a Client:</h2>
        <Select
          className="react-select"
          value={selectedClient}
          onChange={handleClientChange}
          options={clients}
          getOptionLabel={(option) => option['shopName']}
          getOptionValue={(option) => option['shopName']}
        />
      </div>
      <div className="section">
      <h2>Select a Transporter:</h2>
        <Select
          className="react-select"
          value={selectedTransporter}
          onChange={handleTransporterChange}
          options={transporters}
          getOptionLabel={(option) => option['name']}
          getOptionValue={(option) => option['name']}
        />
      </div>
      <div className="section">
        <h2>Enter packaging rate:</h2>
        <input
            className='input-fields'
            type="number"
            placeholder="Packaging Rate"
            value={packagingRate}
            onChange={(e) => setPackagingRate(e.target.value)}
        />
      </div>
      <div className="section">
        <h2>Select a Book:</h2>
        <Select
          className="react-select"
          value={selectedBook}
          onChange={handleBookChange}
          options={booksData}
          getOptionLabel={(option) => option['name']}
          getOptionValue={(option) => option['name']}
        />
        <input
          className='input-fields'
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
            className='input-fields'
            type="number"
            placeholder="Rate"
            value={rate} // Use value to bind the rate state
            onChange={(e) => setRate(e.target.value)}
        />
        <button className="add-book-button" onClick={addBookToInvoice}>Add Book</button>
      </div>
      {selectedBooks.length > 0 && (
        <SelectedBooksTable selectedBooks={selectedBooks}onDeleteBook={deleteBook} />
      )}
      <button className="add-invoice-button" onClick={addInvoice}>
        Add Invoice
      </button>
      <button className="download-pdf-button" onClick={downloadPdf}>Download PDF Invoice</button> 
    
      <InvoicesList books={books} />
    </div>
    </div>
  );
}

export default App;
