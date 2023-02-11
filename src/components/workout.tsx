import AddIcon from '../assets/image/add-button.png'
import ThreeDotIcon from '../assets/image/three-dot.png'
import ThreeDotSilentIcon from '../assets/image/three-dot-silent.png'

import Exercises from './exercises'
import { ExercisesITF, WorkoutITF } from '../containers/ManageWorking/interfaces'


const Workout = function(props: { workout: WorkoutITF }) {
  const { workout } = props
  const isActive = Math.random() < 0.5

  const handleAddExercises = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('>handleAddExercises')
  }
  const handleMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('>handleMore')
  }

  const showExercises = () => (
    workout.exercises.map((data: ExercisesITF) => <Exercises key={data.id} {...data}/>)
  )

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