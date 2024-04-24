import React from 'react';
import './sidebar2.css';
import { useState } from 'react';

const PurchasePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('');
    const [ticketCount, setTicketCount] = useState(1);
  
    const openModal = (ticketName) => {
      setSelectedTicket(ticketName);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const handlePurchase = () => {
      alert(`You have purchased ${ticketCount} ticket(s) for ${selectedTicket}.`);
      setShowModal(false);
    };
  
    return (
      <div className="purchase-page">
        <h1>Purchase Tickets</h1>
        <div className="ticket-option">
          <h2>Ticket for The Beast - $20 Boss Bucks</h2>
          <p>Experience the thrill of The Beast, our most terrifying haunted house.</p>
          <button onClick={() => openModal('The Beast')}>Purchase</button>
        </div>
        <div className="ticket-option">
          <h2>Ticket for The Edge of Hell - $20 Boss Bucks</h2>
          <p>Step into The Edge of Hell, if you dare...</p>
          <button onClick={() => openModal('The Edge of Hell')}>Purchase</button>
        </div>
  
        {showModal && (
          <div className="modal">
            <h2>Purchase Tickets for {selectedTicket}</h2>
            <label>
              Number of tickets:
              <input type="number" value={ticketCount} min="1" onChange={(e) => setTicketCount(e.target.value)} />
            </label>
            <button onClick={handlePurchase}>Confirm Purchase</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        )}
      </div>
    );
  };
  
  export default PurchasePage;