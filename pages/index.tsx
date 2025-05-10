// Import required dependencies
import React from 'react';
import { GetServerSideProps } from 'next';
import Common from '../components/common';
import Dashboard from '../components/dashboard';

// Define props type for the component
type MyActionProps = {
  apiData: object; // or whatever it actually is
};

// Main Index component that renders the Common component with API data
export default function Index({ apiData } : MyActionProps) {
  return (
    <Common apiData={apiData} >
      <Dashboard data={apiData}/>
    </Common>
  );
}

// Server-side props function to fetch and prepare data
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  // Get host from headers
  const host = req.headers.host; // e.g. "localhost:3000" or "myapp.vercel.app"

  // Determine protocol (http/https)
  const protocol = req.headers['x-forwarded-proto'] || 'http';

  // Construct the full URL for API calls
  const fullUrl = `${protocol}://${host}`;

  // Fetch data from Firebase API endpoint
  const firebaseDatabase = await fetch(`${fullUrl}/api/firebase`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }
  );

  // Parse the JSON response
  const firebaseData = await firebaseDatabase.json();
<<<<<<< HEAD
=======
  const locations = firebaseData.traveLocations;

  // Initialize array to store processed location data
  let newArray: any[] = [];

  // Process each location
  locations.forEach(function(data : any) {
    // Initialize arrays for media content
    let images: any[] = [];
    let videos: any[] = [];

    // Process images if they exist
    data?.images?.forEach(function(image : any) {
      images.push(image)
    })

    // Process videos if they exist
    data?.videos?.forEach(function(video : any) {
      videos.push(video)
    })

    // Create a new object with processed data
    const newObject = {
      iconUrl : `${fullUrl}${data.iconUrl}`, // Construct full URL for icon
      lat : data.lat,                        // Latitude
      lng : data.lng,                        // Longitude
      title : data.title,                    // Location title
      images : images,                       // Processed images array
      videos : videos                        // Processed videos array
    }
    
    // Add processed location to the array
    newArray.push(newObject);
  })
  
  // Return empty props if no locations found
  if (!locations) {
    return {
      props: {}
    };
  }
>>>>>>> parent of e551fd9 (seting up for my firebase real time dastabase for trading journal)

  // Return processed data as props
  return {
    props: {
      apiData: {
        firebaseData: firebaseData,
        tavelLocations : (newArray && newArray ) // Note: Possible typo in 'tavelLocations'
      }
    }
  };
};
