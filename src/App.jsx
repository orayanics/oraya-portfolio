import "./App.css";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <header className="md:w-1/2 mx-auto">
        <nav className="text-stone-600 flex justify-between items-center px-5 mt-4 mx-5 text-lg">
          <img
            src="/public/oraya.jpg"
            alt="Nicole Oraya"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex gap-5">
            <a href="#projects" className="hover:text-stone-800 cursor-pointer">
              <p className="hover:text-stone-800 cursor-pointer">Projects</p>
            </a>
            <a href="#contact" className="hover:text-stone-800 cursor-pointer">
              <p className="hover:text-stone-800 cursor-pointer">Contact</p>
            </a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col justify-center mx-5 mt-[5rem]">
        <section className="text-stone-800 font-medium tracking-normal text-left md:w-1/2 w-3/4 mx-auto my-[5rem]">
          <h1 className="md:text-[3rem] text-[2rem] leading-[1.1]">
            I{"'"}m Nicole Oraya - a web developer. I {""}
            <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
              design and develop
            </span>{" "}
            web apps for seamless user experience.
          </h1>
        </section>

        <section
          className="text-stone-600 my-[3rem] px-5 w-fit mx-auto"
          id="projects"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-auto justify-center gap-4">
            {projects.map((project) => (
              <div
                className="rounded-lg w-auto justify-center"
                key={project.title}
              >
                <div className="group w-auto relative h-auto p-2 bg-[#F4F0E7] rounded-lg">
                  <div className="invisible group-hover:visible absolute backdrop-blur-xs bg-black/70 md:w-100 w-full md:h-100 h-full rounded-lg p-5">
                    <p className="text-xl font-medium text-stone-50">
                      {project.title} ({project.techStack})
                    </p>
                    <p className="text-stone-100 mb-3">{project.role}</p>
                    <ul>
                      {project.description.map((desc, index) => (
                        <li className="text-stone-300 mb-3" key={index}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="lg:invisible visible absolute left-0 right-0 top-2 backdrop-blur-xs bg-black/70 w-auto h-100 rounded-lg p-5 mx-2 overflow-scroll">
                      <p className="text-xl font-medium text-stone-50">
                        {project.title} ({project.techStack})
                      </p>
                      <p className="text-stone-100 mb-3">{project.role}</p>
                      <ul>
                        {project.description.map((desc, index) => (
                          <li
                            className="text-xs md:text-xl text-stone-300 mb-3"
                            key={index}
                          >
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <img
                        loading="lazy"
                        src={project.imgPath}
                        alt={project.title}
                        className="w-100 h-100 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <p className="my-5 w-fit md:w-100 px-5 md:px-6">
                    {project.app}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="w-full h-[1px] bg-stone-200 my-10"></div>
        </section>

        <section
          className="text-stone-800 font-medium tracking-normal text-left md:w-1/2 w-3/4 mx-auto my-[5rem]"
          id="contact"
        >
          <h2 className="md:text-[3rem] text-[2rem] leading-[1.1]">
            Interested in working together?
          </h2>
          <p className="md:text-lg text-base mt-3">
            Contact me at orayanics@gmail.com
          </p>

          <div className="flex gap-5 mt-5">
            <a href="https://linkedin.com/in/nicole-oraya-8b3146261">
              <AiFillLinkedin size={"2em"} />
            </a>
            <a href="https://github.com/orayanics">
              <AiFillGithub size={"2em"} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

const projects = [
  {
    title: "MuzikUp",
    techStack: "Kotlin, Firebase, API",
    role: "Developer",
    description: [
      "Designed the frontend interface using Kotlin.",
      "Implemented real-time authentication and database management using Firebase.",
      "Integrated a third-party API Last.fm for music metadata.",
    ],
    imgPath: "/muzikup.png",
    app: "MuzikUp is android application that allows its users to post reviews and ratings of their favorite songs.",
  },
  {
    title: "MoneyDaddy",
    techStack: "React, Firebase",
    role: "Developer",
    description: [
      "Developed a responsive frontend interface using React and CSS framework Tailwind.",
      "Integrated Firebase for authentication and database management.",
    ],
    imgPath: "/moneydaddy.png",
    app: "MoneyDaddy is a web application that helps users track their expenses and income.",
  },
  {
    title: "PrioriTrack",
    techStack: "Electron, Vite, Express, MySQL",
    role: "Developer",
    description: [
      "Designed and developed MySQL database and backend server logic for authentication and CRUD operations using NodeJS and Express.",
    ],
    imgPath: "/prioritrack.png",
    app: "PrioriTrack is a desktop application developed for Anrylle Property for document tracking and archiving.",
  },
  {
    title: "TalkTherapy",
    techStack: "MERN, WebSocket, WebRTC, AWS EC2",
    role: "Developer",
    description: [
      "Designed and implemented the frontend interface using React and CSS framework Bootstrap to enhance web responsiveness and user experience.",
      "Integrated and implemented WebRTC for video conferencing and WebSocket for real-time notifications and messaging.",
      "Implemented backend functionality such as CRON job, CRUD operations and email notifications.",
    ],
    imgPath: "/talktherapy.png",
    app: "TalkTherapy is a mobile-responsive web application that provides a speech therapy telehealth service for its patients and an appointment scheduling system for its therapists.",
  },
];
