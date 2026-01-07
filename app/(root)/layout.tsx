import React from "react";

export async function generateMetadata() {
  const title = "Navbar | JS Mastery";
  const seoDescription =
    "Free resources database containing ebooks, guides and videos";
  const imageUrl = "https://example.com/thumbnail.png"; // Replace with your actual image URL

  return {
    title,
    description: seoDescription,
    other: {
      "og:title": title,
      "og:description": seoDescription,
      "og:image": imageUrl,
      "twitter:title": title,
      "twitter:description": seoDescription,
      "twitter:image": imageUrl,
    },
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
