/* eslint-disable react/prop-types */

function Modal({ isOpen, onClose }) {
    if(!isOpen) return null
    return (
    <div className="modal-overlay">
    <div className="modal-container">
      <div className="modal-header">
        <h2>Dummy Modal</h2>     
        <button onClick={onClose}>&times;</button>      
      </div>
      <div className="modal-content">
        <p>This is a modal content with lots of text</p>    
      </div>
      <div className="modal-footer">
        <p>Modal Footer</p> 
      </div>
    </div>
    </div>
  )
}

export default Modal
