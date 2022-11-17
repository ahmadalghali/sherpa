import dynamic from "next/dynamic";
import useAuth from "@/hooks/useAuth";
const Navbar = dynamic(() => import('@/common/components/Navbar'), { ssr: false })
const BottomNavigationBar = dynamic(() => import('@/common/components/BottomNavigationBar'), { ssr: false })


export default function ScreenHeightLayout({ children }: any) {
  const { isLoggedIn } = useAuth()

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className='max-w-lg mx-auto px-8 flex-1 h-full pt-20'>{children}</main>
      {isLoggedIn && <BottomNavigationBar />}
    </div>
  );
}
