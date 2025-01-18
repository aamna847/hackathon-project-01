 import { defineQuery } from "next-sanity";

 export const allproducts=defineQuery(`
    *[_type == 'products']{
  title,
    price,
     "image" : image.asset->url,
    tags,
    badge,
    inventory,
    description,
    priceWithoutDiscount,
    _id
}`)

  
// export const fourpro = defineQuery(`
//     *[_type == 'products'][0..3],{
//     _id,
//     name,
//     price,
//     priceWithoutDiscount,
//     badge,
//     tags,
//     description,
//     category,
//     inventory
//     "imageUrl" : image.assets->url
// }
//     *[_type == "categories]{
//     _title,
//     products,
//     "imageUrl" : image.assets->url
//     }
//     }
//   `)

