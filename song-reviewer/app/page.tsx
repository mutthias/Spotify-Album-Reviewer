
import Link from "next/link"
import prisma from "@/prisma/client";

interface Post {
  id: string;
  title: string;
  content: string | undefined;
  published: boolean

}

async function getPosts() {
  const res = await fetch("http://localhost:3001/api/getPosts")
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

async function g() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts
}


export default async function Home() {
  const data = await g()
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {data.map((post) => (
        <h1 key={post.id} className="text-lg">{post.title}</h1>
      ))}
    </main>
  );
}