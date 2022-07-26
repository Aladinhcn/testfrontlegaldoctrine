//Import the Action types
import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

// Export function to calculate the total price of the cart and the total quantity of the cart
export const sumItems = (cartItems) => {
  Storage(cartItems);

  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === "Butter" && cartItems[i].quantity >= 2) {
      var discount = true;
      var countBreadDiscount = Math.floor(cartItems[i].quantity / 2)
    }
    if (cartItems[i].title === "Milk" && cartItems[i].quantity >= 3) {
      let countFreeMilks = cartItems[i].quantity /3;
      var discountMilk = -1.15 * Math.floor(countFreeMilks);
    }

    if (cartItems[i].title === "Bread" && cartItems[i].quantity >= 1) {
      if (discount === true) {
        var discountBread = -0.5 * countBreadDiscount;
      }
    }
  }
  return { itemCount, total, discountBread, discountMilk };
};

const Storage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          discount: 0,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
    case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
    case CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    //If the action type is CLEAR, we want to clear the cartItems array
    case CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
