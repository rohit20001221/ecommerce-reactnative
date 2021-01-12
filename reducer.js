export const initialState = {
  cart: [],
  user: null,
};

export const getSubtotal = (cart) => {
  var sum = 0;
  cart.forEach((element) => {
    sum += element.price * element.quantity;
  });

  return sum;
};

const reducer = (state, action) => {
  var cart, cart_item;
  switch (action.type) {
    case "ADD_TO_CART":
      cart_item = state.cart.filter((i) => i.id === action.item.id);
      if (cart_item.length > 0) {
        action.setTitle("Item already added!");
        return state;
      }

      return { ...state, cart: [...state.cart, action.item] };
    case "UPDATE_CART_ITEM":
      cart_item = state.cart.filter((i) => i.id === action.id)[0];
      cart_item.quantity = cart_item.quantity + action.update;

      if (cart_item.quantity <= 0) {
        cart = state.cart.filter((i) => i.id !== action.id);
      } else {
        cart = state.cart.map((i) => {
          if (i.id === action.id) {
            return cart_item;
          } else {
            return i;
          }
        });
      }

      return { ...state, cart: cart };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
