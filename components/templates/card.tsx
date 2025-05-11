// Import necessary React hooks and components
import React from "react";

/**
 * Props interface for GalleryInformation component
 */
type CardProps = {
    children: React.ReactNode,
};

const Card = ({ 
    children
}: CardProps) => {


  return (
    <div className="card-container">
      <div className="card w-full p-4 text-center bg-white border border-gray-200 rounded-md shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {children}
      </div>
    </div>
  );
};

export default Card;
