import React from 'react'
import "./Project.css"
import img from "./project img/tr.webp"
import img1 from "./project img/wt.webp"
import img2 from "./project img/uy.webp"

import { NavLink } from 'react-router-dom'

const Project = () => {
    return (
        <div>


            <div className='container pt-2'>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <div class="container-fluid">
                        <a class="navbar-brand  fs-2" href="#">Rahul <span className='sl'>Seth</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <NavLink to="/"  className="text-decoration-none">    <a class="nav-link cl  fs-5  " aria-current="page" href="#">Home</a></NavLink>
                                  
                                </li>

                                <li class="nav-item">
                                    
                                <NavLink to="/guestbook"  className="text-decoration-none">   
                                    <a class="nav-link cl  fs-5 ms-5" aria-current="page" href="#">Guestbook</a></NavLink>
                                </li>

                                <li class="nav-item">
                                <NavLink to="/project"  className="text-decoration-none">
                                    <a class="nav-link active  border-bottom border-4 border-success fs-5 ms-5" aria-current="page" href="#">Projects</a></NavLink>
                                </li>


                            </ul>
                            <form class="d-flex">
                                <button class="btn bg ms-4" type="submit"><i class="fa-solid fa-moon"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>


            <div className='container fw-bold fo mt-3 border-bottom pb-4'>All Projects</div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4'><div className='card border-0'><div className='card-header bv' style={{ backgroundImage: `url(${img})`, }}></div>
                        <div className='card-body pb-5'><h5 className='mt-3'>Next JS and tailwind Projec</h5><p className='text-secondary'>Next JS and tailwind Project Next JS and tailwind Project</p>
                            <a href='#' className='text-decoration-none sl'>Learn More!
                                →</a>
                        </div>
                    </div></div>
                    <div className='col-sm-12 col-md-4 col-lg-4'><div className='card border-0'><div className='card-header bv' style={{ backgroundImage: `url(${img1})`, }}></div>
                        <div className='card-body pb-5'><h5 className='mt-3'>Responsive Next JS Dashboard</h5><p className='text-secondary'>next chart library is being used</p>
                            <a href='#' className='text-decoration-none sl'>Learn More!
                                →</a>
                        </div>
                    </div></div>
                    <div className='col-sm-12 col-md-4 col-lg-4'><div className='card border-0'><div className='card-header bv' style={{ backgroundImage: `url(${img2})`, }}></div>
                        <div className='card-body pb-5'><h5 className='mt-3'>Portfolio website nextjs</h5><p className='text-secondary'>I have created a cool portfolio with nextjs and sanity.io. Its fast and cool so you also create one</p>
                            <a href='#' className='text-decoration-none sl'>Learn More!
                                →</a>
                        </div>
                    </div></div>
                </div>
            </div>

        </div>
    )
}

export default Project