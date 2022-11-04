import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

type Props = {
  theme: string;
  name: string;
  memberCount: number;
};

function Group({ memberCount, name, theme }: Props) {
  return (
    <div
      className={`flex justify-between items-center w-full bg-white p-4 rounded-lg text-lg drop-shadow-sm border-l-8 border-${theme}-500`}
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
