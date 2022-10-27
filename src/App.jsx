import React, { useState } from 'react';
import UserList from './pages/UserList';
import SingleUser from './pages/SingleUser';
import useFetch from './hooks/useFetch';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const {users} = useFetch('https://randomuser.me/api/?results=25&seed=foobar');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserList
            users={users}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            usersPerPage={usersPerPage}
          />
        }
      />
      <Route path="/user/:id" element={<SingleUser users={users} />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
}
