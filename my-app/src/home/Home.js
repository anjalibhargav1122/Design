import React from 'react'
import "./Home.css"
import s from "./home img/seth.webp"
import { NavLink } from 'react-router-dom'

const Home = () => {
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
                                    <NavLink className="text-decoration-none" to="/">  <a class="nav-link active fs-5  border-bottom border-4 border-success" aria-current="page" href="#">Home</a></NavLink>
                                  
                                </li>

                                <li class="nav-item">

                                    <NavLink  className="text-decoration-none" to="/guestbook"> <a class="nav-link cl fs-5 ms-5" aria-current="page" href="#">Guestbook</a></NavLink>
                                   
                                </li>

                                <li class="nav-item">
                                    <NavLink  className="text-decoration-none" to="/project">
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


            <div className='container fw-bold fo mt-3 border-bottom pb-4'>Home</div>
            <div className='container '>
                <div className='row '>
                    <div className='col-sm-12 col-md-6 col-lg-6 text-center pt-5 '><img className='w-50 mg rounded-circle' src={s} /><h3 className='fw-bold mt-3'>Rahul Seth</h3><p className='text-secondary fs-5 mt-3'>Hey my name is Rahul Seth and I am a Frontend Developer</p>
                        <div className='sl pt-4 pb-5'><i class="fa-brands fa-github fs-2"></i><i class="fa-brands fa-linkedin fs-2 ms-4"></i><i class="fa-solid fa-envelope fs-2 ms-4"></i><i class="fa-brands fa-square-twitter fs-2 ms-4"></i></div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 pt-5 md'><p className='text-secondary fs-4'>Welcome to my portfolio! I'm a versatile frontend developer specializing in crafting engaging and responsive web applications.</p><p className='text-secondary fs-4'>With a strong command of React.js, Tailwind CSS, and TypeScript, along with a solid foundation in sorting algorithms, I'm dedicated to building visually stunning and high-performance user interfaces.</p></div>
                </div>
            </div>

        </div>
    )
}

export default Home