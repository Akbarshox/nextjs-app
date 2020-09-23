import React, {useState, useEffect} from "react";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";

export default function Posts({posts}) {

   return (
      <MainLayout>
         <h1>
            Posts page:
         </h1>
         <pre>
            <ul>
               {posts.map((e, i) =>
                  <li key={i}>
                     <Link href={'/posts/[id]'} as={`posts/${e.id}`}><a>{e.name}</a></Link>
                  </li>
               )}
            </ul>
         </pre>
      </MainLayout>
   )
}

Posts.getInitialProps = async () =>  {
   const response = await fetch(`${process.env.api}/restaurants/`)
   const posts = await response.json()
   return {
      posts
   }
}