import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      
      <div className="banner">
        <img 
          src={imageUrl} 
          alt="About Blood Management System" 
          className="bio-image"
        />
      </div>

      <div className="banner">
        <p className="subtitle">Biography</p>
        <h3>WHO WE ARE?</h3>

        <p>
          We are a digital platform dedicated to simplifying blood donation 
          and management processes. Our goal is to connect donors, recipients, 
          and hospitals efficiently.
        </p>

        <p>
          The system ensures quick access to blood availability and promotes 
          awareness about the importance of voluntary blood donation.
        </p>

        <p>
          Through technology, we aim to reduce delays in emergencies and 
          create a reliable network of donors.
        </p>

        <p>
          Our mission is to save lives by making blood accessible whenever 
          and wherever it is needed.
        </p>
      </div>

    </div>
  )
}

export default Biography