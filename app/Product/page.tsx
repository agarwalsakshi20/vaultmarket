import { prisma } from "@/lib/prisma"
import { Product } from "@prisma/client"

export default async function ProductsPage() {

  const products: Product[] = await prisma.product.findMany()

  return (
    <div style={{ padding: 40 }}>

      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: 20 }}>

          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>

        </div>
      ))}

    </div>
  )
}