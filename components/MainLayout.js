import React from "react";
import Link from 'next/link';

export default function MainLayout({children}) {
   return (
      <>
         <nav>
            <Link href={'/'}><a>Main</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>
         </nav>
         <main>{children}</main>
         <style jsx>{`
            nav {
               height: 60px;
               background: #aaa;
               top: 0;
               left: 0;
               right: 0;
               display: flex;
               justify-content: space-around;
               align-items: center;
            }
            nav a {
               padding: 8px 16px;
               background-color: black;
               color: #fff;
            }
         `}</style>
      </>
   )
}