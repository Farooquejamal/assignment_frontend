import React from 'react';
import './JobPortal.css';

const JobPortal = () => {
  return (
    <div className="job-portal">
      {/* Header Section */}
      <header className="portal-header">
        <h1>BRINGING YOU THE PERFECT JOB!</h1>
        <p>11,000+ JOBS to Apply</p>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search Jobs Now" />
          <button className="btn btn-search">Search</button>
          <button className="btn btn-view">View Jobs</button>
          <button className="btn btn-register">Register For FREE</button>
        </div>
        <div className="quick-search">
          <h3>Quick Job Search 🔍</h3>
          <div className="tags">
            {[
              '#Fresher',
              '#Work From Home',
              '#WFH',
              '#IT',
              '#HR',
              '#Back Office',
              '#BPO Jobs',
              '#ITES',
              '#Finance',
              '#Accounts',
              '#Medical',
              '#Pharma',
              '#Manager',
              '#Developer',
              '#Marketing',
              '#Engineering',
              '#Non Government Jobs',
            ].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          {[
            {
              title: 'Google Sheet Developer - Finance Analyst',
              company: 'Rawalwasia',
              type: 'In Office job',
              jobType: 'Full Time - Permanent',
              experience: '2 - 3 Years',
              location: 'Surat / India',
            },
            {
              title: 'US Staffing Professionals',
              company: 'TekWissen India',
              type: 'In Office job',
              jobType: 'Full Time - Permanent',
              experience: '1 - 4 Years',
              location: 'Bengaluru / Bangalore / India',
            },
            {
              title: 'Cyber Security Consultant - GRC',
              company: 'Network Intelligence',
              type: 'In Office job',
              jobType: 'Full Time - Permanent',
              experience: '3 - 5 Years',
              location: 'Pune / Mumbai (All Areas) / India',
            },
          ].map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-type">{job.type}</div>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.jobType}</p>
              <p>{job.experience}</p>
              <p>{job.location}</p>
              <button className="btn btn-apply mt-3">Apply ➤</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobPortal;
