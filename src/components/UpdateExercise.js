import React, { useState, useContext, useEffect } from 'react';
import { ExerciseContext } from './ExerciseContext';
import '../styles/update-exercise.scss';

const UpdateExercise = ({ match }) => {
    const { exercises, setExercises } = useContext(ExerciseContext);
    const [nama, setNama] = useState('');
    const [inputExercise, setInputExercise] = useState('');
    const [duration, setDuration] = useState(0);

    const findById = id => {
        let data = {};
        for (let i = 0; i < exercises.length; i++) {
            if (parseInt(id) === exercises[i].id) {
                data = {
                    id: exercises[i].id,
                    nama: exercises[i].nama,
                    exercise: exercises[i].exercise,
                    duration: exercises[i].duration
                }
            }
        }
        return data;
    }

    useEffect(() => {
        setNama(findById(match.params.id).nama)
        setInputExercise(findById(match.params.id).exercise)
        setDuration(findById(match.params.id).duration)
    }, [])

    const exerciseHandler = e => setInputExercise(e.target.value);

    const durationHandler = e => setDuration(e.target.value);

    const submit = e => {
        e.preventDefault();

        let prevExercises = exercises;

        const newExercise = {
            id: parseInt(match.params.id),
            nama: nama,
            exercise: inputExercise,
            duration: duration
        }

        prevExercises[match.params.id] = newExercise;
        setExercises([...prevExercises])
        setNama('');
        setInputExercise('');
        setDuration('');
    }

    return (
        <div className='update-exercise'>
            <h3>Update Exercise</h3>
            <form onSubmit={submit}>
                <div className='input-section'>
                    <label htmlFor="nama">Name</label> <br />
                    <input type="text" name="nama" id="nama" value={nama} disabled />
                </div>
                <div className='input-section'>
                    <label htmlFor="exercise">Exercise</label> <br />
                    <input type="text" name='exercise' autoComplete='off' value={inputExercise} onChange={exerciseHandler} />
                </div>
                <div className='input-section'>
                    <label htmlFor="duration">Duration (in minutes)</label> <br />
                    <input type="number" name='duration' autoComplete='off' value={duration} onChange={durationHandler} />
                </div>
                <button>Update Exercise</button>
            </form>
        </div>
    )
}

export default UpdateExercise
