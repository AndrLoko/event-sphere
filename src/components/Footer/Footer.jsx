import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer> 
            <section className="footer__wrapper">
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
                                <p className="footer__info-studio">Copyright Andrew Lokotosh</p>
                            </li>
                        </ul>
                    </div>
                    <section className="footer__contact">
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">
                                <h2 className="footer__contact-title">Get in Touch</h2>
                            </li>
                            <li className="footer__contact-item">
                                <img src="../../../public/location.png" alt="" className="footer__contact-icon" />
                                <adress className="footer__contact-text">8819 Ohio St. South Gate, CA 90280</adress>
                            </li>
                            <li className="footer__contact-item">
                                <img src="../../../public/email.png" alt="" className="footer__contact-icon" />
                                <p className="footer__contact-text">andrew@gmail.com</p>
                            </li>
                            <li className="footer__contact-item">
                                <img src="../../../public/call.png" alt="" className="footer__contact-icon" />
                                <a href="tel:+79991112233" className='footer__contact-text'>+48 999 999 999</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__social">
                        <ul className="footer__social-list">
                            <h2 className="footer__social-title">Our Social Media</h2>
                            <li className="footer__social-item">
                                <a href="" className="footer__contact-link">Instagram</a>
                            </li>
                            <li className="footer__social-item">
                                <a href="" className="footer__contact-link">GitHub</a>
                            </li>
                            <li className="footer__social-item">
                                <a href="" className="footer__contact-link">Twitter</a>
                            </li>
                            <li className="footer__social-item">
                                <a href="https://git.com" className="footer__contact-link">Pinterest</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__email">
                        <h2 className="footer__email-title">Join a Newsletter</h2>
                        <div className="footer__email-form">
                            <label htmlFor="email" className="footer__email-label">Enter your email</label>
                            <input type="email" placeholder="Enter your email" className="footer__email-input" />
                            <button className="footer__email-btn">Subscribe</button>
                        </div>
                    </section>
                </div>
            </section>
    </footer>
  )
}
