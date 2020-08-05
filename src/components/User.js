import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import '../styles/user.scss';

const Usernames = () => {
    const { users, setUsers } = useContext(UserContext);
    const [name, setName] = useState('');

    const nameHandler = e => setName(e.target.value);

    const deleteName = (i) => {
        const userChanges = users;
        userChanges.splice(i, 1);
        setUsers([...userChanges])
    }

    const submitName = e => {
        e.preventDefault();
        setUsers(prev => [...prev, name])
        setName('');
    }

    return (
        <div className='user'>
            <form onSubmit={submitName}>
                <div className='input-section'>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name='name' onChange={nameHandler} value={name} autoComplete='off' />
                </div>
                <button>Add User</button>
            </form>
            <div className="users-container">
                <h4>User List</h4>
                <ol>
                    {users.map((user, i) => (
                        <li key={i}>
                            {user}
                            <button onClick={() => deleteName(i)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Usernames
