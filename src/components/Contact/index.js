import React from 'react'
import { Button } from '../ButtonElement'
import { ContactContainer, ContactWrapper, ContactH1, ContactForm, EmailInput, TextInput, Colored } from './ContactElements'

const Contact = () => {
  return (
    <>
      <ContactContainer id="contactMe">
        <ContactWrapper>
              <ContactH1> Contact <Colored>Me</Colored> </ContactH1>
                  <ContactForm>
                      <label for="email">Email</label>
                      <EmailInput id="email" placeholder='Your email' />

                      <label for="contactText">Subject</label>
                      <TextInput id="contactText" placeholder='Please leave any message or questions about me' />
                      <Button type="submit" primary='true' dark='true'>Submit</Button>
                  </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default Contact