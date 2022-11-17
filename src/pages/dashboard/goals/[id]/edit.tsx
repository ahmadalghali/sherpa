import FloatingActionButton from "@/common/components/FloatingActionButton";
import { RootState } from "@/store";
import { selectGoalById } from "@/store/slices/goalsSlice";
import { Goal } from "@/types";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

function EditGoalPage({}: Props) {
  const router = useRouter();

  let goalId = router.query.id as string;

  let goal = useSelector((state: RootState) =>
    state.goals.myGoals.find((goal) => goal.id === parseInt(goalId))
  )!;

  // const [goalDraft, setGoalDraft] = useState<Goal>({ ...goal })

  const [draftTitle, setDraftTitle] = useState(goal.title);
  const [draftDescription, setDraftDescription] = useState(goal.description);

  if (!goal) {
    return (
      <div className="h-screen grid items-center">
        <p className="text-center text-xl">Goal with {goalId} not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between items-center space-x-10">
          <input
            className="rounded-lg p-3 text-xl font-semibold w-full"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
          ></input>
          <Link href={`/dashboard/goals/${goal.id}`}>
            <XMarkIcon className="h-8" />
          </Link>
        </div>

        <textarea
          value={draftDescription}
          onChange={(e) => setDraftDescription(e.target.value)}
          className="mt-20 bg-white p-4 rounded-xl w-full h-40"
        ></textarea>
      </div>

      <FloatingActionButton text="save" className="" />
    </div>
  );
}

export default EditGoalPage;
