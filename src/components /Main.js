import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import config from 'react-reveal/globals';
import Carousel from 'react-bootstrap/Carousel'

import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade'
import { Reveal } from 'react-reveal';
import { Button } from 'react-bootstrap';


import headshot from '../images/headshot.jpg'
import sparring from '../images/me.jpeg'
import fighting from '../images/dsc01676.jpg'

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
import SwiftUI from '../images/swift-icon.png'

import sohnBg from '../images/schoolofhardknocks.png'
import bTrainBg from '../images/brain-train.png'
import pugExpBg from '../images/pugilist-express.png'
import TtBg from '../images/ticTactoe.png'
import comingsoon from '../images/comingsoon.jpeg'
import wos from '../images/wos.png'

import Folks from '../images/Folks.png'
import Meson from '../images/Meson.png'
import BassCoast from '../images/BassCoast.png'

import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { GiBoxingGloveSurprise } from 'react-icons/gi'
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs'
import { ImSwitch } from 'react-icons/im'
import { RiStarSmileLine } from 'react-icons/ri'
import { TbViewportWide } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { SiAboutdotme } from 'react-icons/si'
import { TiWeatherSunny } from 'react-icons/ti'
import { GiBoxingRing } from 'react-icons/gi'

 


const Main = () => {
config({ ssrFadeout: true });


    //===================================================================

    const [ click, setClick ] = useState(false);

    const [ isHover, setIsHovering ] = useState(false);
    const [ isHoverBt, setBtInfo ] = useState(false);
    const [ isHoverPx, setPxinfo ] = useState(false);
    const [ isHoverTt, setTtInfo ] = useState(false);
    const [ isHoverPg, setPgInfo ] = useState(false);
    const [ isHoverWos, setWosInfo ]= useState(false);
    
    const [ moreProjects, setMoreProjects ] = useState(false)


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

    const handleClick = () => {
        if(!click){
            setClick(true)
            console.log('true')
        } else {
            setClick(false)
            console.log('false')
        }
    }

    //==============================================================

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

    const showWos = () => {
        setWosInfo(true)
    };

    const hideWos = () => {
        setWosInfo(false)
    }

    const [ worldOfSpheres, showWorldOfSphere ] = useState(
        <div className={'col-4 wos'}>
            <img src={wos} width={'100%'} height={'100%'} />
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

    const showMoreProjects = (e) => {
        if(moreProjects){
            setMoreProjects(false)
        } else {
            setMoreProjects(true)
        }
    }

    //===============================================================

    const selectAboutMe = () => {
        setAboutMe(true);
        setAboutMeOutside(false);
        setAboutMeBoxing(false);
        setAboutMeDiv(
            <div className={`${aboutme ? 'about-me-content' : 'hideInfo'} `}>
            <div>
            <h1 className='skills'>This is Me</h1>
            <hr></hr>
        
            <p>Im a Junior Software developer with passion and energy that I show through everything I do. I believe every opportunity is a blessing and I make sure to seize every one that prosents itself to me.</p>
            <h4 className='var-skills-2'>Music</h4>
            <p>Music is a passion of mine, although I dont play any instruments I seem to have all the gear and no idea.
                Even still i love listening and having a dance whenever possible.
                <br/>
                <em>Maggot Brain by Funkadelic</em> = Is the song I recommend to ANYONE who likes guitar solos so do yourself a favor and go listen to it if 
                you dont know the song!
                <br />
               
                <em>The Four Seasons, Violin Concerto in F Minor by Antonio Vivaldi</em> = Classical music is my minestrone soup and this song is for when you
                just finished a project and you feel like a badass because it was difficult.
                <br />
            </p>
            </div>
        </div>
        )
        setAboutMeBoxingDiv(<div></div>)
        setAboutMeOutsideDiv(<div></div>)
    }

   
    const selectOutsideMe = () => {
        setAboutMeOutside(true)
        setAboutMe(false);
        setAboutMeBoxing(false);
        setAboutMeOutsideDiv(
            <div className={`${aboutMeOutside ? 'about-me-content' : 'hideInfo'}  `}>
                <h1 className='skills'>My Free Time</h1>
                <hr></hr>
                <h4 className='var-skills-2'>Skating</h4>
                <hr></hr>
                <p>In my free time I enjoy going to the skatepark or simply riding my cruise board around. My favourite skate at the moment is probably Ishod Wair or Luan Oliveira</p>
                <br/>
                <p>I have been on skateboards for a years now, since high and probably one one of the things that I could live without!</p>
            </div>
        )
        setAboutMeBoxingDiv(<div></div>)
        setAboutMeDiv(<div></div>)
    }

    const selectMeBoxing = () => {
        setAboutMeBoxing(true);
        setAboutMe(false);
        setAboutMeOutside(false);
        setAboutMeBoxingDiv(
            <div className={`${aboutMeBoxing ? 'about-me-content' : 'hideInfo'} `}>
                <h1 className='skills'>This is Me Boxing!!</h1>
                <hr></hr>
                <img className="mx-auto my-3" width="400px" height="400px" src={fighting} alt="" />
                <p>Boxing has been a large part of my life and has molded me into who I am today.</p>
                <p>It has truly taught me, resilience and patience when it comes to the process of chasing your dreams
                    I have been through some tough battles with boxing and the lessons learnt really do translate into other fascates of life.
                </p>
            </div>
        )
        setAboutMeOutsideDiv(<div></div>)
        setAboutMeDiv(<div></div>)
    }

    const [ aboutme, setAboutMe ] = useState(false);
    const [ aboutMeOutside, setAboutMeOutside ] = useState(false);
    const [ aboutMeBoxing, setAboutMeBoxing ] = useState(false);

    const [ aboutMeDiv, setAboutMeDiv ] = useState(
        
    )

    const [ aboutMeOutsideDiv, setAboutMeOutsideDiv ] = useState(
     
    )

    const [ aboutMeBoxingDiv, setAboutMeBoxingDiv ] = useState(
      
    )



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
        <div className={`main-body`}>
                
            <div className='center-container'>

            
                <div className={`${click ? 'hiddenOverlay' : 'd-none'}`}>
                    <ul className={`${click ? '' : ''}`} >
                        <li >
                            <a onClick={handleClick} href='#PageHome'>Home</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href='#About'>About</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href='#Projects'>Projects</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href='#Contact'>Contact</a>
                        </li>
                    </ul>
                </div>
        
        
            <nav className={`nav navbar navbar-expand fixed-top navbar-shrink `} id={`${show && 'Nav'}`}> 

            <h1 className={`${show && 'd-none'} w-100 mx-3 welcome-text`}>W E L C O M E !</h1>
            <div className='text-center w-100' ></div>
        
            <div className='collapse navbar-collapse '>  
                <div className={`collapse navbar-collapse `} >
                
                    <div className={`${click ? 'd-none' : ''} hide navbar-nav text-end nav-anchor-div`}>
                        <a className="nav-item nav-link mx-3 mx-md-3 mx-lg-5 fs-4" href='#PageHome'>Home</a>
                        <a className="nav-item nav-link mx-3 mx-md-3 mx-lg-5 fs-4" href="#About">About</a>
                        <a className="nav-item nav-link mx-3 mx-md-3 mx-lg-5 fs-4" href="#Projects">Projects</a>
                        <a className="nav-item nav-link mx-3 mx-md-3 mx-lg-5 fs-4" href="#Contact">Contact</a>
                        
                    </div>
                </div>
             </div>
             <div className='hamburger' onClick={handleClick}>
                {click ? 
                    <ImCross size={40} style={{color: "#e5e9ee"}}/>
                    : 
                    <GiHamburgerMenu size={40} style={{color: "#e5e9ee"}}/> 
                } 
            </div>
             
            </nav>
            

            <header className='header ' id="PageHome">
                <div id="Home" className='d-flex h-100 align-items-center col-12 col-md-8 col-lg-8 mx-auto'>
                    <div className='container text-center col-12 col-lg-10 '>
                        <Fade >
                        <div className='row mx-auto p-1 py-5 mw-100 w-100 new-bg '>
                            <div className='col-sm-12 col-lg-5 text-middle mx-auto'>

                                <div className=''>
                                    <img className='headshot' src={ headshot } alt="headshot" />
                                    <span className='d-block pt-3 mt-3 text-black fs-5'>Sudan Born | South Gippsland raised | Sydney Based</span>
                                </div>
                                
                            </div>

                            <div className='intro col-sm-12 col-lg-5 mx-auto'>
                                 <span className='intro-hello mt-lg-5 mb-3 '>HELLO!</span>
                                 <span className='intro-text fw-bold fs-1 '>I'm Charles Joma</span>
                                 <span className='d-block fs-4 mt-2'>A Junior Web Developer with energy and passion.</span>
                            </div>
                        </div>
                        </Fade>
                    </div>
                        
                </div>
            </header>

            <section className='about-me bg-dark col-wh '>
                <Fade>

                    <div className='bg-light about-me-container' id="pond">
                        <div className='left-div'>
                            <div className={`item`} onClick={selectAboutMe}><SiAboutdotme size={100}/></div>
                                { aboutMeDiv }
                            <div className={`item`} onClick={selectOutsideMe}><TiWeatherSunny size={100} /></div>
                                { aboutMeOutsideDiv }
                            <div className={`item`} onClick={selectMeBoxing}><GiBoxingRing size={100}/></div>
                                { aboutMeBoxingDiv }

                        </div>
                        <div className='right-div'>
                            <div className={`${aboutme ? 'about-me-content' : 'hideInfo'}`}>
                                <div>
                                <h1 className='skills'>This is Me</h1>
                                <hr></hr>
                            
                                <p>Im a Junior Software developer with passion and energy that I show through and in everything I do. I believe every opportunity is a blessing and I make sure to seize every one that prosents itself to me.</p>
                                <h4 className='var-skills-2'>Music - </h4>
                                <p>Music is a passion of mine, although I dont play any instruments I seem to have all the gear and no idea.
                                    Even still i love listening and having a dance whenever possible.<br/>
                                    <br/>
                                    <em>Maggot Brain by Funkadelic</em> = Is the song I recommend to ANYONE who likes guitar solos so do yourself a favor and go listen to it if 
                                    you dont know the song!
                                    <br />
                                    <br />
                                    <em>The Four Seasons, Violin Concerto in F Minor by Antonio Vivaldi</em> = Classical music is my minestrone soup and this song is for when you
                                    just finished a project and you feel like a badass because it was difficult.
                                    <br />
                                </p>
                              </div>
                            </div>
                            <div className={`${aboutMeOutside ? 'about-me-content' : 'hideInfo'}`}>
                                <h1 className='skills'>My Free Time</h1>
                                <hr></hr>
                                <h4 className='var-skills-2'>Skating</h4>

                                <p>In my free time I enjoy going to the skatepark or simply riding my cruise board around. My favourite skateer at the moment is probably Ishod Wair or Luan Oliveira</p>
                                <br/>
                                <p>I have been on skateboards for a years now, since high and probably one one of the things that i could live without!</p>
                            </div>
                            <div className={`${aboutMeBoxing ? 'about-me-content' : 'hideInfo'}`}>
                                <h1 className='skills'>This is Me Boxing!!</h1>
                                <hr></hr>
                                <img className="mx-auto my-3" width="400px" height="400px" src={fighting} alt="" />
                                <p>Boxing has been a large part of my life and has molded me into who I am today.</p>
                                <p>It has truly taught me, resilience and patience when it comes to the process of chasing your dreams
                                    I have been through some tough battles with boxing and the lessons learnt really do translate into other fascates of life.
                                </p>
                            </div>
                        </div>
                    </div>

                </Fade>
            </section>
                
                <section className='projects '>  
                    <Fade>
                    <div className='container-md h-100 mt-20'>
                        
                        <div className='text-center proj-heading ' id='Projects' > Projects</div>
                        <div className='text-center mb-4' >While at General Assembly</div>
                        
                        <div className='row mx-auto'>

                            <div className={'col-md pugilist-express'} onMouseEnter={showPxInfo} onMouseLeave={hidePxInfo} >
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
                        
                            <div className={'col-md brain-train mt-3 my-md-0 my-lg-0'} onMouseEnter={showBtInfo} onMouseLeave={hideBtInfo} >
                                { brainTrain }
                                { isHoverBt && 
                                    <div className={'btOverlay text-center'}>
                                        <h2>Brain Train</h2>
                                        <ul className={'text-center'}>
                                            <li><a href='https://the-brain-train.web.app/' target={'_blank'}>Live Site</a></li>
                                            <li><a href='https://github.com/Foyoman/brain-train' target={'_blank'}>Github Repo</a></li>
                                        </ul>
                                    </div>
                                    }
                            </div>

                        </div>
                        <div className='row mx-auto my-3'>
                            
                            <div className={'col-md school-knocks my-md-0 my-lg-0' } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
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

                            <div className={'col-md pgLang my-3 my-md-0 my-lg-0'} onMouseEnter={hoverPgLang} onMouseLeave={hidePgLang} >
                                { pgLang }
                                { isHoverPg && 
                                    <div className={' pgLangOverlay text-center '}>
                                        <h2>PgLang Clone</h2>
                                        <ul className={'text-center'}>
                                            <li><a href="">Live Site</a></li>
                                            <li><a href="">Github Repo</a></li>
                                            <li><a href="https://www.pg-lang.com/">Original Site</a></li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            <div className={'col-md ticTacToe '} onMouseEnter={showTt} onMouseLeave={hideTt} >
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

                            <div className='row mx-auto my-3 '>
                                <div className='col-4 '>
                                <button className={"more-projects btn btn-lg btn-outline-dark mb-5"} onClick={showMoreProjects} ><TbViewportWide /> --> More Projects </button>
                                    { moreProjects && 
                                    <div className={'wos mx-auto'} onMouseEnter={showWos} onMouseLeave={hideWos} >  
                                        { worldOfSpheres }
                                        { isHoverWos && 
                                            <div className={'wosOverlay text-center'}>
                                                <h2>World of Spheres</h2>
                                                <ul className={'text-center'}>
                                                    <li><a href='https://tsharliz-joma.github.io/World_of_Spheres/' taregt={'_blank'}>Live Site</a></li>
                                                    <li><a href='https://github.com/tsharliz-Joma/World_of_Spheres' target={'_blank'}>Github Repo</a></li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                    }
                                </div>
                            </div>

                            

                        </div> 
                    </div>
                </Fade>
            </section>

            <section className='tech-stack '>
                <div className='container pt-4'>
                    <div className="row justify-content-around text-center ">
                        <div className='tech-stack-container col '>
                            <h1 className='skills'> Skills </h1>
                            <span> skills.sort(( a,b ) => b - a ) </span>
                        </div>
                        <Fade right cascade >
                        <div className='row stack-icons m-5 container' >
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={jsLogo} alt="Javascript" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={bootstrapIcon} alt="Bootstrap" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={reactIcon} alt="React" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={jqueryIcon} alt="Jquery" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={aframeIcon} alt="Aframe" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={firebaseIcon} alt="Firebase" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={nodeIcon} alt="Node" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={SwiftUI} alt="SwiftUI" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={rubyIcon} alt="Ruby" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={railsIcon} alt="Rails" />
                            </div>
                            <div className='col my-3 my-lg-0 col-lg col-xl'>
                                <img src={VueIcon} alt="Vue" />
                            </div>
                            
                        </div>
                        </Fade>
                        <span className='skills'>And always learning more</span>
                        <span className='d-block'>so to be continiued...</span>
                    </div>
                </div>
            </section>

        
            <section className='py-5 mt-5 experience'>
                <div className='container-xl text-center'>
                    <h1 className='skills'>Experience</h1>
                    <Fade bottom cascade>
                    <div className='row mt-4'>
                        <div className='col-md job-img-container'>
                            <strong>Barista</strong>
                            <img src={Folks} height={'300px'} width={'100%'} />
                            <span className='cl-bl-fw500'>April 2017 - Feburary 2022</span>
                            <br></br>
                            <strong>Head Barista</strong>
                            <ul>
                                <li> Coordinate coffee service</li>
                                <li> Tracking and ordering of supplies</li>
                                <li> Expresso Machine maintence and upkeep</li>
                            </ul>
                           
                        </div>
                        <div className='col-md'>
                            <strong>Sales Consultant</strong>
                            <img src={Meson} height={'300px'} width={'100%'} />
                            <span className='cl-bl-fw500'>March 2022 - May 2022 </span>
                            <br/>
                            <strong>Consultant</strong>
                            <ul>
                                <li>Database cleaning</li>
                                <li>Organisation appraisals & appointments </li>
                            </ul>
                            
                        </div>
                        <div className='col-md text-center'>
                            <strong>Trainer</strong>
                            <img src={BassCoast} height={'300px'} width={'100%'}  />
                            <span className='cl-bl-fw500'>August 2017 - March 2022</span>
                            <br />
                            <strong>Boxing Coach</strong>
                            <ul>
                                <li>Train Competition Fighters</li>
                                <li>Supervise Competition sparring</li>
                                <li>Instruct Boxfit classes</li>
                                <li>Upkeep of equipment</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                </div>
            </section>
            

            <footer className='footer text-center'>
                <div className='f-2em-fw-500' id="Contact">Contact Me</div>
                <div className='container-xl' >
                    <div className='row'>
                        <div className='row mt-0'>
                            <ul className='col-sm'>
                                <li className='contact-info'><a href="https://github.com/tsharliz-Joma" target={"_blank"} id="footer-link"><VscGithub/></a></li>
                            </ul>
                            <ul className="col-sm">
                                <li className='contact-info'><a href='https://www.linkedin.com/in/charlesjoma/' target={'_blank'} id="footer-link"><BsLinkedin /></a></li>
                            </ul>
                            <ul className="col-sm">
                                <li className='contact-info'><BsFillPhoneVibrateFill color='rgb(255 158 27)' /><br /> 0458 495 327 </li>
                            </ul>
                            <ul className='col-sm'>
                                <li className='contact-info'><AiTwotoneMail color='rgb(255 158 27)' /> charlesjoma@yahoo.com </li>
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
