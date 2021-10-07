import React, {useState} from 'react';

function Contact() {
    // add hook to manage form data & initialize the values of the state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    //destructure formState object into its named properties, use these constantst to assign the initial state
    const { name, email, message } = formState;
  
    //function used to sync state of components with user input, event listener that fires with every keystroke
    function handleChange(e) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }

    //function to handle submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return(
    <section className = "contactform-container" id = "contact-us">
      <h1>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
              {/* add default , sync state of component using onChange attribute and function handleChange defined above */}
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        
        <button type="submit">Submit</button>
    
      </form>
    </section>
    );
}

export default Contact;