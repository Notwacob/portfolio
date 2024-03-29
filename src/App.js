import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import CodingChallenges from "./pages/codingChallenges";
import { NotFoundPage } from './components/NotFoundPage';

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <HeroArea />
                <h1 id="about" className="title">
                  About me
                </h1>
                <p>
                  Hi, I recently graduated from Virginia Wesleyan University
                  with a major in Computer Science and a minor in
                  Communications. Throughout my time at university, I actively
                  engaged in various extracurricular activities, enhancing my
                  overall college experience.
                </p>
                <br></br>
                <p>
                  One of my notable involvements was serving on the executive
                  board of Movie Crew. My role in Movie Crew allowed 
                  me to coordinate and host movie
                  events, bringing the Virginia Wesleyan community together for
                  entertaining experiences. This experience as part of the
                  executive board enhanced my leadership and teamwork skills,
                  which will prove invaluable as I progress in my career.
                </p>
                <br></br>
                <p>
                  As I embark on this new chapter after graduation, I am filled
                  with excitement about the opportunities that await me. I am
                  eager to apply the skills and knowledge I have gained to
                  pursue a career in the tech industry and make a meaningful
                  impact through my work.
                </p>
                <br></br>
                <p>
                  <a className="resume" href="/assets/Resume.docx">
                    <i className="fa fa-download" aria-hidden="true"></i> Resume
                  </a>
                </p>
                <br></br>
                <p className="description">My experience and education</p>
                <About />
                <h1 id="services" className="title">
                  My services
                </h1>
                <p className="description">How can I help you</p>
                <Services />
                <h1 id="projects" className="title">
                  Projects
                </h1>
                <p className="description">Highlights of my best work</p>
                <Projects />
                <h1 id="activities" className="title">
                  Activities
                </h1>
                <p className="description">
                  My interests and volunteering activities
                </p>
                <Activities />
                <h1 id="contact" className="title">
                  Let's connect
                </h1>
                <p className="description">I'm available to work!</p>
                <Contacts />
                <Footer />
              </>
            }
          />
          <Route path="/codingChallenges" element={<CodingChallenges />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}
