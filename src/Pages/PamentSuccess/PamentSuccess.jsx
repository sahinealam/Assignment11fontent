import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxioxs from "../../hooks/useAxios";

const PamentSuccess = () => {
  const [searchParms] = useSearchParams();
  const sessionId=searchParms.get("session_id");
  console.log(sessionId);
  const axiosInstance=useAxioxs();
  useEffect(()=>{
    axiosInstance.post(`/sccess-payment?session_id=${sessionId}`)
  },[sessionId,axiosInstance])
  return <div>PamentSuccess</div>;
};

export default PamentSuccess;
