
import Link from "next/link"
import prisma from "@/prisma/client";
import Navbar from "./components/Navbar";


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
  // const data = await g()
  // console.log(data)
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />

      <div className="flex-1 flex w-screen ">
        {/* Section 1: Reviews */}
        <div className="flex-1">
          <video className="flex-1 w-full h-full " autoPlay muted loop>
            <source src="/sacredsouls.mp4" type="video/mp4" />
          </video>
          
        </div>

        {/* Section 2: Find Songs */}
        <div className="flex-1 bg-gray-300">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="path/to/find-songs-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Section 3: View Stats */}
        <div className="flex-1 bg-black-400">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="path/to/view-stats-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}