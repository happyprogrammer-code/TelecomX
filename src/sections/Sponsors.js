import React from 'react'
import './sponsors.css'
import {paypal, github, doritos, orangeWaveFacingDown} from './img'
export default function Sponsors() {
    return (
        <div className="sponsors-main">
            <div className="sponsors-block"></div>
            
            <div className="top-wave">
            <img src={orangeWaveFacingDown} alt="" srcset=""/>
            </div>
           
            <div className="con-90-res">
                <div className="sponsors-title">
                    <h1>OUR <br/> SPONSORS</h1>
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

            <div className="bot-wave">
            <img src={orangeWaveFacingDown} alt="" srcset=""/>
            </div>

            <div className="sponsors-block"></div>
        </div>
    )
}
