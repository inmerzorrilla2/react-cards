import React from 'react'
import './styles/card.css'

const Card = ({color, title}) => {

    const styles = {
        backgroundColor: color
    }

    const titleStyles = {
        color: title
    }

  return (
    <article>
        <h2> { title }</h2>
        <h3>Our Solution</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id corporis, fugiat consectetur voluptas quo ut.</p>
    </article>
  )
}

export default Card
