import Navbar from "./Navbar";
import BottomNavigationBar from "./BottomNavigationBar";
import { useState } from "react";

export default function NotLoggedInLayout({ children }: any) {

  return (
    <div>
      <Navbar />
      <main className='max-w-lg mx-auto px-8'>{children}</main>
    </div>
  );
}
