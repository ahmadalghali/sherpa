import React from "react";
import Groups from "../components/Groups";
type Props = {};

function Dashboard({}: Props) {
  const groups = [
    { name: "Mountain Hikers", theme: "green", memberCount: 5 },
    { name: "Amazon Junglers", theme: "violet", memberCount: 12 },
    { name: "Sea Surfers", theme: "amber", memberCount: 3 },
  ];
  return (
    <div className='py-24'>
      <Groups groups={groups} />
    </div>
  );
}

export default Dashboard;
