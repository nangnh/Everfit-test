import { useState } from "react"
import DayContainer from "../../components/dayContainer"
import { getWeek } from "../../utils/helpers"
import { DayWorkITF, ManageWorkingITF } from "./interfaces"
import { data as mockData } from "./__mock_data"

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

  const handleUpdateDayWorks = (id: string, data: DayWorkITF) => {
    const index = dayWorks.findIndex((item:DayWorkITF) => item.id === id)
    if (index !== -1) {
      const newList = dayWorks
      newList[index] = { ...data }
      setDayWorks((prev) => ({ ...newList }))
    }
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
        <DayContainer key={day.id} {...day} date={dateTime} dayWorks={dayworks}></DayContainer>
      )
    })
  }

  return <div className="manage-working-wrapper">{showDayComponents()}</div>
}

export default ManageWorking