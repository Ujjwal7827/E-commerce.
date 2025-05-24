import React, { useState } from 'react';
import './Remove.css';
import { toast } from 'react-toastify';
import { RemoveItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const PaymentModal = ({ isOpen, onClose, id, name }) => {
 
  const dispatch = useDispatch();
   const [showConfirmRemove, setShowConfirmRemove] = useState(false);

  if (!isOpen) return null;

  const handleRemove = () => {
    dispatch(RemoveItem(id));
    toast.error(`${name} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
    setOrderConfirmed(true); // Optionally show a message after cancel
    setTimeout(() => {
      setOrderConfirmed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="Payment-main">
      {showConfirmRemove && (
        <div className="Payment-main">
          <div className="Payment-sec">
            <h2 className="Heading">Are you sure you want to remove this item?</h2>
            <div className="Btn">
              <button onClick={() => setShowConfirmRemove(false)} className="Close-btn">No</button>
              <button onClick={handleRemove} className="Procced-btn"> Remove</button>
            </div>
          </div>
        </div>
      )}
        
    
      </div>
    
  );
};

export default PaymentModal;
