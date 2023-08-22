import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function App() {
  const [clients, setClients] = useState([
    'Client A',
    'Client B',
    'Client C',
    // Add more clients
  ]);

  const [selectedClient, setSelectedClient] = useState('');
  const [bookTypes, setBookTypes] = useState([
    'Book Type X',
    'Book Type Y',
    'Book Type Z',
    // Add more book types
  ]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleBookChange = (event, bookType) => {
    const newQuantities = { ...quantities, [bookType]: event.target.value };
    setQuantities(newQuantities);
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 10, 10);
    doc.autoTable({
      head: [['Book Type', 'Quantity']],
      body: Object.keys(quantities).map((bookType) => [
        bookType,
        quantities[bookType],
      ]),
    });
    doc.save('invoice.pdf');
  };

  return (
    <div className="App">
      <h1>Invoice Making Software</h1>
      <label>Select Client:</label>
      <select value={selectedClient} onChange={handleClientChange}>
        <option value="">Select a client</option>
        {clients.map((client, index) => (
          <option key={index} value={client}>
            {client}
          </option>
        ))}
      </select>
      <h2>Select Books and Quantities:</h2>
      {selectedClient && (
        <div>
          {bookTypes.map((bookType, index) => (
            <div key={index}>
              <label>{bookType}:</label>
              <input
                type="number"
                value={quantities[bookType] || ''}
                onChange={(event) => handleBookChange(event, bookType)}
              />
            </div>
          ))}
        </div>
      )}
      {selectedClient && (
        <button onClick={generateInvoice}>Generate Invoice</button>
      )}
    </div>
  );
}

export default App;
