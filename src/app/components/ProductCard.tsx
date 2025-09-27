import { IProduct } from "../types/types.index";

export default function ProductCard({product}: {product: IProduct}) {
    return (
        <div className="bg-white border border-gray-200 rounded-md shadow-md p-4 text-center">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-1 text-black">{product.name}</h2>
            <p className="text-sm text-gray-900 mb-2">
                {product.brand} • {product.category}
            </p>
            <p className="text-md font-bold text-green-600">${product.price.toFixed(2)}</p>
        </div>
    )
}
