import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BloodRequestForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState(1);
  const [urgency, setUrgency] = useState("Normal");
  const [hospital, setHospital] = useState("");
  const [address, setAddress] = useState("");

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleRequest = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/blood/request",
        {
          patientName: firstName + " " + lastName,
          bloodGroup,
          unitsRequired: units,
          hospital,
          location: address,
          contact: phone,
          urgency
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);

      // reset
      setFirstName("");
      setLastName("");
      setPhone("");
      setBloodGroup("");
      setUnits(1);
      setUrgency("Normal");
      setHospital("");
      setAddress("");

    } catch (error) {
      toast.error(error?.response?.data?.message || "Request failed ❌");
    }
  };

  return (
    <div className="container form-component request-form">
      <h2>Blood Request</h2>

      <form onSubmit={handleRequest}>

        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((group, index) => (
              <option key={index} value={group}>{group}</option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            placeholder="Units Required"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />
        </div>

        <div>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Emergency">Emergency</option>
          </select>

          <input
            type="text"
            placeholder="Hospital Name"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          />
        </div>

        <textarea
          rows="5"
          placeholder="Address / Additional Info"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button>Request Blood</button>

      </form>
    </div>
  );
};

export default BloodRequestForm;