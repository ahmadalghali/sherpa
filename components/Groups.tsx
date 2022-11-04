import React from "react";
import Group from "./Group";

type Props = {
  groups: { name: string; theme: string; memberCount: number }[];
};

function Groups({ groups }: Props) {
  return (
    <>
      <h1 className='text-3xl font-bold mb-5'>Groups</h1>
      <div className='group-list space-y-5'>
        {groups.map((group) => (
          <Group name={group.name} theme={group.theme} memberCount={group.memberCount} key={group.name} />
        ))}
      </div>
    </>
  );
}

export default Groups;
