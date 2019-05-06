import React from 'react'

export default function Summary({ name, job }) {
  return (
    <div className='entry'>
      <p>
        <strong>{name}</strong>
        <em>{job}</em>
      </p>
    </div>
  )
}
