import {
  GlobeAltIcon,
  GlobeAmericasIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function BottomNavigationBar() {
  return (
    <div className="h-16 bg-accent-900 text-white px-6 fixed bottom-0 left-0 right-0">
      <div className="flex justify-around h-full text-3xl items-center ">
        <GlobeAmericasIcon className="h-7" />
        <MagnifyingGlassIcon className="h-7" />
        <HomeIcon className="h-7" />
        <UserIcon className="h-7" />
      </div>
    </div>
  );
}
