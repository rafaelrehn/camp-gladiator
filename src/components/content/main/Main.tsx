
import { useEffect, useState } from 'react'
import { Workout } from '../../../interfaces/workout.interface'
import { WorkoutService } from '../../../service/workout.service'
import { CardList } from '../../shared/card-list/CardList'
import './Main.scss'

export const Main = () => {    

    const [ workouts, setWorkouts ] = useState<Workout[]>()    

    useEffect(()=>{
        const workoutService = new WorkoutService()
        setWorkouts(workoutService.getWorkoutsList()) 
    }, [])

    return (
        <main className="main">
            {
                workouts && workouts.length > 0 ? 
                <CardList workouts={workouts}/>
                : null
            }
            
        </main>
    )
}