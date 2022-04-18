import './App.css';
import Testimonials from './components/testimonials.js'
function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimonials/> 
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