import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
type Props = {
  theme: string;
  name: string;
  memberCount: number;
};

function Group({ memberCount, name, theme }: Props) {
  let border = "border-primary-500";

  switch (theme) {
    case "green":
      border = "border-green-500";
      break;
    case "violet":
      border = "border-violet-500";
      break;
    case "amber":
      border = "border-amber-500";
      break;
    case "sky":
      border = "border-sky-500";
      break;
    default:
      border = "border-primary-500";
      break;
  }
  return (
    <div
      className={
        "flex justify-between items-center w-full bg-white p-3 rounded-lg text-lg shadow-sm border-l-8 " + border
      }
    >
      <p>{name}</p>
      <div className='flex space-x-1 text-gray-600'>
        <p>{memberCount}</p>
        <UserIcon className='h-6 w-6 ' />
      </div>
    </div>
  );
}

export default Group;
