import Navbar from "./Navbar";
import BottomNavigationBar from "./BottomNavigationBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

export default function Layout({ children }: any) {
  const user = useSelector((state: RootState) => state.userReducer.user);

  const isLoggedIn = !!user;
  return (
    <>
      <Navbar />
      <main className='max-w-5xl mx-auto px-8 bg-slate-200 '>{children}</main>
      {isLoggedIn && <BottomNavigationBar />}
    </>
  );
}
