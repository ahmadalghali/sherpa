import FloatingActionButton from "@/common/components/FloatingActionButton";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Goals from "../../features/goals/components/Goals";
import Groups from "../../features/groups/components/Groups";
import { RootState } from "../../store";
import goalsSlice from "../../store/slices/goalsSlice";
import { Goal, Group } from "../../types";

type Props = {};

function Dashboard({}: Props) {
  const initialMyGroupsState = [
    { name: "Mountain Hikers", theme: "green", memberCount: 5 },
    { name: "Amazon Junglers", theme: "violet", memberCount: 12 },
    { name: "Sea Surfers", theme: "amber", memberCount: 3 },
  ];

  const [myGroups, setMyGroups] = useState<Group[]>(initialMyGroupsState);

  const myGoals = useSelector((state: RootState) => state.goals.myGoals);

  const toastId = React.useRef("add-new-goal-toast");

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      //@ts-ignore
      toastId.current = toast.info("Coming soon...", { autoClose: 2000 });
    }
  };

  return (
    <div className="">
      <div className="space-y-10">
        <Goals goals={myGoals} />
        <Groups groups={myGroups} />
      </div>

      <FloatingActionButton
        text="Add a new goal"
        onFABClicked={() => notify()}
      />
    </div>
  );
}

export default Dashboard;
