import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">job</span>
        <span className="logo-highlight">Ringer</span>
        <span className="subtitle">India's Job Portal</span>
      </div>
      <div className="navbar-right">
        <span className="tagline">BRINGING YOU <span className="highlight">THE PERFECT JOB</span></span>
        <nav className="nav-links">
          <a href="#jobs">Jobs</a>
          <a href="#active-employers">Active Employers</a>
          <a href="#pricing">Pricing</a>
          <a href="#jobseeker-login" className="login-btn">Jobseeker Login</a>
          <a href="#employer-login" className="employer-btn">Employer Login</a>
        </nav>
      </div>
      <div className="employers-banner">
        <div className="banner-text">
        <h3>EMPLOYERS</h3>
        
        </div>
        <div className="banner-actions ">
        <span><center>WELCOME OFFER - FREE JOB Postings and Much More.</center></span>
          <button className="btn register-btn">Register for FREE</button>
          <button className="btn post-job-btn">Post A Job</button>
          <a href="#sales-enquiry" className="sales-link">Sales Enquiry</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
