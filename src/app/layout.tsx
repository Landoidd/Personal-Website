import React from "react";
import "./globals.css";

/*
Create default Layout of Personal Website
 */
export default function Layout({children}: {children: React.ReactNode}){
  return (
      <div>
        {children}
      </div>
  );
}