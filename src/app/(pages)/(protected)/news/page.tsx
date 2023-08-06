import News from "@/components/News";
import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div className="lg:flex flex-wrap justify-center items-center-full  ">
      <h1 className="flex items-center justify-center w-full my-3 gap-x-4">
        <Link href={"../"}>
          <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-200/70 hover:bg-gray-100 rounded-xl">
            &lt;
          </span>
        </Link>
        <span className="text-3xl font-bold text-center">News</span>
      </h1>
      <div className="flex flex-col ">
        <News />
      </div>
    </div>
  );
}

export default NewsPage;
