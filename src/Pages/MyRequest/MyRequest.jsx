import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState(0);
  const [myRequest, setMyRequest] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axiosSecure
      .get("/myrequest?page=0&size=10")
      .then((res) => {
        console.log("API Response:", res.data);
        setMyRequest(res.data.requests || []);
        setTotalRequest(res.data.totalRequest || res.data.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [axiosSecure]);

  console.log("My Requests:", myRequest);
  console.log("Total Requests:", totalRequest);
  console.log("Items Per Page:", itemsPerPage);
  const numberOfPages =
    totalRequest > 0 ? Math.ceil(totalRequest / itemsPerPage) : 0;

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div>
      <h1>MyRequest</h1>
      <p>
        Total Requests: {totalRequest} | Pages: {numberOfPages}
      </p>
      <button>prev</button> 1 2 3 4 5 <button>next</button>
    </div>
  );
};

export default MyRequest;
