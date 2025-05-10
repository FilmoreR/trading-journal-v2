import React, { useEffect, useState, useRef } from "react";

/**
 * Props interface for GalleryInformation component
 */
type DashboardProps = {
    data : any; // Data to be displayed in the gallery information
};

const Dashboard = ({ 
    data
}: DashboardProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <div>
            <div>
                <div>
                    <p className="text-xl">Dashboard...</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
