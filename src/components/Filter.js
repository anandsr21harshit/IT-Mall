import React from 'react'
import "../css/filter.css"

function Filter() {

  return (
    <aside className="filter-container">
      <h1 className="filter-heading">Filter</h1>
      <div className="slider">
        <span>Rs 500</span>
        <span>Rs 5000</span>
        <input type="range" min="0" max="100" />
      </div>
      <div className="price-range">
        <h3> Sort by Price</h3>
        <ul className="price-list">
          <li>
            <input type="radio" name="price-sort" id="low_to_high" />
            <label htmlFor="low_to_high">Low to High</label>
          </li>
          <li>
            <input type="radio" name="price-sort" id="high_to_low" />
            <label htmlFor="high_to_low">High to Low</label>
          </li>
        </ul>
      </div>
      <div className="category">
        <h3>Category</h3>
        <ul className="category-list">
          <li>
            <input 
              type="checkbox" 
              id="computers" 
              />
            <label htmlFor="computers">Computers</label>
          </li>
          <li>
            <input type="checkbox" id="mobile" />
            <label htmlFor="mobile">Mobile Phones</label>
          </li>
          <li>
            <input type="checkbox" id="televison" />
            <label htmlFor="televison">Televison</label>
          </li>
          <li>
            <input type="checkbox" id="accessories" />
            <label htmlFor="accessories">Accessories</label>
          </li>
        </ul>
      </div>
      <div className="rating">
        <h3>Ratings</h3>
        <ul className="rating-list">
            <li>
                <input type="radio" name="rating" id="rating1" />
                <label htmlFor="rating-1">4 stars and above</label>
            </li>
            <li>
                <input type="radio" name="rating" id="rating2" />
                <label htmlFor="rating-2">3 stars and above</label>
            </li>
            <li>
                <input type="radio" name="rating" id="rating3" />
                <label htmlFor="rating-3">2 stars and above</label>
            </li>
            <li>
                <input type="radio" name="rating" id="rating4" />
                <label htmlFor="rating-4">1 star and above</label>
            </li>
        </ul>
        </div>
    </aside>
  )
}

export {Filter};