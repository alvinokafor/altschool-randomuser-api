import React from 'react';

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  currentPage,
  prev,
  next,
}) => {
  const pageNumbers = [];

  //gets the number of buttons to display for pagination
  const buttonNum = Math.ceil(totalUsers / usersPerPage);

  for (let i = 1; i <= buttonNum; i++) {
    pageNumbers.push(i);
  }

  //checks if the previous button should be disabled
  const checkPrevDisable = (currentPage) => {
    if (currentPage <= 1) {
      return true;
    }
  };

  //checks if the next button should be disabled
  const checkNextDisable = (currentPage) => {
    if (currentPage >= 5) {
      return true;
    }
  };

  return (
    <section className="pagination">
      <button
        disabled={checkPrevDisable(currentPage)}
        onClick={() => prev(currentPage)}
        className={checkPrevDisable(currentPage) ? 'btn-disabled' : 'control'}
      >
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? 'btn-num btn-active' : 'btn-num'}
        >
          {number}
        </button>
      ))}

      <button
        disabled={checkNextDisable(currentPage)}
        onClick={() => next(currentPage)}
        className={checkNextDisable(currentPage) ? 'btn-disabled' : 'control'}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
