import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
   
    <footer className="footer">
    <div className="footer_con">
      {/* <div className="newsletter_con">
        <div className="newsletter_text_con">
          <h1>Join our newsletter</h1>
          <p>we'll send a nice letter once per. No spam.</p>
        </div>
        <div className="newsletter_form">
          <form action="">
            <div className="input_con">
            <input type="text" />
            <input type="submit" />
            </div>
           
          </form>
        </div>
      </div> */}
      <div className="footer_bottom_con">
      <ul className="socials">
        <li><Link className="logo footer-logo">Inkfor<span>hearts</span></Link></li>
        <li className="socials_list">
          <Link>  <i class="fa-brands fa-x-twitter"></i></Link>
          <Link> <i class="fa-brands fa-instagram"></i></Link>
          <Link> <i class="fa-brands fa-tiktok"></i> </Link>
        </li>
        <li className='reserve'>@2024 inkforhearts all rights reserved.</li>
      </ul>
      <ul className="quicklinks_con">
        <li className="links-head"> Quick links</li>
        <li>
        <Link className="links">sign up</Link>
        </li>
        <li>
        <Link className="links">my Account</Link>
        </li>
       
      </ul>
      <ul className="legal_con">
        <li className='links-head'>
      legal
        </li>
        <li>
        <Link className="legal_link">terms and condition</Link>
        </li>
        <li><Link className="legal_link">privacy policy</Link></li>
       
       <li>
       <Link className="legal_link">faq</Link>
       </li>
       
        
        
      </ul>
        <ul className="contact_con">
          <li className='links-head'>contact us</li>
          <li className='contact_text'>Have a question ? reach out to our friendly customer support team anytime</li>
        </ul>
      </div>
    </div>
    </footer>

  
    </>
  )
}
