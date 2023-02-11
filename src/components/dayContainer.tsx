import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { ManageWorkingITF, WorkoutITF } from "../containers/ManageWorking/interfaces"
import { reorder } from "../utils/helpers";
import Workout from "./workout"

const DayContainer = function(props: ManageWorkingITF) {
  const { title, date, dayWorks } = props
  const dateTime = date && date.getDate()
  const isCurrent = dateTime === new Date().getDate()

  const [workouts, setWorkOuts] = useState<WorkoutITF[]>([])
  
  useEffect(() => {
    if (dayWorks) {
      const { workouts: data } = dayWorks
      setWorkOuts(data)
    }
  }, [dayWorks])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items: WorkoutITF[] = reorder(
      workouts,
      result.source.index,
      result.destination.index
    );

    setWorkOuts([...items]);
  }

  const showWorkouts = () => (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-day">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {workouts.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Workout key={item.id} workout={item}/>
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

  return (
    <div className="day-container-wrapper">
      <div className="day-container-wrapper__title">{title}</div>
      <div className="day-container-wrapper__body">
        <div className={`day-container-wrapper__day-month ${isCurrent && 'day-container-wrapper__day-month--active' }`}>
          {dateTime || '-'}
        </div>
        <div className="day-container-wrapper__list">{showWorkouts()}</div>
      </div>
    </div>
  )
}

export default DayContainer