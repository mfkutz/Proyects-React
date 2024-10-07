export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

//with interface
// export interface CartItem extends Guitar {
//   quantity: number;
// }

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & { //elegimos que elementos le pasamos
//   quantity: number;
// };

// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & { //similar pero este omite los elementos que le pasamos
//   quantity: number;
// };
