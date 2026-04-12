import React, { useEffect, useState, useContext, use } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddRequest = () => {
  const { user } = useContext(AuthContext);
  
  const axiosSecure = useAxiosSecure();

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const [formData, setFormData] = useState({
    requesterName: user?.displayName || "",
    requesterEmail: user?.email || "",
    recipientName: "",
    district: "",
    upazila: "",
    hospital: "",
    address: "",
    bloodGroup: "",
    donationDate: "",
    donationTime: "",
    message: "",
    donation_status: "pending",
  });

  console.log(formData);

  // Fetch JSON data
  useEffect(() => {
    axios
      .get("/upazilas.json")
      .then((res) => setUpazilas(res.data?.upazilas || []))
      .catch((err) => console.error("Error loading upazilas:", err));

    axios
      .get("/district.json")
      .then((res) => setDistricts(res.data?.districts || []))
      .catch((err) => console.error("Error loading districts:", err));
  }, []);

  // Update formData when district/upazila change
  useEffect(() => {
    setFormData((prev) => ({ ...prev, district, upazila }));
  }, [district, upazila]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Use this function to submit form and get all values directly
  const handleRequest = (e) => {
    e.preventDefault(); // <-- fixed missing parentheses
    const form = e.currentTarget;

    const requestPayload = {
      requesterName: form.requesterName.value,
      requesterEmail: form.requesterEmail.value,
      recipientName: form.recipientName.value,
      district: form.district.value,
      upazila: form.upazila.value,
      hospital: form.hospital.value,
      address: form.address.value,
      bloodGroup: form.bloodGroup.value,
      donationDate: form.donationDate.value,
      donationTime: form.donationTime.value,
      message: form.message.value,
    };

    console.log("Blood Request Submitted:", requestPayload);
    alert("Blood request submitted successfully!");
    // Here you can send requestPayload to your backend API
    
    axiosSecure
      .post("/request", formData)
      .then((res) => {
        alert(res.data.insertedId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-red-600">
        Blood Donation Request
      </h2>

      <form onSubmit={handleRequest} className="space-y-4">
        <input
          type="text"
          name="requesterName"
          placeholder="Requester Name"
          value={user?.displayName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="requesterEmail"
          value={user?.email}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
        />

        <input
          type="text"
          name="recipientName"
          placeholder="Recipient Name"
          value={formData.recipientName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="district"
          onChange={(e) => setDistrict(e.target.value)}
          value={district}
          className="w-full p-2 border rounded"
        >
          <option disabled value="">
            Select Your District
          </option>
          {districts?.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        <select
          name="upazila"
          onChange={(e) => setUpazila(e.target.value)}
          value={upazila}
          className="w-full p-2 border rounded"
        >
          <option disabled value="">
            Select Your Upazila
          </option>
          {upazilas?.map((u) => (
            <option key={u.id} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="hospital"
          placeholder="Hospital Name (e.g., Dhaka Medical College Hospital)"
          value={formData.hospital}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Full Address (e.g., Zahir Ranan, Dhaka)"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        <input
          type="date"
          name="donationDate"
          value={formData.donationDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="time"
          name="donationTime"
          value={formData.donationTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Why do you need blood? (details)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        />
        {/* Hidden donation status */}
        <input type="hidden" name="donation_status" value="pending" />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
        >
          Request Blood
        </button>
      </form>
    </div>
  );
};

export default AddRequest;
