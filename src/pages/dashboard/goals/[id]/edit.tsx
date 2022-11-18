import FloatingActionButton from "@/common/components/FloatingActionButton";
import { RootState } from "@/store";
import { selectGoalById } from "@/store/slices/goalsSlice";
import { Goal } from "@/types";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useGoals from "@/features/goals/api";
type Props = {};

type DraftInputs = {
  title: string;
  description: string;
  dueDate?: Date;
};

function EditGoalPage({}: Props) {
  const router = useRouter();

  const { updateGoal } = useGoals();

  let goalId = router.query.id as string;

  let goal = useSelector((state: RootState) =>
    state.goals.myGoals.find((goal) => goal.id === parseInt(goalId))
  )!;

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
    getValues,
  } = useForm<DraftInputs>({
    defaultValues: { title: goal.title, description: goal.description },
  });

  const onSubmit: SubmitHandler<DraftInputs> = ({
    description,
    title,
    dueDate,
  }) => {
    const newGoal: Goal = {
      id: goal.id,
      title,
      description,
      dueDate: draftDueDate?.toISOString() ?? null,
    };
    updateGoal(newGoal);
    router.push(`/dashboard/goals/${goal.id}`);
  };

  // const [draftTitle, setDraftTitle] = useState(goal.title);
  // const [draftDescription, setDraftDescription] = useState(goal.description);
  const [draftDueDate, setDraftDueDate] = useState<Date | null>(
    goal.dueDate ? new Date(goal.dueDate) : null
  );

  if (!goal) {
    return (
      <div className="h-screen grid items-center">
        <p className="text-center text-xl">Goal with {goalId} not found</p>
      </div>
    );
  }

  const existEditMode = () => {
    router.push(`/dashboard/goals/${goal.id}`);
  };

  return (
    <div className="flex flex-col justify-between">
      <form>
        <label htmlFor="" className="text-xl font-medium ml-1">
          Title:
        </label>
        <div className="mt-1 flex justify-between items-center space-x-10">
          <input
            className="rounded-lg p-3 text-xl font-semibold w-full"
            {...register("title", {
              required: "Required",
            })}
          ></input>
          {/* <Link href={`/dashboard/goals/${goal.id}`}> */}
          <XMarkIcon className="h-14" onClick={() => existEditMode()} />
          {/* </Link> */}
        </div>
        {errors.title && (
          <p className="text-red-600 ml-2 mt-1">{errors.title.message}</p>
        )}
        <div className="mt-20">
          <label htmlFor="" className="text-xl font-medium ml-1">
            Description:
          </label>
          <textarea
            {...register("description")}
            className="mt-2 bg-white p-4 rounded-xl w-full h-40 border-none "
          ></textarea>
          {errors.description && (
            <p className="text-red-600 ml-2 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-20">
          <p className="text-xl font-medium">Due date:</p>
          <div className="z-40">
            <DatePicker
              selected={draftDueDate}
              onChange={(date: Date) => setDraftDueDate(date)}
              calendarClassName="rounded-lg"
              isClearable
              className="rounded-lg  p-2 text-center border-none font-medium text-lg w-52 justify-self-end"
            />
          </div>
        </div>
      </form>

      <FloatingActionButton
        text="save"
        btnType="submit"
        onFABClicked={handleSubmit(onSubmit)}
      />
    </div>
  );
}

export default EditGoalPage;
