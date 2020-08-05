import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ExerciseContext } from './ExerciseContext';
import '../styles/exercises.scss';

const Exercises = () => {
    const { exercises, setExercises } = useContext(ExerciseContext);

    const deleteExercise = (i) => {
        const exerciseChanges = exercises;
        exerciseChanges.splice(i, 1);
        setExercises([...exerciseChanges])
    }

    return (
        <div className='exercises'>
            <NavLink to='/create-exercise' className='link'>Add Exercise</NavLink>
            {exercises.length === 0 ? <h4 className='no-exercise-text'>There are no exercises~</h4> : (
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Exercise</th>
                            <th>Duration (in minutes)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((exercise, i) => (
                            <tr key={exercise.id}>
                                <td>{i + 1}</td>
                                <td>{exercise.nama}</td>
                                <td>{exercise.exercise}</td>
                                <td>{exercise.duration}</td>
                                <td><button className='edit'><NavLink to={'/update-exercise/' + exercise.id}>Edit</NavLink></button> | <button className='delete' onClick={() => deleteExercise(i)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Exercises
