import './Popup.css';

const Popup = ({ message, onClose }) => (
  <div className='popup-overlay'>
    <div className='popup-content'>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Popup;