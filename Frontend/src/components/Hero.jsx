import React from 'react'

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis, nemo soluta facere reiciendis, sint doloribus asperiores placeat id nobis ducimus vero ipsum magni saepe vitae corrupti autem exercitationem nisi atque libero! Voluptatem harum itaque excepturi cupiditate ab odio, praesentium labore doloremque natus molestias alias, nesciunt dolore mollitia sequi ea!
        </p>
      </div>

      <div className='banner'>
        <img className='animated-image' src={imageUrl} alt="Hero" />
        <span>
          <img src="./Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero