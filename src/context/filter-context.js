import { createContext, useContext, useReducer } from "react";
import { products } from "../backend/db/products";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const filterInitialState = {
  filteredData: products,
  sorted: {
    lowToHigh: false,
    highToLow: false,
  },
  category: {
    isComputer: false,
    isMobile: false,
    isAccessories: false,
    isTelevision: false,
  },
};

function filterReducer(state, action) {
  let productCopy = [...products];
  switch (action.type) {
    case "sort":
      if (action.payload === "low_to_high") {
        if (state.category.isComputer)
          productCopy = products.filter((item) => item.category === "computer");
        if (state.category.isMobile)
          productCopy = products.filter((item) => item.category === "mobile");
        if (state.category.isAccessories)
          productCopy = products.filter(
            (item) => item.category === "accessories"
          );
        if (state.category.isTelevision)
          productCopy = products.filter(
            (item) => item.category === "television"
          );
        const sortedData = productCopy.sort(
          (item1, item2) => item1.productPrice - item2.productPrice
        );
        return {
          ...state,
          filteredData: sortedData,
          sorted: { lowToHigh: true },
        };
      } else {
        if (state.category.isComputer)
          productCopy = products.filter((item) => item.category === "computer");
        if (state.category.isMobile)
          productCopy = products.filter((item) => item.category === "mobile");
        if (state.category.isAccessories)
          productCopy = products.filter(
            (item) => item.category === "accessories"
          );
        if (state.category.isTelevision)
          productCopy = products.filter(
            (item) => item.category === "television"
          );
        const sortedData = productCopy.sort(
          (item1, item2) => item2.productPrice - item1.productPrice
        );
        return {
          ...state,
          filteredData: sortedData,
          sorted: { highToLow: true },
        };
      }

    case "category":
      if (action.payload === "computer") {
        const categorisedData = products.filter(
          (item) => item.category === "computer"
        );
        return {
          ...state,
          filteredData: categorisedData,
          category: { isComputer: true },
        };
      } else if (action.payload === "mobile") {
        const categorisedData = products.filter(
          (item) => item.category === "mobile"
        );
        return { ...state, filteredData: categorisedData };
      } else if (action.payload === "television") {
        const categorisedData = products.filter(
          (item) => item.category === "television"
        );
        return {
          ...state,
          filteredData: categorisedData,
          category: { isTelevision: true },
        };
      } else {
        const categorisedData = products.filter(
          (item) => item.category === "accessories"
        );
        return { ...state, filteredData: categorisedData };
      }

    case "rating":
      if (action.payload === "rating4") {
        const ratedData = products.filter((item) => item.productRating >= 4);
        return { ...state, filteredData: ratedData };
      } else if (action.payload === "rating3") {
        const ratedData = products.filter((item) => item.productRating >= 3);
        return { ...state, filteredData: ratedData };
      } else if (action.payload === "rating2") {
        const ratedData = products.filter((item) => item.productRating >= 2);
        return { ...state, filteredData: ratedData };
      } else {
        const ratedData = products.filter((item) => item.productRating >= 1);
        return { ...state, filteredData: ratedData };
      }
    default:
      return { ...state, filteredData: products };
  }
}

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
