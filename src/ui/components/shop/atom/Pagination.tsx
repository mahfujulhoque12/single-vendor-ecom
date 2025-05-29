import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 6) {
      pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="mt-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <p className="text-green-500 text-base font-semibold">Top Of page</p>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        <p className="text-[#333B4E]  text-base font-normal">
          Showing results {(currentPage - 1) * 10 + 1} -{" "}
          {Math.min(currentPage * 10, 100)} out of 100
        </p>

        <div className="flex flex-row gap-3">
          {/* Previous button */}
          <button
            className={`px-3 py-2.5 border rounded-md ${
              currentPage === 1
                ? "bg-btn text-gray-500 cursor-not-allowed"
                : "bg-primary hover:bg-gray-100 dark:hover:bg-gray-500 "
            }`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FaChevronLeft />
          </button>
          {/* Page Numbers */}
          {renderPageNumbers().map((page, index) =>
            typeof page === "number" ? (
              <button
                key={index}
                className={`px-4 py-2 flex text-sm font-medium border ${
                  currentPage === page
                    ? "bg-green-500 text-white border rounded-md"
                    : "bg-white  text-gray-700   border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-md"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ) : (
              <button
                key={index}
                className="px-3 py-1.5 border rounded-md bg-primary 0 cursor-default"
              >
                {page}
              </button>
            )
          )}
          {/* Next button */}
          <button
            className={`px-3 py-2.5 border rounded-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-primary hover:bg-gray-100 dark:hover:bg-gray-500 dark:border-gray-700"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
