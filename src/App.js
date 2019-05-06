import React, { useState } from 'react'
import Form from './Form'

export default function App() {
  const [state, setState] = useState([])

  const removeChar = index => {
    setState(state.filter((item, idx) => idx !== index))
  }

  const handleSubmit = character => {
    setState([...state, character])
  }

  return (
    <div className='container'>
      <Form data={state} handleSubmit={handleSubmit} removeChar={removeChar} />
    </div>
  )
}
