import React from 'react'
import "./Gbook.css"

import { NavLink } from 'react-router-dom'

const Gbook = () => {
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
                                <NavLink to="/"  className="text-decoration-none">  
                                    <a class="nav-link cl  fs-5  " aria-current="page" href="#">Home</a></NavLink>
                                </li>

                                <li class="nav-item">
                                <NavLink to="/guestbook"  className="text-decoration-none">   <a class="nav-link active fs-5 ms-5 border-bottom border-4 border-success" aria-current="page" href="#">Guestbook</a></NavLink>
                                  
                                </li>

                                <li class="nav-item">
                                <NavLink to="/project"  className="text-decoration-none">
                                    <a class="nav-link cl fs-5 ms-5" aria-current="page" href="#">Projects</a></NavLink>
                                </li>


                            </ul>
                            <form class="d-flex">
                                <button class="btn bg ms-4" type="submit"><i class="fa-solid fa-moon"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='container mt-5'><hr />
                <h3 className='text-center fw-bold mt-4'>Comming Soon...</h3></div>

        </div>
    )
}

export default Gbook