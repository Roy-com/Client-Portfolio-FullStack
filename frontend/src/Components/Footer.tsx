import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" style={{minHeight:"30vh"}}>
    <div className="container">
        <h3>Ermal Aliraj</h3>
        <p>Let me know if you have any suggestions via email</p>
        <div className="social-links">
            <a href="#" className="twitter" target="_blank">
                <i className="bi bi-twitter"></i>
            </a>
            <a href="https://github.com/ermalaliraj" className="facebook" target="_blank">
                <i className="bi bi-github"></i>
            </a>
            <a href="#" className="instagram" target="_blank">
                <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/aliraj/?originalSubdomain=it" className="linkedin" target="_blank">
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
        <div className="copyright">
            &copy; Copyright <strong><span>Ermal</span></strong>. All Rights Reserved
        </div>
    </div>
</footer>
  )
}
