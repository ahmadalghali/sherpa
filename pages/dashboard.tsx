import React from "react";
import CreateNewGoalFloatingButton from "../components/CreateNewGoalFloatingButton";
import Groups from "../components/Groups";
import useAuth from "../hooks/useAuth";

type Props = {};

function Dashboard({}: Props) {

  const groups = [
    { name: "Mountain Hikers", theme: "green", memberCount: 5 },
    { name: "Amazon Junglers", theme: "violet", memberCount: 12 },
    { name: "Sea Surfers", theme: "amber", memberCount: 3 },
  ];

  const { logout } = useAuth()

  return (
    <div className='py-24 h-screen flex flex-col justify-between'>
      <div className="">
        <Groups groups={groups} />
        <button className="btn-secondary mt-20" onClick={() => logout()}>Log out</button>
      </div>

      <CreateNewGoalFloatingButton className="w-64 self-center fixed bottom-24 z-50" />
    </div>
  );
}

export default Dashboard;
