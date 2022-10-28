import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const SingleUser = () => {
  const [currentUser, setCurrentUser] = useState([]);

  const { id } = useParams();
  const { users } = useFetch(
    'https://randomuser.me/api/?results=25&seed=foobar'
  );

  //filters out the current user clicked on
  useEffect(() => {
    setCurrentUser(
      users.filter((user) => {
        let userId = window.location.href;
        return userId.includes(user.login.uuid);
      })
    );
  }, [users]);

  return (
    <section className='single-user'>
      {users.length === 0 && <div>Loading...</div>}
      {currentUser.length > 0 &&
        currentUser.map((user) => (
          <div key={user.login.uuid}>
            <div>
              <img src={user.picture.large} alt="user profile" />
            </div>

            <h2>Name: {user.name.first}  {user.name.last}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Username: {user.login.username}</h4>
          </div>
        ))}
    </section>
  );
};

export default SingleUser;
