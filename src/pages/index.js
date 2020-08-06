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
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Graduate of Computing and Information Sciences, Aspiring Web and
            Mobile Developer Former Radio Major/Journalist
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
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
              <p>
                - Initialising Monthly Invoicing Processes - Resolving Invoicing
                and System Errors - Ordering IT Equipment and Maintaining
                Workstations - Maintaining Ecotricity's Data Servers - Improving
                efficiency for the Customer Service Team - Advising the
                Metering, Customer Service, Sales and Reporting Teams -
                Co-ordinating with the external support team to resolve
                technical issues
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Chief Complaints Resolution Manager</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                - Co-ordinating with Utilities Disputes - Responding to client
                complaints and reaching resolutions with customers. - Advising
                Colleagues as to how to effectively resolve issues - Relaying
                Feedback to change makers in Ecotricity.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Customer Support Specialist</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                - Guiding Customers through the sign up process. - Answering
                Email and Phone Queries. - Solving Customers' account problems.
                - Advising Customers with Credit Control Issues
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
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
              <p>
                - Composing and scheduling Social Media updates - Editing the
                Screenies Wordpress Website - Conducting Outreach with Community
                groups - Providing Technical Support - Collating Media Packages
              </p>
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
              <div>Computer Science - Web Development Track</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2017 - July 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Auckland University of Technlogy</h3>
              <div className="subheading mb-3">Bachelor of Communications</div>
              <div>Radio Major</div>
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
                CCNA Level 1
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Device Repair and Maintenance
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
              <i class="fab fa-bitcoin"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-linux"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
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
              Project Management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Client Side Hardware Setup
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Device Repair and Maintenance
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
            Apart from developing my Web Development skils, I enjoy learning
            about History, Political Science and related subjects. In addition,
            I've always had a deep appreciate for Comedy, Satire and
            Fantasy/Science Fiction.
          </p>
          <p>
            As either a Player or a Game Master, I enjoy roleplaying games such
            as Dungeons and Dragons. I've also developed a proficiency for
            painting Miniatures for use in board games.
          </p>
          <p className="mb-0">
            I also enjoy writing in a Variety of styles including Media Reviews,
            Comedy Skits, Radio Reports and Essays. My Articles have been
            included in publications such as Debate and The SpeakEasy.
          </p>
          <p>
            After short detour in Chinese and Russian.Recently, I've returned to
            learning French, J'ai un vocabulaire pratique, mais je développe
            toujours mes compétences d'écoute et de grammaire
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="Contact Me"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
            <form action="https://getform.io/f/7524d987-a89c-4e2a-9d12-d8dfca315754" method="POST">
              <input type="text" name="name">
              <input type="email" name="email">
              <input type="text" name="message">
              <button type="submit">Send</button>
            </form>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
