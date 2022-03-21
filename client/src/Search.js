import React from "react"
import DishSummary from "./components/DishSummary"

function Search(props) {
  const { dishes, isChef } = props



  return (
    console.log(props),
    <div className="search">
      {dishes ? <>
        {dishes.map(dish =>
          <DishSummary key={dish._id} dish={dish} />)}
      </> : null}
      <p>Search</p>
    </div>
  )
}

export default Search