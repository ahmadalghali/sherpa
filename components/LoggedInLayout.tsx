import Navbar from "./Navbar";
import BottomNavigationBar from "./BottomNavigationBar";

export default function LoggedInLayout({ children }: any) {

  return (
    <div>
      <Navbar />
      <main className='max-w-lg mx-auto px-8'>{children}</main>
      <BottomNavigationBar />
    </div>
  );
}
