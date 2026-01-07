import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard layout for the application",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Dashboard Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
