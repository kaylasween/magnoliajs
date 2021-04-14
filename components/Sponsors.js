import React from 'react'

export default function Sponsors(props) {
  return (
    <div className="sponsors">
      {props.sponsors.map(sponsor => (
        <a href={sponsor.link} target="_blank" rel="noreferrer">{props.children} <span className="visually-hidden">{sponsor.name}</span></a>
      ))}

    </div>
  )
}