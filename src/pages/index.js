import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·
            <a name="email" href={`mailto:${config.email}`}>
              {config.email}
            </a>
          </div>
          <p className="lead mb-5">
            Web Developer and Tinkerer hailing from Auckland, New Zealand
          </p>
          <p className="lead mb-5">
            My Goal is to attain an intermediate level of experience in the
            Technology Field within the next five years.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a name="social" key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Chief Invoicing Systems Administrator</h3>
              <div className="subheading mb-3">Ecotricity NZ</div>
              <ul>
                <li>Initialising Monthly Invoicing Processes</li>
                <li>Resolving Invoicing and System Errors</li>
                <li>Establishing and Maintaining Workstations</li>
                <li>
                  Maintaining Ecotricity's Data Servers through SQL Queries
                </li>
                <li>Improving efficiency for the Customer Service Team</li>
                <li>
                  Advising the Metering, Customer Service, Sales and Reporting
                  Teams
                </li>
                <li>
                  Co-ordinating with the external support team to resolve
                  technical issues
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2019 - October 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Chief Complaints Resolution Manager</h3>
              <div className="subheading mb-3">Ecotricity NZ</div>
              <p>
                <ul>
                  <li>
                    Responding to client complaints and reaching resolutions
                    with customers.
                  </li>
                  <li>Co-ordinating with Utilities Disputes</li>
                  <li>Establishing and Maintaining Workstations</li>
                  <li>
                    Maintaining Ecotricity's Data Servers through SQL Queries
                  </li>
                  <li>
                    Relaying Customer Feedback to change makers in Ecotricity.
                  </li>
                  <li>Solving Customers' account problems.</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2019 - August 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Digital Marketing and Web Development Intern
              </h3>
              <div className="subheading mb-3">
                Screenies International Children's Film Festival
              </div>
              <ul>
                <li>Composing and scheduling Social Media updates</li>
                <li>Editing the Screenies Wordpress Website</li>
                <li>Conducting Outreach with Community</li>

                <li>Providing Technical Support - Collating Media Packages</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 - June 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Auckland University of Technlogy</h3>
              <div className="subheading mb-3">
                Graduate Diploma of Computing and Information Sciences
              </div>
              <div>Computer Science - Software Engineering/Web Development Track</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2017 - July 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Auckland University of Technlogy</h3>
              <div className="subheading mb-3">Bachelor of Communications</div>
              <div>Radio/Journalism Major</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2012 - November 2014</span>
            </div>
          </div>

          <hr className="m-0" />
          <div className="w-100">
            <h2 className="mb-5">Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Google Academy
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                CCNA 1: Introduction to Networks
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                HubSpot Academy: Emailing Marketing
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="m-0" />
      
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-git-alt"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-github"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-linux"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Social Media Management and Marketing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Usability Testing and Documentation
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Project Management: Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Proficiency with Adobe Photoshop and Premier
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Recording and Editing Audio
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Client Side Hardware Setup
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Device Repair and Maintenance
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              3D Printer Proficiency
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            When I'm not developing my Web Development skils, I enjoy learning
            about History, Comedy Writing, Weightlifting, learning new things and befriending animals. 
          </p>
          <p>
            As either a Player or a Game Master, I enjoy roleplaying games such
            as Dungeons and Dragons. I've also developed a proficiency for
            painting Miniatures for use in board games.
          </p>
          <p>
            I also enjoy building Costumes and Props. I mostly work at building Replica Armour out of EVA Foam.
            Since I recently acquired and upgraded a 3D Printer, I'm working on building an TIE Fighter Helmet, similar to the one seen in the Star Wars Films for roughly three seconds.
          </p>
          <p>
            Oh and I learned French accidentally in 2015. J'ai un vocabulaire pratique, mais je développe
            toujours mes compétences d'écoute et de grammaire.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact Me</h2>
          <form
            action="https://getform.io/f/7524d987-a89c-4e2a-9d12-d8dfca315754"
            method="POST"
          >
            <div className="p-3 col-md-6">
              <h4>Name</h4>
              <input type="text" name="name" required />
            </div>
            <div className="p-3 col-md-6">
              <h4>Email Address</h4>
              <input type="email" name="email" required />
            </div>
            <div className="w-50 p-3">
              <h4>Message</h4>
              <textarea
                type="text"
                name="message"
                cols="40"
                rows="5"
                required
              />
              <br />
              <small>
                Form powered by GetForm, Messages go directly to my Email
                Address
              </small>
              <br />
              <button type="submit" class="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
