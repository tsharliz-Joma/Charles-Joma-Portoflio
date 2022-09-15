import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import { useState, useEffect } from 'react';
import '../App.css'
import headshot from '../images/headshot-removebg-preview.png'
import jsLogo from '../images/js.icon.png'
import jqueryIcon from '../images/jquery-icon .png'
import railsIcon from '../images/rails-icon.webp'
import rubyIcon from '../images/ruby-icon.png'
import reactIcon from '../images/react.icon.jpeg'
import aframeIcon from '../images/aframe-icon.png'
import firebaseIcon from '../images/firebase-icon .png'

import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { GiBoxingGloveSurprise } from 'react-icons/gi'
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs'
import { ImSwitch } from 'react-icons/im'

 


const Main = () => {

    const [show, showNav] = useState(false);

    const showNavBar = () => {
        if(window.scrollY > 100){
            showNav(true)
        } else {
            showNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showNavBar)
        return(
            window.addEventListener('scroll', showNavBar)
        )
    }, [])

    return(
        <div className='main-body'>

            <div className='center-container'>

            <nav className={`nav navbar navbar-expand-lg fixed-top navbar-shrink`} id={`${show && 'Nav'}`}> 
            <div className='text-center w-100 ' >
                    
                </div>

                <div className='collapse navbar-collapse '>  
                    <div className="collapse navbar-collapse" >
                        <div className="navbar-nav text-end nav-anchor-div">
                            <a className="nav-item nav-link active mx-5" href='#PageHome'>Home</a>
                            <a className="nav-item nav-link mx-5" href="#About">About</a>
                            <a className="nav-item nav-link mx-5" href="#">Projects</a>
                            <a className="nav-item nav-link mx-5" href="#">Contact</a>
                        </div></div>
                    </div>
            </nav>

            <header className='header' id="PageHome">
                <div id="Home" className='d-flex h-100 align-items-center'>
                    <div className='container text-center'>
                        <div className='row bg-orange-transparent mx-auto p-5 header-div'>
                            <div className='col text-middle mt-5'>
                                {/* <div className="f-2em">WELCOME!</div> */}
                                <div className='intro'>
                                    <div className=''>
                                        <span className='intro-hello pt-5 pb-5'>HELLO!</span>
                                        <span className='intro-text'>I'm Charles Joma</span>
                                        <span className='d-block'>A Junior Software Engineer</span>
                                    </div>
                                    {/* <span className='intro-text'>I am a Junior Software engineer, Sydney based, South Gippsland raised, and sudanese born!
                                    A new General Assembly Sydney Alumni </span> */}
                                </div> 
                                
                            </div>
                            <div className='col'>
                                <div className='mb-5'>
                                    <img className='headshot' src={ headshot } alt="headshot" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </header>

            <section className='about-me col-wh'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-md-6 col-lg-5 d-flex img-container'>
                            <div  className='img d-flex align-items-center'>    
                                
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 pl-lg-5 py-5' id="About" >
                            <div className='row justify-content-start pb-3'>
                                <div className='about-me-div text-center'>
                                    <h2 className='fw-7-ls-2'>About Me</h2>
                                        A driven, motivated and positive individual, i love to question what is possible and find my
                                        limitations. I am always motivated to learn what i dont know, take on every new challenge with a
                                        positive mindset and love learnin from those around me.    
                                    </div>
                                </div>
                                <div className='row pt-4'>
                                    <div className='col about-me-square text-center'>
                                        <div className='boxing-icon text-center mt-1'><GiBoxingGloveSurprise /></div>
                                        <h4 className='fw-7-ls-2'>Creative Thinking Time</h4>
                                        <p>I want square block her you over on to view the information </p>
                                        <p> For now it can be more lyrics</p>
                                    </div>
                                    <div className='col about-me-square text-center'>
                                        <div className='boxing-icon text-center mt-1'><ImSwitch className='mb-2' /></div>
                                        <h4 className='fw-7-ls-2'>Off Switch</h4>
                                        <p>And the exact same here</p>
                                        <p> And more lyrics here </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='projects '>
                <div className='projects-inner-container container h-100 mt-20'>
                    {/* I might want the container div to be set on the inner one */}
                    <div className='text-center proj-heading '> Projects</div>
                        <div className='text-center mb-5' >While at General Assembly</div>
                        
                        <div className='row '>
                            
                            <div className='col pugilist-express'>
                                
                            </div>
                            
                            <div className='col brain-train'>
                                
                            </div>
                            
                            <div className='row g-0 '>
                                <div className=' col school-knocks'>
                                
                                </div>
                                <div className='col brain-train'>
                    
                                </div>
                                
                                <div className='col school-knocks'>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className='tech-stack'>
                <div className='container pt-4'>
                    <div className="row justify-content-around text-center ">
                        <div className='tech-stack-container  '>
                            <h1 className='skills'>Skills</h1>
                            To be continued   
                        </div>
                        <div className='row stack-icons m-5' >
                            <div className='col'>
                                <img src={jsLogo} alt="Javascript"/>
                            </div>
                            <div className='col icon'>
                                <img src={reactIcon} alt="React" />
                            </div>
                            <div className='col'>
                                <img src={aframeIcon} alt="Aframe" />
                            </div>
                            <div className='col'>
                                <img src={firebaseIcon} alt="Firebase" />
                            </div>
                            <div className='col icon'>
                                <img src={jqueryIcon} alt="Jquery" />
                            </div>
                            <div className='col'>
                                <img src={rubyIcon} alt="Ruby" />
                            </div>
                            <div className='col '>
                                <img src={railsIcon} alt="Rails" />
                            </div>
                        </div>
                        <span>And always learning more</span>
                        <span className='d-block'>so to be continiued...</span>
                    </div>
                </div>
            </section>
            

            <footer className='footer text-center'>
                <div className='f-4em-fw-500'>Contact Me</div>
                <div className='container mt-3' >
                    <div className='row'>
                        <div className='col mt-0'>
                            <ul className='row '>
                                <li className='contact-info'><a href="https://github.com/tsharliz-Joma" target="_blank"><VscGithub/></a></li>
                            </ul>
                            <ul className="row">
                                <li className='contact-info'><a href='https://www.linkedin.com/in/charlesjoma/'><BsLinkedin /></a></li>
                            </ul>
                        </div>
                        <div className='col mt-0'>
                            <ul className="row">
                                <li className='contact-info'><BsFillPhoneVibrateFill color='rgb(255 158 27)' /> : +61458495327</li>
                            </ul>
                            <ul className='contact-info'>
                                <li><AiTwotoneMail color='rgb(255 158 27)' /> : charlesjoma@yahoo.com</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>

            </div>
        </div>
    )
}

export default Main 
