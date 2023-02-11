import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Exercises from './exercises'
import { ExercisesITF, WorkoutITF } from '../containers/ManageWorking/interfaces'

import AddIcon from '../assets/image/add-button.png'
import ThreeDotIcon from '../assets/image/three-dot.png'
import ThreeDotSilentIcon from '../assets/image/three-dot-silent.png'
import { reorder } from '../utils/helpers';

const Workout = function(props: { workout: WorkoutITF }) {
  const { workout } = props
  const isActive = Math.random() < 0.5
  const [exercises, setExercises] = useState<ExercisesITF[]>([])

  useEffect(() => {
    if (workout) {
      const { exercises: data } = workout
      setExercises(data)
    }
  }, [workout])

  const handleAddExercises = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('>handleAddExercises')
  }
  const handleMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('>handleMore')
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items: ExercisesITF[] = reorder(
      exercises,
      result.source.index,
      result.destination.index
    );

    setExercises([...items]);
  }

  const showExercises = () => (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {exercises.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Exercises {...item}/>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )

  // const showExercises = () => (
  //   exercises.map((data: ExercisesITF) => <Exercises key={data.id} {...data}/>)
  // )

  return (
    <div className="work-out-wrapper">
      <div className="work-out-wrapper__header">
        <div className="work-out-wrapper__title">{workout.name}</div>
        <div className="work-out-wrapper__button">
          <button onClick={handleMore}>
            <img src={isActive ? ThreeDotIcon : ThreeDotSilentIcon} alt="add-icon" />
          </button>
        </div>
      </div>
      <div className="work-out-wrapper__body">{showExercises()}</div>
      <div className="work-out-wrapper__footer">
        <button onClick={handleAddExercises}>
          <img src={AddIcon} alt="add-icon" />
        </button>
      </div>
    </div>
  )
}

export default Workout