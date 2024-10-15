import React, { useState } from 'react';
import { BookOpen, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{excerpt}</p>
        {isExpanded ? (
          <div className="mt-6">
            <ReactMarkdown
              components={{
                h3: ({ node, ...props }) => <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-600 mb-4 leading-relaxed" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-medium" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
            <button
              onClick={() => setIsExpanded(false)}
              className="mt-6 text-gold hover:text-gold-dark transition-colors duration-300 inline-flex items-center"
            >
              סגור
              <ChevronUp className="mr-2 h-5 w-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-gold hover:text-gold-dark transition-colors duration-300 inline-flex items-center"
          >
            קרא עוד
            <BookOpen className="mr-2 h-5 w-5" />
          </button>
        )}
      </div>
    </article>
  );
};

export default BlogPost;