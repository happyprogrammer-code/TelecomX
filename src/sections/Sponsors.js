import React from 'react'
import './sponsors.css'
import {paypal, github, doritos} from './img'
export default function Sponsors() {
    return (
        <div className="sponsors-main">
            <div className="sponsors-block"></div>
            <svg className="sponsors-top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFA62B" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,128C384,128,480,64,576,69.3C672,75,768,149,864,197.3C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
           
            <div className="con-90-res">
                <div className="sponsors-title">
                    <h1>OUR SPONSORS</h1>
                </div>
                <div className="sponsors-grid">
                    <div className="sponsor-img">
                        <img src={paypal} alt=""/>
                    </div>
                    <div className="sponsor-img">
                        <img src={github} alt=""/>
                    </div>
                    <div className="sponsor-img">
                        <img src={doritos} alt=""/>
                    </div>
                </div>
            </div>

            <svg className="sponsors-bot-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFA62B" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,128C384,128,480,64,576,69.3C672,75,768,149,864,197.3C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="sponsors-block"></div>
        </div>
    )
}
