
import React from 'react';

function Testimonials (){
  return( 
    <div className='containerp'>
      <img 
      className='img_testimonials'
      src={require('../img/testimonial-1.jpeg')} //to insert a img jsx we need insert REQUIRE 
      alt='img-testimonial-1'/>
      <div className='container-testimonial-text'>
        <p className='testimonial-1'>SanFuanZhon beigin china</p>
        <p className='testimonial-ocupation'>general services</p>
        <p className='testimonial-text'>  "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
      </div>

    </div>

  
  )

}
