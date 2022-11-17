import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

type Props = {
  className?: string
}
export default function Navbar({ className }: Props) {
  const router = useRouter();
  const { logout, isLoggedIn } = useAuth()

  return (
    <nav className={'h-16 bg-brand flex justify-between items-center text-white px-6 fixed top-0 left-0 right-0 ' + className}>
      <p className='text-3xl font-bold cursor-pointer' onClick={() => router.push("/")}>
        Sherpa
      </p>
      <div className="flex space-x-5 items-center">

        {isLoggedIn && <LogoutIcon className="bg-gray-400 cursor-pointer" onClick={() => logout()} />}
        <p className='text-3xl cursor-pointer'>=</p>
      </div>
    </nav>
  );
}

function LogoutIcon(props: any) {

  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
    </svg>
  )
}
