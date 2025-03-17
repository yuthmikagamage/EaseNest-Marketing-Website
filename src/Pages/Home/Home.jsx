import React, { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar';
import startPage from '../../assets/images/startPage.png';
import HomePage from '../../assets/images/Home.png';
import visitorPass from '../../assets/images/visitorPass.png';
import login from '../../assets/images/login.png';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/services');
  };
  
  const handlePricingClick = () => {
    navigate('/contact');
  };
  
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const options = {
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div>
      <NavBar />
      
      <div className="section-1 fade-in">
        <div className="hero-content">
          <h1 className="hero-title">THE FUTURE OF LIVING IS HERE</h1>
          <h2 className="hero-subtitle">Effortless Apartment & Housing Scheme Management at Your Fingertips</h2>
        </div>
      </div>
      <div className="section-2 fade-in">
        <h2>Why EaseNest?</h2>
        <p>The perfect solution to make living in an apartment complex and housing scheme a pleasant and convenient experience - for both residents and the management.</p>
        <button className="service-btn" onClick={handleButtonClick}>What you receive</button>
      </div>
      <hr />
      <div className="section-3 fade-in">
        <div className="section-3-heading">
          <h2>Our Impact</h2>
          <p>See how EaseNest is transforming residential living across the country.</p>
        </div>
        <div className="statistics-container">
          <div className="statistic-item">
            <h3>2+</h3>
            <p>Both Apartment and Housing scheme</p>
          </div>
          <div className="statistic-item">
            <h3>7+</h3>
            <p>Services</p>
          </div>
          <div className="statistic-item">
            <h3>4.8</h3>
            <p>Average user rating</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="section-4 fade-in">
        <div className="section-4-heading">
          <h2>What you experience?</h2>
          <p>With EaseNest, enjoy seamless, user-friendly management that simplifies daily tasks and enhances living experience.</p>
        </div>
        <div className="section-4-img">
          <img src={startPage} alt="Start Page" className="start-page-img" />
          <img src={login} alt="Maintenance" className="start-page-img" />
          <img src={HomePage} alt="Home Page" className="start-page-img" />
          <img src={visitorPass} alt="Visitor Pass" className="start-page-img" />
        </div>
      </div>
      <hr />
      <div className="section-5 fade-in">
        <div className="section-5-heading">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for your community.</p>
        </div>
        <div className="pricing-container">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Standard</h3>
              <div className="price">$1999<span>/month</span></div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Upto 50 units</li>
              </ul>
            </div>
            <button className="pricing-btn" onClick={handlePricingClick}>Contact Us</button>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-tag">Popular</div>
            <div className="pricing-header">
              <h3>Premium</h3>
              <div className="price">$2499<span>/month</span></div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Upto 200 units</li>
              </ul>
            </div>
            <button className="pricing-btn" onClick={handlePricingClick}>Contact Us</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
              <div className="price">$3499</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Over 200 units</li>
              </ul>
            </div>
            <button className="pricing-btn" onClick={handlePricingClick}>Contact Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}