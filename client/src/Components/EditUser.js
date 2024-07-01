import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ match }) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${match.params.id}`)
      .then(response => {
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
      })
      .catch((error) => console.log(error));
  }, [match.params.id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      first_name,
      last_name,
      email,
    };

    axios.post(`http://localhost:5000/users/update/${match.params.id}`, updatedUser)
      .then(res => console.log(res.data));

    setFirstName('');
    setLastName('');
    setEmail('');
  }

  return (
    <div>
      <h3>Edit User</h3>
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
          <input type="submit" value="Update User" />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
