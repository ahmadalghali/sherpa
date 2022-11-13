import BottomNavigationBar from "../BottomNavigationBar";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../Navbar'), { ssr: false })

export default function LoggedInLayout({ children }: any) {

  return (
    <div>
      <Navbar />
      <div className="w-full h-20"></div>
      <main className='max-w-lg mx-auto px-8'>{children}</main>
      <BottomNavigationBar />
    </div>
  );
}
