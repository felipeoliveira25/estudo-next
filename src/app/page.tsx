import { stripe } from "@/lib/stripe";
import { IProduct } from "@/types/product";
import Image from "next/image";

const getData = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products:IProduct[] = response.data.map((product) => {
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
    }
  })
  return products
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <Image src={item.imgUrl} alt="" width={200} height={200}/>
            <span>{item.name}</span>
          </div>
        ))}
      </ul>
    </div>
    
  );
}
