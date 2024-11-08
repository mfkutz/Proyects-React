import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Products, { loader as productLoader } from "./views/Products"
import NewProducts, { action as newProductAction } from "./views/NewProducts"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                // path: "/", //similar to index:true
                element: <Products />,
                loader: productLoader
            },
            {
                path: 'producto/nuevo',
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path: "productos/:id/editar" //ROA Pattern
            }
        ]
    }
])