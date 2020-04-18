import React, { useState } from "react";

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = 3;
  const lastIndex = currentPage * totalPage - currentPage;
  const firstIndex = currentPage;

  const currentPages = pageNumbers.slice(firstIndex - 1, lastIndex / 2 + 2);

  return (
    <nav className="mt-8 flex text-center justify-center">
      <ul className="flex">
        <li className="lg mr-6">
          <a
            className="text-blue-500 hover:text-blue-800"
            href="!#"
            onClick={() => {
              paginate(1);
              setCurrentPage(1);
            }}
          >
            First Page
          </a>
        </li>
        {currentPage > 1 && (
          <li className="lg mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="!#"
              onClick={() => {
                paginate(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }}
            >
              Prev
            </a>
          </li>
        )}
        {currentPages.map((pageNumber) => {
          return (
            <li className="mr-6" key={pageNumber}>
              <a
                className={
                  pageNumber === currentPage
                    ? "text-red-500"
                    : "text-blue-500 hover:text-blue-800"
                }
                href="!#"
                onClick={() => {
                  paginate(pageNumber);
                  setCurrentPage(pageNumber);
                }}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}
        {currentPage < pageNumbers.length - 1 && (
          <li className="lg mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="!#"
              onClick={() => {
                paginate(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        )}
        <li className="lg mr-6">
          <a
            className="text-blue-500 hover:text-blue-800"
            href="!#"
            onClick={() => {
              paginate(pageNumbers.length);
              setCurrentPage(pageNumbers.length);
            }}
          >
            Last Page
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
