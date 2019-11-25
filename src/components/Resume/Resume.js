import React, { Component } from 'react';
import '../Resume/Resume.css';
import ReadMoreReact from 'read-more-react';

export default class Resume extends Component {

  //<ReadMoreReact text="" />

  render() {
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div key="education-1" className="row item">
              <div className="twelve columns">
                <h3>University of Macedonia</h3>
                <p className="info">
                  Applied Informatics and Computer Science <span>&bull;</span> <em className="date">Sep 2013 - Apr 2017 <span>&bull;</span> Thessaloniki</em></p>
                <p>
                  I built a team of nine skilled members for the class of Software Engineering and created a 2D platformer video game in Java, called Kingdom of Saldimor.
                  In the project I had the role of director and lead programmer. Our game was awarded as the best entry for our class competition and one of the best entries in our University.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            <div key="work-1" className="row item">
              <div className="twelve columns">
                <h3>Exandia</h3>
                <div className="info">
                  Lead Frontend Developer <span>&bull;</span> <em className="date">Nov 2018 - Present <span>&bull;</span> Thessaloniki</em></div>
                <div>
                  <ReadMoreReact text="Designer of the Front End Architecture and the tools needed for rebranding Transportation Management Systems initially developed by the company's clients. 
                  My front end team is responsible for redesigning various pages and components of the TMS using modern web technologies. 
                  We are also creating various useful tools for our client to help streamline the process of creating new web components." readMoreText="Read More"/>
                </div>
              </div>
            </div>
            <br></br>
            <div key="work-2" className="row item">
              <div className="twelve columns" ref="readmore1">
                <h3>Yummy Software & Services</h3>
                <div className="info">
                  Full Stack Developer <span>&bull;</span> <em className="date">Sep 2015 - Oct 2018 <span>&bull;</span> Thessaloniki</em></div>
                <div>
                  <ReadMoreReact text="Backend Developement: Server design and development in Node.js/ Apache HTTP environment, hosted in dedicated/cloud servers. 
                  Routing in Node.js servers using Express.js and Angular Most Framework." readMoreText="Read More"></ReadMoreReact>
                </div>
                <br></br>
                <div>
                  <ReadMoreReact text="Database Specialist: Business model in-depth analysis and implementation of suitable database ecosystems, based on the project's horizontal and vertical development potential. 
                  Expertise in designing and implementing relational database schemas in OracleDB/MySQL and highly scalable, realtime databases in MongoDB, Cassandra, Firebase, Firestore." readMoreText="Read More"></ReadMoreReact>
                </div>
                <br></br>
                <div>
                  Front end developement: Design, development and distribution in all major platforms (Web, Android, iOS, Windows Phone). Expertise in:
                </div>
                <ol>
                  <li>Native and cross platform mobile applications with Android Native SDK, Swift, Ionic Framework/Ionic 2, AngularJS/Angular 4 and Cordova.</li>
                  <li>Progressive web applications, web portals, websites and SPAs with Angular 4.</li>
                  <li>Websites in wordpress with Kallyas theme.</li>
                </ol>
                <div>
                  <ReadMoreReact text="Technology Administration: Azure Cloud setup and management, virtual machine administration, security rules validation, version control management in Bitbucket/Github, quality assurance tests on all systems involved in project development. 
                  Responsible for setting up and maintaining Continuous Testing/Continuous Integration/Continuous Deployment processes for team projects using Visual Studio Team Services as the core service." readMoreText="Read More"></ReadMoreReact>
                </div>
                <br></br>
                <div>
                  <ReadMoreReact text="Project Management: Responsible for allocating various project tasks to all development team members, keeping track of time spent on each project, creating timetables and setting up project deadlines, writing project documentation and user manuals as part of the final deliverable for each client. 
                  Setting up team sprints using Visual Studio Team Services, organizing the development process in shorter term deliverables that meet specific acceptance criteria." readMoreText="Read More"></ReadMoreReact>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">

              <ul className="skills">
                <li key="skills-1">
                  <span className="bar-expand html5">
                  </span><em>HTML 5</em>
                </li>

                <li key="skills-2">
                  <span className="bar-expand css">
                  </span><em>CSS</em>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>
    );
  }
}