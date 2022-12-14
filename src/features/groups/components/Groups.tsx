import React from "react";
import { Group } from "../../../types";
import GroupItem from "./GroupItem";

type Props = {
  groups: Group[];
};

function Groups({ groups }: Props) {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-5'>Groups</h1>
      <div className='group-list space-y-3'>
        {groups.map((group) => (
          <GroupItem name={group.name} theme={group.theme} memberCount={group.memberCount} key={group.name} />
        ))}
      </div>
    </div>
  );
}

export default Groups;
