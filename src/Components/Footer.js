import React from 'react';

function Footer() {
  return (
    <div className='company-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mauris eu odio ullamcorper
              congue at ac massa.
            </p>
          </div>
          <div className='col'>
            <h4>Links</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="https://github.com/johnnyawesome/mern-auth" target="_blank" rel="noreferrer noopener">Source Code</a></li>
            </ul>
          </div>
          <div className='col'>
            <h4>Contact</h4>
            <address>
              123 Company St<br />
              Cityville, State 12345<br />
              <a href='tel:+123456789'>Phone: (123) 456-789</a><br />
              <a href='mailto:info@example.com'>Email: info@example.com</a>
            </address>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>&copy; 2019 - {(new Date()).getFullYear()} Company Name. All Rights Reserved.</p>
          </div>
          <div className='col social-icons'>
            <a href="http://www.facebook.com/sharer.php?u=https%3A//mern-auth.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/intent/tweet?text=Check out this awesome MERN app I found called Auth&url=https%3A//mern-auth.herokuapp.com/%2F" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
