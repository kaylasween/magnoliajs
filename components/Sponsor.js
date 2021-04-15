import React from 'react'

export default function Sponsor(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">{props.children} <span className="visually-hidden">{props.name}</span></a>
  )
}