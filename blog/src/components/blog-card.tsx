import React from "react";

interface BlogCardProps {
  date: string;
  title: string;
  tags: string[];
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date, title, tags, description, link }) => {
  return (
    <div className="space-y-8">
      <article>
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-sm text-gray-400">{date}</span>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex space-x-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        <a href={link} className="text-sm text-teal-400 hover:underline">
          Read more →
        </a>
      </article>
    </div>
  );
};

export default BlogCard;
