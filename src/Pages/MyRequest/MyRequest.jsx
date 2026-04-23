import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState(0);
  const [myRequest, setMyRequest] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    setError(null);

    axiosSecure
      .get(`/myrequest?page=${currentPage - 1}&size=${itemsPerPage}`)
      .then((res) => {
        setMyRequest(res.data.requests || []);
        setTotalRequest(res.data.totalRequest || res.data.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [axiosSecure, currentPage, itemsPerPage]); // FIXED

  const numberOfPages = Math.ceil(totalRequest / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Hospital</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {myRequest.length > 0 ? (
              myRequest.map((request, index) => (
                <tr key={index}>
                  <th>{(currentPage - 1) * itemsPerPage + index + 1}</th>
                  <td>{request.recipientName}</td>
                  <td>{request.hospital}</td>
                  <td>{request.bloodGroup}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-12 gap-2 flex-wrap">
        <button
          className="btn"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn ${
              pageNumber === currentPage ? "btn-active" : ""
            }`}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className="btn"
          onClick={handleNext}
          disabled={currentPage === numberOfPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyRequest;