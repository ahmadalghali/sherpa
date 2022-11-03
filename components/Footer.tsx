import { useRouter } from "next/router";

export default function BottomBar() {

  const router = useRouter()
  return (
    <>
      <div className="h-16 bg-brand text-white px-6 fixed bottom-0 left-0 right-0">
        <ul className="flex justify-around h-full text-3xl items-center">
          <li>O</li>
          <li>O</li>
          <li>O</li>
        </ul>
      </div>
    </>
  );
}
