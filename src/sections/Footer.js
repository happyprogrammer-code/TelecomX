import React from 'react'
import {LogoLight} from './img'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="con-90-res">
                <div className="footer-logo">
                    <img src={LogoLight} alt="" srcset=""/>
                </div>
                <div className="footer-grid">
                    <div className="grid-footer">
                        <ul>
                            <li>Oakland</li>
                            <li>CA, California</li>
                            <li>USA, America</li>
                        </ul>
                    </div>
                    <div className="grid-footer">
                        <ul>
                            <li>122-323-323</li>
                            <li>test@gmail.com</li>
                            <li>@TelecomX</li>
                        </ul>
                    </div>
                    <div className="grid-footer">
                        <ul>
                            <li>Home</li>
                            <li>FAQ</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
