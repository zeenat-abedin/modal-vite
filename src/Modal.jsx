
function Modal({isOpen, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <button onClick={onClose}>&times;</button>      
        <h2>Dummy Modal</h2>     
      </div>
      <div className="modal-content">
        <p>This is a modal content with lots of text</p>    
      </div>
      <div className="modal-footer">
        <p>Modal Footer</p> 
      </div>
    </div>
  )
}

export default Modal
