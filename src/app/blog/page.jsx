"use client";

import Image from "next/image";
import blogPosts from "../../../blog";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="max-w-[1220px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen py-[7rem] px-3 gap-5">
      <h1 className=" text-4xl font-semibold text-[#D7191C]">Blog.</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {blogPosts.map((blogPost) => (
          <Link
            href={`blog/${blogPost.id}`}
            key={blogPost.id}
            className=" hover:scale-110 transition-all hover:drop-shadow-md rounded-md hover:rotate-1"
          >
            <Image
              src={blogPost.image}
              width={2250}
              height={2250}
              alt="The Importance of Responsive Design in Modern Websites"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
