import { useState } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { getWeek, reorder } from "../../utils/helpers"
import { data as mockData } from "./__mock_data"
import DayContainer from "../../components/dayContainer"
import { DayWorkITF, ManageWorkingITF } from "./interfaces"

const ManageWorking = function() {
  const managesData: ManageWorkingITF[] = [
    {
      id: 'mon',
      title: 'MON'
    },
    {
      id: 'tue',
      title: 'TUE'
    },
    {
      id: 'wed',
      title: 'WED'
    },
    {
      id: 'thu',
      title: 'THU'
    },
    {
      id: 'fri',
      title: 'FRI'
    },
    {
      id: 'sat',
      title: 'SAT'
    },
    {
      id: 'sun',
      title: 'SUN'
    }
  ]

  const [dayWorks, setDayWorks] = useState<DayWorkITF[]>(mockData)

  // const handleUpdateDayWorks = (id: string, data: DayWorkITF) => {
  //   const index = dayWorks.findIndex((item:DayWorkITF) => item.id === id)
  //   if (index !== -1) {
  //     const newList = dayWorks
  //     newList[index] = { ...data }
  //     setDayWorks((prev) => ({ ...newList }))
  //   }
  // }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    console.log('>aaaaa', result)

    const items: DayWorkITF[] = reorder(
      dayWorks,
      result.source.index,
      result.destination.index
    );

    setDayWorks([...items]);
  }

  const showDayComponents = () => {
    const dateWeek = getWeek();

    return managesData.map((day: ManageWorkingITF, index: number) => {
      const dateTime = dateWeek[index] as Date

      const dayworks = dayWorks.filter((item: DayWorkITF) => 
        new Date(item.dateTime).getFullYear() === dateTime.getFullYear() &&
        new Date(item.dateTime).getDay() === dateTime.getDay() &&
        new Date(item.dateTime).getDate() === dateTime.getDate()
      )

      return (
        <DayContainer key={day.id} {...day} date={dateTime} dayWorks={dayworks[0]}></DayContainer>
      )
    })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable-manage"
        // type="COLUMN"
        // direction="vertical"
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="manage-working-wrapper">{showDayComponents()}</div>  
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ManageWorking