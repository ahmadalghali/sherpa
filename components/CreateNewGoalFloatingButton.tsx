import React from 'react'

type Props = { 
  className?: string
}

function CreateNewGoalFloatingButton({ className }: Props) {
  return (
    <button className={`btn-accent drop-shadow-2xl hover:scale-110 hover:-translate-y-1 duration-200 transition-all ${className}`}>
      Add a new goal
      </button>

  )
}

export default CreateNewGoalFloatingButton