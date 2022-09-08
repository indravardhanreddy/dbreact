import React from 'react'

const Movie = (props) => {
  return (<div>
    <div>Movie List</div>
    <li>
        <h2>{props.title}</h2>
        <h3>{props.releasedate}</h3>
        <p>{props.openingText}</p>
    </li>
    </div>
  )
}

export default Movie