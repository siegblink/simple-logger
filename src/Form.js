import React, { useState, Fragment } from 'react'
import Summary from './Summary'
import './form.css'

export default function Form(props) {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const submitForm = () => {
    props.handleSubmit({ name: name, job: job })
    setName('')
    setJob('')
  }

  const list =
    props.data.length === 0 ? (
      <p>No data to display</p>
    ) : (
      props.data.map(({ name, job }, index) => (
        <div key={index} className='summary-container'>
          <Summary name={name} job={job} />
          <div onClick={() => props.removeChar(index)} className='delete'>
            Delete
          </div>
        </div>
      ))
    )

  return (
    <Fragment>
      <div>
        <h3>List</h3>
        {list}
      </div>

      <div className='form-container'>
        <label className='name' htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className='job' htmlFor='job'>
          Job
          <input
            type='text'
            id='job'
            value={job}
            onChange={e => setJob(e.target.value)}
          />
        </label>
      </div>
      <input
        className='submithandler'
        type='button'
        value='Submit'
        onClick={submitForm}
      />
    </Fragment>
  )
}
