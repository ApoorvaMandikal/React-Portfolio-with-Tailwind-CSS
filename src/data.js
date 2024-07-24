import twitter from "./images/twitter.png"
import interior from "./images/interior.jpg"
import nasa from "./images/nasa-logo.jpg"
import ipl from "./images/ipl.jpg"
import har from "./images/HAR.jpg"
import spacex from "./images/spacex.jpg"

export const projects = [
  {
    title: "Twitter Clone",
    subtitle: "React, Firebase, HTML & CSS",
    description:
      "A clone of Twitter built using the MERN stack. It includes features such as real-time notifications and user authentication.",
    image: twitter, // Adjust the path as needed
    link: "https://master--twitterclone-tweeter.netlify.app/",
  },
  {
    title: "Interior Decor Website",
    subtitle: "React, TailwindCSS",
    description:
      "A stylish interior decor website showcasing various decoration ideas and trends.",
    image: interior, // Adjust the path as needed
    link: "https://styg-interior-decor.netlify.app/",
  },
  {
    title: "Astronomy Picture of the Day",
    subtitle: "React and NASA API",
    description:
      "A web application that displays the Astronomy Picture of the Day using the NASA API.",
    image: nasa, // Adjust the path as needed
    link: "https://github.com/ApoorvaMandikal/NASA_APOD",
  },
  {
    title: "SpaceX API Project",
    subtitle: "React and SpaceX API",
    description:
      "A project showcasing SpaceX data using the SpaceX API. Includes details on rockets, launches, and more.",
    image: spacex, // Adjust the path as needed
    link: "https://github.com/ApoorvaMandikal/project_SpaceX",
  },
  {
    title: "Human Activity Recognition",
    subtitle: "Python and Machine Learning",
    description:
      "A machine learning project for recognizing human activities using sensor data.",
    image: har, // Adjust the path as needed
    link: "https://github.com/ApoorvaMandikal/human-activity-recognition",
  },
  {
    title: "IPL Dataset",
    subtitle: "Data Analysis",
    description:
      "An analysis project focusing on the Indian Premier League (IPL) dataset. Includes data visualizations and insights.",
    image: ipl, // Adjust the path as needed
    link: "https://github.com/ApoorvaMandikal/ipl-dataset",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  { name: "React.js", level: "80%" },
    { name: "Javascript", level: "90%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "SQL Server, PostGreSQL", level: "80%" },
    { name: "Node.js", level: "70%" },
    { name: "Git", level: "60%" },
    { name: "Python", level: "40%" },
  ];
