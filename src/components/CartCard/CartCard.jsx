import React, { useState } from 'react';
import './CartCard.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import PaymentModal from '../Order/PaymentMode';

const CartCard = ({ name, price, image, id }) => {
  const dispatch = useDispatch();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [showConfirmRemove, setShowConfirmRemove] = useState(false);

  const confirmRemove = () => {
    dispatch(RemoveItem(id));
    toast.error(`${name} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
    setShowConfirmRemove(false); // Close the confirm modal
  };

  return (
    <>
      <div className="CartCard bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-4">
        <div className="left-card flex items-center gap-4">
          <img src={image} alt={name} className="w-20 h-20 object-contain rounded" />
          <div className="name-price flex flex-col">
            <span className="font-semibold text-lg">{name}</span>
            <span className="text-gray-600">Rs {price}</span>
          </div>
        </div>
        <div className="right-card flex gap-4">
          <button
            onClick={() => setShowConfirmRemove(true)}
            className="text-red-600 hover:text-red-800 transition flex items-center gap-1">
            Remove <RiDeleteBin6Line size={18} />
          </button>

          <button
            onClick={() => setIsPaymentOpen(true)}
            className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition">
            Proceed
          </button>
        </div>
      </div>

      {/* Confirm Remove Modal */}
      {showConfirmRemove && (
        <div className="Payment-main">
          <div className="Payment-sec">
            <h2 className="Heading">Are you sure you want to remove this item?</h2>
            <div className="Btn">
              <button onClick={() => setShowConfirmRemove(false)} className="Close-btn">No</button>
              <button onClick={confirmRemove} className="Procced-btn">Yes, Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentOpen && (
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          id={id}
          name={name}
        />
      )}
    </>
  );
};

export default CartCard;
