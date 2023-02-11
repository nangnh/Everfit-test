import { DayWorkITF, ManageWorkingITF, WorkoutITF } from "../containers/ManageWorking/interfaces"
import Workout from "./workout"

const DayContainer = function(props: ManageWorkingITF) {
  const { title, date, dayWorks } = props
  const dateTime = date && date.getDate()
  const isCurrent = dateTime === new Date().getDate()

  const showWorkouts = () => {
    if (!dayWorks) return null
    return (
      <div>
        {
          dayWorks?.map((item: DayWorkITF) => {
            const { workouts } = item
            return workouts.map((workout: WorkoutITF) => (
              <Workout key={item.id} workout={workout}/>
            ))
          })
        }
      </div>
    )
  }

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