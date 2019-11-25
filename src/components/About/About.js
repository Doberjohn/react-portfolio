import React, { Component } from 'react';
import '../About/About.css';

export default class About extends Component {
   render() {
      let website = "https://johnfanidis.myportfolio.com/";
      let officeMarkerLocation = "https://www.google.com/maps/place/%CE%92%CE%B1%CF%86%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%85+22,+%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7+546+46/@40.5972317,22.954253,19z/data=!3m1!4b1!4m5!3m4!1s0x14a838d5968d5037:0x8b2647b9fd107666!8m2!3d40.5972307!4d22.9548002";
      let officeFullAddress = "Vafopoulou Georgiou 22, Thessaloniki 546 46, Greece";

      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     With more than 5 years of experience in more than 20 projects, I am always passionate about software development. 
                     I am interested in learning innovative development patterns as well as new programming languages and mobile/web frameworks. 
                     I specialize in implementing real time features in web and mobile applications using event driven techniques to create more 
                     independent and modular application components.
                  </p>
                  <p>
                     I am currently working as a Frontend Engineer at Exandia, a software development company based in Greece, being a member of 
                     a talented team where we deliver large scale, highly scalable and complex Transportation Management Systems for various clients
                     throughout the world.
                  </p>
                  <p>
                     Besides my main job position, I also work on individual projects as a freelance Mobile Developer using both native languages 
                     (Android/Java + Swift/iOS) and cross platform frameworks (Ionic + React Native).
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>John Fanidis</span>
                           <br></br>
                           {/* eslint-disable-next-line */}
                           <a href={officeMarkerLocation} target="_blank">{officeFullAddress}</a>
                           <br></br>
                           {/* eslint-disable-next-line */}
                           <a href={website} target="_blank">{website}</a>
                           
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}