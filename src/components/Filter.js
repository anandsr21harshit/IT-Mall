import React from "react";
import { useFilter } from "../context/filter-context";
import "../css/filter.css";

function Filter() {
  const { filterState, filterDispatch } = useFilter();

  return (
    <aside className="filter-container">
      <div className="filter-heading">
        <h1>Filter</h1>
        <span onClick={()=>filterDispatch({type:"CLEAR"})}>Clear All</span>
      </div>
      <div className="price-range">
        <h3> Sort by Price</h3>
        <ul className="price-list">
          <li>
            <input
              type="radio"
              name="price-sort"
              id="low_to_high"
              checked = {filterState.filters.sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                filterDispatch({
                  type: "SORT",
                  payload: { sortValue: "LOW_TO_HIGH" },
                })
              }
            />
            <label htmlFor="low_to_high">Low to High</label>
          </li>
          <li>
            <input
              type="radio"
              name="price-sort"
              id="high_to_low"
              checked = {filterState.filters.sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                filterDispatch({
                  type: "SORT",
                  payload: { sortValue: "HIGH_TO_LOW" },
                })
              }
            />
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
              checked = {filterState.filters.category.computer}
              onChange={(e) =>
                filterDispatch({
                  type: "TOGGLE_CATEGORY",
                  payload: { isChecked: e.target.checked, categoryType:'computer' },
                })
              }
            />
            <label htmlFor="computers">Computers</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="mobile"
              checked = {filterState.filters.category.mobile}
              onChange={(e) =>
                filterDispatch({
                  type: "TOGGLE_CATEGORY",
                  payload: { isChecked: e.target.checked, categoryType:'mobile' },
                })
              }
            />
            <label htmlFor="mobile">Mobile Phones</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="television"
              checked = {filterState.filters.category.television}
              onChange={(e) =>
                filterDispatch({
                  type: "TOGGLE_CATEGORY",
                  payload: { isChecked: e.target.checked, categoryType:'television' },
                })
              }
            />
            <label htmlFor="television">Televison</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="accessories"
              checked = {filterState.filters.category.accessories}
              onChange={(e) =>
                filterDispatch({
                  type: "TOGGLE_CATEGORY",
                  payload: { isChecked: e.target.checked, categoryType:'accessories' },
                })
              }
            />
            <label htmlFor="accessories">Accessories</label>
          </li>
        </ul>
      </div>
      <div className="rating">
        <h3>Ratings</h3>
        <ul className="rating-list">
          <li>
            <input
              type="radio"
              name="rating"
              id="rating4"
              checked = {filterState.filters.rating === 4}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: 4 })
              }
            />
            <label htmlFor="RATING">4 stars and above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating3"
              checked = {filterState.filters.rating === 3}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: 3 })
              }
            />
            <label htmlFor="rating3">3 stars and above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating2"
              checked = {filterState.filters.rating === 2}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: 2 })
              }
            />
            <label htmlFor="rating2">2 stars and above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating1"
              checked = {filterState.filters.rating === 1}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: 1 })
              }
            />
            <label htmlFor="rating1">1 star and above</label>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export { Filter };
