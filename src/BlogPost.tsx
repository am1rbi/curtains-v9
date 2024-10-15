import React from 'react';
import { BookOpen } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt }) => {
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{excerpt}</p>
        <a href="#" className="text-gold hover:text-gold-dark transition-colors duration-300 inline-flex items-center">
          קרא עוד
          <BookOpen className="mr-2 h-5 w-5" />
        </a>
      </div>
    </article>
  );
};

export default BlogPost;