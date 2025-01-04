import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  author: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, date, author }) => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-gray-600 mb-4">By {author} on {date}</p>
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default BlogPost;