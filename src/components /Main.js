import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import { useState, useEffect } from 'react';
import '../App.css'
import headshot from '../images/headshot-removebg-preview.png'
import jsLogo from '../images/js-icon.png'
import jqueryIcon from '../images/jquery-icon.png'
import nodeIcon from '../images/node-icon.png'
import railsIcon from '../images/rails-icon.webp'
import rubyIcon from '../images/ruby-icon.png'
import reactIcon from '../images/react-icon.png'
import aframeIcon from '../images/aframe-icon.png'
import firebaseIcon from '../images/firebase-icon.png'
import bootstrapIcon from '../images/bootstrap-icon.png'
import VueIcon from '../images/vue-icon.png'

import sohnBg from '../images/schoolofhardknocks.png'
import bTrainBg from '../images/brain-train.png'
import pugExpBg from '../images/pugilist-express.png'
import TtBg from '../images/ticTactoe.png'
import comingsoon from '../images/comingsoon.jpeg'

import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { GiBoxingGloveSurprise } from 'react-icons/gi'
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs'
import { ImSwitch } from 'react-icons/im'

 


const Main = () => {

    const [ isHover, setIsHovering ] = useState(false);
    const [ isHoverBt, setBtInfo ] = useState(false);
    const [ isHoverPx, setPxinfo ] = useState(false);
    const [ isHoverTt, setTtInfo ] = useState(false);
    const [ isHoverPg, setPgInfo ] = useState(false);


     //==============================================================

    const handleMouseEnter = () => {
        setIsHovering(true);
    }
    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const [ schoolOfHardKnocks, showSOHN ] = useState(
        <div className={`col school-knocks`} > 
                <img src={sohnBg} width="100%" height="100%" />
                
        </div>
    );

    //==============================================================

    const hoverPgLang = () => {
        setPgInfo(true);
    }

    const hidePgLang = () => {
        setPgInfo(false);
    }

    const [ pgLang, showPgLang ] = useState(
        <div className={`col pgLang`} >
            <img src={comingsoon} width={"100%"} height={"100%"} />
        </div>

    )

    //==============================================================

    const showTt = () => {
        setTtInfo(true)
    };

    const hideTt = () => {
        setTtInfo(false)
    }

    const [ TicTacToe, showTicTacToe ] = useState(
        <div className={'col ticTacToe'}>
            <img src={TtBg} width={'100%'} height={'100%' } />
        </div>
    )



    //==============================================================

    const showBtInfo = (e) => {
       setBtInfo(true)
    }
    const hideBtInfo = (e) => {
        setBtInfo(false)
    }

    const [brainTrain, showBrainTrain] = useState(
        <div className={'col brain-train'} >
            <img src={bTrainBg} width="100%" height="100%" />    
        </div>
    )

     //==============================================================


    const [pugilistExpress, showPugilistExpress ] = useState(
        <div className='col pugilist-express'>
            <img src={pugExpBg} width={'100%'} height={"100%"} />
        </div>
    );

    const showPxInfo = (e) => {
        setPxinfo(true);
    }

    const hidePxInfo = (e) => {
        setPxinfo(false);
    }

    //===============================================================

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
                <div className='text-center w-100' ></div>
            
            <div className='collapse navbar-collapse '>  
                <div className="collapse navbar-collapse" >
                    <div className="navbar-nav text-end nav-anchor-div">
                        <a className="nav-item nav-link mx-5" href='#PageHome'>Home</a>
                        <a className="nav-item nav-link mx-5" href="#About">About</a>
                        <a className="nav-item nav-link mx-5" href="#Projects">Projects</a>
                        <a className="nav-item nav-link mx-5" href="#Contact">Contact</a>
                    </div></div>
                </div>
            </nav>

            <header className='header' id="PageHome">
                <div id="Home" className='d-flex h-100 align-items-center'>
                    <div className='container text-center'>
                        <div className='row bg-orange-transparent mx-auto p-5 header-div'>
                            <div className='col text-middle mt-5'>
                                
                                <div className='intro'>
                                    <div className=''>
                                        <span className='intro-hello pt-5 pb-5'>HELLO!</span>
                                        <span className='intro-text'>I'm Charles Joma</span>
                                        <span className='d-block'>A Junior Software Engineer</span>
                                    </div>
                                    
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

            <section className='about-me bg-org col-wh'>
                <div className='container'>
                    <div className='row d-flex bg-wh'>
                        <div className='col-md-6 col-lg-5 d-flex img-container'>
                            <div  className='img d-flex align-items-center'>    
                                
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 pl-lg-5 py-5 ' id="About" >
                            <div className='row justify-content-start pb-3'>
                                <div className='about-me-div text-center'>
                                    <h2 className='fw-7-ls-2'>About Me</h2>
                                        A driven, motivated and positive individual, i love to question limitations and strive to achieve more than expected. I am always motivated to learn what i dont know and grow my knowledge and I am also a character who takes on every new challenge with a
                                        positive mindset and ambition. i take pride in my ability to uplift those around me.    
                                    </div>
                                </div>
                                <div className='row pt-1'>
                                    <div className='col about-me-square text-center'>
                                        <div className='boxing-icon text-center mt-1'><GiBoxingGloveSurprise className='mb-4' /></div>
                                        <h4 className='fw-7-ls-2'>At Work</h4>
                                        <p> I am someone who is focused and tunnel vision to toward the task at hand, i am driven to complete
                                            my tasks to the best of my ability and make sure to not leave any stone untured
                                        </p>
                                        
                                    </div>
                                    <div className='col about-me-square text-center'>
                                        <div className='boxing-icon text-center mt-1'><ImSwitch className='mb-4' /></div>
                                        <h4 className='fw-7-ls-2'>Off Switch</h4>
                                        <p>In my free time i love to skate and box, boxing has been a big part of my life
                                            and shaped me into who i am today. I Also love a good boogie where possible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='projects '>
                <div className='container h-100 mt-20'>
                    
                    <div className='text-center proj-heading ' id='Projects' > Projects</div>
                        <div className='text-center mb-5' >While at General Assembly</div>
                        
                        <div className='row '>

                            <div className={'col pugilist-express'} onMouseEnter={showPxInfo} onMouseLeave={hidePxInfo} >
                                {pugilistExpress}
                                { isHoverPx && 
                                    <div className={'pugExpOverlay text-center'}>
                                        <h2>Pugilist Express</h2>
                                        <ul className={'text-center'}>
                                            <li><a href='https://pugilist-express.web.app/' target={'_blank'}>Live Site</a></li>
                                            <li><a href='https://github.com/tsharliz-Joma/Pugilist-Express' target={'_blank'}>Github Repo</a></li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            <div className={'col brain-train'} onMouseEnter={showBtInfo} onMouseLeave={hideBtInfo} >
                                { brainTrain }
                                { isHoverBt && 
                                    <div className={'btOverlay text-center'}>
                                        <h2>Brain Train</h2>
                                        <ul className='text-center'>
                                            <li><a href='https://the-brain-train.web.app/' target={'_blank'}>Live Site</a></li>
                                            <li><a href='https://github.com/Foyoman/brain-train' target={'_blank'}>Github Repo</a></li>
                                        </ul>
                                    </div>
                                    }
                            </div>    

                            <div className='row g-0'>
                            
                            <div className={'col school-knocks' } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                { schoolOfHardKnocks }
                                { isHover &&
                                    <div className={` sohnOverlay text-center `}>
                                        <h2>School of hard knocks</h2>
                                        <ul className={ 'text-center'} >
                                            <li><a href="https://ancient-caverns-55419.herokuapp.com/" target={'_blank'}>Live Site</a></li>
                                            <li><a href='https://github.com/tsharliz-Joma/FlexedUp' target={'_blank'}>Github Repo</a></li>
                                        </ul>
                                    </div> 
                                }
                            </div>
                            <div className={'col pgLang'} onMouseEnter={hoverPgLang} onMouseLeave={hidePgLang} >
                                { pgLang }
                                { isHoverPg && 
                                    <div className={' pgLangOverlay text-center '}>
                                        <h2>PgLang Clone</h2>
                                        <ul className='text-center'>
                                            <li><a href="">Live Site</a></li>
                                            <li><a href="">Github Repo</a></li>
                                            <li><a href="https://www.pg-lang.com/">Original Site</a></li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            

                            <div className='col ticTacToe' onMouseEnter={showTt} onMouseLeave={hideTt} >
                                {TicTacToe}
                                { isHoverTt && 
                                    <div className={'ticTacToeOverlay text-center'} >
                                        <h2>Tic My Tac Your Toe</h2>
                                        <ul className={'text-center'}>
                                            <li><a href="https://tsharliz-joma.github.io/TicYourTacMyToe/" target={'_blank'}>Live Site</a></li>
                                            <li><a href="https://github.com/tsharliz-Joma/TicYourTacMyToe">Github Repo</a></li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            </div>
                        </div>
                    </div>
            </section>

            <section className='tech-stack '>
                <div className='container pt-4'>
                    <div className="row justify-content-around text-center ">
                        <div className='tech-stack-container  '>
                            <h1 className='skills'> Skills </h1>
                            <span> skills.sort(( a,b ) => b - a ) </span>
                        </div>
                        <div className='row stack-icons m-5 container' >
                            <div className='col'>
                                <img src={jsLogo} alt="Javascript" />
                            </div>
                            <div className='col'>
                                <img src={bootstrapIcon} alt="Bootstrap" />
                            </div>
                            <div className='col'>
                                <img src={reactIcon} alt="React" />
                            </div>
                            <div className='col'>
                                <img src={jqueryIcon} alt="Jquery" />
                            </div>
                            <div className='col'>
                                <img src={aframeIcon} alt="Aframe" />
                            </div>
                            <div className='col'>
                                <img src={firebaseIcon} alt="Firebase" />
                            </div>
                            <div className='col '>
                                <img src={nodeIcon} alt="Jquery" />
                            </div>
                            <div className='col'>
                                <img src={rubyIcon} alt="Ruby" />
                            </div>
                            <div className='col '>
                                <img src={railsIcon} alt="Rails" />
                            </div>
                            <div className='col'>
                                <img src={VueIcon} alt="Vue" />
                            </div>
                            
                        </div>
                        <span className='skills'>And always learning more</span>
                        <span className='d-block'>so to be continiued...</span>
                    </div>
                </div>
            </section>
            

            <footer className='footer text-center'>
                <div className='f-2em-fw-500' id="Contact">Contact Me</div>
                <div className='container' >
                    <div className='row'>
                        <div className='row mt-0'>
                            <ul className='col '>
                                <li className='contact-info'><a href="https://github.com/tsharliz-Joma" target={"_blank"}><VscGithub/></a></li>
                            </ul>
                            <ul className="col">
                                <li className='contact-info'><a href='https://www.linkedin.com/in/charlesjoma/' target={'_blank'}><BsLinkedin /></a></li>
                            </ul>
                            <ul className="col contact-info">
                                <li ><BsFillPhoneVibrateFill color='rgb(255 158 27)' /><br /> +61 458 495 327 </li>
                            </ul>
                            <ul className='contact-info col'>
                                <li><AiTwotoneMail color='rgb(255 158 27)' /> charlesjoma@yahoo.com </li>
                            </ul>
                        </div>
                        <div className='col mt-0'>
                            
                            
                        </div>
                    </div>

                </div>
            </footer>

            </div>
        </div>
    )
}

export default Main 
