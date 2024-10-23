import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-2">{post.excerpt}</p>
          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
          <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default BlogList;