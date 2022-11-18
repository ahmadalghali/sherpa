import { RootState } from '../index';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Goal } from "../../types";
export interface GoalsState {
  myGoals: Goal[]
}
const initialState: GoalsState = {
  myGoals: [
    { id: 1, title: "Do 5 pushups", dueDate: '2021-12-01', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio necessitatibus quia cum ipsum ipsam dignissimos impedit veritatis harum corrupti." },
    { id: 2, title: "Climb Pen y fan", dueDate: '2022-03-08', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio necessitatibus quia cum ipsum ipsam dignissimos impedit veritatis harum corrupti." },
    { id: 3, title: "Get shredded", dueDate: '2023-05-11', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio necessitatibus quia cum ipsum ipsam dignissimos impedit veritatis harum corrupti." },
  ]
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal(state, { payload: goal }: PayloadAction<Goal>) {
      console.log('adding goal', goal)
      state.myGoals.push(goal)
    },
    deleteGoal(state, { payload: id }: PayloadAction<number>) {
      console.log('deleting goal', id)
      const filteredGoals = state.myGoals.filter(goal => goal.id !== id)
      state.myGoals = filteredGoals
    },
    updateGoal(state, { payload: newGoal }: PayloadAction<Goal>) {
      const goalIndex = state.myGoals.findIndex(goal => goal.id === newGoal.id)
      state.myGoals[goalIndex] = newGoal
    }
  },

});


export const selectGoalById = (state: GoalsState, goalId: number) => state.myGoals.find(goal => goal.id === goalId)
// Action creators are generated for each case reducer function
export const { addGoal, deleteGoal, updateGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
