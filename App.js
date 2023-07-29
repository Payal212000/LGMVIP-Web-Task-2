/// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import UserCardGrid from './components/UserCardGrid';
import './styles/App.scss';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetUsers = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="app">
      <Navbar onGetUsers={handleGetUsers} />
      {loading ? <div className="loader">Loading...</div> : <UserCardGrid users={users} />}
    </div>
  );
};

export default App;
