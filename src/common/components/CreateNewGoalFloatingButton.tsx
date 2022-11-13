import React from 'react'

type Props = {
  className?: string
}

function CreateNewGoalFloatingButton({ className }: Props) {
  return (
    <button className={`btn-primary drop-shadow-2xl hover:scale-110 hover:-translate-y-1 duration-200 transition-all ${className}`}>
      Add a new goal
    </button>

    // <motion.button 
    //   initial={{ y: '100vh' }} 
    //   animate={{ y: 0 }}
    //   className={`btn-accent drop-shadow-2xl hover:scale-110 hover:-translate-y-1 duration-200 transition-all ${className}`}>
    //   Add a new goal
    // </motion.button>

  )

}

export default CreateNewGoalFloatingButton