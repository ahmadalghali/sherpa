import { PlusIcon } from "@heroicons/react/20/solid";
import {
  GlobeAltIcon,
  GlobeAmericasIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-toastify";

export default function BottomNavigationBar() {
  const toastId = React.useRef("add-new-goal-toast");

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      //@ts-ignore
      toastId.current = toast.info("Coming soon...", { autoClose: 2000 });
    }
  };
  return (
    <div className="h-16 bg-accent-900 text-white px-2 fixed bottom-0 left-0 right-0">
      <div className="flex justify-around h-full text-3xl items-center relative">
        <GlobeAmericasIcon className="h-7 cursor-pointer" />
        <MagnifyingGlassIcon className="h-7 cursor-pointer" />
        <PlusIcon
          className="h-12 p-1 bg-brand cursor-pointer text-white rounded-full shadow-2xl absolute bottom-3"
          onClick={() => notify()}
        />
        <PlusIcon className="invisible disabled h-12 cursor-pointer p-1 bg-brand text-white rounded-full shadow-2xl" />
        <HomeIcon className="h-7 cursor-pointer" />
        <UserIcon className="h-7 cursor-pointer" />
      </div>
    </div>
  );
}
