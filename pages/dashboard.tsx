import React from "react";
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
    <div className='py-24 grid items-center'>
      <Groups groups={groups} />

      <button className="btn-secondary mt-20" onClick={() => logout()}>Log out</button>
    </div>
  );
}

export default Dashboard;
