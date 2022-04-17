
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

export default Testimonials


//here is where we have to export the component (at the end of the file) with <<export default nameourcomponent >>
//in react there are two types of export Named Exports (Zero or more exports per module) Default Exports (One per module) 

//Default Exports = it allows you define that this is only element or component to be exported this file. 

//Named Exports =  which will can to exports several elements from a file 


