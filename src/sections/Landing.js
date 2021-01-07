import React, {useState} from 'react'
import './Landing.css'
import {smallLanding, bigLanding, LogoDark, LogoLight, burger, mainTv} from './img'
export default function Landing() {

    const [dropdown, setDropdownState] = useState(false)

    const dropdownState = dropdown === true ? 'nav-dropdown nav-dropdown-active' : 'nav-dropdown'

    function setDropdown(){
        setDropdownState(!dropdown)
    }
    
    return (
        <>
        <section className="landing-main">
            <div className="landing-topper-small">
                <img src={smallLanding} alt="" className="src"/>
            </div>
            <div className="landing-img-con">
                <div className="landing-topper-big">
                    
                    <img src={bigLanding} alt="" className="src"/>
                </div>
            </div>
           
            
            <nav>
                <div className="con-90-res">
                    <div className="nav-in">
                        <div className="nav-logo">
                            <img src={LogoLight} alt="logo" className="nav-logo-light"/>
                            <img src={LogoDark} alt="logo" className="nav-logo-dark"/>
                        </div>
                        <div className="nav-right">
                            <div className="nav-list">
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="nav-burger-logo">
                                <button onClick={setDropdown}><img src={burger} alt="" srcset=""/></button>
                            </div>
                        </div>
                   </div>
                </div>
             
            </nav>
            <div className="landing-big-area">
                <div className="con-90-res">
                    <div className="landing-big-in">
                        <div className="landing-image">
                            <img src={mainTv} alt="TV"/>
                        </div>
                        <div className="landing-texts">
                            <div className="landing-texts-in">
                                <h1>Design your<br/> own televison</h1>
                                <p>Design you own Television design your own experience, design your own future experience, design your own future</p>
                                <input type="button" value="GET STARTED"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={dropdownState}>
                <div className="link-list">
                        <a href="#"><div className="links">
                            <p>Home</p>
                        </div>
                        </a>
                        <a href="#">
                        <div className="links">
                            <p>About</p>
                        </div>
                        </a>
                        <a href="#">
                        <div className="links">
                            <p>Contact</p>
                        </div>
                        </a>
                        <a href="#">
                        <div className="links">
                            <p>FAQ</p>
                        </div>
                        </a>
                    </div>
                </div>
            <div className="con-90-res">
                <h1>lololS</h1>
            </div>
        </section>
        </>
        
    )
}
