import BottomNavigationBar from "./BottomNavigationBar";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })

export default function LoggedInLayout({ children }: any) {

  return (
    <div>
      <Navbar />
      <main className='max-w-lg mx-auto px-8'>{children}</main>
      <BottomNavigationBar />
    </div>
  );
}
