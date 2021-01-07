import React from 'react'
import './reason.css'
import {truck, screw, clock, orangeWaveFacingDown} from './img'


export default function Reason() {
    return (
        <section className="reason-main">
             <div className="top-wave">
            <img src={orangeWaveFacingDown} alt="" srcset=""/>
            </div>
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
