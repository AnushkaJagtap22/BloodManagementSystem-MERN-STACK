import React from 'react'

const Blood = () => {

  const bloodGroups = [
    { type: "A+", info: "Donate to A+, AB+" },
    { type: "A-", info: "Donate to A+, A-, AB+, AB-" },
    { type: "B+", info: "Donate to B+, AB+" },
    { type: "B-", info: "Donate to B+, B-, AB+, AB-" },
    { type: "O+", info: "Donate to all positive types" },
    { type: "O-", info: "Universal Donor" },
    { type: "AB+", info: "Universal Recipient" },
    { type: "AB-", info: "Receives from all negative types" }
  ]

  // duplicate for infinite scroll
  const loopGroups = [...bloodGroups, ...bloodGroups]

  return (
    <div className="container blood">
      <h2>Blood Groups</h2>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          {loopGroups.map((group, index) => (
            <div key={index} className="blood-card">
              <h3>{group.type}</h3>
              <p>{group.info}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Blood