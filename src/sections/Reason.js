import React from 'react'
import './reason.css'
import {truck, screw, clock} from './img'


export default function Reason() {
    return (
        <section className="reason-main">
            <svg className="reason-top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFA62B" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,128C384,128,480,64,576,69.3C672,75,768,149,864,197.3C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="reason-in">
                <div className="con-90-res">

                    <div className="reason-title">
                        <h1>WHY YOU SHOULD PICK US</h1>
                    </div>

                    <div className="reason-grid">

                        <div className="reason-box">
                            <div className="reason-img">
                                <img src={truck} alt=""/>
                            </div>
                            <div className="reason-texts">
                                <h5>Fast Delivery</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.</p>
                            </div>
                        </div>
                        <div className="reason-box">
                            <div className="reason-img">
                                <img src={screw} alt=""/>
                            </div>
                            <div className="reason-texts">
                                <h5>Costumizeable</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.</p>
                            </div>
                        </div>
                        <div className="reason-box">
                            <div className="reason-img">
                                <img src={clock} alt=""/>
                            </div>
                            <div className="reason-texts">
                                <h5>Long lasting</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}
