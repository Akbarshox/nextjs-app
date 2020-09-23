import React from "react";
import Router from 'next/router';
import MainLayout from "../components/MainLayout";

export default function About() {
   const clickHandler = () => {
      Router.push('/')
   }
   console.log(process.env.customKey)
   return (
      <MainLayout>
         <h1>
            About Page
         </h1>
         <button onClick={clickHandler}>Go back home</button>
         <button onClick={() => Router.push('/posts')}>Go posts</button>
      </MainLayout>
   )
}