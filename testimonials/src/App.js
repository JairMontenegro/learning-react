import './App.css';
import Testimonials from './components/testimonials.jsx'
function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimonials
          name='zhan fuan zhon '
          country ='china'
          image='1'
          ocupation='general services'
          text = 'Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
           /> 
          <Testimonials
           name='Bernabe Mutilanga'
           country ='Choco'
           image='2'
           ocupation='Engineer'
           text = 'FreeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
            />
          <Testimonials
           name='Akiito Yamamoto'
           country ='Pearl harbor '
           image='3'
           ocupation='Engineer'
           text = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
            />
      </div>
    </div>
  );
}
// remember that when naming our component, its initial letter must be in uppercase, so that react can read it.
// remember import our component with  "import .componentname. from  ' ./ ' adress in our folder "
// rembember export our component with "" where we have our file, in this case will be in testimonial.js (at the end of the file)
export default App; 


// if we want to export with NAMED we have to do, add one pair of {} in our import file. below

//import {Testimonials} from './components/testimonials.js' 


// HOW TO GET PROPS TO A COMPONENT 
  // here, to create a component we have to specify our args or propertys (name, country, ocupaton, text)
  //look at the component "testimonials" in the line 8 until 14 

  //thanks to the power of react we have created a componente what we can reuse as many times of we want, in this
  //case we can add many testimonials what we want. so, look at the line 15