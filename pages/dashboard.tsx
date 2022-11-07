import React from "react";
import CreateNewGoalFloatingButton from "../components/CreateNewGoalFloatingButton";
import Goal from "../components/Goals/Goal";
import Groups from "../components/Groups";
import VerticalOptionsIcon from "../components/VerticalOptionsIcon";

type Props = {};

function Dashboard({ }: Props) {

  const groups = [
    { name: "Mountain Hikers", theme: "green", memberCount: 5 },
    { name: "Amazon Junglers", theme: "violet", memberCount: 12 },
    { name: "Sea Surfers", theme: "amber", memberCount: 3 },
  ];

  const myGoals = [
    { id: 1, title: "Do 5 pushups", description: "lorem" },
    { id: 2, title: "Climb Pen y fan", description: "lorem" },
    { id: 3, title: "Get shredded", description: "lorem" },
  ]


  return (
    <div className='py-24 flex flex-col justify-between'>
      <div className="">
        <Groups groups={groups} />

        <div className="mt-10">

          <h1 className='text-3xl font-bold mb-5'>My Goals</h1>
          <div className="space-y-3">

            {myGoals.map(goal => (
              <Goal goal={goal} key={goal.id} />
            ))}
          </div>
        </div>

      </div>

      <CreateNewGoalFloatingButton className="w-64 self-center fixed bottom-24 z-20" />
    </div>
  );
}

export default Dashboard;
