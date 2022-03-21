import React from "react"

function DishSummary(props) {
  const { dish } = props
  return (
    console.log(props),
    <div className="dish-summary">
      <img src={dish.image} alt={dish.name}></img>
      <div className="dish-summary-text">
        <h1>{dish.name}</h1>
        <p>{dish.summary}</p>
      </div>
    </div>
  )
}

export default DishSummary