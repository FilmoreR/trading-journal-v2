// Import necessary React hooks and components
import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";

// Initialize Geist Sans font with Latin subset
const geistSans = Geist({
    variable: "--font-geist-sans", 
    subsets: ["latin"],
  });
  
// Initialize Geist Mono font with Latin subset
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"], 
});

/**
 * Common component that handles travel location data and renders GoogleMap
 * @param {Object} apiData - Data received from API containing travel locations
 */
export default function Common({
    apiData
  }: {
    apiData: any;
  }) {
    // console.log("apiData", JSON.stringify(apiData))

    // State to store travel location data
    const [getTravelLocation, setGetTravelLocation] = useState(false);

    // Effect to update travel location state when apiData changes
    useEffect(() => {
        console.log("useEffect apiData", apiData.tavelLocations)

        // Set travel locations if they exist in apiData
        if(apiData.tavelLocations) {
            setGetTravelLocation(apiData.tavelLocations)
        }

    },[]);

    // Render GoogleMap component if travel locations exist
    return (
        <div className={geistSans.className}>
           TEST TEST
        </div>
    )
}
