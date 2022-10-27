import React from 'react';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

function UserList({ users, currentPage, setCurrentPage, usersPerPage }) {
  //gets value of the index of last page
  const indexOfLastPage = currentPage * usersPerPage;
  //gets value of the index of first page
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  //gets list of users to be displayed per page
  const current = users.slice(indexOfFirstPage, indexOfLastPage);

  //switches the pages
  const paginate = (number) => {
    setCurrentPage(number);
  };

  const prev = (currentPage) => {
    setCurrentPage(currentPage - 1);
  };

  const next = (currentPage) => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      <h1>User List</h1>

      <div>
        {users.length > 0 &&
          current.map((user) => (
            <UserCard
              users={users}
              key={user.login.uuid}
              id={user.login.uuid}
              img={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              email={user.email}
              age={user.dob.age}
            />
          ))}

        {users.length === 0 && [1, 2, 3, 4, 5].map((n) => <Loader key={n} />)}
      </div>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
        prev={prev}
        next={next}
      />
    </div>
  );
}

export default UserList;
