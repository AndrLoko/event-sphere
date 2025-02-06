import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <>
            <div className="footer__wrapper">
                <div className="footer__grid">
                    <div className="footer__info">
                        <ul className="footer__info-list">
                            <li className="footer__info-item">
                                <h2 className="footer__info-title">EVENTSPHERE</h2>
                            </li>
                            <li className="footer__info-item">
                                <p className="footer__info-descr">
                                    OurStudio is a digital agency
                                    UI / UX Design and Website
                                    Development located in Gdansk, Poland (Educational project)
                                </p>
                            </li>
                            <li className="footer__info-item">
                                <p className="footer__info-studio">Copyright NoName Studio</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact">
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">
                                <h2 className="footer__contact-title">Get in Touch</h2>
                            </li>
                            <li className="footer__contact-item">
                                <img src="" alt="" className="footer__contact-item" />
                                <p className="footer__contact-text">8819 Ohio St. South Gate, CA 90280</p>
                            </li>
                            <li className="footer__contact-item">
                                <img src="" alt="" className="footer__contact-item" />
                                <p className="footer__contact-text">andrew@gmail.com</p>
                            </li>
                            <li className="footer__contact-item">
                                <img src="" alt="" className="footer__contact-item" />
                                <p className="footer__contact-text">+48 999 999 99</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <ul className="footer__social-list">
                            <li className="footer__social-item">
                                <h2 className="footer__social-title">Our Social Media</h2>
                            </li>
                            <li className="footer__contact-item">
                                <a href="" className="footer__contact-link">Instagram</a>
                            </li>
                            <li className="footer__contact-item">
                                <a href="" className="footer__contact-link">GitHub</a>
                            </li>
                            <li className="footer__contact-item">
                                <a href="" className="footer__contact-link">Twitter</a>
                            </li>
                            <li className="footer__contact-item">
                                <a href="" className="footer__contact-link">Pinterest</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__email">
                        <ul className="footer__email-list">
                            <li className="footer__email-item">
                                <h2 className="footer__email-title">Join a Newsletter</h2>
                            </li>
                            <li className="footer__email-item">
                                <input type="text" className="footer__email-input" />
                            </li>
                            <li className="footer__email-item">
                                <button className="footer__email-btn">Subscribe</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}
