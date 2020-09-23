import React from "react";
import Router, {useRouter} from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import MainLayout from "../../components/MainLayout";
import useUser from '../../useUser';

export default function Posts({post}) {
   const router = useRouter();
   const {data, isLoading, isError} = useUser(router.query.id);
   
   const clickHandler = () => {
      Router.push('/')
   }
   if (isError) return <MainLayout>failed to load</MainLayout>
   if (isLoading) return <MainLayout>
      <ClipLoader
         size={15}
         color={"#123abc"}
         // loading={this.state.loading}
      />
   </MainLayout>

   return (
      <MainLayout>
         <h1>
            Posts id: {router.query.id}
         </h1>
         <h3>
            {data.name}
         </h3>
         <h3>
            {data.title}
         </h3>
         <button onClick={clickHandler}>Go back home</button>
         <button onClick={() => Router.push('/about')}>Go to about</button>
         <button onClick={() => router.back()}>Go back to posts</button>
      </MainLayout>
   )
}

Posts.getInitialProps = async (ctx) => {
   const res = await fetch(`${process.env.api}/restaurants/${ctx.query.id}`)
   const post = await res.json();
   return {post}
}