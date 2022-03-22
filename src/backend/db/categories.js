import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Computers",
    description:
      "Check out Computers and Laptops from top brands"
  },
  {
    _id: uuid(),
    categoryName: "Mobiles",
    description:
      "Check out Mobiles from Top Brands"
  },
  {
    _id: uuid(),
    categoryName: "Televisions",
    description:
      "Check out Televisions from Top Brands."
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    description:
      "Check out Accessories from Top Brands" 
  }
];
