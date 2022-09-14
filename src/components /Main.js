import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
 


const Main = () => {
    return(
        <div className='main-body'>

            <div className='center-container'>

            <nav className='nav navbar navbar-expand-lg bg-light'> 
                <div className='name'>
                    Charles Joma
                </div>
                <div className='collapse navbar-collapse'>  
                    <div class="collapse navbar-collapse" >
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href='#Home'>Home</a>
                            <a class="nav-item nav-link" href="#">Features</a>
                            <a class="nav-item nav-link" href="#">Pricing</a>
                            <a class="nav-item nav-link disabled" href="#">Disabled</a>
                        </div></div>
                    </div>
            </nav>
            -----------------------------------------------------------------------------------------------------------------------------------------------------------------
            <header className='header'>
                <div id="Home" className='d-flex h-100 align-items-center'>
                    <div className='container text-center'>
                        <div className='row'>
                            <div className='col'>
                                <div className="f-2em">WELCOME!</div>
                                    <div>
                                           
                                    </div>
                                </div>
                                <div className='col f-2em-fw-500 '>
                                    I am a Junior Software engineer, Sydney based, South Gippsland raised, and sudanese born!
                                    A new General Assembly Sydney Alumni 
                                </div>
                            </div>
                        </div>
                    </div>
            </header>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
            <section className='about-me col-wh'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-md-6 col-lg-5 d-flex img-container'>
                            <div  className='img d-flex align-self-stretch align-items-center'>    
                                
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 pl-lg-5 py-5'>
                            <div className='row justify-content-start pb-3'>
                                <div>About Me here</div>
                                <div>
                                    Fititi inkanda, umushishi ni nappy, yeah
                                    Konse twanyanta, umushili we mark, yeah
                                    Enginila, dokotela wa first afuma kwesu (Kwesu)
                                    Kubufumu nobukumu fyonse fyatula kwesu
                                    Ubunonshi mucitundu (Then), mufundo mumushili (Then)
                                    Ma values yacimuntu, ubafunde umushili (Hah!)
                                    Battle rapping in form of ifishobo (Ifishobo)
                                    Twafyambile kale ifwe, enh, teti uncaile showboat
                                </div>
                            </div>
                            <div className='row pt-5'>
                                <div className='col about-me-square'>
                                    <div>Creative Thinking Time</div>
                                    <p>I want square block her you over on to view the information </p>
                                    <p> For now it can be more lyrics</p>
                                </div>
                                <div className='col about-me-square'>
                                    Somthing else 
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
                    <div> Projects (projects )</div>
                    
                        <div className='row'>
                            <div>Pugilist Express</div>
                            <div className='col pugilist-express'>
                                
                            </div>
                            <div className='col brain-train'>
                                Brain Train
                            </div>
                            <div className='col school-knocks'>
                                The School of Hardknocks
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    NOT TIC TAC TOE
                                </div>
                                <div className='col'>
                                   I will recreate OFX website [, call it PEZ ]
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className='tech-stack'>
                <div>
                Competant Technologies
                </div>
            </section>
            

            <footer>
                <div>Contact Me</div>
                <div className='container' >
                    <div className='row'>
                        <div className='col'>
                            <ul className='row'>
                                <li>GitHub</li>
                            </ul>
                            <ul className="row">
                                <li>LinkedIn</li>
                            </ul>
                            <ul className="row">
                                <li>Mail</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul className="row">
                                <li>Phone</li>
                            </ul>
                            <ul className=''>
                                <li>Email</li>
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