import { createContext, useContext, useReducer } from "react";
import { products } from "../backend/db/products";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const filterInitialState = {
  filters: {
    sortBy: "",
    category: {
      computer: false,
      mobile: false,
      television: false,
      accessories: false,
    },
    rating: 0,
  }
};

function filterReducer(state, action) {
  const { payload } = action;

  switch (action.type) {
    case "SORT":
      return {
        ...state,
        filters: { ...state.filters, sortBy: payload.sortValue },
      };
    case "TOGGLE_CATEGORY":
      const newCategory = { ...state.filters.category };
      newCategory[payload.categoryType] = payload.isChecked;

      return {
        ...state,
        filters: { ...state.filters, category: { ...newCategory } },
      };
      case "RATING":
        return {
          ...state,
          filters: { ...state.filters, rating:payload }
        }
      case "CLEAR":
        return {
          ...state,
          filters: {
            sortBy: "",
            category: {
              computer: false,
              mobile: false,
              television: false,
              accessories: false,
            },
            rating: 0,
          }
        }
    default:
      return state;
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
