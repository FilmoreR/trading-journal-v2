// Import required dependencies
import React from 'react';
import { GetServerSideProps } from 'next';
import Common from '../components/common';
import Dashboard from '../components/menu/dashboard';
import MainNavigation from '../components/menu/main-navigation';
import PageLoader from '../components/templates/page-loader';

// Define props type for the component
type MyActionProps = {
  apiData: object; // or whatever it actually is
};

// Main Index component that renders the Common component with API data
export default function Index({ apiData } : MyActionProps) {
  return (
    <Common apiData={apiData} path="/dashboard">
      <MainNavigation path="/dashboard"/>
      <PageLoader>
        <Dashboard data={apiData}/>
      </PageLoader>
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

  // Return processed data as props
  return {
    props: {
      apiData: {
        firebaseData: firebaseData
      }
    }
  };
};
