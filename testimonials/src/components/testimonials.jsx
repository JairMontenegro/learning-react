
import React from 'react';
import '../style-sheets/testimonials.css'

function Testimonials (props){
  return(
    <div className='testimonial-container'>
      <img
      className='img-testimonial' 
      src={require(`../img/testimonial-${props.image}.jpeg`)} //to insert a img jsx we need insert REQUIRE
      alt='img-testimonial-1' />
      <div className='container-testimonial-text'>
        <p className='testimonial-1'>
        <strong>{props.name} </strong>
        beigin {props.country}</p>
        <p className='testimonial-ocupation'>{props.ocupation}</p>
        <p className='testimonial-text'> "{props.text}"</p>
      </div>

    </div>


  )

}

export default Testimonials


//here is where we have to export the component (at the end of the file) with <<export default nameourcomponent >>
//in react there are two types of export Named Exports (Zero or more exports per module) Default Exports (One per module)

  //Default Exports = it allows you define that this is only element or component to be exported this file.

  //Named Exports =  which will can to exports several elements from a same file, ande we have to specificy which of those elements
  //we want to export


// if we want to export with NAMED we have to do this below

  //  export function Testimonials (){ ........ 
  //......."""""""" THE SAME TO ABOVE. 


  //also we have to import our file css to aply the styles an our component
  //import '../rute/namefile.extention' (


// HOW TO RECIEVE PROPS IN A COMPONENT   

  // SO, here we're going to change the text for pops (similar an argements) of javascrip, remeber using {}
  // look at the 5 unntil 15 line (keyword = props) in this file. 

// HOW TO GET PROPS TO A COMPONENT 
// remember to get props is one way (father to child)
// to make the image dynamic what we have to use is the literal templates (inverted quote + ${}
// to make some words in bold we can use the tag <strong></strong>


//CHALLENGES 

// add bold in parts of the testimonial text
// change the alt property in img attribute to be dynamic
// have to values in other file for import app js 