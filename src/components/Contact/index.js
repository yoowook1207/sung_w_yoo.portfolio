import React, { useRef } from 'react';
import { ContactContainer, ContactWrapper, ContactH1, ContactForm, EmailInput, TextInput, Colored, ContactButton, UserInput } from './ContactElements'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_m2p7j4b', 'template_g5k6t2b', form.current, 'XqAnkaoncG0NMTkmf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <ContactContainer id="contactMe">
        <ContactWrapper>
              <ContactH1> Contact <Colored>Me</Colored> </ContactH1>
                  <ContactForm ref={form} onSubmit={sendEmail}>

                      <label for="user_name">Name</label>
                      <UserInput type="text" name="user_name" placeholder='Your Name' required/>

                      <label for="email">Email</label>
                      <EmailInput type="email" name="user_email" placeholder='Your Email' required/>

                      <label for="message">Message</label>
                      <TextInput name="message" placeholder='Please leave any message or questions about me' required/>
                      
                      <ContactButton type="submit" value="Send"></ContactButton>
                  </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default Contact