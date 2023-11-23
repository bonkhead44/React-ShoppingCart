import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
  const sendRequest = async () => {
    const response = await fetch(
      'https://react-http-example-1060f-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }
  };

try {
    sendRequest();
} catch (error) {
    
}

};
