import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center w-full h-screen py-8 bg-cover bg-center bg-gray-900"
    >
      <div className="mb-8">
        <h2 className="text-6xl sm:text-4xl text-white">Lets work together...</h2>
        <p className="italic text-white">Hit me up!</p>
      </div>
      <div className="flex flex-wrap flex-col justify-around w-7/12 space-y-4 sm:space-y-0 sm:space-x-4 h-1/2">
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.linkedin.com/in/apoorva-mandikal/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details text-2xl text-white p-2 bg-blue-700 rounded hover:bg-blue-800"
          >
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a
            id="profile-link"
            href="https://github.com/ApoorvaMandikal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details text-2xl text-white p-2 bg-black rounded hover:bg-gray-800"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
          <a
            href="https://twitter.com/apoorva_g_m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details text-2xl text-white p-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            <i className="fab fa-twitter mr-2"></i> X (formerly twitter)
          </a>
          <a
            href="https://www.facebook.com/apoorva.girish.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details text-2xl text-white p-2 bg-blue-900 rounded hover:bg-blue-950"
          >
            <i className="fab fa-facebook-square mr-2"></i> Facebook
          </a>
        </div>
        <div className="flex flex-col space-y-4 justify-center text-center">
          <a
            href="mailto:apoorvamandikal@gmail.com"
            className="btn contact-details text-2xl text-white p-2 bg-red-600 rounded hover:bg-red-700"
          >
            <i className="fas fa-at mr-2"></i> apoorvamandikal@gmail.com
          </a>
          <a
            href="tel:9611279345"
            className="btn contact-details text-2xl text-white p-2 bg-green-600 rounded hover:bg-green-700"
            alt="Call 555-555-5555"
          >
            <i className="fas fa-mobile-alt mr-2"></i> Call me: +91-9611279345
          </a>
        </div>
      </div>
    </section>
  );
}

