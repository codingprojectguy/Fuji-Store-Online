import EmptyCartImg from "../img/cart/empty-cart.png";

const EmptyCart = (openCart) => {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
};

export default EmptyCart;
