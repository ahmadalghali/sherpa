import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter()
  return (
    <>
      <div className="h-16 bg-brand flex justify-between items-center text-white px-6">
        <p className="text-3xl  font-bold" onClick={() => router.push('/')}>Sherpa</p>
        <p className="text-3xl">=</p>
      </div>
    </>
  );
}
