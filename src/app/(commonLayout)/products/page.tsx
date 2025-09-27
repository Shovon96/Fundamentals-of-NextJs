import ProductCard from "@/app/components/ProductCard";
import { IProduct } from "@/app/types/types.index";

export default async function ProductPage() {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-8">Total Products: {products.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[80%] mx-auto my-4">
                {
                    products?.map((product: IProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}
