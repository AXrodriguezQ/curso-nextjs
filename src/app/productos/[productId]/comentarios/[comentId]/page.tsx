export default function ComentDetail(
    {params}: {
        params: {
            productId: string
            comentId: string
        }
    }
    ) {
        return <h1>Comentario {params.comentId} del producto {params.productId}</h1>
}