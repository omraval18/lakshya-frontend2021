import React, { useState } from 'react';
import './ContactForm.scss';
import PopUp from '../PopUp/PopUp';
import axios from '../../axios/axios';
import Bg from '../../Images/PopUp.png';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      message === '' ||
      name.length > 256 ||
      email.length > 256 ||
      message.length > 256
    ) {
      setError('Your input is not valid! Please enter only 256 letters');
      handleClickOpen();
    }
    const data = {
      name: name,
      email: email,
      message: message,
    };
    let result = await (await axios.post('/contact', data)).data;
    if (result.type === 'error') {
      setError(result.message);
      setOpen(false);
    } else {
      setSuccess(result.message[0]);
      setOpen(true);
      console.log(success);
    }
    handleClickOpen();
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Leave a Message</h2>
      <div className="contact-form__body">
        <div className="contact-form__row">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="contact-form__name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="contact-form__mail"
          />
        </div>
        <div className="contact-form__row">
          <textarea
            placeholder="Message"
            className="contact-form__message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="contact-form__submit" onClick={submitMessage}>
          Submit
        </button>
      </div>
      <PopUp
        open={open}
        close={handleClose}
        message={error}
        bg={Bg}
        bgColor="#232A67"
        paperHeight="60%"
        paperRadius="20px"
        button="true"
        paperWidth="80%"
      />
    </div>
  );
}

export default ContactForm;
