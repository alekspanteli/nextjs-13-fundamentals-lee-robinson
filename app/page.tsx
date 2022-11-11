
// import Link from 'next/link';

import { Key } from "react";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home page</h1>
//       <Link href="/blog">Blog</Link>
//     </div>
//   )
// }

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}


export default async function Home() {
  const res = await getData();
  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <ul>
        {res.map((item: any) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

