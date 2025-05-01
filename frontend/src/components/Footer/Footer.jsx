import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-right">
                    <h2>تواصل معنا</h2>
                    <ul>
                        <li>0938177004</li>
                        <li>Delivery.syria@toiall.com</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <h2>الشركة</h2>
                    <ul>
                        <li>الرئيسية</li>
                        <li>حولنا  </li>
                        <li>خدمة توصيل </li>
                        <li>ساستنا</li>
                    </ul>
                </div>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        الموقع السوري الأول الذي يسعى لتوصيل طعامك المفضل لاي مكان تريده
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
            </div>
            <hr />

            <p dir='rtl' className="footer-copyright">
                تم برمجة الموقع بكل حب من مبرمجين موقع  <a href='https://www.toiall.com' target='_blank' >تويال </a>
            </p>
        </div>
    )
}

export default Footer
