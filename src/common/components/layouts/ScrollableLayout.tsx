import useAuth from "@/hooks/useAuth";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/common/components/Navbar"), {
  ssr: false,
});
const BottomNavigationBar = dynamic(
  () => import("@/common/components/BottomNavigationBar"),
  { ssr: false }
);

export default function ScreenHeightLayout({ children }: any) {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Navbar />
      <main className="max-w-lg mx-auto px-8 pt-20">{children}</main>
      {isLoggedIn && <BottomNavigationBar />}
    </div>
  );
}
