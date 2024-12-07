import ProductTable from '@/components/products/ProductsTable'
import Heading from '@/components/UI/Heading'
import { prisma } from '@/src/lib/prisma'


async function getProducts(page: number, pageSize: number) {

    //Pagination
    const skip = (page - 1) * pageSize

    const products = await prisma.product.findMany({
        take: pageSize,
        skip,
        include: {
            category: true
        }
    })

    return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>> //infer all

export default async function ProductsPage({ searchParams }: { searchParams: { page: String } }) {

    const page = +searchParams.page || 1
    const pageSize = 10

    console.log(page)

    const products = await getProducts(page, pageSize)


    return (
        <>
            <Heading>
                Administrar productos
            </Heading>

            <ProductTable
                products={products}
            />
        </>
    )
}
