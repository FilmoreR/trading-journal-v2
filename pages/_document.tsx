// Import required Next.js document components
import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component that extends Next.js default Document
 * Allows customizing the <html> and <body> tags used by the app
 */
export default function Document() {
  return (
    // Set document language to English
    <Html lang="en">
      {/* Head component for adding elements to document head */}
      <Head />
      {/* Body with antialiased text for smoother font rendering */}
      <body className="antialiased">
        {/* Main component where page content is rendered */}
        <Main />
        {/* NextScript component that loads Next.js scripts */}
        <NextScript />
      </body>
    </Html>
  );
}
