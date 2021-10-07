import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers'

function Contact() {
    // add hook to manage form data & initialize the values of the state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    //destructure formState object into its named properties, use these constantst to assign the initial state
    const { name, email, message } = formState;

     //function to handle submission
     function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    };
  
    //function used to sync state of components with user input, event listener that fires with every keystroke
    function handleChange(e) {
        //validate email
        if (e.target.name === 'email') {
           const isValid = validateEmail(e.target.value);
   
       // isValid conditional statement
           if (!isValid) {
               setErrorMessage('Your email is invalid.');
           } else {
               setErrorMessage('');
           }  
       } else {
           if (!e.target.value.length) {
           setErrorMessage(`${e.target.name} is required.`);
       } else {
         setErrorMessage('');
       }
       }
   };

    return(
    <section className = "contactform-container" id = "contact-us">
      <h1>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
              {/* add default , sync state of component using onChange attribute and function handleChange defined above */}
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {/* render error message in div */}
        {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
        )}
        
        <button type="submit">Submit</button>
    
      </form>
    </section>
    );
}

export default Contact;