import React from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <nav className='border-b-4 border-green-700 text-center fixed top-0 w-full bg-green-600 font-bold text-lg text-white'>
    //   <ul>
    //     <li className='inline-block pt-4 pb-4'>
    //       <Link to='/' className='pl-6 pr-8'>
    //         Home
    //       </Link>
    //     </li>
    //     <li className='inline-block pt-4 pb-4'>
    //       <Link to='/about' className='pl-6 pr-8'>
    //         About
    //       </Link>
    //     </li>
    //     <li className='inline-block pt-4 pb-4'>
    //       <Link to='/articles-list' className='pl-6 pr-8'>
    //         Question and Answer
    //       </Link>
    //     </li>
    //     {/* <li className='inline-block pt-4 pb-4'>
    //       <Link to='/addArticles' className='pl-6 pr-8'>
    //         Add Blog
    //       </Link>
    //     </li> */}
    //     <li className='inline-block pt-4 pb-4'>
    //     <a className='pl-6 pr-8' href="https://flamboyant-turing-8417b8.netlify.app/">Notes</a>
    //     </li>
    //     <li className='inline-block pt-4 pb-4'>
    //     <a className='pl-6 pr-8' href="http://localhost:5000/indexed">Experience/Achivement</a>
    //     </li>
    //   </ul>
    // </nav>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light pl-20">
        
{/*           
        <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Alfy</a> -->

        <!-- Image Logo --> */}
        <button class="navbar-brand logo-image">InFlux</button> 

        <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="/articles-list">Question and Answer</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="https://flamboyant-turing-8417b8.netlify.app/">Notes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="http://localhost:5000/indexed">Achivements</a>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item page-scroll" href="article.html">Article Details</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                    </div>
                </li> */}
            </ul>
            {/* <span class="nav-item">
                <a class="btn-solid-sm page-scroll" href="index.html">Free trial</a>
            </span> */}
        </div>
</nav>
  );
};

export default NavBar;