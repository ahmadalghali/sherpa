import Navbar from "./Navbar";
import BottomNavigationBar from "./BottomNavigationBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { getCookie } from "cookies-next";

export default function Layout({ children }: any) {
  const user = getCookie('user')

  const isLoggedIn = !!user;
  return (
    <>
      <Navbar />
      <main className='max-w-lg mx-auto px-8'>{children}</main>
      {isLoggedIn && <BottomNavigationBar />}
    </>
  );
}
