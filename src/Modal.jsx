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
        <p>This is a modal content with lots of text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias alias. Dolore quam nam voluptatibus repellat corrupti, qui dolor maxime ipsa sapiente sunt, ab aliquam culpa obcaecati eius cum delectus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, rem.</p>    
      </div>
      <div className="modal-footer">
        <p>Modal Footer</p> 
      </div>
    </div>
    </div>
  )
}

export default Modal
