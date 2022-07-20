import React from 'react'

function Footer() {
  
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
        <div className="container-fluid p-5">
            <div className="title"><h2>follow us</h2></div>
            <div className="content">
            <div className="social-media-footer ">
                            <a href="https://github.com/mezieb" target="blank">
                                 <i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/mezieb" target="blank"> 
                            <i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/chimezie-okoro-767581107/" target="blank">
                      <i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="https://www.linkedin.com/in/chimezie-okoro-767581107/" target="blank">
                      <i className="fa-brands fa-twitter"></i></a>
                            </div>

            <p>© {currentYear},Powered by [DataWeb].</p>
        </div>
        </div>
        </div>
  )
}

export default Footer;