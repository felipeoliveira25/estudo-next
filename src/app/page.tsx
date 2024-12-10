import { stripe } from "@/lib/stripe";

const getData = async() => {
  const response = await stripe.products.list()
  console.log(response.data)
  return response.data
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}
      </ul>
    </div>
    
  );
}
