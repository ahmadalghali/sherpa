import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react"
import { addGoal, deleteGoal, updateGoal as updateGoalStore } from '@/store/slices/goalsSlice';
import { Goal } from '../../../types';
import { RootState } from '@/store';

export default function useGoals() {

  const myGoals = useSelector((state: RootState) => state.goals.myGoals)

  const dispatch = useDispatch()

  const deleteGoal = (id: number) => {
  }

  const addGoal = (goal: Goal) => {

  }

  const updateGoal = (newGoal: Goal) => {
    dispatch(updateGoalStore(newGoal))
  }

  const getGoalById = (id: number) => {
    return myGoals.find(goal => goal.id === id)
  }

  return {
    deleteGoal,
    addGoal,
    myGoals,
    getGoalById,
    updateGoal
  }
}

