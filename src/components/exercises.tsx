import { ExercisesITF } from "../containers/ManageWorking/interfaces"

const Exercises = function(props: ExercisesITF) {

  const { name, num_sets, information } = props
  return (
    <div className="exercises-wrapper">
      <div className="exercises-wrapper__name">{name}</div>
      <div className="exercises-wrapper__body">
        <div className="exercises-wrapper__number-of-sets">{`${num_sets}x`}</div>
        <div className="exercises-wrapper__information">{information}</div>
      </div>
    </div>
  )
}

export default Exercises