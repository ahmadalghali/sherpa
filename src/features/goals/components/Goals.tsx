import { Router, useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../../store/slices/goalsSlice";
import { Goal } from "../../../types";
import GoalItem from "./GoalItem";

type Props = {
  goals: Goal[];
};

function Goals({ goals }: Props) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between items-center mb-5 pr-2">
        <h1 className="text-3xl font-bold">My Goals</h1>
        {/* <p className="text-5xl" onClick={() => dispatch(addGoal({ id: 4, description: 'fssfs', title: 'fsffsfs' }))} >+</p> */}
      </div>
      <div className="space-y-3">
        {goals.map((goal) => (
          <GoalItem goal={goal} key={goal.id} />
        ))}
      </div>
    </div>
  );
}

export default Goals;
