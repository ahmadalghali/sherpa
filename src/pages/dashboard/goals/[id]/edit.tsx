import FloatingActionButton from "@/common/components/FloatingActionButton";
import { Goal } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitHandler, useForm } from "react-hook-form";
import useGoals from "@/features/goals/api";

type Props = {
  goal: Goal;
};

type DraftInputs = {
  title: string;
  description: string;
  dueDate?: Date;
};

function EditGoalPage({ goal }: Props) {
  const { updateGoal } = useGoals();

  const router = useRouter();

  let goalId = router.query.id as string;
  console.log("goalId :>> ", goalId);

  // const [goal, setGoal] = useState<Goal | undefined>();
  const [draftDueDate, setDraftDueDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
    getValues,
  } = useForm<DraftInputs>({
    defaultValues: { title: goal?.title, description: goal?.description },
  });

  useEffect(() => {
    // const getGoal = async () => {
    //   const res = await fetch("../../../../data/goals.JSON");
    //   const goals: Goal[] = await res.json();
    //   const foundGoal = goals.find((goal) => goal.id == parseInt(goalId));
    //   console.log("foundGoal", foundGoal);
    //   setGoal(foundGoal);
    //   setDraftDueDate(new Date(foundGoal?.dueDate!));
    // };
    // getGoal();
  }, [goalId]);

  if (!goal) {
    return (
      <div className="h-screen grid items-center">
        <p className="text-center text-xl">Goal with {goalId} not found</p>
      </div>
    );
  }

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
        {errors?.title && (
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
          {errors?.description && (
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

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const goalId = params?.id;
  const filePath = path.join(process.cwd(), "./src/data/goals.json");
  const goalsJson = await fsPromises.readFile(filePath);
  //@ts-ignore
  const goals: Goal[] = JSON.parse(goalsJson);

  const foundGoal = goals.find((goal) => goal.id == parseInt(goalId as string));

  return {
    props: {
      goal: foundGoal,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default EditGoalPage;
