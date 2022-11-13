import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateNewGoalFloatingButton from "../../common/components/CreateNewGoalFloatingButton";
import Goals from "../../features/goals/components/Goals";
import Groups from "../../features/groups/components/Groups";
import { RootState } from "../../store";
import goalsSlice from "../../store/slices/goalsSlice";
import { Goal, Group } from "../../types";

type Props = {};

function Dashboard({ }: Props) {

  const initialMyGroupsState = [
    { name: "Mountain Hikers", theme: "green", memberCount: 5 },
    { name: "Amazon Junglers", theme: "violet", memberCount: 12 },
    { name: "Sea Surfers", theme: "amber", memberCount: 3 },
  ];


  const [myGroups, setMyGroups] = useState<Group[]>(initialMyGroupsState)

  const myGoals = useSelector((state: RootState) => state.goals.myGoals)


  return (
    <div className='flex flex-col justify-between'>

      <div className="space-y-16">
        <Goals goals={myGoals} />
        <Groups groups={myGroups} />
      </div>


      <CreateNewGoalFloatingButton className="w-64 self-center fixed bottom-24 z-20" />
    </div>
  );
}

export default Dashboard;
