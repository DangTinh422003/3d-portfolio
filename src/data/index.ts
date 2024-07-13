import { v4 } from "uuid";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const EXPERIENCES = [
  {
    id: v4(),
    img: "/exp1.svg",
    title: "Technical Mentor",
    company: "Icon IT Club",
    description:
      "Building and developing an IT student community at Ton Duc Thang University",
  },
  {
    id: v4(),
    img: "/exp2.svg",
    title: "Web Technical Member",
    company: "Code MeLy",
    description:
      "Developing web applications and building the IT student community in Vietnam",
  },
  {
    id: v4(),
    img: "/exp3.svg",
    title: "Internship Fullstack Developer",
    company: "Alta Software",
    description:
      "Learning experiences and development processes for building applications and websites according to customer requirements.",
  },
  {
    id: v4(),
    img: "/exp4.svg",
    title: "Web Developer",
    company: "The Binary Holdings",
    description:
      "Developing web3 applications and blockchain-related applications.",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "col-span-5 lg:col-span-3 lg:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName:
      "text-center md:text-left md:justify-end text-xl md:text-3xl w-full max-w-96 flex-1 flex items-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "col-span-5 lg:col-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center text-center text-xl md:text-3xl max-w-1/2",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "col-span-5 lg:col-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center text-3xl md:text-4xl",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "col-span-5 lg:col-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-2xl",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Web2, Web3 Application.",
    description: "The Inside Scoop",
    className: "col-span-5 lg:col-span-3 lg:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-56 h-32 md:h-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center text-2xl md:text-3xl max-w-96 flex flex-row items-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "col-span-5 lg:col-span-2",
    imgClassName: "",
    titleClassName:
      "justify-center w-full h-full text-center text-xl md:text-3xl",
    img: "",
    spareImg: "",
  },
];

export const PROJECTS = [
  {
    id: v4(),
    img: "/projects/1.png",
    title: "portfolio",
    desc: "Project Description Of Personal Information, experiences And Jobs During The Time As A Student, Including Information About Other Personal Projects.",
    created: "Apr 19, 2023",
    role: "Frontend Developer",
    techs: [
      "/techs/nextjs.png",
      "/techs/reactjs.png",
      "/techs/tailwind.png",
      "/techs/typescript.png",
    ],
    demo: "https://cdt-portfolio.id.vn",
    src: "https://github.com/DangTinh422003/portfolio_v2",
  },
  {
    id: v4(),
    img: "/projects/2.png",
    title: "Movix",
    desc: "A small website built on open APIs for the purpose of introducing and searching for movies.",
    created: "Apr 19, 2023",
    role: "Frontend Developer",
    techs: [
      "/techs/bootstrap.png",
      "/techs/sass.png",
      "/techs/reactjs.png",
      "/techs/typescript.png",
    ],
    demo: "https://movix-six-ashy.vercel.app",
    src: "https://github.com/dangtinh422003/movix",
  },
  {
    id: v4(),
    img: "/projects/3.png",
    title: "Hotel Booking",
    desc: "A project that allows users to search, register, and book hotel rooms.",
    created: "Apr 19, 2023",
    role: "Frontend Developer",
    techs: [
      "/techs/nodejs.png",
      "/techs/html.png",
      "/techs/css.png",
      "/techs/axios.png",
      "/techs/typescript.png",
    ],
    demo: "",
    src: "https://github.com/DangTinh422003/Booking-hotel",
  },
  {
    id: v4(),
    img: "/projects/4.png",
    title: "React Chat App",
    desc: "A website using The Socket.Io Library And The Expressjs Framework, Along With The Handlebars View Engine, To Build A Real-Time Chat Application.",
    created: "Apr 19, 2023",
    role: "Frontend Developer",
    techs: [
      "/techs/html.png",
      "/techs/css.png",
      "/techs/js.png",
      "/techs/nodejs.png",
    ],
    demo: "",
    src: "https://github.com/dangtinh422003/chat-app-socket.io",
  },
  {
    id: v4(),
    img: "/projects/5.png",
    title: "League Of Legends",
    desc: "A website that introduces a famous game called League of Legends, built with ReactJs and the ViteJs tool.",
    created: "Mar 25, 2024",
    role: "Frontend Developer",
    techs: [
      "/techs/nextjs.png",
      "/techs/reactjs.png",
      "/techs/css.png",
      "/techs/typescript.png",
      "/techs/sass.png",
    ],
    demo: "https://games-landing-page.vercel.app",
    src: "https://github.com/DangTinh422003/games-landing-page",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
