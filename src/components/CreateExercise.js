import React, { useContext, useState } from 'react';
import { ExerciseContext } from './ExerciseContext';
import { UserContext } from './UserContext';
import '../styles/create-exercise.scss';

const CreateExercise = () => {
    const { setExercises, id, setId } = useContext(ExerciseContext);
    const { users } = useContext(UserContext);
    const [nama, setNama] = useState('');
    const [inputExercise, setInputExercise] = useState('');
    const [duration, setDuration] = useState(0);

    const namaHandler = e => setNama(e.target.value);

    const exerciseHandler = e => setInputExercise(e.target.value);

    const durationHandler = e => setDuration(e.target.value);

    const submit = e => {
        e.preventDefault();
        const newExercise = {
            id: id + 1,
            nama: nama,
            exercise: inputExercise,
            duration: duration
        }
        setId(prev => prev + 1);
        setExercises(prev => [...prev, newExercise])
        setNama('');
        setInputExercise('');
        setDuration('');
    }

    return (
        <div className='create-exercise'>
            <h3>Create New Exercise</h3>
            <form onSubmit={submit}>
                <div className='input-section'>
                    <label htmlFor="nama">Name</label> <br />
                    <div className="select-container">
                        <select name="nama" id="nama" onChange={namaHandler} value={nama}>
                            <option value=''>--Select Username--</option>
                            {users.map((user, i) => (
                                <option key={i} value={user}>{user}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='input-section'>
                    <label htmlFor="exercise">Exercise</label> <br />
                    <input type="text" name='exercise' autoComplete='off' value={inputExercise} onChange={exerciseHandler} />
                </div>
                <div className='input-section'>
                    <label htmlFor="duration">Duration (in minutes)</label> <br />
                    <input type="number" name='duration' autoComplete='off' value={duration} onChange={durationHandler} />
                </div>
                <button>Add Exercise</button>
            </form>
        </div>
    )
}

export default CreateExercise;
