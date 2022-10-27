import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ firstName, lastName, age, email, img, id }) => {
  return (
    <section className="user-card">
      <div className="user-img">
        <img src={img} alt="profile" />
      </div>

      <div className="user-info">
        <Link to={`/user/${id}`}>
          <h3>
            <span>Name: </span> {firstName + ' ' + lastName}{' '}
          </h3>
        </Link>
        <h5>
          <span>Email: </span> {email}
        </h5>
        <h5>
          <span>Age: </span> {age}
        </h5>
      </div>
    </section>
  );
};

export default UserCard;
