import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';

import './EventMainPage.scss';
import eventimg from '../../Images/events-banners/arduino2.png';

import img from './../../Images/EventMain.webp';

import EventDetailBox from './../../components/EventDetailBox/EventDetailBox';
import EventContactBox from './../../components/EventContactBox/EventContactBox';
import EventTextBox from '../../components/EventTextBox/EventTextBox';
import GradientBox from './../../components/GradientBox/GradientBox';
import { useParams } from 'react-router';

const EventMainPage = () => {
  const [event, setEvent] = useState([]);
  const { event: eventName } = useParams();
  useEffect(() => {
    const fetchDeaprtment = async () => {
      try {
        console.log(eventName);
        setEvent(await (await axios.get(`/events/${eventName}`)).data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDeaprtment();
    // console.log(event.name);
  }, [eventName]);
  return (
    <div className="event-main__container">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="event-main">
        <div className="event-main__head">
          <div className="event-main__hero-box">
            <h2 className="event-main__title">Web-O-Thon</h2>
            <div className="event-main__btn-box">
              <button className="event-main__btn">Participate</button>
            </div>
          </div>
          <div className="event-main__img-box">
            <img src={img} alt="" className="event-main__img" />
            <div className="overlay"></div>
          </div>
        </div>

        <div className="container">
          <div className="event-main__body">
            <div className="event-main__box-container">
              <EventDetailBox></EventDetailBox>
              <EventContactBox></EventContactBox>
            </div>
            <EventTextBox></EventTextBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMainPage;
