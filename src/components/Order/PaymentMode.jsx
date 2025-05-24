import React, { useState } from 'react';
import './Confirm.css';

const PaymentModal = ({ isOpen, onClose }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);


  if (!isOpen) return null;

  const handleProceed = () => {
    // Simulate order confirmation
    setOrderConfirmed(true);

    // Optional: auto-close the modal after a few seconds
    setTimeout(() => {
      setOrderConfirmed(false);
      onClose(); // Close the modal
    }, 3000); // 3 seconds
  };
  

  return (
    <div className="Payment-main">
      <div className="Payment-sec">
        {orderConfirmed ? (
          <div className="confirmation-message">
            ✅ Your order has been confirmed!
          </div>
        ) : (
          <>
            <h2 className="Heading">Realy you want to confirm this order</h2>
            <div className="Deccribetion">
             
            </div>
            <div className="Btn">
              <button onClick={onClose} className="Close-btn">Close</button>
              <button onClick={handleProceed} className="Procced-btn">Proceed</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
