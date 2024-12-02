'use client'

import BlogCard from "@/components/blog-card";



export default function Home() {

  return (
    <div>
 <div className=" container mx-auto px-4 py-20 max-w-3xl">
  <div className="py-20">
  <h1 className="text-4xl font-semibold mb-2">Latest</h1>
      <p className="text-sm text-gray-400 mb-8">
        A blog created with Next.js and Tailwind.css
      </p>

  </div>
  

      <div className="space-y-8">
      <BlogCard
        date="August 7, 2021"
        title="GrandPrix History"
        tags={["NEXT.JS", "TAILWIND", "GUIDE"]}
        description="Grand Prix History is a web application utilizing the OpenF1 API, a comprehensive and free API that provides real-time Formula 1 data, including radio messages, driver and constructor standings, and more."
        link="#"
      />

        <hr className="border-gray-700" />
        <BlogCard
        date="August 7, 2021"
        title="GrandPrix History"
        tags={["NEXT.JS", "TAILWIND", "GUIDE"]}
        description="Grand Prix History is a web application utilizing the OpenF1 API, a comprehensive and free API that provides real-time Formula 1 data, including radio messages, driver and constructor standings, and more."
        link="/grandprix-history"
      />
        <article>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm text-gray-400">May 1, 2021</span>
            <h2 className="text-xl font-semibold">
             Cloning T2's Website 
            </h2>
          </div>
          <div className="flex space-x-2 mb-2">
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              HTML
            </span>
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              JAVASCRIPT
            </span>
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              CSS
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-2">
          This project is a front-end clone of the T2 Tea website, a very humbling experience 
          </p>
          <a href="#" className="text-sm text-teal-400 hover:underline">
            Read more →
          </a>
        </article>
      </div>
    </div>
    </div>
  );
}
