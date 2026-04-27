import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxioxs from "../../hooks/useAxios";

const SearchRequest = () => {
  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const axiosInstance = useAxioxs();

  useEffect(() => {
    axios.get("/upazilas.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });

    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    const bloodGroup = form.blood.value;

    axiosInstance
      .get("/search-requests", {
        params: {
          bloodGroup,
          district,
          upazila,
        },
      })
      .then((res) => {
        console.log("Search Result:", res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="fieldset flex gap-2">
        {/* Blood Group */}
        <select
          name="blood"
          defaultValue=""
          className="select"
          required
        >
          <option disabled value="">
            Choose Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A−</option>
          <option value="B+">B+</option>
          <option value="B-">B−</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB−</option>
          <option value="O+">O+</option>
          <option value="O-">O−</option>
        </select>

        {/* District */}
        <select
          onChange={(e) => setDistrict(e.target.value)}
          name="district"
          defaultValue=""
          className="select"
          required
        >
          <option disabled value="">
            Select Your District
          </option>
          {districts.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          onChange={(e) => setUpazila(e.target.value)}
          name="upazila"
          defaultValue=""
          className="select"
          required
        >
          <option disabled value="">
            Select Your Upazila
          </option>
          {upazilas.map((u) => (
            <option key={u.id} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>

        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchRequest;