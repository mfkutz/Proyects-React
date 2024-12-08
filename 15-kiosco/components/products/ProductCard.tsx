import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    const imagePath = getImagePath(product.image) //change path automatic...local or cloudinary

    return (
        <div className="border bg-white max-w-96">

            <Image
                width={400}
                height={500}
                src={imagePath}
                alt={`Imagen platillo ${product.name}`}
                quality={75} //75 default
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <AddProductButton
                    product={product}
                />
            </div>
        </div>
    )
}
