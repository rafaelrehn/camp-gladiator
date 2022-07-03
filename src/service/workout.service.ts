import { Workout } from "../interfaces/workout.interface";
import { Workouts } from "../mock/workouts";

export class WorkoutService{

    getWorkoutsList(): Workout[]{
        return Workouts
    }
 
    findWorkoutById(id: string): Workout | undefined {
        return Workouts.find(f=>f.id===id)
    }
}