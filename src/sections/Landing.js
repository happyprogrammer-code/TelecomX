import React from 'react'
import './Landing.css'
import {smallLanding, bigLanding, LogoDark, LogoLight, burger} from './img'
export default function Landing() {
    return (
        <section className="landing-main">
            <div className="landing-topper-small">
                <img src={smallLanding} alt="" className="src"/>
            </div>
            <div className="landing-topper-big">
                <img src={bigLanding} alt="" className="src"/>
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
                                <button><img src={burger} alt="" srcset=""/></button>
                            </div>
                        </div>
                   </div>
                </div>
            </nav>
            <div className="con-90-res">
                <h1>lololS</h1>
            </div>
        </section>
        
    )
}
