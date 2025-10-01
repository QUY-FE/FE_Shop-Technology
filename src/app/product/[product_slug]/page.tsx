

export default async function Product({params,
}: {
  params: Promise<{ product_slug: string }>
}){
    const { product_slug } = await params
    return(
        <div>{product_slug}</div>
    );
}