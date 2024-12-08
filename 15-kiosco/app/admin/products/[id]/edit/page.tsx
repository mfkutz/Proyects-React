import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/UI/GoBackButton"
import Heading from "@/components/UI/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"


async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })

    if (!product) {
        notFound()
    }

    return product
}

export default async function EditProductsPage({ params }: { params: { id: String } }) {

    const product = await getProductById(+params.id)


    return (
        <>
            <Heading>Editar Producto: {product.name}</Heading>

            <GoBackButton />

            <EditProductForm>
                <ProductForm
                    product={product}
                />
            </EditProductForm>
        </>
    )
}
