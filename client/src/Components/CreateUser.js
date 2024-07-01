import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      first_name,
      last_name,
      email,
    };

    axios.post('http://localhost:5000/users/add', newUser)
      .then(res => console.log(res.data));

    setFirstName('');
    setLastName('');
    setEmail('');
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            required
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            required
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Create User" />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
