import React, { useRef } from "react";

export default function About() {
  const workSectionRef = useRef(null);

  const scrollToWorkSection = () => {
    workSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        id="welcome-section"
        className="flex flex-col justify-center items-center w-full h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: 'url("./../images/wolf-howling-to-moon.jpg")' }}
      >
        <h1 className="text-white text-4xl mb-4">Hey! I am Apoorva.</h1>
        <p className="text-3xl font-light italic text-black">an aspiring web developer.</p>
        <h5 id="intro" className="text-white text-xl mt-4">
          I love creating and coding and have been passionate about it since I was a
          wee little kid.
        </h5>
        <button
          onClick={scrollToWorkSection}
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          About Section
        </button>
      </section>

      <section
        id="work"
        ref={workSectionRef}
        className="flex flex-col p-40 bg-[#2b4162] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
        }}
      >
        <h2 className="text-white text-4xl mb-8">A little bit about me..</h2>
        <div
          id="aboutme"
          className="flex items-center justify-center w-3/4 mx-auto mb-16"
        >
        
          <div id="aboutme_p" className="relative text-red-500 flex-1">
            <p>
              I am an ardent and highly focused Software Engineer, trying to
              navigate this dynamic and exciting world of technology. Having an eye
              for creativity, passion to learn new technologies and the drive to
              maintain the best quality of code possible made me want to step into
              the fast-paced, customer-facing and ever changing world of Web
              Development. With a robust background in SQL development and experience
              as a multifaceted engineer at a startup, I am eager to bring
              a unique blend of skills to this dynamic role. Through extensive
              learning and hands-on projects, I have honed my abilities in front-end
              technologies, showcasing my commitment to transitioning seamlessly
              into a front-end role. Able to effectively self-manage during
              independent projects, as well as collaborate as part of a productive
              team.
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-white w-4/5 mx-auto my-16" />

        <div className="row flex flex-col md:flex-row work w-full">
          <div className="three columns header-col w-full md:w-1/3 text-center">
            <h3 className="text-white text-2xl mb-4">
              <span>Work</span>
            </h3>
          </div>
          <div className="nine columns main-col w-full md:w-2/3 text-center">
            <div className="mb-8">
              <h3 className="text-white text-xl mb-2">Drishti Technologies</h3>
              <p className="info text-gray-600 text-lg">
                Software Engineer
                <span> &#8226;</span>
                <em className="date">May 2022 - February 2023</em>
              </p>
              <p className="description text-left text-gray-400">
                Collaborated on the design and redevelopment of dashboards using
                Grafana and Tableau, resulting in improved data visualization and
                analysis.<br /> Implemented automation solutions to streamline report
                creation and analysis using the Redash tool. Conducted research and
                development of tools, frameworks, and programming languages to
                assess their technological feasibility for various projects.<br /> Notably
                contributed to the successful deployment of DAS (Drishti Annotation
                Tool) v2.0. Took on a mentoring role, guiding and collaborating with an intern in the
                development of an in-house project using React.js, aimed at enhancing communication
                skills among employees.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-white text-xl mb-2">First American (India)</h3>
              <p className="info text-gray-600 text-lg">
                Member of Technical Staff
                <span> &#8226;</span>
                <em className="date">July 2019 - July 2021</em>
              </p>
              <p className="description text-left text-gray-400">
                Collaborated within the Salesforce team as an SQL Developer,
                primarily responsible for database development and enhancement in
                support of the project.<br /> Successfully managed and maintained the
                project database, including code creation and deployment. Provided
                vital support to other teams, estimated project delivery timelines,
                and optimized existing code for improved performance.<br /> Demonstrated
                proactive problem-solving by creating proof-of-concepts (POCs) for
                the implementation of new components. Additionally, conducted
                rigorous testing while engaging with onsite clients to ensure
                seamless integration.<br /> Demonstrated adaptability and growth within
                the organization by transitioning into a Salesforce Developer role.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-white text-xl mb-2">InfoTrack Telematics Pvt. Ltd.</h3>
              <p className="info text-gray-600 text-lg">
                Intern
                <span> &#8226;</span>
                <em className="date">January 2019 - February 2019</em>
              </p>
              <p className="description text-left text-gray-400">
                As an intern, I worked on learning Android Application Programming
                and created projects using the concepts. Created two Real Time
                Applications for the company over the tenure of the internship.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-white w-4/5 mx-auto my-16" />
        <div className="row flex flex-col md:flex-row education w-full">
          <div className="three columns header-col w-full md:w-1/3 text-center">
            <h3 className="text-white text-2xl mb-4">
              <span>Education</span>
            </h3>
          </div>
          <div className="nine columns main-col w-full md:w-2/3 text-center">
            <div className="mb-8">
              <h3 className="text-white text-xl mb-2">SJB Institute of Technology</h3>
              <p className="info text-gray-600 text-lg">
                Bachelor of Engineering in Information Science and Engineering
                <span> &#8226;</span>
                <em className="date"> 2015 - July </em>
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-white text-xl mb-2">SBM Jain College, VV Puram</h3>
              <p className="info text-gray-600 text-lg">
                Pre University in Computer Science
                <span> &#8226;</span>
                <em className="date"> 2013 - 2015</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
