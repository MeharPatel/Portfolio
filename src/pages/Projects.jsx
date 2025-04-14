import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div id='projects'>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="project_card bg-white lg:mx-8 lg:flex lg:shadow-lg rounded-lg">
                    <Link to='https://jobex.onrender.com/' className="lg:w-1/2" title='Visit Website' target="_blank">
                        <div className="project_img1 lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                        </div>
                    </Link>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl font-bold">
                            <span className="text-indigo-600">Jobex </span> Website
                        </h2>
                        <p className="mt-4">
                        This is a Website built for employees and recruiters, recruiters can announce jobs and employees can apply for them and recruiters can accept or reject the application. 
                        This website was built using HTML, CSS, Js and NodeJs. 
                        This website is available at https://jobex.onrender.com/.
                        </p>
                        <div className="mt-8">
                            <Link to='https://jobex.onrender.com/' class="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank'>
                                <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
                                </span>

                                <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200">Visit</p>

                                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Now!</span>

                                <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="project_card bg-white lg:mx-8 lg:flex lg:shadow-lg rounded-lg">
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl font-bold">
                            <span className="text-indigo-600">Admission Portal </span> Website 
                        </h2>
                        <p className="mt-4">
                        This is a Website built for students, students can apply for any of the mentioned courses and admin can give comments and accept or reject the application. This website was built using HTML, CSS, Js and NodeJs. This website is available at https://admissionportal-bewz.onrender.com/
                        </p>
                        <div className="mt-8">
                            <Link to='https://admissionportal-bewz.onrender.com/' class="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank'>
                                <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
                                </span>

                                <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200">Visit</p>

                                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Now!</span>

                                <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
                                </span>
                            </Link>
                        </div>
                    </div>
                    <Link to='https://admissionportal-bewz.onrender.com/' className="lg:w-1/2" title='Visit Website' target="_blank">
                        <div className="project_img2 lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                        </div>
                    </Link>
                </div>
            </div>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="project_card bg-white lg:mx-8 lg:flex lg:shadow-lg rounded-lg">
                    <Link to='https://foodie-frontend-website.netlify.app/' className="lg:w-1/2" title='Visit Website' target="_blank">
                        <div className="project_img3 lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                        </div>
                    </Link>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl font-bold">
                            <span className="text-indigo-600">Foodie </span> Website
                        </h2>
                        <p className="mt-4">
                            This is a frontend website to demonstrate my react knowledge. This website was built using HTML, CSS, Js and ReactJs. This website is available at https://foodie-frontend-website.netlify.app/
                            <br />
                            <br />
                            <br />
                        </p>
                        <div className="mt-8">
                            <Link to='https://foodie-frontend-website.netlify.app/' class="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank'>
                                <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
                                </span>

                                <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200">Visit</p>

                                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Now!</span>

                                <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="project_card bg-white lg:mx-8 lg:flex lg:shadow-lg rounded-lg">
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl font-bold">
                            <span className="text-indigo-600">To-Do </span> List </h2>
                        <p className="mt-4">
                            This is a personal usage To-Do List Website that I built using the NodeJs and ReactJs.
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                        <div className="mt-8">
                            <Link to='https://github.com/MeharPatel2512/To-Do_List_MERN' class="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank'>
                                <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
                                </span>

                                <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200">Visit</p>

                                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Repo!</span>

                                <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
                                </span>
                            </Link>
                        </div>
                    </div>
                    <Link to='https://github.com/MeharPatel2512/To-Do_List_MERN' className="lg:w-1/2" title='View Github Repo' target="_blank">
                        <div className="project_img4 lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                        </div>
                    </Link>
                </div>
            </div>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="project_card bg-white lg:mx-8 lg:flex lg:shadow-lg rounded-lg">
                    <Link to='link' className="lg:w-1/2" title='Visit Website' target="_blank">
                        <div className="project_img5 lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                        </div>
                    </Link>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl font-bold">
                            <span className="text-indigo-600">My Portfolio </span> Website
                        </h2>
                        <p className="mt-4">
                            Ha! This Website was also created by me!
                            This is my portfolio website that I made. This website was built using ReactJs. This website is available at link
                            <br />
                            <br />
                        </p>
                        <div className="mt-8">
                            <Link to='' class="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank'>
                                <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
                                </span>

                                <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200">Visit</p>

                                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Now!</span>

                                <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="project_card bg-white lg:mx-8 lg:flex lg:shadow-lg rounded-lg">
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl font-bold">
                            <span className="text-indigo-600">Artsy </span> Website </h2>
                        <p className="mt-4">
                            This is a Website built for artist who want to demonstrate or sell their work. This website was buil    t using HTML, CSS, Js.
                            <br />
                            <br />
                            <br />
                        </p>
                        <div className="mt-8">
                            <Link to='https://github.com/MeharPatel/Frontend_Project_Artsy' class="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank'>
                                <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
                                </span>

                                <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                                duration-200">Visit</p>

                                <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Repo!</span>

                                <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
                                </span>
                            </Link>
                        </div>
                    </div>
                    <Link to='https://github.com/MeharPatel/Frontend_Project_Artsy' className="lg:w-1/2" title='View Github Repo' target="_blank">
                        <div className="project_img6 lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                        </div>
                    </Link>
                </div>
            </div>

        </div>
  )
}

export default Projects
