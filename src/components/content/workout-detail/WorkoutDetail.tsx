import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Workout } from "../../../interfaces/workout.interface";
import { WorkoutService } from "../../../service/workout.service";
import useWindowDimensions from "../../shared/functions/WindowDimension";
import './WorkoutDetail.scss'

export const WorkoutDetail = () => {
    
    const { width } = useWindowDimensions();
    const [ workout, setWorkout ] = useState<Workout>()

    const params = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        const workoutService = new WorkoutService()
        setWorkout(workoutService.findWorkoutById(params.workoutId as string))
    }, [params.workoutId]) 

    const handleClick = () => {
        navigate("/");
    }

    return (        
        <main className="main__detail">
            {
                workout ?
                <div className="wokout__details">
                    <h5 className="h5 h5__united --on-light">{workout?.title}</h5>
                    <p className="p p--small">
                        {workout?.description}
                    </p>
                    <video width={width-20} controls preload="none">
                        <source src={workout?.media} type="video/mp4"></source>
                        <source src={workout?.thumbnail} type="video/ogg"></source>
                    </video>
                    <p className="p p--extra-small">Diffficulty: <b>{workout.levelTag}</b></p>
                    <p className="p p--extra-small">
                        Impact: <b>{workout.impactTag}</b>
                    </p>
                    <p className="p p--extra-small"> 
                                    Time duration: <b>{workout?.duration}</b> (Minutes)
                    </p>
                </div>
                : <p className="p p--extra-small no__workout__msg"> 
                    No workout found please click in the 'Back' button below
                </p>                
            }
            <button className="btn btn--secondary btn--xsmall" onClick={handleClick}>Back</button>
        </main>
    )
}