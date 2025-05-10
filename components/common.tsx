// Import necessary React hooks and components
import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import Login from './login';
import { useRouter } from 'next/router';

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
    apiData,
    children,
    path
  }: {
    apiData: any;
    children: React.ReactNode,
    path: string
  }) {

    const router = useRouter();
    const [pageload, setPageLoad] = useState(false);
    const [loginUser, setLoginUser] = useState(false);


    // Effect to update travel location state when apiData changes
    useEffect(() => {
        const isUserLogin = sessionStorage.getItem("token");
        
        if (isUserLogin) {
          try {
            router.push(path);
            setLoginUser(true);
          } catch (error) {
             setLoginUser(false);
            console.error("Failed to parse session data:", error);
          }
        }
        
        setPageLoad(true);
    },[]);

    // Render GoogleMap component if travel locations exist
    return (
        <div className={geistSans.className}>
           {pageload ? (
            <div>
              {!loginUser ? (<Login setLoginUser={setLoginUser} path={path}/>) : children}
            </div>
           ) : ''}
        </div>
    )
}
