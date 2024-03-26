"use client";

import Image from "next/image";
import blogPosts from "../../../../blog";
import { useParams } from "next/navigation";
import Head from "next/head";

const BlogPostDetails = ({ params }) => {
  const { id } = useParams();
  const selectedBlogPost = blogPosts.find((post) => post.id === parseInt(id));
  return (
    <div className="max-w-[720px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen py-[7rem] px-3 gap-5">
      <Head>
        <title>{selectedBlogPost.title}</title>
        <meta
          property="og:title"
          content={selectedBlogPost.title}
          key="title"
        />
      </Head>
      <Image
        src={selectedBlogPost.image}
        width={2250}
        height={2250}
        alt={selectedBlogPost.title}
      />
      <h1 className="text-3xl font-RobotoCondensed font-bold text-[#D7191C]">
        {selectedBlogPost.title}
      </h1>
      {selectedBlogPost.content.map((content) => (
        <div key={content.id}>
          <h2 className="text-xl font-semibold">{content.title}</h2>
          <p className="font-light">{content.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostDetails;
