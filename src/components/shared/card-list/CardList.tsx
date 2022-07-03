import { Workout } from "../../../interfaces/workout.interface"
import { Card } from "../card/Card"
import './CardList.scss'

interface ICardListProps{
    workouts: Workout[]
}

export const CardList = (props: ICardListProps) => {
    const { workouts } = props
    return (
        <div className="card__list">                
            {
                workouts.map((workout)=>(
                    <Card workout={workout} key={workout.id}/> 
                ))
            }
        </div>
        
    )
}