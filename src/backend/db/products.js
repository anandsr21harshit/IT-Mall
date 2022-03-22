import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Lenovo-Ideapad",
    productPrice: 49976,
    image: "https://m.media-amazon.com/images/I/61q6x-ll5FL._SL1000_.jpg",
    category: "computer",
  },
  {
    _id: uuid(),
    productName: "Samasung-Galaxy-M52",
    productPrice: 19900,
    image: "https://m.media-amazon.com/images/I/81-tqKsrTuL._SL1500_.jpg",
    category: "mobile",
  },
  {
    _id: uuid(),
    productName: "Tribit-Headphone",
    productPrice: 9900,
    image: "https://m.media-amazon.com/images/I/71fss0M-hyL._SL1500_.jpg",
    category: "accessories",
  }
];
