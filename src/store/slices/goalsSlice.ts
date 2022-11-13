import { RootState } from '../index';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Goal } from "../../types";
export interface GoalsState {
  myGoals: Goal[]
}
const initialState: GoalsState = {
  myGoals: [
    { id: 1, title: "Do 5 pushups", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio necessitatibus quia cum ipsum ipsam dignissimos impedit veritatis harum corrupti." },
    { id: 2, title: "Climb Pen y fan", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio necessitatibus quia cum ipsum ipsam dignissimos impedit veritatis harum corrupti." },
    { id: 3, title: "Get shredded", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio necessitatibus quia cum ipsum ipsam dignissimos impedit veritatis harum corrupti." },
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
    editGoal(state, { payload: id }: PayloadAction<number>) {
      console.log('editing goal', id)
    },
    deleteGoal(state, { payload: id }: PayloadAction<number>) {
      console.log('deleting goal', id)
      const filteredGoals = state.myGoals.filter(goal => goal.id !== id)
      state.myGoals = filteredGoals
    },
  },

});


export const selectGoalById = (state: GoalsState, goalId: number) => state.myGoals.find(goal => goal.id === goalId)
// Action creators are generated for each case reducer function
export const { addGoal, deleteGoal, editGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
