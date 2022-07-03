import { Workout } from '../../../interfaces/workout.interface'
import './Card.scss'
import { Link } from "react-router-dom";

interface ICardProps{
    workout: Workout
}

export const Card = ( props: ICardProps ) => { 
    const { workout } = props 
    return (        
        <Link to={`/workout/${workout.id}`}>
            <div className="card">
                <div className="card__img">
                    <img  src={workout.thumbnail} alt={workout.title} />
                </div>
                <div className="card__content">
                    <div className="card__content__title">
                        <h5 className="h5 h5__united --on-light">{workout.title}</h5>
                    </div>
                    <div className="card__content__description">
                        <p className="p p--small">
                            {workout.description}
                        </p>
                    </div>
                    <div className="card__content__level">
                        <p className="p p--extra-small">Diffficulty: <b>{workout.levelTag}</b></p>
                    </div>
                    <div className="card__content__impact">
                        <p className="p p--extra-small">
                            Impact: <b>{workout.impactTag}</b>
                        </p>
                    </div>
                    <div className="card__content__duration">
                        <p className="p p--extra-small">
                            Time duration: <b>{workout.duration}</b> (Minutes)
                        </p>
                    </div>
                </div>               
            </div>
        </Link>
    )
}