import React from 'react'
import './Footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
  <div class="footer-stats">
    <p><strong>Jobs Posted:</strong> <span>31258</span></p>
    <p><strong>Jobs Filled:</strong> <span>15153</span></p>
    <p><strong>Employers:</strong> <span>19967</span></p>
    <p><strong>Active Users:</strong> <span>1295533</span></p>
  </div>
  <div class="footer-disclaimer">
    <p>
      <strong>Disclaimer:</strong> All Trademarks and Logos are the property of their respective owners. Jobringer.com
      has taken all reasonable steps to ensure that information on this site is genuine...
    </p>
  </div>
  <div class="footer-links">
    <a href="#">Terms and conditions</a> |
    <a href="#">Privacy Policy</a> |
    <a href="#">Refund / Cancellation Policy</a> |
    <a href="#">About Us</a> |
    <a href="#">Contact Us</a> |
    <a href="#">FAQ</a>
  </div>
  <div class="footer-social">
    <p>Follow us on</p>
    <a href="#"><IoLogoWhatsapp /></a>
    <a href="#"><BsTwitterX /></a>
    <a href="#"><FaLinkedin /></a>
    <a href="#"><FaFacebook /></a>
    <a href=""><FaInstagramSquare /></a>
  </div>
  <div class="footer-recognition">
    <p>Recognized By</p>
    <img src="https://www.jobringer.com/images/startuplogo.png" alt="Startup India" />
  </div>
  <p>&copy; 2024 Jobtech Ventures Private Limited. All Rights Reserved.</p>
</footer>
  )
}

export default Footer


