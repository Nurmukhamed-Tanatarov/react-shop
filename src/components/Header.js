import React, { useState } from "react";
import { FaShopify } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Нет товаров в корзине</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
        <FaShopify
          onClick={() => setCartOpen((cartOpen === !cartOpen))}
          className={`shop-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.lenght > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
