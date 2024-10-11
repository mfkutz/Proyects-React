import { useEffect, useState, useMemo } from "react";
import { db } from "../data/db";
import type { Guitar, CartItem } from "../types/index";

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem("Cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: Guitar) {
    const itemExists = cart.findIndex((guitar: Guitar) => guitar.id === item.id);
    if (itemExists >= 0) {
      // cart[itemExists].quantity++ //hacerlo de esta forma funciona pero esta MAL, ya que el useState NO tiene que ser mutado
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const updaterCart = [...cart];
      updaterCart[itemExists].quantity++;
      setCart(updaterCart);
    } else {
      const newItem: CartItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id: Guitar["id"]) {
    // La función setCart toma el estado anterior (prevCart) como argumento a través de un callback
    // y luego retorna el nuevo estado, permitiendo modificar el cart basándonos en su estado actual.
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id)); //devolvemos todos los elementos diferentes al que se le hizo clic
  }

  function increaseQuantity(id: Guitar["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decreaseQuantity(id: Guitar["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  //State derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};
