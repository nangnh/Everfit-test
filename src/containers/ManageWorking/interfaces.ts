import React from "react";

export interface ManageWorkingITF {
  id: string
  title: string
  date?: Date
  children?: React.ReactNode
  dayWorks?: DayWorkITF
}

export interface ExercisesITF {
  id: string
  name: string
  information: string
  num_sets: string | number
  order?: number
}

export interface WorkoutITF {
  id: string
  name: string
  exercises: ExercisesITF[]
}

export interface DayWorkITF {
  id: string
  dateTime: string
  workouts: WorkoutITF[]
}