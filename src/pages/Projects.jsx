import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
            <div className="sec-head text-center mb-4">
                <h3>Project</h3>
            </div>
            <div className="cards container px-5">
                <div className="row row-cols-auto">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="https://github.com/MeharPatel/Frontend_Project_Artsy" title='View Github Repository' rel='noreferrer' target='_blank'>
                                    <img src="/artsy.png" className="img-fluid rounded-start" alt="Artsy" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Artsy Website</h5>
                                        <p className="card-text">This is a Website built for artist who want to demonstrate or sell their work. This website was built using HTML, CSS, Js.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="https://admissionportal-bewz.onrender.com/" title='Visit Website' rel='noreferrer' target='_blank'>
                                    <img src="../../public/admissionportal.png" className="img-fluid rounded-start" alt="Admission Portal" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Admission Portal Website (Live Project)</h5>
                                        <p className="card-text">This is a Website built for students, students can apply for any of the mentioned courses and admin can give comments and accept or reject the application. This website was built using HTML, CSS, Js and NodeJs. This website is available at https://admissionportal-bewz.onrender.com/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="https://jobex.onrender.com/" title='Visit Website' rel='noreferrer' target='_blank'>
                                    <img src="/jobex.png" className="img-fluid rounded-start" alt="Jobex" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Jobex Website (Live Project)</h5>
                                        <p className="card-text">This is a Website built for employees and recruiters, recruiters can announce jobs and employees can apply for them and recruiters can accept or reject the application. This website was built using HTML, CSS, Js and NodeJs. This website is available at https://jobex.onrender.com/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="https://foodie-frontend-website.netlify.app/" title='Visit Website' rel='noreferrer' target='_blank'>
                                    <img src="/foodie.png" className="img-fluid rounded-start" alt="Foodie" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Foodie Website (Live Project)</h5>
                                        <p className="card-text">This is a frontend website to demonstrate my react knowledge. This website was built using HTML, CSS, Js and ReactJs. This website is available at https://foodie-frontend-website.netlify.app/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="/" title='Visit Website' rel='noreferrer' target='_blank'>
                                    <img src="/portfolio.png" className="img-fluid rounded-start" alt="My Portfolio" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">My Portfolio Website (Live Project)</h5>
                                        <p className="card-text">This is my portfolio website that I made. This website was built using HTML, CSS, Js and ReactJs. This website is available at /</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="https://github.com/MeharPatel/To-Do_List_Js" title='View Github Repository' rel='noreferrer' target='_blank'>
                                    <img src="/foodie.png" className="img-fluid rounded-start" alt="To-Do List" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">To-Do List</h5>
                                        <p className="card-text">This is To-Do List Website that I built using the localstorage in Js. This website was built using HTML, CSS, Js.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <a href="https://github.com/MeharPatel/bootcamp_project" title='View Github Repository' rel='noreferrer' target='_blank'>
                                    <img src="/weather.png" className="img-fluid rounded-start" alt="Weather Foracast Teller" />
                                    </a>  
                                </div>
                                <div className="col-md-6 ms-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Weather Forecast Teller</h5>
                                        <p className="card-text">This is a python project that shows to check the current weather details.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Projects
