import React from 'react';
import LatestUsedCar from './LatestUsedCar';

interface BlogLayoutProps {
  children: React.ReactNode; // React.ReactNode is the correct type for children
}
const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">

          {/* --- Main Article Content (Left Column) --- */}
          
          {children}

          {/* --- Sidebar (Right Column) --- */}
          <LatestUsedCar />
          
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
