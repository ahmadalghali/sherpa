import React from 'react'
import VerticalOptionsIcon from '../VerticalOptionsIcon'

type Props = {
  goal: { id: number, title: string, description: string }
}

function Goal({ goal }: Props) {

  const { description, id, title } = goal
  return (
    <div
      className={"flex justify-between items-center w-full bg-white p-3 rounded-lg text-lg shadow-sm border-l-8 border-primary-500"}
    >
      <p>{title}</p>
      <VerticalOptionsIcon options={[{ title: "Delete" }, { title: "Create" }]} />
    </div>
  )
}

export default Goal