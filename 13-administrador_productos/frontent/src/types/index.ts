import { number, object, string, boolean, array } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});

// export type Product = Output<typeof ProductSchema>; // no me funciona Output, cambió valibot?

export const ProductsSchema = array(ProductSchema);

// lo hice manual
export type Product = {
  id: number;
  name: string;
  price: number;
  availability: boolean;
};
