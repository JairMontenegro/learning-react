import './App.css';
import Testimonials from './components/testimonials.js'
function App() {
  return (
    <div className="App">
    <Testimonials/> 
    </div>
  );
}
// remember that when naming our component, its initial letter must be in uppercase, so that react can read it.
// remember import our component with  "import .componentname. from  ' ./ ' adress in our folder "
// rembember export our component with "" where we have our file, in this case will be in testimonial.js (at the end of the file)
export default App; 
