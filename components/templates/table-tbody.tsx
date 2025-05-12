// Import necessary React hooks and components
import React from "react";

/**
 * Props interface for GalleryInformation component
 */
type TableTbodyTemplateProps = {
    children: React.ReactNode,
};

const TableTbodyTemplate = ({ 
    children
}: TableTbodyTemplateProps) => {


  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            {children}
        </tbody>
    </table>
  );
};

export default TableTbodyTemplate;
