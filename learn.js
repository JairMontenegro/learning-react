// React basics course

// COMPONENT : 

// part of user that sees, is  independent and is reusable 

//independent, because each component will have a status and function specify.
//and these will be independent to the other componentes, 
//also, it's reusable because we can reuse the same component repeatedly. 
//we can write one just time in our code and we can reuse what times that we want to it. 

//Among the components we can define two main classes regarding their main structure, class and functional.

//FUNCTIONAL 

//it is a function of js/es6 that return a react element (jsx) => it's means extended syntaxis of js. 
//That as the html description of what we want to represent, example.  


    function Saludo (props){
        return <h1> ¡Hi,{props.name}! </h1> //example functinal 
    }

// in this case (props) is a parameter which is using in the scope and using the prop name. 
// Props only just can send to father and child components. Props NEVER can send to child to father.

    //PROPS 
    // args what it could get props to a component of react. 


    //FEATURES 

        //it must be return a react element (jsx)
        //it must start with Uppercase  in this case (Saludo)
        //it could get values if it's necesary 
        //  in react the args = props = properties. 


//CLASS COMPONENT 

    //class of es6 that return a jsx element    

    // EXAMPLE 

    class Saludo extends React.Component {
    render(){
        return <h1> ¡Hi, {this.props.name}! </h1>;   
    }
    }
    //  it's sintaxys is more compelex
    // first we used a word key class and then name of component and then we have to extend something specific, 
    // we have to extend to react component for it have all propertys of react component
    // inside this class we have to define a render metod called and iside a keys we'll define our componet or element jsx.



    // FEATURES 
    // 
    // 1 ) it must extend a React.Component.
    // 2 ) it must have a metod render () that return an element (jsx)
    // 3 ) it could recieve values if is necesary (props) 

    // IMPORTANT WHEN WE USE A CLASS IS TOO IMPORTANT USAR THE KEYWORD (THIS) AND IT'S MEANS A SPECIFIC COMPONENT IN OUR APP

// STATUS 

    // representation in js is the set of properties of a component and their current values(at a specific time and can also be changed). 
    // this propertys are'nt = props 

// HOOKS! 

    //allow us add a status our components.
    // Special function which allow us with status in functional componets an others react aspects, WITHOUT write a class component, which 
    // Allow us write a much more concise and easy to understand code


// EVENT LISTENER  / and  EVENT HANDLER 
     //it'ts a function js executed when a specific event ocurs 




// JSX INTRODUCTION 

    // Allows us how you are going to see a components in js, using a structure in html. 

        // BENEFITS

        // its structure is easier to visualize
        // the errors and warnings more usefully 



//REACT ELEMENTS 

    // smallest units of react and define what is seen on the screen 
    // what's de difference between elements and components in the code? 

    // easely, the elements begin with a lowercase for example (div img h1 among others )
    // and components with uppercase, example (names we define )

    //to  define a class="" in jsx as a html, we can define the sentence (className="") with camelCase IMPORTANT! 
    // the attribute for = "" also changes  => (htmlFor) with camelCase as well. 
    

    // TO DEFINE STYLES IN JSX REACT WE NEED THE FOLOWING BELOW:

    //Our attribute style in jsx acept a javascript object with css propertys and them must be write in camelCase as well. 

    //example inCSS 
    // backgroud-image:; 
    //in jsx will be: 
    //backgroundImage

//EXAMPLE   
    const estiloDiv = {
        color: 'black', 
        backgroundColor: 'white'  
    }

    <div style={estiloDiv}> "Hi, world" </div>;

//Another way ONE LINE 
<div style={{color :'black'}}> "Hi, world" </div> ;

    

// STRUCTURE 
// We can define our strcuture of components inside elements or elements inside components.

// important! indentation  

// then we just have to render 

//RENDER 

<div id="root"></div>

const element = <hi>hi, world!</hi>

reactDOM.render(
    element,//first arg 
    document.getElementById('root') //container for element
)
//why can we use a 'reactDom' = because we have to import it.

//so; 

import reactDOM from 'react-dom'; // we are import the package 

//REACT SELF CLOSING TAGS 

// element whitout content and only have tag < 
// example 
 <img src = "logo.png" alt="my logo" /> ;
 
    //  it's more important the / before the closing tag.

// JAVASCRIPT IN JSX 

    // when we see this {} in jsx mean that in our element or component there's a 
    //javascript code. And this allows us create a REACTAPPS DINAMICS with code very concise example: 

    let verb = "eat"

    //we want to inlcuide this let into an element jsx such as: 

    <p> what do you want to {verb} ?</p>

        //it's mean that our result of this code will be (what do you want to eat) 

    //Another example 
        // we can call a metod as well. Example 

        let  name1 = "jair";
        <p>your //name is {name1.toUppercase()} </p>


        // now i'm going to do a projects of react in other files in this same folder. 
        // create react app react % npx create-react-app ourname
        // if you already have a folder app, only can replace ourname for a dot (.) so will create a new repository into folder app. 

            // 1ST) testimonials page 


// STYLES .CSS 

    // it's normaly we found a one file for each component style in react.
    // it's important review each file of css this file because there are many information
    // about how we can get styles to our component


//HOW TO RECIEVE PROPS IN A COMPONENT  

    //PROPS IT'S THE REASON FOR REACT IS SO POWERFUL
    //REMEMBER, THE PURPOSE OF REACT IS HELP US CREATE COMPONETS REUSABLES TO SEE GO IN TO THE 
    //TESTIMONIALS.JS THERE CONTINUE THE EXPLANATION  

// HOW TO GET PROPS TO A COMPONENT 

    // remember to get props is one way (father to child)
    // in this case the component that render this component is found in App,js testimonials. see you there.
    // to make the image dynamic what we have to use is the literal templates (inverted quote `` + ${} es6