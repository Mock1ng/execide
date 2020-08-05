import React, { useState, createContext } from 'react'

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {

    const [exercises, setExercises] = useState([
        {
            id: 0,
            nama: 'bayuw',
            exercise: 'biking',
            duration: 20
        },
        {
            id: 1,
            nama: 'akubaru',
            exercise: 'running',
            duration: 90
        },
        {
            id: 2,
            nama: 'rijuki',
            exercise: 'walking',
            duration: 40
        },
    ]);

    const [id, setId] = useState(2);

    return (
        <ExerciseContext.Provider value={{ exercises, setExercises, id, setId }}>
            {children}
        </ExerciseContext.Provider>
    )
}
