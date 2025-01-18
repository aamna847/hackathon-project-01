import { sanityFetch } from '@/sanity/lib/fetch';
import { allproducts } from '@/sanity/lib/queries';
import Image from 'next/image';


type Product = {

  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: number;
  tags: string;
  description: string;
  category: string;
  image: string;
}

export default async function Home() {
const products: Product[] = await sanityFetch({ query: allproducts })

  return (
    <div className='grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto] gap-5 px-10 xl:px-0 justify-content-center'>
      {products.map((product) => (
        <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center" key={product._id}>
          <Image
            src={product.image}
            alt={product.title}
            className="w-60"
            height={500}
            width={500}
          />
          <h1 className="text-xl font-bold text-center">{product.title}</h1>
          <p className="text-bold">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};


