import React, { useContext } from "react";
import useAxioxs from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";

const Donate = () => {
  const axiosInstance = useAxioxs();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCheckout = (e) => {
    e.preventDefault();
    const donateAmount = e.target.donateAmount.value;
    const donateEmail = user?.email;
    const donorName = user?.displayName;
    const formData={
      donateAmount,
      donateEmail,
      donorName
    }
    axiosInstance
      .post("/create-payment-intent", formData)
      .then((res) => {
        console.log(res.data);
        window.location.href = res.data.url;
      });
  };

  return (
    <div>
      <form
        onSubmit={handleCheckout}
        className=" flex justify-center items-center min-h-screen gap-4"
      >
        <input
          name="donateAmount"
          type="text"
          placeholder="Type here"
          className="input"
        />
        <button className="btn btn-primary">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
