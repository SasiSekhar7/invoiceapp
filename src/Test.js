import React, { useState, useEffect } from 'react';
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
  const [bundleQuantity, setBundleQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [clients] = useState(clientsData);
  const [booksData] = useState(booksData1);
  const [transporters]= useState(transporterData);
  const [books, setBooks] = useState([]);
  const [clientDetails, setClientDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [LRNO, setLRNO] = useState(null);
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${
      String(currentDate.getMonth() + 1).padStart(2, '0')
    }/${currentDate.getFullYear()}`;
    setSelectedDate(formattedDate);
  }, []);
  const handleClientChange = (selectedOption) => {
    setSelectedClient(selectedOption);
    const selectedClientDetails = clientsData.find(
      (client) => client.shopName === selectedOption.shopName
    );
    setClientDetails(selectedClientDetails);
  };
  const handleTransporterChange = (selectedOption) => {
    setSelectedTransporter(selectedOption);
  };
  const handleBookChange = (selectedOption) => {
    setSelectedBook(selectedOption);
    setQuantity('');
    if (selectedOption) {
      setRate(selectedOption.rate); 
      setBundleQuantity(selectedOption.bundleQuantity);
    } else {
      setRate(0);
      setBundleQuantity(0);
    }
    
  };
  

  const addBookToInvoice = () => {
    if (selectedBook && quantity > 0 && rate > 0) {
      const bookInfo = { book: selectedBook, quantity, rate , bundleQuantity};
      setSelectedBooks([...selectedBooks, bookInfo]);
      setSelectedBook(null);
      setQuantity(0);
      setRate(0);
      setBundleQuantity(0);
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
      const invoiceDoc = generateInvoice(selectedClient, selectedBooks, selectedTransporter, packagingRate,selectedDate,LRNO);
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
      <div>
          <input
            className='input-fields-date'
            type="text"
            placeholder="DD-MM-YYYY"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      <div className="section">
        <h2>Select a Client:</h2>
        <Select
          className="react-select-big"
          value={selectedClient}
          onChange={handleClientChange}
          options={clients}
          getOptionLabel={(option) => option['shopName']} 
          getOptionValue={(option) => option['shopName']}
        />
      </div>
      {clientDetails && (
          <div className="section">
            <h2>Client Details:</h2>
            <p><strong>Address:</strong> {clientDetails.ADRESS}</p>
            <p><strong>Pin:</strong> {clientDetails.pin}</p>
            <p><strong>Dist:</strong> {clientDetails.district}</p>
            <p><strong>Mob.:</strong> {clientDetails.mobile}</p>
          </div>
        )}
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
        <h2>Packaging rate:</h2>
        <input
            className='input-fields-reg'
            type="number"
            placeholder="Packaging Rate"
            value={packagingRate}
            onChange={(e) => setPackagingRate(e.target.value)}
        />
        <h2>LR NO:</h2>
        <input
            className='input-fields-reg'
            type="text"
            placeholder="LRNO"
            value={LRNO}
            onChange={(e) => setLRNO(e.target.value)}
        />
      </div>
      <div className="section">
        <h2>Select a Book:</h2>
        <Select
          className="react-select-big"
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
          placeholder="BundleQty"
          value={bundleQuantity}
          onChange={(e) => setBundleQuantity(e.target.value)}
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
