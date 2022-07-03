import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { Main } from "./main/Main"

import { Routes, Route, Link } from 'react-router-dom';
import { WorkoutDetail } from "./workout-detail/WorkoutDetail";

export const Content = () => {
    return (
        <>
            <Header />
                    <Routes>
                        <Route path="/" element={<Main />}/>
                        <Route path="workout" element={<WorkoutDetail />}>
                            <Route path=":workoutId" element={<WorkoutDetail />}/>
                        </Route>
                        <Route
                            path="*"
                            element={
                                <Link to="/">
                                    <main>
                                        <p>There's nothing here! Click to move back</p>
                                    </main>
                                </Link>
                            }
                            />
                    </Routes>
            <Footer />
        </>
    )
}