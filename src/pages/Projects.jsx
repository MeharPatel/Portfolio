import React from 'react'
import { Link } from 'react-router-dom'
import { Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div>
      <motion.div className="text-center mt-6 lg:mx-24 md:mx-20">
        
        <div className="grid gap-4 md:grid-cols-1 items-center">
          <div className=''>
            <div className="lg:py-12 lg:flex lg:justify-center">
              <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <Link
                  className="lg:w-1/2"
                  to="https://jobex.onrender.com/"
                  title="Visit Website"
                  target="_blank"
                >
                  <div className="project_img1 h-64 bg-cover lg:rounded-lg lg:h-full"></div>
                </Link>
                <div className="project-text py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    <span className="project-title">Jobex</span> Website{" "}
                  </h2>
                  <p className="mt-4">
                    This is a Website built for employees and recruiters,
                    recruiters can announce jobs and employees can apply for
                    them and recruiters can accept or reject the application.
                    This website was built using HTML, CSS, Js and NodeJs. This
                    website is available at https://jobex.onrender.com/.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="https://jobex.onrender.com/"
                      className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100"
                      target="_blank"
                    >
                      <span className="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500"></span>

                      <p
                        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200"
                      >
                        Visit
                      </p>

                      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Now!
                      </span>

                      <span className="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:py-12 lg:flex lg:justify-center">
              <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <Link
                  className="lg:w-1/2"
                  to="https://admissionportal-bewz.onrender.com/"
                  title="Visit Website"
                  target="_blank"
                >
                  <div className="project_img2 h-64 bg-cover lg:rounded-lg lg:h-full"></div>
                </Link>
                <div className="project-text py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    <span className="project-title">Admission Portal</span>{" "}
                    Website{" "}
                  </h2>
                  <p className="mt-4">
                    This is a Website built for students, students can apply for
                    any of the mentioned courses and admin can give comments and
                    accept or reject the application. This website was built
                    using HTML, CSS, Js and NodeJs. This website is available at
                    https://admissionportal-bewz.onrender.com/
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="https://admissionportal-bewz.onrender.com/"
                      className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100"
                      target="_blank"
                    >
                      <span className="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500"></span>

                      <p
                        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200"
                      >
                        Visit
                      </p>

                      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Now!
                      </span>

                      <span className="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:py-12 lg:flex lg:justify-center">
              <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <Link
                  className="lg:w-1/2"
                  to="https://foodie-frontend-website.netlify.app/"
                  title="Visit Website"
                  target="_blank"
                >
                  <div className="project_img3 h-64 bg-cover lg:rounded-lg lg:h-full"></div>
                </Link>
                <div className="project-text py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    <span className="project-title">Foodie</span> Website{" "}
                  </h2>
                  <p className="mt-4">
                    This is a frontend website to demonstrate my react
                    knowledge. This website was built using HTML, CSS, Js and
                    ReactJs. This website is available at
                    https://foodie-frontend-website.netlify.app/
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="https://foodie-frontend-website.netlify.app/"
                      className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100"
                      target="_blank"
                    >
                      <span className="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500"></span>

                      <p
                        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200"
                      >
                        Visit
                      </p>

                      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Now!
                      </span>

                      <span className="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:py-12 lg:flex lg:justify-center">
              <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <Link
                  className="lg:w-1/2"
                  to="https://github.com/MeharPatel2512/To-Do_List_MERN"
                  title="Visit Website"
                  target="_blank"
                >
                  <div className="project_img4 h-64 bg-cover lg:rounded-lg lg:h-full"></div>
                </Link>
                <div className="project-text py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    <span className="project-title">To-Do</span> List{" "}
                  </h2>
                  <p className="mt-4">
                    This is a personal usage To-Do List Website that I built
                    using the NodeJs and ReactJs.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="https://github.com/MeharPatel2512/To-Do_List_MERN"
                      className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100"
                      target="_blank"
                    >
                      <span className="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500"></span>

                      <p
                        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200"
                      >
                        Visit
                      </p>

                      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Repo!
                      </span>

                      <span className="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:py-12 lg:flex lg:justify-center">
              <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <Link
                  className="lg:w-1/2"
                  to="https://jobex.onrender.com/"
                  title="Visit Website"
                  target="_blank"
                >
                  <div className="project_img5 h-64 bg-cover lg:rounded-lg lg:h-full"></div>
                </Link>
                <div className="project-text py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    <span className="project-title">Portfolio</span> Website{" "}
                  </h2>
                  <p className="mt-4">
                    Ha! This Website was also created by me! This is my
                    portfolio website that I made. This website was built using
                    ReactJs. This website is available at link{" "}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      to=""
                      className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100"
                      target="_blank"
                    >
                      <span className="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500"></span>

                      <p
                        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200"
                      >
                        Visit
                      </p>

                      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Now!
                      </span>

                      <span className="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:py-12 lg:flex lg:justify-center">
              <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <Link
                  className="lg:w-1/2"
                  to="https://github.com/MeharPatel/Frontend_Project_Artsy"
                  title="Visit Website"
                  target="_blank"
                >
                  <div className="project_img6 h-64 bg-cover lg:rounded-lg lg:h-full"></div>
                </Link>
                <div className="project-text py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    <span className="project-title">Artsy</span> Website{" "}
                  </h2>
                  <p className="mt-4">
                    This is a Website built for artist who want to demonstrate
                    or sell their work. This website was built using HTML, CSS,
                    Js.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="https://github.com/MeharPatel/Frontend_Project_Artsy"
                      className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100"
                      target="_blank"
                    >
                      <span className="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500"></span>

                      <p
                        className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200"
                      >
                        Visit
                      </p>

                      <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Repo!
                      </span>

                      <span className="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="text-center mt-10">
        {" "}
        {/* variants={itemVariants}> */}
        <button
          asChild
          variant="ghost"
          size="lg"
          className="group gap-2 hover:bg-white transition-all"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Github className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
            <span className="relative">
              View More on GitHub
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </a>
        </button>
      </motion.div>
    </div>
  );
}

export default Projects
