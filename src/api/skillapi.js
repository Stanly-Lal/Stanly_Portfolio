import html from "../images/HTML.png";
import CSS_image from "../images/CSS_img.png";
import JavaScript from "../images/JavaScript.png";
import Tailwind from "../images/Tailwind.png";
import React_img from "../images/React_img.png";
import nextjs from "../images/nextjs.webp";
import Git from "../images/Git.png";
import github from "../images/github.png";
import Firebase from "../images/Firebase.png";
import cicd from "../images/cicd.webp";

const skills = [
  {
    id: 1,
    skillImage: `${html}`,
    skillTitle: "HTML",
    skillDescription:
      "Proficient in building structured, semantic web pages using HTML5 for clean, accessible markup, ensuring SEO-friendliness with proper tags and attributes.",
  },
  {
    id: 2,
    skillImage: `${CSS_image}`,
    skillTitle: "CSS",
    skillDescription:
      "Skilled in responsive design with CSS3, utilizing Flexbox, Grid, and media queries for flexible layouts, and ensuring cross-browser compatibility for consistent styling across devices.",
  },
  {
    id: 3,
    skillImage: `${JavaScript}`,
    skillTitle: "JavaScript",
    skillDescription:
      "Strong understanding of JavaScript to create dynamic and interactive web applications. Experience with DOM manipulation, ES6+ features, asynchronous programming (Promises, async/await), and event handling.",
  },
  {
    id: 4,
    skillImage: `${Tailwind}`,
    skillTitle: "Tailwind CSS",
    skillDescription:
      "Skilled in using the utility-first Tailwind CSS framework to design visually appealing and highly customizable layouts, enabling fast and efficient front-end development with minimal custom CSS.",
  },
  {
    id: 5,
    skillImage: `${React_img}`,
    skillTitle: "React.js",
    skillDescription:
      "Expertise in building scalable, modular, and state-driven user interfaces with React.js. Proficient in using functional components, hooks (useState, useEffect), and React Router for efficient routing and seamless user experiences.",
  },
  {
    id: 6,
    skillImage: `${nextjs}`,
    skillTitle: "NEXT.js",
    skillDescription:
      "Experience in building server-side rendered (SSR) and statically generated web applications using Next.js, optimizing for both performance and SEO, while leveraging its powerful file-based routing and API routes.",
  },
  {
    id: 7,
    skillImage: `${Git}`,
    skillTitle: "Git",
    skillDescription:
      "Proficient in version control using Git, managing project histories with branching, merging, and commit strategies to maintain a clean codebase.",
  },
  {
    id: 8,
    skillImage: `${github}`,
    skillTitle: "Github",
    skillDescription:
      " Experienced in collaborating on projects via GitHub, utilizing pull requests and issue tracking to ensure efficient project management and team workflows.",
  },
  // {
  //   id: 9,
  //   skillImage: `${Firebase}`,
  //   skillTitle: "Firebase",
  //   skillDescription:
  //     "Familiar with Firebase for backend services, including real-time databases, user authentication, cloud storage, and hosting, enabling rapid prototyping and scalable production applications.",
  // },
  // {
  //   id: 10,
  //   skillImage: `${cicd}`,
  //   skillTitle: "CI/CD Pipeline",
  //   skillDescription:
  //     "Hands-on experience in setting up and maintaining Continuous Integration/Continuous Deployment (CI/CD) pipelines, automating testing, building, and deployment processes to ensure streamlined workflows and high-quality releases.",
  // },
];

export default skills;
