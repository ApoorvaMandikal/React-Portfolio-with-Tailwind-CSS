import React,{useState} from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
  
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    };
  
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center w-full py-8 bg-cover bg-center bg-green-900"
    >
      <div className="mb-8">
        <h2 className="text-6xl sm:text-4xl text-white">Lets work together...</h2>
        <p className="italic text-white">Hit me up!</p>
      </div>
      <div className="flex flex-wrap flex-row justify-around w-7/12 space-y-4 sm:space-y-0 sm:space-x-4 h-1/2">
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
            className="btn contact-details text-2xl text-white p-2 bg-rose-950 rounded hover:bg-red-700"
          >
            <i className="fas fa-at mr-2"></i> apoorvamandikal@gmail.com
          </a>
          <a
            href="tel:9611279345"
            className="btn contact-details text-2xl text-white p-2 bg-teal-700 rounded hover:bg-green-700"
            alt="Call 555-555-5555"
          >
            <i className="fas fa-mobile-alt mr-2"></i> Call me: +91-9611279345
          </a>
        </div>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-8 p-4 bg-white shadow-md rounded"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
