import React from "react";
import "../css/Checkout.css";
import useStateValue from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://imgs.search.brave.com/_ICWzG4qDFVaVKdWfHDUUlKfhdcyKqAm7m9GO9pbveA/rs:fit:600:98:1/g:ce/aHR0cDovL215d2lm/ZXF1aXRoZXJqb2Iu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMTMvMDgv/QW1hem9uUHJvZHVj/dEFkc0Jhbm5lci5q/cGc"
          alt=""
        />

        <div>
          <h3>{!user ? "Hello Guest" : "Hello " + user.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
