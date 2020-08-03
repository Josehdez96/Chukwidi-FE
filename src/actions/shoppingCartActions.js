import { ADD_TO_CART } from '../types/shoppingCartTypes';

export const addToCart = (element) => (dispatch, getState) => {
  const { shoppingCart } = getState().shoppingCartReducer;

  /* 
  Esto nos permite añadir productos al carrito de compra, 
  si no hacemos esto, al añadir un producto se sobreescribe el estado
  */
  const updatedShoppingCart = [...shoppingCart, element];

  dispatch({
    type: ADD_TO_CART,
    payload: updatedShoppingCart,
  });

  alert('¡Añadiste un producto al carrito!');
};

/* Pendiente por realizar el action remover del carrito
export const removeToCart = (element) => (dispatch) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: element
  })
}
*/
