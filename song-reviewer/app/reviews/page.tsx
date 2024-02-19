
import Link from "next/link"
import prisma from "@/prisma/client";
import Navbar from "../components/Navbar";

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

/*
Homepage with 3 options
  1) Review an album
  2) Search for a similar song
  3) View your stats
*/

export default async function Home() {
  const data = await g()
  console.log(data)
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <div className="flex flex-wrap">
        {data.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white p-4 border rounded-md">
              <h1 className="text-md ">{post.title}</h1>
              {/* Additional post content goes here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}