import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ({ params, }: Props): Metadata => {
    return {
        title: `producto ${params.productId}`,
    }
}

export default function ProductDetail({params}: Props) {
    return <h1>Producto {params.productId}</h1>
}