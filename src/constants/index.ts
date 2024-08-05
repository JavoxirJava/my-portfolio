import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  springboot,
  nextjs,
  renaissance,
  messengers,
  messenger2,
  skells,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Spring-boot",
    icon: springboot,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "September 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js",
    companyName: "Next",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "September 2021 - May 2022",
    points: [
      "Develop and maintain web applications using Next.js and related technologies.",
      "Collaborate with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: web,
    iconBg: "#383E56",
    date: "September 2021 - May 2022",
    points: [
      "Develop and maintain web applications using Next.js and related technologies.",
      "Collaborate with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality, user-centric products",
      "Implement responsive design principles to ensure seamless user experiences across various devices and screen sizes.",
      "Ensure cross-browser compatibility for consistent performance and appearance.",
      "Participate in code reviews, offering and incorporating constructive feedback to enhance code quality and team collaboration."
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "September 2021 - May 2022",
    points: [
      "Develop and maintain full-stack web applications using Next.js and related technologies.",
      "Collaborate with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality, user-centric solutions.",
      "Implement responsive design principles and ensure cross-browser compatibility for seamless user experiences.",
      "Participate in code reviews and provide constructive feedback to enhance code quality and foster team collaboration.",
      "Work on both front-end and back-end development tasks, ensuring smooth integration between client-side and server-side components."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Javohir proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Javohir does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Javohir optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  
];

const projects: TProject[] = [
  {
    name: "Renaissance",
    description:
      "A website has been prepared for Tashkent renaissance private university. It is possible to register online from the site and take the test, study according to the test result",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Spring boot",
        color: "blue-text-gradient",
      },
    ],
    image: renaissance,
    sourceCodeLink: "https://github.com/JavoxirJava",
  },
  {
    name: "Messengers",
    description:
      "The cool look for messengers is just for practice. in this case, you can place your messengers in this way, for example, if you put the address of this site on your Instagram page, all your messengers will be able to win",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: messengers,
    sourceCodeLink: "https://github.com/JavoxirJava/messengrs",
  },
  {
    name: "Messengers 2",
    description:
      "The cool look for messengers is just for practice. in this case, you can place your messengers in this way, for example, if you put the address of this site on your Instagram page, all your messengers will be able to win",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: messenger2,
    sourceCodeLink: "https://github.com/JavoxirJava/messengrs2",
  },
  {
    name: "Skills",
    description:
      "in this you can show any technology you know with interest and animation. This is often used on portfolio sites to show off the technology you know in chrome, here's one that you can adapt to your site.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: skells,
    sourceCodeLink: "https://github.com/JavoxirJava/html-level",
  },
];

export { services, technologies, experiences, testimonials, projects };
