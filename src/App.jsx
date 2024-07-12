import { useState } from 'react'

import './App.css'
import Modal from './Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && <Modal isOpen={isModalOpen} />}
    </>
  )
}

export default App
