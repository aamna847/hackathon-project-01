 import { Any, createClient } from "next-sanity";


const client = createClient({
    projectId : "rervwe1l",
     dataset : "production",
     useCdn: true,
    apiVersion: "2023-10-10"
 })

 export async function sanityFetch({query, params = {}}: {query : string, params?: Any}){
    return await client.fetch(query, params)
 }