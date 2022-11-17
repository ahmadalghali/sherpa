import dynamic from "next/dynamic";
import Link from "next/link";
import Footer from "../Footer";
const Navbar = dynamic(() => import("../Navbar"), { ssr: false });

export default function PublicPageLayout({ children }: any) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-lg mx-auto px-8 mb-20 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
