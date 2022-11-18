import { RootState } from "@/store";
import { selectGoalById } from "@/store/slices/goalsSlice";
import { PencilIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

function GoalPage({}: Props) {
  const router = useRouter();
  const [description, setDescription] = useState("");

  let goalId = router.query.id as string;

  let goal = useSelector((state: RootState) =>
    state.goals.myGoals.find((goal) => goal.id === parseInt(goalId))
  );

  if (!goal) {
    return (
      <div className="h-screen grid items-center">
        <p className="text-center text-xl">Goal with {goalId} not found</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{goal.title}</h1>
        <Link href={`/dashboard/goals/${goal.id}/edit`}>
          <PencilIcon className="h-8" />
        </Link>
      </div>
      {goal.dueDate && (
        <p className="text-gray-500 font-semibold mt-2">
          Due by {new Date(goal.dueDate).toLocaleDateString()}
        </p>
      )}

      <p className="mt-20">{goal.description}</p>
    </div>
  );
}

export default GoalPage;
