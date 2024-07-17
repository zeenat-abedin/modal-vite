import { useState } from 'react'

import Modal from './Modal'
import Users from './Users'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Users/>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

    </>
  )
}

export default App
